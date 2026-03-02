import Link from "next/link";
import { corsi } from "/data/corsi";

export const metadata = {
  title: "Corsi • Cristina Ionescu",
  description: "Percorsi di formazione nails: dal livello base al perfezionamento.",
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
      {children}
    </span>
  );
}

export default function CorsiPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-black text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-white/0" />
        </div>

        <div className="relative max-w-screen-xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-white/60 uppercase">
            Formazione
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
            I miei <span className="font-bold">Corsi</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl leading-relaxed">
            Percorsi progettati per farti crescere con metodo: dal primo livello
            fino alle tecniche più avanzate, con un approccio moderno e
            orientato ai risultati.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>📅 Date aggiornate</Pill>
            <Pill>🎯 Percorsi per livello</Pill>
            <Pill>⚡ Tecniche innovative</Pill>
          </div>
        </div>
      </section>

      {/* LISTA CORSI */}
      <section
        data-nav-theme="light"
        className="relative w-full bg-white pb-20 pt-14 px-5 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase">
                Scegli il tuo percorso
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-wide">
                Dal <span className="font-bold">livello base</span> al{" "}
                <span className="font-bold">perfezionamento</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed sm:text-right">
              Entra nei dettagli di ogni corso e scopri quale si adatta meglio
              al tuo momento professionale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {corsi.map((corso) => (
              <article
                key={corso.slug}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={corso.image}
                    alt={corso.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-4 py-1.5 shadow-sm">
                      {corso.level}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-4 flex-1">
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

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {corso.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {corso.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <Link
                      href={`/corsi/${corso.slug}`}
                      className="group/cta inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-gray-900 w-fit">
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-900 after:scale-x-100 group-hover/cta:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right">
                        Vedi dettagli
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

                    <span className="text-xs text-gray-300 font-semibold tracking-[0.25em] uppercase">
                      0{corso.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

