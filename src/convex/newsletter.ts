/**
 * Action newsletter ForceMaman.
 *
 * Valide et enregistre le consentement newsletter dans Convex.
 * L'envoi des emails est géré séparément par le propriétaire du projet.
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";


/** Inscription newsletter et enregistrement du consentement. */
export const subscribe = action({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Adresse email invalide");
    }

    // 1. Stocker le subscriber avec consentement RGPD
    const consentText =
      "J'accepte de recevoir les conseils et les emails de ForceMaman. Je peux me désinscrire en un clic à tout moment.";
    try {
      await ctx.runMutation("newsletterSubscribers:subscribe" as any, {
        email,
        consentText,
      });
    } catch (e) {
      // Si le rate limiting bloque, on propage l'erreur
      if (e instanceof Error && e.message.includes("Trop de tentatives")) {
        throw e;
      }
    }

    return { ok: true };
  },
});
