import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

interface LegalSection {
  title: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <Layout>
      {/* ============ HEADER ============ */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-16 text-center lg:pt-24">
          <Reveal>
            <p className="eyebrow">Informations légales</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Dernière mise à jour : {lastUpdated}
            </p>
            {intro && (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* ============ CONTENU ============ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] p-7 backdrop-blur-md sm:p-12"
              style={{
                boxShadow:
                  "0 14px 36px -22px rgba(35,33,32,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="mb-4 font-serif text-2xl leading-tight text-foreground">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-[15px] leading-relaxed text-foreground/70"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
