"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = ["Home", "About me", "Corsi", "Luogo", "Contatti"];

const getHref = (label) => {
  if (label === "Home") return "/";
  if (label === "About me") return "/aboutme";
  if (label === "Corsi") return "/corsi";
  if (label === "Luogo") return "/luogo";
  if (label === "Contatti") return "/contatti";
  return "#";
};

const WHATSAPP_LINK = "https://wa.me/393272277691";
const INSTAGRAM_LINK = "https://www.instagram.com/cristinaionescu.nailmaster/";

/** Punto sotto la navbar (in px) usato per capire su quale sezione siamo */
const NAV_CHECK_Y = 100;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  /** "dark" = sfondo scuro (hero) → navbar chiara; "light" = sfondo chiaro → navbar scura */
  const [navTheme, setNavTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      offset: 80,
      once: true,
      anchorPlacement: "top-center",
    });

    const handleScrollAndTheme = () => {
      // Stato di scroll per mostrare lo sfondo della navbar dopo un po'
      setScrolled(window.scrollY > 80);

      const sections = document.querySelectorAll("[data-nav-theme]");
      const centerX = window.innerWidth / 2;
      const checkY = NAV_CHECK_Y;

      let found = false;
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const theme = el.getAttribute("data-nav-theme");
        if (
          rect.top <= checkY &&
          rect.bottom >= checkY &&
          rect.left <= centerX &&
          rect.right >= centerX
        ) {
          setNavTheme(theme || "dark");
          found = true;
        }
      });
      if (!found) setNavTheme("dark");
    };

    handleScrollAndTheme();
    window.addEventListener("scroll", handleScrollAndTheme, { passive: true });
    window.addEventListener("resize", handleScrollAndTheme);
    return () => {
      window.removeEventListener("scroll", handleScrollAndTheme);
      window.removeEventListener("resize", handleScrollAndTheme);
    };
  }, []);

  // Forza tema chiaro sopra la pagina About Me quando la navbar è trasparente
  const forceLightPage = pathname?.startsWith("/aboutme");
  // Colori contenuto: adattivi solo quando la navbar è trasparente.
  // Quando compare lo sfondo in scroll, restano fissi come \"default\" (schema scuro).
  const isLight = !scrolled && (forceLightPage || navTheme === "light");
  // Sfondo: trasparente in alto, sempre scuro quando si scrolla
  const navBg = scrolled
    ? "bg-black/70 border-b border-black/60 shadow-md backdrop-blur-md"
    : "bg-transparent";

  return (
    <>
      {/* ── NAVBAR FIXED (trasparente in alto, con sfondo quando si scrolla) ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-5 sm:px-8 lg:px-16 py-4 lg:py-5 transition-all duration-500 ${navBg}`}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/logo3.png"
            alt="Cristina Ionescu"
            className={`h-14 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-xl cursor-pointer hover:opacity-80 transition-all duration-300 ${isLight ? "invert" : ""}`}
            data-aos="fade"
            data-aos-delay="100"
          />
        </Link>

        {/* ── DESKTOP: pill centrale (stile in base al tema) ── */}
        <div
          className={`hidden lg:flex items-center gap-1 backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl transition-all duration-300 ${
            isLight
              ? "bg-gray-900/10 border border-gray-300/80"
              : "bg-white/15 border border-white/25"
          }`}
          data-aos="fade"
          data-aos-delay="200">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={getHref(label)}
              className={`relative font-medium text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                isLight
                  ? "text-gray-800 hover:bg-gray-900 hover:text-white hover:shadow-md"
                  : "text-white/90 hover:bg-white hover:text-gray-900 hover:shadow-md"
              }`}>
              {label}
            </Link>
          ))}
        </div>

        {/* ── DESKTOP: icone destra ── */}
        <div
          className="hidden lg:flex items-center gap-2"
          data-aos="fade"
          data-aos-delay="300">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`w-10 h-10 backdrop-blur-md rounded-full grid place-items-center hover:scale-110 transition-all duration-300 group shadow-lg ${
              isLight
                ? "bg-gray-900/10 border border-gray-300/80 hover:bg-gray-900"
                : "bg-white/15 border border-white/20 hover:bg-white"
            }`}>
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className={`w-6 h-6 transition-all duration-300 ${isLight ? "invert group-hover:invert-0" : "group-hover:invert"}`}
            />
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`w-10 h-10 backdrop-blur-md rounded-full grid place-items-center hover:scale-110 transition-all duration-300 group shadow-lg ${
              isLight
                ? "bg-gray-900/10 border border-gray-300/80 hover:bg-gray-900"
                : "bg-white/15 border border-white/20 hover:bg-white"
            }`}>
            <img
              src="/instagram.png"
              alt="Instagram"
              className={`w-6 h-6 transition-all duration-300 ${isLight ? "invert group-hover:invert-0" : "group-hover:invert"}`}
            />
          </a>
        </div>

        {/* ── MOBILE: hamburger (colori in base al tema) ── */}
        <button
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group`}
          onClick={() => setMenuOpen(true)}
          aria-label="Apri menu">
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${isLight ? "bg-gray-800" : "bg-white"}`} />
          <span className={`w-4 h-[2px] rounded-full transition-all duration-300 ${isLight ? "bg-gray-600" : "bg-white/70"}`} />
          <span className={`w-5 h-[2px] rounded-full transition-all duration-300 ${isLight ? "bg-gray-400" : "bg-white/40"}`} />
        </button>
      </nav>

      {/* ── BACKDROP ── */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── SLIDER MOBILE ── */}
      <div
        className={`fixed top-0 right-0 w-72 h-full z-50 lg:hidden flex flex-col transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "rgba(255,255,255,0.97)" }}>
        <div className="flex items-center justify-between px-8 pt-10 pb-6">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 grid place-items-center text-gray-500 hover:bg-gray-200 transition-all duration-200 text-sm">
            ✕
          </button>
        </div>

        <div className="mx-8 h-px bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200" />

        <div className="flex flex-col px-8 pt-8 gap-1 flex-1">
          {navLinks.map((label, i) => (
            <Link
              key={label}
              href={getHref(label)}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`group flex items-center justify-between text-gray-800 font-light text-2xl py-4 border-b border-gray-100 hover:text-gray-400 transition-all duration-300 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-6 opacity-0"
              }`}>
              <span>{label}</span>
              <span className="text-gray-200 group-hover:text-gray-400 text-base transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="px-8 py-8">
          <p className="text-xs text-gray-300 tracking-widest uppercase mb-4">
            Seguimi
          </p>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-600 text-xs font-medium">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-600 text-xs font-medium">
              <img src="/instagram.png" alt="Instagram" className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
