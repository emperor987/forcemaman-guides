import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { BookOpen, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos Guides", href: "/guides" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "mailto:hello@forcemaman.fr", external: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
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

        <div className="flex items-center gap-2">
          <Link
            to="/guides"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border-2 border-ink bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-bold transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Voir les guides
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg border-2 border-ink/20 p-2 text-ink hover:border-ink transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-ink/10 transition-all duration-300 ease-out",
          isMenuOpen
            ? "max-h-72 border-t opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/75 hover:bg-secondary hover:text-ink transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium text-ink/75 hover:bg-secondary hover:text-ink transition-colors",
                  isActive(item.href) && "text-primary font-semibold",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
          <Link
            to="/guides"
            className="mt-2 inline-flex items-center justify-center rounded-xl border-2 border-ink bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold shadow-bold"
          >
            Voir les guides
          </Link>
        </nav>
      </div>
    </header>
  );
}
