import EmailCapture from "@/components/EmailCapture";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

interface NewsletterBlockProps {
  dark?: boolean;
  title?: string;
  text?: string;
}

export default function NewsletterBlock({
  dark = true,
  title = "La lettre ForceMaman",
  text = "Une lettre lente, chaque dimanche : un système concret, une lecture douce, une pensée pour toi. Gratuit, désinscription en un clic, aucun spam.",
}: NewsletterBlockProps) {
  return (
    <section className={dark ? "bg-ink text-cream py-20 sm:py-28" : "bg-secondary/40 border-y-2 border-ink/10 py-20 sm:py-28"}>
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <Mail className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-fluid-h2 font-bold text-balance">
            {title}
          </h2>
          <p className={cn("mt-4 text-lg leading-relaxed text-balance", dark ? "text-cream/75" : "text-ink/75")}>
            {text}
          </p>
          <EmailCapture
            dark={dark}
            buttonLabel="Je m'abonne"
            successMessage="Bienvenue ! Ta première lettre arrive dimanche."
            className="mt-8 text-left"
          />
          <p className={cn("mt-4 text-xs", dark ? "text-cream/45" : "text-ink/55")}>
            Gratuit · Désinscription en un clic · Aucun spam
          </p>
        </Reveal>
      </div>
    </section>
  );
}
