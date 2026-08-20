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
  { title: string; files: string[]; accent: string }
> = {
  "liste-naissance": {
    title: "Ma Liste Naissance Complète",
    files: ["liste-naissance.pdf"],
    accent: "text-brand-terracotta",
  },
  "corps-apres": {
    title: "Mon Corps Après l'Accouchement",
    files: ["corps-apres.pdf"],
    accent: "text-brand-sage",
  },
  "charge-mentale": {
    title: "Charge Mentale & 40 Premiers Jours",
    files: ["charge-mentale.pdf"],
    accent: "text-brand-mauve",
  },
  bundle: {
    title: "Pack Complet ForceMaman",
    files: ["liste-naissance.pdf", "corps-apres.pdf", "charge-mentale.pdf"],
    accent: "text-brand-terracotta",
  },
};

type DownloadFile = { name: string; url: string };

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

          // Récupérer les noms de fichiers via le token
          const downloadInfo = await getDownloadInfo({ token: tokenResult.token }) as { files: { name: string; file: string }[]; expiresAt: number };
          if (cancelled) return;
          // Construire les URLs de téléchargement depuis le domaine actuel (Freebuff)
          const filesWithUrls: DownloadFile[] = downloadInfo.files.map((f) => ({
            name: f.name,
            url: `${window.location.origin}/ebooks/${f.file}`,
          }));
          setStatus({
            state: "paid",
            productId: result.productId,
            token: tokenResult.token,
            files: filesWithUrls,
          });
        } catch {
          if (cancelled) return;
          setStatus({ state: "error" });
        }
      } catch (error) {
        console.error("verifySession error:", error);
        if (!cancelled) setStatus({ state: "error" });
      }
    }
    check();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const handleDownload = useCallback(
    async (fileName: string) => {
      if (status.state !== "paid" || downloading) return;
      setDownloading(fileName);
      try {
        const fileInfo = status.files.find((f) => f.name === fileName);
        if (!fileInfo) {
          throw new Error(`Fichier non trouvé : ${fileName}`);
        }
        // Téléchargement direct depuis le serveur Freebuff
        const a = document.createElement("a");
        a.href = fileInfo.url;
        a.download = fileName;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 200);
      } catch (err) {
        console.error("Download error:", err);
        alert(
          "Le téléchargement a échoué. Réessaie ou écris-nous à " +
            SUPPORT_EMAIL,
        );
      } finally {
        setTimeout(() => setDownloading(null), 2000);
      }
    },
    [status, downloading],
  );

  const meta =
    status.state === "paid" ? PRODUCT_META[status.productId] : null;

  return (
    <Layout>
      <Seo
        title="Merci pour ta commande · ForceMaman"
        description="Ta commande ForceMaman est confirmée. Télécharge tes guides post-partum ici."
        path="/commande/reussie"
        noindex
      />
      <section className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-xl text-center">
          {status.state === "loading" && (
            <Reveal>
              <div className="flex flex-col items-center gap-4 py-16">
                <Loader2 className="size-8 animate-spin text-brand-terracotta" />
                <p className="text-sm text-foreground/60">
                  Vérification de ton paiement…
                </p>
              </div>
            </Reveal>
          )}

          {status.state === "paid" && meta && (
            <>
              <Reveal>
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-sage/15">
                  <CheckCircle2 className="size-8 text-brand-sage" />
                </span>
                <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-foreground/50">
                  Commande confirmée
                </p>
                <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
                  Merci ! Tes guides{" "}
                  <span className="italic">sont à toi.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-foreground/65">
                  Le paiement est bien validé. Télécharge{" "}
                  {meta.files.length > 1 ? "tes guides" : "ton guide"} dès
                  maintenant.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 space-y-3 text-left">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                    {meta.title}
                  </p>
                  {meta.files.map((file) => (
                    <button
                      key={file}
                      type="button"
                      onClick={() => handleDownload(file)}
                      disabled={downloading !== null}
                      className="group flex w-full items-center justify-between gap-4 rounded-3xl border border-white/50 bg-[color-mix(in_oklab,var(--background)_75%,transparent)] p-5 shadow-[0_14px_36px_-22px_rgba(35,33,32,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:border-foreground/25 disabled:opacity-60"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid size-11 place-items-center rounded-2xl bg-brand-terracotta/12">
                          <FileText className="size-5 text-brand-terracotta" />
                        </span>
                        <span className="text-left">
                          <span className="block text-sm font-medium text-foreground">
                            {file}
                          </span>
                          <span className="block text-xs text-foreground/55">
                            {downloading === file
                              ? "Préparation…"
                              : "PDF · téléchargement sécurisé"}
                          </span>
                        </span>
                      </span>
                      {downloading === file ? (
                        <Loader2 className="size-5 animate-spin text-foreground/60" />
                      ) : (
                        <Download className="size-5 text-foreground/60 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.14em] text-foreground/50">
                  <span className="flex items-center gap-1.5">
                    <Lock className="size-3" />
                    Téléchargement sécurisé
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Timer className="size-3" />
                    Liens valables 30 minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3" />
                    Paiement vérifié Stripe
                  </span>
                </div>

                <p className="mt-4 text-center text-[11px] text-foreground/50">
                  Ce lien est personnel et à usage limité. Tu peux le
                  réutiliser pendant 30 minutes après la confirmation.
                </p>
              </Reveal>
            </>
          )}

          {status.state === "unpaid" && (
            <Reveal>
              <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
                Paiement <span className="italic">non confirmé</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-foreground/65">
                Nous n'avons pas pu confirmer ton paiement. Si tu as été
                débitée, écris-nous à {SUPPORT_EMAIL} et nous vérifions ta
                commande sous 48 heures.
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-xs font-medium uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
              >
                Retour aux guides
              </Link>
            </Reveal>
          )}

          {status.state === "error" && (
            <Reveal>
              <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
                Une erreur <span className="italic">est survenue</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-foreground/65">
                Impossible de vérifier ta commande pour le moment. Réessaie
                dans quelques instants, ou écris-nous à{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-xs font-medium uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
              >
                Retour aux guides
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
}
