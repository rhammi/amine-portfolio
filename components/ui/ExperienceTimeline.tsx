import Link from "next/link";
import Image from "next/image";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experience.map((item) => (
        <div
          key={item.slug}
          className="rounded-2xl border bg-white p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Clickable logo -> experience detail page */}
              <Link
                href={`/experience/${item.slug}`}
                className="shrink-0 rounded-xl border bg-white p-2 hover:shadow-sm transition"
                aria-label={`Open details for ${item.company}`}
                title={`Open details for ${item.company}`}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={200}
                    height={200}
                    className="h-24 w-24 object-contain"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-lg bg-gray-100" />
                )}
              </Link>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">{item.company}</p>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.location}</p>

                <Link
                  href={`/experience/${item.slug}`}
                  className="inline-block text-sm font-medium underline underline-offset-4 text-gray-700 hover:text-gray-900 mt-2"
                >
                  Read more →
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-500">{item.dates}</p>
          </div>

          <ul className="mt-4 space-y-2 text-gray-800">
            {item.highlights.map((h, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
