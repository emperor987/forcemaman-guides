/**
 * Mutations RGPD-conformes pour la newsletter ForceMaman.
 *
 * - Stocke le consentement (date + texte de la case cochée)
 * - Gère le désabonnement
 * - Rate limiting intégré (max 3 inscriptions par email par heure)
 */

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 heure
const MAX_REQUESTS_PER_WINDOW = 3;

/**
 * Vérifie le rate limit pour une clé donnée.
 * Retourne true si l'action est autorisée, false sinon.
 */
async function checkRateLimit(
  ctx: { db: any },
  key: string,
): Promise<boolean> {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;

  // Chercher un enregistrement de rate limit récent pour cette clé
  const existing = await ctx.db
    .query("rateLimits")
    .withIndex("by_key", (q: any) => q.eq("key", key))
    .first();

  if (existing && existing.windowStart > windowStart) {
    // Fenêtre encore active
    if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
      return false; // Trop de requêtes
    }
    // Incrémenter le compteur
    await ctx.db.patch(existing._id, { count: existing.count + 1 });
    return true;
  }

  // Nouvelle fenêtre ou première requête
  if (existing) {
    await ctx.db.patch(existing._id, {
      windowStart: now,
      count: 1,
    });
  } else {
    await ctx.db.insert("rateLimits", {
      key,
      windowStart: now,
      count: 1,
    });
  }
  return true;
}

/**
 * Inscrit un email à la newsletter avec consentement RGPD.
 * Rate limité : max 3 tentatives par email par heure.
 */
export const subscribe = mutation({
  args: {
    email: v.string(),
    consentText: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();

    // Validation email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Adresse email invalide");
    }

    // Rate limiting
    const allowed = await checkRateLimit(ctx, `subscribe:${email}`);
    if (!allowed) {
      throw new Error(
        "Trop de tentatives. Réessaie dans quelques minutes.",
      );
    }

    // Vérifier si déjà inscrit
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q: any) => q.eq("email", email))
      .first();

    if (existing && !existing.unsubscribed) {
      // Déjà inscrit, on renvoie succès (idempotent)
      return { ok: true, alreadySubscribed: true };
    }

    if (existing && existing.unsubscribed) {
      // Réinscription : mettre à jour le consentement
      await ctx.db.patch(existing._id, {
        unsubscribed: false,
        unsubscribedAt: undefined,
        consentAt: Date.now(),
        consentText: args.consentText,
      });
      return { ok: true, resubscribed: true };
    }

    // Nouvelle inscription
    await ctx.db.insert("subscribers", {
      email,
      consentAt: Date.now(),
      consentText: args.consentText,
      unsubscribed: false,
    });

    return { ok: true, subscribed: true };
  },
});

/**
 * Désabonne un email de la newsletter.
 * Accessible via lien dans les emails (GET /api/unsubscribe?email=...).
 */
export const unsubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();

    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q: any) => q.eq("email", email))
      .first();

    if (!subscriber) {
      return { ok: true, message: "Email non trouvé, rien à faire." };
    }

    if (subscriber.unsubscribed) {
      return { ok: true, message: "Déjà désabonné." };
    }

    await ctx.db.patch(subscriber._id, {
      unsubscribed: true,
      unsubscribedAt: Date.now(),
    });

    return { ok: true, message: "Désabonnement confirmé." };
  },
});

/**
 * Vérifie si un email est abonné (pour l'UI).
 */
export const isSubscribed = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q: any) => q.eq("email", email))
      .first();

    return {
      subscribed: !!subscriber && !subscriber.unsubscribed,
    };
  },
});

/**
 * Nombre total d'abonnés (pour les stats internes).
 */
export const subscriberCount = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("subscribers").collect();
    const active = all.filter((s: any) => !s.unsubscribed);
    return { total: all.length, active: active.length };
  },
});
