import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
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
    text: "Tu n'as pas besoin d'une liste interminable ni d'acheter tout le magasin.",
  },
  {
    number: "02",
    text: "Tu as besoin d'essentiels simples, qui tiennent même les jours sans sommeil.",
  },
  {
    number: "03",
    text: "Tu peux préparer l'arrivée de bébé sans te laisser submerger par les conseils.",
  },
];

const forYouItems = [
  "Tu te demandes de quoi tu as vraiment besoin pour l'arrivée de bébé.",
  "Tu as peur d'oublier un élément essentiel au milieu de mille conseils.",
  "Tu veux des réponses concrètes, pas une liste de plus qui stresse.",
  "Tu cherches une préparation réaliste, adaptée à ton quotidien et à ton énergie.",
];

const testimonials = [
  {
    quote:
      "J'ai enfin une liste claire, pensée par une sage-femme. Je prépare l'arrivée de bébé sereinement, sans tout retenir dans ma tête.",
    name: "Camille, future maman",
  },
  {
    quote:
      "Enfin un guide qui ne me dit pas quoi acheter en plus. C'est doux, concret, et parfait pour une future maman fatiguée.",
    name: "Léa, enceinte de 7 mois",
  },
  {
    quote:
      "Je me sens prête, sans stress. Les essentiels sont simples à rassembler, même en fin de grossesse.",
    name: "Anaïs, future maman",
  },
];

const faqItems = [
  {
    question: "Le guide est-il vraiment gratuit ?",
    answer:
      "Oui. Les 7 systèmes sont offerts, sans condition. Si tu décides un jour de passer à un guide complet, tu pourras, mais rien n'est obligatoire.",
  },
  {
    question: "Est-ce adapté à mon avancement de grossesse ?",
    answer:
      "Oui. La liste est organisée par âge gestationnel : chaque section te dit quoi préparer à quel moment, de la fin du deuxième trimestre jusqu'au jour J.",
  },
  {
    question: "Combien de temps faut-il pour commencer ?",
    answer:
      "Tu peux commencer à cocher tes premiers essentiels en moins de dix minutes après avoir reçu le guide. Aucune préparation n'est nécessaire.",
  },
  {
    question: "Vais-je recevoir trop d'emails ?",
    answer:
      "Non. Une lettre douce le dimanche, et rien d'autre. Tu peux te désinscrire en un clic à tout moment.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "La Liste de Naissance Essentielle · Guide Gratuit ForceMaman",
    description:
      "Sept essentiels pour préparer l'arrivée de bébé, pensés par une sage-femme. Un guide gratuit, clair et apaisant pour alléger la préparation.",
    url: "https://forcemaman.fr/guide-gratuit",
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
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
];

export default function GuideGratuit() {
  return (
    <Layout>
      <Seo
        title="Guide Gratuit · Ma Liste de Naissance Essentielle · ForceMaman"
        description="Reçois gratuitement la Liste de Naissance Essentielle : les 7 essentiels pour préparer l'arrivée de bébé, pensés par une sage-femme. Sans stress ni achats superflus."
        path="/guide-gratuit"
        jsonLd={jsonLd}
      />
      {/* ============ HERO ============ */}
      <section className="px-6 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.78fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="eyebrow">Guide gratuit</p>
              <h1 className="mx-auto mt-6 max-w-3xl font-serif text-[2.85rem] leading-[0.98] text-foreground sm:text-6xl lg:mx-0 lg:text-[4.65rem]">
                Les 7 essentiels qui simplifient <span className="italic">vraiment</span>{" "}
                l'arrivée de bébé.
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.75] text-foreground/68 lg:mx-0">
                Un guide clair et apaisant pour préparer l'arrivée de bébé sans
                stress, sans liste interminable et sans culpabilité.
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
                    width={800}
                    height={1000}
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
              Ce n'est pas ton énergie.{" "}
              <span className="italic">C'est tout ce que tu portes.</span>
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
                Les 7 essentiels <span className="italic">prêts à l'emploi</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/65">
                Chaque essentiel a été pensé par une sage-femme pour simplifier
                un vrai moment du quotidien avec bébé, sans le moindre superflu.
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
              <p className="eyebrow">Pour toi si</p>
              <h2 className="mt-5 font-serif text-[2.35rem] leading-[1.04] text-foreground sm:text-5xl">
                Tu veux préparer l'arrivée,{" "}
                <span className="italic">pas te stresser.</span>
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
              Prête à préparer l'arrivée de bébé{" "}
              <span className="italic">sereinement</span> ?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/68">
              Reçois gratuitement la Liste de Naissance Essentielle, offerte par
              Maria.
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
