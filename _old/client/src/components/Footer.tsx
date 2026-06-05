/* Footer — Editorial Cálido
 * Continúa la zona invertida de la sección Contacto: fondo tinta, texto crema,
 * acento terracota. Cierre cálido coherente, no el viejo black/cyan.
 */

import { Link } from "wouter";

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const linkClass =
    "text-sm text-crema/60 hover:text-terracota transition-colors duration-300";

  return (
    <footer className="relative bg-tinta text-crema py-16 px-5 md:px-12 lg:px-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl text-crema tracking-tight">
              SCUART
            </span>
            <p className="text-sm text-crema/55 mt-4 leading-relaxed max-w-xs">
              Diseño y desarrollo web para marcas gastronómicas y comercios que
              no quieren verse como todos los demás.
            </p>
          </div>

          {/* Estudio */}
          <div>
            <h5 className="type-eyebrow text-crema/45 mb-4">Estudio</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className={linkClass}>
                  Servicios
                </Link>
              </li>
              <li>
                <a href="/#case-studies" className={linkClass}>
                  Trabajo
                </a>
              </li>
              <li>
                <a
                  href="https://menius.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  MENIUS
                </a>
              </li>
              <li>
                <Link to="/blog" className={linkClass}>
                  Notas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="type-eyebrow text-crema/45 mb-4">Legal</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className={linkClass}>
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className={linkClass}>
                  Términos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="type-eyebrow text-crema/45 mb-4">Contacto</h5>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`${linkClass} text-left`}
                >
                  info@scuart.com
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/13478489720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  +1 (347) 848-9720
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + baseline */}
        <div className="border-t border-crema/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-crema/45">
            <p>&copy; 2026 SCUART. Todos los derechos reservados.</p>
            <p>Estudio de diseño web para gastronomía.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
