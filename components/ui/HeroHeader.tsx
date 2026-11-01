import Link from "next/link";
import Image from "next/image";

const pathways = [
  {
    slug: "reliability",
    title: "Reliability",
    detail: "Failure histories → maintenance decisions",
    image: "/images/cat-d11-david-drew.jpg",
    alt: "D11 dozer equipment context",
  },
  {
    slug: "mechanical",
    title: "Mechanical",
    detail: "Field constraints → practical design",
    image: "/images/refinery-tanks-carl-young.jpg",
    alt: "Storage tanks and pipework shown as industrial context",
  },
  {
    slug: "mechatronics",
    title: "Mechatronics",
    detail: "Sensing → control → physical testing",
    image: "/projects/gei1087/festo-cell-hero.jpg",
    alt: "FESTO pneumatic pick-and-place laboratory station",
  },
];

export default function HeroHeader() {
  return (
    <header className="journal-hero text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-7 pt-8 sm:px-8">
        <div className="grid items-center gap-8 pb-8 lg:grid-cols-[1.35fr_.75fr] lg:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-300">
            Mechanical · Reliability · Mechatronics
          </p>
          <h1 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] font-bold leading-[1.06] tracking-[-.045em]">
            Understanding machines.
            <br />
            <span className="text-orange-200">
              Engineering better decisions.
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200">
            Six industrial placements. Mechanical Engineering BEng candidate
            graduating April 2027. Field engineering, equipment reliability,
            industrial analytics and control systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
        <figure className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Link href="/experience" className="group relative block aspect-[5/3] overflow-hidden rounded-xl border border-white/20 sm:aspect-[2/1] lg:aspect-square">
            <Image src="/profile/amine-industrial-field.jpg" alt="Amine in Imperial Oil protective equipment beside heavy industrial machinery" fill priority sizes="(max-width: 1024px) 90vw, 370px" className="object-cover object-[50%_33%] transition-transform duration-500 group-hover:scale-[1.025]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-5 pb-5 pt-16">
              <span className="font-mono text-[10px] uppercase tracking-widest text-orange-200">In the field / Imperial Oil</span>
              <p className="mt-2 text-lg font-bold">The machine comes first. <span aria-hidden="true">↗</span></p>
            </div>
          </Link>
          <figcaption className="mt-2 text-[11px] text-slate-300">Personal field photograph · Explore six industrial placements</figcaption>
        </figure>
        </div>
        <nav
          aria-label="Select the engineering discipline"
          className="border-t border-white/20 pt-4"
        >
          <p className="font-mono text-[11px] uppercase tracking-[.14em] text-slate-300">
            Select the engineering discipline
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {pathways.map((path, index) => (
              <Link
                key={path.slug}
                href={`/for/${path.slug}`}
                className="group grid grid-cols-[6rem_1fr] overflow-hidden rounded-lg border border-white/25 bg-white/[.035] transition-colors hover:border-orange-300 hover:bg-white/10 sm:block"
              >
                <div className="relative min-h-28 overflow-hidden border-r border-white/15 sm:h-24 sm:min-h-0 sm:border-b sm:border-r-0">
                  <Image src={path.image} alt={path.alt} fill sizes="(max-width: 640px) 90vw, 370px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-2 left-2 rounded bg-slate-950/85 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white sm:left-3">{index < 2 ? "Context*" : "Lab evidence"}</span>
                </div>
                <div className="px-4 py-3">
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
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-300">*Context photographs, responsively cropped: D11 — <a href="https://commons.wikimedia.org/wiki/File:Cat_D11_View_2.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-2">David Drew</a> / <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer" className="underline underline-offset-2">CC BY-SA 3.0</a>; tanks — <a href="https://commons.wikimedia.org/wiki/File:Refinery_Tanks_2.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-2">Carl Young</a> / <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="underline underline-offset-2">CC BY-SA 4.0</a> (resized). Not the studied fleet or Valero site.</p>
        </nav>
      </div>
    </header>
  );
}
