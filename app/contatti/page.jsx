"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "393272277691";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://www.instagram.com/cristinaionescu.nailmaster/";

export default function ContattiPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-black text-white pt-28 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-8 lg:px-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative max-w-screen-xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-white/60 uppercase">
            Contatti
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
            Scrivimi o <span className="font-bold">seguimi</span>
          </h1>
          <p className="mt-6 text-white/75 max-w-xl mx-auto leading-relaxed">
            Per info su corsi, prenotazioni o collaborazioni: WhatsApp per una
            risposta veloce, Instagram per restare aggiornata.
          </p>
        </div>
      </section>

      {/* CANALI */}
      <section
        data-nav-theme="light"
        className="relative w-full bg-white pb-20 pt-14 px-5 sm:px-8 lg:px-20">
        <div className="max-w-screen-md mx-auto">
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase text-center">
            Scegli come contattarmi
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            WhatsApp e Instagram
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl border-2 border-gray-100 bg-gray-50/50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-9 h-9 invert-0"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  WhatsApp
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  +39 327 227 7691
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Risposta rapida per info e prenotazioni
                </p>
              </div>
              <span className="text-sm font-semibold text-emerald-700 group-hover:underline">
                Apri chat →
              </span>
            </a>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl border-2 border-gray-100 bg-gray-50/50 hover:border-pink-200 hover:bg-pink-50/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-9 h-9 invert-0"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  Instagram
                </p>
                <p className="mt-2 text-base font-bold text-gray-900 break-all">
                  @cristinaionescu.nailmaster
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Lavori, anteprime corsi e novità
                </p>
              </div>
              <span className="text-sm font-semibold text-pink-700 group-hover:underline">
                Vai al profilo →
              </span>
            </a>
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-gray-500">
              Preferisci prima dare un’occhiata ai corsi?{" "}
              <Link
                href="/corsi"
                className="font-semibold text-gray-800 underline underline-offset-2 hover:text-black">
                Vai alla pagina Corsi
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
