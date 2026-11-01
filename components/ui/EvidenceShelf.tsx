"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VisualCredit from "@/components/ui/VisualCredit";
import type { DisciplineSlug, Project } from "@/data/projects";
export type EvidenceCard = Pick<
  Project,
  | "slug"
  | "title"
  | "organisation"
  | "period"
  | "source"
  | "disciplines"
  | "summary"
  | "visual"
  | "visualAlt"
  | "visualPosition"
  | "visualCredit"
  | "visualCaption"
> & { hasVideo: boolean };
const filters: { value: "all" | DisciplineSlug; label: string }[] = [
  { value: "all", label: "Selected work" },
  { value: "reliability", label: "Reliability" },
  { value: "mechanical", label: "Mechanical" },
  { value: "mechatronics", label: "Mechatronics" },
];
export default function EvidenceShelf({
  projects,
}: {
  projects: EvidenceCard[];
}) {
  const [filter, setFilter] = useState<"all" | DisciplineSlug>("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.disciplines.includes(filter),
  );
  return (
    <>
      <div
        className="my-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter featured projects"
      >
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
            className={`min-h-11 rounded-md border px-4 py-2 text-xs font-bold transition-colors ${filter === item.value ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-transparent text-slate-700 hover:border-orange-700"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} featured projects shown
      </p>
      <div className="grid gap-x-7 gap-y-10 md:grid-cols-2">
        {visible.map((project, index) => (
          <article key={project.slug} className="group min-w-0">
            <Link
              href={`/projects/${project.slug}`}
              className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              aria-label={`Read ${project.title}`}
            >
              <Image
                src={project.visual}
                alt={project.visualAlt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                style={{ objectPosition: project.visualPosition }}
                className={`${project.visual.endsWith(".svg") ? "object-contain p-4" : "object-cover"} transition-transform duration-300 group-hover:scale-[1.025]`}
              />
              <span className="absolute left-3 top-3 rounded bg-[#14243a]/95 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-white">
                {project.hasVideo
                  ? "▶ Physical demonstration"
                  : "Engineering case study"}
              </span>
            </Link>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
              <span className="font-mono">FIG. {String(index + 1).padStart(2, "0")} / </span>
              <VisualCredit project={project} />
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-orange-800">
              {project.organisation} · {project.period}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-orange-800"
              >
                {project.title}{" "}
                <span aria-hidden="true" className="text-orange-700">
                  ↗
                </span>
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {project.summary}
            </p>
          </article>
        ))}
      </div>
      {filter !== "all" ? (
        <Link
          href={`/for/${filter}`}
          className="mt-6 inline-block text-sm font-bold text-orange-800 underline underline-offset-4"
        >
          Explore the full {filter} pathway ↗
        </Link>
      ) : null}
    </>
  );
}
