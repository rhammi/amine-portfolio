import Link from "next/link";

import CompanyLogoStrip from "@/components/ui/CompanyLogoStrip";
import Footer from "@/components/ui/Footer";
import HeroHeader from "@/components/ui/HeroHeader";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { disciplines } from "@/data/disciplines";
import { featuredProjects } from "@/data/projects";

const principles = [
  ["Evidence before claims", "Results are tied to a current CV, authored coursework or a clearly labelled in-progress scope."],
  ["Field context matters", "CAD, analysis and data are checked against equipment interfaces, maintenance reality and operating constraints."],
  ["Decisions stay traceable", "Methods, assumptions, validation and limits remain visible—not just the final recommendation."],
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <HeroHeader />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <CompanyLogoStrip />

        <section className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Three connected engineering pillars</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">From physical assets to control logic.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">My strongest work sits where disciplines meet: a mechanical system has to be understood, its evidence has to be trustworthy and its behaviour has to be controlled or maintained deliberately.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {disciplines.map((discipline, index) => (
              <Link key={discipline.slug} href={`/disciplines/${discipline.slug}`} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <span aria-hidden="true" className="absolute right-5 top-3 text-7xl font-black text-slate-100">0{index + 1}</span>
                <p className="relative text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">{discipline.eyebrow}</p>
                <h3 className="relative mt-7 text-2xl font-black tracking-tight text-slate-950 group-hover:text-orange-700">{discipline.title}</h3>
                <p className="relative mt-4 text-sm leading-relaxed text-slate-700">{discipline.proposition}</p>
                <ul className="relative mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-600">
                  {discipline.methods.slice(0, 3).map((method) => <li key={method} className="flex gap-2"><span className="text-orange-500" aria-hidden="true">/</span>{method}</li>)}
                </ul>
                <p className="relative mt-6 text-sm font-extrabold text-slate-950">Explore evidence <span aria-hidden="true">→</span></p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Selected evidence</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">Case studies across the full profile.</h2>
            </div>
            <Link href="/projects" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:border-slate-950">View all projects</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="grid gap-10 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-14">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">How I work</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em]">Engineering judgement made visible.</h2>
              <p className="mt-5 leading-relaxed text-slate-300">The portfolio separates contribution from team context, potential value from realised value, and public explanation from confidential evidence.</p>
            </div>
            <div className="grid gap-4">
              {principles.map(([title, body], index) => (
                <div key={title} className="grid gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:grid-cols-[2.5rem_1fr]">
                  <span className="font-mono text-sm font-bold text-orange-400">0{index + 1}</span>
                  <div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="grid gap-8 border-t border-slate-200 pt-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">April 2027 graduate candidate</p>
              <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Open to early-career mechanical, reliability, asset-integrity and mechatronics roles.</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">Based in Canada and interested in work where equipment fundamentals, operational evidence and practical delivery come together. Relocation and work-authorisation details are available on request.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/about#contact" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Start a conversation</Link>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:border-slate-950">View CV</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
