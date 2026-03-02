"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function SecondSection() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section data-nav-theme="light" className="relative w-full py-16 px-5 sm:px-8 lg:px-20 overflow-hidden bg-white">
      {/* ── HEADER ── */}
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12"
        data-aos="fade-down">
        {/* Titolo + About Me affiancati su mobile */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:block max-w-lg">
          <div>
            <p className="text-l sm:text-xl font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3">
              Benvenuta
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight tracking-wide">
              La tua bellezza e il tuo Successo
              <span className="block font-bold text-gray-900 mt-1">
                Inizia qui.
              </span>
            </h2>
          </div>

          {/* About Me — solo mobile, a destra del titolo */}
          <Link
            href="/aboutme"
            className="group flex flex-col items-center gap-2 sm:hidden shrink-0 ml-4"
            data-aos="fade-left"
            data-aos-delay="200">
            <div className="w-11 h-11 rounded-full border border-gray-300 grid place-items-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
              <svg
                className="w-4 h-4 text-gray-700 group-hover:text-white transition-all duration-300 rotate-[-45deg]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-700">
              About Me
            </span>
          </Link>
        </div>

        {/* About Me — solo tablet/desktop */}
        <Link
          href="/aboutme"
          className="group hidden sm:flex items-center gap-3 shrink-0"
          data-aos="fade-left"
          data-aos-delay="200">
          <div className="w-11 h-11 rounded-full border border-gray-300 grid place-items-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
            <svg
              className="w-4 h-4 text-gray-700 group-hover:text-white transition-all duration-300 rotate-[-45deg]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gray-700 after:transition-all after:duration-300 group-hover:after:w-full">
            About Me
          </span>
        </Link>
      </div>

      {/* ── GRIGLIA IMMAGINI ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        {/* ── CARD 1 — Corsi di unghie ── */}
        <div
          className="lg:col-span-4 flex flex-col gap-8"
          data-aos="fade-right"
          data-aos-delay="300">
          <div className="image-1-second-section rounded-3xl w-full h-64 sm:h-72 lg:h-80 shadow-md overflow-hidden" />
          <div className="px-2 flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase">
              Formazione professionale
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Impara le tecniche più richieste del settore, dalla ricostruzione
              al{" "}
              <span className="font-semibold text-gray-800">
                nail art avanzato.
              </span>{" "}
              Corsi pensati per chi vuole fare della propria passione un lavoro.
            </p>
            <a
              href="#corsi"
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 w-fit"
              data-aos="fade-up"
              data-aos-delay="500">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
                Scopri i corsi
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── CARD 2 — Solo immagine ── */}
        <div
          className="image-2-second-section rounded-3xl sm:col-span-2 lg:col-span-3 w-full h-72 sm:h-96 lg:h-[28rem] lg:-translate-y-6 shadow-xl"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        />

        {/* ── CARD 3 — Accademia ── */}
        <div
          className="lg:col-span-5 flex flex-col gap-8"
          data-aos="fade-left"
          data-aos-delay="600">
          <div className="px-1 flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
              La mia accademia
            </p>
            <h3 className="text-2xl sm:text-3xl text-gray-800 leading-snug">
              Un luogo dove la{" "}
              <span className="font-bold text-gray-900">
                passione diventa professione.
              </span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-1">
              Un ambiente curato, attrezzato e pensato per formare le nail
              artist di domani. Ogni corso è un percorso su misura.
            </p>

            {/* Scopri di più — solo desktop, sotto il testo */}
            <a
              href="#accademia"
              className="group hidden lg:inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 w-fit mt-2"
              data-aos="fade-up"
              data-aos-delay="700">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
                Scopri di più
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="image-3-second-section rounded-3xl w-full h-64 sm:h-72 shadow-md" />

          {/* Scopri di più — solo mobile, sotto l'immagine */}
          <a
            href="#accademia"
            className="group lg:hidden inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 w-fit px-2"
            data-aos="fade-up"
            data-aos-delay="700">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
              Scopri di più
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
