import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjectGroup, projects, type ProjectGroup } from "@/data/projects";

const groups: { name: ProjectGroup; description: string }[] = [
  {
    name: "Professional Engineering Projects",
    description:
      "Selected maintenance systems, asset data, mechanical design, and field-focused reliability work from industrial placements.",
  },
  {
    name: "Academic & Mechatronics Projects",
    description:
      "University work in PLC automation, robotics, embedded control, CAD, and mechanical systems.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative h-[340px] overflow-hidden sm:h-[380px]">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/projects/hero-project.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Projects</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Engineering Projects &amp; Prototypes</h1>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              Professional engineering work leads, followed by academic and mechatronics projects.
            </p>
            <Link href="/" className="mt-6 inline-flex rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6">
        {groups.map((group) => {
          const groupProjects = projects.filter((project) => getProjectGroup(project) === group.name);
          const categories = [...new Set(groupProjects.map((project) => project.category))];

          return (
            <section key={group.name} aria-labelledby={group.name.replaceAll(" ", "-").toLowerCase()}>
              <div className="border-b border-slate-300 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio classification</p>
                <h2 id={group.name.replaceAll(" ", "-").toLowerCase()} className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{group.name}</h2>
                <p className="mt-2 max-w-3xl text-slate-700">{group.description}</p>
              </div>

              <div className="mt-7 space-y-8">
                {categories.map((category) => (
                  <section key={category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">{category}</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {groupProjects.filter((project) => project.category === category).map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
