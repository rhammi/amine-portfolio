import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { entryPoints } from "@/data/recruiter-entry";

export const metadata = {
  title: "For Engineering Hiring Teams",
  description: "Three focused paths through Amine Rhammi's engineering portfolio: reliability, mechanical design and mechatronics."
};
export default function HiringTeams() {
  return <main id="main-content" className="min-h-screen">
    <Navbar/>
    <header className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-extrabold uppercase tracking-[0.19em] text-orange-400">A faster route to the relevant work</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">Which kind of engineer are you looking for?</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">I'm completing a Mechanical Engineering BEng with a mechatronics concentration in April 2027. My six student placements and university projects span reliability, mechanical engineering and controls. Choose the work most relevant to your team.</p>
    </div></header>
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-3">
      {entryPoints.map((entry,i)=><Link key={entry.slug} href={"/for/"+entry.slug} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
        <span className="text-sm font-black tracking-widest text-orange-700">0{i+1}</span>
        <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{entry.title}</h2>
        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">{entry.summary}</p>
        <p className="mt-7 border-t border-slate-200 pt-5 text-sm font-extrabold text-slate-950 group-hover:text-orange-700">See matching evidence →</p>
      </Link>)}
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8"><div className="rounded-3xl bg-slate-100 p-8 sm:p-10"><h2 className="text-2xl font-black text-slate-950">Looking for practical reliability judgement?</h2><p className="mt-3 max-w-3xl text-slate-700">Use the Reliability Evidence Lab to inspect a fully disclosed synthetic failure dataset, explore a censored-data Weibull fit and challenge maintenance economics.</p><Link href="/lab/reliability" className="mt-5 inline-flex rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white">Open the lab →</Link></div></section>
    <Footer/>
  </main>;
}
