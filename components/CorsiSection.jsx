"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { corsi } from "/data/corsi";

function CorsoCard({ corso, index }) {
  return (
    <div
      className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 150}>
      {/* ── IMMAGINE QUADRATA ── */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={corso.image}
          alt={corso.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Badge livello */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-4 py-1.5 shadow-sm">
            {corso.level}
          </span>
        </div>

        {/* Numero corso */}
        <div className="absolute bottom-4 right-4">
          <span className="text-3xl font-bold text-white/30 leading-none">
            0{corso.id}
          </span>
        </div>
      </div>

      {/* ── CONTENUTO ── */}
      <div className="flex flex-col flex-1 p-7 gap-5">
        {/* Pillole info — sopra la descrizione */}
        <div className="flex flex-wrap gap-2">
          {[
            { icon: "📅", label: corso.date },
            { icon: "🗓", label: corso.days },
            { icon: "👩‍🎓", label: corso.target },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5">
              <span>{icon}</span>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Titolo + descrizione */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            {corso.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {corso.description}
          </p>
        </div>

        {/* ── CTA — spinto in fondo ── */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/corsi/${corso.slug}`}
            className="group/cta inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 w-fit">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover/cta:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
              Scopri il corso
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CorsiSection() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section
      id="corsi"
      data-nav-theme="light"
      className="relative w-full pb-20 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
      {/* ── HEADER ── */}
      <div
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        data-aos="fade-down">
        <div>
          <p className="text-l sm:text-xl font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3">
            Formazione
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight tracking-wide">
            I miei <span className="font-bold text-gray-900">Corsi</span>
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-xs leading-relaxed sm:text-right">
          Percorsi pensati per ogni livello. Dalla prima unghia all'eccellenza
          professionale.
        </p>
      </div>

      {/* ── GRIGLIA CORSI ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {corsi.map((corso, index) => (
          <CorsoCard key={corso.id} corso={corso} index={index} />
        ))}
      </div>
    </section>
  );
}
