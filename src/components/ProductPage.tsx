import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import EbookCover from "@/components/EbookCover";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Info,
  ShoppingCart,
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
  coverTextColor?: string;
  buttonAccent?: string;
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
  coverTextColor = "text-white",
  buttonAccent,
}: ProductPageProps) {
  const ctaAccent = buttonAccent ?? accent;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Cover */}
            <Reveal className="justify-self-center lg:justify-self-start">
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-rose-soft/50 rounded-3xl -rotate-2"
                  aria-hidden="true"
                />
                <EbookCover
                  title={title}
                  accent={accent}
                  textClass={coverTextColor}
                  className="relative w-64 sm:w-80 aspect-[3/4] shadow-bold"
                  iconSize="h-16 w-16"
                  titleSize="text-lg sm:text-xl"
                />
              </div>
            </Reveal>

            {/* Info */}
            <div>
              <Reveal>
                {discount && (
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                    {discount}
                  </span>
                )}
                <h1 className="mt-5 font-display text-fluid-h2 font-bold text-ink text-balance leading-[0.98]">
                  {title}
                </h1>
                <p className={cn("mt-3 text-lg font-medium", accentText)}>
                  {subtitle}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-ink">
                    {price}
                  </span>
                  {originalPrice && (
                    <span className="text-xl text-ink/50 line-through">
                      {originalPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink px-8 py-4 font-semibold text-base shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Ajouter au panier
                </button>
                <p className="mt-3 text-sm text-ink/60">
                  Téléchargement instantané · Format PDF · Paiement sécurisé
                  Stripe
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-ink/20 bg-secondary/40 p-4">
                  <Info className="h-5 w-5 text-ink/60 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-ink/70 leading-relaxed">
                    Ce guide est un outil d'accompagnement et d'information. Il
                    ne remplace en aucun cas un avis médical professionnel. En
                    cas de doute ou de problème de santé, consulte ta
                    sage-femme, ton médecin ou un professionnel de santé
                    qualifié.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-20 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              À propos
            </span>
            <h2 className="mt-3 font-display text-fluid-h3 font-bold text-ink">
              De quoi parle ce guide ?
            </h2>
            <div className="mt-6 space-y-4 text-ink/80 leading-relaxed">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-16 sm:py-20 cv-auto">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sommaire
            </span>
            <h2 className="mt-3 font-display text-fluid-h3 font-bold text-ink">
              Le contenu du guide
            </h2>
            <div className="mt-8 rounded-3xl border-2 border-ink bg-card p-6 sm:p-8 shadow-bold">
              <ul className="space-y-4">
                {chapters.map((chapter, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className={cn("h-5 w-5 mt-0.5 flex-shrink-0", accentText)}
                    />
                    <span className="text-ink/80">{chapter}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aperçu */}
      <section className="py-16 sm:py-20 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Aperçu
            </span>
            <h2 className="mt-3 font-display text-fluid-h3 font-bold text-ink">
              Un avant-goût des pages
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewPages.map((page, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-bold h-full">
                  <div
                    className={cn(
                      "rounded-xl p-8 flex items-center justify-center min-h-[180px] border-2 border-dashed border-ink/20",
                      `${accent}/10`,
                    )}
                  >
                    <div className="text-center">
                      <FileText
                        className={cn("h-10 w-10 mx-auto mb-2 opacity-50", accentText)}
                      />
                      <p className="text-sm text-ink/50">{page}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-sm text-ink/50 mt-6">
              Aperçu des premières pages du guide
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-fluid-h3 font-bold text-ink">
              Prête à télécharger ?
            </h2>
            <p className="mt-3 text-ink/70 max-w-xl mx-auto">
              {type === "bundle"
                ? "Les 3 guides pour un accompagnement complet du post-partum."
                : "Reçois ton guide en quelques secondes et commence à lire."}
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground border-2 border-ink px-8 py-4 font-semibold text-base shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <ShoppingCart className="h-5 w-5" />
              Ajouter au panier
            </button>
            <p className="mt-3 text-sm text-ink/60">
              Paiement sécurisé par Stripe
            </p>
            <div className="mt-6">
              <Link
                to="/guides"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Retour à tous les guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
