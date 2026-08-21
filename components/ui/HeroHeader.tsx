import Link from "next/link";
import Image from "next/image";

const linkedInUrl = "https://www.linkedin.com/in/amine-rhammi-392376b9/";

export default function HeroHeader() {
  return (
    <section className="relative min-h-[620px] overflow-hidden sm:min-h-[680px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-900/35" />

      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-6 py-16 sm:min-h-[680px] lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-4xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">
            AMINE RHAMMI
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Mechanical Engineering Graduate Candidate
          </h1>
          <p className="mt-5 text-lg font-medium tracking-wide text-white/90 sm:text-2xl">
            Asset Integrity <span aria-hidden="true">·</span> Reliability <span aria-hidden="true">·</span> Project Delivery
          </p>
          <p className="mt-7 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Field engineering, reliability analysis, and maintenance systems experience across mining,
            oil &amp; gas, pulp &amp; paper, metallurgy, and manufacturing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Engineering Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Download CV
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 border-l-2 border-cyan-300/70 pl-4 text-sm leading-6 text-slate-300">
            Calgary, Canada → UK 2027 · Youth Mobility Scheme · No sponsorship required at commencement
          </p>
        </div>

        <Image
          src="/images/amine-rhammi-portrait.jpg"
          alt="Portrait of Amine Rhammi"
          width={224}
          height={224}
          className="hidden h-56 w-56 rounded-3xl border border-white/30 object-cover shadow-2xl shadow-black/30 lg:block"
        />
      </div>
    </section>
  );
}
