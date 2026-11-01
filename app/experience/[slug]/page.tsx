import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { experience } from "@/data/experience";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) return { title: "Experience not found" };
  return { title: `${item.company} Engineering Experience`, description: item.summary, alternates: { canonical: `/experience/${item.slug}` } };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="relative overflow-hidden bg-slate-950 text-white">
        {item.heroImage ? <Image src={item.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-20" /> : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/55" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Link href="/experience" className="text-sm font-bold text-slate-300 hover:text-white">← All experience</Link>
          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">{item.sector}</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">{item.company}</h1>
          <p className="mt-5 max-w-4xl text-xl font-bold text-white">{item.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300"><span>{item.dates}</span><span>{item.location}</span></div>
          {item.imageCaption ? <p className="mt-8 text-xs text-slate-400">Background: {item.imageCaption}</p> : null}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid gap-8 border-b border-slate-300 pb-12 lg:grid-cols-[.55fr_1.45fr]">
          <div className="flex h-24 w-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            {item.logo ? <Image src={item.logo} alt={`${item.company} logo`} width={140} height={90} className="h-full w-full object-contain" /> : <span className="text-center text-sm font-black text-slate-900">{item.company}</span>}
          </div>
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Role overview</p><p className="mt-4 text-xl leading-relaxed text-slate-700">{item.summary}</p></div>
        </section>

        <section className="grid gap-8 border-b border-slate-300 py-12 lg:grid-cols-[.55fr_1.45fr]">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Selected evidence</h2>
          <ul className="grid gap-4">
            {item.highlights.map((highlight, index) => <li key={highlight} className="grid grid-cols-[2.5rem_1fr] rounded-2xl border border-slate-200 bg-white p-5"><span className="font-mono text-xs font-bold text-orange-700">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-relaxed text-slate-700">{highlight}</p></li>)}
          </ul>
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[.55fr_1.45fr]">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Methods & connections</h2>
          <div>
            <ul className="flex flex-wrap gap-2">{item.methods.map((method) => <li key={method} className="rounded-full bg-slate-200/70 px-3 py-1.5 text-sm font-semibold text-slate-700">{method}</li>)}</ul>
            {item.linkedProjects.length ? <div className="mt-8"><h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Related case studies</h3><div className="mt-3 flex flex-wrap gap-3">{item.linkedProjects.map((project) => <Link key={project.href} href={project.href} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-extrabold text-slate-950 hover:border-orange-500 hover:text-orange-700">{project.label} →</Link>)}</div></div> : null}
            <a href={item.companyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex text-sm font-bold text-slate-600 hover:text-orange-700">Company website ↗</a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
