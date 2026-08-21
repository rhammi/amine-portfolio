import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import HeroHeader from "@/components/ui/HeroHeader";
import CompanyLogoStrip from "@/components/ui/CompanyLogoStrip";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";

const engineeringImpact = [
  { value: "81", label: "heavy-haul truck frame assemblies assessed" },
  { value: "2,000+", label: "structural inspection records evaluated" },
  { value: "33", label: "component populations analysed using Weibull MLE" },
  { value: "199", label: "mine-fleet assets standardized" },
  { value: "6.17M", label: "maintenance events in the reliability dataset" },
  { value: "228", label: "fleet-system combinations classified by jackknife analysis" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* TOP HERO */}
      <HeroHeader />

      <section aria-labelledby="impact-heading" className="border-y border-slate-200/80 bg-white/90">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Current Imperial Oil experience</p>
              <h2 id="impact-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Engineering impact at fleet scale</h2>
            </div>
            <Link href="/experience/imperial-oil-exxonmobil-2026" className="text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-950">
              View experience details
            </Link>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringImpact.map((metric) => (
              <div key={metric.value} className="bg-white p-6">
                <dt className="text-sm leading-5 text-slate-600">{metric.label}</dt>
                <dd className="order-first mb-2 text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-white/75 p-10 backdrop-blur-md ring-1 ring-black/10 sm:p-12">
          {/* SUMMARY */}
          <section id="about" className="scroll-mt-24 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                About
              </h2>
              <p className="text-lg text-slate-700">
                Completing a Bachelor of Engineering in Mechanical Engineering with a
                Mechatronics concentration at UQTR, expected April 2027. Six industrial
                placements connect field engineering, mechanical design, maintenance systems,
                and reliability analysis across asset-intensive environments. Fluent in English
                and French.
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
                Download CV
              </a>
              <Link
                href="/academics"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
              >
                Education
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
          <section id="experience" className="scroll-mt-24 space-y-6">
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
                <p className="text-sm font-semibold text-slate-600">Safety &amp; field practice</p>
                <ul className="space-y-1 text-sm text-slate-800">
                  <li>WHMIS / SIMDUT and lock-out / tag-out.</li>
                  <li>Process Hazard Analysis exposure.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-600">Target opportunities</p>
                <p className="text-sm text-slate-800">
                  UK graduate and early-career roles in reliability, asset integrity,
                  maintenance, and project engineering from 2027.
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
              <Link
                className="underline underline-offset-4 hover:text-slate-700"
                href="/lifesaving"
              >
                Leadership &amp; Beyond Engineering
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
