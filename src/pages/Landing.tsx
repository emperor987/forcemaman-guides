import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  BookOpen, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const guides = [
  {
    title: "Ma Liste Naissance Complète",
    accent: "bg-brand-terracotta",
    price: "7,90€",
    href: "/guides/liste-naissance",
    description: "Tout ce qu'il faut préparer sereinement l'arrivée de bébé",
  },
  {
    title: "Mon Corps Après l'Accouchement",
    accent: "bg-brand-sage",
    price: "9,90€",
    href: "/guides/corps-apres",
    description: "Comprendre et accompagner les changements de ton corps",
  },
  {
    title: "Charge Mentale & 40 Premiers Jours",
    accent: "bg-brand-mauve",
    price: "11,90€",
    href: "/guides/charge-mentale",
    description: "Gérer le tsunami émotionnel des premières semaines",
  },
];

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-brand-cream py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-brand-terracotta/10 text-brand-terracotta mb-6 px-4 py-1.5">
              Guides bienveillants pour mamans
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-6 leading-tight">
              Tu viens d'accoucher.
              <br />
              <span className="text-brand-terracotta">
                Maintenant, on s'occupe de toi.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text/70 mb-8 leading-relaxed">
              Des guides écrits par une sage-femme qui a elle-même vécu ce que tu vis. 
              Pas de culpabilité, pas d'injonctions. Juste des réponses claires, 
              bienveillantes et utiles pour traverser cette période.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8"
              >
                <Link to="/guides">
                  Découvrir les guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-text/20 text-brand-text hover:bg-brand-card"
              >
                <a href="#maria">L'histoire de Maria</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
      </section>

      {/* Maria's Story Section */}
      <section id="maria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Photo medallion */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-terracotta/20 to-brand-sage/20 flex items-center justify-center border-4 border-brand-card">
                  <div className="w-44 h-44 rounded-full bg-brand-card flex items-center justify-center">
                    <span className="text-6xl">👩‍⚕️</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
                  Je m'appelle Maria.
                </h2>
                <div className="space-y-4 text-brand-text/80 leading-relaxed">
                  <p>
                    Sage-femme pendant 8 ans, j'ai accompagné des centaines de mamans 
                    le jour de l'accouchement. Et puis un jour, c'est moi qui ai eu ma 
                    fille. Et j'ai découvert ce que personne ne m'avait dit : que le 
                    plus dur commence souvent après, une fois rentrée à la maison, 
                    seule avec ce petit être et toutes ces questions.
                  </p>
                  <p>
                    ForceMaman, c'est les guides que j'aurais aimé avoir entre les mains 
                    ce jour-là. Écrits avec ce que je sais en tant que professionnelle, 
                    et ce que j'ai vécu en tant que maman.
                  </p>
                </div>
                <p className="mt-6 font-medium text-brand-text italic">
                  Maria, fondatrice de ForceMaman
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guides Preview Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Trois guides pour te soutenir
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto">
              Chaque guide aborde une étape essentielle du post-partum, 
              avec des conseils pratiques et rassurants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${guide.accent} rounded-xl flex items-center justify-center mb-4`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-brand-text/70 mb-4">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brand-text">
                        {guide.price}
                      </span>
                      <Button
                        asChild
                        variant="outline"
                        className="border-brand-text/20"
                      >
                        <Link to={guide.href}>
                          Voir le guide
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="link"
              className="text-brand-terracotta"
            >
              <Link to="/guides">
                Voir tous les guides
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bundle Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-brand-terracotta/10 via-brand-card to-brand-sage/10">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
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
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-brand-card flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-brand-terracotta" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Pourquoi faire confiance à ForceMaman ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Écrits par une professionnelle",
                description: "8 ans de sage-femme, une expertise reconnue",
              },
              {
                icon: Heart,
                title: "Ton bienveillant",
                description: "Z culpabilité, z injonction. Juste de l'accompagnement",
              },
              {
                icon: Clock,
                title: "Accès instantané",
                description: "Télécharge tes guides en quelques secondes",
              },
              {
                icon: Users,
                title: "Déjà des centaines de mamans",
                description: "Rejointes par des femmes qui témoignent",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-brand-card bg-brand-cream/50">
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

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Prête à prendre soin de toi ?
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto mb-8">
              Tu n'as pas à traverser cette période seule. 
              Nos guides sont là pour t'accompagner, à ton rythme.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8"
            >
              <Link to="/guides">
                Voir les guides
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
