import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import { experience } from "@/data/experience";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  return {
    title: item ? `${item.company} – ${item.title} | Amine Rhammi` : "Engineering Experience | Amine Rhammi",
    description: item?.summary ?? "Mechanical and reliability engineering experience",
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {item.heroImage ? (
          <Image src={item.heroImage} alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold text-white/65">{item.location}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{item.company}</h1>
          <p className="mt-3 text-xl font-semibold text-white/90">{item.title}</p>
          <p className="mt-2 text-sm text-white/65">{item.dates}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/#experience" className="text-sm font-bold text-slate-700 underline underline-offset-4">← Experience</Link>
          <a href={item.companyUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-700 underline underline-offset-4">Company website →</a>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-5">
            <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2">
              {item.logo ? (
                <Image src={item.logo} alt={`${item.company} logo`} width={120} height={80} className="h-full w-full object-contain" />
              ) : (
                <span className="text-center text-xs font-bold leading-tight text-slate-800">{item.company}</span>
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Overview</p>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">{item.summary}</p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6">
          <InfoSection title="Selected highlights" items={item.highlights} />
          <InfoSection title="What I did" items={item.whatIDid} />
          <InfoSection title="Engineering outcomes" items={item.outcomes} />
          <InfoSection title="Core skills demonstrated" items={item.topSkills} />

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-950">Tools & methods</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tools.map((tool) => <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">{tool}</span>)}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function InfoSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        {items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /><span>{item}</span></li>)}
      </ul>
    </section>
  );
}
