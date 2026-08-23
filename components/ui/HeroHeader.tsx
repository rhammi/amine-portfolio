import Link from "next/link";

export default function HeroHeader() {
  return (
    <section className="relative min-h-[580px] overflow-hidden sm:min-h-[640px]">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/72 to-slate-900/45" />

      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-6 py-16 sm:min-h-[640px] lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
              Reliability • Mechanical • Asset Performance
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Amine Rhammi
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-white/95 sm:text-2xl">
              Mechanical Engineering (Mechatronics) candidate building reliability solutions for asset-intensive industry.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Industrial experience across Imperial Oil / ExxonMobil, Valero, Kruger, Rio Tinto, and Soucy — combining field engineering, SAP maintenance history, life-data analysis, mechanical reliability, and scalable analytics.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-slate-100">
                View case studies
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Download CV
              </a>
              <Link href="/contact" className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Contact
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/75">
              <span>SAP PM</span><span>Weibull / life data</span><span>RCFA / FMECA</span><span>Databricks</span><span>Heavy equipment</span><span>CBM</span>
            </div>
          </div>

          <img
            src="/logos/moi.png"
            alt="Portrait of Amine Rhammi"
            className="mx-auto h-44 w-44 rounded-full border-4 border-white/70 object-cover shadow-2xl sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>
      </div>
    </section>
  );
}
