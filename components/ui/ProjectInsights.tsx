import Image from "next/image";

export default function ProjectInsights({ slug }: { slug: string }) {
  if (slug === "tracked-vehicle-dual-mcu-control")
    return (
      <section className="rounded-xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
        <p className="journal-label">A measured check / Stage 1 propulsion</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950">
          1 m: encoder count versus the calculation.
        </h2>
        <dl className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["Theoretical", "1,767 pulses"],
            ["Recorded at 50% PWM", "1,770 pulses"],
            ["Count difference", "+3 pulses / +0.17%"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs text-slate-600">{label}</dt>
              <dd className="mt-2 font-mono text-lg font-bold text-slate-950">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm leading-relaxed text-slate-700">
          The report supports this single encoder-count comparison and
          direction-dependent motor calibration. It does not establish ±0.17%
          travel accuracy, a repeatability bound or calibrated autonomous
          navigation. BLE, display and overall vehicle integration remain team
          work.
        </p>
      </section>
    );
  if (slug !== "terminal-brownfield-modifications") return null;
  return (
    <section
      className="rounded-xl border border-slate-300 bg-white p-6 sm:p-8"
      aria-labelledby="design-options-title"
    >
      <p className="journal-label">Design reasoning / public explanation</p>
      <h2
        id="design-options-title"
        className="mt-3 text-2xl font-bold text-slate-950"
      >
        Why isolation and air admission shape the arrangement.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        This comparison explains the constraints behind the case study. It is a
        new educational interpretation, not a recovered options study, site P&ID
        or construction approval.
      </p>
      <figure className="mt-6">
        <a
          href="/visuals/terminal-modification.svg"
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
          aria-label="Open the full-size conceptual drainage diagram"
        >
          <Image
            src="/visuals/terminal-modification.svg"
            alt="Public-safe conceptual drawing of drainage routes, isolation and controlled air admission"
            fill
            sizes="(max-width: 1024px) 100vw, 750px"
            className="object-contain p-3"
          />
        </a>
        <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
          Conceptual reconstruction. Dimensions, tags, operating values and
          employer drawings are excluded. Open the figure to inspect it.
        </figcaption>
      </figure>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[450px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-300">
              <th scope="col" className="py-3 pr-4">
                Illustrative option
              </th>
              <th scope="col" className="py-3">
                Engineering trade-off
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Routing based on shortest distance",
                "Less pipe alone does not establish isolation, maintainability or vacuum protection.",
              ],
              [
                "Independent drainage and controlled air admission",
                "Makes the flow paths and pressure-protection logic explicit; still needs site-specific sizing and verification.",
              ],
              [
                "Procedure without a hardware change",
                "Depends on operator action and cannot alone demonstrate that the physical constraints are satisfied.",
              ],
            ].map(([option, detail]) => (
              <tr key={option} className="border-b border-slate-200">
                <th
                  scope="row"
                  className="py-4 pr-4 font-semibold text-slate-900"
                >
                  {option}
                </th>
                <td className="py-4 text-slate-600">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <details className="mt-6 rounded-lg border border-slate-200 p-4">
        <summary className="cursor-pointer font-bold text-slate-950">
          Commissioning-readiness questions
        </summary>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Illustrative review prompts. These are not signed-off tests or a
          record of completed commissioning.
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-700">
          <li>
            Does the drawing match the installed routing and isolation
            arrangement?
          </li>
          <li>
            Have the tank pressure/vacuum limits and air-admission path been
            checked by the responsible engineers?
          </li>
          <li>
            Are mechanical, electrical and structural interface actions closed
            or assigned?
          </li>
          <li>
            Are MOC actions, operational instructions and start-up hold points
            recorded?
          </li>
        </ul>
      </details>
    </section>
  );
}
