"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";

/**
 * Paiement Stripe de ForceMaman.
 *
 * Le checkout est piloté par la clé secrète Stripe (STRIPE_SECRET_KEY) lue
 * dans l'environnement Convex (à coller dans l'onglet Keys / API keys du
 * projet). Trois actions :
 *
 *  - syncProducts            : crée / met à jour les 3 ebooks + le pack en
 *                              produits Stripe et renvoie leurs Price IDs.
 *                              À lancer une fois après avoir ajouté la clé :
 *                              `bun convex run payments:syncProducts`
 *  - createCheckoutSession   : crée une session de paiement et renvoie l'URL
 *                              Stripe vers laquelle rediriger l'acheteuse.
 *  - verifySession           : après redirection, vérifie que la session est
 *                              bien payée avant d'afficher les téléchargements.
 *
 * Livraison : les fichiers PDF vivent dans /public/ebooks/ (un fichier par
 * guide). Leur URL est servie sur la page /commande/reussie une fois le
 * paiement vérifié.
 */

export const PRODUCTS: Record<
  string,
  { name: string; unitAmountCents: number }
> = {
  "liste-naissance": { name: "Ma Liste Naissance Complète", unitAmountCents: 790 },
  "corps-apres": { name: "Mon Corps Après l'Accouchement", unitAmountCents: 990 },
  "charge-mentale": { name: "Charge Mentale & 40 Premiers Jours", unitAmountCents: 1190 },
  bundle: { name: "Pack Complet ForceMaman", unitAmountCents: 2290 },
};

const STRIPE_API = "https://api.stripe.com/v1";
const SITE_URL = "https://forcemaman.fr";

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

/** Retrouve ou crée le produit Stripe correspondant à un id interne. */
async function findOrCreateProduct(productId: string) {
  const cfg = PRODUCTS[productId];
  const list = (await stripeFetch(
    "/products?limit=100",
  )) as unknown as { data: { id: string; metadata: Record<string, string> }[] };
  const existing = list.data.find(
    (p) => p.metadata?.forceMamanId === productId,
  );
  if (existing) return existing.id;
  const created = (await stripeFetch("/products", {
    method: "POST",
    body: formEncode({
      name: cfg.name,
      // Code fiscal Stripe des livres électroniques (ebooks PDF).
      tax_code: "txcd_10000000",
      "metadata[forceMamanId]": productId,
      "metadata[marca]": "ForceMaman",
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })) as unknown as { id: string };
  return created.id;
}

/** Retrouve ou crée le prix (idempotent : réutilise le prix existant). */
async function findOrCreatePrice(stripeProductId: string, productId: string) {
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

/** Résout l'id interne ForceMaman vers un Price ID Stripe (en créant le
 *  produit / prix au besoin, de façon idempotente). */
async function resolvePriceId(productId: string) {
  const stripeProductId = await findOrCreateProduct(productId);
  return await findOrCreatePrice(stripeProductId, productId);
}

/**
 * Crée (ou retrouve) les 4 produits ForceMaman dans Stripe et renvoie
 * leurs Price IDs. À lancer une fois la clé STRIPE_SECRET_KEY posée :
 *   bun convex run payments:syncProducts
 */
export const syncProducts = action({
  args: {},
  handler: async () => {
    stripeSecret(); // échoue tôt si la clé n'est pas configurée
    const priceIds: Record<string, string> = {};
    for (const productId of Object.keys(PRODUCTS)) {
      priceIds[productId] = await resolvePriceId(productId);
    }
    return { ok: true, priceIds };
  },
});

/**
 * Crée une session de checkout Stripe pour un produit.
 *
 *  - mode "hosted"  : renvoie l'URL de la page de paiement hébergée Stripe.
 *  - mode "embedded": renvoie le clientSecret + la clé publiable pour
 *                      afficher le formulaire dans la page aux couleurs
 *                      ForceMaman (/paiement/:productId).
 *
 * Le formulaire embedded (ui_mode "embedded_page") est habillé aux couleurs
 * de la marque via les réglages de marque du dashboard Stripe (icône, logo,
 * couleur des boutons) : voir scripts/apply-stripe-branding.mjs.
 */
export const createCheckoutSession = action({
  args: {
    productId: v.string(),
    mode: v.optional(v.union(v.literal("hosted"), v.literal("embedded"))),
  },
  handler: async (_ctx, args) => {
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
          // L'apparence (icône, logo, couleur des boutons) est pilotée par les
          // réglages de marque du dashboard Stripe (Settings > Branding).
          // L'icône et le logo ForceMaman y sont déjà uploadés via l'API
          // Files (scripts/apply-stripe-branding.mjs).
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
        // Carte bancaire (Visa, Mastercard, CB…) : méthode activée par défaut
        // sur les comptes Stripe, explicitement demandée ici.
        "payment_method_types[0]": "card",
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": 1,
        // Les prix affichés (7,90 €, 9,90 €…) sont TTC : on désactive le
        // calcul de taxe automatique de Managed Payments pour que l'acheteuse
        // paie exactement le prix affiché sur le site.
        "managed_payments[enabled]": "false",
        success_url: `${SITE_URL}/commande/reussie?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${SITE_URL}/guides/${args.productId}`,
        "metadata[productId]": args.productId,
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })) as unknown as { url: string };
    return { url: session.url, clientSecret: null, publishableKey: null };
  },
});

/**
 * Vérifie qu'une session de checkout a bien été payée. Appelée par la page
 * /commande/reussie avant d'afficher les liens de téléchargement.
 */
export const verifySession = action({
  args: { sessionId: v.string() },
  handler: async (_ctx, args) => {
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
