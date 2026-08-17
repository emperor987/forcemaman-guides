/**
 * Livraison des ebooks ForceMaman.
 *
 * Les fichiers PDF des 3 guides vivent dans /public/ebooks/ et sont servis
 * sur la page /commande/reussie UNE FOIS le paiement Stripe vérifié par
 * l'action Convex `payments:verifySession`.
 *
 * Pour remplacer les fichiers de démonstration par les vrais ebooks, dépose
 * les PDF à ces emplacements exacts :
 *   public/ebooks/liste-naissance.pdf
 *   public/ebooks/corps-apres.pdf
 *   public/ebooks/charge-mentale.pdf
 */
export const PRODUCT_FILES: Record<
  string,
  { title: string; files: string[] }
> = {
  "liste-naissance": {
    title: "Ma Liste Naissance Complète",
    files: ["/ebooks/liste-naissance.pdf"],
  },
  "corps-apres": {
    title: "Mon Corps Après l'Accouchement",
    files: ["/ebooks/corps-apres.pdf"],
  },
  "charge-mentale": {
    title: "Charge Mentale & 40 Premiers Jours",
    files: ["/ebooks/charge-mentale.pdf"],
  },
  bundle: {
    title: "Pack Complet ForceMaman",
    files: [
      "/ebooks/liste-naissance.pdf",
      "/ebooks/corps-apres.pdf",
      "/ebooks/charge-mentale.pdf",
    ],
  },
};

export const SUPPORT_EMAIL = "hello@forcemaman.fr";
