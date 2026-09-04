import { Link } from "react-router";
import EmailForm from "@/components/EmailForm";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Newsletter */}
          <div className="max-w-md">
            <p className="eyebrow">Lettre du dimanche</p>
            <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">
              Un moment de clarté, <span className="italic">chaque semaine.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Des repères doux et des conseils de sage-femme pour alléger ta
              charge mentale après l'arrivée de bébé.
            </p>
            <EmailForm variant="footer" id="newsletter" className="mt-8" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Gratuit • Désinscription en un clic • Aucun spam
            </p>
          </div>

          {/* Explorer */}
          <div>
            <p className="eyebrow">Explorer</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link to="/journal" className="text-foreground/75 hover:text-foreground">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="text-foreground/75 hover:text-foreground">
                  Newsletter
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/75 hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-foreground/75 hover:text-foreground">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <p className="eyebrow">Guides</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link to="/guides" className="text-foreground/75 hover:text-foreground">
                  Tous les guides
                </Link>
              </li>
              <li>
                <Link to="/guides/liste-naissance" className="text-foreground/75 hover:text-foreground">
                  Liste naissance
                </Link>
              </li>
              <li>
                <Link to="/guides/corps-apres" className="text-foreground/75 hover:text-foreground">
                  Corps après
                </Link>
              </li>
              <li>
                <Link to="/guides/charge-mentale" className="text-foreground/75 hover:text-foreground">
                  Charge mentale
                </Link>
              </li>
              <li>
                <Link to="/guides/recettes-postpartum" className="text-foreground/75 hover:text-foreground">
                  Recettes post-partum
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <p className="eyebrow">Informations</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-foreground/75 hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-foreground/75 hover:text-foreground">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-foreground/75 hover:text-foreground">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-foreground/75 hover:text-foreground">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/remboursement" className="text-foreground/75 hover:text-foreground">
                  Remboursements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-serif text-lg text-foreground">
            Force<span className="italic">Maman</span>
          </p>
          <div className="flex items-center gap-5 text-foreground/70">
            <a
              href="https://www.instagram.com/forcemaman"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @forcemaman"
              className="hover:text-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/forcemaman"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook @forcemaman"
              className="hover:text-foreground"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://www.youtube.com/@forcemaman"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube @forcemaman"
              className="hover:text-foreground"
            >
              <Youtube className="size-4" />
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
