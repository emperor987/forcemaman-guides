import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import NewsletterBlock from "@/components/NewsletterBlock";
import { journalArticles } from "@/lib/journal";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight, Clock } from "lucide-react";

const categoryColors = [
  "bg-brand-terracotta",
  "bg-brand-sage",
  "bg-brand-mauve",
];

export default function Journal() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
              Le journal
            </span>
            <h1 className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance">
              Des systèmes simples, expliqués{" "}
              <span className="text-primary">sans jargon</span>.
            </h1>
            <p className="mt-6 text-lg text-ink/75 text-balance">
              Articles, checklists et repères concrets pour alléger la charge
              mentale des jeunes mamans — écrits par une sage-femme, testés dans
              la vraie vie.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20 sm:pb-24 cv-auto">
        <div className="mx-auto max-w-3xl px-5">
          <div className="space-y-6">
            {journalArticles.map((article, i) => {
              const open = openId === article.id;
              return (
                <Reveal key={article.id} delay={i * 70}>
                  <article className="overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-bold">
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : article.id)}
                      className="flex w-full flex-col gap-3 p-6 text-left sm:p-8"
                      aria-expanded={open}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "inline-flex w-fit items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white",
                            categoryColors[i % categoryColors.length],
                          )}
                        >
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-ink/50">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-bold leading-snug text-ink">
                        {article.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-ink/70">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {open ? "Replier l'article" : "Lire l'article"}
                        <ArrowDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            open && "rotate-180",
                          )}
                        />
                      </span>
                    </button>
                    {open && (
                      <div className="border-t-2 border-ink/10 px-6 pb-8 sm:px-8">
                        <div className="space-y-4 pt-6 text-ink/75 leading-relaxed">
                          {article.body.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t-2 border-ink/10 pt-5">
                          <p className="text-xs text-ink/50">{article.date}</p>
                          <a
                            href="mailto:hello@forcemaman.fr?subject=Question sur un article du journal"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                          >
                            Une question ? Écris-nous
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 rounded-3xl border-2 border-ink bg-secondary/40 p-8 text-center shadow-bold">
              <p className="font-display text-xl font-semibold text-ink">
                Un système concret chaque dimanche, par email.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-ink/65">
                La lettre ForceMaman, c'est la version lente du journal : un
                système, une lecture, une pensée douce. Gratuit, sans spam.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterBlock dark />
    </Layout>
  );
}
