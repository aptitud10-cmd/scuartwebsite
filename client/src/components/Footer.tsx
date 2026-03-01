import { Link } from "wouter";

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="relative py-16 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">SCUART</h4>
            <p className="text-gray-500 text-sm">
              Premium digital studio & product lab specializing in AI,
              automation, and SaaS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
              Company
            </h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="/#systems"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Our Systems
                </a>
              </li>
              <li>
                <a
                  href="/#case-studies"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
              Legal
            </h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-400">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  info@scuart.com
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/13478489720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +1 (347) 848-9720
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 SCUART. All rights reserved.</p>
            <p>Crafted with intention. Built to scale.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
