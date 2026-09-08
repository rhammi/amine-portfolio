import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { disciplineLabels, projects, type DisciplineSlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Evidence-led professional and academic case studies across reliability, mechanical engineering and mechatronics.",
  alternates: { canonical: "/projects" },
};

const groups: { slug: DisciplineSlug; description: string }[] = [
  { slug: "reliability", description: "Maintenance evidence, life data, condition information and equipment strategy." },
  { slug: "mechanical", description: "Design, calculations, field verification, plant interfaces and controlled delivery." },
  { slug: "mechatronics", description: "PLC sequencing, embedded control, instrumentation and multidisciplinary integration." },
];

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Project portfolio</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Evidence, method and judgement—not a gallery of claims.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">Each case study identifies context, ownership, constraints, method, verification and the limit of what can be stated publicly. Academic team work and in-progress work are labelled explicitly.</p>
          <nav aria-label="Project disciplines" className="mt-8 flex flex-wrap gap-2">
            {groups.map((group) => <a key={group.slug} href={`#${group.slug}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 hover:border-orange-500 hover:text-orange-700">{disciplineLabels[group.slug]}</a>)}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-8 sm:py-24">
        {groups.map((group) => {
          const items = projects.filter((project) => project.disciplines.includes(group.slug));
          return (
            <section id={group.slug} key={group.slug} className="scroll-mt-28">
              <div className="grid gap-5 border-t border-slate-300 pt-7 md:grid-cols-[.65fr_1.35fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Discipline</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{disciplineLabels[group.slug]}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{group.description}</p>
                  <Link href={`/disciplines/${group.slug}`} className="mt-5 inline-flex text-sm font-extrabold text-slate-950 hover:text-orange-700">View skills-to-evidence map <span className="ml-1" aria-hidden="true">→</span></Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((project) => <ProjectCard key={`${group.slug}-${project.slug}`} project={project} />)}
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
