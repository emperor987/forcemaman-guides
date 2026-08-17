import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-background py-20">
        <Reveal>
          <div className="text-center px-4">
            <p className="font-display text-8xl font-bold text-primary">404</p>
            <h1 className="mt-4 font-display text-fluid-h2 font-bold text-ink">
              Cette page n'existe pas
            </h1>
            <p className="mt-4 text-ink/70 max-w-md mx-auto">
              Pas de panique, il n'y a rien de perdu. Tu peux retourner à la
              boutique pour retrouver les guides.
            </p>
            <Link
              to="/guides"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink px-6 py-3.5 font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Retour à la boutique
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}
