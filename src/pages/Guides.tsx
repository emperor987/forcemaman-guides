import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Shield,
  Heart,
  Clock,
  HelpCircle,
  FileText,
  CreditCard,
  RotateCcw,
  Monitor
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ebooks = [
  {
    id: "liste-naissance",
    title: "Ma Liste Naissance Complète",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    price: "7,90€",
    href: "/guides/liste-naissance",
    description: "Tout ce qu'il faut préparer sereinement l'arrivée de bébé",
    features: [
      "Liste complète par âge gestationnel",
      "Essentiels vs. accessoires",
      "Conseils de sage-femme",
    ],
  },
  {
    id: "corps-apres",
    title: "Mon Corps Après l'Accouchement",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    price: "9,90€",
    href: "/guides/corps-apres",
    description: "Comprendre et accompagner les changements de ton corps",
    features: [
      "Récupération physique guidée",
      "Séquences pelvic floor",
      "Signaux d'alerte à connaître",
    ],
  },
  {
    id: "charge-mentale",
    title: "Charge Mentale & 40 Premiers Jours",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    price: "11,90€",
    href: "/guides/charge-mentale",
    description: "Gérer le tsunami émotionnel des premières semaines",
    features: [
      "Gestion de la charge mentale",
      "Communication en couple",
      "Rituels d'autosoins",
    ],
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
    answer: "Le paiement se fait par Stripe, de manière 100% sécurisée. Tu peux utiliser ta carte bancaire. Aucune donnée bancaire n'est stockée sur notre site.",
  },
  {
    icon: RotateCcw,
    question: "Puis-je me faire rembourser ?",
    answer: "Oui, nous appliquons une politique de remboursement sous 14 jours après l'achat. Contacte-nous par email si tu n'es pas satisfaite.",
  },
  {
    icon: Monitor,
    question: "Sur quel appareil puis-je lire les guides ?",
    answer: "Les PDF sont optimisés pour tous les appareils : ordinateur, tablette, smartphone. Tu peux les imprimer si tu préfères le papier.",
  },
];

export default function Guides() {
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
            <Badge className="bg-brand-terracotta/10 text-brand-terracotta mb-6 px-4 py-1.5">
              Nos guides
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Des guides pensés pour toi
            </h1>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Écrits par Maria, ancienne sage-femme, pour t'accompagner 
              avec bienveillance dans chaque étape du post-partum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ebooks Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-0">
                    {/* Cover placeholder */}
                    <div className={`${ebook.accent} h-48 flex items-center justify-center rounded-t-xl`}>
                      <BookOpen className="w-16 h-16 text-white/80" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-text mb-2">
                        {ebook.title}
                      </h3>
                      <p className="text-brand-text/70 mb-4">
                        {ebook.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {ebook.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-brand-text/70">
                            <Heart className={`w-4 h-4 ${ebook.accentText} mt-0.5 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-brand-card">
                        <span className="text-2xl font-bold text-brand-text">
                          {ebook.price}
                        </span>
                        <Button
                          asChild
                          className={`${ebook.accent} hover:opacity-90 text-white`}
                        >
                          <Link to={ebook.href}>
                            Voir le guide
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <Badge className="bg-brand-terracotta text-white mb-4">
                      <Sparkles className="w-4 h-4 mr-1" />
                      -23% de réduction
                    </Badge>
                    <h2 className="text-3xl font-bold text-brand-text mb-4">
                      Pack Complet ForceMaman
                    </h2>
                    <p className="text-brand-text/70 mb-6">
                      Les 3 guides réunis pour un accompagnement complet du post-partum. 
                      La boîte à outils idéale pour cette période unique.
                    </p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold text-brand-terracotta">
                        22,90€
                      </span>
                      <span className="text-xl text-brand-text/50 line-through">
                        29,70€
                      </span>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white"
                    >
                      <Link to="/guides/bundle">
                        Découvrir le pack
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl bg-brand-card flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-brand-terracotta" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why These Guides Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Pourquoi ces guides ?
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto">
              Parce que la période post-partum mérite d'être vécue sereinement, 
              avec les bons outils et sans culpabilité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 ${ebook.accent} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">
                  {ebook.title}
                </h3>
                <p className="text-sm text-brand-text/70">
                  {ebook.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Nos engagements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expertise professionnelle",
                description: "Chaque guide est écrit par une sage-femme avec 8 ans d'expérience",
              },
              {
                icon: Heart,
                title: "Bienveillance absolue",
                description: "Z culpabilité, z injonction. Juste de l'accompagnement humain",
              },
              {
                icon: Clock,
                title: "Accès immédiat",
                description: "Télécharge et lis tes guides en quelques secondes",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-brand-card bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-terracotta/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-terracotta" />
                    </div>
                    <h3 className="font-semibold text-brand-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-text/70">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Questions fréquentes
            </h2>
            <p className="text-brand-text/70">
              Tout ce que tu dois savoir avant de télécharger tes guides.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-brand-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-brand-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-text mb-2">
                          {item.question}
                        </h3>
                        <p className="text-sm text-brand-text/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Prête à commencer ?
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto mb-8">
              Choisis le guide qui te parle, ou opte pour le pack complet 
              pour un accompagnement global.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8"
            >
              <Link to="/guides/bundle">
                Découvrir le pack complet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
