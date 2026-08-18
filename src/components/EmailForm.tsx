import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailFormProps {
  /**
   * "hero" = bloc complet : titre, sous-titre, champ pilule, bouton
   * terracotta, mention, écran de confirmation centré.
   * "footer" = version compacte (champ + bouton) pour le pied de page.
   */
  variant?: "hero" | "footer";
  id?: string;
  /** Affiche le bloc "Reçois ton guide gratuit" + sous-titre (défaut : hero) */
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

const GUIDE_PDF = "/ebooks/guide-gratuit-7-systemes.pdf";

export default function EmailForm({
  variant = "hero",
  id = "email",
  showHeading = variant === "hero",
  title = "Reçois ton guide gratuit",
  subtitle =
    "Les 7 systèmes pour alléger ta charge mentale, directement dans ta boîte mail",
  className,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const subscribe = useAction(api.newsletter.subscribe);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || sending) return;
    setSending(true);
    try {
      await subscribe({ email: email.trim() });
    } catch (error) {
      console.error("Newsletter subscribe error:", error);
    }
    setSending(false);
    setDone(true);
  };

  /* ============ ÉCRAN DE CONFIRMATION ============ */
  if (done) {
    if (variant === "footer") {
      return (
        <div
          className={cn(
            "rounded-2xl border border-brand-terracotta/25 bg-white px-5 py-4 text-left shadow-sm",
            className,
          )}
        >
          <p className="text-sm font-medium leading-snug text-foreground">
            C'est parfait ! 🎉
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/60">
            Ton guide arrive dans ta boîte mail d'ici quelques minutes.
          </p>
        </div>
      );
    }

    return (
      <div className="flex min-h-[68dvh] w-full flex-col items-center justify-center py-4 sm:min-h-0">
        <div className="w-full max-w-[480px] rounded-[2rem] border border-border/50 bg-white p-2 shadow-[0_24px_60px_-32px_rgba(35,33,32,0.4)]">
          <div className="rounded-[1.6rem] bg-brand-cream px-7 py-12 text-center sm:py-14">
            <span className="mx-auto grid size-14 place-items-center rounded-full border border-brand-terracotta/30 bg-brand-terracotta/10">
              <Sparkles className="size-6 text-brand-terracotta" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 font-serif text-[1.7rem] leading-tight text-foreground sm:text-3xl">
              C'est parfait ! 🎉
            </h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              Ton guide arrive dans ta boîte mail d'ici quelques minutes. Pense
              à vérifier tes spams si tu ne le vois pas.
            </p>
            <p className="mt-5 text-[13px] italic leading-relaxed text-foreground/60">
              Bienvenue jeune maman, on est ravies de t'accompagner.
            </p>
            <a
              href={GUIDE_PDF}
              download
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/25 px-7 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground"
            >
              <Download className="size-4" />
              Télécharger maintenant
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ============ VARIANTE FOOTER (compacte) ============ */
  if (variant === "footer") {
    return (
      <form
        onSubmit={handleSubmit}
        className={cn("flex flex-col gap-3 sm:flex-row", className)}
      >
        <label htmlFor={`${id}-email`} className="sr-only">
          Email
        </label>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id={`${id}-email`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ton@email.com"
            className="h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-terracotta focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-terracotta px-7 text-[11px] font-medium uppercase tracking-[0.18em] text-[#fff8f2] transition-colors hover:bg-brand-terracotta/90 disabled:opacity-70"
        >
          Télécharger le guide
        </button>
      </form>
    );
  }

  /* ============ VARIANTE HERO (bloc complet) ============ */
  return (
    <div className={cn("w-full", className)}>
      {showHeading && (
        <div className="text-center">
          <h3 className="font-serif text-[1.7rem] leading-[1.15] text-foreground sm:text-[1.9rem]">
            {title}
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-foreground/65">
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <label htmlFor={`${id}-email`} className="sr-only">
          Ton email
        </label>
        <div
          className="relative rounded-full bg-[color-mix(in_oklab,var(--background)_60%,#e7ddd0)] p-1.5"
          style={{
            boxShadow:
              "inset 0 2px 6px rgba(35,33,32,0.12), inset 0 -1px 0 rgba(255,255,255,0.7), 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          <input
            id={`${id}-email`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ton meilleur email..."
            className="h-14 w-full rounded-full bg-transparent px-6 text-base text-foreground placeholder:text-foreground/40 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-brand-terracotta font-medium text-[#fff8f2] shadow-[0_14px_28px_-14px_rgba(201,125,93,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] transition-transform active:scale-[0.98] disabled:opacity-70"
        >
          <Sparkles className="size-4 opacity-90" />
          <span className="text-sm tracking-wide">
            {sending ? "Envoi en cours…" : "Télécharger le guide gratuit"}
          </span>
          <ArrowRight className="size-4" />
        </button>
        <p className="pt-1 text-center text-[11px] uppercase tracking-[0.22em] text-foreground/50">
          Gratuit • Désinscription en un clic • Aucun spam
        </p>
      </form>
    </div>
  );
}
