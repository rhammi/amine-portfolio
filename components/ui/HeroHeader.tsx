import Link from "next/link";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div aria-hidden="true" className="absolute -right-36 -top-28 h-[34rem] w-[34rem] rounded-full border-[5rem] border-orange-500/20" />
      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_20rem] lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-400">Mechanical · Reliability · Mechatronics</p>
          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Engineering systems that hold up in the field.</h1>
          <p className="mt-7 max-w-3xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">Mechanical Engineering Graduate Candidate — Mechatronics, Reliability & Industrial Systems</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">I connect equipment behaviour, mechanical design, maintenance evidence and control logic to make industrial decisions more traceable and practical.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-800">Explore projects</Link>
            <Link href="/experience" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">View experience</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Open CV</a>
          </div>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-5 border-t border-white/15 pt-7 sm:grid-cols-4">
            {[["Apr 2027", "Expected graduation"], ["6", "Industrial placements"], ["3 years", "Industrial experience"], ["EN / FR", "Fluent"]].map(([value, label]) => <div key={label}><dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt><dd className="mt-1 text-xl font-black text-white">{value}</dd></div>)}
          </dl>
        </div>
        <div className="mx-auto w-full max-w-xs">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-slate-800 shadow-2xl">
            <Image src="/logos/moi.png" alt="Portrait of Amine Rhammi" fill priority sizes="(max-width: 1024px) 288px, 320px" className="object-cover [image-rendering:auto]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-20">
              <p className="text-sm font-bold">Amine Rhammi</p>
              <p className="mt-1 text-xs text-slate-300">Based in Canada · Open to Canada & the UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
