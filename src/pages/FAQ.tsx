import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import AccentDots from "@/components/AccentDots";
import {
  BookOpen,
  CreditCard,
  HelpCircle,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const faqCategories = [
  {
    title: "Les Guides",
    icon: BookOpen,
    questions: [
      {
        question: "Comment reçois-je les ebooks ?",
        answer:
          "Dès le paiement validé, tu reçois un lien de téléchargement par email. Les guides sont au format PDF, lisibles sur ordinateur, tablette ou téléphone. Le lien reste actif, tu peux les télécharger autant de fois que tu le souhaites.",
      },
      {
        question: "Sur quel appareil puis-je lire les guides ?",
        answer:
          "Les PDF sont optimisés pour tous les appareils : ordinateur, tablette, smartphone. Tu peux les imprimer si tu préfères le papier.",
      },
      {
        question: "Les guides sont-ils mis à jour ?",
        answer:
          "Oui, ils sont régulièrement mis à jour pour intégrer les dernières recommandations. Si tu as acheté un guide, tu seras notifiée lorsqu'une nouvelle version sera disponible.",
      },
    ],
  },
  {
    title: "Paiement & Sécurité",
    icon: CreditCard,
    questions: [
      {
        question: "Comment puis-je payer ?",
        answer:
          "Le paiement se fait par Stripe, de manière 100% sécurisée, par carte bancaire (Visa, Mastercard, American Express). Aucune donnée bancaire n'est stockée sur notre site.",
      },
      {
        question: "Reçois-je une facture ?",
        answer:
          "Oui, tu reçois automatiquement une facture par email après ton achat.",
      },
      {
        question: "Le paiement est-il sécurisé ?",
        answer:
          "Oui, absolument. Nous utilisons Stripe, un leader mondial du paiement en ligne. Toutes les transactions sont chiffrées et sécurisées.",
      },
    ],
  },
  {
    title: "Remboursement",
    icon: RotateCcw,
    questions: [
      {
        question: "Puis-je me faire rembourser ?",
        answer:
          "Oui, nous appliquons une politique de remboursement sous 14 jours après l'achat. Contacte-nous par email si tu n'es pas satisfaite.",
      },
      {
        question: "Comment demander un remboursement ?",
        answer:
          "Envoie-nous un email à hello@forcemaman.fr avec ton numéro de commande. Nous traitons ta demande sous 48 heures.",
      },
    ],
  },
  {
    title: "Contenu & Avertissements",
    icon: ShieldCheck,
    questions: [
      {
        question: "Les guides remplacent-ils un avis médical ?",
        answer:
          "Non, absolument pas. Les guides ForceMaman sont des outils d'information et d'accompagnement. Ils ne remplacent en aucun cas un avis médical professionnel. En cas de doute ou de problème de santé, consulte un professionnel de santé qualifié.",
      },
      {
        question: "Qui a écrit ces guides ?",
        answer:
          "Maria Garcia, ancienne sage-femme avec 8 ans d'expérience et maman. Elle combine son expertise professionnelle avec son vécu personnel pour offrir des conseils bienveillants et pertinents.",
      },
    ],
  },
  {
    title: "Contact & Support",
    icon: Mail,
    questions: [
      {
        question: "Comment contacter ForceMaman ?",
        answer:
          "Tu peux nous écrire à hello@forcemaman.fr. Nous répondons à tous les messages sous 48 heures. Pour une question urgente de santé, contacte directement un professionnel de santé.",
      },
      {
        question: "Puis-je vous suggérer un sujet de guide ?",
        answer:
          "Bien sûr ! Nous sommes toujours à l'écoute des besoins des mamans. Envoie-nous tes suggestions à hello@forcemaman.fr.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

export default function FAQ() {
  return (
    <Layout>
      <Seo
        title="FAQ · Questions fréquentes sur les guides ForceMaman"
        description="Tout savoir sur les ebooks ForceMaman : format PDF, paiement Stripe sécurisé, remboursement sous 14 jours, compatibilité de lecture et avertissements."
        path="/faq"
        jsonLd={jsonLd}
      />
      {/* ============ HEADER ============ */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-16 text-center lg:pt-24">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <AccentDots className="mt-4" />
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl">
              Tes questions, <span className="italic">nos réponses.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tout ce que tu dois savoir sur les guides, le paiement et
              l'utilisation de ForceMaman.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CATÉGORIES ============ */}
      <section className="cv-auto py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-14">
            {faqCategories.map((category, catIndex) => (
              <Reveal key={category.title} delay={(catIndex % 2) * 60}>
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-[color-mix(in_oklab,var(--accent)_35%,var(--background))]">
                    <category.icon className="size-4 text-foreground/70" />
                  </span>
                  <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                    {category.title}
                  </h2>
                </div>
                <div className="mt-6 space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-3xl border border-border/60 bg-card/55 p-6 shadow-[0_14px_36px_-22px_rgba(35,33,32,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] sm:p-7"
                    >
                      <h3 className="font-serif text-xl leading-snug text-foreground">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="cv-auto border-t border-border/60 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <HelpCircle className="mx-auto size-8 text-foreground/40" />
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Tu n'as pas trouvé <span className="italic">ta réponse ?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Écris-nous, nous te répondons sous 48 heures.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="size-4" />
              Nous écrire
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
