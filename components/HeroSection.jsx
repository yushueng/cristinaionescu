"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroText from "/components/HeroText";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      offset: 80,
      once: true,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <section data-nav-theme="dark" className="hero-background relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10 z-0" />

      {/* ── CONTENUTO ── */}
      <div
        className="relative z-10 flex-1 mt-6 p-0 md:p-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900">
        <HeroText />
      </div>
    </section>
  );
}
