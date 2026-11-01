import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { entryPoints, findEntry } from "@/data/recruiter-entry";
import type { Metadata } from "next";

type Props = { params: Promise<{ discipline: string }> };
export function generateStaticParams() { return entryPoints.map(e=>({discipline:e.slug})); }
export async function generateMetadata({params}:Props): Promise<Metadata> {
  const {discipline}=await params;
  const entry=findEntry(discipline);
  return {title: entry?entry.title:"For Hiring Teams",description:entry?.summary,alternates:{canonical:"/for/"+discipline}};
}
export default async function RecruiterEntry({params}:Props) {
  const {discipline}=await params;
  const entry=findEntry(discipline);
  if(!entry) return notFound();
  return <main id="main-content" className="min-h-screen">
    <Navbar/>
    <header className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Link href="/for" className="text-sm font-semibold text-slate-300 hover:text-white">← All hiring-team paths</Link>
        <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.19em] text-orange-400">{entry.eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">{entry.title}</h1>
        <p className="mt-6 max-w-4xl text-xl font-semibold text-slate-200">{entry.hook}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{entry.summary}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#evidence" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Explore evidence ↓</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white">View CV ↗</a>
          <a href="mailto:aminecana@hotmail.com?subject=Engineering%20opportunity" className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white">Contact Amine ↗</a>
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <section className="border-b border-slate-200 pb-12">
        <p className="text-xs font-extrabold uppercase tracking-widest text-orange-700">Relevant graduate and early-career roles</p>
        <div className="mt-5 flex flex-wrap gap-2">{entry.suitable.map(role=><span key={role} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">{role}</span>)}</div>
        <p className="mt-6 max-w-3xl text-sm text-slate-600">Expected BEng completion: April 2027 · Six fixed-term industrial student placements · Fluent English and French · UK relocation planned. Employment authorisation must be established before starting; this page makes no claim that a visa has been granted.</p>
      </section>
      <section id="evidence" className="scroll-mt-24 py-14">
        <p className="text-xs font-extrabold uppercase tracking-widest text-orange-700">Selected and verified work</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight">Not a skills list. Evidence you can inspect.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">{entry.evidence.map(card=><Link key={card.href} href={card.href} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-orange-400 hover:shadow-lg"><span className="text-xs font-extrabold uppercase tracking-widest text-orange-700">{card.label}</span><h3 className="mt-3 text-2xl font-black text-slate-950 group-hover:text-orange-700">{card.title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-700">{card.body}</p><p className="mt-6 text-sm font-extrabold text-slate-950">Read the case →</p></Link>)}</div>
      </section>
      <section className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><p className="text-xs font-extrabold uppercase tracking-widest text-orange-400">How I approach the problem</p><h2 className="mt-4 text-3xl font-black">What I would check first.</h2></div><ol className="space-y-5">{entry.approach.map((line,i)=><li key={line} className="flex gap-4 border-b border-white/15 pb-5 last:border-0"><span className="font-mono font-black text-orange-400">0{i+1}</span><span className="text-slate-200">{line}</span></li>)}</ol></div></section>
      <section className="py-14"><p className="text-lg font-semibold text-slate-900">{entry.next}</p><div className="mt-5 flex flex-wrap gap-3">{entry.slug==="reliability" && <Link href="/lab/reliability" className="rounded-full bg-orange-700 px-6 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Open Reliability Evidence Lab →</Link>}<Link href="/projects" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-extrabold text-slate-900">All engineering projects →</Link><Link href="/about#contact" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-extrabold text-slate-900">Contact →</Link></div></section>
    </div><Footer/>
  </main>;
}
