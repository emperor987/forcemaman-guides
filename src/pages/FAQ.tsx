import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  HelpCircle,
  FileText,
  CreditCard,
  RotateCcw,
  Monitor,
  BookOpen,
  Shield,
  Clock,
  Users,
  Heart,
  Mail
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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
        answer: "Les PDF sont optimisés pour tous les appareils : ordinateur, tablette, smartphone. Tu peux les imprimer si tu préfères le papier. La mise en page est pensée pour être agréable à la lecture sur écran.",
      },
      {
        question: "Les guides sont-ils mis à jour ?",
        answer: "Oui, les guides sont régulièrement mis à jour pour intégrer les dernières recommandations médicales. Si tu as acheté un guide, tu recevras une notification email lorsqu'une nouvelle version sera disponible.",
      },
      {
        question: "Puis-je imprimer les guides ?",
        answer: "Absolument. Les PDF sont conçus pour être imprimables si tu préfères le format papier. La mise en page est optimisée pour une lecture sur écran, mais reste agréable une fois imprimée.",
      },
    ],
  },
  {
    title: "Paiement & Sécurité",
    icon: CreditCard,
    questions: [
      {
        question: "Comment puis-je payer ?",
        answer: "Le paiement se fait par Stripe, de manière 100% sécurisée. Tu peux utiliser ta carte bancaire (Visa, Mastercard, American Express). Aucune donnée bancaire n'est stockée sur notre site.",
      },
      {
        question: "Le paiement est-il sécurisé ?",
        answer: "Oui, absolument. Nous utilisons Stripe, un leader mondial du paiement en ligne. Toutes les transactions sont chiffrées et sécurisées. Tu peux vérifier le cadenas dans la barre d'adresse lors du paiement.",
      },
      {
        question: "Reçois-je une facture ?",
        answer: "Oui, tu reçois automatiquement une facture par email après ton achat. Cette facture est valable pour les remboursements de mutuelle si applicable.",
      },
      {
        question: "Puis-je payer en plusieurs fois ?",
        answer: "Pour l'instant, le paiement en une seule fois est la seule option disponible. Cependant, les prix sont pensés pour être accessibles à toutes les mamans.",
      },
    ],
  },
  {
    title: "Remboursement",
    icon: RotateCcw,
    questions: [
      {
        question: "Puis-je me faire rembourser ?",
        answer: "Oui, nous appliquons une politique de remboursement sous 14 jours après l'achat, conformément à la loi sur le droit de rétractation pour les produits numériques. Contacte-nous par email si tu n'es pas satisfaite.",
      },
      {
        question: "Comment demander un remboursement ?",
        answer: "Envoie-nous un email à contact@forcemaman.fr avec ton numéro de commande. Nous traiterons ta demande sous 48 heures et procéderons au remboursement dans les plus brefs délais.",
      },
      {
        question: "Dans quels cas le remboursement est-il refusé ?",
        answer: "Le remboursement peut être refusé si tu as téléchargé le guide et l'as utilisé de manière significative. Cependant, nous restons toujours à l'écoute et cherchons une solution qui te convienne.",
      },
    ],
  },
  {
    title: "Contenu & Avertissements",
    icon: Shield,
    questions: [
      {
        question: "Les guides remplacent-ils un avis médical ?",
        answer: "Non, absolument pas. Les guides ForceMaman sont des outils d'information et d'accompagnement. Ils ne remplacent en aucun cas un avis médical professionnel. En cas de doute ou de problème de santé, consulte toujours un professionnel de santé qualifié.",
      },
      {
        question: "Les conseils sont-ils adaptés à tous les cas ?",
        answer: "Les guides présentent des informations générales basées sur les recommandations médicales actuelles. Chaque parcours post-partum est unique. Si tu as des préoccupations spécifiques, n'hésite pas à en parler à ta sage-femme ou ton médecin.",
      },
      {
        question: "Qui a écrit ces guides ?",
        answer: "Les guides sont écrits par Maria Garcia, ancienne sage-femme avec 8 ans d'expérience. Elle combine son expertise professionnelle avec son vécu personnel de maman pour offrir des conseils bienveillants et pertinents.",
      },
    ],
  },
  {
    title: "Contact & Support",
    icon: Mail,
    questions: [
      {
        question: "Comment contacter ForceMaman ?",
        answer: "Tu peux nous écrire à contact@forcemaman.fr. Nous répondons à tous les messages sous 48 heures. Pour les questions urgentes concernant un problème de santé, n'hésite pas à contacter directement un professionnel de santé.",
      },
      {
        question: "Proposez-vous un accompagnement personnalisé ?",
        answer: "Pour l'instant, les guides sont notre seul produit. Cependant, nous prévoyons d'ajouter d'autres services à terme. Inscris-toi à la newsletter pour être informée des nouveautés.",
      },
      {
        question: "Puis-je vous suggérer un sujet de guide ?",
        answer: "Bien sûr ! Nous sommes toujours à l'écoute des besoins des mamans. Envoie-nous tes suggestions à contact@forcemaman.fr. Chaque retour est précieux pour améliorer nos futurs guides.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 text-brand-terracotta mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Questions fréquentes
            </h1>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Tout ce que tu dois savoir sur nos guides, le paiement, 
              et l'utilisation de ForceMaman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-terracotta" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-text">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <Card key={qIndex} className="border-brand-card">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-brand-text mb-3">
                          {item.question}
                        </h3>
                        <p className="text-brand-text/70 leading-relaxed">
                          {item.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Tu n'as pas trouvé ta réponse ?
            </h2>
            <p className="text-brand-text/70 mb-6">
              N'hésite pas à nous écrire, nous te répondrons sous 48 heures.
            </p>
            <a
              href="mailto:contact@forcemaman.fr"
              className="inline-flex items-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@forcemaman.fr
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
