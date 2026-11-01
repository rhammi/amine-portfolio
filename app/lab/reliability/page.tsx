import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReliabilityWorkbench from "@/components/lab/ReliabilityWorkbench";
import type { Metadata } from "next";
export const metadata:Metadata = {
  title:"Reliability Evidence Lab | Synthetic Weibull & Maintenance Economics",
  description:"Interactive reliability engineering demonstration: right-censored synthetic component histories, fitted Weibull parameters, age-replacement economics and visible assumptions.",
  alternates:{canonical:"/lab/reliability"}
};
export default function ReliabilityEvidenceLab() {
  return <main id="main-content" className="min-h-screen">
    <Navbar/>
    <header className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Link href="/for/reliability" className="text-sm font-bold text-slate-300 hover:text-white">← Reliability engineering portfolio</Link>
        <p className="mt-10 text-xs font-black uppercase tracking-widest text-orange-400">Reliability Evidence Lab · Interactive engineering demonstration</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">Can the failure data justify replacing this component early?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">A fictional component fleet, an auditable right-censored Weibull fit and an age-replacement cost model. Change the assumptions, inspect the observations and decide what you would challenge before recommending a maintenance interval.</p>
        <div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full border border-orange-400/50 bg-orange-400/10 px-3 py-2 text-xs font-bold text-orange-200">100% synthetic data</span><span className="rounded-full border border-white/25 px-3 py-2 text-xs font-bold text-slate-200">No employer records</span><span className="rounded-full border border-white/25 px-3 py-2 text-xs font-bold text-slate-200">Reproducible assumptions</span></div>
      </div>
    </header>
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <ReliabilityWorkbench/>
      <div className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-black">See the industrial experience behind the method</h2>
        <p className="mt-3 max-w-4xl leading-relaxed text-slate-700">This synthetic example draws on methods I have applied during reliability engineering placements, without reproducing workplace data, actual maintenance strategies or confidential results. The related cases below describe my responsibilities and their evidence boundaries.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects/component-life-economics" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900">Component life economics →</Link>
          <Link href="/projects/dozer-fleet-rcm" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900">Fleet RCM analysis →</Link>
          <Link href="/about#contact" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white">Discuss the model →</Link>
        </div>
      </div>
    </section>
    <Footer/>
  </main>;
}
