import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/393272277691";
const INSTAGRAM_LINK = "https://www.instagram.com/cristinaionescu.nailmaster/";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/aboutme" },
  { label: "Corsi", href: "/corsi" },
  { label: "Luogo", href: "/luogo" },
  { label: "Contatti", href: "/contatti" },
];

export default function Footer() {
  return (
    <footer
      data-nav-theme="dark"
      className="relative w-full bg-black text-white pt-14 pb-8 px-5 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo3.png"
                alt="Cristina Ionescu"
                className="h-12 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Nail Artist & Formatrice. Corsi e formazione a Roma.
            </p>
          </div>

          {/* Link */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">
              Navigazione
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Luogo */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">
              Luogo
            </h3>
            <p className="mt-4 text-gray-300 text-sm">Roma, Italia</p>
            <Link
              href="/luogo"
              className="inline-block mt-2 text-sm text-white/80 hover:text-white underline underline-offset-2 transition-colors">
              Info e mappa →
            </Link>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">
              Contatti
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <img src="/whatsapp.png" alt="" className="w-5 h-5 invert opacity-80" />
                +39 327 227 7691
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <img src="/instagram.png" alt="" className="w-5 h-5 invert opacity-80" />
                @cristinaionescu.nailmaster
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Cristina Ionescu. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp">
              <img src="/whatsapp.png" alt="" className="w-5 h-5 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <img src="/instagram.png" alt="" className="w-5 h-5 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
