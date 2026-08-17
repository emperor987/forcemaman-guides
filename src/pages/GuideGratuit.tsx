import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import EmailForm from "@/components/EmailForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { freeGuideSystems } from "@/lib/ebooks";
import { images } from "@/lib/assets";
import { Check, Mail } from "lucide-react";

const reassurance = [
  "Gratuit",
  "Désinscription en un clic",
  "Aucun spam",
  "Créé par une maman",
];

const problemCards = [
  {
    number: "01",
    text: "Vous n'avez pas besoin d'une nouvelle routine parfaite.",
  },
  {
    number: "02",
    text: "Vous avez besoin de systèmes assez simples pour tenir les jours sans sommeil.",
  },
  {
    number: "03",
    text: "Vous pouvez alléger votre charge mentale sans transformer toute votre maison.",
  },
];

const forYouItems = [
  "Vous avez constamment l'impression de devoir penser à tout.",
  "Vous oubliez des détails importants parce que votre cerveau est déjà plein.",
  "Vous voulez des solutions concrètes, pas des injonctions à faire plus.",
  "Vous cherchez une organisation réaliste avec un bébé, un quotidien mouvant et peu d'énergie.",
];

const testimonials = [
  {
    quote:
      "J'ai arrêté de me sentir responsable de tout retenir. Le système du cerveau externe m'a vraiment apaisée.",
    name: "Camille, maman d'un bébé de 4 mois",
  },
  {
    quote:
      "Ce n'est pas une méthode parfaite de plus. C'est doux, concret, et faisable même quand on est épuisée.",
    name: "Léa, jeune maman",
  },
  {
    quote:
      "J'ai mis en place deux systèmes seulement, et la maison me semble déjà moins lourde à porter.",
    name: "Anaïs, maman en postpartum",
  },
];

const faqItems = [
  {
    question: "Le guide est-il vraiment gratuit ?",
    answer:
      "Oui. Les 7 systèmes sont offerts, sans condition. Si tu décides un jour de passer à un guide complet, tu pourras, mais rien n'est obligatoire.",
  },
  {
    question: "Est-ce adapté si mon bébé vient de naître ?",
    answer:
      "Oui, le guide est pensé pour les premières semaines comme pour les mois qui suivent. Chaque système s'installe en quelques minutes, même avec un nouveau-né dans les bras.",
  },
  {
    question: "Combien de temps faut-il pour commencer ?",
    answer:
      "Tu peux poser ton premier système en moins de dix minutes après avoir reçu le guide. Aucune préparation n'est nécessaire.",
  },
  {
    question: "Vais-je recevoir trop d'emails ?",
    answer:
      "Non. Une lettre douce le dimanche, et rien d'autre. Tu peux te désinscrire en un clic à tout moment.",
  },
];

export default function GuideGratuit() {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="px-6 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.78fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="eyebrow">Guide gratuit</p>
              <h1 className="mx-auto mt-6 max-w-3xl font-serif text-[2.85rem] leading-[0.98] text-foreground sm:text-6xl lg:mx-0 lg:text-[4.65rem]">
                7 systèmes qui simplifient <span className="italic">vraiment</span> la vie avec
                un bébé.
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.75] text-foreground/68 lg:mx-0">
                Un guide clair, apaisant et concret pour alléger votre charge
                mentale sans ajouter une routine parfaite de plus à votre
                quotidien.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 lg:max-w-md">
                <EmailForm id="hero-guide" className="mx-auto w-full max-w-md" />
                <ul className="mx-auto mt-5 flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-foreground/55 lg:justify-start">
                  {reassurance.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mx-auto w-full max-w-[19rem] lg:max-w-sm">
              <div className="relative rounded-[1.75rem] bg-[color-mix(in_oklab,var(--card)_86%,var(--accent))] p-4 shadow-2xl">
                <div className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-card">
                  <img
                    src={images.guideEditorial}
                    alt="Aperçu du guide gratuit 7 systèmes"
                    className="h-auto w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ LE VRAI PROBLÈME ============ */}
      <section className="border-y border-border/60 bg-card/35 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Le vrai problème</p>
            <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
              Ce n'est pas votre énergie.{" "}
              <span className="italic">C'est tout ce que vous portez.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {problemCards.map((card, i) => (
              <Reveal key={card.number} delay={i * 80}>
                <div className="h-full rounded-3xl border border-border/60 bg-background px-6 py-8 text-left shadow-sm">
                  <span className="font-serif text-4xl italic text-foreground/25">
                    {card.number}
                  </span>
                  <p className="mt-5 text-[15px] leading-relaxed text-foreground/72">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DANS LE GUIDE — LES 7 SYSTÈMES ============ */}
      <section className="px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Dans le guide</p>
              <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
                Les 7 systèmes <span className="italic">prêts à poser</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/65">
                Chaque système a été pensé pour réduire une décision répétitive,
                sécuriser un moment fragile ou libérer de la place dans votre
                tête.
              </p>
            </div>
          </Reveal>

          {/* Mobile : liste empilée */}
          <div className="mt-14 space-y-3 sm:hidden">
            {freeGuideSystems.map((system) => (
              <div
                key={system.number}
                className="rounded-3xl border border-border/60 bg-card/55 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-4xl leading-none text-foreground/22">
                    {system.number}
                  </span>
                  <Check className="size-4 text-foreground/30" />
                </div>
                <h3 className="mt-6 font-serif text-[1.45rem] leading-[1.05] text-foreground">
                  {system.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/62">
                  {system.text}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop : grille 7 colonnes */}
          <div className="mt-14 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-7">
            {freeGuideSystems.map((system) => (
              <Reveal key={system.number}>
                <article className="h-full rounded-3xl border border-border/60 bg-card/55 p-6 shadow-sm lg:col-span-1 lg:min-h-[18rem]">
                  <div className="flex items-center justify-between gap-4 lg:block">
                    <span className="font-serif text-4xl leading-none text-foreground/22">
                      {system.number}
                    </span>
                    <Check className="size-4 text-foreground/30" />
                  </div>
                  <h3 className="mt-6 font-serif text-[1.45rem] leading-[1.05] text-foreground lg:text-[1.35rem]">
                    {system.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/62">
                    {system.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POUR VOUS SI ============ */}
      <section className="border-y border-border/60 bg-[color-mix(in_oklab,var(--secondary)_42%,transparent)] px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Pour vous si</p>
              <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
                Vous voulez moins penser,{" "}
                <span className="italic">pas mieux performer.</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {forYouItems.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex gap-4 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
                  <Check className="mt-1 size-4 shrink-0 text-foreground/40" />
                  <p className="text-[15px] leading-relaxed text-foreground/72">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ELLES L'ONT REÇU ============ */}
      <section className="px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Elles l'ont reçu</p>
              <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
                Une sensation de clarté, <span className="italic">sans pression.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/55 p-7 shadow-sm">
                  <blockquote className="font-serif text-[1.55rem] leading-[1.12] text-foreground">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-9 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="border-y border-border/60 bg-card/35 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Questions fréquentes</p>
              <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
                Avant de recevoir <span className="italic">le guide</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="mt-12">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="py-6 text-left font-serif text-xl text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-foreground/65">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_32%,var(--background)),color-mix(in_oklab,var(--card)_86%,var(--background))_48%,var(--background))] px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-24">
          <Reveal>
            <p className="eyebrow">Guide gratuit</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[2.45rem] leading-[1.02] text-foreground sm:text-5xl">
              Prête à alléger votre <span className="italic">charge mentale</span> ?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/68">
              Recevez gratuitement les 7 systèmes qui simplifient vraiment la
              vie avec un bébé.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-md">
              <EmailForm id="final-guide" className="mx-auto w-full max-w-md" />
              <ul className="mx-auto mt-5 flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                {reassurance.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <Mail className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
