import { Link } from "react-router";
import { Heart, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-card border-t border-brand-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-terracotta flex items-center justify-center">
                <span className="text-white font-bold text-lg">FM</span>
              </div>
              <span className="font-semibold text-xl text-brand-text">
                ForceMaman
              </span>
            </Link>
            <p className="text-brand-text/70 text-sm leading-relaxed max-w-md">
              Les guides bienveillants que j'aurais aimé avoir entre les mains 
              après la naissance de ma fille. Par Maria, sage-femme et maman.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:contact@forcemaman.fr"
                className="text-brand-text/50 hover:text-brand-terracotta transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/forcemaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text/50 hover:text-brand-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-brand-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Nos Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/guides/bundle"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Pack Complet
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-brand-text mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/confidentialite"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/cgv"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  to="/remboursement"
                  className="text-sm text-brand-text/70 hover:text-brand-terracotta transition-colors"
                >
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-text/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-text/50">
            © {new Date().getFullYear()} ForceMaman. Tous droits réservés.
          </p>
          <p className="text-sm text-brand-text/50 flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-brand-terracotta fill-brand-terracotta" /> par Maria
          </p>
        </div>
      </div>
    </footer>
  );
}
