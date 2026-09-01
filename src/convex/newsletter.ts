/**
 * Action newsletter ForceMaman.
 *
 * Envoie les premiers conseils par email via le service email intégré Freebuff (VLY).
 * Stocke le consentement RGPD dans la table subscribers.
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { vly } from "../lib/vly-integrations";

const SITE_URL = process.env.SITE_URL || "https://forcemaman.store";
const UNSUBSCRIBE_BASE = `${SITE_URL}/api/unsubscribe`;

/**
 * Inscription newsletter + envoi d'un message de bienvenue.
 * Utilise le service email intégré Freebuff (VLY).
 */
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

    // 2. Construire l'email avec lien de désabonnement
    const unsubscribeUrl = `${UNSUBSCRIBE_BASE}?email=${encodeURIComponent(email)}`;
    const subject = "Tes premiers conseils ForceMaman arrivent 🌿";
    const html = `
      <div style="background:#FAF6F1;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
        <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:20px;padding:36px 32px;color:#5C4A3A;">
          <p style="text-align:center;color:#8A9A7E;font-size:12px;letter-spacing:4px;text-transform:uppercase;margin:0 0 18px;">ForceMaman</p>
          <h1 style="font-size:26px;line-height:1.2;color:#5C4A3A;margin:0 0 12px;">Bienvenue chez ForceMaman</h1>
          <p style="font-size:15px;line-height:1.7;margin:0 0 20px;">Merci pour ton inscription. Tu vas recevoir tes premiers conseils par email dans quelques minutes.</p>
          <p style="font-size:13px;line-height:1.6;color:#8a7563;margin:0 0 16px;">Pense à vérifier tes spams si tu ne vois pas notre message. Bienvenue jeune maman, on est ravies de t'accompagner.</p>
          <hr style="border:none;border-top:1px solid #E8DFD4;margin:20px 0;">
          <p style="font-size:12px;line-height:1.5;color:#a89888;margin:0;">Maria, fondatrice de ForceMaman</p>
          <p style="font-size:11px;line-height:1.5;color:#c4b8a8;margin:20px 0 0;">
            Tu reçois cet email car tu as téléchargé le guide gratuit sur <a href="${SITE_URL}" style="color:#C97D5D;text-decoration:underline;">forcemaman.store</a>.
            <br><a href="${unsubscribeUrl}" style="color:#C97D5D;text-decoration:underline;">Se désinscrire en un clic</a>
          </p>
        </div>
      </div>
    `;
    const text = [
      "Bienvenue chez ForceMaman",
      "Merci pour ton inscription. Tu vas recevoir tes premiers conseils par email dans quelques minutes.",
      "",
      "Pense à vérifier tes spams si tu ne vois pas notre message.",
      "Bienvenue jeune maman, on est ravies de t'accompagner.",
      "",
      "Maria, fondatrice de ForceMaman",
      "",
      "---",
      `Se désinscrire : ${unsubscribeUrl}`,
    ].join("\n");

    // 3. Envoyer l'email via le service Freebuff (VLY)
    const result = await vly.email.send({ to: email, subject, html, text });

    if (result.success === false) {
      console.error("Erreur envoi email VLY:", result.error);
      // On ne bloque pas l'inscription même si l'email échoue
      // L'inscription reste enregistrée même si l'email échoue
    }

    return {
      ok: true,
      sent: result.success !== false,
      error: result.error ?? null,
    };
  },
});
