/**
 * Paiements Stripe (Payment Links).
 *
 * Chaque produit a un lien de paiement Stripe dédié, créé dans ton dashboard
 * Stripe (Produits → Payment Links). Colle ici les URLs exactes une fois tes
 * produits créés :
 *
 *   liste-naissance : https://buy.stripe.com/...
 *   corps-apres     : https://buy.stripe.com/...
 *   charge-mentale  : https://buy.stripe.com/...
 *   bundle          : https://buy.stripe.com/...
 *
 * Tant qu'un lien n'est pas configuré, le bouton affiche un message clair
 * (paiement en cours d'activation) au lieu de rester silencieux.
 */
export const stripePaymentLinks: Record<string, string> = {
  "liste-naissance": "",
  "corps-apres": "",
  "charge-mentale": "",
  bundle: "",
};

export function getCheckoutUrl(productId: string): string | null {
  const link = stripePaymentLinks[productId]?.trim();
  return link && /^https:\/\/buy\.stripe\.com\//.test(link) ? link : null;
}

/**
 * Ouvre le checkout Stripe si le lien est configuré. Retourne `false` si le
 * paiement n'est pas encore activé, pour que l'UI puisse afficher un message.
 */
export function openCheckout(productId: string): boolean {
  const url = getCheckoutUrl(productId);
  if (!url) return false;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}
