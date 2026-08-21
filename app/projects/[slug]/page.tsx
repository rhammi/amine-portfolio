import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/ui/Navbar";
import { getProjectGroup, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Amine Rhammi` : "Engineering Project | Amine Rhammi",
    description: project?.summary ?? "Engineering project detail",
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">{getProjectGroup(project)}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg text-slate-300">{project.category}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link href="/projects" className="text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-950">Back to all projects</Link>

        <article className="mt-8 grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project overview</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Engineering focus</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{project.summary}</p>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              This concise project record reflects the information currently available in the portfolio. Additional evidence and case-study detail can be added without changing the route.
            </p>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">Skills &amp; tools</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">{skill}</li>
              ))}
            </ul>
          </aside>
        </article>
      </div>
    </main>
  );
}
