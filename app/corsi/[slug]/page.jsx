import Link from "next/link";
import { notFound } from "next/navigation";
import { corsi } from "/data/corsi";

export function generateStaticParams() {
  return corsi.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const corso = corsi.find((c) => c.slug === params.slug);
  if (!corso) return {};
  return {
    title: `${corso.title} • Corsi • Cristina Ionescu`,
    description: corso.description,
  };
}

export default function CorsoDetailPage({ params }) {
  const corso = corsi.find((c) => c.slug === params.slug);
  if (!corso) notFound();

  return (
    <main className="w-full">
      {/* HERO */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-black text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-20">
        <div className="absolute inset-0">
          <img
            src={corso.image}
            alt={corso.title}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        </div>

        <div className="relative max-w-screen-xl mx-auto">
          <Link
            href="/corsi"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-white/65 hover:text-white transition">
            ← Torna ai corsi
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
              {corso.level}
            </span>
            {[
              { icon: "📅", label: corso.date },
              { icon: "🗓", label: corso.days },
              { icon: "👩‍🎓", label: corso.target },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
                <span>{icon}</span>
                <span className="font-medium">{label}</span>
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
            {corso.title}
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl leading-relaxed">
            {corso.description}
          </p>
        </div>
      </section>

      {/* CONTENUTO */}
      <section
        data-nav-theme="light"
        className="relative w-full bg-white pb-20 pt-14 px-5 sm:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-7 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase">
              Dettagli
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
              Un percorso costruito per{" "}
              <span className="underline decoration-gray-300 underline-offset-4">
                risultati reali
              </span>
              .
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Qui trovi una panoramica chiara del corso: livello, durata e
              obiettivo. La pagina è pensata per essere veloce da scorrere e
              super leggibile (stile moderno “card”).
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Livello", value: corso.level },
                { label: "Durata", value: corso.days },
                { label: "Date", value: corso.date },
                { label: "Target", value: corso.target },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-100 bg-gray-50 p-7 sm:p-10 h-fit">
            <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase">
              Prossimo step
            </p>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
              Vuoi vedere anche gli altri percorsi?
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Se non sei sicura del livello giusto, inizia dalla panoramica e
              confronta rapidamente i corsi.
            </p>
            <Link
              href="/corsi"
              className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-black transition">
              Vai alla pagina corsi
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

