/**
 * Action newsletter ForceMaman.
 *
 * Envoie le guide gratuit par email après inscription RGPD.
 * Stocke le consentement dans la table subscribers.
 * Rate limiting : max 3 tentatives par email par heure.
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { vly } from "../lib/vly-integrations";

const GUIDE_URL = "https://forcemaman.fr/ebooks/guide-gratuit-7-systemes.pdf";
const UNSUBSCRIBE_BASE = "https://forcemaman.fr/api/unsubscribe";

/** Envoie via Resend si une clé RESEND_API_KEY est présente (sinon null). */
async function sendViaResend(
  email: string,
  subject: string,
  html: string,
  text: string,
): Promise<boolean | null> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ForceMaman <bonjour@forcemaman.fr>",
      to: [email],
      subject,
      html,
      text,
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status} : ${body.slice(0, 200)}`);
  }
  return true;
}

/**
 * Inscription newsletter + envoi du guide gratuit.
 *
 * 1. Stocke le subscriber avec consentement RGPD
 * 2. Envoie l'email avec lien de désabonnement
 * 3. L'UI affiche l'écran de confirmation dans tous les cas
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
      "J'accepte de recevoir le guide gratuit et les emails de ForceMaman. Je peux me désinscrire en un clic à tout moment.";
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
      // Sinon on continue (la table peut ne pas exister encore)
    }

    // 2. Construire l'email avec lien de désabonnement
    const unsubscribeUrl = `${UNSUBSCRIBE_BASE}?email=${encodeURIComponent(email)}`;
    const subject = "Ton guide gratuit ForceMaman est prêt 🌿";
    const html = `
      <div style="background:#FAF6F1;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
        <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:20px;padding:36px 32px;color:#5C4A3A;">
          <p style="text-align:center;color:#8A9A7E;font-size:12px;letter-spacing:4px;text-transform:uppercase;margin:0 0 18px;">ForceMaman</p>
          <h1 style="font-size:26px;line-height:1.2;color:#5C4A3A;margin:0 0 12px;">Les 7 Systèmes ForceMaman</h1>
          <p style="font-size:15px;line-height:1.7;margin:0 0 20px;">Des repères simples pour respirer avec un nouveau-né. Ton guide est prêt, il t'attend juste en dessous.</p>
          <p style="text-align:center;margin:28px 0;">
            <a href="${GUIDE_URL}" style="display:inline-block;background:#C97D5D;color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-size:14px;">Télécharger ton guide gratuit</a>
          </p>
          <p style="font-size:13px;line-height:1.6;color:#8a7563;margin:0 0 8px;">Si le bouton ne s'affiche pas, copie ce lien : ${GUIDE_URL}</p>
          <p style="font-size:13px;line-height:1.6;color:#8a7563;margin:0 0 16px;">Pense à vérifier tes spams si tu ne vois pas cet email. Bienvenue jeune maman, on est ravies de t'accompagner.</p>
          <hr style="border:none;border-top:1px solid #E8DFD4;margin:20px 0;">
          <p style="font-size:12px;line-height:1.5;color:#a89888;margin:0;">Maria, fondatrice de ForceMaman</p>
          <p style="font-size:11px;line-height:1.5;color:#c4b8a8;margin:20px 0 0;">
            Tu reçois cet email car tu as téléchargé le guide gratuit sur <a href="https://forcemaman.fr" style="color:#C97D5D;text-decoration:underline;">forcemaman.fr</a>.
            <br><a href="${unsubscribeUrl}" style="color:#C97D5D;text-decoration:underline;">Se désinscrire en un clic</a>
          </p>
        </div>
      </div>
    `;
    const text = [
      "Les 7 Systèmes ForceMaman",
      "Des repères simples pour respirer avec un nouveau-né.",
      "",
      "Télécharge ton guide gratuit ici :",
      GUIDE_URL,
      "",
      "Pense à vérifier tes spams si tu ne vois pas cet email.",
      "Bienvenue jeune maman, on est ravies de t'accompagner.",
      "",
      "Maria, fondatrice de ForceMaman",
      "",
      "---",
      `Se désinscrire : ${unsubscribeUrl}`,
    ].join("\n");

    // 3. Envoyer l'email
    try {
      const viaResend = await sendViaResend(email, subject, html, text);
      if (viaResend !== null) {
        return { ok: true, sent: true, error: null };
      }
      const result = await vly.email.send({ to: email, subject, html, text });
      return {
        ok: true,
        sent: result.success !== false,
        error: result.error ?? null,
      };
    } catch (error) {
      return { ok: true, sent: false, error: String(error) };
    }
  },
});
