import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { useAction } from "convex/react";
import {
  loadStripe,
  type StripeEmbeddedCheckout,
} from "@stripe/stripe-js";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { api } from "@/convex/_generated/api";
import coverListe from "@/assets/covers/liste-naissance.svg";
import coverCorps from "@/assets/covers/corps-apres.svg";
import coverCharge from "@/assets/covers/charge-mentale.svg";
import coverBundle from "@/assets/covers/bundle.svg";
import {
  ArrowLeft,
  Loader2,
  Lock,
  ShieldCheck,
  Timer,
  Undo2,
} from "lucide-react";

/**
 * Page de paiement aux couleurs ForceMaman.
 *
 * Le formulaire Stripe est affiché *dans* la page (embedded Checkout) avec
 * une apparence personnalisée (boutons terracotta #C97D5D, fond crème),
 * grâce à la clé publiable VITE_STRIPE_PUBLISHABLE_KEY.
 *
 * Si la clé publiable n'est pas configurée, la page bascule automatiquement
 * vers le checkout hébergé par Stripe (aucune étape en plus pour l'acheteuse).
 */

const COVERS: Record<string, string> = {
  "liste-naissance": coverListe,
  "corps-apres": coverCorps,
  "charge-mentale": coverCharge,
  bundle: coverBundle,
};

const PRODUCT_META: Record<string, { title: string; price: string; accentText: string; tagline: string }> = {
  "liste-naissance": {
    title: "Ma Liste Naissance Complète",
    price: "7,90 €",
    accentText: "text-brand-terracotta",
    tagline: "Tout ce qu'il faut préparer sereinement l'arrivée de bébé.",
  },
  "corps-apres": {
    title: "Mon Corps Après l'Accouchement",
    price: "9,90 €",
    accentText: "text-brand-sage",
    tagline: "Comprends et accompagne les changements de ton corps.",
  },
  "charge-mentale": {
    title: "Charge Mentale & 40 Premiers Jours",
    price: "11,90 €",
    accentText: "text-brand-mauve",
    tagline: "Traverse le tsunami émotionnel des premières semaines.",
  },
  bundle: {
    title: "Pack Complet ForceMaman",
    price: "22,90 €",
    accentText: "text-brand-terracotta",
    tagline: "Les 3 guides réunis pour un accompagnement global du post-partum.",
  },
};



export default function CheckoutEmbed() {
  const { productId = "" } = useParams();
  const meta = PRODUCT_META[productId];
  const cover = COVERS[productId];

  const createCheckout = useAction(api.payments.createCheckoutSession);
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "ready" }
    | { status: "redirecting" }
    | { status: "error"; message: string }
  >({ status: "loading" });
  const mountedRef = useRef(false);
  const checkoutRef = useRef<StripeEmbeddedCheckout | null>(null);

  useEffect(() => {
    if (!productId || !meta || mountedRef.current) return;
    mountedRef.current = true;
    let cancelled = false;

    async function start() {
      try {
        // 1. Crée la session embedded côté serveur
        const session = await createCheckout({
          productId,
          mode: "embedded",
        });
        if (cancelled) return;

        // 2. Repli : si la clé publiable n'est pas configurée, checkout hébergé
        if (!session.clientSecret || !session.publishableKey) {
          setState({ status: "redirecting" });
          const hosted = await createCheckout({ productId, mode: "hosted" });
          if (cancelled) return;
          if (hosted.url) {
            window.location.href = hosted.url;
            return;
          }
          throw new Error("Aucune session de paiement disponible.");
        }

        // 3. Affiche le formulaire Stripe aux couleurs ForceMaman
        //    (apparence : icône, logo, police serif, voir la session créée
        //    côté serveur dans src/convex/payments.ts)
        const stripe = await loadStripe(session.publishableKey);
        if (cancelled) return;
        if (!stripe) {
          throw new Error("Stripe.js n'a pas pu être chargé.");
        }
        const checkout = await stripe.createEmbeddedCheckoutPage({
          clientSecret: session.clientSecret,
        });
        if (cancelled) {
          checkout.destroy();
          return;
        }
        checkoutRef.current = checkout;
        checkout.mount("#stripe-checkout-mount");
        setState({ status: "ready" });
      } catch (error) {
        console.error("Checkout embedded error:", error);
        if (!cancelled) {
          setState({
            status: "error",
            message:
              error instanceof Error
                ? error.message
                : "Le paiement est momentanément indisponible.",
          });
        }
      }
    }

    start();

    return () => {
      cancelled = true;
      checkoutRef.current?.destroy();
      checkoutRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (!meta) {
    return (
      <Layout>
        <Seo
          title="Paiement · ForceMaman"
          description="Paiement sécurisé de ta commande ForceMaman."
          path="/paiement"
          noindex
        />
        <section className="px-6 py-32 text-center">
          <p className="text-foreground/60">Produit introuvable.</p>
          <Link
            to="/guides"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-terracotta underline underline-offset-4"
          >
            <ArrowLeft className="size-4" />
            Retour aux guides
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={`Paiement · ${meta.title}`}
        description={`Paiement sécurisé de ${meta.title} via Stripe.`}
        path={`/paiement/${productId}`}
        noindex
      />
      <section className="px-6 pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <Link
            to={`/guides/${productId}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Retour à la fiche
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
            {/* Panneau produit */}
            <aside className="mx-auto w-full max-w-sm lg:mx-0">
              <div className="rounded-3xl border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] p-5 shadow-[0_18px_44px_-24px_rgba(35,33,32,0.4),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <img
                    src={cover}
                    alt={meta.title}
                    className="aspect-[3/4] w-24 rounded-xl object-cover shadow-[0_12px_24px_-12px_rgba(35,33,32,0.45)]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
                      ForceMaman
                    </p>
                    <h1 className="mt-1 font-serif text-lg leading-snug text-foreground">
                      {meta.title}
                    </h1>
                    <p className={`mt-1 font-serif text-2xl ${meta.accentText}`}>
                      {meta.price}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-foreground/60">
                  {meta.tagline}
                </p>
                <div className="mt-5 space-y-2 border-t border-foreground/10 pt-4">
                  {[
                    { icon: Timer, label: "Téléchargement immédiat" },
                    { icon: ShieldCheck, label: "Paiement sécurisé Stripe" },
                    { icon: Undo2, label: "Remboursement 14 jours" },
                  ].map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-foreground/55"
                    >
                      <item.icon className="size-3.5 shrink-0" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Formulaire Stripe */}
            <div className="mx-auto w-full max-w-lg lg:mx-0">
              <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(35,33,32,0.35)] sm:p-8">
                {state.status === "loading" && (
                  <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
                    <Loader2 className="size-7 animate-spin text-brand-terracotta" />
                    <p className="text-sm text-foreground/60">
                      Préparation de ton paiement sécurisé…
                    </p>
                  </div>
                )}

                {state.status === "redirecting" && (
                  <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
                    <Loader2 className="size-7 animate-spin text-brand-terracotta" />
                    <p className="text-sm text-foreground/60">
                      Redirection vers la page de paiement sécurisée…
                    </p>
                  </div>
                )}

                {state.status === "ready" && (
                  <div id="stripe-checkout-mount" className="min-h-72" />
                )}

                {state.status === "error" && (
                  <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
                    <p className="text-sm text-foreground/70">{state.message}</p>
                    <Link
                      to={`/guides/${productId}`}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-brand-terracotta px-6 text-xs font-medium uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
                    >
                      Retour à la fiche produit
                    </Link>
                  </div>
                )}

                <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-foreground/45">
                  <Lock className="size-3" />
                  Paiement chiffré et sécurisé par Stripe
                </p>
              </div>

              <p className="mt-5 text-center text-[12px] leading-relaxed text-foreground/55">
                Ce guide est un outil d'accompagnement et d'information. Il ne
                remplace pas un avis médical professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
