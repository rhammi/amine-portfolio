import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border p-6 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500">{project.category}</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">
            {project.title}
          </h3>
        </div>
        <span className="text-sm text-gray-400">→</span>
      </div>

      <p className="mt-3 text-gray-700">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.slice(0, 4).map((s) => (
          <span
            key={s}
            className="rounded-full border px-3 py-1 text-xs text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
