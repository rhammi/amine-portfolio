import Link from "next/link";

const pathways = [
  {
    slug: "reliability",
    title: "Reliability",
    detail: "Failure histories → maintenance decisions",
  },
  {
    slug: "mechanical",
    title: "Mechanical",
    detail: "Field constraints → practical design",
  },
  {
    slug: "mechatronics",
    title: "Mechatronics",
    detail: "Sensing → control → physical testing",
  },
];

export default function HeroHeader() {
  return (
    <header className="journal-hero text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-9 sm:px-8 sm:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-5 font-mono text-[11px] uppercase tracking-[.13em] text-slate-300">
          <span>Engineering evidence journal</span>
          <span>Amine Rhammi / BEng candidate / 2027</span>
        </div>
        <div className="max-w-4xl pb-10 pt-9 sm:pb-12 sm:pt-10">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-300">
            Mechanical · Reliability · Mechatronics
          </p>
          <h1 className="mt-5 max-w-[950px] text-[clamp(2.5rem,5.2vw,4.4rem)] font-bold leading-[1.06] tracking-[-.045em]">
            Understanding machines.
            <br />
            <span className="text-orange-200">
              Engineering better decisions.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Six industrial placements. Mechanical Engineering BEng candidate
            graduating April 2027. Field engineering, equipment reliability,
            industrial analytics and control systems.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured-evidence"
              className="journal-button journal-button-accent"
            >
              Explore my engineering work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="journal-button border border-white/40 text-white hover:bg-white/10"
            >
              View CV <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <nav
          aria-label="Select the engineering discipline"
          className="border-t border-white/20 pt-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-[.14em] text-slate-300">
            Select the engineering discipline
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {pathways.map((path, index) => (
              <Link
                key={path.slug}
                href={`/for/${path.slug}`}
                className="group rounded-lg border border-white/25 bg-white/[.035] px-4 py-4 transition-colors hover:border-orange-300 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-orange-200">
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-slate-300 group-hover:text-orange-200"
                  >
                    ↗
                  </span>
                </div>
                <h2 className="mt-1 text-lg font-bold">{path.title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {path.detail}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
