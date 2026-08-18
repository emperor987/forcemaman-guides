import { useMemo, useState } from "react";
import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { libraryItems, type LibraryItem } from "@/lib/ebooks";
import { ArrowRight, Search } from "lucide-react";

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
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px opacity-70"
          style={{ background: meta.line }}
        />
        {item.badgeLabel && (
          <span className="absolute right-6 top-6 rounded-full border border-foreground/12 bg-background/70 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-foreground/60 backdrop-blur">
            {meta.label}
          </span>
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
        <h3 className="mt-5 font-serif text-[1.35rem] leading-[1.2] tracking-[-0.005em] text-foreground sm:text-[1.5rem]">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.9rem] leading-[1.65] text-foreground/60">
          {item.benefit}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/70 transition-transform duration-500 ease-out group-hover:translate-x-1">
          {item.id === "bundle" ? "Découvrir le pack" : "Voir le guide"}
          <ArrowRight className="size-3" />
        </span>
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
      "Oui, sous 14 jours après l'achat. Écris-nous à hello@forcemaman.fr avec ton numéro de commande, nous traitons ta demande sous 48 heures.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
  name: "La Bibliothèque des Guides ForceMaman",
  description:
    "Les guides post-partum de ForceMaman : liste de naissance, corps après l'accouchement, charge mentale, pack complet et ressources gratuites.",
  url: "https://forcemaman.fr/guides",
  inLanguage: "fr-FR",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ma Liste Naissance Complète",
        url: "https://forcemaman.fr/guides/liste-naissance",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mon Corps Après l'Accouchement",
        url: "https://forcemaman.fr/guides/corps-apres",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Charge Mentale & 40 Premiers Jours",
        url: "https://forcemaman.fr/guides/charge-mentale",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pack Complet ForceMaman",
        url: "https://forcemaman.fr/guides/bundle",
      },
    ],
  },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://forcemaman.fr/" },
      { "@type": "ListItem", position: 2, name: "Nos Guides", item: "https://forcemaman.fr/guides" },
    ],
  },
];

export default function Guides() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      libraryItems.filter(
        (item) =>
          !q ||
          [item.title, item.benefit, item.badgeLabel].join(" ").toLowerCase().includes(q),
      ),
    [q],
  );

  const popular = visible.filter((item) => item.featured);
  const guides = visible.filter((item) => item.id !== "bundle");
  const freebies = visible.filter((item) => item.id === "bundle");

  return (
    <Layout>
      <Seo
        title="Nos Guides · ebooks post-partum par une sage-femme · ForceMaman"
        description="Découvre les guides ForceMaman : Ma Liste Naissance Complète, Mon Corps Après l'Accouchement, Charge Mentale & 40 Premiers Jours et le Pack Complet. PDF à téléchargement immédiat."
        path="/guides"
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
              Trois ebooks PDF et un pack complet, écrits par une sage-femme, à
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
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#gratuits"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.8rem] uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
              >
                Télécharger les ressources gratuites
              </a>
              <a
                href="#guides"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/25 px-7 text-[0.8rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground"
              >
                Découvrir les guides
              </a>
            </div>
          </section>
        </Reveal>

        {/* ============ RECHERCHE ============ */}
        <div id="ressources" className="mt-20 sm:mt-28 scroll-mt-24">
          <div className="mx-auto max-w-xl">
            <label htmlFor="search" className="sr-only">
              Rechercher une ressource
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="search"
                type="search"
                placeholder="Rechercher : liste naissance, corps, charge mentale…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-14 w-full rounded-full border border-border/70 bg-background pl-12 pr-5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/40 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* ============ LES PLUS POPULAIRES ============ */}
        <section className="mt-20">
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
        <section id="guides" className="mt-24 scroll-mt-24 sm:mt-32">
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
        <section id="gratuits" className="mt-24 scroll-mt-24 sm:mt-32">
          <Reveal>
            <header className="mb-10 max-w-2xl">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50">
                Catégorie
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Le pack & le guide gratuit
              </h2>
              <p className="mt-3 text-sm text-foreground/60">
                Tout en un avec 23% de réduction, ou commence gratuitement par
                Les 7 Systèmes ForceMaman.
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
        <section className="mt-28 border-t border-border/60 pt-16">
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
