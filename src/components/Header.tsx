import { Link, useLocation } from "react-router";
import { BookOpen, Gift, Home, Library, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Journal", href: "/journal" },
  { name: "Bibliothèque", href: "/guides" },
  { name: "Guide gratuit", href: "/guide-gratuit" },
];

/**
 * Mobile bottom nav — barre flottante en pilule, fond ivoire clair.
 * Seul l'item actif a un fond en pilule noire (icône + texte en couleur
 * accent) ; les 3 autres items sont posés directement sur la barre,
 * sans fond, avec une icône en ligne fine et le label en dessous.
 */
const mobileNav = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Journal", href: "/journal", icon: Newspaper },
  { name: "Bibliothèque", href: "/guides", icon: Library },
  { name: "Guide gratuit", href: "/guide-gratuit", icon: Gift },
];

export default function Header() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const isMobileActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold text-ink shrink-0 hover:opacity-80 transition-opacity"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            ForceMaman
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-normal text-ink/65 hover:text-ink transition-colors",
                  isActive(item.href) && "text-primary font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/guides"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border-2 border-ink bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Voir les guides
          </Link>
        </div>
      </header>

      {/* Mobile bottom nav — pilule flottante ivoire */}
      <nav
        aria-label="Navigation mobile"
        className="lg:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border-2 border-ink/15 bg-background/95 px-1.5 py-1.5 shadow-[0_18px_40px_-16px_rgba(92,74,58,0.5)] backdrop-blur">
          {mobileNav.map((item) => {
            const active = isMobileActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-w-[64px] flex-col items-center gap-1 rounded-full px-3.5 py-2 transition-colors duration-200",
                  active
                    ? "bg-ink text-terracotta shadow-[0_10px_22px_-10px_rgba(92,74,58,0.65)]"
                    : "text-ink/55 hover:text-ink",
                )}
              >
                <item.icon
                  className="h-5 w-5"
                  strokeWidth={active ? 2 : 1.5}
                />
                <span
                  className={cn(
                    "text-[10px] leading-none",
                    active ? "font-bold" : "font-medium",
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
