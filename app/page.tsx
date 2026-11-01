import Image from "next/image";
import Link from "next/link";
import CompanyLogoStrip from "@/components/ui/CompanyLogoStrip";
import EvidenceShelf, {
  type EvidenceCard,
} from "@/components/ui/EvidenceShelf";
import Footer from "@/components/ui/Footer";
import HeroHeader from "@/components/ui/HeroHeader";
import LabPreview from "@/components/ui/LabPreview";
import Navbar from "@/components/ui/Navbar";
import { projects } from "@/data/projects";
const featuredSlugs = [
  "dozer-fleet-rcm",
  "modular-production-cell-automation",
  "terminal-brownfield-modifications",
  "tracked-vehicle-dual-mcu-control",
];
export default function Home() {
  const selected: EvidenceCard[] = featuredSlugs.flatMap((slug) => {
    const p = projects.find((item) => item.slug === slug);
    return p
      ? [
          {
            slug: p.slug,
            title: p.title,
            organisation: p.organisation,
            period: p.period,
            source: p.source,
            disciplines: p.disciplines,
            summary: p.summary,
            visual: p.visual,
            visualAlt: p.visualAlt,
            hasVideo: Boolean(p.video),
          },
        ]
      : [];
  });
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <HeroHeader />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <section
          id="featured-evidence"
          className="scroll-mt-24 py-10 sm:py-12"
          aria-labelledby="featured-title"
        >
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="journal-label">
                01 / Featured engineering evidence
              </p>
              <h2
                id="featured-title"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
              >
                The work behind the decisions.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-bold text-orange-800 underline underline-offset-4"
            >
              All case studies ↗
            </Link>
          </div>
          <EvidenceShelf projects={selected} />
        </section>
        <LabPreview />
        <CompanyLogoStrip />
        <section
          className="grid gap-10 border-y border-slate-300 py-12 sm:py-16 lg:grid-cols-[.8fr_1.2fr]"
          aria-labelledby="approach-title"
        >
          <div>
            <p className="journal-label">03 / How I work</p>
            <h2
              id="approach-title"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Start with the machine.
              <br />
              Keep the reasoning visible.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              I enjoy the point where a drawing, a maintenance record or a
              sensor signal has to stand up to what the equipment actually does.
            </p>
            <Link
              href="/projects#engineering-thinking"
              className="mt-5 inline-block text-sm font-bold text-orange-800 underline underline-offset-4"
            >
              Drawings, choices, prototypes and tests ↗
            </Link>
          </div>
          <ol className="divide-y divide-slate-300 border-y border-slate-300">
            {[
              [
                "Understand the operating problem",
                "Check the equipment, the interfaces and the people who operate and maintain it.",
              ],
              [
                "Compare the engineering options",
                "Connect the calculation, design choice or control sequence to a physical constraint.",
              ],
              [
                "Test what the evidence supports",
                "Show the result, the individual contribution and the questions still open.",
              ],
            ].map(([title, body], index) => (
              <li key={title} className="grid grid-cols-[2rem_1fr] gap-3 py-6">
                <span className="font-mono text-xs text-orange-800">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="grid gap-8 py-12 sm:py-16 md:grid-cols-[14rem_1fr] md:items-center"
          aria-labelledby="person-title"
        >
          <div className="grid max-w-[14rem] grid-cols-2 gap-3">
            <Link
              href="/experience"
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src="/profile/amine-industrial-field.jpg"
                alt="Amine wearing protective equipment at an industrial site"
                fill
                sizes="112px"
                className="object-cover object-[center_25%]"
              />
            </Link>
            <Link
              href="/lifesaving"
              className="relative mt-5 aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src="/profile/amine-lifesaving.png"
                alt="Amine with rescue equipment beside the water"
                fill
                sizes="112px"
                className="object-cover"
              />
            </Link>
          </div>
          <div>
            <p className="journal-label">04 / The person behind the work</p>
            <h2
              id="person-title"
              className="mt-3 text-3xl font-bold tracking-tight"
            >
              An industrial placement. A laboratory. A team to lead.
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
              My experience spans Imperial Oil, Valero, Kruger, Rio Tinto and
              Soucy, alongside hands-on university projects and years of aquatic
              safety and lifeguard instruction. Each asks for clear
              communication, practical judgement and responsibility for the next
              step.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-orange-800">
              <Link href="/experience">Six industrial placements ↗</Link>
              <Link href="/lifesaving">Leadership & lifesaving ↗</Link>
              <Link href="/education">Education ↗</Link>
            </div>
          </div>
        </section>
        <section
          className="mb-14 rounded-xl bg-[#14243a] p-7 text-white sm:p-10"
          aria-labelledby="contact-title"
        >
          <p className="font-mono text-xs uppercase tracking-[.14em] text-orange-200">
            Expected graduation / April 2027
          </p>
          <h2
            id="contact-title"
            className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let’s talk about the engineering your team needs.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Seeking graduate and early-career opportunities in the UK. Preparing
            to relocate in 2027; eligible to apply for the Youth Mobility
            Scheme.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:aminecana@hotmail.com"
              className="journal-button journal-button-accent"
            >
              Email Amine ↗
            </a>
            <Link
              href="/about#contact"
              className="journal-button border border-white/40 hover:bg-white/10"
            >
              Contact details
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="journal-button border border-white/40 hover:bg-white/10"
            >
              View CV
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
