import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { journalArticles, journalCategories } from "@/lib/journal";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";

const piliers = [
  {
    tag: "Pilier · 01",
    title: journalArticles[0].title,
  },
  {
    tag: "Méthode · 02",
    title: journalArticles[1].title,
  },
  {
    tag: "Système · 03",
    title: journalArticles[2].title,
  },
];

export default function Journal() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");

  const q = query.trim().toLowerCase();

  const gridArticles = useMemo(
    () =>
      journalArticles.filter(
        (article) =>
          (category === "Tous" || article.category === category) &&
          (!q ||
            [article.title, article.category, article.excerpt]
              .join(" ")
              .toLowerCase()
              .includes(q)),
      ),
    [q, category],
  );

  const featured = journalArticles[0];

  return (
    <Layout>
      <div className="bg-background">
        {/* ============ HERO ============ */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center lg:pt-24">
            <Reveal>
              <p className="eyebrow">Le Journal</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl">
                Lectures lentes <span className="italic">pour mères pressées.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Des essais, des protocoles et des rituels — toujours réalistes,
                jamais culpabilisants.
              </p>
              <div className="mx-auto mt-8 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Chercher un article, un rituel, un système…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-12 w-full rounded-full border border-border bg-background pl-11 pr-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Pills catégories */}
          <div className="mx-auto max-w-6xl px-6 pb-8 lg:px-12">
            <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
              <div className="flex min-w-max items-center gap-2 lg:flex-wrap lg:justify-center lg:gap-3">
                {journalCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors",
                      category === cat
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMMENCEZ ICI ============ */}
        <section className="border-b border-border/60 bg-[color-mix(in_oklab,var(--accent)_15%,var(--background))]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">Commencez ici</p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    Trois piliers <span className="italic">pour commencer.</span>
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {piliers.map((pilier, i) => (
                <Reveal key={pilier.tag} delay={i * 80}>
                  <a
                    href="#lecture"
                    className="group flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/70 p-7 shadow-[0_30px_80px_-60px_rgba(35,33,32,0.35)] transition-all hover:border-foreground/40"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                        {pilier.tag}
                      </p>
                      <h3 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-[26px]">
                        {pilier.title}
                      </h3>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
                      Lire l'article <ArrowRight className="size-3" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ À LA UNE ============ */}
        {featured && (
          <section className="border-b border-border/60">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
              <Reveal>
                <a href="#lecture" className="group grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted sm:aspect-[16/11]">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center lg:col-span-5">
                    <p className="eyebrow">À la une — {featured.category}</p>
                    <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                      {featured.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {featured.date} · {featured.readTime} de lecture
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
          </section>
        )}

        {/* ============ GRILLE D'ARTICLES ============ */}
        <section id="lecture">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-28">
            {gridArticles.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground">
                Aucun article ne correspond à cette recherche.
              </p>
            ) : (
              <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {gridArticles.map((article, i) => (
                  <Reveal key={article.id} delay={(i % 3) * 60}>
                    <a href="#lecture" className="group block">
                      <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        />
                        <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                          {article.category}
                        </span>
                      </div>
                      <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {article.readTime} de lecture
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-primary sm:text-[26px]">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {article.excerpt}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
