import { useState } from "react";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailFormProps {
  /** "hero" = input pilule + gros bouton sombre ; "footer" = input discret + bouton primary */
  variant?: "hero" | "footer";
  id?: string;
  buttonLabel?: string;
  successMessage?: string;
  className?: string;
}

const DARK_BUTTON_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(180deg, color-mix(in oklab, var(--foreground) 92%, transparent), color-mix(in oklab, var(--foreground) 100%, transparent))",
  boxShadow:
    "0 16px 32px -16px rgba(35,33,32,0.55), 0 4px 8px -4px rgba(35,33,32,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
};

export default function EmailForm({
  variant = "hero",
  id = "email",
  buttonLabel = "Télécharger le guide gratuit",
  successMessage = "C'est noté ! Vérifie ta boîte mail, ton guide t'attend.",
  className,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
  };

  if (done) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-white/40 bg-background/80 px-5 py-4 backdrop-blur-md",
          "shadow-[0_8px_22px_-16px_rgba(35,33,32,0.25),inset_0_1px_0_rgba(255,255,255,0.6)]",
          className,
        )}
      >
        <Check className="h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm font-medium leading-snug text-foreground">
          {successMessage}
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3 sm:flex-row", className)}>
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
            placeholder="votre@email.com"
            className="h-11 w-full rounded-sm border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-7 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          S'inscrire
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
      <label htmlFor={`${id}-email`} className="sr-only">
        Votre email
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
          placeholder="Votre meilleur email..."
          className="h-14 w-full rounded-full bg-transparent px-6 text-base text-foreground placeholder:text-foreground/40 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="group relative flex h-16 w-full items-center justify-center gap-3 rounded-full font-medium text-background transition-transform active:scale-[0.98]"
        style={DARK_BUTTON_STYLE}
      >
        <Sparkles className="size-4 opacity-80" />
        <span className="text-[14px] tracking-wide">{buttonLabel}</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
