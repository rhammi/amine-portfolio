import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

const base = "/lifesaving%20pics";
const heroImage = `${base}/background-lifeguard.jpg`;

const certifications = [
  "Swim Instructor",
  "National Lifeguard Instructor",
  "Lifesaving Instructor",
  "First Aid - General",
  "National Lifeguard - Pool",
  "National Lifeguard - Ocean (expired)",
  "National Lifeguard - Waterfront (expired)",
];

const currentRole = {
  title: "Aquatic Coordinator",
  org: "City of Montreal - Mercier-Hochelaga-Maisonneuve (Culture, Sports, Recreation and Social Development)",
  jobId: "Posting MHM-25-BHRES-762880-5 | Swimming Instructor Grade 2 (762880)",
  highlights: [
    "Coordinate and supervise lifeguard teams; ensure public protection and discipline across multiple facilities.",
    "Monitor water/air temperatures, cleanliness, and safety equipment availability; escalate issues promptly.",
    "Approve attendance, fill vacant shifts, verify and approve hours worked; support roster adjustments.",
    "Lead pre-shift briefings, enforce equipment/readiness checks, and maintain clear safety signage.",
    "Uphold regulations, good order, and customer communication in borough aquatic centres.",
  ],
  logo: "/logos/city-montreal.jpg",
};

const experience = [
  {
    title: "Aquatic Supervisor",
    roles: [
      "May 2023 - September 2023 - Sport Montreal, Montreal, QC",
      "September 2018 - 2020 - Centre Jean-Claude Malepart, Montreal, QC",
      "September 2017 - Present - Saint-Leonard Aquatic Complex, Montreal, QC",
    ],
  },
  {
    title: "National Lifeguard Instructor",
    roles: [
      "May 2024 - Present - Centre du Plateau, Montreal, QC",
      "September 2023 - Present - CAPS, UQTR, Trois-Rivieres, QC",
      "May 2024 - August 2024 - Centre du Plateau, Montreal, QC",
      "May 2023 - August 2023 - Notre-Dame-de-Grace Sports Centre, Montreal, QC",
      "September 2018 - Saint-Leonard Aquatic Complex, Montreal, QC",
      "May 2023 - Present - Marie-Victorin Aquatic Complex, Montreal, QC",
    ],
  },
  {
    title: "Lifesaving Instructor",
    roles: [
      "September 2023 - Present - CAPS, UQTR, Trois-Rivieres, QC",
      "May 2023 - August 2023 - Notre-Dame-de-Grace Sports Centre, Montreal, QC",
      "May 2023 - Present - Saint-Leonard Aquatic Complex, Montreal, QC",
      "May 2023 - Present - Marie-Victorin Aquatic Complex, Montreal, QC",
      "September 2022 - 2023 - CEPS Louis-J. Robichaud, Moncton, NB",
      "September 2017 - Present - Saint-Leonard Aquatic Complex, Montreal, QC",
    ],
  },
  {
    title: "Swim Instructor",
    roles: [
      "September 2022 - Present - CEPS Louis-J. Robichaud, Moncton, NB",
      "September 2018 - 2020 - Centre Jean-Claude Malepart, Montreal, QC",
      "October 2015 - 2020 - Saint-Leonard Aquatic Complex, Montreal, QC",
    ],
  },
];

const gallery = [
  `${base}/4.jpg`,
  `${base}/i-6hNFpjr-XL.jpg`,
  `${base}/i-bFjhNHt-XL%20(1).jpg`,
  `${base}/i-vrG8Cnw-XL.jpg`,
  `${base}/i-WJL5J75-XL.jpg`,
  `${base}/lifesaving.jpg`,
];

export default function LifesavingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">Lifesaving</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Aquatics Certification &amp; Instruction
            </h1>
            <p className="mt-3 text-lg text-white/90">
              National lifeguard instruction, lifesaving teaching, and aquatic supervision across multiple centres.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-sm backdrop-blur hover:bg-white/20"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
          {/* Left column */}
          <div className="space-y-8 xl:col-span-8">
            <section className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Current role</p>
                  <h2 className="text-2xl font-semibold text-slate-900">{currentRole.title}</h2>
                  <p className="text-sm font-medium text-slate-800">{currentRole.org}</p>
                  <p className="text-sm text-slate-700">{currentRole.jobId}</p>
                </div>
                <img
                  src={currentRole.logo}
                  alt="City of Montreal"
                  className="h-28 w-auto rounded-md bg-white object-contain p-2"
                />
              </div>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-slate-600">Responsibilities</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-800">
                    {currentRole.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Certifications</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-800">
                    {certifications.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Certifications</h2>
              <ul className="space-y-1 text-sm text-slate-800">
                {certifications.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Professional Experience</h3>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {experience.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-800">
                      {item.roles.map((r) => (
                        <li key={r}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Lifesaving Moments</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {gallery.map((src) => (
                  <div key={src} className="overflow-hidden rounded-2xl border border-slate-200">
                    <img src={src} alt="Lifesaving" className="h-56 w-full object-cover" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar with photo */}
          <aside className="xl:col-span-4">
            <div className="xl:sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                <img
                  src={`${base}/hero-lifeguard.jpg`}
                  alt="Amine on duty as a lifeguard on the beach"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">Certification badges</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Lifesaving Society</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { src: "/logos/emergency%20first%20aid.jpg", alt: "Emergency First Aid" },
                    { src: "/logos/nl%20instructor.png", alt: "National Lifeguard Instructor" },
                    { src: "/logos/nl%20poo.png", alt: "National Lifeguard Pool" },
                    { src: "/logos/lifesaving%20instructor.png", alt: "Lifesaving Instructor" },
                    { src: "/logos/bronze%20medallion.png", alt: "Bronze Medallion" },
                    { src: "/logos/bronze%20cross.png", alt: "Bronze Cross" },
                  ].map((badge) => (
                    <div
                      key={badge.src}
                      className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 p-2"
                    >
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        className="h-80 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
