import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { courseGroups, education, verifiedTraining } from "@/data/education";

export const metadata: Metadata = {
  title: "Education & Engineering Foundation",
  description: "Mechanical engineering and mechatronics education, verified coursework, academic evidence and selected technical training.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Education & technical foundation</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Mechanical depth, mechatronics integration.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">The transcript-backed course map below shows how mechanics, controls, instrumentation, computation and engineering decisions connect to the work presented elsewhere in this portfolio.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => <article key={item.credential} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">{item.period}</p><h2 className="mt-4 text-2xl font-black text-slate-950">{item.credential}</h2><p className="mt-2 font-bold text-slate-700">{item.focus}</p><p className="mt-5 text-sm text-slate-600">{item.institution}<br />{item.location}</p></article>)}
        </section>

        <section className="mt-20">
          <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Verified course map</p><h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Coursework grouped by engineering use.</h2><p className="mt-4 leading-relaxed text-slate-700">Course completion is drawn from the supplied unofficial transcript. Grades are intentionally not published, and a course title alone is not treated as project evidence.</p></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {courseGroups.map((group) => <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><h3 className="text-2xl font-black text-slate-950">{group.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{group.description}</p><ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">{group.courses.map(([code, title]) => <li key={code} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm"><span className="font-mono font-bold text-orange-700">{code}</span><span className="text-slate-700">{title}</span></li>)}</ul></article>)}
          </div>
        </section>

        <section className="mt-20 grid gap-8 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">Selected verified training</p><h2 className="mt-3 text-3xl font-black tracking-tight">Industrial learning alongside the degree.</h2><p className="mt-4 text-sm leading-relaxed text-slate-300">These titles were verified in the supplied ExxonMobil / Imperial Oil certificate bundle. A duplicate certificate was counted once.</p></div>
          <ul className="grid gap-3 sm:grid-cols-2">{verifiedTraining.map((training) => <li key={training} className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-sm font-bold text-slate-100">{training}</li>)}</ul>
        </section>

        <section className="mt-20 border-t border-slate-300 pt-10"><h2 className="text-3xl font-black text-slate-950">See the coursework applied.</h2><div className="mt-5 flex flex-wrap gap-3"><Link href="/projects/modular-production-cell-automation" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Automation case study</Link><Link href="/projects/stress-analysis-hand-fea" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:border-slate-950">Stress-analysis case study</Link></div></section>
      </div>
      <Footer />
    </main>
  );
}
