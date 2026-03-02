"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// CORSI
const corsi = [
  {
    id: 1,
    level: "Livello 1",
    title: "Tecniche da Salone",
    description:
      "Un percorso completo per costruire basi solide e acquisire la mentalità giusta. Non impari solo a fare le unghie — impari a diventare una vera professionista.",
    date: "23 – 26 Aprile",
    days: "4 giorni",
    target: "Principianti & Aggiornamento",
    slug: "/corsi/livello-1",
  },
  {
    id: 2,
    level: "Livello 2",
    title: "Tecniche Professionali",
    description:
      "Un percorso avanzato per chi vuole fare il vero salto di qualità. Struttura, simmetria e rifinitura: ogni dettaglio portato al massimo livello.",
    date: "7 – 10 Maggio",
    days: "4 giorni intensivi",
    target: "Onicotecniche con esperienza",
    slug: "/corsi/livello-2",
  },
  {
    id: 3,
    level: "Masterclass",
    title: "Focus Dual Form",
    description:
      "Velocità, precisione e struttura perfetta. Impara a semplificare il lavoro, ottimizzare i tempi e ottenere unghie armoniose, resistenti e impeccabili.",
    date: "23 – 24 Maggio",
    days: "2 giorni intensivi",
    target: "Onicotecniche già formate",
    slug: "/corsi/dual-form",
  },
];

function CorsoCard({ corso, index }) {
  return (
    <div
      className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 120}>
      <div className="p-7 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">
            {corso.level}
          </span>
          <span className="text-xs text-gray-300 font-medium tracking-widest">
            0{corso.id}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            {corso.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-1">
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
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mt-3">
          {corso.description}
        </p>
      </div>

      <div className="px-7 py-4 border-t border-gray-100">
        <Link
          href={corso.slug}
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
  );
}

// LAVORI
const lavori = [
  { id: 1, image: "/lavoro-1.jpg" },
  { id: 2, image: "/lavoro-2.jpg" },
  { id: 3, image: "/lavoro-3.jpg" },
  { id: 4, image: "/lavoro-4.jpg" },
];

function LavoriGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
      {lavori.map((lavoro) => (
        <div
          key={lavoro.id}
          className="relative rounded-2xl overflow-hidden shadow-md bg-gray-100 group">
          <img
            src={lavoro.image}
            alt="Lavoro unghie"
            className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  );
}

export default function AboutMePage() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <main className="relative w-full bg-white text-gray-900">
      {/* HERO */}
      <section data-nav-theme="light" className="w-full py-20 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12">
          <div
            className="relative w-full lg:w-[42%] shrink-0"
            data-aos="fade-right">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-gray-200 z-0" />
            <div className="about-image relative z-10 w-full h-80 sm:h-96 lg:h-[520px] rounded-3xl shadow-xl overflow-hidden" />
            <div
              className="absolute bottom-6 -right-4 lg:-right-8 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-1"
              data-aos="zoom-in">
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

          <div className="flex flex-col gap-8 lg:w-[58%]">
            <div data-aos="fade-up">
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3">
                About Me
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight tracking-wide">
                Cristina{" "}
                <span className="font-bold text-gray-900">Ionescu</span>
              </h1>
            </div>

            <div className="w-12 h-px bg-gray-300" data-aos="fade-up" />

            <div
              className="flex flex-col gap-4 text-gray-500 text-base leading-relaxed"
              data-aos="fade-up">
              <p>
                Sono una onicotecnica professionista e formatrice nel settore
                nails, che ha scelto di trasformare una passione in un percorso
                concreto a partire dal 2021. In questi anni ho costruito
                competenze tecniche solide e un approccio formativo basato su{" "}
                <span className="font-semibold text-gray-800">
                  metodo, precisione e attenzione al dettaglio.
                </span>
              </p>
              <p>
                Il mio lavoro non è solo insegnare una tecnica, ma trasmettere{" "}
                <span className="font-semibold text-gray-800">
                  amore per un mestiere
                </span>{" "}
                fatto di cura, creatività e responsabilità. Ogni corsista che
                entra in aula con me non impara solo a fare le unghie, ma a
                vedere questo lavoro come una vera professione.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VALORI / METODO IN UN BOX */}

      <section className="w-full pb-10 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MENTORE */}
          <div
            className="bg-white/90 border border-gray-100 rounded-3xl p-6 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">
              Mentore
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ispirata da Dana Moruz
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Il mio percorso è profondamente influenzato dall&apos;insegnamento
              di Dana Moruz, che mi ha trasmesso una visione rigorosa e allo
              stesso tempo sensibile del mondo nails.
            </p>
          </div>

          {/* METODO */}
          <div
            className="bg-white/90 border border-gray-100 rounded-3xl p-6 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">
              Metodo
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Tecnica + Mentalità
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Nei miei corsi unisco tecnica avanzata, pratica guidata e lavoro
              sulla mentalità. Non voglio solo corsiste brave, ma professioniste
              consapevoli del proprio valore.
            </p>
          </div>

          {/* VISIONE */}
          <div
            className="bg-white/90 border border-gray-100 rounded-3xl p-6 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">
              Visione
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Eccellenza accessibile
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Credo in una formazione strutturata e seria, ma anche umana, dove
              ogni errore diventa un passaggio di crescita e non un giudizio.
            </p>
          </div>
        </div>
      </section>
      {/* CORSI */}
      <section className="w-full py-10 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            data-aos="fade-down">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">
                Formazione
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight tracking-wide">
                I miei <span className="font-bold text-gray-900">Corsi</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed sm:text-right">
              Tre percorsi pensati per livelli diversi, con un unico obiettivo:
              aiutarti a crescere davvero nel mondo nails.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {corsi.map((corso, index) => (
              <CorsoCard key={corso.id} corso={corso} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* LAVORI piú puliti */}
      <section className="w-full py-10 px-5 sm:px-8 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            data-aos="fade-down">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2">
                Lavori
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight tracking-wide">
                Corsiste &{" "}
                <span className="font-bold text-gray-900">Portfolio</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed sm:text-right">
              Una selezione di lavori personali e risultati delle corsiste, per
              mostrarti il tipo di risultato che puoi raggiungere.
            </p>
          </div>

          <LavoriGrid />

          <div className="flex justify-center">
            <Link
              href="/#lavori"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-800 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
                Guarda la galleria completa
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
    </main>
  );
}
