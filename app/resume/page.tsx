export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-4 text-gray-600">
        Download a copy of my resume below.
      </p>
      <div className="mt-6">
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-black/5"
        >
          Download Resume (PDF)
        </a>
      </div>
    </main>
  );
}
