import { cn } from "@/lib/utils";

const ITEMS = [
  "Téléchargement immédiat",
  "Paiement sécurisé Stripe",
  "Écrit par une sage-femme",
  "Remboursement 14 jours",
  "40 pages de contenu",
  "Sans culpabilité",
];

const Separator = () => (
  <span aria-hidden="true" className="mx-5 text-brand-terracotta/80">
    ✿
  </span>
);

/**
 * Bandeau défilant en CSS pur (zéro JS, GPU friendly, pause au survol,
 * désactivé si l'utilisateur préfère réduire les animations). Signature
 * visuelle ForceMaman : rappelle les engagements de la marque d'un seul
 * regard, entre les sections.
 */
export default function Marquee({ className }: { className?: string }) {
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center py-3.5 text-[11px] uppercase tracking-[0.22em] text-foreground/60"
        >
          {ITEMS.map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center">
              <Separator />
              <span>{item}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "marquee relative border-y border-border/60 bg-[color-mix(in_oklab,var(--card)_45%,var(--background))]",
        className,
      )}
    >
      <span className="sr-only">
        Téléchargement immédiat, paiement sécurisé Stripe, écrit par une
        sage-femme, remboursement 14 jours, 40 pages de contenu, sans
        culpabilité.
      </span>
      {track}
    </div>
  );
}
