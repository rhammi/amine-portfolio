import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const sections: { title: string; description: string; category: string }[] = [
  {
    title: "Computerized Maintenance Management System",
    description:
      "Asset registers and data standardization that support spares, torque envelopes, and reliability planning.",
    category: "Computerized Maintenance Management System",
  },
  {
    title: "CAD Modeling",
    description:
      "Guarding and fixture CAD packs, safety-compliant drawings, and fabrication-ready deliverables.",
    category: "CAD Modeling",
  },
  {
    title: "Design",
    description:
      "Maintainability-driven layouts and concept design to improve ergonomics, access, and service time.",
    category: "Design",
  },
  {
    title: "PLC Automation",
    description:
      "PLC logic for conveyors, interlocks, and fault handling to keep automated lines safe and reliable.",
    category: "PLC Automation",
  },
  {
    title: "Robotics",
    description:
      "Robot cell modeling and coordinated motion for flexible manufacturing with safety zoning.",
    category: "Robotics",
  },
  {
    title: "Numerical Circuits",
    description:
      "Embedded control and PWM-based motion for vehicles and electro-mechanical systems.",
    category: "Numerical Circuits",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Projects
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Projects by engineering discipline
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Selected work grouped by discipline: CMMS asset data, CAD, design, PLC automation, robotics, and numerical circuits.
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        <div className="mt-10 space-y-8">
          {sections.map((section) => {
            const items = projects.filter((p) => p.category === section.category);
            return (
              <section
                key={section.title}
                className="rounded-3xl border bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Section
                    </p>
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-700">{section.description}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {items.length ? (
                    items.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
                      Projects coming soon.
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
