import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import HeroHeader from "@/components/ui/HeroHeader";
import CompanyLogoStrip from "@/components/ui/CompanyLogoStrip";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* TOP HERO */}
      <HeroHeader />

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-white/75 p-10 backdrop-blur-md ring-1 ring-black/10 sm:p-12">
          {/* SUMMARY */}
          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Summary
              </h2>
              <p className="text-lg text-slate-700">
                Reliability &amp; maintenance-focused mechanical engineering student
                (Mechatronics) with multi-term industrial experience across refining,
                metallurgy, and pulp &amp; paper. I specialize in converting messy
                maintenance/asset data into structured registers and dashboards that
                improve planning quality, PM/CBM execution, and decision-making.
                Safety-first, field-ready, bilingual (EN/FR).
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
              >
                Resume
              </a>
              <Link
                href="/academics"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
              >
                Academics
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
              >
                Contact
              </Link>
            </div>
          </section>

          <div className="my-14 border-t border-black/10" />

          {/* EXPERIENCE LOGOS */}
          <CompanyLogoStrip />

          <div className="my-14 border-t border-black/10" />

          {/* EXPERIENCE TIMELINE */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Experience
            </h2>
            <ExperienceTimeline />
          </section>

          <div className="my-14 border-t border-black/10" />

          {/* TECHNICAL PROFILE */}
          <section className="space-y-4 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Technical profile
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600">Technical skills</p>
                <ul className="space-y-1 text-sm text-slate-800">
                  <li>CMMS, asset management, SAP PM, Spartakus CMMS &amp; lubrication.</li>
                  <li>FMECA / RCM, CBM dashboards, data analytics.</li>
                  <li>AutoCAD / SolidWorks for mechanical design.</li>
                  <li>PLC programming and robotics.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600">Equipment &amp; environments</p>
                <ul className="space-y-1 text-sm text-slate-800">
                  <li>Valves, actuators, pumps, conveyors, HVAC systems.</li>
                  <li>Processing plants and industrial production environments.</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600">Certifications</p>
                <ul className="space-y-1 text-sm text-slate-800">
                  <li>IOSH Managing Safely.</li>
                  <li>Confined-space training.</li>
                  <li>Lock-out / tag-out safety.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600">Licensure</p>
                <p className="text-sm text-slate-800">
                  Progressing toward professional licensure (EIT / P.Eng) and IMechE membership.
                </p>
              </div>
            </div>
          </section>

          <div className="my-14 border-t border-black/10" />

          {/* FOOTER */}
          <footer className="flex flex-col gap-2 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Amine Rhammi</p>
            <div className="flex flex-wrap gap-4">
              <a
                className="underline underline-offset-4 hover:text-slate-700"
                href="https://www.linkedin.com/in/amine-rhammi-392376b9/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline underline-offset-4 hover:text-slate-700"
                href="mailto:aminecana@hotmail.com"
              >
                aminecana@hotmail.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
