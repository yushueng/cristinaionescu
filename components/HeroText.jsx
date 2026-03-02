"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blocks = [
  {
    id: 1,
    image: "/copertina-calendario-corsi.jpg",
    title: "Calendario Corsi",
    description:
      "Scopri le date disponibili e prenota il tuo posto. Formazione professionale per aspiranti onicotecniche.",
  },
  {
    id: 2,
    image: "/slim.jpg",
    title: "Dual form Slim",
    description:
      "La tecnica più innovativa per una ricostruzione unghie perfetta. Forma precisa, risultato naturale e duraturo in tempi record.",
  },
];

const badgeItems = [
  { label: "Corsi", delay: "1000" },
  { label: "Manicure", delay: "1200" },
  { label: "Ricostruzione", delay: "1400" },
  { label: "Tecniche innovative", delay: "1600" },
];

function BadgeList({ className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      data-aos="fade-up"
      data-aos-delay="800">
      {badgeItems.map(({ label, delay }) => (
        <div
          key={label}
          className="group flex gap-2 items-center bg-white/10 border border-white/25 backdrop-blur-xl rounded-full px-5 md:px-6 py-2 md:py-2.5 text-white/90 text-xs md:text-sm tracking-[0.15em] uppercase font-light hover:bg-white/25 hover:border-white/50 hover:text-white transition-all duration-300 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay={delay}>
          <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-white transition-all duration-300 shrink-0" />
          {label}
        </div>
      ))}
    </div>
  );
}

export default function HeroText() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  const next = () => setCurrent((p) => (p + 1) % blocks.length);
  const prev = () => setCurrent((p) => (p - 1 + blocks.length) % blocks.length);
  const progress = ((current + 1) / blocks.length) * 100;

  return (
    <div className="w-full h-full flex flex-col">
      {/* ── CONTENUTO PRINCIPALE ── */}
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between w-full max-w-screen-xl mx-auto gap-10 lg:gap-0 min-h-[60vh]">
          {/* ── SINISTRA: Testo ── */}
          <div className="flex flex-col justify-between gap-16 pt-68 sm:pt-24 lg:pt-20">
            {/* Titolo */}
            <div
              className="text-gray-800 text-6xl sm:text-4xl lg:text-8xl drop-shadow-sm tracking-wider leading-tight text-left"
              data-aos="fade-up">
              <span
                className="text-white font-signature tracking-normal"
                data-aos="fade-up"
                data-aos-delay="400">
                Cristina Ionescu
              </span>
            </div>

            {/* Badge: solo desktop, in fondo alla colonna */}
            <BadgeList className="hidden lg:flex mt-auto justify-center" />
          </div>

          {/* ── DESTRA: Slider — nascosto su mobile ── */}
          <div className="hidden lg:flex flex-col items-center justify-center py-6 md:py-8 lg:pt-60">
            {/* Cards */}
            <div className="flex gap-8">
              {blocks.map((block, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={block.id}
                    className={`flex items-center transition-all duration-300 ${
                      isActive
                        ? "-translate-y-2 scale-105 z-20"
                        : "opacity-40 z-10"
                    }`}>
                    {/* Card foto */}
                    <div className="relative w-48 md:h-58 rounded-2xl overflow-hidden shadow-lg z-10">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card testo sovrapposta */}
                    <div className="-ml-5 w-36 h-44 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-3 flex flex-col justify-center z-20">
                      <h3 className="text-base font-bold text-gray-900">
                        {block.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {block.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Barra di progresso */}
            <div className="mt-6 w-full">
              <div className="flex justify-between items-center mb-2 text-gray-500 text-xs">
                <span>{String(current + 1).padStart(2, "0")}</span>
                <span>{String(blocks.length).padStart(2, "0")}</span>
              </div>
              <div className="w-full h-[2px] bg-gray-300 relative">
                <div
                  className="absolute top-0 left-0 h-[2px] bg-gray-800 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Controlli */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={prev}
                className="bg-gray-200 w-8 h-8 rounded-full text-gray-700 grid place-items-center hover:bg-gray-800 hover:text-white transition">
                ←
              </button>
              <button
                onClick={next}
                className="bg-gray-800 text-white w-8 h-8 rounded-full grid place-items-center hover:scale-105 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── BADGE MOBILE: full width in fondo, solo su mobile ── */}
      <div className="lg:hidden w-full px-6 pb-8 pt-2">
        <BadgeList className="justify-center" />
      </div>
    </div>
  );
}
