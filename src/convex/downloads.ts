/**
 * Actions Convex pour les jetons de téléchargement sécurisés.
 *
 * Les PDFs sont stockés dans Convex File Storage.
 * Le flow : token HMAC vérifié → URL de storage signée → redirect.
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes
const SITE_URL = process.env.SITE_URL || "https://forcemaman.store";

// Convex File Storage IDs for each product's PDF
const PRODUCT_FILES: Record<string, { name: string; storageId: string }[]> = {
  "liste-naissance": [
    { name: "Ma_Liste_Naissance_Complete.pdf", storageId: "kg22qb5p54mgtamss1dcf6mw258cv77v" },
  ],
  "corps-apres": [
    { name: "Mon_Corps_Apres_Accouchement.pdf", storageId: "kg2fx1w1p8srng3tev3cyga1wh8cvqcf" },
  ],
  "charge-mentale": [
    { name: "Charge_Mentale_40_Premiers_Jours.pdf", storageId: "kg25k0vh48q44en77c3xdhjzsh8cv1nt" },
  ],
  "recettes-postpartum": [
    { name: "ForceMaman_Recettes_PostPartum.pdf", storageId: "kg286fq6zqfdwrakqjv95c1ern8cty2c" },
  ],
  "guide-complet-postpartum": [
    { name: "ForceMaman_Guide_Complet_PostPartum.pdf", storageId: "kg28mnf2kpqb5ma0zry9fhktqx8ctq7j" },
  ],
  "soin-bebe": [
    { name: "ForceMaman_Soin_Bebe_Apres_Accouchement.pdf", storageId: "kg27h9a6j3n90y5vpyffd2ygeh8ctxw4" },
  ],
  bundle: [
    { name: "Ma_Liste_Naissance_Complete.pdf", storageId: "kg22qb5p54mgtamss1dcf6mw258cv77v" },
    { name: "Mon_Corps_Apres_Accouchement.pdf", storageId: "kg2fx1w1p8srng3tev3cyga1wh8cvqcf" },
    { name: "Charge_Mentale_40_Premiers_Jours.pdf", storageId: "kg25k0vh48q44en77c3xdhjzsh8cv1nt" },
    { name: "ForceMaman_Recettes_PostPartum.pdf", storageId: "kg286fq6zqfdwrakqjv95c1ern8cty2c" },
    { name: "ForceMaman_Guide_Complet_PostPartum.pdf", storageId: "kg28mnf2kpqb5ma0zry9fhktqx8ctq7j" },
    { name: "ForceMaman_Soin_Bebe_Apres_Accouchement.pdf", storageId: "kg27h9a6j3n90y5vpyffd2ygeh8ctxw4" },
  ],
};

function hmacSecret(): string {
  const secret = process.env.DOWNLOAD_HMAC_SECRET;
  if (!secret) {
    throw new Error(
      "DOWNLOAD_HMAC_SECRET manquante. Ajoute-la dans l'onglet Keys du projet Convex.",
    );
  }
  return secret;
}

function signToken(productId: string, expiresAt: number): string {
  const secret = hmacSecret();
  const payload = `${productId}|${expiresAt}`;
  const hmac = createHmac("sha256", secret).update(payload).digest("hex");
  const encoded = Buffer.from(`${productId}:${expiresAt}`).toString("base64url");
  return `${encoded}.${hmac}`;
}

function verifyHmac(token: string): { productId: string; expiresAt: number } | null {
  try {
    const [encoded, providedHmac] = token.split(".");
    if (!encoded || !providedHmac) return null;

    const decoded = Buffer.from(encoded, "base64url").toString("utf8");
    const [productId, expiresAtStr] = decoded.split(":");
    const expiresAt = parseInt(expiresAtStr, 10);

    if (!productId || isNaN(expiresAt) || Date.now() > expiresAt) return null;

    const secret = hmacSecret();
    const payload = `${productId}|${expiresAt}`;
    const expectedHmac = createHmac("sha256", secret).update(payload).digest("hex");

    const valid = timingSafeEqual(
      Buffer.from(expectedHmac, "hex"),
      Buffer.from(providedHmac, "hex"),
    );
    if (!valid) return null;
    return { productId, expiresAt };
  } catch {
    return null;
  }
}

export const createDownloadToken = action({
  args: {
    sessionId: v.string(),
    productId: v.string(),
  },
  handler: async (_ctx, args) => {
    if (!PRODUCT_FILES[args.productId]) {
      throw new Error(`Produit inconnu : ${args.productId}`);
    }

    const STRIPE_API = "https://api.stripe.com/v1";
    const res = await fetch(`${STRIPE_API}/checkout/sessions/${args.sessionId}`, {
      headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` },
    });
    const session = await res.json();
    if (!res.ok) throw new Error(`Stripe error: ${JSON.stringify(session)}`);

    if (session.payment_status !== "paid") {
      throw new Error("Paiement non confirmé.");
    }
    if (session.metadata?.productId !== args.productId) {
      throw new Error("Le produit ne correspond pas à la session de paiement.");
    }

    const expiresAt = Date.now() + TOKEN_EXPIRY_MS;
    const token = signToken(args.productId, expiresAt);

    return {
      token,
      expiresAt,
      downloadUrl: `${SITE_URL}/api/download?token=${encodeURIComponent(token)}`,
    };
  },
});

/**
 * Vérifie un token et renvoie les infos de téléchargement.
 * Returns both `url` (Convex File Storage URL) and `file` (filename, for backward compat).
 */
export const getDownloadInfo = action({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const result = verifyHmac(args.token);
    if (!result) {
      throw new Error("Jeton invalide ou expiré. Demande un nouveau lien.");
    }

    const files = PRODUCT_FILES[result.productId];
    if (!files || files.length === 0) {
      throw new Error("Aucun fichier pour ce produit.");
    }

    const filesWithUrls = await Promise.all(
      files.map(async (f) => {
        const url = await ctx.storage.getUrl(f.storageId);
        return { name: f.name, file: f.name, url: url || "" };
      }),
    );

    return {
      files: filesWithUrls,
      expiresAt: result.expiresAt,
    };
  },
});
