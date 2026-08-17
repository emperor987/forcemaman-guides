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
import { ebooks, bundle } from "@/lib/ebooks";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  FileText,
  Heart,
  Monitor,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const reassurance = [
  {
    icon: ShieldCheck,
    title: "Expertise professionnelle",
    text: "Chaque guide est écrit par une sage-femme avec 8 ans d'expérience, et relu avec rigueur.",
  },
  {
    icon: Heart,
    title: "Bienveillance absolue",
    text: "Aucune culpabilité, aucune injonction. Juste des réponses claires et rassurantes.",
  },
  {
    icon: Zap,
    title: "Accès immédiat",
    text: "Paiement sécurisé Stripe et téléchargement instantané, sur tous tes appareils.",
  },
];

const intentions = [
  {
    ebookIndex: 0,
    text: "Pour que tu prépares l'arrivée de bébé avec une liste claire, sans te noyer dans les avis contradictoires.",
  },
  {
    ebookIndex: 1,
    text: "Pour que tu comprennes ce qui arrive à ton corps et saches quoi faire, sans t'inquiéter à tort.",
  },
  {
    ebookIndex: 2,
    text: "Pour que les premières semaines se vivent avec moins de charge mentale et plus de douceur.",
  },
];

const faqItems = [
  {
    icon: FileText,
    question: "Comment reçois-je les ebooks ?",
    answer: "Dès le paiement validé, tu reçois un lien de téléchargement par email. Les guides sont au format PDF, lisibles sur ordinateur, tablette ou téléphone.",
  },
  {
    icon: CreditCard,
    question: "Comment puis-je payer ?",
    answer: "Le paiement se fait par Stripe, de manière 100% sécurisée, par carte bancaire. Aucune donnée bancaire n'est stockée sur notre site.",
  },
  {
    icon: RotateCcw,
    question: "Puis-je me faire rembourser ?",
    answer: "Oui, sous 14 jours après l'achat. Contacte-nous par email et nous traitons ta demande rapidement.",
  },
  {
    icon: Monitor,
    question: "Sur quels appareils puis-je lire les guides ?",
    answer: "Les PDF sont optimisés pour tous les appareils et imprimables si tu préfères le papier.",
  },
];

export default function Guides() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
              Nos guides
            </span>
            <h1 className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance">
              Trois guides pour te soutenir.
            </h1>
            <p className="mt-6 text-lg text-ink/75 max-w-xl mx-auto text-balance">
              Écrits par Maria, ancienne sage-femme, pour t'accompagner avec
              bienveillance dans chaque étape du post-partum.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ebooks grid */}
      <section className="pb-20 sm:pb-24 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooks.map((ebook, i) => (
              <Reveal key={ebook.id} delay={i * 90}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-bold transition-transform duration-300 hover:-translate-y-1">
                  <EbookCover
                    title={ebook.title}
                    accent={ebook.accent}
                    className="w-full min-h-52 rounded-none border-0 border-b-2"
                    iconSize="h-14 w-14"
                    titleSize="text-lg"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-ink/75 text-sm leading-relaxed">
                      {ebook.tagline}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {ebook.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                          <Heart className={cn("h-4 w-4 mt-0.5 flex-shrink-0", ebook.accentText)} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t-2 border-ink/10 pt-5 mt-auto">
                      <span className="font-display text-2xl font-bold text-ink">
                        {ebook.price}
                      </span>
                      <Link
                        to={ebook.href}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-ink px-4 py-2 text-sm font-semibold text-ink shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                      >
                        Voir le guide
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle */}
      <section className="py-20 sm:py-24 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="rounded-3xl border-2 border-ink bg-card p-6 sm:p-10 shadow-[8px_8px_0_0_var(--terracotta)] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  {bundle.discount} de réduction
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink text-balance leading-tight">
                  {bundle.title}
                </h2>
                <p className="mt-3 text-ink/75">
                  {bundle.tagline} La boîte à outils idéale pour cette période
                  unique.
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-ink">
                    {bundle.price}
                  </span>
                  <span className="text-xl text-ink/50 line-through">
                    {bundle.originalPrice}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-36 aspect-[3/4]">
                  <EbookCover
                    title={ebooks[2].title}
                    accent={ebooks[2].accent}
                    className="absolute inset-0 rotate-[6deg] translate-x-2 opacity-90"
                    titleSize="text-xs"
                  />
                  <EbookCover
                    title={ebooks[1].title}
                    accent={ebooks[1].accent}
                    className="absolute inset-0 -rotate-[4deg] -translate-x-2 opacity-90"
                    titleSize="text-xs"
                  />
                  <EbookCover
                    title={ebooks[0].title}
                    accent={ebooks[0].accent}
                    className="absolute inset-0 z-10 shadow-[4px_4px_0_0_var(--ink)]"
                    titleSize="text-xs"
                  />
                </div>
                <Link
                  to={bundle.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink px-6 py-3 font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Découvrir le pack
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Réassurance */}
      <section className="py-20 sm:py-24 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="text-center">
              <h2 className="text-fluid-h2 font-display font-bold text-ink text-balance">
                Nos engagements
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reassurance.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-bold h-full">
                  <r.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-ink/70 text-sm leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi ces guides */}
      <section className="py-20 sm:py-24 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Pourquoi ces guides
              </span>
              <h2 className="mt-3 text-fluid-h2 font-display font-bold text-ink text-balance">
                Une intention pour chaque guide.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {intentions.map((intent, i) => {
              const ebook = ebooks[intent.ebookIndex];
              return (
                <Reveal key={ebook.id} delay={i * 90}>
                  <div className="rounded-2xl border-2 border-ink bg-card p-6 h-full">
                    <BookOpen className={cn("h-7 w-7", ebook.accentText)} />
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      {ebook.title}
                    </h3>
                    <p className="mt-2 text-ink/70 text-sm leading-relaxed">
                      {intent.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ courte */}
      <section className="py-20 sm:py-24 cv-auto">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <div className="text-center">
              <h2 className="text-fluid-h2 font-display font-bold text-ink text-balance">
                Questions fréquentes
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
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-primary shrink-0" />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-ink/70 leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-6 py-3 text-sm font-semibold text-ink shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Voir toutes les questions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <h2 className="text-fluid-h2 font-display font-bold text-balance">
              Prête à commencer ?
            </h2>
            <p className="mt-4 text-cream/75 text-lg">
              Choisis le guide qui te parle, ou opte pour le pack complet pour
              un accompagnement global.
            </p>
            <Link
              to={bundle.href}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-cream/40 px-6 py-3.5 font-semibold shadow-[8px_8px_0_0_rgba(255,255,255,0.15)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Découvrir le pack complet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
