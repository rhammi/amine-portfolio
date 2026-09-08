import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Project } from "@/data/projects";
import { disciplineLabels } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
        <Image src={project.visual} alt={project.visualAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
        {project.video ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-slate-950/85 px-3 py-1.5 text-xs font-extrabold text-white shadow-lg backdrop-blur">
            <Play aria-hidden="true" className="h-3.5 w-3.5 fill-current" /> Video demonstration
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          <span>{project.source}</span><span aria-hidden="true">·</span><span>{project.period}</span>
          {project.status === "In progress" ? <span className="rounded-full bg-orange-100 px-2 py-1 text-orange-800">In progress</span> : null}
        </div>
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950 group-hover:text-orange-700">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold text-slate-500">{project.organisation}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.disciplines.map((discipline) => <span key={discipline} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{disciplineLabels[discipline]}</span>)}
        </div>
        <p className="mt-5 text-sm font-extrabold text-slate-950">Read case study <span aria-hidden="true">→</span></p>
      </div>
    </Link>
  );
}
