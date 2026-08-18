import { Link, useLocation } from "react-router";
import { BookOpen, Home, Library } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Journal", href: "/journal" },
  { name: "Nos Guides", href: "/guides" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

/** Navigation mobile basse — pilule flottante ivoire, item actif en pastille sombre */
const mobileNav = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Journal", href: "/journal", icon: BookOpen },
  { name: "Nos Guides", href: "/guides", icon: Library },
];

export default function Header() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const isMobileActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Aller au contenu
      </a>
      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-12">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-base tracking-tight text-foreground sm:text-lg"
          >
            Force<span className="italic">Maman</span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[0.7rem] uppercase tracking-[0.2em] text-foreground/65 transition-colors hover:text-foreground",
                  isActive(item.href) && "text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>


        </div>
      </header>

      {/* Navigation mobile basse — pilule flottante (copie exacte du référence) */}
      <nav
        aria-label="Navigation principale"
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2"
      >
        <div
          className="relative flex w-full max-w-md items-stretch gap-1 rounded-full border border-white/40 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] p-1.5 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 20px 60px -20px rgba(35,33,32,0.35), 0 2px 6px -2px rgba(35,33,32,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
          }}
        >
          {mobileNav.map((item) => {
            const active = isMobileActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full px-2 py-2 transition-colors",
                  active ? "text-background" : "text-foreground/70",
                )}
              >
                {active ? (
                  <span className="absolute inset-0 rounded-full bg-foreground" />
                ) : null}
                <span
                  className={cn(
                    "relative z-10 flex flex-col items-center gap-0.5",
                    active ? "text-background" : "text-foreground/80",
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={1.6} />
                  <span className="text-[10px] font-medium tracking-wide">
                    {item.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
