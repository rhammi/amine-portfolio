import Link from "next/link";
import Image from "next/image";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {experience.map((item) => (
        <article key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <Link
                href={`/experience/${item.slug}`}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 transition hover:shadow-sm sm:h-24 sm:w-24"
                aria-label={`Open details for ${item.company}`}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={180}
                    height={180}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-xs font-bold leading-tight text-slate-800 sm:text-sm">
                    {item.company}
                  </span>
                )}
              </Link>

              <div>
                <p className="text-sm font-medium text-slate-500">{item.company}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                <Link href={`/experience/${item.slug}`} className="mt-2 inline-block text-sm font-semibold text-slate-800 underline underline-offset-4">
                  View role →
                </Link>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">{item.dates}</p>
          </div>

          <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {item.highlights.slice(0, 4).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
