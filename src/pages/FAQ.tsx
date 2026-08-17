import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
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
        answer: "Dès le paiement validé, tu reçois un lien de téléchargement par email. Les guides sont au format PDF, lisibles sur ordinateur, tablette ou téléphone. Le lien reste actif, tu peux les télécharger autant de fois que tu le souhaites.",
      },
      {
        question: "Sur quel appareil puis-je lire les guides ?",
        answer: "Les PDF sont optimisés pour tous les appareils : ordinateur, tablette, smartphone. Tu peux les imprimer si tu préfères le papier.",
      },
      {
        question: "Les guides sont-ils mis à jour ?",
        answer: "Oui, ils sont régulièrement mis à jour pour intégrer les dernières recommandations. Si tu as acheté un guide, tu seras notifiée lorsqu'une nouvelle version sera disponible.",
      },
    ],
  },
  {
    title: "Paiement & Sécurité",
    icon: CreditCard,
    questions: [
      {
        question: "Comment puis-je payer ?",
        answer: "Le paiement se fait par Stripe, de manière 100% sécurisée, par carte bancaire (Visa, Mastercard, American Express). Aucune donnée bancaire n'est stockée sur notre site.",
      },
      {
        question: "Reçois-je une facture ?",
        answer: "Oui, tu reçois automatiquement une facture par email après ton achat.",
      },
      {
        question: "Le paiement est-il sécurisé ?",
        answer: "Oui, absolument. Nous utilisons Stripe, un leader mondial du paiement en ligne. Toutes les transactions sont chiffrées et sécurisées.",
      },
    ],
  },
  {
    title: "Remboursement",
    icon: RotateCcw,
    questions: [
      {
        question: "Puis-je me faire rembourser ?",
        answer: "Oui, nous appliquons une politique de remboursement sous 14 jours après l'achat. Contacte-nous par email si tu n'es pas satisfaite.",
      },
      {
        question: "Comment demander un remboursement ?",
        answer: "Envoie-nous un email à hello@forcemaman.fr avec ton numéro de commande. Nous traitons ta demande sous 48 heures.",
      },
    ],
  },
  {
    title: "Contenu & Avertissements",
    icon: ShieldCheck,
    questions: [
      {
        question: "Les guides remplacent-ils un avis médical ?",
        answer: "Non, absolument pas. Les guides ForceMaman sont des outils d'information et d'accompagnement. Ils ne remplacent en aucun cas un avis médical professionnel. En cas de doute ou de problème de santé, consulte un professionnel de santé qualifié.",
      },
      {
        question: "Qui a écrit ces guides ?",
        answer: "Maria Garcia, ancienne sage-femme avec 8 ans d'expérience et maman. Elle combine son expertise professionnelle avec son vécu personnel pour offrir des conseils bienveillants et pertinents.",
      },
    ],
  },
  {
    title: "Contact & Support",
    icon: Mail,
    questions: [
      {
        question: "Comment contacter ForceMaman ?",
        answer: "Tu peux nous écrire à hello@forcemaman.fr. Nous répondons à tous les messages sous 48 heures. Pour une question urgente de santé, contacte directement un professionnel de santé.",
      },
      {
        question: "Puis-je vous suggérer un sujet de guide ?",
        answer: "Bien sûr ! Nous sommes toujours à l'écoute des besoins des mamans. Envoie-nous tes suggestions à hello@forcemaman.fr.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
              FAQ
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl font-bold text-ink text-balance leading-[0.95]">
              Tes questions, nos réponses.
            </h1>
            <p className="mt-6 text-lg text-ink/75 max-w-xl mx-auto text-balance">
              Tout ce que tu dois savoir sur les guides, le paiement et
              l'utilisation de ForceMaman.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <Reveal key={category.title} delay={catIndex * 40}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-2xl border-2 border-ink bg-card p-6 shadow-bold"
                    >
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-ink/70 leading-relaxed text-sm">
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

      {/* Contact */}
      <section className="bg-ink text-cream py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <HelpCircle className="h-10 w-10 text-primary mx-auto" />
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-balance">
              Tu n'as pas trouvé ta réponse ?
            </h2>
            <p className="mt-4 text-cream/75 text-lg">
              Écris-nous, nous te répondons sous 48 heures.
            </p>
            <a
              href="mailto:hello@forcemaman.fr"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-cream/40 px-6 py-3.5 font-semibold shadow-[8px_8px_0_0_rgba(255,255,255,0.15)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <Mail className="h-4 w-4" />
              hello@forcemaman.fr
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
