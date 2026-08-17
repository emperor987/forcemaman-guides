import { Link } from "react-router";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/assets";
import { ArrowRight } from "lucide-react";

const products = [
  {
    image: images.chariot,
    title: "Chariot Postpartum",
    description:
      "Un chariot à roulettes pour garder tous les essentiels de bébé à portée de main, de pièce en pièce.",
    bullets: [
      "Réduit les allers-retours inutiles",
      "Se déplace facilement d'une pièce à l'autre",
      "Centralise couches, langes, eau et téléphone",
    ],
  },
  {
    image: images.carnet,
    title: "Carnet Cerveau Externe",
    description:
      "Un carnet ligné minimaliste pour centraliser rendez-vous, listes et idées en un seul endroit.",
    bullets: [
      "Libère l'espace mental au quotidien",
      "Centralise rendez-vous, listes et idées",
      "Évite de devoir tout mémoriser",
    ],
  },
  {
    image: images.organiseur,
    title: "Organisateur mural Zone Départ",
    description:
      "Un organiseur mural avec étagère et crochets pour centraliser les essentiels près de la porte.",
    bullets: [
      "Supprime les recherches de clés et de papiers",
      "Centralise les essentiels de la famille",
      "Allège les départs du matin",
    ],
  },
];

export default function Ressources() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center lg:pt-28">
            <Reveal>
              <p className="eyebrow">Ressources</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl">
                Une sélection lente, <span className="italic">jamais saturée.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Ici vivent les outils, objets et lectures qui m'accompagnent
                vraiment. Cette bibliothèque s'enrichit doucement, sans bruit,
                sans hâte.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Catégorie */}
        <section className="border-b border-border/60 bg-[color-mix(in_oklab,var(--accent)_12%,var(--background))]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow">00 · Catégorie</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  Organisation Postpartum
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Les cinq objets que je recommande pour bâtir les systèmes
                  essentiels du quotidien postpartum.{" "}
                  <Link
                    to="/journal"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Lire l'article dédié
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <Reveal key={product.title} delay={i * 70}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl leading-snug text-foreground">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-[13px] text-foreground">
                        {product.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-foreground/90"
                      >
                        Voir le produit
                        <ArrowRight className="size-3" />
                      </a>
                      <p className="mt-3 text-center text-[11px] text-muted-foreground">
                        Lien affilié, sans coût supplémentaire pour vous.
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
