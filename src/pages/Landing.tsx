import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import Reveal, { EASE } from "@/components/Reveal";
import EbookCover from "@/components/EbookCover";
import EmailCapture from "@/components/EmailCapture";
import NewsletterBlock from "@/components/NewsletterBlock";
import { useTilt } from "@/hooks/use-tilt";
import { freeGuide, freeGuideSystems } from "@/lib/ebooks";
import { journalArticles } from "@/lib/journal";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  Download,
  Heart,
  Quote,
} from "lucide-react";

const reassurance = ["Gratuit", "Désinscription en un clic", "Aucun spam"];

const testimonials = [
  {
    quote:
      "J'ai enfin arrêté d'avoir tout en tête en permanence. Le guide m'a donné des repères simples qui tiennent au quotidien.",
    name: "Camille",
    detail: "maman de Léo (4 mois)",
  },
  {
    quote:
      "Pour la première fois depuis la naissance, j'ai l'impression de respirer. Enfin des conseils sans culpabilité.",
    name: "Sarah",
    detail: "maman de Jules (7 mois)",
  },
  {
    quote:
      "Des systèmes simples qui tiennent même les jours où je n'ai dormi que trois heures. Je recommande à toutes mes copines.",
    name: "Manon",
    detail: "maman de Rose (2 mois)",
  },
];

const journalCategoryColors = [
  "bg-brand-terracotta",
  "bg-brand-sage",
  "bg-brand-mauve",
];

function HeroVisual() {
  const tiltRef = useTilt(4);

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl bg-rose-soft/70 -rotate-2"
        aria-hidden="true"
      />
      <div
        ref={tiltRef}
        className="relative grid place-items-center rounded-2xl border-2 border-ink bg-card p-6 sm:p-10 shadow-bold will-change-transform"
      >
        <div className="relative w-full max-w-[240px] sm:max-w-xs aspect-[3/4]">
          <EbookCover
            title={freeGuide.subtitle}
            accent="bg-brand-sage"
            textClass="text-ink/90"
            className="absolute inset-0 z-10 shadow-[6px_6px_0_0_var(--ink)]"
            titleSize="text-base sm:text-lg"
          />
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-5 -right-2 sm:-right-5 z-30 animate-float">
        <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-card px-3 py-2 shadow-bold">
          <Check className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-ink">100% gratuit</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-2 sm:-left-5 z-30 animate-float-slow">
        <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-card px-3 py-2 shadow-bold">
          <Download className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-ink">PDF · Immédiat</span>
        </div>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5" aria-hidden="true">
        {["C", "S", "M"].map((initial) => (
          <span
            key={initial}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-card bg-primary font-display text-xs font-bold text-primary-foreground"
          >
            {initial}
          </span>
        ))}
      </div>
      <p className="text-sm text-ink/65">
        Déjà rejoint par{" "}
        <span className="font-semibold text-ink">des centaines de jeunes mamans</span>
      </p>
    </div>
  );
}

export default function Landing() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
            >
              Pour les jeunes mamans
            </motion.span>
            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance"
            >
              Des systèmes simples pour alléger la{" "}
              <span className="text-primary">charge mentale</span> des jeunes
              mamans.
            </motion.h1>
            <motion.p
              {...fadeUp(0.18)}
              className="mt-6 text-lg text-ink/75 max-w-xl text-balance"
            >
              Des solutions concrètes pour arrêter d'avoir cinquante choses en
              tête toute la journée et simplifier la vie avec un bébé. Sans
              culpabilité, sans injonction.
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="mt-8">
              <EmailCapture
                buttonLabel="Télécharger le guide gratuit"
                successMessage="C'est noté ! Vérifie ta boîte mail : ton guide gratuit t'attend."
              />
            </motion.div>

            <motion.div {...fadeUp(0.34)} className="mt-4">
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-ink/55">
                {reassurance.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-primary" />
                    {item}
                  </span>
                ))}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.42)} className="mt-8">
              <SocialProof />
            </motion.div>
          </div>

          <Reveal delay={150}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ============ LE GUIDE GRATUIT ============ */}
      <section
        id="guide-gratuit"
        className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 scroll-mt-24 cv-auto"
      >
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="justify-self-center lg:justify-self-start">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-card rotate-2 border-2 border-ink/10"
                aria-hidden="true"
              />
              <div className="relative grid place-items-center rounded-2xl border-2 border-ink bg-card p-6 sm:p-10 shadow-bold">
                <div className="relative w-full max-w-[220px] sm:max-w-xs aspect-[3/4]">
                  <EbookCover
                    title={freeGuide.subtitle}
                    accent="bg-brand-terracotta"
                    textClass="text-[#fff8f2]"
                    className="absolute inset-0 z-10 shadow-[6px_6px_0_0_var(--ink)]"
                    titleSize="text-base sm:text-lg"
                  />
                  <div className="absolute -right-3 -top-3 z-20 rounded-full border-2 border-ink bg-brand-sage px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-bold">
                    Gratuit
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Le guide gratuit
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Ce que vous trouverez dans le guide gratuit
              </h2>
              <p className="mt-4 text-lg text-ink/75 text-balance">
                Sept systèmes concrets pour simplifier la vie avec un bébé dès
                aujourd'hui.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ol className="mt-8">
                {freeGuideSystems.map((system) => (
                  <li
                    key={system.number}
                    className="flex items-baseline gap-4 border-t-2 border-ink/10 py-3 first:border-t-0"
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {system.number}
                    </span>
                    <span className="font-display text-lg font-semibold text-ink">
                      {system.title}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={freeGuide.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Télécharger le guide gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-sm text-ink/60">
                  Gratuit · Désinscription en un clic
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ LA MÉTHODE — 6 SYSTÈMES SIGNATURE ============ */}
      <section className="py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                La méthode
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Sept systèmes signature, pensés pour la vraie vie.
              </h2>
              <p className="mt-4 text-lg text-ink/75 text-balance">
                Des repères doux, pensés pour tenir même les jours où vous êtes
                épuisée.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeGuideSystems.slice(0, 6).map((system, i) => (
              <Reveal key={system.number} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border-2 border-ink bg-card p-6 shadow-bold transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <system.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    <span className="font-display text-2xl font-bold text-ink/15">
                      {system.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {system.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {system.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Elles ont essayé
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Vous n'avez pas besoin d'être une maman parfaite.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-3xl border-2 border-ink bg-card p-7 shadow-bold">
                  <Quote className="h-7 w-7 text-primary" />
                  <blockquote className="mt-4 font-display text-xl font-medium leading-snug text-ink">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-6 border-t-2 border-ink/10 pt-4">
                    <p className="font-display font-semibold text-ink">
                      {t.name}
                    </p>
                    <p className="text-sm text-ink/60">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LA FONDATRICE ============ */}
      <section className="py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative h-52 w-52 sm:h-60 sm:w-60">
                <div
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/25"
                  aria-hidden="true"
                />
                <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border-2 border-ink bg-gradient-to-br from-secondary via-rose-soft to-card shadow-[0_20px_44px_-16px_rgba(92,74,58,0.5)]">
                  <span className="font-display text-7xl font-bold text-ink">
                    M
                  </span>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2.5 shadow-[0_10px_24px_-12px_rgba(92,74,58,0.4)]">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-ink">
                  Créé par une maman, testé dans la vraie vie
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                La fondatrice
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Pourquoi j'ai créé ForceMaman.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
                <p>
                  Après la naissance de mon premier bébé, j'ai compris une
                  chose : personne ne nous parle vraiment de la charge mentale
                  qui arrive avec lui. Pas seulement les couches et les
                  biberons — mais ce flux constant de petites décisions, de
                  listes invisibles et de choses à ne pas oublier.
                </p>
                <p>
                  J'ai essayé les routines parfaites, les plannings Pinterest,
                  les applications miracles. Aucune ne tenait plus d'une
                  semaine. Ce qui a tout changé, ce sont des systèmes simples,
                  posés une seule fois, qui fonctionnaient même les jours où je
                  dormais quatre heures.
                </p>
                <p>
                  ForceMaman, c'est ça : pas un nouveau standard de maman
                  parfaite, juste des outils réalistes pour vous libérer un peu
                  d'espace mental. Sans culpabilité. Sans injonction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Link
                to="/guides"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Commencez ici
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BLOG — LECTURE ESSENTIELLE ============ */}
      <section className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Le journal
                </span>
                <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                  Lecture essentielle
                </h2>
              </div>
              <Link
                to="/journal"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Voir tous les articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalArticles.map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 90}>
                <Link
                  to="/journal"
                  className="group flex h-full flex-col rounded-3xl border-2 border-ink bg-card p-6 shadow-bold transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    className={cn(
                      "inline-flex w-fit items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white",
                      journalCategoryColors[i % journalCategoryColors.length],
                    )}
                  >
                    {article.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-5">
                    <p className="text-xs text-ink/50">
                      {article.date} · {article.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <NewsletterBlock dark />
    </Layout>
  );
}
