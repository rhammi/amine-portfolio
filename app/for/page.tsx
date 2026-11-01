import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import RoleEntryPoints from "@/components/ui/RoleEntryPoints";

export const metadata: Metadata = {
  title: "For Engineering Recruiters",
  description: "Three tailored pathways to Amine Rhammi's mechanical, reliability and mechatronics engineering experience and projects.",
  alternates: { canonical: "/for" },
};

export default function ForRecruitersPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-orange-400">Engineering roles from 2027</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">An engineering portfolio, organised around the work your team needs.</h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-200">I am finishing a BEng in Mechanical Engineering with a mechatronics concentration in April 2027. My six fixed-term placements cross mechanical design, reliability and industrial data; use the routes below to see the most relevant proof.</p>
          <p className="mt-5 text-sm text-slate-300">UK relocation planned. Work-authorisation details available on request; no current permission is implied.</p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RoleEntryPoints />
        <div className="mb-20 rounded-3xl bg-slate-100 p-7 sm:p-10">
          <h2 className="text-2xl font-black text-slate-950">Want to discuss a specific engineering problem?</h2>
          <p className="mt-3 max-w-3xl text-slate-700">The case studies separate individual contribution, team context and verification. Professional work is redacted where necessary; the Reliability Evidence Lab uses fictional data to show the calculations openly.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white" href="mailto:aminecana@hotmail.com">Contact Amine</a>
            <Link className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900" href="/projects">All project case studies</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
