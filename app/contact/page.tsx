import Navbar from "@/components/ui/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Contact</h1>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-3 text-base text-slate-900">
            <div>
              <p className="text-sm font-semibold text-slate-600">Email</p>
              <a
                href="mailto:aminecana@hotmail.com"
                className="text-lg font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                aminecana@hotmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-600">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/amine-rhammi-392376b9/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                linkedin.com/in/amine-rhammi-392376b9
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-600">Location</p>
              <p className="text-lg font-semibold text-slate-900">Montreal, QC · Open to relocation</p>
            </div>
          </div>

          <div className="mt-2 space-y-2 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <p className="text-sm font-semibold text-slate-600">What I’m looking for</p>
            <ul className="space-y-1 text-sm text-slate-800">
              <li>Internship or new graduate mechanical engineering roles.</li>
              <li>Industries: reliability, heavy industry, refining, mining, pulp &amp; paper.</li>
              <li>Start: Summer/Fall 2025 (flexible); open to North America.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
