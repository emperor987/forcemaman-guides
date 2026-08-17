import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import EbookCover from "@/components/EbookCover";
import NewsletterBlock from "@/components/NewsletterBlock";
import {
  badgeStyles,
  libraryCategories,
  libraryItems,
  type LibraryItem,
} from "@/lib/ebooks";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CreditCard,
  RotateCcw,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Écrits par une sage-femme",
    text: "8 ans d'expérience et un vécu de maman, pour des repères fiables.",
  },
  {
    icon: Zap,
    title: "Téléchargement immédiat",
    text: "Ton PDF arrive par email dès l'achat, sur tous tes appareils.",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    text: "100 % Stripe. Aucune donnée bancaire n'est stockée sur le site.",
  },
  {
    icon: RotateCcw,
    title: "Remboursement 14 jours",
    text: "Si un guide n'est pas pour toi, on te rembourse sans discussion.",
  },
];

const faqItems = [
  {
    question: "Comment reçois-je les guides ?",
    answer:
      "Dès le paiement validé, tu reçois un lien de téléchargement par email. Les guides sont au format PDF, lisibles sur ordinateur, tablette ou téléphone, et imprimables si tu préfères le papier.",
  },
  {
    question: "Comment puis-je payer ?",
    answer:
      "Le paiement se fait par Stripe, de manière 100 % sécurisée, par carte bancaire. Aucune donnée bancaire n'est stockée sur notre site.",
  },
  {
    question: "Puis-je me faire rembourser ?",
    answer:
      "Oui, sous 14 jours après l'achat. Écris-nous à hello@forcemaman.fr avec ton numéro de commande, nous traitons ta demande sous 48 heures.",
  },
  {
    question: "Les guides remplacent-ils un avis médical ?",
    answer:
      "Non. Ce sont des outils d'information et d'accompagnement. En cas de doute ou de problème de santé, consulte ta sage-femme, ton médecin ou un professionnel de santé qualifié.",
  },
];

function ProductCard({ item, index }: { item: LibraryItem; index: number }) {
  return (
    <Reveal delay={(index % 3) * 80}>
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-bold transition-transform duration-300 hover:-translate-y-1">
        <div className="relative">
          <EbookCover
            title={item.title}
            accent={item.accent}
            className="w-full aspect-[16/9] rounded-none border-0 border-b-2"
            iconSize="h-10 w-10"
            titleSize="text-sm sm:text-base"
          />
          <span
            className={cn(
              "absolute left-3 top-3 z-10 rounded-full border-2 border-ink px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider shadow-[3px_3px_0_0_var(--ink)]",
              badgeStyles[item.badge],
            )}
          >
            {item.badgeLabel}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            {item.benefit}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t-2 border-ink/10 pt-5 mt-6">
            <span
              className={cn(
                "font-display text-xl font-bold",
                item.free ? "text-brand-sage" : "text-ink",
              )}
            >
              {item.price}
            </span>
            <Link
              to={item.href}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-ink px-4 py-2 text-sm font-semibold text-ink shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Découvrir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Guides() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const visibleItems = useMemo(
    () =>
      libraryItems.filter(
        (item) =>
          !q ||
          [item.title, item.benefit, item.badgeLabel]
            .join(" ")
            .toLowerCase()
            .includes(q),
      ),
    [q],
  );

  const featured = visibleItems.filter((item) => item.featured);
  const hasResults = visibleItems.length > 0;

  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                La bibliothèque
              </span>
              <h1 className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance">
                Des guides pour chaque étape, écrits par une{" "}
                <span className="text-primary">sage-femme</span>.
              </h1>
              <p className="mt-6 text-lg text-ink/75 text-balance">
                De la liste de naissance aux premières semaines, des guides
                clairs, bienveillants et sans jargon pour traverser le
                post-partum accompagnée.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 70}>
                <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 shadow-bold">
                  <benefit.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
                    {benefit.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ============ RECHERCHE ============ */}
          <Reveal delay={120}>
            <div className="relative mx-auto mt-12 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un guide, un thème, un besoin…"
                aria-label="Rechercher un guide"
                className="w-full rounded-full border-2 border-ink bg-card py-3.5 pl-12 pr-5 text-sm font-medium text-ink placeholder:text-ink/40 shadow-bold outline-none transition-colors focus:border-primary"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ LES PLUS TÉLÉCHARGÉS ============ */}
      <section className="py-16 sm:py-20 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Les plus demandés
                </span>
                <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                  Les plus téléchargés
                </h2>
              </div>
              <p className="text-sm text-ink/60">
                Les guides préférés des mamans cette saison.
              </p>
            </div>
          </Reveal>

          {!hasResults && (
            <div className="mt-12 rounded-3xl border-2 border-ink bg-card p-10 text-center shadow-bold">
              <p className="font-display text-xl font-semibold text-ink">
                Aucun guide ne correspond à ta recherche.
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Essaie un autre mot-clé, ou explore toute la bibliothèque.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-5 py-2.5 text-sm font-semibold text-ink shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Voir tous les guides
              </button>
            </div>
          )}

          {hasResults && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((item, i) => (
                <ProductCard key={item.id} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ PAR CATÉGORIES ============ */}
      <section className="py-16 sm:py-20 cv-auto">
        <div className="mx-auto max-w-6xl px-5 space-y-20">
          {libraryCategories.map((category) => {
            const items = visibleItems.filter(
              (item) => item.category === category.id,
            );
            if (items.length === 0) return null;
            return (
              <div key={category.id}>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn("h-3 w-3 rounded-full", category.dot)}
                      aria-hidden="true"
                    />
                    <h2 className="font-display text-fluid-h3 font-bold text-ink">
                      {category.title}
                    </h2>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-ink/65">
                    {category.description}
                  </p>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, i) => (
                    <ProductCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 sm:py-20 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Tes questions, nos réponses.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <Reveal key={item.question} delay={i * 40}>
                  <AccordionItem
                    value={item.question}
                    className="overflow-hidden rounded-2xl border-2 border-ink bg-card px-5"
                  >
                    <AccordionTrigger className="py-5 font-display text-lg font-semibold text-ink hover:no-underline [&[data-state=open]>svg]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-ink/70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <NewsletterBlock dark />
    </Layout>
  );
}
