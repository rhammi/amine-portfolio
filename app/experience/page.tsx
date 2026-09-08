import type { Metadata } from "next";
import Image from "next/image";

import ExxonMobilTraining from "@/components/ui/ExxonMobilTraining";
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
      <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
        <Image src="/experience/experience-hero-banner.png" alt="" fill priority sizes="100vw" className="object-cover object-[62%_center] sm:object-contain sm:object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-10 lg:py-8">
          <div className="max-w-xl rounded-3xl border border-white/15 bg-slate-950/85 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg">
              <span>Imperial Oil</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#ed1b24]">ExxonMobil</span>
            </p>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">Six industrial placements · Three years</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-[2.65rem] sm:leading-[1.04]">Engineering experience shaped by operating assets.</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">Mining, fuel-terminal, pulp-and-paper, metallurgical and manufacturing environments have taught me to connect analysis with the people, interfaces and constraints that make equipment work.</p>
            <a href="#exxonmobil-training" className="mt-5 inline-flex rounded-full border border-white/25 px-4 py-2.5 text-sm font-extrabold text-white transition hover:border-orange-400 hover:text-orange-300">
              View ExxonMobil training <span className="ml-2" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ExperienceTimeline />
        <ExxonMobilTraining />
      </div>
      <Footer />
    </main>
  );
}
