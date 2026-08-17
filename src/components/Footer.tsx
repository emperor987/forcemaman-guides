import { Link } from "react-router";
import { BookOpen, Heart, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold text-ink hover:opacity-80 transition-opacity"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            ForceMaman
          </Link>
          <p className="mt-3 text-sm text-ink/70 max-w-xs">
            Les guides bienveillants du post-partum, écrits par une sage-femme.
            Pour traverser cette période avec clarté, sans culpabilité.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-4 inline-flex items-center justify-center rounded-lg border-2 border-ink p-2 text-ink hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-ink/70 hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/guides" className="text-ink/70 hover:text-primary transition-colors">
                Nos Guides
              </Link>
            </li>
            <li>
              <Link to="/guides/bundle" className="text-ink/70 hover:text-primary transition-colors">
                Pack Complet
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-ink/70 hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            Légal
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/mentions-legales" className="text-ink/70 hover:text-primary transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="text-ink/70 hover:text-primary transition-colors">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link to="/cgv" className="text-ink/70 hover:text-primary transition-colors">
                CGV
              </Link>
            </li>
            <li>
              <Link to="/remboursement" className="text-ink/70 hover:text-primary transition-colors">
                Remboursement
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:hello@forcemaman.fr" className="hover:text-primary transition-colors">
                hello@forcemaman.fr
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Guadeloupe / Martinique</span>
            </li>
            <li className="flex items-start gap-2">
              <Heart className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Écrit avec bienveillance par Maria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-ink/60">
          © {new Date().getFullYear()} ForceMaman. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
