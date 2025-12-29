"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import Navbar from "@/components/ui/Navbar";

import { academicCategories, educationTimeline } from "@/data/academics";

type FilterKey =
  | "all"
  | "reliability"
  | "controls"
  | "fluids"
  | "mechanical"
  | "production"
  | "manufacturing"
  | "modeling";

const FILTER_MAP: Record<FilterKey, string[]> = {
  all: academicCategories.map((c) => c.id),
  reliability: ["reliability"],
  controls: ["automation-controls"],
  fluids: ["thermo-fluids"],
  mechanical: ["mechanical-integrity"],
  production: ["production-systems"],
  manufacturing: ["manufacturing-materials"],
  modeling: ["modeling-data"],
};

export default function AcademicsPage() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredCategories = useMemo(() => {
    const allowed = FILTER_MAP[filter];
    return academicCategories.filter((cat) => allowed.includes(cat.id));
  }, [filter]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/logos/academics-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/35 via-slate-900/25 to-slate-900/40" />
        <div className="relative z-10 mx-auto flex h-[320px] max-w-5xl items-center px-6">
          <div className="w-full text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/85">
              Academics
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Mechanical Engineering Foundation
            </h1>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-white/85">
              Coursework grouped by competence pillars for asset-intensive industries (refining, mining, pulp &amp; paper). Each pillar highlights why it matters for reliability, maintainability, and automation.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
          >
            &larr; Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <FilterButton label="Show all" active={filter === "all"} onClick={() => setFilter("all")} />
            <FilterButton label="Show reliability-only" active={filter === "reliability"} onClick={() => setFilter("reliability")} />
            <FilterButton label="Show controls" active={filter === "controls"} onClick={() => setFilter("controls")} />
            <FilterButton label="Show fluids" active={filter === "fluids"} onClick={() => setFilter("fluids")} />
            <FilterButton label="Show mechanical integrity" active={filter === "mechanical"} onClick={() => setFilter("mechanical")} />
            <FilterButton label="Show production systems" active={filter === "production"} onClick={() => setFilter("production")} />
            <FilterButton label="Show manufacturing/materials" active={filter === "manufacturing"} onClick={() => setFilter("manufacturing")} />
            <FilterButton label="Show modeling/data" active={filter === "modeling"} onClick={() => setFilter("modeling")} />
          </div>
        </div>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Education timeline</h2>
          <ol className="mt-4 space-y-4 border-l-2 border-slate-200 pl-4">
            {educationTimeline.map((edu) => (
              <li key={edu.title} className="relative pl-4">
                <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-slate-900" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-base font-semibold text-slate-900">{edu.title}</p>
                    <p className="text-sm text-slate-700">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{edu.period}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 space-y-6">
          {filteredCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-3xl border bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Pillar
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
                  <p className="max-w-3xl text-sm text-slate-700">{category.blurb}</p>
                  {category.evidence ? (
                    <p className="text-sm font-medium text-slate-800">
                      Evidence: <span className="font-normal text-slate-700">{category.evidence}</span>
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {category.courses.map((course) => (
                  <div
                    key={course.code}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{course.code}</p>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Course
                      </p>
                    </div>
                    <p className="mt-1 text-base font-semibold text-slate-900">{course.title}</p>
                    <p className="mt-2 text-sm text-slate-700">{course.summary}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Reliability relevance
                    </p>
                    <p className="text-sm text-slate-700">{course.relevance}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full border border-slate-300 bg-slate-900 text-white px-3 py-1 text-sm font-semibold shadow-sm"
          : "rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
      }
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
