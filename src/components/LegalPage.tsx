import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
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
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-14 h-14 text-brand-terracotta mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
              {title}
            </h1>
            <p className="text-brand-text/60 text-sm">
              Dernière mise à jour : {lastUpdated}
            </p>
            {intro && (
              <p className="text-brand-text/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                {intro}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-brand-card shadow-none">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <h2 className="text-xl font-bold text-brand-text mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-brand-text/75 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
