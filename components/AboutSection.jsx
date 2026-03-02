"use client";
import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section data-nav-theme="light" className="relative w-full pb-20 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
      {/* ── LABEL TOP ── */}
      <p
        className="text-l sm:text-xl font-semibold tracking-[0.3em] text-gray-400 uppercase mb-12"
        data-aos="fade-down">
        About Me
      </p>

      {/* ── CONTENUTO ── */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 max-w-screen-xl mx-auto">
        {/* ── IMMAGINE ── */}
        <div
          className="relative w-full lg:w-[42%] shrink-0"
          data-aos="fade-right"
          data-aos-delay="200">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-gray-200 z-0" />
          <div className="about-image relative z-10 w-full h-80 sm:h-96 lg:h-[520px] rounded-3xl shadow-xl overflow-hidden" />

          {/* Badge flottante */}
          <div
            className="absolute bottom-6 -right-4 lg:-right-8 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-1"
            data-aos="zoom-in"
            data-aos-delay="600">
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Dal
            </span>
            <span className="text-3xl font-bold text-gray-900 leading-none">
              2021
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Nail Artist & Formatrice
            </span>
          </div>
        </div>

        {/* ── TESTO ── */}
        <div className="flex flex-col gap-8 lg:w-[58%]">
          {/* Titolo */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight tracking-wide">
              Cristina
              <span className="block font-bold text-gray-900">Ionescu</span>
            </h2>
          </div>

          {/* Divisore */}
          <div
            className="w-12 h-px bg-gray-300"
            data-aos="fade-up"
            data-aos-delay="350"
          />

          {/* Paragrafi */}
          <div
            className="flex flex-col gap-5 text-gray-500 text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400">
            <p>
              Onicotecnica professionista e formatrice nel settore nails dal
              2021. In pochi anni ha costruito solide competenze tecniche,
              dedicandosi ogni giorno a trasmettere{" "}
              <span className="font-semibold text-gray-800">
                precisione, creatività e amore per il mestiere.
              </span>
            </p>
            <p>
              Ispirata dalla sua mentore Dana Moruz, Cristina porta avanti una
              visione di eccellenza che combina tradizione e innovazione,
              coltivando nelle sue corsiste non solo la tecnica, ma una{" "}
              <span className="font-semibold text-gray-800">
                mentalità professionale e vincente.
              </span>
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/aboutme"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 w-fit"
            data-aos="fade-up"
            data-aos-delay="600">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
              Scopri di più su di me
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
          </Link>
        </div>
      </div>
    </section>
  );
}
