/**
 * Actions Convex pour les jetons de téléchargement sécurisés.
 * Tout le code crypto est ici (fichier "use node").
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { createHmac, timingSafeEqual } from "crypto";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const STRIPE_API = "https://api.stripe.com/v1";
const TOKEN_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes
const SITE_URL = process.env.SITE_URL || "https://forcemaman.fr";

const PRODUCT_FILES: Record<string, string[]> = {
  "liste-naissance": ["liste-naissance.pdf"],
  "corps-apres": ["corps-apres.pdf"],
  "charge-mentale": ["charge-mentale.pdf"],
  bundle: ["liste-naissance.pdf", "corps-apres.pdf", "charge-mentale.pdf"],
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

function stripeSecret(): string {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY manquante.");
  return key;
}

async function stripeFetch(path: string) {
  const res = await fetch(`${STRIPE_API}${path}`, {
    headers: { Authorization: `Bearer ${stripeSecret()}` },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Stripe ${res.status} : ${JSON.stringify(body)}`);
  return body as Record<string, any>;
}

/** Génère un jeton HMAC signé. */
function signToken(productId: string, expiresAt: number): string {
  const secret = hmacSecret();
  const payload = `${productId}|${expiresAt}`;
  const hmac = createHmac("sha256", secret).update(payload).digest("hex");
  const encoded = Buffer.from(`${productId}:${expiresAt}`).toString("base64url");
  return `${encoded}.${hmac}`;
}

/** Vérifie un jeton HMAC (timing-safe). */
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

/**
 * Crée un jeton de téléchargement sécurisé après vérification du paiement.
 */
export const createDownloadToken = action({
  args: {
    sessionId: v.string(),
    productId: v.string(),
  },
  handler: async (_ctx, args) => {
    if (!PRODUCT_FILES[args.productId]) {
      throw new Error(`Produit inconnu : ${args.productId}`);
    }

    const session = (await stripeFetch(
      `/checkout/sessions/${args.sessionId}`,
    )) as unknown as {
      payment_status: string;
      metadata?: Record<string, string>;
    };

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
      downloadUrl: `${SITE_URL}/api/download/${token}`,
    };
  },
});

/**
 * Lit les ebook PDFs et les renvoie en base64 pour téléchargement.
 */
export const getEbookData = action({
  args: { token: v.string() },
  handler: async (_ctx, args) => {
    const result = verifyHmac(args.token);
    if (!result) {
      throw new Error("Jeton invalide ou expiré. Demande un nouveau lien.");
    }

    const files = PRODUCT_FILES[result.productId];
    if (!files || files.length === 0) {
      throw new Error("Aucun fichier pour ce produit.");
    }

    const baseDir = join(process.cwd(), "private", "ebooks");
    const results: { name: string; data: string }[] = [];

    for (const fileName of files) {
      const filePath = join(baseDir, fileName);
      if (!existsSync(filePath)) {
        throw new Error(`Fichier non trouvé : ${fileName}`);
      }
      const buffer = readFileSync(filePath);
      results.push({ name: fileName, data: buffer.toString("base64") });
    }

    return { files: results, expiresAt: result.expiresAt };
  },
});
