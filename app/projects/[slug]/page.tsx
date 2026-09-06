import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { disciplineLabels, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary, alternates: { canonical: `/projects/${project.slug}` } };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <Link href="/projects" className="text-sm font-bold text-slate-300 hover:text-white">← All projects</Link>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-extrabold uppercase tracking-wide text-orange-400">
              <span>{project.source}</span><span aria-hidden="true">·</span><span>{project.organisation}</span><span aria-hidden="true">·</span><span>{project.period}</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className={project.status === "In progress" ? "rounded-full bg-orange-700 px-3 py-1 text-sm font-bold text-white" : "rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-bold text-emerald-200"}>{project.status}</span>
              {project.disciplines.map((discipline) => <Link key={discipline} href={`/disciplines/${discipline}`} className="rounded-full border border-white/20 px-3 py-1 text-sm font-semibold text-slate-200 hover:bg-white/10">{disciplineLabels[discipline]}</Link>)}
            </div>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white">
            <div className="relative aspect-[16/9]"><Image src={project.visual} alt={project.visualAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div>
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-relaxed text-slate-600">{project.visualCaption}</figcaption>
          </figure>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_18rem]">
        <article className="min-w-0 space-y-12">
          <CaseSection number="01" title="Context & problem">
            <p>{project.context}</p>
            <p className="mt-4 font-semibold text-slate-900">{project.challenge}</p>
          </CaseSection>

          <CaseSection number="02" title="My role & ownership">
            <p>{project.ownership}</p>
          </CaseSection>

          <CaseSection number="03" title="Constraints">
            <BulletList items={project.constraints} />
          </CaseSection>

          <CaseSection number="04" title="Method">
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.method.map((item, index) => <li key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="font-mono text-xs font-bold text-orange-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 text-sm leading-relaxed text-slate-700">{item}</p></li>)}
            </ol>
          </CaseSection>

          <CaseSection number="05" title="Engineering judgement">
            <blockquote className="border-l-4 border-orange-500 bg-orange-50 px-5 py-4 text-lg font-semibold leading-relaxed text-slate-900">{project.judgement}</blockquote>
          </CaseSection>

          <CaseSection number="06" title="Verification">
            <BulletList items={project.verification} />
          </CaseSection>

          <CaseSection number="07" title="Outcome & limits">
            <BulletList items={project.outcome} />
            <p className="mt-6 rounded-2xl bg-slate-100 p-5 text-sm leading-relaxed text-slate-700"><strong className="text-slate-950">Learning:</strong> {project.learning}</p>
          </CaseSection>

          {project.confidentiality ? <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-950"><strong>Evidence boundary:</strong> {project.confidentiality}</aside> : null}
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Tools & methods</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => <li key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">{skill}</li>)}
            </ul>
            <Link href="/projects" className="mt-7 inline-flex text-sm font-extrabold text-slate-950 hover:text-orange-700">Browse all projects <span className="ml-1" aria-hidden="true">→</span></Link>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}

function CaseSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="border-t border-slate-300 pt-6"><p className="font-mono text-xs font-bold text-orange-700">{number}</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{title}</h2><div className="mt-5 leading-relaxed text-slate-700">{children}</div></section>;
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-700" /><span>{item}</span></li>)}</ul>;
}
