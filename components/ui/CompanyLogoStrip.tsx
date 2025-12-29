import Image from "next/image";
import { companiesWorkedWith } from "@/data/companies";

export default function CompanyLogoStrip() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-semibold tracking-tight">
        EXPERIENCE
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
        {companiesWorkedWith.map((c) => (
          <a
            key={c.slug}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-2 transition hover:bg-gray-50"
            title={`Open ${c.name} website`}
            aria-label={`Open ${c.name} website`}
          >
            <Image
              src={c.logo}
              alt={`${c.name} logo`}
              width={220}
              height={120}
              className="h-20 w-auto object-contain transition group-hover:scale-[1.03]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
