import Navbar from "@/components/ui/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Contact</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight">Engineering opportunities & professional contact</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
          I am interested in 2027 graduate and early-career roles in mechanical engineering, reliability, maintenance engineering, asset performance, and industrial equipment reliability, particularly in the United Kingdom.
        </p>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Email</p>
            <a href="mailto:aminecana@hotmail.com" className="mt-2 block text-lg font-semibold underline underline-offset-4">aminecana@hotmail.com</a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">LinkedIn</p>
            <a href="https://www.linkedin.com/in/amine-rhammi-392376b9/" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold underline underline-offset-4">Amine Rhammi on LinkedIn</a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Current base</p>
            <p className="mt-2 text-lg font-semibold">Calgary, Alberta, Canada</p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-slate-950 p-7 text-white">
          <p className="text-sm font-bold text-white/60">Target areas</p>
          <p className="mt-3 leading-relaxed text-white/85">
            Reliability engineering · Mechanical maintenance · Asset integrity · Rotating and mobile equipment · Maintenance strategy · SAP/CMMS · Condition monitoring · Reliability analytics
          </p>
        </section>
      </div>
    </main>
  );
}
