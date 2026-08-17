import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[70vh] flex items-center justify-center bg-brand-cream"
      >
        <div className="text-center px-4">
          <p className="text-7xl font-bold text-brand-terracotta mb-4">404</p>
          <h1 className="text-3xl font-bold text-brand-text mb-4">
            Cette page n'existe pas
          </h1>
          <p className="text-brand-text/70 mb-8 max-w-md mx-auto">
            Pas de panique, il n'y a rien de perdu. Tu peux retourner à la
            boutique pour retrouver les guides.
          </p>
          <Button asChild className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white">
            <Link to="/guides">Retour à la boutique</Link>
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
}
