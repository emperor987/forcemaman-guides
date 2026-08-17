import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import Reveal, { EASE } from "@/components/Reveal";
import EbookCover from "@/components/EbookCover";
import { useTilt } from "@/hooks/use-tilt";
import { ebooks, bundle } from "@/lib/ebooks";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  ChartLine,
  ClipboardList,
  CreditCard,
  Heart,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Zap,
} from "lucide-react";

const transformations = [
  {
    name: "Camille, 7e mois de grossesse",
    coverIndex: 0,
    before: "Je noyais entre douze listes contradictoires, je stressais à chaque recommandation trouvée en ligne.",
    after: "Ma liste naissance complète et prête en deux heures. J'ai retrouvé le sommeil.",
  },
  {
    name: "Inès, 6 semaines post-partum",
    coverIndex: 1,
    before: "Mon corps me semblait étranger, je ne savais pas ce qui était normal ou non.",
    after: "Le guide Corps m'a rassurée et m'a donné des repères clairs, sans panique.",
  },
  {
    name: "Sarah, 3 mois post-partum",
    coverIndex: 2,
    before: "Je culpabilisais de ne pas tout gérer, de pleurer, de laisser les tâches s'accumuler.",
    after: "Le guide Charge mentale m'a aidée à poser des limites et à en parler avec mon compagnon.",
  },
];

const problems = [
  {
    icon: TriangleAlert,
    title: "Des listes interminables",
    text: "Cent un blogs, cent une opinions. Tu passes des heures à comparer au lieu de préparer sereinement l'arrivée de bébé.",
  },
  {
    icon: ChartLine,
    title: "Une culpabilité permanente",
    text: "Injonctions, comparaisons, injonctions : le post-partum se vit déjà assez difficilement sans culpabilité en plus.",
  },
  {
    icon: ShieldCheck,
    title: "Zéro réel accompagnement",
    text: "Du contenu générique, écrit sans expertise ni ton bienveillant, et souvent sans aucun rappel médical.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Tu choisis ton guide",
    text: "Liste de naissance, corps après l'accouchement ou charge mentale. Ou le pack complet pour tout avoir.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Tu paies en 30 secondes",
    text: "Paiement sécurisé Stripe. Tu reçois ton PDF immédiatement par email, lisible sur tous tes appareils.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Tu lis à ton rythme",
    text: "Sur téléphone, tablette ou ordinateur. Imprimable, et lisible même à 3h du matin pendant une tétée.",
  },
];

const methodology = [
  {
    icon: ShieldCheck,
    title: "Sécurité d'abord",
    text: "Chaque conseil reste dans le cadre des recommandations professionnelles, avec les rappels nécessaires.",
  },
  {
    icon: Heart,
    title: "Bienveillance absolue",
    text: "Aucune injonction, aucune culpabilisation. Juste des réponses claires, à ton rythme.",
  },
  {
    icon: BookOpen,
    title: "Pensé avec rigueur",
    text: "Huit ans à accompagner des centaines de mamans, et un vécu personnel : une double légitimité rare.",
  },
];

const testimonials = [
  {
    initial: "L",
    name: "Léa",
    detail: "3 mois post-partum",
    quote: "C'est le premier guide qui ne me donne pas l'impression d'échouer quand je ne coche pas tout. Le ton fait toute la différence.",
    dark: false,
  },
  {
    initial: "A",
    name: "Amina",
    detail: "Maman de jumelles, 6 mois",
    quote: "Le guide Corps m'a enfin expliqué ce qui était normal. J'ai arrêté de m'inquiéter à la moindre douleur.",
    dark: true,
  },
  {
    initial: "C",
    name: "Clara",
    detail: "5 mois post-partum",
    quote: "Ma sage-femme a validé les repères du guide. Pour moi, c'est ce qui fait la différence avec les blogs.",
    dark: false,
  },
  {
    initial: "M",
    name: "Maya",
    detail: "11 mois post-partum",
    quote: "J'ai offert le pack à ma meilleure amie. Elle dit que c'est le cadeau le plus utile qu'on lui ait fait.",
    dark: true,
  },
];

const faqItems = [
  {
    question: "Comment reçois-je mon guide ?",
    answer:
      "Dès le paiement validé, tu reçois ton PDF par email. Téléchargeable sur ordinateur, tablette ou téléphone, autant de fois que tu le souhaites.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer:
      "Oui. Les paiements passent par Stripe, un leader mondial du paiement en ligne. Aucune donnée bancaire n'est stockée sur notre site.",
  },
  {
    question: "Puis-je me faire rembourser ?",
    answer:
      "Oui, sous 14 jours après ton achat. Écris-nous à hello@forcemaman.fr avec ton numéro de commande, nous nous occupons de tout.",
  },
  {
    question: "Sur quels appareils puis-je lire les guides ?",
    answer:
      "Les PDF sont optimisés pour tous les écrans, et imprimables si tu préfères le papier.",
  },
  {
    question: "Qui a écrit ces guides ?",
    answer:
      "Maria Garcia, sage-femme pendant 8 ans et maman. Chaque guide combine son expertise professionnelle et ce qu'elle a vécu après la naissance de sa fille.",
  },
  {
    question: "Les guides remplacent-ils un avis médical ?",
    answer:
      "Non. Ce sont des outils d'information et d'accompagnement. En cas de doute ou de problème de santé, consulte un professionnel de santé qualifié.",
  },
];

function HeroVisual() {
  const tiltRef = useTilt(4);
  const reduce = useReducedMotion();
  const spotRef = useRef<HTMLDivElement>(null);

  // Warm light that follows the cursor (lightweight: transform + opacity only)
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = spotRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.opacity = "1";
    el.style.transform = `translate3d(${x - 110}px, ${y - 110}px, 0)`;
  };

  const handleLeave = () => {
    const el = spotRef.current;
    if (el) el.style.opacity = "0";
  };

  return (
    <div className="relative" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div
        className="absolute -inset-4 bg-rose-soft/60 rounded-3xl -rotate-2"
        aria-hidden="true"
      />
      <div
        ref={tiltRef}
        className="relative grid place-items-center rounded-2xl border-2 border-ink bg-card p-6 sm:p-10 shadow-bold will-change-transform"
      >
        <div className="relative w-full max-w-[240px] sm:max-w-xs aspect-[3/4]">
          <div className="absolute inset-0 animate-float" aria-hidden="true">
            <EbookCover
              title={ebooks[2].title}
              accent={ebooks[2].accent}
              className="absolute inset-0 rotate-[7deg] translate-x-4 opacity-90"
              titleSize="text-sm sm:text-base"
            />
          </div>
          <div className="absolute inset-0 animate-float-slow" aria-hidden="true">
            <EbookCover
              title={ebooks[1].title}
              accent={ebooks[1].accent}
              className="absolute inset-0 -rotate-[5deg] -translate-x-3 opacity-90"
              titleSize="text-sm sm:text-base"
            />
          </div>
          <EbookCover
            title={ebooks[0].title}
            accent={ebooks[0].accent}
            className="absolute inset-0 z-10 shadow-[6px_6px_0_0_var(--ink)]"
            titleSize="text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Cursor spotlight (subtle warm reveal, transform-only) */}
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(220px circle at center, rgba(255, 246, 235, 0.5), transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Floating badges */}
      <div className="absolute -top-5 -right-2 sm:-right-5 z-30 animate-float">
        <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-card px-3 py-2 shadow-bold">
          <Heart className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-ink">Sage-femme · 8 ans</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-2 sm:-left-5 z-30 animate-float-slow">
        <div className="flex items-center gap-2 rounded-xl border-2 border-ink bg-card px-3 py-2 shadow-bold">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-ink">PDF · Immédiat</span>
        </div>
      </div>
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
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
            >
              Post-partum · Guides bienveillants
            </motion.span>
            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance"
            >
              Tu viens d'accoucher.
              <br />
              <span className="text-primary">Maintenant, on s'occupe de toi.</span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.18)}
              className="mt-6 text-lg text-ink/75 max-w-xl text-balance"
            >
              Trois ebooks écrits par une sage-femme pour traverser le
              post-partum avec clarté, sans culpabilité. Liste de naissance,
              corps après l'accouchement, charge mentale : chaque guide répond
              à une vraie question.
            </motion.p>
            <motion.div {...fadeUp(0.26)} className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink px-6 py-3.5 font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Découvrir les guides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-sm text-ink/60">
                Téléchargement immédiat · Paiement sécurisé Stripe
              </span>
            </motion.div>
          </div>

          <Reveal delay={150}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ============ TRANSFORMATIONS ============ */}
      <section className="py-20 sm:py-24 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Ce que ça change
              </span>
              <h2 className="mt-3 text-fluid-h2 font-display font-bold text-ink text-balance">
                Avant. Après.
                <br />
                Le vrai changement.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 space-y-8">
            {transformations.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 rounded-3xl border-2 border-ink bg-card p-5 sm:p-6 shadow-bold">
                  <EbookCover
                    title={ebooks[t.coverIndex].title}
                    accent={ebooks[t.coverIndex].accent}
                    className="w-full min-h-48 md:min-h-full rounded-2xl"
                    titleSize="text-base sm:text-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-display text-xl font-semibold text-ink">
                      {t.name}
                    </p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-ink/50">
                          Avant
                        </span>
                        <p className="mt-1 text-ink/80 text-sm leading-relaxed">
                          {t.before}
                        </p>
                      </div>
                      <div className="border-l-0 sm:border-l-2 border-ink/10 sm:pl-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Après
                        </span>
                        <p className="mt-1 text-ink text-sm leading-relaxed font-medium">
                          {t.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LE PROBLÈME ============ */}
      <section className="bg-ink text-cream py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Le problème
                </span>
                <h2 className="mt-3 text-fluid-h2 font-display font-bold text-balance">
                  Les infos en ligne épuisent les jeunes mamans.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120} className="justify-self-end w-full max-w-sm">
              <div className="rounded-2xl border-2 border-cream/20 w-full p-8">
                <Heart className="h-12 w-12 text-primary" />
                <p className="mt-4 font-display text-lg text-cream/90">
                  Toi aussi, tu mérites mieux qu'une recherche Google à 2h du
                  matin.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="rounded-2xl border-2 border-cream/15 p-6 hover:border-primary transition-colors h-full">
                  <p.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-cream/70 text-sm leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMENT ÇA MARCHE ============ */}
      <section className="py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Comment ça marche
              </span>
              <h2 className="mt-3 text-fluid-h2 font-display font-bold text-balance text-ink">
                Trois étapes. Un guide à toi.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 90}>
                <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-bold h-full">
                  <div className="flex items-start justify-between">
                    <s.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
                    <span className="font-display text-3xl font-bold text-ink/15">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-ink/70 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MÉTHODOLOGIE / MARIA ============ */}
      <section className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Derrière ForceMaman, une femme
                </span>
                <h2 className="mt-3 text-fluid-h2 font-display font-bold text-ink text-balance leading-tight">
                  Une expertise de sage-femme, pas un copier-coller de blog.
                </h2>
                <p className="mt-5 text-lg text-ink/75">
                  Chaque guide est écrit par Maria Garcia, sage-femme pendant 8
                  ans et maman. Elle y combine ce que sa profession lui a appris
                  et ce qu'elle a vécu après la naissance de sa fille. Tu y
                  retrouves les mots qu'elle aurait aimé lire à ce moment-là.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-rose-soft/50 rounded-3xl rotate-2"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border-2 border-ink bg-card p-8 shadow-bold text-center">
                  <div className="mx-auto h-24 w-24 rounded-full border-2 border-ink bg-secondary flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-ink">
                      M
                    </span>
                  </div>
                  <p className="mt-5 font-display text-2xl font-bold text-ink">
                    Je m'appelle Maria.
                  </p>
                  <p className="mt-3 text-ink/75 text-sm leading-relaxed text-left">
                    Sage-femme pendant 8 ans, j'ai accompagné des centaines de
                    mamans le jour de l'accouchement. Et puis un jour, c'est moi
                    qui ai eu ma fille. Et j'ai découvert ce que personne ne
                    m'avait dit : que le plus dur commence souvent après, une
                    fois rentrée à la maison, seule avec ce petit être et toutes
                    ces questions. ForceMaman, c'est les guides que j'aurais aimé
                    avoir entre les mains ce jour-là. Écrits avec ce que je sais
                    en tant que professionnelle, et ce que j'ai vécu en tant que
                    maman.
                  </p>
                  <p className="mt-4 text-ink/60 text-sm italic">
                    Maria, fondatrice de ForceMaman
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <div className="rounded-2xl border-2 border-ink bg-card p-6 h-full">
                  <m.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-ink/70 text-sm leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-sm text-ink/60 italic max-w-3xl mx-auto">
              Les guides ForceMaman sont des outils d'information et
              d'accompagnement. Ils ne remplacent pas un avis médical
              professionnel. En cas de doute ou de problème de santé, consulte
              ta sage-femme, ton médecin ou un professionnel de santé qualifié.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PACK COMPLET ============ */}
      <section className="py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-4 bg-rose-soft/50 rounded-3xl rotate-2"
                aria-hidden="true"
              />
              <div className="relative grid place-items-center rounded-2xl border-2 border-ink bg-card p-6 sm:p-10 shadow-bold">
                <div className="relative w-full max-w-[220px] sm:max-w-xs aspect-[3/4]">
                  <EbookCover
                    title={ebooks[2].title}
                    accent={ebooks[2].accent}
                    className="absolute inset-0 rotate-[7deg] translate-x-4 opacity-90"
                    titleSize="text-sm sm:text-base"
                  />
                  <EbookCover
                    title={ebooks[1].title}
                    accent={ebooks[1].accent}
                    className="absolute inset-0 -rotate-[5deg] -translate-x-3 opacity-90"
                    titleSize="text-sm sm:text-base"
                  />
                  <EbookCover
                    title={ebooks[0].title}
                    accent={ebooks[0].accent}
                    className="absolute inset-0 z-10 shadow-[6px_6px_0_0_var(--ink)]"
                    titleSize="text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Pack Complet · {bundle.discount}
              </span>
              <h2 className="mt-4 text-fluid-h2 font-display font-bold text-ink text-balance leading-tight">
                Les trois guides.
                <br />
                Une seule boîte à outils.
              </h2>
              <p className="mt-5 text-ink/75 text-lg">
                Liste de naissance, corps après l'accouchement, charge mentale :
                le parcours complet pour aborder le post-partum avec sérénité.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 rounded-3xl border-2 border-ink bg-card p-6 sm:p-8 shadow-[8px_8px_0_0_var(--terracotta)]">
                <ul className="space-y-4">
                  {ebooks.map((e) => (
                    <li key={e.id} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-3 text-ink">
                        <span className={cn("h-3 w-3 rounded-full border-2 border-ink", e.accent)} />
                        <span className="text-sm font-medium">{e.title}</span>
                      </span>
                      <span className="text-sm text-ink/60">{e.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-baseline gap-3 border-t-2 border-ink/10 pt-5">
                  <span className="font-display text-3xl font-bold text-ink">
                    {bundle.price}
                  </span>
                  <span className="text-lg text-ink/50 line-through">
                    {bundle.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {bundle.discount}
                  </span>
                </div>
                <Link
                  to={bundle.href}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink py-4 font-semibold text-base shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Découvrir le pack
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-xs text-ink/60 text-center">
                  Paiement sécurisé Stripe · Téléchargement immédiat ·
                  Remboursement 14 jours
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section
        id="temoignages"
        className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 scroll-mt-24 cv-auto"
      >
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Témoignages
              </span>
              <h2 className="mt-3 text-fluid-h2 font-display font-bold text-ink text-balance">
                Ce que disent les premières lectrices.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 90}>
                <figure className="rounded-2xl border-2 border-ink bg-card p-6 shadow-bold h-full">
                  <div className="flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className={cn(
                        "h-16 w-16 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-2xl",
                        t.dark ? "bg-ink text-background" : "bg-primary text-primary-foreground",
                      )}
                    >
                      {t.initial}
                    </div>
                    <figcaption>
                      <p className="font-display font-semibold text-ink text-lg">
                        {t.name}
                      </p>
                      <p className="text-sm text-ink/60">{t.detail}</p>
                    </figcaption>
                  </div>
                  <Quote className="mt-5 h-5 w-5 text-primary" />
                  <blockquote className="mt-2 text-ink/80 leading-relaxed">
                    {t.quote}
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 sm:py-28 cv-auto">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="mt-3 text-fluid-h2 font-display font-bold text-ink text-balance">
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
                    className="border-2 border-ink rounded-2xl px-5 bg-card overflow-hidden"
                  >
                    <AccordionTrigger className="font-display text-lg font-semibold text-ink py-5 hover:no-underline [&[data-state=open]>svg]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-ink/70 leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-ink text-cream py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <Heart className="h-10 w-10 text-primary mx-auto" />
            <h2 className="mt-5 text-fluid-h2 font-display font-bold text-balance">
              Prête à prendre soin de toi ?
            </h2>
            <p className="mt-4 text-cream/75 text-lg">
              Choisis le guide qui te parle, ou le pack complet pour un
              accompagnement global. À toi de décider, à ton rythme.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-cream/40 px-6 py-3.5 font-semibold shadow-[8px_8px_0_0_rgba(255,255,255,0.15)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Découvrir les guides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={bundle.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cream/40 px-6 py-3.5 font-semibold text-cream hover:bg-cream/10 transition-colors"
              >
                Voir le pack complet
              </Link>
            </div>
            <p className="mt-6 text-sm text-cream/50">
              Paiement sécurisé Stripe · Remboursement sous 14 jours
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
