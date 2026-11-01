import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import {
  recruiterPaths,
  recruiterPathBySlug,
  type RecruiterPath,
} from "@/data/recruiter-paths";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return recruiterPaths.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = recruiterPathBySlug[slug as RecruiterPath["slug"]];
  if (!page) return { title: "Engineering evidence" };
  return {
    title: page.eyebrow + " | For Recruiters",
    description: page.proposition,
    alternates: { canonical: "/for/" + slug },
  };
}

export default async function RecruiterRolePage({ params }: Props) {
  const { slug } = await params;
  const path = recruiterPathBySlug[slug as RecruiterPath["slug"]];
  if (!path) notFound();
  const items = path.projectSlugs
    .map((id) => projects.find((x) => x.slug === id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/for"
            className="text-sm font-bold text-slate-300 hover:text-white"
          >
            ← Three engineering pathways
          </Link>
          <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">
            {path.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            {path.title}
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-300">
            {path.proposition}
          </p>
          <p className="mt-8 text-sm font-semibold text-slate-100">
            Amine Rhammi · BEng Mechanical Engineering (Mechatronics) · Expected
            April 2027
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              Engineering judgement
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-950">
              {path.question}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            {path.answer}
          </p>
        </section>
        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {path.strengths.map((s, i) => (
            <article
              key={s.label}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="font-mono text-xs font-bold text-orange-700">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-xl font-black text-slate-950">
                {s.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {s.detail}
              </p>
            </article>
          ))}
        </section>
        <section className="mt-20 border-t border-slate-300 pt-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
            Selected work history
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            What I can speak to in an interview
          </h2>
          <ul className="mt-7 grid gap-4 lg:grid-cols-3">
            {path.evidence.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-slate-100 p-6 text-sm leading-relaxed text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-20 border-t border-slate-300 pt-10">
          <h2 className="text-3xl font-black text-slate-950">
            The evidence behind those claims
          </h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Open any case study for context, role and ownership, constraints,
            methodology, verification and results. Professional details are
            restricted to public-safe descriptions; academic team work is
            explicitly labelled.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
        {slug === "reliability" ? (
          <section className="mt-16 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
              Interactive engineering model
            </p>
            <h2 className="mt-4 text-3xl font-black">
              Reliability Evidence Lab
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
              {path.closing}
            </p>
            <Link
              href="/lab/reliability"
              className="mt-6 inline-flex rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white"
            >
              Challenge the model →
            </Link>
          </section>
        ) : (
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-600">
            {path.closing}
          </p>
        )}
        <section className="mt-16 rounded-3xl bg-orange-700 p-7 text-white sm:p-10">
          <h2 className="text-3xl font-black">
            A useful conversation starts with a real engineering problem.
          </h2>
          <p className="mt-4 max-w-3xl text-orange-50">
            Available for graduate and early-career opportunities following my
            expected April 2027 graduation. I am preparing to relocate to the
            UK; work-authorisation and start-date details can be confirmed
            directly.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950"
              href={
                "mailto:aminecana@hotmail.com?subject=" +
                encodeURIComponent(path.eyebrow + " — engineering opportunity")
              }
            >
              Contact me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white"
            >
              View CV
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
