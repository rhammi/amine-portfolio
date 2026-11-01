import Link from "next/link";

const options = [
  {
    href: "/for/reliability",
    number: "01",
    title: "Reliability & Asset Engineering",
    audience: "Maintenance and reliability hiring managers",
    lead: "Maintenance histories, failure modes, Weibull life data and equipment strategy.",
    proof: "Imperial Oil fleet RCM · failure coding · Kruger condition monitoring",
  },
  {
    href: "/for/mechanical",
    number: "02",
    title: "Mechanical & Plant Engineering",
    audience: "Design and project engineering teams",
    lead: "CAD, piping and pump modifications, calculations and field verification.",
    proof: "Valero brownfield changes · Rio Tinto mechanical design",
  },
  {
    href: "/for/mechatronics",
    number: "03",
    title: "Mechatronics & Controls",
    audience: "Automation, robotics and test engineering teams",
    lead: "PLC sequencing, embedded motor control, sensors, modelling and integration.",
    proof: "FESTO · STM32/ESP32 · Robotino · wire-winder",
  },
];

export default function RoleEntryPoints() {
  return (
    <section aria-labelledby="recruiter-pathways" className="py-14 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-700">For engineering hiring teams</p>
          <h2 id="recruiter-pathways" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Find the evidence most relevant to your vacancy.</h2>
          <p className="mt-4 leading-relaxed text-slate-700">One mechanical engineering background, three ways into the work. Each route contains a short technical introduction and selected, inspectable project evidence.</p>
        </div>
        <Link href="/lab/reliability" className="text-sm font-extrabold text-orange-800 underline underline-offset-4 hover:text-orange-950">Try the Reliability Evidence Lab →</Link>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {options.map((option) => (
          <Link key={option.href} href={option.href} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
            <p className="font-mono text-sm font-black text-orange-700">{option.number} <span className="ml-2 font-sans text-xs uppercase tracking-wider text-slate-500">{option.audience}</span></p>
            <h3 className="mt-5 text-2xl font-black text-slate-950 group-hover:text-orange-800">{option.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{option.lead}</p>
            <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-medium leading-relaxed text-slate-500">{option.proof}</p>
            <p className="mt-5 text-sm font-extrabold text-slate-950">Open tailored evidence →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
