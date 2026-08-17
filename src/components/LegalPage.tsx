import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { FileText } from "lucide-react";

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
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <FileText className="h-12 w-12 text-primary mx-auto" />
            <h1 className="mt-5 font-display text-fluid-hero font-bold text-ink text-balance">
              {title}
            </h1>
            <p className="mt-4 text-sm text-ink/60">
              Dernière mise à jour : {lastUpdated}
            </p>
            {intro && (
              <p className="mt-6 text-ink/75 max-w-2xl mx-auto leading-relaxed">
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="rounded-3xl border-2 border-ink bg-card p-8 sm:p-12 shadow-bold">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="font-display text-2xl font-bold text-ink mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-ink/75 leading-relaxed"
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
