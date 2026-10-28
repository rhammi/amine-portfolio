import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { disciplineLabels, projects, type DisciplineSlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Evidence-led engineering case studies showing drawings and models, process choices, prototyping, testing and verification.",
  alternates: { canonical: "/projects" },
};

const groups: { slug: DisciplineSlug; description: string }[] = [
  { slug: "reliability", description: "Maintenance evidence, life data, condition information and equipment strategy." },
  { slug: "mechanical", description: "Design, calculations, field verification, plant interfaces and controlled delivery." },
  { slug: "mechatronics", description: "PLC sequencing, embedded control, instrumentation and multidisciplinary integration." },
];

const engineeringLoop = [
  { number: "01", title: "Define", detail: "Requirements, interfaces and constraints" },
  { number: "02", title: "Draw & model", detail: "Geometry, load paths and system behaviour" },
  { number: "03", title: "Choose", detail: "Materials, hardware and practical processes" },
  { number: "04", title: "Build", detail: "Prototype, integrate and make observable" },
  { number: "05", title: "Test & iterate", detail: "Compare evidence with expected behaviour" },
];

const thinkingPillars = [
  {
    number: "01",
    title: "Technical drawings & models",
    description: "Use CAD, P&IDs, system architecture and simulation to make interfaces, assumptions and load paths inspectable.",
    proof: [
      "Translate field or functional constraints into controlled geometry.",
      "Pair a drawing or model with the calculation and interface context behind it.",
    ],
    projects: [
      { href: "/projects/mechanical-modifications-field-verification", label: "Field-to-CAD modifications" },
      { href: "/projects/terminal-brownfield-modifications", label: "Brownfield P&ID logic" },
      { href: "/projects/stress-analysis-hand-fea", label: "Hand calculations vs FEA" },
    ],
  },
  {
    number: "02",
    title: "Material & process choices",
    description: "Explain why the geometry, joining, routing or fabrication approach fits the load, environment, access and maintenance constraints.",
    proof: [
      "Consider stiffness, access, fabrication and installation together.",
      "State material or joining choices only when the authored evidence supports them.",
    ],
    projects: [
      { href: "/projects/mechanical-modifications-field-verification", label: "Guards, fixtures & weld checks" },
      { href: "/projects/terminal-brownfield-modifications", label: "Routing, isolation & commissioning" },
    ],
  },
  {
    number: "03",
    title: "Prototyping & integration",
    description: "Move from subsystem logic to physical hardware, with enough instrumentation and visibility to separate mechanical, electrical and control faults.",
    proof: [
      "Integrate sensing, actuation, power and communication in stages.",
      "Use the prototype to expose interface problems before claiming performance.",
    ],
    projects: [
      { href: "/projects/tracked-vehicle-dual-mcu-control", label: "Dual-MCU tracked vehicle" },
      { href: "/projects/wire-winder-digital-twin", label: "Wire-winder prototype" },
      { href: "/projects/robotino-autonomous-route-following", label: "Robotino route system" },
    ],
  },
  {
    number: "04",
    title: "Testing & iteration",
    description: "Define what would count as evidence, compare expected and measured behaviour, then keep limitations visible when the test is qualitative.",
    proof: [
      "Use calculations, encoder data, state feedback or physical demonstrations.",
      "Separate proof of operation from calibrated accuracy or validated performance.",
    ],
    projects: [
      { href: "/projects/tracked-vehicle-dual-mcu-control", label: "Encoder calibration test" },
      { href: "/projects/stress-analysis-hand-fea", label: "Analytical/FEA comparison" },
      { href: "/projects/modular-production-cell-automation", label: "PLC station validation" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Project portfolio</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Engineering thinking, made visible.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">These case studies show the work between a problem statement and a result: technical drawings and models, practical design choices, physical prototypes, testing and iteration. Ownership and evidence limits remain explicit.</p>
          <nav aria-label="Project disciplines" className="mt-8 flex flex-wrap gap-2">
            <a href="#engineering-thinking" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700">How I think</a>
            {groups.map((group) => <a key={group.slug} href={`#${group.slug}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 hover:border-orange-500 hover:text-orange-700">{disciplineLabels[group.slug]}</a>)}
          </nav>
        </div>
      </header>

      <section id="engineering-thinking" aria-labelledby="engineering-thinking-title" className="scroll-mt-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">Design-to-evidence loop</p>
              <h2 id="engineering-thinking-title" className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">How I work through an engineering problem.</h2>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">A finished object is only the last frame. The useful evidence is the reasoning chain: what constrained the problem, how the concept was represented, why the implementation was practical, and what the test changed.</p>
          </div>

          <ol aria-label="Engineering design and verification loop" className="mt-10 grid overflow-hidden rounded-3xl border border-white/15 bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
            {engineeringLoop.map((step, index) => (
              <li key={step.title} className={`relative p-5 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0 lg:border-l" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""} ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <p className="font-mono text-xs font-bold text-orange-400">{step.number}</p>
                <h3 className="mt-2 text-lg font-black">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {thinkingPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl border border-white/15 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
                <p className="font-mono text-xs font-bold text-orange-700">{pillar.number}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{pillar.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-700">
                  {pillar.proof.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" /><span>{item}</span></li>)}
                </ul>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">Inspect the evidence</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pillar.projects.map((project) => <Link key={project.href} href={project.href} className="rounded-full border border-slate-300 px-3 py-2 text-xs font-extrabold text-slate-800 transition hover:border-orange-600 hover:text-orange-700">{project.label} →</Link>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl border-l-2 border-orange-400 pl-4 text-sm leading-relaxed text-slate-400"><strong className="text-white">Evidence boundary:</strong> confidential employer drawings are replaced by labelled public-safe reconstructions. Academic team work is attributed at team level, and a physical demonstration is not described as a calibrated performance test unless the source evidence supports that claim.</p>
        </div>
      </section>

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
