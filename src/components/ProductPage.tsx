import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  FileText,
  ShoppingCart
} from "lucide-react";

interface ProductPageProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  accent: string;
  accentText: string;
  description: string[];
  chapters: string[];
  previewPages: string[];
  type?: "ebook" | "bundle";
}

export default function ProductPage({
  title,
  subtitle,
  price,
  originalPrice,
  discount,
  accent,
  accentText,
  description,
  chapters,
  previewPages,
  type = "ebook",
}: ProductPageProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className={`${accent} w-64 h-80 md:w-80 md:h-96 rounded-2xl flex items-center justify-center shadow-2xl`}>
                <div className="text-center text-white">
                  <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium px-8 opacity-90">{title}</p>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {discount && (
                <Badge className={`${accent} text-white mb-4`}>
                  {discount}
                </Badge>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
                {title}
              </h1>
              <p className={`text-xl ${accentText} mb-6`}>
                {subtitle}
              </p>
              
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-brand-text">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-xl text-brand-text/50 line-through">
                    {originalPrice}
                  </span>
                )}
              </div>

              <Button
                size="lg"
                className={`${accent} hover:opacity-90 text-white px-8 mb-8`}
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                Ajouter au panier
              </Button>

              <p className="text-sm text-brand-text/60">
                Téléchargement instantané • Format PDF • Paiement sécurisé Stripe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-8">
              À propos de ce guide
            </h2>
            <div className="space-y-4 text-brand-text/80 leading-relaxed">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-8">
              Sommaire
            </h2>
            <Card className="border-brand-card">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {chapters.map((chapter, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${accentText} mt-0.5 flex-shrink-0`} />
                      <span className="text-brand-text/80">{chapter}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-8">
              Aperçu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {previewPages.map((page, index) => (
                <Card key={index} className="border-brand-card">
                  <CardContent className="p-6">
                    <div className={`${accent}/10 rounded-xl p-8 flex items-center justify-center min-h-[200px]`}>
                      <div className="text-center">
                        <FileText className={`w-12 h-12 ${accentText} mx-auto mb-2 opacity-50`} />
                        <p className="text-sm text-brand-text/50">{page}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-brand-text/50 mt-6">
              Aperçu des premières pages du guide
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              Prête à télécharger ?
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto mb-8">
              {type === "bundle" 
                ? "Les 3 guides pour un accompagnement complet du post-partum."
                : "Reçois ton guide en quelques secondes et commence à lire."}
            </p>
            <Button
              size="lg"
              className={`${accent} hover:opacity-90 text-white px-8 mb-4`}
            >
              <ShoppingCart className="mr-2 w-5 h-5" />
              Ajouter au panier
            </Button>
            <p className="text-sm text-brand-text/60">
              Paiement sécurisé par Stripe
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
