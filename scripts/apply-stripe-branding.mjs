/**
 * Marque ForceMaman côté Stripe.
 *
 * Étape 1 (via API) : upload de l'icône (128px) et du logo (512px) sur
 * Stripe Files. Ces fichiers sont ensuite utilisables dans les réglages
 * de marque du dashboard.
 *
 * Étape 2 (dashboard uniquement) : Stripe ne permet pas de modifier le
 * branding d'un compte via l'API (403 sur POST /v1/account pour son
 * propre compte). Les couleurs se règlent dans :
 *   https://dashboard.stripe.com/settings/branding
 *   primary_color   : #C97D5D (bouton de paiement, terracotta)
 *   secondary_color : #FAF6F1 (accent, crème)
 *   Icon / Logo     : les fichiers uploadés (ou public/favicon-128x128.png
 *                     et public/favicon-512x512.png).
 *
 * Usage : STRIPE_SECRET_KEY=sk_... node scripts/apply-stripe-branding.mjs
 */
import { readFileSync } from "node:fs";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) throw new Error("STRIPE_SECRET_KEY manquante");

const API = "https://api.stripe.com/v1";
const FILES_API = "https://files.stripe.com/v1";

async function stripe(base, path, init = {}) {
  const headers = new Headers(init.headers ?? {});
  headers.set("Authorization", `Bearer ${key}`);
  const res = await fetch(`${base}${path}`, { ...init, headers });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Stripe ${res.status} : ${JSON.stringify(body)}`);
  return body;
}

async function uploadFile(filePath, purpose) {
  const buf = readFileSync(filePath);
  const form = new FormData();
  form.append("purpose", purpose);
  form.append(
    "file",
    new Blob([buf], { type: "image/png" }),
    filePath.split("/").pop(),
  );
  const file = await stripe(FILES_API, "/files", { method: "POST", body: form });
  console.log(`File ${purpose} :`, file.id, `(${file.filename})`);
  return file.id;
}

const iconId = await uploadFile("public/favicon-128x128.png", "business_icon");
const logoId = await uploadFile("public/favicon-512x512.png", "business_logo");

console.log("");
console.log("Fichiers prêts pour le branding :");
console.log("  Icon :", iconId);
console.log("  Logo :", logoId);
console.log("");
console.log("Stripe n'autorise pas la mise a jour du branding par API pour");
console.log("un compte standard (dashboard uniquement). Ouvre :");
console.log("  https://dashboard.stripe.com/settings/branding");
console.log("et applique :");
console.log("  Primary color   : #C97D5D");
console.log("  Secondary color : #FAF6F1");
console.log("  Icon / Logo     : les deux fichiers PNG (ou ceux du dossier public/).");

try {
  const account = await stripe(API, "/account", {
    method: "POST",
    body: new URLSearchParams({
      "branding[icon]": iconId,
      "branding[logo]": logoId,
      "branding[primary_color]": "#C97D5D",
      "branding[secondary_color]": "#FAF6F1",
    }),
  });
  console.log("Branding appliqué :", JSON.stringify(account.branding, null, 2));
} catch (error) {
  console.log("");
  console.log("(POST /v1/account refusé pour un compte standard :", error.message, ")");
}
