import { Link, useLocation } from "react-router";
import { BookOpen, HelpCircle, Home, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos Guides", href: "/guides" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "mailto:hello@forcemaman.fr", external: true },
];

/** Mobile bottom nav (pill style, icon + label empilés, actif en pastille sombre) */
const mobileNav = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Guides", href: "/guides", icon: BookOpen },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Pack", href: "/guides/bundle", icon: Sparkles },
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
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-normal text-ink/65 hover:text-ink transition-colors"
                >
                  {item.name}
                </a>
              ) : (
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
              ),
            )}
          </nav>

          <Link
            to="/guides"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border-2 border-ink bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Voir les guides
          </Link>
        </div>
      </header>

      {/* Mobile bottom nav (100% optimisé mobile) */}
      <nav
        aria-label="Navigation mobile"
        className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-ink/10 bg-background/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
      >
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1.5 px-3 py-2.5">
          {mobileNav.map((item) => {
            const active = isMobileActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-full px-2 py-2 transition-colors duration-200",
                  active
                    ? "bg-ink text-cream shadow-[0_10px_20px_-10px_rgba(30,26,26,0.7)]"
                    : "bg-card/80 text-ink/60 shadow-[0_4px_14px_-8px_rgba(92,74,58,0.35)] hover:text-ink",
                )}
              >
                <item.icon className="h-5 w-5" strokeWidth={active ? 2.2 : 2} />
                <span className="text-[10px] font-semibold leading-none">
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
