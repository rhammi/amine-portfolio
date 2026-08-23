import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/ui/Navbar";
import { projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} | Amine Rhammi` : "Engineering Case Study | Amine Rhammi",
    description: project?.summary ?? "Engineering case study by Amine Rhammi",
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">{project.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.skills.map((skill) => <span key={skill} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/85">{skill}</span>)}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link href="/projects" className="text-sm font-bold text-slate-700 underline underline-offset-4">← All case studies</Link>

        <div className="mt-8 grid gap-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">01 — Engineering problem</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Challenge</h2>
            <p className="mt-4 leading-relaxed text-slate-700">{project.challenge}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">02 — Method</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Approach</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {project.approach.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /><span>{item}</span></li>)}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">03 — Engineering value</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Outcome</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {project.outcome.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /><span>{item}</span></li>)}
            </ul>
          </section>

          {project.confidentiality ? (
            <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-950">
              <span className="font-bold">Confidentiality note:</span> {project.confidentiality}
            </aside>
          ) : null}
        </div>
      </div>
    </main>
  );
}
