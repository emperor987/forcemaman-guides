/**
 * Paiement Stripe de ForceMaman.
 *
 * Le checkout est piloté par la clé secrète Stripe (STRIPE_SECRET_KEY) lue
 * dans l'environnement Convex. Trois actions :
 *
 *  - syncProducts            : crée / met à jour les produits et prix Stripe
 *  - createCheckoutSession   : crée une session de paiement
 *  - verifySession           : vérifie qu'une session est bien payée
 *
 * Rate limiting : max 5 créations de session par produit par minute,
 * max 10 vérifications par minute (en mémoire, reset à chaque cold start).
 */

"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";

export const PRODUCTS: Record<
  string,
  { name: string; unitAmountCents: number }
> = {
  "liste-naissance": {
    name: "Ma Liste Naissance Complète",
    unitAmountCents: 790,
  },
  "corps-apres": {
    name: "Mon Corps Après l'Accouchement",
    unitAmountCents: 990,
  },
  "charge-mentale": {
    name: "Charge Mentale & 40 Premiers Jours",
    unitAmountCents: 1190,
  },
  bundle: { name: "Pack Complet ForceMaman", unitAmountCents: 2290 },
};

const STRIPE_API = "https://api.stripe.com/v1";
const SITE_URL = "https://forcemaman.fr";

/* ── Rate limiting en mémoire ───────────────────────────────────────── */

const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string, maxPerMinute: number): void {
  const now = Date.now();
  const entry = rateBuckets.get(key);

  if (entry && entry.resetAt > now) {
    if (entry.count >= maxPerMinute) {
      throw new Error(
        "Trop de requêtes. Réessaie dans quelques secondes.",
      );
    }
    entry.count++;
  } else {
    rateBuckets.set(key, { count: 1, resetAt: now + 60_000 });
  }
}

/* ── Stripe helpers ─────────────────────────────────────────────────── */

function stripeSecret(): string {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY est manquante. Colle ta clé secrète Stripe dans l'onglet Keys / API keys du projet.",
    );
  }
  return key;
}

async function stripeFetch(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers ?? {});
  headers.set("Authorization", `Bearer ${stripeSecret()}`);
  const res = await fetch(`${STRIPE_API}${path}`, { ...init, headers });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Stripe ${res.status} : ${JSON.stringify(body)}`);
  }
  return body as Record<string, any>;
}

const formEncode = (data: Record<string, string | number>) =>
  Object.entries(data)
    .map(
      ([k, value]) =>
        `${encodeURIComponent(k)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");

async function findOrCreateProduct(productId: string) {
  const cfg = PRODUCTS[productId];
  const list = (await stripeFetch(
    "/products?limit=100",
  )) as unknown as {
    data: { id: string; metadata: Record<string, string> }[];
  };
  const existing = list.data.find(
    (p) => p.metadata?.forceMamanId === productId,
  );
  if (existing) return existing.id;
  const created = (await stripeFetch("/products", {
    method: "POST",
    body: formEncode({
      name: cfg.name,
      tax_code: "txcd_10000000",
      "metadata[forceMamanId]": productId,
      "metadata[marca]": "ForceMaman",
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })) as unknown as { id: string };
  return created.id;
}

async function findOrCreatePrice(
  stripeProductId: string,
  productId: string,
) {
  const cfg = PRODUCTS[productId];
  const list = (await stripeFetch(
    `/prices?product=${stripeProductId}&limit=100`,
  )) as unknown as { data: { id: string; unit_amount: number }[] };
  const existing = list.data.find(
    (p) => p.unit_amount === cfg.unitAmountCents,
  );
  if (existing) return existing.id;
  const created = (await stripeFetch("/prices", {
    method: "POST",
    body: formEncode({
      product: stripeProductId,
      unit_amount: cfg.unitAmountCents,
      currency: "eur",
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })) as unknown as { id: string };
  return created.id;
}

async function resolvePriceId(productId: string) {
  const stripeProductId = await findOrCreateProduct(productId);
  return await findOrCreatePrice(stripeProductId, productId);
}

/* ── Actions ────────────────────────────────────────────────────────── */

/**
 * Crée ou retrouve les produits et prix ForceMaman dans Stripe.
 * `bun convex run payments:syncProducts`
 */
export const syncProducts = action({
  args: {},
  handler: async () => {
    stripeSecret();
    const priceIds: Record<string, string> = {};
    for (const productId of Object.keys(PRODUCTS)) {
      priceIds[productId] = await resolvePriceId(productId);
    }
    return { ok: true, priceIds };
  },
});

/**
 * Crée une session de checkout Stripe.
 */
export const createCheckoutSession = action({
  args: {
    productId: v.string(),
    mode: v.optional(
      v.union(v.literal("hosted"), v.literal("embedded")),
    ),
  },
  handler: async (_ctx, args) => {
    // Rate limiting : max 5 sessions / produit / minute
    checkRateLimit(`checkout:${args.productId}`, 5);

    if (!PRODUCTS[args.productId]) {
      throw new Error(`Produit inconnu : ${args.productId}`);
    }
    const priceId = await resolvePriceId(args.productId);
    const mode = args.mode ?? "hosted";

    if (mode === "embedded") {
      const session = (await stripeFetch("/checkout/sessions", {
        method: "POST",
        body: formEncode({
          mode: "payment",
          ui_mode: "embedded_page",
          "payment_method_types[0]": "card",
          "line_items[0][price]": priceId,
          "line_items[0][quantity]": 1,
          "managed_payments[enabled]": "false",
          return_url: `${SITE_URL}/commande/reussie?session_id={CHECKOUT_SESSION_ID}`,
          "metadata[productId]": args.productId,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })) as unknown as { client_secret: string };
      const publishableKey =
        process.env.VITE_STRIPE_PUBLISHABLE_KEY ??
        process.env.STRIPE_PUBLISHABLE_KEY ??
        "";
      return {
        url: null,
        clientSecret: session.client_secret,
        publishableKey,
      };
    }

    const session = (await stripeFetch("/checkout/sessions", {
      method: "POST",
      body: formEncode({
        mode: "payment",
        "payment_method_types[0]": "card",
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": 1,
        "managed_payments[enabled]": "false",
        success_url: `${SITE_URL}/commande/reussie?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${SITE_URL}/guides/${args.productId}`,
        "metadata[productId]": args.productId,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })) as unknown as { url: string };
    return {
      url: session.url,
      clientSecret: null,
      publishableKey: null,
    };
  },
});

/**
 * Vérifie qu'une session de checkout a bien été payée.
 */
export const verifySession = action({
  args: { sessionId: v.string() },
  handler: async (_ctx, args) => {
    // Rate limiting : max 10 vérifications / minute
    checkRateLimit("verify", 10);

    if (!args.sessionId) return { paid: false as const };
    const session = (await stripeFetch(
      `/checkout/sessions/${args.sessionId}`,
    )) as unknown as {
      payment_status: string;
      metadata?: Record<string, string>;
      customer_details?: { email?: string };
      amount_total?: number;
    };
    const paid = session.payment_status === "paid";
    return {
      paid,
      productId: session.metadata?.productId ?? null,
      customerEmail: session.customer_details?.email ?? null,
      amountTotal: session.amount_total ?? null,
    };
  },
});
