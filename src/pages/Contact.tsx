import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import AccentDots from "@/components/AccentDots";
import { Check, Mail } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <Seo
        title="Contact · Écris à ForceMaman"
        description="Une question, une suggestion, un mot. Maria lit chaque message et répond personnellement sous 48 heures ouvrées."
        path="/contact"
        keywords="contact ForceMaman, contacter sage-femme, support client, aide, question guide post-partum"
      />
      <div className="bg-background">
        <div className="mx-auto max-w-xl px-6 py-20 lg:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Contact</p>
              <AccentDots className="mt-4" />
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
                Écrivez-moi, <span className="italic">à votre rythme.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Une question, une suggestion, un mot. Je lis chaque message
                moi-même et je réponds personnellement sous 48 heures ouvrées.
              </p>
            </div>
          </Reveal>

          {sent ? (
            <Reveal>
              <div className="mt-12 flex items-center gap-4 rounded-3xl border border-border/60 bg-card/60 p-8 shadow-[0_30px_80px_-60px_rgba(35,33,32,0.35)]">
                <Check className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-serif text-xl text-foreground">
                    Message envoyé.
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Merci pour votre mot, je vous réponds sous 48 heures
                    ouvrées.
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={80}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const firstName = String(data.get("firstName") ?? "");
                  const email = String(data.get("email") ?? "");
                  const subject = String(data.get("subject") ?? "");
                  const message = String(data.get("message") ?? "");
                  const mailSubject = encodeURIComponent(
                    subject || "Message depuis le site ForceMaman",
                  );
                  const mailBody = encodeURIComponent(
                    `Bonjour Maria,\n\n${message}\n\n${firstName ? `Bien à toi,\n${firstName}` : "Bien à toi."}\n${email ? `\n(Je réponds depuis : ${email})` : ""}`,
                  );
                  window.location.href = `mailto:hello@forcemaman.store?subject=${mailSubject}&body=${mailBody}`;
                  setSent(true);
                }}
                className="mt-12 space-y-5 rounded-3xl border border-border/60 bg-card/60 p-7 shadow-[0_30px_80px_-60px_rgba(35,33,32,0.35)] sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Prénom
                    </span>
                    <input
                      required
                      name="firstName"
                      type="text"
                      className="mt-2 h-12 w-full rounded-full border border-border bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      placeholder="Camille"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Email
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 h-12 w-full rounded-full border border-border bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Sujet
                  </span>
                  <input
                    name="subject"
                    type="text"
                    className="mt-2 h-12 w-full rounded-full border border-border bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    placeholder="Une question, un mot doux…"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="mt-2 w-full rounded-3xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    placeholder="Prenez le temps qu'il vous faut…"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Envoyer le message
                </button>
              </form>
            </Reveal>
          )}

          <div className="mt-12 grid gap-6 text-center">
            <Reveal delay={120}>
              <div className="flex items-center justify-center gap-3 text-sm text-foreground/80">
                <Mail className="size-4" />
                <a
                  href="mailto:hello@forcemaman.store"
                  className="underline underline-offset-4"
                >
                  hello@forcemaman.store
                </a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-3xl border border-border/60 bg-[color-mix(in_oklab,var(--accent)_18%,var(--background))] p-7">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-foreground/70">
                  Instagram
                </div>
                <p className="mt-3 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                  Suivez-moi sur Instagram pour{" "}
                  <span className="italic">une idée douce chaque jour.</span>
                </p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-[11px] uppercase tracking-[0.22em] text-foreground underline underline-offset-4"
                >
                  @forcemaman
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
}
