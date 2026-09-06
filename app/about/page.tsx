import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "About & Contact",
  description: "About Amine Rhammi, a mechanical engineering graduate candidate focused on reliability, mechanical systems and mechatronics.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[20rem_1fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/20"><Image src="/logos/moi.png" alt="Portrait of Amine Rhammi" fill priority sizes="320px" className="object-cover" /></div>
          <div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">About</p><h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">Curious about how systems fail—and how to make the next decision better.</h1><p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-300">I am a mechanical engineering graduate candidate with a mechatronics concentration and six industrial placements across asset-intensive sectors. I enjoy the point where field observations, mechanical fundamentals, maintenance records and control behaviour become one engineering problem.</p></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <section className="grid gap-8 lg:grid-cols-[.6fr_1.4fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Professional direction</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">An intentionally broad mechanical profile.</h2></div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-700"><p>Reliability is one pillar of my work, not the whole identity. Plant modifications at Valero and Rio Tinto developed my mechanical design and delivery judgement; UQTR automation and embedded work developed my control-system thinking; mobile-equipment work at Imperial strengthened my evidence and asset-strategy practice.</p><p>What connects them is a preference for engineering that can be explained and checked: define the system, identify the constraints, choose a method, verify the assumptions and state what the evidence does—or does not—prove.</p></div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {[["Field-aware", "Experience in mines, terminals, mills, metallurgical plants and manufacturing shaped how I think about access, maintainability and implementation."], ["Evidence-led", "I separate failed from suspended events, potential from realised value, and team contribution from individual ownership."], ["Systems-minded", "Mechanical, electrical, logical and human interfaces are treated as parts of one operating system."]].map(([title, body]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-black text-slate-950">{title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-700">{body}</p></article>)}
        </section>

        <section className="mt-20 grid gap-8 border-t border-slate-300 pt-10 lg:grid-cols-[.6fr_1.4fr]"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Leadership & safety</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Responsibility beyond engineering.</h2></div><div><p className="text-lg leading-relaxed text-slate-700">Aquatic supervision and lifesaving instruction developed calm decision-making, briefing discipline, public communication and responsibility for team readiness—habits that carry directly into field engineering.</p><Link href="/lifesaving" className="mt-5 inline-flex text-sm font-extrabold text-slate-950 hover:text-orange-700">View leadership and safety experience →</Link></div></section>

        <section id="contact" className="mt-20 scroll-mt-28 rounded-[2rem] bg-orange-700 p-7 text-white sm:p-10 lg:p-14"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-100">Contact</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Let’s talk about equipment, systems and early-career engineering work.</h2><p className="mt-5 max-w-3xl leading-relaxed text-orange-50">Expected graduation: April 2027. Based in Canada and open to Canadian and UK opportunities. Relocation and work-authorisation details are available on request.</p></div><div className="flex flex-wrap gap-3"><a href="mailto:aminecana@hotmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-orange-50">Email Amine</a><a href="https://www.linkedin.com/in/amine-rhammi-392376b9/" target="_blank" rel="noreferrer" className="rounded-full border border-white/60 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/10">LinkedIn</a></div></div></section>
      </div>
      <Footer />
    </main>
  );
}
