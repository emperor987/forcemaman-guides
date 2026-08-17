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
  Lock,
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

const DARK_BUTTON_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(180deg, color-mix(in oklab, var(--foreground) 92%, transparent), color-mix(in oklab, var(--foreground) 100%, transparent))",
  boxShadow:
    "0 16px 32px -16px rgba(35,33,32,0.55), 0 4px 8px -4px rgba(35,33,32,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
};

const CARD_STYLE: React.CSSProperties = {
  boxShadow:
    "0 14px 36px -22px rgba(35,33,32,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
};

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
}: ProductPageProps) {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="px-6 pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Cover */}
          <Reveal className="order-1 justify-self-center lg:order-none">
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-[2rem] bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] -rotate-2"
                aria-hidden="true"
              />
              <EbookCover
                title={title}
                accent={accent}
                textClass={coverTextColor}
                className="relative w-56 sm:w-72 lg:w-80 aspect-[3/4]"
                iconSize="h-14 w-14 sm:h-16 sm:w-16"
                titleSize="text-base sm:text-lg lg:text-xl"
              />
            </div>
          </Reveal>

          {/* Info */}
          <div className="text-center lg:text-left">
            <Reveal>
              {discount && (
                <span className="inline-flex items-center rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70">
                  {discount}
                </span>
              )}
              <h1 className="mt-5 font-serif text-[2.15rem] leading-[1.02] text-foreground sm:text-5xl">
                {title}
              </h1>
              <p className={cn("mt-3 text-base sm:text-lg", accentText)}>
                {subtitle}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 flex items-baseline justify-center gap-3 lg:justify-start">
                <span className="font-serif text-4xl text-foreground sm:text-5xl">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-lg text-foreground/45 line-through sm:text-xl">
                    {originalPrice}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="mt-8 inline-flex h-14 w-full max-w-md items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98] lg:w-auto lg:px-10"
                style={DARK_BUTTON_STYLE}
              >
                <Lock className="size-4 opacity-80" />
                <span className="text-sm tracking-wide">
                  Payer avec Stripe
                </span>
                <ArrowRight className="size-4" />
              </button>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                Téléchargement instantané · PDF · Paiement sécurisé Stripe
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div
                className="mt-8 flex items-start gap-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 text-left"
                style={CARD_STYLE}
              >
                <Info className="mt-0.5 size-4 shrink-0 text-foreground/50" />
                <p className="text-[13px] leading-relaxed text-foreground/65 sm:text-sm">
                  Ce guide est un outil d'accompagnement et d'information. Il ne
                  remplace en aucun cas un avis médical professionnel. En cas de
                  doute ou de problème de santé, consulte ta sage-femme, ton
                  médecin ou un professionnel de santé qualifié.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ DESCRIPTION ============ */}
      <section className="border-y border-border/60 bg-[color-mix(in_oklab,var(--accent)_10%,var(--background))] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">À propos</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              De quoi parle <span className="italic">ce guide ?</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-foreground/72 sm:text-base">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SOMMAIRE ============ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">Sommaire</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              Le contenu <span className="italic">du guide</span>
            </h2>
            <div
              className="mt-8 rounded-3xl border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] p-6 backdrop-blur-md sm:p-8"
              style={CARD_STYLE}
            >
              <ul className="space-y-4">
                {chapters.map((chapter, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className={cn(
                        "mt-0.5 size-5 shrink-0",
                        accentText,
                      )}
                    />
                    <span className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                      {chapter}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ APERÇU ============ */}
      <section className="border-y border-border/60 bg-[color-mix(in_oklab,var(--accent)_10%,var(--background))] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">Aperçu</p>
            <h2 className="mt-4 text-center font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-left">
              Un avant-goût <span className="italic">des pages</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {previewPages.map((page, index) => (
              <Reveal key={index} delay={index * 70}>
                <div
                  className="h-full rounded-3xl border border-foreground/10 bg-background/70 p-5"
                  style={CARD_STYLE}
                >
                  <div
                    className={cn(
                      "flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-foreground/15 p-8",
                      accent.includes("bg-brand") ? `${accent}/10` : "",
                    )}
                  >
                    <div className="text-center">
                      <FileText
                        className={cn("mx-auto mb-2 size-10 opacity-50", accentText)}
                      />
                      <p className="text-sm text-foreground/50">{page}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-sm text-foreground/50">
              Aperçu des premières pages du guide
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl leading-[1.05] text-foreground sm:text-4xl">
              Prête à <span className="italic">télécharger ?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/65 sm:text-base">
              {type === "bundle"
                ? "Les 3 guides pour un accompagnement complet du post-partum."
                : "Reçois ton guide en quelques secondes et commence à lire."}
            </p>
            <button
              type="button"
              className="mx-auto mt-8 inline-flex h-14 w-full max-w-md items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
              style={DARK_BUTTON_STYLE}
            >
              <Lock className="size-4 opacity-80" />
              <span className="text-sm tracking-wide">Payer avec Stripe</span>
              <ArrowRight className="size-4" />
            </button>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
              Paiement sécurisé par Stripe
            </p>
            <div className="mt-8">
              <Link
                to="/guides"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Retour à tous les guides
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
