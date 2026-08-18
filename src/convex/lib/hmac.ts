/**
 * Utilitaires HMAC pour les tokens de téléchargement.
 * Fichier neutre (pas "use node") utilisable par les actions ET les queries.
 */

import { createHmac, timingSafeEqual } from "crypto";

/** Génère un jeton HMAC signé pour un produit. */
export function signToken(
  productId: string,
  expiresAt: number,
  secret: string,
): string {
  const payload = `${productId}|${expiresAt}`;
  const hmac = createHmac("sha256", secret).update(payload).digest("hex");
  const encoded = Buffer.from(`${productId}:${expiresAt}`).toString(
    "base64url",
  );
  return `${encoded}.${hmac}`;
}

/** Vérifie un jeton HMAC et renvoie { productId, expiresAt } ou null. */
export function verifyToken(
  token: string,
  secret: string,
): { productId: string; expiresAt: number } | null {
  try {
    const [encoded, providedHmac] = token.split(".");
    if (!encoded || !providedHmac) return null;

    const decoded = Buffer.from(encoded, "base64url").toString("utf8");
    const [productId, expiresAtStr] = decoded.split(":");
    const expiresAt = parseInt(expiresAtStr, 10);

    if (!productId || isNaN(expiresAt) || Date.now() > expiresAt) return null;

    const payload = `${productId}|${expiresAt}`;
    const expectedHmac = createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

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

/** Map productId vers les fichiers PDF */
export const PRODUCT_FILES: Record<string, string[]> = {
  "liste-naissance": ["liste-naissance.pdf"],
  "corps-apres": ["corps-apres.pdf"],
  "charge-mentale": ["charge-mentale.pdf"],
  bundle: ["liste-naissance.pdf", "corps-apres.pdf", "charge-mentale.pdf"],
};
