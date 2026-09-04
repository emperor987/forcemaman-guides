/**
 * Query pour vérifier si un token de téléchargement n'est pas expiré.
 * Pas de vérification HMAC ici (ça se passe côté action pour la sécurité).
 * Cette query sert uniquement à afficher/cacher l'UI côté client.
 */

import { query } from "./_generated/server";
import { v } from "convex/values";

/** Map productId vers les fichiers (pour l'UI) */
const PRODUCT_FILES: Record<string, string[]> = {
  "liste-naissance": ["liste-naissance.pdf"],
  "corps-apres": ["corps-apres.pdf"],
  "charge-mentale": ["charge-mentale.pdf"],
  bundle: [
    "Ma_Liste_Naissance_Complete.pdf",
    "Mon_Corps_Apres_Accouchement.pdf",
    "Charge_Mentale_40_Premiers_Jours.pdf",
    "ForceMaman_Recettes_PostPartum.pdf",
    "ForceMaman_Guide_Complet_PostPartum.pdf",
    "ForceMaman_Soin_Bebe_Apres_Accouchement.pdf",
  ],
};

export const verifyDownloadToken = query({
  args: { token: v.string() },
  handler: async (_ctx, args) => {
    try {
      const [encoded] = args.token.split(".");
      if (!encoded) return { valid: false as const };

      const decoded = Buffer.from(encoded, "base64url").toString("utf8");
      const [productId, expiresAtStr] = decoded.split(":");
      const expiresAt = parseInt(expiresAtStr, 10);

      if (!productId || isNaN(expiresAt)) return { valid: false as const };
      if (Date.now() > expiresAt) return { valid: false as const };

      return {
        valid: true as const,
        productId,
        expiresAt,
        files: PRODUCT_FILES[productId] ?? [],
      };
    } catch {
      return { valid: false as const };
    }
  },
});
