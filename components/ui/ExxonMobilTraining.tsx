import Image from "next/image";

const certificates = [
  {
    title: "Fixed Equipment Strategy Development",
    date: "17 Aug 2026",
    theme: "Equipment strategy",
    image: "/experience/imperial/certificates/fixed-equipment-strategy.jpg",
  },
  {
    title: "Engineering Analysis Fundamentals",
    date: "10 Aug 2026",
    theme: "Engineering foundation",
    image: "/experience/imperial/certificates/engineering-analysis-fundamentals.jpg",
  },
  {
    title: "Compressor Troubleshooting (for Engineers)",
    date: "14 Aug 2026",
    theme: "Rotating equipment",
    image: "/experience/imperial/certificates/compressor-troubleshooting.jpg",
  },
  {
    title: "Fired Heater Troubleshooting (for Engineers)",
    date: "18 Aug 2026",
    theme: "Fired equipment",
    image: "/experience/imperial/certificates/fired-heater-troubleshooting.jpg",
  },
  {
    title: "Heat Exchanger Troubleshooting (for Engineers)",
    date: "14 Aug 2026",
    theme: "Heat-transfer equipment",
    image: "/experience/imperial/certificates/heat-exchanger-troubleshooting.jpg",
  },
  {
    title: "Instrumentation and Control Valve Troubleshooting (for Engineers)",
    date: "10 Aug 2026",
    theme: "Instrumentation & controls",
    image: "/experience/imperial/certificates/instrumentation-control-valve-troubleshooting.jpg",
  },
  {
    title: "Pump Troubleshooting (for Engineers)",
    date: "14 Aug 2026",
    theme: "Rotating equipment",
    image: "/experience/imperial/certificates/pump-troubleshooting.jpg",
  },
  {
    title: "RCM Equipment Strategy Development",
    date: "26 Aug 2026",
    theme: "Reliability strategy",
    image: "/experience/imperial/certificates/rcm-equipment-strategy.jpg",
  },
];

const trainingThemes = [
  { value: "2", label: "Strategy courses", detail: "Fixed equipment and RCM" },
  { value: "5", label: "Troubleshooting courses", detail: "Mechanical, process and control equipment" },
  { value: "1", label: "Analysis course", detail: "Engineering fundamentals" },
];

export default function ExxonMobilTraining() {
  return (
    <section id="exxonmobil-training" aria-labelledby="exxonmobil-training-title" className="mt-20 scroll-mt-28 border-t border-slate-300 pt-16 sm:mt-24 sm:pt-20">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Verified training record</p>
          <h2 id="exxonmobil-training-title" className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            ExxonMobil equipment and reliability training.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            Eight completion records document structured learning in equipment strategy, engineering analysis and troubleshooting during the 2026 placement.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            These records confirm course completion. They are not presented as third-party professional licences or as standalone proof of field mastery.
          </p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-3">
          {trainingThemes.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">{item.label}</dt>
              <dd className="mt-3 text-3xl font-black text-slate-950">{item.value}</dd>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.detail}</p>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <article key={certificate.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full-size certificate for ${certificate.title}`}
              className="group relative block aspect-[1081/766] overflow-hidden border-b border-slate-200 bg-white"
            >
              <Image
                src={certificate.image}
                alt={`ExxonMobil Certificate of Achievement awarded to Amine Rhammi for ${certificate.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover transition duration-500 group-hover:scale-[1.015]"
              />
            </a>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-700">{certificate.theme}</p>
                <time className="text-xs font-bold text-slate-500">{certificate.date}</time>
              </div>
              <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">{certificate.title}</h3>
              <p className="mt-4 text-xs font-semibold text-slate-500">
                Certificate {String(index + 1).padStart(2, "0")} of {String(certificates.length).padStart(2, "0")} · Issued by ExxonMobil
              </p>
              <a href={certificate.image} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-extrabold text-slate-950 hover:text-orange-700">
                Open full certificate <span className="ml-1" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
