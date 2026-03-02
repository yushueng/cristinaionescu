"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const lavori = [
  {
    id: 1,
    image: "/lavoro-corsista-1.png",
    tipo: "Manicure classica",
    autore: "Lavoro della corsista",
  },
  {
    id: 2,
    image: "/lavoro-corsista-2.png",
    tipo: "Nail Art con pietre",
    autore: "Lavoro della corsista",
  },
  {
    id: 3,
    image: "/lavoro-corsista-3.png",
    tipo: "French e nail art floreale",
    autore: "Lavoro della corsista",
  },
  {
    id: 4,
    image: "/lavoro-corsista-4.png",
    tipo: "Half-moon glitter",
    autore: "Lavoro della corsista",
  },
  {
    id: 5,
    image: "/lavoro-corsista-5.png",
    tipo: "Linee e cristalli",
    autore: "Lavoro della corsista",
  },
  {
    id: 6,
    image: "/lavoro-corsista-6.png",
    tipo: "Design geometrico",
    autore: "Lavoro della corsista",
  },
];

export default function LavoriCorsisteSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % lavori.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goTo = (index) => {
    setCurrent(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prev = () => goTo((current - 1 + lavori.length) % lavori.length);
  const next = () => goTo((current + 1) % lavori.length);

  // Visibili: 1 centrale + 2 laterali su desktop
  const getVisible = () => {
    const left = (current - 1 + lavori.length) % lavori.length;
    const right = (current + 1) % lavori.length;
    return { left, center: current, right };
  };

  const { left, center, right } = getVisible();

  return (
    <section data-nav-theme="light" className="relative w-full pb-20 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
      {/* ── HEADER ── */}
      <div
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        data-aos="fade-down">
        <div>
          <p className="text-l sm:text-xl font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3">
            Galleria
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight tracking-wide">
            Lavori delle{" "}
            <span className="font-bold text-gray-900">Corsiste</span>
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-xs leading-relaxed sm:text-right">
          Risultati reali di corsiste e lavori personali. La qualità che puoi
          raggiungere.
        </p>
      </div>

      {/* ── SLIDESHOW DESKTOP ── */}
      <div className="hidden lg:flex items-center justify-center gap-6 relative">
        {/* Freccia sinistra */}
        <button
          onClick={prev}
          className="shrink-0 w-10 h-10 rounded-full border border-gray-200 grid place-items-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 z-10">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex items-center gap-5 w-full max-w-5xl justify-center">
          {[left, center, right].map((idx, pos) => {
            const lavoro = lavori[idx];
            const isCenter = pos === 1;
            return (
              <div
                key={lavoro.id}
                onClick={() => goTo(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shrink-0 ${
                  isCenter
                    ? "w-80 h-96 shadow-2xl scale-105 z-20"
                    : "w-60 h-72 shadow-md opacity-50 hover:opacity-70 z-10"
                }`}>
                <img
                  src={lavoro.image}
                  alt={lavoro.tipo}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Banner tipo lavoro */}
                {isCenter && (
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-4 py-1.5 shadow-sm">
                      {lavoro.tipo}
                    </span>
                    <span className="text-[10px] font-medium text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                      {lavoro.autore}
                    </span>
                  </div>
                )}

                {/* Nome in basso */}
                {isCenter && (
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-bold text-lg leading-tight">
                      {lavoro.tipo}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      {lavoro.autore}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Freccia destra */}
        <button
          onClick={next}
          className="shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white grid place-items-center hover:scale-110 transition-all duration-300 z-10">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* ── SLIDESHOW MOBILE ── */}
      <div className="lg:hidden relative">
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
          <img
            src={lavori[current].image}
            alt={lavori[current].tipo}
            className="w-full h-full object-cover transition-all duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Banner tipo */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-4 py-1.5 shadow-sm">
              {lavori[current].tipo}
            </span>
            <span className="text-[10px] font-medium text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
              {lavori[current].autore}
            </span>
          </div>

          {/* Testo in basso */}
          <div className="absolute bottom-5 left-5">
            <p className="text-white font-bold text-lg">
              {lavori[current].tipo}
            </p>
            <p className="text-white/60 text-xs mt-0.5">
              {lavori[current].autore}
            </p>
          </div>

          {/* Frecce mobile */}
          <div className="absolute bottom-5 right-5 flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm grid place-items-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white text-gray-900 grid place-items-center hover:scale-110 transition-all duration-300">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── DOTS ── */}
      <div className="flex justify-center gap-2 mt-8">
        {lavori.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-6 h-2 bg-gray-900"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* ── CONTATORE ── */}
      <div className="flex justify-center mt-4">
        <span className="text-xs font-medium text-gray-400 tracking-widest">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(lavori.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
