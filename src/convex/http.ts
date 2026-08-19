/**
 * Convex HTTP Router.
 * - Auth routes
 * - Unsubscribe endpoint (RGPD)
 * - Direct PDF download endpoint via token verification + redirect
 */

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);

/**
 * GET /api/download?token=xxx&file=xxx.pdf
 * Vérifie le jeton HMAC puis redirige vers le PDF public.
 */
http.route({
  path: "/api/download",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const token = url.searchParams.get("token") ?? "";
    const requestedFile = url.searchParams.get("file") ?? undefined;

    if (!token) {
      return new Response("Token manquant.", { status: 400 });
    }

    try {
      const result = await ctx.runAction(api.downloads.getDownloadInfo, { token });

      if (!result.files || result.files.length === 0) {
        return new Response("Aucun fichier disponible.", { status: 404 });
      }

      // Si un fichier spécifique est demandé (pour le bundle)
      const targetFile = requestedFile
        ? result.files.find((f) => f.name === requestedFile)
        : result.files[0];

      if (!targetFile) {
        return new Response("Fichier non trouvé.", { status: 404 });
      }

      // Redirige vers le PDF public (noms aléatoires non devinables)
      return new Response(null, {
        status: 302,
        headers: {
          Location: targetFile.url,
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      return new Response(
        `Téléchargement impossible : ${message}`,
        { status: 403, headers: { "Content-Type": "text/plain; charset=utf-8" } },
      );
    }
  }),
});

/** Endpoint de désabonnement newsletter (RGPD). */
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
