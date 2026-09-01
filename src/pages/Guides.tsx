import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { libraryItems, type LibraryItem } from "@/lib/ebooks";
import coverListe from "@/assets/covers/liste-naissance.svg";
import coverCorps from "@/assets/covers/corps-apres.svg";
import coverCharge from "@/assets/covers/charge-mentale.svg";
import coverBundle from "@/assets/covers/bundle.svg";
import coverRecettes from "@/assets/covers/recettes-postpartum.svg";
import coverGuideComplet from "@/assets/covers/guide-complet-postpartum.svg";
import coverSoinBebe from "@/assets/covers/soin-bebe.svg";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const COVER_MAP: Record<string, string> = {
  "liste-naissance": coverListe,
  "corps-apres": coverCorps,
  "charge-mentale": coverCharge,
  "recettes-postpartum": coverRecettes,
  "guide-complet-postpartum": coverGuideComplet,
  "soin-bebe": coverSoinBebe,
  bundle: coverBundle,
};

const heroBullets = [
  "Moins de charge mentale.",
  "Moins d'oublis.",
  "Moins de stress dans la préparation.",
  "Plus de temps avec ton bébé.",
];

/** Styles de badge + ligne colorée, copiés du référence */
const badgeMeta: Record<LibraryItem["badge"], { label: string; line: string; dot: string; text: string }> = {
  populaire: { label: "📥 Le plus téléchargé", line: "#C6B39A", dot: "#C6B39A", text: "#8B7658" },
  essentiel: { label: "✨ Essentiel", line: "#A9B6A4", dot: "#A9B6A4", text: "#6E7C69" },
  temps: { label: "💛 Gain de temps", line: "#BFB4A6", dot: "#BFB4A6", text: "#847A6C" },
};

const typeLabel = (item: LibraryItem) =>
  item.id === "bundle" ? "Pack" : "Guide";

const CARD_CLASS =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-[color-mix(in_oklab,var(--background)_60%,white)] px-7 pb-7 pt-8 text-left transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-[2px] hover:border-foreground/20 hover:shadow-[0_24px_60px_-36px_rgba(35,33,32,0.22)] sm:px-8 sm:pb-8 sm:pt-9";

function ResourceCard({ item, index }: { item: LibraryItem; index: number }) {
  const meta = badgeMeta[item.badge];
  return (
    <Reveal delay={(index % 3) * 60}>
      <Link to={item.href} className={CARD_CLASS}>
        {/* Halo d'accent par carte, révélé au survol (signature ForceMaman) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 size-52 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 ease-out group-hover:opacity-30"
          style={{ background: meta.line }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-40 opacity-60 transition-[transform,opacity] duration-700 ease-out group-hover:scale-x-100 group-hover:opacity-100"
          style={{ background: meta.line }}
        />
        {item.badgeLabel && (
          <span className="absolute right-6 top-6 rounded-full border border-foreground/12 bg-background/70 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-foreground/60 backdrop-blur">
            {meta.label}
          </span>
        )}
        {COVER_MAP[item.id] && (
          <div className="mb-5 overflow-hidden rounded-2xl bg-muted">
            <img
              src={COVER_MAP[item.id]}
              alt={`Couverture ${item.title}`}
              width={600}
              height={800}
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-[5px] w-[5px] rounded-full"
            style={{ background: meta.dot }}
          />
          <span
            className="text-[0.6rem] font-medium uppercase tracking-[0.24em]"
            style={{ color: meta.text }}
          >
            {typeLabel(item)}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-[1.35rem] leading-[1.2] tracking-[-0.005em] text-foreground sm:text-[1.5rem]">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.9rem] leading-[1.65] text-foreground/60">
          {item.benefit}
        </p>
        <div className="mt-8 flex items-center justify-between gap-3">
          <span
            className="font-serif text-xl leading-none"
            style={{ color: meta.text }}
          >
            {item.price}
          </span>
          <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/70 transition-transform duration-500 ease-out group-hover:translate-x-1">
            {item.id === "bundle" ? "Découvrir le pack" : "Voir le guide"}
            <ArrowRight className="size-3" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

const faqItems = [
  {
    question: "Les guides sont-ils vraiment complets ?",
    answer:
      "Oui. Chaque guide est écrit par une ancienne sage-femme, relu avec rigueur, et conçu pour être lu sur téléphone comme sur ordinateur.",
  },
  {
    question: "Comment vais-je recevoir les guides ?",
    answer:
      "Ils arrivent par email, au format PDF, dès le paiement validé. Tu peux les télécharger autant de fois que tu le souhaites.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer:
      "Oui. Les paiements passent par Stripe, un leader mondial du paiement en ligne. Aucune donnée bancaire n'est stockée sur le site.",
  },
  {
    question: "Puis-je me faire rembourser ?",
    answer:
      "Oui, sous 14 jours après l'achat. Écris-nous à hello@forcemaman.store avec ton numéro de commande, nous traitons ta demande sous 48 heures.",
  },
];

const siteOrigin = typeof window !== "undefined" ? window.location.origin : "https://forcemaman.store";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "La Bibliothèque des Guides ForceMaman",
    description:
      "Les guides post-partum de ForceMaman : liste de naissance, corps après l'accouchement, charge mentale, recettes, guide complet, soin bébé, pack complet et ressources gratuites.",
    url: `${siteOrigin}/guides`,
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ma Liste Naissance Complète",
          url: `${siteOrigin}/guides/liste-naissance`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mon Corps Après l'Accouchement",
          url: `${siteOrigin}/guides/corps-apres`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charge Mentale & 40 Premiers Jours",
          url: `${siteOrigin}/guides/charge-mentale`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Recettes Post-Partum",
          url: `${siteOrigin}/guides/recettes-postpartum`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Guide Complet Post-Partum",
          url: `${siteOrigin}/guides/guide-complet-postpartum`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Soin Bébé après l'Accouchement",
          url: `${siteOrigin}/guides/soin-bebe`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Pack Complet ForceMaman",
          url: `${siteOrigin}/guides/bundle`,
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteOrigin}/` },
      { "@type": "ListItem", position: 2, name: "Nos Guides", item: `${siteOrigin}/guides` },
    ],
  },
];

export default function Guides() {
  const popular = libraryItems.filter((item) => item.featured);
  const guides = libraryItems.filter((item) => item.id !== "bundle");
  const freebies = libraryItems.filter((item) => item.id === "bundle");

  return (
    <Layout>
      <Seo
        title="Nos Guides · ebooks post-partum par une sage-femme · ForceMaman"
        description="6 guides post-partum PDF : Ma Liste Naissance, Mon Corps Après l'Accouchement, Charge Mentale, Recettes, Guide Complet, Soin Bébé. Téléchargement immédiat, paiement Stripe sécurisé."
        path="/guides"
        keywords="guides post-partum, ebook post-partum, liste naissance, corps après accouchement, charge mentale, recettes post-partum, soin bébé, guide maman, PDF télécharger, pack complet"
        jsonLd={jsonLd}
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        {/* ============ HERO ============ */}
        <Reveal>
          <section className="pt-6 text-center sm:pt-14">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50">
              La Bibliothèque des Guides
            </p>
            <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Les guides qui t'accompagnent{" "}
              <span className="italic">après l'arrivée de bébé.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-foreground/65 sm:text-base">
              Six ebooks PDF et un pack complet, écrits par une sage-femme, à
              télécharger immédiatement après le paiement.
            </p>
            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-1.5 text-sm text-foreground/70">
              {heroBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-lg text-sm text-foreground/55">
              Chaque guide est conçu pour être lu en quelques minutes, sur
              téléphone comme sur ordinateur, et conservé toute la vie.
            </p>
          </section>
        </Reveal>

        {/* ============ LES PLUS POPULAIRES ============ */}
        <section className="cv-auto mt-20">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50">
                Populaires
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Les guides préférés des mamans
              </h2>
            </div>
          </Reveal>
          {popular.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {popular.map((item, i) => (
                <ResourceCard key={item.id} item={item} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-sm text-foreground/55">
              Aucun guide ne correspond à ta recherche.
            </p>
          )}
        </section>

        {/* ============ LES GUIDES ============ */}
        <section id="guides" className="cv-auto mt-24 scroll-mt-24 sm:mt-32">
          <Reveal>
            <header className="mb-10 max-w-2xl">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50">
                Catégorie
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Les guides
              </h2>
              <p className="mt-3 text-sm text-foreground/60">
                Des lectures courtes pour aller plus loin.
              </p>
            </header>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((item, i) => (
              <ResourceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* ============ PACK & GRATUITS ============ */}
        <section id="gratuits" className="cv-auto mt-24 scroll-mt-24 sm:mt-32">
          <Reveal>
            <header className="mb-10 max-w-2xl">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50">
                Catégorie
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Le pack & le guide gratuit
              </h2>
              <p className="mt-3 text-sm text-foreground/60">
                Tout en un avec 30% de réduction. Six guides pour le prix de quatre.
              </p>
            </header>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freebies.map((item, i) => (
              <ResourceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="cv-auto mt-28 border-t border-border/60 pt-16">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-center font-serif text-3xl text-foreground sm:text-4xl">
                Questions fréquentes
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-border/60">
              {faqItems.map((item, i) => (
                <Reveal key={item.question} delay={i * 40}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] text-foreground">
                      {item.question}
                      <span className="text-foreground/40 transition-transform group-open:rotate-45">
                        ＋
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
