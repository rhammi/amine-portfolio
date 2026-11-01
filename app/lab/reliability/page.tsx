import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReliabilityLab from "@/components/ui/ReliabilityLab";

export const metadata: Metadata = {
  title: "Reliability Evidence Lab | Fictional Maintenance Strategy",
  description: "A transparent educational reliability investigation: right-censored Weibull fitting, replacement age, cost assumptions and expected replacement-cost rate using fictional data.",
  alternates: { canonical: "/lab/reliability" },
};

export default function ReliabilityEvidenceLabPage() {
  return <main id="main-content" className="min-h-screen">
    <Navbar />
    <header className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <Link href="/for/reliability" className="text-sm font-bold text-slate-300 hover:text-white">← Reliability engineering entry point</Link>
        <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">A technical demonstration, not an employer case study</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">Reliability Evidence Lab</h1>
        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-300">When does replacing a component before failure make engineering and economic sense? Inspect fictional failure histories, review a right-censored Weibull model and change the maintenance-cost assumptions yourself.</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400">Developed as a public demonstration of my reliability engineering approach. All histories and costs are synthetic and are not drawn from any employer.</p>
      </div>
    </header>
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20"><ReliabilityLab /></div>
    <Footer />
  </main>;
}
