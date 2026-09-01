import { Link, useParams } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";
import { journalArticles, articleSrc } from "@/lib/journal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function JournalArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = journalArticles.find((a) => a.id === slug);

  if (!article) {
    return (
      <Layout>
        <Seo
          title="Article introuvable · Le Journal ForceMaman"
          description="Cet article n'existe pas. Retrouve tous les articles du Journal ForceMaman."
          path={`/journal/${slug ?? ""}`}
          noindex
        />
        <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
          <p className="font-serif text-3xl italic text-foreground/60">
            Cette page s'est perdue quelque part.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Pas de panique, tous les articles sont encore là.
          </p>
          <Link
            to="/journal"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowLeft className="size-3" />
            Retour au Journal
          </Link>
        </div>
      </Layout>
    );
  }

  const siteOrigin = "https://forcemaman.store";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      inLanguage: "fr-FR",
      image: `${siteOrigin}${articleSrc(article)}`,
      mainEntityOfPage: `${siteOrigin}/journal/${article.id}`,
      author: {
        "@type": "Person",
        name: "Maria Garcia",
        jobTitle: "Fondatrice de ForceMaman, ancienne sage-femme",
      },
      publisher: {
        "@type": "Organization",
        name: "ForceMaman",
        logo: { "@type": "ImageObject", url: `${siteOrigin}/favicon.svg` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteOrigin}/` },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${siteOrigin}/journal` },
        { "@type": "ListItem", position: 3, name: article.title, item: `${siteOrigin}/journal/${article.id}` },
      ],
    },
  ];

  return (
    <Layout>
      <Seo
        title={`${article.title} · Le Journal ForceMaman`}
        description={article.excerpt}
        path={`/journal/${article.id}`}
        image={`${siteOrigin}${articleSrc(article)}`}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        jsonLd={jsonLd}
      />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 lg:pt-24">
        <Reveal>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3" />
            Le Journal
          </Link>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {article.category} · {article.date} · {article.readTime} de lecture
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-muted">
            <OptimizedImage
              image={article.image}
              alt={article.title}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 space-y-6 text-[16px] leading-[1.85] text-foreground/78 sm:text-[17px]">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">
            Cet article est un partage d'expérience et d'information. Il ne
            remplace pas un avis médical professionnel : en cas de doute, parle
            à ta sage-femme ou à ton médecin.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-10 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Continuer la lecture</p>
              <p className="mt-2 font-serif text-2xl text-foreground">
                Encore plus de douceur dans les guides.
              </p>
            </div>
            <Link
              to="/guides"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-[11px] uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
            >
              Voir les guides
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </Reveal>
      </article>
    </Layout>
  );
}
