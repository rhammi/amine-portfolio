import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { disciplines, getDiscipline } from "@/data/disciplines";
import { projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return disciplines.map((discipline) => ({ slug: discipline.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const discipline = getDiscipline(slug);
  if (!discipline) return { title: "Discipline not found" };
  return { title: discipline.title, description: discipline.proposition, alternates: { canonical: `/disciplines/${discipline.slug}` } };
}

export default async function DisciplinePage({ params }: PageProps) {
  const { slug } = await params;
  const discipline = getDiscipline(slug);
  if (!discipline) notFound();
  const related = projects.filter((project) => project.disciplines.includes(discipline.slug));

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">{discipline.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.04em] sm:text-7xl">{discipline.title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-300">{discipline.proposition}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Working toolkit</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Methods I can apply</h2></div>
          <ul className="grid gap-3 sm:grid-cols-2">{discipline.methods.map((method) => <li key={method} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-bold text-slate-800 shadow-sm"><span className="mr-2 text-orange-500">/</span>{method}</li>)}</ul>
        </section>

        <section className="mt-20 border-t border-slate-300 pt-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Skills-to-evidence map</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">What supports the capability</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-[.55fr_1.45fr] bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-wide text-slate-300 sm:grid"><span>Capability</span><span>Portfolio evidence</span></div>
            {discipline.evidence.map((item) => <Link key={item.capability} href={item.href} className="grid gap-2 border-t border-slate-200 px-6 py-5 first:border-0 hover:bg-orange-50 sm:grid-cols-[.55fr_1.45fr]"><span className="font-extrabold text-slate-950">{item.capability}</span><span className="text-sm text-slate-700">{item.proof} <span className="font-bold text-orange-700" aria-hidden="true">→</span></span></Link>)}
          </div>
        </section>

        <section className="mt-20 border-t border-slate-300 pt-8">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Related projects</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Evidence in context</h2></div><Link href="/projects" className="text-sm font-extrabold text-slate-950 hover:text-orange-700">All projects →</Link></div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
