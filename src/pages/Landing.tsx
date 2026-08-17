import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import EmailForm from "@/components/EmailForm";
import { freeGuideSystems } from "@/lib/ebooks";
import { journalArticles } from "@/lib/journal";
import { images } from "@/lib/assets";
import { Check, Quote } from "lucide-react";

const guideSystems = freeGuideSystems;

const methodCards = freeGuideSystems.slice(0, 6);

const testimonials = [
  {
    quote:
      "J'ai enfin arrêté d'avoir tout en tête en permanence. Le Cerveau Externe a tout changé.",
    name: "Camille, maman de Léo (4 mois)",
  },
  {
    quote:
      "Pour la première fois depuis la naissance, j'ai l'impression de respirer.",
    name: "Sarah, maman de Jules (7 mois)",
  },
  {
    quote:
      "Des systèmes simples qui tiennent même les jours où je n'ai dormi que trois heures.",
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

const articleCards = [
  {
    image: journalArticles[0].image,
    label: "Lecture essentielle",
    title: journalArticles[0].title,
  },
  {
    image: journalArticles[1].image,
    label: "Organisation",
    title: journalArticles[1].title,
  },
  {
    image: journalArticles[2].image,
    label: "Charge mentale",
    title: journalArticles[2].title,
  },
];

export default function Landing() {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative px-6 pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-md text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Pour les jeunes mamans
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.04] text-foreground sm:text-5xl">
              Des systèmes simples pour <span className="italic">alléger</span>{" "}
              la charge mentale des jeunes mamans.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-sm text-[15px] leading-relaxed text-foreground/65">
              Des solutions concrètes pour arrêter d'avoir 50 choses en tête
              toute la journée et simplifier la vie avec un bébé.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <EmailForm id="hero" className="mt-10" />
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-foreground/50">
              Gratuit • Désinscription en un clic • Aucun spam
            </p>
            <p className="mt-2 text-[12px] italic tracking-wide text-foreground/55">
              Déjà rejoint par des centaines de jeunes mamans
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ LE GUIDE GRATUIT ============ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Le guide gratuit
            </p>
            <h2 className="mt-5 text-center font-serif text-[2.25rem] leading-[1.05] text-foreground">
              Ce que vous trouverez <span className="italic">dans le guide gratuit</span>
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-center text-[15px] leading-relaxed text-foreground/65">
              Sept systèmes concrets pour simplifier la vie avec un bébé dès
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
              <img
                src={images.guideLifestyle}
                alt="Aperçu du guide 7 systèmes"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
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

          <Reveal delay={220}>
            <Link
              to="/guide-gratuit"
              className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
              style={DARK_BUTTON_STYLE}
            >
              <span className="text-[13px] tracking-wide">
                Télécharger le guide gratuitement
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
      <section className="px-6 py-16">
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
              Des repères doux, pensés pour tenir même les jours où vous êtes
              épuisée.
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
      <section className="px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Elles ont essayé
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground">
              Vous n'avez pas besoin d'être <span className="italic">une maman parfaite.</span>
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
      <section className="px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full"
              style={{
                boxShadow:
                  "0 20px 40px -20px rgba(35,33,32,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <img
                src={images.founder}
                alt="Fondatrice de ForceMaman"
                className="h-full w-full object-cover"
                loading="lazy"
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

          <Reveal delay={80}>
            <p className="mt-10 text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              La fondatrice
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground">
              Pourquoi j'ai créé <br />
              <span className="italic">ForceMaman.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-foreground/75">
              <p>
                Après la naissance de mon premier bébé, j'ai compris une chose
                : personne ne nous parle vraiment de la charge mentale qui
                arrive avec lui. Pas seulement les couches et les biberons —
                mais ce flux constant de petites décisions, de listes invisibles
                et de choses à ne pas oublier.
              </p>
              <p>
                J'ai essayé les routines parfaites, les plannings Pinterest, les
                applications miracles. Aucune ne tenait plus d'une semaine. Ce
                qui a tout changé, ce sont des{" "}
                <em className="italic">systèmes simples</em>, posés une seule
                fois, qui fonctionnaient même les jours où je dormais quatre
                heures.
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
              to="/guide-gratuit"
              className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
              style={DARK_BUTTON_STYLE}
            >
              <span className="text-[13px] tracking-wide">
                Télécharger le guide gratuit
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
      <section className="px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/55">
              Commencez ici
            </p>
            <h2 className="mt-5 text-center font-serif text-[2rem] leading-[1.05] text-foreground">
              Commencez <span className="italic">ici</span>.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {articleCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <Link
                  to="/journal"
                  className="group flex gap-4 rounded-3xl border border-white/40 bg-[color-mix(in_oklab,var(--background)_75%,transparent)] p-3 backdrop-blur-md transition-all active:scale-[0.99]"
                  style={{
                    boxShadow:
                      "0 10px 30px -18px rgba(35,33,32,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
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

          <Reveal delay={240}>
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
    </Layout>
  );
}
