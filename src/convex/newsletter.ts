"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { vly } from "../lib/vly-integrations";

const GUIDE_URL = "https://forcemaman.fr/ebooks/guide-gratuit-7-systemes.pdf";

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
 * Capture email du guide gratuit. Envoie « Les 7 Systèmes ForceMaman »
 * par email (lien de téléchargement) via la passerelle VLY, puis renvoie
 * le statut d'envoi. L'UI affiche l'écran de confirmation dans tous les cas,
 * avec un lien de téléchargement direct en secours.
 */
export const subscribe = action({
  args: { email: v.string() },
  handler: async (_ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Adresse email invalide");
    }

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
          <p style="font-size:13px;line-height:1.6;color:#8a7563;margin:0;">Pense à vérifier tes spams si tu ne vois pas cet email. Bienvenue jeune maman, on est ravies de t'accompagner.</p>
          <p style="font-size:14px;font-style:italic;margin:24px 0 0;">Maria, fondatrice de ForceMaman</p>
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
    ].join("\n");

    try {
      // Resend d'abord (si configuré), sinon la passerelle VLY.
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
      // L'écran de confirmation s'affiche quand même (téléchargement direct).
      return { ok: true, sent: false, error: String(error) };
    }
  },
});
