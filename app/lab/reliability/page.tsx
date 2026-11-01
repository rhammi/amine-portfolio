import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReliabilityLab from "@/components/lab/ReliabilityLab";

export const metadata: Metadata = {
  title: "Reliability Evidence Lab — Maintenance Decision Simulator",
  description: "Interactive, fully synthetic Weibull survival and age-replacement economics demonstration by Amine Rhammi. Transparent assumptions, downloadable sample data and model source.",
  alternates: { canonical: "/lab/reliability" },
};

export default function ReliabilityEvidenceLabPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <Link href="/for/reliability" className="text-sm font-bold text-slate-300 hover:text-white">← Reliability engineering portfolio</Link>
          <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">Engineering demonstration · Synthetic data</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">Reliability Evidence Lab</h1>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-200">If a component fails unpredictably, when—if ever—should we replace it before failure? Explore the life-data assumptions and the economics behind that question.</p>
          <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            <span className="rounded-full border border-white/25 px-3 py-2">Weibull survival</span>
            <span className="rounded-full border border-white/25 px-3 py-2">Maintenance cost</span>
            <span className="rounded-full border border-white/25 px-3 py-2">Reproducible assumptions</span>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-9 grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-black uppercase tracking-[0.17em] text-orange-700">The engineering question</p><h2 className="mt-3 text-3xl font-black text-slate-950">Age or evidence?</h2></div>
          <p className="text-base leading-relaxed text-slate-700">This is a public teaching model motivated by reliability-engineering questions I have worked with during student placements. It is not an extract of company data, a validated production optimisation system or an assertion that a particular maintenance interval has been implemented.</p>
        </div>
        <ReliabilityLab />
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-300 pt-8">
          <Link href="/projects/component-life-economics" className="text-sm font-bold text-slate-900 underline underline-offset-4">Related professional case study →</Link>
          <a href="mailto:aminecana@hotmail.com?subject=Reliability%20Evidence%20Lab" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white hover:bg-orange-800">Challenge an assumption or get in touch</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
