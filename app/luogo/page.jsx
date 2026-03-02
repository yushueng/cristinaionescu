import Link from "next/link";

export const metadata = {
  title: "Luogo • Roma • Cristina Ionescu",
  description: "Dove trovarci a Roma per corsi e trattamenti nails.",
};

const address = {
  city: "Roma",
  line: "Roma, Italia",
  note: "La sede esatta e gli orari ti vengono comunicati al momento della prenotazione.",
};

export default function LuogoPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-black text-white pt-28 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-8 lg:px-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_45%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative max-w-screen-xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-white/60 uppercase">
            Dove sono
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
            <span className="font-bold">{address.city}</span>
          </h1>
          <p className="mt-6 text-white/75 max-w-xl mx-auto leading-relaxed">
            Corsi e formazione nel cuore della capitale. Un ambiente dedicato alla
            professionalità e alla cura del dettaglio.
          </p>
        </div>
      </section>

      {/* CONTENUTO */}
      <section
        data-nav-theme="light"
        className="relative w-full bg-white pb-20 pt-14 px-5 sm:px-8 lg:px-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Mappa placeholder / card indirizzo */}
            <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50 aspect-[4/3] min-h-[280px] flex items-center justify-center">
              <a
                href="https://www.google.com/maps/search/Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-gray-500 hover:text-gray-700 transition">
                <span className="text-6xl">📍</span>
                <span className="text-sm font-medium text-center">
                  {address.line}
                </span>
                <span className="text-xs text-gray-400">
                  Clicca per aprire in Google Maps
                </span>
              </a>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase">
                Indirizzo e info
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Sede a Roma
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {address.note}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/80">
                  <span className="text-xl">🏛</span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                      Città
                    </p>
                    <p className="mt-1 text-gray-900 font-medium">{address.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/80">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                      Contatti
                    </p>
                    <p className="mt-1 text-gray-900 font-medium">
                      Scrivimi per ricevere indirizzo e orari
                    </p>
                    <Link
                      href="/contatti"
                      className="inline-block mt-2 text-sm font-semibold text-gray-800 underline underline-offset-2 hover:text-black">
                      Vai a Contatti →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
