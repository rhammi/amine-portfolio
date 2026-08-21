import Navbar from "@/components/ui/Navbar";

const linkedInUrl = "https://www.linkedin.com/in/amine-rhammi-392376b9/";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Mechanical Engineering Graduate Candidate</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Interested in UK graduate and early-career opportunities where field engineering,
          reliability analysis, and maintenance systems support safe asset performance.
        </p>

        <section className="mt-10 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2" aria-label="Contact and opportunity details">
          <div className="space-y-7 p-7 sm:p-9">
            <div>
              <p className="text-sm font-semibold text-slate-500">Personal email</p>
              <a href="mailto:aminecana@hotmail.com" className="mt-1 inline-block text-lg font-semibold underline underline-offset-4 hover:text-slate-600">aminecana@hotmail.com</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">LinkedIn</p>
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-lg font-semibold underline underline-offset-4 hover:text-slate-600">View LinkedIn profile</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Location</p>
              <p className="mt-1 text-lg font-semibold">Calgary, Alberta, Canada</p>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-950 p-7 text-white sm:p-9 md:border-l md:border-t-0">
            <h2 className="text-xl font-semibold">Target opportunities</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Reliability Engineering · Asset Integrity · Maintenance Engineering · Project Engineering
            </p>
            <h2 className="mt-8 text-xl font-semibold">UK relocation</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Planned for 2027 under the Youth Mobility Scheme. No sponsorship required at commencement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
