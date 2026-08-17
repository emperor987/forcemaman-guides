import { useState } from "react";
import { Check, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailCaptureProps {
  buttonLabel?: string;
  successMessage?: string;
  dark?: boolean;
  className?: string;
}

export default function EmailCapture({
  buttonLabel = "Télécharger le guide gratuit",
  successMessage = "C'est noté ! Vérifie ta boîte mail, ton guide t'attend.",
  dark = false,
  className,
}: EmailCaptureProps) {
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
          "flex items-center gap-3 rounded-2xl border-2 px-5 py-4",
          dark ? "border-cream/25 bg-cream/10 text-cream" : "border-ink bg-card text-ink",
          className,
        )}
      >
        <Check className="h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm font-medium leading-snug">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <div className="relative flex-1">
        <Mail
          className={cn(
            "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2",
            dark ? "text-cream/45" : "text-ink/40",
          )}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ton adresse email"
          aria-label="Ton adresse email"
          className={cn(
            "w-full rounded-xl border-2 bg-transparent py-3.5 pl-11 pr-4 text-sm font-medium outline-none transition-colors",
            dark
              ? "border-cream/30 text-cream placeholder:text-cream/40 focus:border-primary"
              : "border-ink bg-card text-ink placeholder:text-ink/40 focus:border-primary",
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl border-2 px-6 py-3.5 text-sm font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
          dark
            ? "border-cream/40 bg-primary text-primary-foreground"
            : "border-ink bg-primary text-primary-foreground",
        )}
      >
        {buttonLabel}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
