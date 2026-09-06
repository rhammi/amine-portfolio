import Link from "next/link";
import Image from "next/image";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <ol className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-slate-300 sm:before:left-7">
      {experience.map((item) => (
        <li key={item.slug} className="relative pl-14 sm:pl-20">
          <span aria-hidden="true" className="absolute left-3.5 top-8 h-3 w-3 rounded-full bg-orange-700 ring-4 ring-slate-50 sm:left-[1.375rem]" />
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-start gap-4">
              <Link
                href={`/experience/${item.slug}`}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 transition hover:shadow-sm sm:h-20 sm:w-20"
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
                  <p className="text-sm font-extrabold text-slate-950">{item.company}</p>
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-orange-700">{item.sector}</p>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500">{item.dates}</p>
            </div>

            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-700">{item.summary}</p>
            <Link href={`/experience/${item.slug}`} className="mt-4 inline-flex text-sm font-extrabold text-slate-950 hover:text-orange-700">Role evidence <span className="ml-1" aria-hidden="true">→</span></Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
