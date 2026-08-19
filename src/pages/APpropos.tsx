import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { ebooks, bundle } from "@/lib/ebooks";
import { images, src } from "@/lib/assets";
import AccentDots from "@/components/AccentDots";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance sans injonction",
    text: "Aucun conseil culpabilisant, aucune injonction à en faire plus. Juste des repères doux pour avancer à ton rythme.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise de sage-femme",
    text: "Huit ans d'accompagnement des naissances, et un post-partum vécu. Chaque guide mêle rigueur professionnelle et vécu réel.",
  },
  {
    icon: Sparkles,
    title: "Concret et utilisable",
    text: "Des listes, des séquences et des outils pensés pour les jours où tu n'as ni énergie ni temps. Rien de théorique.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos de ForceMaman",
    description:
      "ForceMaman, les guides bienveillants du post-partum créés par Maria Garcia, ancienne sage-femme et maman.",
    url: "https://forcemaman.fr/a-propos",
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maria Garcia",
    jobTitle: "Fondatrice de ForceMaman, ancienne sage-femme",
    description:
      "Ancienne sage-femme pendant 8 ans et maman, fondatrice de ForceMaman.",
    worksFor: { "@type": "Organization", name: "ForceMaman" },
  },
];

export default function APpropos() {
  return (
    <Layout>
      <Seo
        title="À propos · Maria Garcia, sage-femme et fondatrice de ForceMaman"
        description="Derrière ForceMaman, une femme : Maria Garcia, ancienne sage-femme pendant 8 ans et maman. Découvre l'histoire des guides post-partum ForceMaman."
        path="/a-propos"
        jsonLd={jsonLd}
      />
      {/* ============ HERO ============ */}
      <section className="px-6 pb-16 pt-14 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">À propos</p>
            <AccentDots className="mt-4" />
            <h1 className="mt-6 font-serif text-4xl leading-[1.03] text-foreground sm:text-6xl">
              Derrière ForceMaman, <span className="italic">une femme.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              ForceMaman est une marque distincte de SAFAA Beauty, née d'une
              conviction simple : le post-partum mérite des guides aussi doux
              que les mamans qui les lisent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ MARIA ============ */}
      <section className="cv-auto border-y border-border/60 bg-card/35 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center">
              <div className="relative h-52 w-52 overflow-hidden rounded-full shadow-[0_20px_40px_-20px_rgba(35,33,32,0.4)] sm:h-60 sm:w-60">
                <img
                  src={src(images.founder)}
                  alt="Maria Garcia, fondatrice de ForceMaman, ancienne sage-femme"
                  width={480}
                  height={480}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-background/80 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-foreground/65 backdrop-blur-md shadow-[0_6px_18px_-10px_rgba(35,33,32,0.3)]">
                Créé par une maman, testé dans la vraie vie
              </span>
              <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                La fondatrice
              </p>
              <h2 className="mt-4 text-center font-serif text-4xl text-foreground sm:text-5xl">
                Je m'appelle <span className="italic">Maria.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-[15px] leading-[1.8] text-foreground/75 sm:text-base">
              <p>
                Sage-femme pendant 8 ans, j'ai accompagné des centaines de
                mamans le jour de l'accouchement. Et puis un jour, c'est moi qui
                ai eu ma fille. Et j'ai découvert ce que personne ne m'avait
                dit : que le plus dur commence souvent après, une fois rentrée à
                la maison, seule avec ce petit être et toutes ces questions.
              </p>
              <p>
                ForceMaman, c'est les guides que j'aurais aimé avoir entre les
                mains ce jour-là. Écrits avec ce que je sais en tant que
                professionnelle, et ce que j'ai vécu en tant que maman.
              </p>
              <p className="font-serif text-lg italic text-foreground/85">
                Maria, fondatrice de ForceMaman
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NOS GUIDES ============ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Nos guides</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Trois guides, <span className="italic">un même fil.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Préparer l'arrivée, comprendre ton corps, alléger ta charge
                mentale : chaque guide accompagne une étape du post-partum.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 space-y-3">
            {ebooks.map((ebook, i) => (
              <Reveal key={ebook.id} delay={i * 60}>
                <Link
                  to={ebook.href}
                  className="group flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card/55 p-5 shadow-[0_10px_30px_-18px_rgba(35,33,32,0.3)] transition-all hover:border-foreground/30 sm:p-6"
                >
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
                      {ebook.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ebook.tagline}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="font-serif text-lg text-foreground">
                      {ebook.price}
                    </span>
                    <ArrowRight className="size-4 text-foreground/50 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <Link
                to={bundle.href}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-foreground/15 bg-[color-mix(in_oklab,var(--accent)_18%,var(--background))] p-5 shadow-[0_10px_30px_-18px_rgba(35,33,32,0.3)] transition-all hover:border-foreground/30 sm:p-6"
              >
                <div className="min-w-0">
                  <span className="inline-flex items-center rounded-full bg-brand-terracotta px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#fff8f2]">
                    {bundle.discount}
                  </span>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-foreground sm:text-2xl">
                    {bundle.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {bundle.tagline}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="font-serif text-lg text-foreground">
                    {bundle.price}
                  </span>
                  <ArrowRight className="size-4 text-foreground/50 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NOS PROMESSES ============ */}
      <section className="border-y border-border/60 bg-card/35 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Nos promesses</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Ce que tu trouveras <span className="italic">chez nous.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border/60 bg-background p-7 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-full bg-[color-mix(in_oklab,var(--accent)_35%,var(--background))]">
                    <value.icon className="size-4 text-foreground/70" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Prête à être accompagnée <span className="italic">à ton rythme ?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Choisis le guide qui correspond à ton moment, ou commence par le
              guide gratuit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/guides"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-[11px] font-medium uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90 sm:w-auto"
              >
                Découvrir les guides
                <ArrowRight className="size-3" />
              </Link>
              <Link
                to="/guide-gratuit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground sm:w-auto"
              >
                Télécharger le guide gratuit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
