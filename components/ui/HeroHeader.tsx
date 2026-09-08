import Link from "next/link";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div aria-hidden="true" className="absolute -right-36 -top-28 h-[34rem] w-[34rem] rounded-full border-[5rem] border-orange-500/20" />
      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:py-24 xl:grid-cols-[minmax(0,1fr)_26rem]">
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
        <div className="relative mx-auto h-[30rem] w-full max-w-[24rem] sm:h-[32rem] lg:h-[34rem] lg:max-w-none">
          <div aria-hidden="true" className="absolute inset-x-8 bottom-6 top-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04]" />

          <Link href="/experience" aria-label="View Amine Rhammi's industrial engineering experience" className="group absolute right-0 top-0 h-[76%] w-[78%] overflow-hidden rounded-[2rem] border border-white/20 bg-slate-800 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-orange-400/70">
            <Image
              src="/profile/amine-industrial-field.jpg"
              alt="Amine Rhammi wearing protective equipment at an industrial work site"
              fill
              priority
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 300px, 325px"
              className="object-cover object-[center_28%] transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
            <p className="absolute inset-x-0 bottom-0 p-5 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
              Industrial reliability <span aria-hidden="true" className="text-orange-400">↗</span>
            </p>
          </Link>

          <Link href="/lifesaving" aria-label="View Amine Rhammi's lifesaving leadership experience" className="group absolute bottom-0 left-0 h-[57%] w-[59%] overflow-hidden rounded-[1.75rem] border-4 border-slate-950 bg-slate-800 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-orange-500">
            <Image
              src="/profile/amine-lifesaving.png"
              alt="Amine Rhammi carrying lifesaving rescue equipment beside the water"
              fill
              priority
              sizes="(max-width: 640px) 56vw, (max-width: 1024px) 225px, 245px"
              className="object-cover object-[center_42%] transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-4 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white sm:text-xs">
              Safety leadership <span aria-hidden="true" className="text-orange-400">↗</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
