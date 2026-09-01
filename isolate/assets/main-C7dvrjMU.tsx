import '@vly-ai/integrations';
import { Toaster } from "@/components/ui/sonner";
import { RequireAuth } from "@/components/RequireAuth";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import React, { StrictMode, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

// Defer toolbar loading to after main content renders
const VlyToolbar = lazy(() => import("../vly-toolbar-readonly.tsx").then(m => ({ default: m.VlyToolbar })));
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import "./index.css";

// Lazy load route components for better code splitting
const Landing = lazy(() => import("./pages/Landing.tsx"));
const Guides = lazy(() => import("./pages/Guides.tsx"));
const Journal = lazy(() => import("./pages/Journal.tsx"));
const JournalArticle = lazy(() => import("./pages/JournalArticle.tsx"));
const GuideGratuit = lazy(() => import("./pages/GuideGratuit.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const APpropos = lazy(() => import("./pages/APpropos.tsx"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess.tsx"));
const ListeNaissance = lazy(() => import("./pages/guides/ListeNaissance.tsx"));
const CorpsApres = lazy(() => import("./pages/guides/CorpsApres.tsx"));
const ChargeMentale = lazy(() => import("./pages/guides/ChargeMentale.tsx"));
const Bundle = lazy(() => import("./pages/guides/Bundle.tsx"));
const RecettesPostPartum = lazy(() => import("./pages/guides/RecettesPostPartum.tsx"));
const GuideCompletPostPartum = lazy(() => import("./pages/guides/GuideCompletPostPartum.tsx"));
const SoinBebe = lazy(() => import("./pages/guides/SoinBebe.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const Confidentialite = lazy(() => import("./pages/Confidentialite.tsx"));
const CGV = lazy(() => import("./pages/CGV.tsx"));
const Remboursement = lazy(() => import("./pages/Remboursement.tsx"));
const AuthPage = lazy(() => import("./pages/Auth.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="animate-pulse text-brand-text/60">
        Chargement...
      </div>
    </div>
  );
}

/** Silent error boundary — if VlyToolbar crashes it renders nothing instead of
 *  crashing the whole app (e.g. hook errors in WebContainer environment). */
class ToolbarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: Error) {
    console.warn("[VlyToolbar] Caught error, toolbar disabled:", err.message);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

/** Hard guard so runtime errors never leave the preview as a blank page. */
class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string; stack: string }
> {
  state = { hasError: false, message: "", stack: "" };
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message || "Unknown runtime error",
      stack: error.stack || "",
    };
  }
  componentDidCatch(err: Error) {
    console.error("[WebContainer preview] Root crash:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-cream text-brand-text p-6">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold">Erreur d'affichage</p>
            <p className="mt-2 text-xs text-brand-text/60 break-words">
              {this.state.message}
            </p>
            {this.state.stack && (
              <pre className="mt-3 text-left text-[10px] leading-4 text-brand-text/60 max-h-40 overflow-auto rounded border border-brand-card p-2">
                {this.state.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

/** Remonte en haut de page à chaque changement de route (navigation depuis
 *  header, footer, boutons ou cartes). Les ancres (#guides, #gratuits…)
 *  déclenchent un défilement doux vers la section ciblée. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // Remontée instantanée (aucune animation) pour que la nouvelle page
    // apparaisse immédiatement en haut : le scroll-behavior:smooth global
    // ne doit pas s'appliquer ici.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootErrorBoundary>
      {typeof window !== "undefined" && window.location.hostname.endsWith(".vly.sh") && (
        <ToolbarErrorBoundary>
          <VlyToolbar />
        </ToolbarErrorBoundary>
      )}
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <ScrollToTop />
          <RouteSyncer />
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalArticle />} />
              <Route path="/guide-gratuit" element={<GuideGratuit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a-propos" element={<APpropos />} />
              <Route path="/ressources" element={<Navigate to="/guide-gratuit" replace />} />
              <Route path="/commande/reussie" element={<OrderSuccess />} />
              <Route path="/paiement/:productId" element={<Navigate to="/guides" replace />} />
              <Route path="/guides/liste-naissance" element={<ListeNaissance />} />
              <Route path="/guides/corps-apres" element={<CorpsApres />} />
              <Route path="/guides/charge-mentale" element={<ChargeMentale />} />
              <Route path="/guides/bundle" element={<Bundle />} />
              <Route path="/guides/recettes-postpartum" element={<RecettesPostPartum />} />
              <Route path="/guides/guide-complet-postpartum" element={<GuideCompletPostPartum />} />
              <Route path="/guides/soin-bebe" element={<SoinBebe />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/remboursement" element={<Remboursement />} />
              <Route
                path="/auth"
                element={<AuthPage redirectAfterAuth="/dashboard" />}
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </RootErrorBoundary>
  </StrictMode>,
);
