import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type Project } from "@/data/projects";

type Role = "reliability" | "mechanical" | "mechatronics";

type Entry = {
  eyebrow: string;
  title: string;
  statement: string;
  description: string;
  experience: string;
  targetRoles: string[];
  facts: { label: string; text: string }[];
  projectSlugs: string[];
  discussion: string;
};

const entries: Record<Role, Entry> = {
  reliability: {
    eyebrow: "For reliability, maintenance & asset engineering teams",
    title: "From inconsistent maintenance history to an engineering decision.",
    statement: "I investigate what fails, whether the history can be trusted, and which maintenance intervention the evidence actually supports.",
    description: "My industrial placements cover mining fleets, oil-terminal pumps, paper-mill condition monitoring and metallurgical equipment. At Imperial Oil, I have worked with SAP maintenance history, RCM, Weibull life-data methods and field inspection references. I know that a statistical result is only useful if someone can verify the underlying failure events.",
    experience: "Imperial Oil / ExxonMobil · Valero Energy · Kruger · Rio Tinto",
    targetRoles: ["Graduate Reliability Engineer", "Junior Maintenance Engineer", "Asset Performance Engineer", "Condition Monitoring Engineer"],
    facts: [
      { label: "Fleet strategy", text: "RCM analysis across 36 CAT D11 dozers, comparing repair-cost concentrations and repeat exposure." },
      { label: "Failure coding", text: "A cross-functional Kaizen workstream standardised 500+ symptom codes into 95 categories." },
      { label: "Life data", text: "Weibull analysis distinguishes failed and right-censored component histories rather than treating every replacement as a failure." },
    ],
    projectSlugs: ["dozer-fleet-rcm", "maintenance-data-standardisation", "component-life-economics"],
    discussion: "If your team is weighing corrective versus planned replacement, my public Reliability Evidence Lab offers a transparent, synthetic example that you can interrogate.",
  },
  mechanical: {
    eyebrow: "For mechanical design, plant & project engineering teams",
    title: "Mechanical engineering that survives contact with the plant.",
    statement: "I like design work that includes the awkward details: access, drawings, interfaces, installation and safe return to service.",
    description: "My placements at Valero and Rio Tinto involved pumps, valves, piping, mechanical fixtures, guarding, field verification, P&IDs and commissioning preparation. My mechanical coursework includes machine-element design, materials, elasticity and stress analysis. I bring practical plant context to design decisions, rather than treating CAD as the whole job.",
    experience: "Valero Energy · Rio Tinto · Soucy International · Imperial Oil",
    targetRoles: ["Graduate Mechanical Engineer", "Mechanical Design Engineer", "Graduate Plant Engineer", "Graduate Project Engineer"],
    facts: [
      { label: "Brownfield modifications", text: "Pump replacement documentation, P&ID updates, MOC and commissioning-preparation support in a fuel terminal." },
      { label: "Field verification", text: "CAD design and field checks for fixtures, guards and process-piping changes, supported by mechanical calculations." },
      { label: "Mechanical fundamentals", text: "Machine Element Design A+ and Engineering Materials A in a Canadian BEng (Mechatronics concentration)." },
    ],
    projectSlugs: ["terminal-brownfield-modifications", "mechanical-modifications-field-verification", "stress-analysis-hand-fea"],
    discussion: "I am especially interested in work that brings mechanical calculations, field constraints and maintainability into the same design review.",
  },
  mechatronics: {
    eyebrow: "For controls, automation, embedded & test engineering teams",
    title: "The sensor reading is only the start of the engineering problem.",
    statement: "I enjoy tracing a machine from its physical behaviour through sensors, control logic and the response of the actual equipment.",
    description: "My academic work includes coordinating FESTO stations with PLC handshakes, STM32/ESP32 motor control and encoder feedback, Robotino navigation, and a wire-winder control model. My Alcoa-sponsored capstone is in progress, with responsibilities around measurement, PLC logic and fault detection. Industrial placements gave me the equipment context behind those signals.",
    experience: "UQTR mechatronics projects · Alcoa-sponsored capstone (in progress) · Imperial Oil",
    targetRoles: ["Graduate Mechatronics Engineer", "Graduate Controls Engineer", "Automation Engineer", "Graduate Test Engineer"],
    facts: [
      { label: "PLC systems", text: "FESTO pick-and-place and press station synchronisation with GRAFCET, Ladder logic and EtherNet/IP handshakes." },
      { label: "Embedded controls", text: "STM32/ESP32 motor PWM, Hall-encoder feedback and I2C communication in a tracked-vehicle prototype." },
      { label: "Control theory to hardware", text: "Wire-winder digital twin and tension-control analysis, with model, controller and physical demonstration evidence." },
    ],
    projectSlugs: ["modular-production-cell-automation", "tracked-vehicle-dual-mcu-control", "wire-winder-digital-twin", "aluminium-wire-feed-capstone"],
    discussion: "I want an early-career role where I can learn from experienced electronics and controls engineers while applying mechanical system understanding to real tests.",
  },
};

function isRole(value: string): value is Role {
  return Object.prototype.hasOwnProperty.call(entries, value);
}

export function generateStaticParams() {
  return (Object.keys(entries) as Role[]).map((role) => ({ role }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  if (!isRole(role)) return { title: "Engineering portfolio" };
  return {
    title: `${entries[role].title} | Amine Rhammi`,
    description: entries[role].statement,
    alternates: { canonical: `/for/${role}` },
  };
}

export default async function RoleEntryPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!isRole(role)) notFound();
  const entry = entries[role];
  const selected: Project[] = entry.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <Navbar />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white">← Portfolio home</Link>
          <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">{entry.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight sm:text-6xl">{entry.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-100">{entry.statement}</p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-slate-200">
            <span className="rounded-full border border-white/25 px-3 py-2">BEng Mechanical Engineering · Mechatronics</span>
            <span className="rounded-full border border-white/25 px-3 py-2">Graduating April 2027</span>
            <span className="rounded-full border border-white/25 px-3 py-2">UK relocation planned</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:aminecana@hotmail.com?subject=Engineering%20opportunity%20-%20Amine%20Rhammi" className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Discuss an opportunity</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">View my CV</a>
          </div>
          <p className="mt-5 text-xs text-slate-400">Work-authorisation details available on request. Student placements are not permanent employment positions.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-orange-700">What I bring</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Relevant engineering background</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700">{entry.description}</p>
            <p className="mt-6 text-sm font-semibold text-slate-700">{entry.experience}</p>
          </section>
          <section aria-label="Evidence at a glance" className="grid gap-3">
            {entry.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-wider text-orange-700">{fact.label}</p>
                <p className="mt-2 leading-relaxed text-slate-800">{fact.text}</p>
              </div>
            ))}
          </section>
        </div>

        <section className="mt-16 border-t border-slate-300 pt-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-orange-700">Selected evidence</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Projects worth discussing in an interview</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {selected.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>

        {role === "reliability" ? (
          <section className="mt-12 rounded-3xl bg-slate-950 px-7 py-9 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Interactive engineering demonstration</p>
            <h2 className="mt-3 text-3xl font-black">Reliability Evidence Lab</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{entry.discussion}</p>
            <Link href="/lab/reliability" className="mt-6 inline-flex rounded-full bg-orange-700 px-5 py-3 text-sm font-bold hover:bg-orange-800">Open the reliability model →</Link>
          </section>
        ) : null}

        <section className="mt-16 grid gap-8 border-t border-slate-300 pt-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-orange-700">Target opportunities</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Roles I am preparing for</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">{entry.targetRoles.map((item) => <span key={item} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800">{item}</span>)}</div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">{entry.discussion}</p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-orange-700 p-7 text-white sm:p-10">
          <h2 className="text-3xl font-black">Have an engineering problem worth discussing?</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-orange-50">I would welcome a technical conversation about graduate opportunities from 2027. You can inspect the work above before deciding whether my background fits your team.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:aminecana@hotmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950">Email Amine</a>
            <Link href="/projects" className="rounded-full border border-white/70 px-5 py-3 text-sm font-bold text-white">All engineering projects</Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
