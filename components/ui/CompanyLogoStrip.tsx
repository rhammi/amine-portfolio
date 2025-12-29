import Image from "next/image";
import { companiesWorkedWith } from "@/data/companies";

export default function CompanyLogoStrip() {
  return (
    <section className="py-10">
      <h2 className="text-center text-sm font-semibold tracking-[0.2em] text-slate-600">
        EXPERIENCE
      </h2>

      <div className="mt-5 flex items-center gap-6 overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch]">
        {companiesWorkedWith.map((c) => (
          <a
            key={c.slug}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 rounded-xl bg-white/70 px-4 py-3 ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-sm"
            title={`Open ${c.name} website`}
            aria-label={`Open ${c.name} website`}
          >
            <Image
              src={c.logo}
              alt={`${c.name} logo`}
              width={140}
              height={70}
              loading="lazy"
              className="h-10 w-auto object-contain transition group-hover:scale-[1.03] sm:h-12"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
