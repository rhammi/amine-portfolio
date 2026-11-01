import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "View or download Amine Rhammi's current mechanical engineering curriculum vitae.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-700">Curriculum vitae</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Amine Rhammi — CV</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">Mechanical engineering graduate candidate with six industrial placements across reliability, maintenance, mechanical design and asset-intensive operations.</p>
        <div className="mt-8">
          <a href="/resume.pdf" download target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Download CV (PDF)</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
