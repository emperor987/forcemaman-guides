/**
 * Livraison des ebooks ForceMaman.
 *
 * Les PDFs des 3 guides payants vivent dans private/ebooks/ (protégés).
 * Le téléchargement se fait via un jeton HMAC signé généré côté Convex
 * après vérification du paiement Stripe (actions downloads:createDownloadToken
 * et downloads:getEbookData).
 *
 * Le guide gratuit (guide-gratuit-7-systemes.pdf) reste dans public/ebooks/
 * car il est offert gratuitement en échange d'une adresse email.
 */

export const PRODUCT_NAMES: Record<string, string> = {
  "liste-naissance": "Ma Liste Naissance Complète",
  "corps-apres": "Mon Corps Après l'Accouchement",
  "charge-mentale": "Charge Mentale & 40 Premiers Jours",
  bundle: "Pack Complet ForceMaman",
};

export const SUPPORT_EMAIL = "hello@forcemaman.store";
