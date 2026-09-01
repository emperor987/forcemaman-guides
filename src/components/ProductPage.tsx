import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAction } from "convex/react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { cn } from "@/lib/utils";
import AccentDots from "@/components/AccentDots";
import { ebooks } from "@/lib/ebooks";
import { journalArticles, articleSrc } from "@/lib/journal";
import { api } from "@/convex/_generated/api";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Info,
  Lock,
  ShieldCheck,
  Timer,
  Undo2,
} from "lucide-react";

interface ProductPageProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  accent: string;
  accentText: string;
  description: string[];
  chapters: string[];
  previewPages: string[];
  previewImages: string[];
  cover: string;
  path: string;
  type?: "ebook" | "bundle";
}

const DARK_BUTTON_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(180deg, color-mix(in oklab, var(--foreground) 92%, transparent), color-mix(in oklab, var(--foreground) 100%, transparent))",
  boxShadow:
    "0 16px 32px -16px rgba(35,33,32,0.55), 0 4px 8px -4px rgba(35,33,32,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
};

const CARD_STYLE: React.CSSProperties = {
  boxShadow:
    "0 14px 36px -22px rgba(35,33,32,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
};

export default function ProductPage({
  title,
  subtitle,
  price,
  originalPrice,
  discount,
  accent,
  accentText,
  description,
  chapters,
  previewPages,
  previewImages,
  cover,
  path,
  type = "ebook",
}: ProductPageProps) {
  const seoTitle = `${title} · Guide post-partum PDF · ForceMaman`;
  const seoDescription =
    description[0].length > 155
      ? `${description[0].slice(0, 152).trimEnd()}…`
      : description[0];
  const keywords = `post-partum, ${title.toLowerCase()}, guide post-partum, ebook PDF, sage-femme, maman, naissance, bébé, ${title.toLowerCase().replace(/[&]/g, "et")}, ForceMaman, télécharger, guide bienveillant`;
  const priceNumber = parseFloat(
    price.replace("€", "").replace(",", ".").trim(),
  );
  const productId = path.split("/").pop() ?? "";
  const siteOrigin =
    window.location.hostname === "forcemaman.store" ||
    window.location.hostname === "www.forcemaman.store"
      ? "https://forcemaman.store"
      : window.location.origin;
  // Static dates per product — never generate dynamically
  const productDates: Record<string, { published: string; modified: string }> = {
    "liste-naissance": { published: "2026-03-01", modified: "2026-03-01" },
    "corps-apres": { published: "2026-03-01", modified: "2026-03-01" },
    "charge-mentale": { published: "2026-03-01", modified: "2026-03-01" },
    "recettes-postpartum": { published: "2026-06-01", modified: "2026-06-01" },
    "guide-complet-postpartum": { published: "2026-06-01", modified: "2026-06-01" },
    "soin-bebe": { published: "2026-06-01", modified: "2026-06-01" },
    bundle: { published: "2026-03-01", modified: "2026-06-01" },
  };
  const dates = productDates[productId] ?? { published: "2026-03-01", modified: "2026-03-01" };
  const ebookData = ebooks.find((e) => e.id === productId);
  const productFaq = ebookData?.faq ?? [];

  useEffect(() => {
    trackEvent("product_view", { product: productId });
  }, [productId]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: title,
      description: seoDescription,
      image: `${siteOrigin}${cover}`,
      brand: { "@type": "Brand", name: "ForceMaman" },
      author: {
        "@type": "Person",
        name: "Maria Garcia",
        jobTitle: "Sage-femme et fondatrice de ForceMaman",
      },
      publisher: {
        "@type": "Organization",
        name: "ForceMaman",
        url: siteOrigin,
      },
      datePublished: dates.published,
      dateModified: dates.modified,
      inLanguage: "fr-FR",
      category: "Guide post-partum PDF",
      offers: {
        "@type": "Offer",
        price: Number.isFinite(priceNumber) ? priceNumber : undefined,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteOrigin}${path}`,
        seller: {
          "@type": "Organization",
          name: "ForceMaman",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteOrigin}/` },
        { "@type": "ListItem", position: 2, name: "Nos Guides", item: `${siteOrigin}/guides` },
        { "@type": "ListItem", position: 3, name: title, item: `${siteOrigin}${path}` },
      ],
    },
    ...(productFaq.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: productFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]
      : []),
  ];

  const [checkingOut, setCheckingOut] = useState(false);
  const createCheckout = useAction(api.payments.createCheckoutSession);

  const handleCheckout = () => {
    if (checkingOut) return;
    setCheckingOut(true);
    trackEvent("checkout_start", { product: productId });
    // On envoie l'origine courante du navigateur pour que le redirect Stripe
    // fonctionne quelle que soit l'URL de déploiement (Freebuff, domaine perso, etc.)
    const siteUrl = window.location.origin;
    createCheckout({ productId, mode: "hosted", siteUrl })
      .then((res) => {
        if (res.url) window.location.href = res.url;
      })
      .catch(() => {
        setCheckingOut(false);
      });
  };

  const checkoutButton = (extraClassName?: string) => (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={checkingOut}
      className={
        "btn-shine inline-flex h-14 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98] disabled:opacity-70 lg:px-10 " +
        (extraClassName ?? "")
      }
      style={DARK_BUTTON_STYLE}
    >
      <Lock className="size-4 opacity-80" />
      <span className="text-sm tracking-wide">
        {checkingOut ? "Redirection…" : "Payer avec Stripe"}
      </span>
      <ArrowRight className="size-4" />
    </button>
  );

  const trust = [
    { icon: Timer, label: "Téléchargement immédiat" },
    { icon: ShieldCheck, label: "Paiement sécurisé Stripe" },
    { icon: Undo2, label: "Remboursement 14 jours" },
  ];

  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={path}
        image={`${siteOrigin}${cover}`}
        keywords={keywords}
        type="product"
        datePublished={dates.published}
        dateModified={dates.modified}
        jsonLd={jsonLd}
      />
      {/* ============ HERO ============ */}
      <section className="px-6 pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Cover */}
          <Reveal className="order-1 justify-self-center lg:order-none">
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-[2rem] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] -rotate-2"
                aria-hidden="true"
              />
              <div
                className="relative w-56 overflow-hidden rounded-2xl sm:w-72 lg:w-80"
                style={{
                  boxShadow:
                    "0 40px 80px -30px rgba(35,33,32,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <img
                  src={cover}
                  alt={title}
                  className="aspect-[3/4] h-auto w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>

          {/* Info */}
          <div className="text-center lg:text-left">
            <Reveal>
              <AccentDots className="justify-center lg:justify-start" />
              {discount && (
                <span className="mt-4 inline-flex items-center rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70">
                  {discount}
                </span>
              )}
              <h1 className="mt-5 font-serif text-[2.15rem] leading-[1.02] text-foreground sm:text-5xl">
                {title}
              </h1>
              <p className={cn("mt-3 text-base sm:text-lg", accentText)}>
                {subtitle}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 flex items-baseline justify-center gap-3 lg:justify-start">
                <span className="font-serif text-4xl text-foreground sm:text-5xl">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-lg text-foreground/45 line-through sm:text-xl">
                    {originalPrice}
                  </span>
                )}
              </div>

              <div className="mt-8">{checkoutButton("max-w-md lg:w-auto")}</div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                {trust.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground/55"
                  >
                    <item.icon className="size-3.5" />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div
                className="mt-8 flex items-start gap-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 text-left"
                style={CARD_STYLE}
              >
                <Info className="mt-0.5 size-4 shrink-0 text-foreground/50" />
                <p className="text-[13px] leading-relaxed text-foreground/65 sm:text-sm">
                  Ce guide est un outil d'accompagnement et d'information. Il ne
                  remplace en aucun cas un avis médical professionnel. En cas de
                  doute ou de problème de santé, consulte ta sage-femme, ton
                  médecin ou un professionnel de santé qualifié.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ DESCRIPTION ============ */}
      <section className="cv-auto border-y border-border/60 bg-[color-mix(in_oklab,var(--accent)_10%,var(--background))] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">À propos</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              De quoi parle <span className="italic">ce guide ?</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-foreground/72 sm:text-base">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SOMMAIRE ============ */}
      <section className="cv-auto px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">Sommaire</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              Le contenu <span className="italic">du guide</span>
            </h2>
            <div
              className="mt-8 rounded-3xl border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] p-6 backdrop-blur-md sm:p-8"
              style={CARD_STYLE}
            >
              <ul className="space-y-4">
                {chapters.map((chapter, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className={cn(
                        "mt-0.5 size-5 shrink-0",
                        accentText,
                      )}
                    />
                    <span className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                      {chapter}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ APERÇU ============ */}
      <section className="cv-auto border-y border-border/60 bg-[color-mix(in_oklab,var(--accent)_10%,var(--background))] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">Aperçu</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              Un avant-goût <span className="italic">des pages</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {previewPages.map((page, index) => (
              <Reveal key={index} delay={index * 70}>
                <figure
                  className="h-full rounded-3xl border border-foreground/10 bg-background/70 p-4"
                  style={CARD_STYLE}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={previewImages[index]}
                      alt={page}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1000/1290] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-foreground/55">
                    {page}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-sm text-foreground/50">
              Aperçu des premières pages du guide
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cv-auto px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl">
              Prête à <span className="italic">télécharger ?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/65 sm:text-base">
              {type === "bundle"
                ? "Les 6 guides pour un accompagnement complet du post-partum."
                : "Reçois ton guide en quelques secondes et commence à lire."}
            </p>
            <div className="mx-auto mt-8 max-w-md">
              {checkoutButton()}
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
              Paiement sécurisé par Stripe
            </p>
            <div className="mt-8">
              <Link
                to="/guides"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Retour à tous les guides
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ARTICLES DU JOURNAL ============ */}
      {(() => {
        const ebookData = ebooks.find((e) => e.id === productId);
        const relatedIds = ebookData?.relatedArticles ?? [];
        const related = relatedIds
          .map((id) => journalArticles.find((a) => a.id === id))
          .filter(Boolean) as typeof journalArticles;
        if (related.length === 0) return null;
        return (
          <section className="cv-auto px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <p className="eyebrow text-center lg:text-left">Articles du Journal</p>
                <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
                  Pour aller <span className="italic">plus loin.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-foreground/65 lg:text-left">
                  Des lectures complémentaires pour approfondir ce sujet.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((article, i) => (
                  <Reveal key={article.id} delay={i * 70}>
                    <Link
                      to={`/journal/${article.id}`}
                      className="group block rounded-3xl border border-foreground/10 bg-background/70 p-5 transition-all hover:border-foreground/25"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                        {article.category} · {article.readTime}
                      </p>
                      <h3 className="mt-3 font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ============ FAQ ============ */}
      {(() => {
        const ebookData = ebooks.find((e) => e.id === productId);
        const faq = ebookData?.faq ?? [];
        if (faq.length === 0) return null;
        return (
          <section className="cv-auto border-t border-foreground/10 px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="eyebrow text-center lg:text-left">Questions fréquentes</p>
                <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
                  Tu as des questions <span className="italic">?</span>
                </h2>
              </Reveal>
              <div className="mt-10 divide-y divide-foreground/10">
                {faq.map((item, i) => (
                  <Reveal key={item.question} delay={i * 40}>
                    <details className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] text-foreground sm:text-base">
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
        );
      })()}
    </Layout>
  );
}
