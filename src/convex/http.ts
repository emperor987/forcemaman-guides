/**
 * Convex HTTP Router.
 * - Auth routes
 * - Unsubscribe endpoint (RGPD)
 */

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);

/**
 * Endpoint de désabonnement newsletter (RGPD).
 * GET /api/unsubscribe?email=user@example.com
 *
 * Appelé depuis le lien "Se désinscrire" dans les emails.
 * Redirige vers une page de confirmation.
 */
http.route({
  path: "/api/unsubscribe",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return new Response(
        `<html><body style="font-family:sans-serif;text-align:center;padding:60px 20px;">
          <h2>Lien invalide</h2>
          <p>Le lien de désabonnement est incorrect.</p>
        </body></html>`,
        {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        },
      );
    }

    try {
      await ctx.runMutation("newsletterSubscribers:unsubscribe" as any, {
        email: email.toLowerCase().trim(),
      });
    } catch {
      // Ignore les erreurs (email peut ne pas exister)
    }

    const siteUrl = process.env.SITE_URL || "https://forcemaman.store";
    return new Response(
      `<html><body style="font-family:sans-serif;text-align:center;padding:60px 20px;background:#FAF6F1;color:#5C4A3A;">
        <h2 style="font-size:24px;margin-bottom:12px;">Désabonnement confirmé</h2>
        <p style="color:#8a7563;">Tu ne recevras plus d'emails de ForceMaman.</p>
        <p style="margin-top:24px;"><a href="${siteUrl}" style="color:#C97D5D;">Retour au site</a></p>
      </body></html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
        },
      },
    );
  }),
});

export default http;
