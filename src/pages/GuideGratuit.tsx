import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import Reveal, { EASE } from "@/components/Reveal";
import EbookCover from "@/components/EbookCover";
import EmailCapture from "@/components/EmailCapture";
import NewsletterBlock from "@/components/NewsletterBlock";
import { freeGuideSystems } from "@/lib/ebooks";
import { Check } from "lucide-react";

const reassurance = ["Gratuit", "Désinscription en un clic", "Aucun spam"];

export default function GuideGratuit() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-block rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
            >
              Guide gratuit
            </motion.span>
            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 font-display text-fluid-hero font-bold text-ink text-balance"
            >
              Les 7 systèmes qui simplifient vraiment la vie avec un bébé.
            </motion.h1>
            <motion.p
              {...fadeUp(0.18)}
              className="mt-6 text-lg text-ink/75 max-w-xl text-balance"
            >
              Découvrez les systèmes concrets que j'utilise pour réduire la
              charge mentale du post-partum au quotidien. Posés une seule fois,
              ils tiennent même les jours difficiles.
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="mt-8">
              <EmailCapture
                buttonLabel="Télécharger le guide gratuit"
                successMessage="C'est noté ! Vérifie ta boîte mail : ton guide gratuit t'attend."
              />
            </motion.div>

            <motion.div {...fadeUp(0.34)} className="mt-4">
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-ink/55">
                {reassurance.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-primary" />
                    {item}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>

          <Reveal delay={150} className="justify-self-center lg:justify-self-end">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-rose-soft/70 rotate-2"
                aria-hidden="true"
              />
              <EbookCover
                title="Les 7 systèmes qui simplifient vraiment la vie avec un bébé"
                accent="bg-brand-sage"
                textClass="text-ink/90"
                className="relative w-64 sm:w-80 aspect-[3/4] shadow-bold"
                iconSize="h-14 w-14"
                titleSize="text-lg sm:text-xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contenu du guide */}
      <section className="py-20 sm:py-28 bg-secondary/40 border-y-2 border-ink/10 cv-auto">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <div className="text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Ce que vous trouverez dans le guide
              </span>
              <h2 className="mt-3 font-display text-fluid-h2 font-bold text-ink text-balance">
                Sept systèmes concrets, pensés pour la vraie vie.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-3">
            {freeGuideSystems.map((system, i) => (
              <Reveal key={system.number} delay={i * 40}>
                <div className="flex items-start gap-5 rounded-2xl border-2 border-ink bg-card p-5 shadow-bold">
                  <span className="font-display text-sm font-bold text-primary">
                    {system.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {system.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {system.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock
        dark
        title="Recevez gratuitement les 7 systèmes"
        text="Renseignez votre email ci-dessus pour recevoir le guide complet, avec la checklist du sac à langer à imprimer. Gratuit, désinscription en un clic."
      />
    </Layout>
  );
}
