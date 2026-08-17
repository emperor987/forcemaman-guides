import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

export default function APpropos() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 lg:py-40">
        <Reveal>
          <p className="eyebrow">À propos</p>
          <h1 className="mt-6 font-serif text-5xl text-foreground sm:text-6xl">
            Bientôt <span className="italic">disponible.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cette page est en cours de préparation avec le même soin que tout
            ce que nous créons ici.
          </p>
        </Reveal>
      </div>
    </Layout>
  );
}
