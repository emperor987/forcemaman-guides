/**
 * Query pour vérifier si un token de téléchargement est valide.
 */

import { query } from "./_generated/server";
import { v } from "convex/values";
import { verifyToken, PRODUCT_FILES } from "./lib/hmac";

export const verifyDownloadToken = query({
  args: { token: v.string() },
  handler: async (_ctx, args) => {
    const secret = process.env.DOWNLOAD_HMAC_SECRET;
    if (!secret) {
      return { valid: false as const };
    }
    const result = verifyToken(args.token, secret);
    if (!result) {
      return { valid: false as const };
    }
    return {
      valid: true as const,
      productId: result.productId,
      expiresAt: result.expiresAt,
      files: PRODUCT_FILES[result.productId] ?? [],
    };
  },
});
