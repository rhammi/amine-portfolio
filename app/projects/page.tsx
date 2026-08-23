import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const sections: { title: ProjectCategory; description: string }[] = [
  {
    title: "Reliability & Asset Performance",
    description: "Industrial reliability work using maintenance history, life-data methods, failure classification, PM/CBM, and decision-support analytics.",
  },
  {
    title: "Mechanical & Field Engineering",
    description: "Field-informed mechanical work involving equipment inspection, maintainability, structural references, safety, and practical design.",
  },
  {
    title: "Automation & Mechatronics",
    description: "Controls, embedded systems, PLCs, robotics, and instrumentation that complement the mechanical reliability foundation.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <video className="absolute inset-0 h-full w-full object-cover opacity-25 motion-reduce:hidden" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/projects/hero-project.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/65" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Engineering case studies</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">Evidence of how I approach engineering problems.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Selected industrial and technical work showing the problem, method, engineering judgement, tools, and outcome — with employer-confidential details deliberately excluded.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link href="/" className="text-sm font-bold text-slate-700 underline underline-offset-4">← Home</Link>
        <div className="mt-8 space-y-10">
          {sections.map((section) => {
            const items = projects.filter((project) => project.category === section.title);
            return (
              <section key={section.title}>
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Portfolio pillar</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{section.title}</h2>
                  <p className="mt-2 leading-relaxed text-slate-700">{section.description}</p>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {items.map((project) => <ProjectCard key={project.slug} project={project} />)}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
