import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import EmailForm from "@/components/EmailForm";
import OptimizedImage from "@/components/OptimizedImage";
import { freeGuideSystems, ebooks, bundle } from "@/lib/ebooks";
import { journalArticles } from "@/lib/journal";
import { images } from "@/lib/assets";
import coverListe from "@/assets/covers/liste-naissance.svg";
import coverCorps from "@/assets/covers/corps-apres.svg";
import coverCharge from "@/assets/covers/charge-mentale.svg";
import coverBundle from "@/assets/covers/bundle.svg";
import coverRecettes from "@/assets/covers/recettes-postpartum.svg";
import coverGuideComplet from "@/assets/covers/guide-complet-postpartum.svg";
import coverSoinBebe from "@/assets/covers/soin-bebe.svg";
import { ArrowRight, Check, Quote, BookOpen, Sparkles } from "lucide-react";
import AccentDots from "@/components/AccentDots";
import CountUp from "@/components/CountUp";


const guideSystems = freeGuideSystems;

const methodCards = freeGuideSystems.slice(0, 6);

const testimonials = [
  {
    quote:
      "Enfin une liste claire, pensée par une sage-femme. Je prépare l'arrivée de bébé sans stress, et sans tout retenir dans ma tête.",
    name: "Camille, maman de Léo (4 mois)",
  },
  {
    quote:
      "Ce guide m'a permis de comprendre ce qui arrivait à mon corps, sans paniquer. On se sent enfin accompagnée.",
    name: "Sarah, maman de Jules (7 mois)",
  },
  {
    quote:
      "Des conseils concrets, même pour les jours où je n'ai dormi que trois heures. Je me sens beaucoup moins seule.",
    name: "Manon, maman de Rose (2 mois)",
  },
];

const CARD_STYLE: React.CSSProperties = {
  boxShadow:
    "0 14px 36px -22px rgba(35,33,32,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
};

const DARK_BUTTON_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(180deg, color-mix(in oklab, var(--foreground) 92%, transparent), color-mix(in oklab, var(--foreground) 100%, transparent))",
  boxShadow:
    "0 14px 28px -14px rgba(35,33,32,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
};

const OUTLINE_BUTTON_STYLE: React.CSSProperties = {
  boxShadow:
    "0 6px 18px -10px rgba(35,33,32,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
};

const articleCards = [
  {
    id: journalArticles[0].id,
    image: journalArticles[0].image,
    label: "Lecture essentielle",
    title: journalArticles[0].title,
  },
  {
    id: journalArticles[1].id,
    image: journalArticles[1].image,
    label: "Organisation",
    title: journalArticles[1].title,
  },
  {
    id: journalArticles[2].id,
    image: journalArticles[2].image,
    label: "Charge mentale",
    title: journalArticles[2].title,
  },
];

const guideCards = [
  { ...ebooks[0], cover: coverListe },
  { ...ebooks[1], cover: coverCorps },
  { ...ebooks[2], cover: coverCharge },
  { ...ebooks[3], cover: coverRecettes },
  { ...ebooks[4], cover: coverGuideComplet },
  { ...ebooks[5], cover: coverSoinBebe },
];

const siteOrigin = typeof window !== "undefined" ? window.location.origin : "https://forcemaman.store";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ForceMaman",
    alternateName: "ForceMaman - Guides post-partum",
    url: `${siteOrigin}/`,
    inLanguage: "fr-FR",
    description:
      "Des guides post-partum bienveillants écrits par une sage-femme : liste de naissance, récupération, charge mentale, recettes et soins de bébé.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteOrigin}/guides?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ForceMaman",
    url: `${siteOrigin}/`,
    logo: `${siteOrigin}/favicon.svg`,
    brand: "ForceMaman",
    description: "Guides post-partum écrits par une sage-femme",
    founder: {
      "@type": "Person",
      name: "Maria Garcia",
      jobTitle: "Fondatrice et sage-femme",
      sameAs: [
        "https://www.instagram.com/forcemaman",
        "https://www.facebook.com/forcemaman",
        "https://www.youtube.com/@forcemaman",
      ],
    },
    sameAs: [
      "https://www.instagram.com/forcemaman",
      "https://www.facebook.com/forcemaman",
      "https://www.youtube.com/@forcemaman",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${siteOrigin}/`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ForceMaman - Guides post-partum écrits par une sage-femme",
    description: "6 guides post-partum bienveillants pour mamans : liste de naissance, récupération, charge mentale, recettes, soin bébé. Écrits par Maria Garcia, sage-femme.",
    url: `${siteOrigin}/`,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "ForceMaman",
      url: `${siteOrigin}/`,
    },
    about: {
      "@type": "Thing",
      name: "Post-partum",
      sameAs: "https://fr.wikipedia.org/wiki/Post-partum",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Guides post-partum ForceMaman",
      numberOfItems: 6,
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
      ],
    },
  },
];

export default function Landing() {
  return (
    <Layout>
      <Seo
        title="ForceMaman · Guides post-partum écrits par une sage-femme"
        description="Des guides numériques bienveillants pour le post-partum : liste de naissance, récupération après l'accouchement, charge mentale, recettes et soins de bébé. Créés par Maria Garcia, ancienne sage-femme et maman."
        path="/"
        jsonLd={jsonLd}
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-6 pb-10 pt-12 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 size-72 rounded-full bg-brand-terracotta/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 size-64 rounded-full bg-brand-sage/10 blur-3xl" />
        <div className="mx-auto max-w-md text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Pour les jeunes mamans
            </p>
            <AccentDots className="mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.04] text-foreground sm:text-5xl">
              Des guides bienveillants pour traverser le post-partum,{" "}
              <span className="italic">sans culpabilité.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-sm text-[15px] leading-relaxed text-foreground/65">
              Six ebooks PDF écrits par Maria Garcia, sage-femme pendant 8 ans
              et maman, pour préparer l'arrivée de bébé, comprendre ton corps,
              alléger ta charge mentale et prendre soin de ton nouveau-né.
            </p>
          </Reveal>

          {/* Double CTA : email + voir les guides */}
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <EmailForm id="hero" className="w-full" />
              <Link
                to="/guides"
                className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-foreground/20 bg-[color-mix(in_oklab,var(--background)_90%,transparent)] px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md transition-all hover:border-foreground/40 hover:text-foreground active:scale-[0.98]"
                style={OUTLINE_BUTTON_STYLE}
              >
                <BookOpen className="size-3.5" />
                Voir les guides
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-3 text-[12px] italic tracking-wide text-foreground/55">
              Déjà rejoint par des centaines de jeunes mamans
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS DE CRÉDIBILITÉ ============ */}
      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-md">
          <Reveal>
            <dl className="mx-auto grid max-w-sm grid-cols-3 divide-x divide-border/60 border-t border-b border-border/60 py-6">
              <div className="px-2 text-center">
                <dt className="sr-only">Années de pratique</dt>
                <dd className="font-serif text-3xl text-foreground">
                  <CountUp value={8} suffix=" ans" label="de pratique comme sage-femme" />
                </dd>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                  de métier
                </dd>
              </div>
              <div className="px-2 text-center">
                <dt className="sr-only">Nombre de guides</dt>
                <dd className="font-serif text-3xl text-foreground">
                  <CountUp value={6} label="guides" />
                </dd>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                  guides
                </dd>
              </div>
              <div className="px-2 text-center">
                <dt className="sr-only">Pages par guide</dt>
                <dd className="font-serif text-3xl text-foreground">
                  <CountUp value={40} label="pages par guide" />
                </dd>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                  pages
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ LA BIBLIOTHÈQUE (REMONTÉE) ============ */}
      <section id="bibliotheque" className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md sm:max-w-5xl">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/55">
                La bibliothèque
              </p>
              <h2 className="mx-auto mt-5 max-w-md font-serif text-[2.1rem] leading-[1.05] text-foreground">
                Des guides écrits par une sage-femme,{" "}
                <span className="italic">pour toi.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-foreground/65">
                Six ebooks numériques à découvrir, ou le pack complet avec 30% de réduction.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {guideCards.map((guide, i) => (
              <Reveal key={guide.id} delay={i * 70}>
                <Link
                  to={guide.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_88%,transparent)] sm:bg-[color-mix(in_oklab,var(--background)_78%,transparent)] sm:backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-[2px] hover:border-foreground/20"
                  style={CARD_STYLE}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={guide.cover}
                      alt={`Couverture du guide ${guide.title}`}
                      width={600}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-[1.3rem] leading-tight text-foreground">
                      {guide.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-foreground/60">
                      {guide.tagline}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-serif text-xl text-foreground">
                        {guide.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70 transition-transform duration-500 ease-out group-hover:translate-x-1">
                        Voir le guide
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <Link
              to={bundle.href}
              className="group mt-6 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--card)_60%,var(--background))] p-7 backdrop-blur-md transition-all duration-500 ease-out hover:border-foreground/20 sm:flex-row sm:p-8"
              style={CARD_STYLE}
            >
              <div className="flex items-center gap-6">
                <img
                  src={coverBundle}
                  alt="Couverture du Pack Complet ForceMaman"
                  width={120}
                  height={160}
                  sizes="96px"
                  loading="lazy"
                  decoding="async"
                  className="w-20 rounded-xl object-cover shadow-lg sm:w-24"
                />
                <div className="max-w-sm">
                  <span className="inline-flex items-center rounded-full bg-brand-terracotta px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#fff8f2]">
                    {bundle.discount}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground">
                    {bundle.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/60">
                    {bundle.tagline}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-2 sm:items-end">
                <span className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-foreground">
                    {bundle.price}
                  </span>
                  <span className="text-sm text-foreground/45 line-through">
                    {bundle.originalPrice}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background transition-transform duration-500 ease-out group-hover:translate-x-1">
                  Découvrir le pack
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ LE GUIDE GRATUIT ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Le guide gratuit
            </p>
            <h2 className="mt-5 text-center font-serif text-[2.25rem] leading-[1.05] text-foreground">
              Ce que tu trouveras <span className="italic">dans le guide gratuit</span>
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-center text-[15px] leading-relaxed text-foreground/65">
              Sept systèmes concrets pour simplifier la vie avec un bébé, dès
              aujourd'hui.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="relative mx-auto mt-10 w-[68%] overflow-hidden rounded-2xl"
              style={{
                boxShadow:
                  "0 30px 60px -30px rgba(35,33,32,0.45), 0 8px 20px -12px rgba(35,33,32,0.25)",
              }}
            >
              <picture>
                <source srcSet="/images/webp/guide-maman-bebe.webp" type="image/webp" sizes="(max-width: 640px) 100vw, 68vw" />
                <img
                  src="/images/guide-maman-bebe.jpg"
                  alt="Maman tenant son nouveau-né dans ses bras, moment de tendresse post-partum"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-10 space-y-3">
              {guideSystems.map((system) => (
                <li
                  key={system.number}
                  className="flex items-center gap-4 rounded-2xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_75%,transparent)] px-5 py-4 backdrop-blur-md"
                  style={CARD_STYLE}
                >
                  <span className="w-6 font-serif text-sm italic text-foreground/55">
                    {system.number}
                  </span>
                  <span className="font-serif text-[1.05rem] leading-snug text-foreground">
                    {system.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <Link
              to="/guide-gratuit"
              className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
              style={DARK_BUTTON_STYLE}
            >
              <span className="text-[13px] tracking-wide">
                Recevoir les conseils gratuitsement
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ LA MÉTHODE ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              La méthode
            </p>
            <h2 className="mt-5 text-center font-serif text-[2.1rem] leading-[1.05] text-foreground">
              Sept systèmes <span className="italic">signature</span>, pensés
              pour la vraie vie.
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-center text-[15px] leading-relaxed text-foreground/65">
              Des repères doux, pensés pour tenir même les jours où tu es
              fatiguée.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2">
          {methodCards.map((system, i) => (
            <Reveal key={system.number} delay={(i % 2) * 80}>
              <div
                className="h-full rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_78%,transparent)] p-7 backdrop-blur-md"
                style={CARD_STYLE}
              >
                <span
                  className="grid size-9 place-items-center rounded-full"
                  style={{
                    background:
                      "color-mix(in oklab, var(--accent) 35%, var(--background))",
                  }}
                >
                  <Check className="size-4 text-foreground/70" />
                </span>
                <h3 className="mt-5 font-serif text-[1.35rem] leading-tight text-foreground">
                  {system.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/65">
                  {system.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ ELLES ONT ESSAYÉ ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Elles ont essayé
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground">
              Tu n'as pas besoin d'être <span className="italic">une maman parfaite.</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure
                  className="rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_78%,transparent)] p-7 backdrop-blur-md"
                  style={{
                    boxShadow:
                      "0 14px 36px -22px rgba(35,33,32,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <Quote className="size-4 text-foreground/35" />
                  <blockquote className="mt-4 font-serif text-[1.15rem] leading-snug text-foreground">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LA FONDATRICE ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full"
              style={{
                boxShadow:
                  "0 20px 40px -20px rgba(35,33,32,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <img
                src="/images/webp/maria-founder.webp"
                alt="Maria Garcia, fondatrice de ForceMaman, ancienne sage-femme"
                width={448}
                height={448}
                sizes="224px"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground/65 backdrop-blur-md"
                style={{
                  boxShadow:
                    "0 6px 18px -10px rgba(35,33,32,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                Créé par une maman, testé dans la vraie vie
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              La fondatrice
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground sm:text-[2.35rem]">
              Je m'appelle <span className="italic">Maria.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-foreground/75 sm:text-base">
              <p>
                Sage-femme pendant 8 ans, j'ai accompagné des centaines de
                mamans le jour de l'accouchement. Et puis un jour, c'est moi qui
                ai eu ma fille. Et j'ai découvert ce que personne ne m'avait dit
                : que le plus dur commence souvent après, une fois rentrée à la
                maison, seule avec ce petit être et toutes ces questions.
              </p>
              <p>
                ForceMaman, c'est les guides que j'aurais aimé avoir entre les
                mains ce jour-là. Écrits avec ce que je sais en tant que
                professionnelle, et ce que j'ai vécu en tant que maman.
              </p>
              <p className="font-serif text-[1.05rem] italic text-foreground/85">
                Maria, fondatrice de ForceMaman
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Link
              to="/guide-gratuit"
              className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
              style={DARK_BUTTON_STYLE}
            >
              <span className="text-[13px] tracking-wide">
                Recevoir les conseils gratuits
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ COMMENCEZ ICI ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Commence ici
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground">
              Commence <span className="italic">ici</span>.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {articleCards.map((card, i) => (
              <Reveal key={card.id} delay={i * 80}>
                <Link
                  to={`/journal/${card.id}`}
                  className="group flex gap-4 rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_75%,transparent)] p-3 backdrop-blur-md transition-all active:scale-[0.99]"
                  style={{
                    boxShadow:
                      "0 10px 30px -18px rgba(35,33,32,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-muted">
                    <OptimizedImage
                      image={card.image}
                      alt={card.title}
                      loading="lazy"
                      sizes="96px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-2 pr-2">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                      {card.label}
                    </p>
                    <h3 className="mt-2 line-clamp-3 font-serif text-[1.1rem] leading-snug text-foreground group-hover:text-primary">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 text-center">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
              >
                Voir tous les articles{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NEWSLETTER FINALE ============ */}
      <section className="cv-auto px-6 py-16">
        <div className="mx-auto max-w-md text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Reste connectée
            </p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.05] text-foreground">
              Reçois nos conseils <span className="italic">directement dans ta boîte mail.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-foreground/65">
              Un email par semaine avec des conseils bienveillants pour le post-partum, sans spam.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <EmailForm id="newsletter-footer" className="mt-8" />
          </Reveal>
        </div>
      </section>


    </Layout>
  );
}
