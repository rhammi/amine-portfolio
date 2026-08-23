import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import HeroHeader from "@/components/ui/HeroHeader";
import CompanyLogoStrip from "@/components/ui/CompanyLogoStrip";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";

const featured = [
  {
    title: "Heavy Equipment Reliability Analytics",
    body: "SAP maintenance history, event classification, life-data analysis, and repeatable reliability workflows for mining equipment.",
    href: "/projects/heavy-equipment-reliability",
  },
  {
    title: "Weibull & Life-Data Analysis",
    body: "Failed-versus-suspended event review, maximum-likelihood fitting, and survival metrics used to support component reliability decisions.",
    href: "/projects/weibull-life-data",
  },
  {
    title: "789F Structural Inspection Reference",
    body: "Field-informed inspection-reference development by comparing chassis layouts, validating component names, and standardizing inspection points.",
    href: "/projects/789f-inspection-guide",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroHeader />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Engineering profile</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Reliability engineering from field context to decision-ready data.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
                I work at the intersection of mechanical reliability, maintenance systems, and engineering analytics. My experience spans mining, refining, metallurgy, pulp and paper, and manufacturing, with a focus on understanding how equipment fails, improving maintenance information, and building practical tools that help engineers make better decisions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Reliability", "Weibull • RCFA • FMECA • PM/CBM • failure modes"],
                ["Maintenance data", "SAP PM • work orders • equipment history • master data"],
                ["Mechanical", "Heavy equipment • pumps • hydraulics • structural inspection"],
                ["Analytics", "Excel • Power Query • Python • Databricks • Power BI • JMP"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CompanyLogoStrip />

        <section className="py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Featured work</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Reliability case studies</h2>
            </div>
            <Link href="/projects" className="text-sm font-bold text-slate-800 underline underline-offset-4">View all case studies →</Link>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {featured.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Case study</p>
                <h3 className="mt-3 text-xl font-bold text-slate-950 group-hover:underline group-hover:underline-offset-4">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
                <p className="mt-5 text-sm font-bold text-slate-800">Explore →</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-10">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Experience</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Industrial engineering experience</h2>
          </div>
          <ExperienceTimeline />
        </section>

        <section className="my-10 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">2027 opportunities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Mechanical, reliability, maintenance & asset-performance roles.</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/75">
                Based in Canada and preparing for a long-term engineering career in the United Kingdom. Interested in graduate and early-career roles where mechanical fundamentals, reliability methods, maintenance data, and field problem solving come together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950">Contact me</Link>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Download CV</a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-slate-200 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amine Rhammi</p>
          <div className="flex flex-wrap gap-4">
            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/amine-rhammi-392376b9/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="underline underline-offset-4" href="mailto:aminecana@hotmail.com">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
