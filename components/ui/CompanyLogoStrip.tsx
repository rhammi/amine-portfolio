import Image from "next/image";
import { companiesWorkedWith } from "@/data/companies";

export default function CompanyLogoStrip() {
  return (
    <section className="py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Industrial experience
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {companiesWorkedWith.map((company) => (
          <a
            key={company.slug}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 min-w-36 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            title={`Open ${company.name} website`}
          >
            {company.logo ? (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={140}
                height={64}
                className="h-9 w-auto object-contain sm:h-10"
              />
            ) : (
              <span className="max-w-40 text-center text-sm font-bold leading-tight text-slate-800">
                {company.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
