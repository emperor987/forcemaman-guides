import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useAction } from "convex/react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { api } from "@/convex/_generated/api";
import { SUPPORT_EMAIL } from "@/lib/payments";
import {
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  Lock,
  ShieldCheck,
  Timer,
} from "lucide-react";

const PRODUCT_META: Record<
  string,
  { title: string; accent: string }
> = {
  "liste-naissance": {
    title: "Ma Liste Naissance Complète",
    accent: "text-brand-terracotta",
  },
  "corps-apres": {
    title: "Mon Corps Après l'Accouchement",
    accent: "text-brand-sage",
  },
  "charge-mentale": {
    title: "Charge Mentale & 40 Premiers Jours",
    accent: "text-brand-mauve",
  },
  "recettes-postpartum": {
    title: "Recettes Post-Partum",
    accent: "text-brand-terracotta",
  },
  "guide-complet-postpartum": {
    title: "Guide Complet Post-Partum",
    accent: "text-brand-sage",
  },
  "soin-bebe": {
    title: "Soin Bébé après l'Accouchement",
    accent: "text-brand-mauve",
  },
  bundle: {
    title: "Pack Complet ForceMaman",
    accent: "text-brand-terracotta",
  },
};

type DownloadFile = { name: string; file: string; url: string };

type Status =
  | { state: "loading" }
  | { state: "paid"; productId: string; token: string; files: DownloadFile[] }
  | { state: "unpaid" }
  | { state: "error" };

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id") ?? "";
  const verifySession = useAction(api.payments.verifySession);
  const createToken = useAction(api.downloads.createDownloadToken);
  const getDownloadInfo = useAction(api.downloads.getDownloadInfo);
  const [status, setStatus] = useState<Status>({ state: "loading" });
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function check() {
      if (!sessionId) {
        setStatus({ state: "error" });
        return;
      }
      try {
        const result = await verifySession({ sessionId });
        if (cancelled) return;

        if (!result.paid || !result.productId) {
          setStatus({ state: "unpaid" });
          return;
        }

        try {
          const tokenResult = await createToken({
            sessionId,
            productId: result.productId,
          });
          if (cancelled) return;

          const downloadInfo = await getDownloadInfo({ token: tokenResult.token });
          if (cancelled) return;

          setStatus({
            state: "paid",
            productId: result.productId,
            token: tokenResult.token,
            files: downloadInfo.files,
          });
        } catch {
          if (cancelled) return;
          setStatus({ state: "error" });
        }
      } catch {
        if (!cancelled) setStatus({ state: "error" });
      }
    }
    check();
    return () => { cancelled = true; };
  }, [sessionId, verifySession, createToken, getDownloadInfo]);

  const handleDownload = useCallback(
    (file: DownloadFile) => {
      if (downloading) return;
      setDownloading(file.name);
      window.open(file.url, "_blank");
      setTimeout(() => setDownloading(null), 2000);
    },
    [downloading],
  );

  const meta = status.state === "paid" ? PRODUCT_META[status.productId] : null;

  return (
    <Layout>
      <Seo
        title="Commande confirmée · ForceMaman"
        description="Ton paiement a été confirmé. Télécharge tes guides ForceMaman."
        path="/commande/reussie"
      />
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-lg text-center">
          {status.state === "loading" && (
            <Reveal>
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="size-10 animate-spin text-foreground/40" />
                <p className="text-sm text-foreground/60">
                  Vérification du paiement…
                </p>
              </div>
            </Reveal>
          )}

          {status.state === "unpaid" && (
            <Reveal>
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-100">
                <Timer className="size-8 text-amber-500" />
              </div>
              <h1 className="mt-6 font-serif text-3xl text-foreground">
                Paiement en attente
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                Le paiement n'a pas encore été confirmé. Si tu viens de payer,
                patiente quelques instants et recharge la page.
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Retour aux guides
              </Link>
            </Reveal>
          )}

          {status.state === "error" && (
            <Reveal>
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-100">
                <FileText className="size-8 text-red-400" />
              </div>
              <h1 className="mt-6 font-serif text-3xl text-foreground">
                Oups, une erreur
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                Nous n'avons pas pu vérifier ta commande.{" "}
                {SUPPORT_EMAIL && (
                  <>
                    Écris-nous à{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="underline underline-offset-2"
                    >
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    avec ton numéro de commande.
                  </>
                )}
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Retour aux guides
              </Link>
            </Reveal>
          )}

          {status.state === "paid" && (
            <Reveal>
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-sage/15">
                <CheckCircle2 className="size-8 text-brand-sage" />
              </div>
              <h1 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
                Merci pour ton achat <span className="italic">!</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                {meta?.title || "Ton guide"} est prêt à être téléchargé.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {[
                  { icon: Timer, label: "Téléchargement immédiat" },
                  { icon: Lock, label: "Paiement sécurisé" },
                  { icon: ShieldCheck, label: "Remboursement 14 jours" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground/55"
                  >
                    <item.icon className="size-3.5" />
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {status.files.map((file, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleDownload(file)}
                    disabled={downloading !== null}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {downloading === file.name ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Download className="size-4" />
                    )}
                    Télécharger {file.name}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-xs text-foreground/50">
                Conserve ces liens, ils expirent dans 30 minutes.
              </p>

              <div className="mt-8">
                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Découvrir les autres guides
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
}
