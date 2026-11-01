import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { recruiterPaths } from "@/data/recruiter-paths";

export const metadata: Metadata = {
  title:"For Engineering Recruiters",
  description:"Three focused paths through Amine Rhammi's verified reliability, mechanical and mechatronics engineering evidence.",
  alternates:{canonical:"/for"}
};

export default function ForEmployersPage() {
  return <main id="main-content" className="min-h-screen">
    <Navbar/>
    <header className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">For engineering recruiters & hiring managers</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">Different roles. Different evidence.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Rather than asking you to read every placement and project, I have selected the work most relevant to the kind of engineer you need. Every route connects to documented case studies, with individual contributions and work in progress labelled.</p>
        <p className="mt-5 text-sm font-semibold text-slate-200">Mechanical Engineering (Mechatronics) BEng candidate · Expected April 2027 · Six industrial student placements</p>
      </div>
    </header>
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        {recruiterPaths.map((path,i)=><Link key={path.slug} href={'/for/'+path.slug} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl">
          <p className="font-mono text-xs font-bold text-orange-700">0{i+1} / {path.eyebrow}</p>
          <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950 group-hover:text-orange-700">{path.title}</h2>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{path.proposition}</p>
          <p className="mt-7 border-t border-slate-200 pt-5 text-sm font-extrabold text-slate-950">See the relevant evidence →</p>
        </Link>)}
      </div>
      <div className="mt-12 rounded-3xl bg-slate-100 p-7 sm:p-10">
        <h2 className="text-2xl font-black text-slate-950">What is common to all three?</h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">My industrial placements taught me to respect field constraints, maintenance teams and the limits of available evidence. My university work adds the control, sensing and modelling side. I am seeking graduate or early-career work from 2027 and can discuss location, start date and current work-authorisation arrangements directly.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="mailto:aminecana@hotmail.com?subject=Engineering%20opportunities" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Email Amine</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950">View CV</a>
        </div>
      </div>
    </section>
    <Footer/>
  </main>
}
