import type { Metadata } from "next";

import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Engineering Experience",
  description: "Six industrial placements across mining, oil and gas, pulp and paper, metallurgy and manufacturing.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Six industrial placements · Three years</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">Engineering experience shaped by operating assets.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">Mining, fuel-terminal, pulp-and-paper, metallurgical and manufacturing environments have taught me to connect analysis with the people, interfaces and constraints that make equipment work.</p>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ExperienceTimeline />
      </div>
      <Footer />
    </main>
  );
}
