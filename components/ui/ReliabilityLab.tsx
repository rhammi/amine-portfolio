"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  observations,
  fitWeibull,
  gamma,
  survival as modelSurvival,
  costRate as modelCostRate,
  bootstrapFits,
  percentile,
  kaplanMeier,
} from "@/lib/reliability";
const fit = fitWeibull(observations);
const survival = (hours: number) => modelSurvival(hours, fit);
const costRate = (age: number, planned: number, corrective: number) =>
  modelCostRate(age, planned, corrective, fit);

const number = (n: number, digits = 0) =>
  n.toLocaleString("en-GB", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
const money = (n: number) => "£" + number(n);

export default function ReliabilityLab() {
  const [interval, setInterval] = useState(5250);
  const [plannedCost, setPlannedCost] = useState(4000);
  const [correctiveCost, setCorrectiveCost] = useState(16000);
  const resamples = useMemo(() => bootstrapFits(observations), []);
  const band = (hours: number, fraction: number) =>
    percentile(
      resamples.map((f) => modelSurvival(hours, f)),
      fraction,
    );
  const bandPoints = [
    ...Array.from(
      { length: 81 },
      (_, i) =>
        `${56 + (i * 548) / 80},${205 - 170 * band((i * 15000) / 80, 0.95)}`,
    ),
    ...Array.from({ length: 81 }, (_, i) => {
      const t = ((80 - i) * 15000) / 80;
      return `${56 + ((80 - i) * 548) / 80},${205 - 170 * band(t, 0.05)}`;
    }),
  ].join(" ");
  const empirical = kaplanMeier(observations)
    .map((p) => `${56 + (p.hours / 15000) * 548},${205 - 170 * p.survival}`)
    .join(" ");
  const expectedLifetime = fit.eta * gamma(1 + 1 / fit.beta);
  const reactiveRate = (correctiveCost / expectedLifetime) * 1000;
  const plannedRate = costRate(interval, plannedCost, correctiveCost);
  const difference = ((reactiveRate - plannedRate) / reactiveRate) * 100;
  const best = useMemo(() => {
    let candidate = { interval: 500, rate: Number.POSITIVE_INFINITY };
    for (let age = 500; age <= 15000; age += 250) {
      const rate = costRate(age, plannedCost, correctiveCost);
      if (rate < candidate.rate) candidate = { interval: age, rate };
    }
    return candidate;
  }, [plannedCost, correctiveCost]);

  const curve = Array.from({ length: 121 }, (_, i) => {
    const t = (i * 15000) / 120;
    return (
      (56 + (t / 15000) * 548).toFixed(2) +
      "," +
      (205 - 170 * survival(t)).toFixed(2)
    );
  }).join(" ");
  const cursorX = 56 + (interval / 15000) * 548;
  const cursorY = 205 - 170 * survival(interval);
  const b10 = fit.eta * Math.pow(-Math.log(0.9), 1 / fit.beta);
  const b50 = fit.eta * Math.pow(Math.log(2), 1 / fit.beta);
  const preventiveBetter = plannedRate < reactiveRate;

  return (
    <div className="space-y-10">
      <section
        className="rounded-3xl border border-orange-200 bg-orange-50 p-5 sm:p-7"
        aria-label="Demonstration disclaimer"
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-800">
          Synthetic data · educational engineering demonstration
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-800">
          All 24 component histories, identifiers and costs are fictional. They
          are not Imperial Oil, Valero or other employer data, and the outputs
          are not recommendations for a real machine. The point is to expose the
          method, assumptions and limitations so another engineer can challenge
          the decision.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              01 / Validate the history
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
              A replacement is not always a failure.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              This sample includes observed failures and right-censored
              observations. A suspended observation means the component survived
              to its recorded age; it does not mean it failed at that age.
            </p>
          </div>
          <a
            href="/lab/synthetic-component-history.csv"
            download
            className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-900 hover:border-orange-600"
          >
            Download fictional CSV ↓
          </a>
        </div>
        <dl className="mt-7 grid gap-3 sm:grid-cols-4">
          {[
            ["Observations", String(observations.length)],
            ["Observed failures", String(fit.failures)],
            ["Right censored", String(fit.suspended)],
            ["Fitted β", number(fit.beta, 2)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-100 p-4">
              <dt className="text-xs font-bold text-slate-600">{label}</dt>
              <dd className="mt-2 text-2xl font-black text-slate-950">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <details className="mt-6 rounded-2xl border border-slate-200 p-4">
          <summary className="cursor-pointer font-bold text-slate-950">
            Inspect all 24 fictional observations
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[350px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600">
                  <th className="py-2">ID</th>
                  <th className="py-2">Operating age</th>
                  <th className="py-2">Classification</th>
                </tr>
              </thead>
              <tbody>
                {observations.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100">
                    <td className="py-2 font-mono">{row.id}</td>
                    <td className="py-2">{number(row.hours)} hours</td>
                    <td className="py-2">
                      {row.failed ? "Observed failure" : "Right-censored"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
          02 / Fit and inspect the model
        </p>
        <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
          Two-parameter Weibull, right-censored likelihood.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
          The synthetic histories determine the fitted shape β and
          characteristic life η. The survival curve expresses the fitted model;
          it is not a guarantee that the population follows a Weibull
          distribution.
        </p>
        <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-relaxed text-slate-700">
          <strong>Resampling uncertainty:</strong> the shaded area is a 90%
          pointwise percentile band from {resamples.length} valid paired
          bootstrap samples of the fictional histories (250 attempted, fixed
          seed). It is conditional on independent observations, non-informative
          censoring and the Weibull model. It does not capture model
          misspecification or prove a real maintenance interval.
        </div>
        <dl className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Characteristic life η", number(fit.eta) + " h"],
            ["B10 model life", number(b10) + " h"],
            ["B50 model life", number(b50) + " h"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-100 p-4">
              <dt className="text-xs font-bold text-slate-600">{label}</dt>
              <dd className="mt-2 text-xl font-black text-slate-950">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
          <svg
            viewBox="0 0 640 250"
            role="img"
            aria-label={
              "Weibull survival curve with intervention at " +
              number(interval) +
              " hours"
            }
            className="h-auto w-full"
          >
            {[0, 0.25, 0.5, 0.75, 1].map((y) => (
              <g key={y}>
                <line
                  x1="56"
                  x2="604"
                  y1={205 - 170 * y}
                  y2={205 - 170 * y}
                  stroke="#CBD5E1"
                  strokeDasharray="3 4"
                />
                <text
                  x="47"
                  y={209 - 170 * y}
                  textAnchor="end"
                  fontSize="12"
                  fill="#475569"
                >
                  {Math.round(y * 100)}%
                </text>
              </g>
            ))}
            <polygon points={bandPoints} fill="#0F766E" fillOpacity=".13" />
            <polyline
              points={empirical}
              stroke="#64748B"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 3"
            />
            <polyline
              points={curve}
              stroke="#0F766E"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            />
            <line
              x1={cursorX}
              x2={cursorX}
              y1="34"
              y2="205"
              stroke="#C2410C"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <circle
              cx={cursorX}
              cy={cursorY}
              r="6"
              fill="#C2410C"
              stroke="white"
              strokeWidth="2"
            />
            <line x1="56" x2="604" y1="205" y2="205" stroke="#475569" />
            <text x="56" y="229" fontSize="12" fill="#475569">
              0 h
            </text>
            <text
              x="330"
              y="229"
              fontSize="12"
              textAnchor="middle"
              fill="#475569"
            >
              7,500 h
            </text>
            <text x="604" y="229" fontSize="12" textAnchor="end" fill="#475569">
              15,000 h
            </text>
          </svg>
          <p className="text-xs text-slate-600">
            Survival S(t) = exp[−(t / η)^β]; orange marker shows the selected
            preventive-replacement age. Solid teal: fitted survival. Shading:
            90% pointwise bootstrap band. Dashed grey: Kaplan–Meier survival,
            shown only up to the last observation. Orange: selected age.
            Extrapolation beyond 9,900 h has no observed follow-up in this
            sample.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
          03 / Challenge the maintenance decision
        </p>
        <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
          Change the assumptions. Change the answer.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Compare run-to-failure with an age-replacement policy. Both options
          assume replacement restores the component to as-new condition. Results
          are average modelled replacement cost per 1,000 operating hours, not
          actual savings.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-7">
            {[
              {
                id: "age",
                label: "Preventive replacement age",
                value: interval,
                min: 500,
                max: 15000,
                step: 250,
                onChange: setInterval,
                suffix: " h",
              },
              {
                id: "planned",
                label: "Planned replacement cost",
                value: plannedCost,
                min: 1000,
                max: 12000,
                step: 500,
                onChange: setPlannedCost,
                prefix: "£",
              },
              {
                id: "failure",
                label: "Corrective replacement cost",
                value: correctiveCost,
                min: 2000,
                max: 32000,
                step: 1000,
                onChange: setCorrectiveCost,
                prefix: "£",
              },
            ].map((item) => (
              <div key={item.id}>
                <label
                  htmlFor={item.id}
                  className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-slate-800"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-slate-950">
                    {item.prefix || ""}
                    {number(item.value)}
                    {item.suffix || ""}
                  </span>
                </label>
                <input
                  id={item.id}
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  value={item.value}
                  onChange={(e) => item.onChange(Number(e.target.value))}
                  className="mt-3 w-full accent-orange-700"
                />
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                Run to failure · £ / 1,000 h
              </p>
              <p className="mt-2 text-3xl font-black tabular-nums text-slate-950">
                {money(reactiveRate)}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                Age replacement · £ / 1,000 h
              </p>
              <p className="mt-2 text-3xl font-black tabular-nums text-slate-950">
                {money(plannedRate)}
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-800">
                Illustrative comparison
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950">
                {preventiveBetter
                  ? number(Math.abs(difference), 1) + "% lower modelled cost"
                  : number(Math.abs(difference), 1) + "% higher modelled cost"}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                Age replacement versus run-to-failure, with the current chosen
                parameters. This is not a verified saving.
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setInterval(5250);
            setPlannedCost(4000);
            setCorrectiveCost(16000);
          }}
          className="mt-6 min-h-11 rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 hover:border-orange-700"
        >
          Reset fictional assumptions
        </button>
        <div
          className="mt-7 rounded-2xl border border-slate-200 p-5"
          role="status"
          aria-live="polite"
        >
          <h3 className="text-lg font-black text-slate-950">
            Engineering interpretation
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            {preventiveBetter
              ? "Under these assumptions, age replacement has the lower expected replacement cost rate. This does not establish that the same policy should be deployed on real equipment."
              : "Under these assumptions, the proposed age-replacement interval costs more than the run-to-failure comparator. An interval should not be adopted just because a Weibull curve can be fitted."}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Among the tested age intervals (500–15,000 hours, in 250-hour
            increments), the lowest estimated age-policy rate is at{" "}
            {number(best.interval)} hours ({money(best.rate)} per 1,000 hours).
            This is a grid search, not a universal optimum; run-to-failure may
            still be cheaper.{" "}
            {best.interval === 15000
              ? "The minimum is at the upper search boundary; the search does not establish a finite optimum."
              : ""}{" "}
            {fit.beta <= 1
              ? "The fitted hazard is non-increasing: scheduled replacement needs particular scrutiny and must not be justified by a grid minimum alone."
              : "An increasing modelled hazard supports investigating age replacement; it does not establish a physical wear-out mechanism."}
          </p>
        </div>
      </section>

      <section
        className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8"
        aria-labelledby="sensitivity-title"
      >
        <p className="journal-label">04 / Cost sensitivity</p>
        <h2
          id="sensitivity-title"
          className="mt-3 text-2xl font-black text-slate-950"
        >
          Would a different cost estimate reverse the choice?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Each cell compares the lowest grid-tested age-policy cost with
          run-to-failure at the row and column costs. Factors multiply your
          current slider values. Safety and downtime are excluded; this is
          economic sensitivity, not a maintenance instruction.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[430px] border-collapse text-left text-xs">
            <caption className="sr-only">
              Age-policy versus run-to-failure under nine fictional cost
              combinations
            </caption>
            <thead>
              <tr>
                <th scope="col" className="p-3 font-bold text-slate-600">
                  Planned cost ↓ / Corrective →
                </th>
                {[0.5, 1, 2].map((f) => (
                  <th
                    key={f}
                    scope="col"
                    className="p-3 font-mono text-slate-700"
                  >
                    {money(correctiveCost * f)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0.5, 1, 1.5].map((p) => (
                <tr key={p} className="border-t border-slate-200">
                  <th scope="row" className="p-3 font-mono text-slate-700">
                    {money(plannedCost * p)}
                  </th>
                  {[0.5, 1, 2].map((c) => {
                    let lowest = Infinity;
                    for (let age = 500; age <= 15000; age += 250)
                      lowest = Math.min(
                        lowest,
                        costRate(age, plannedCost * p, correctiveCost * c),
                      );
                    const reactive =
                      ((correctiveCost * c) / expectedLifetime) * 1000;
                    const delta = (100 * (reactive - lowest)) / reactive;
                    return (
                      <td
                        key={c}
                        className={`p-3 font-semibold ${delta > 0 ? "bg-teal-50 text-teal-900" : "bg-orange-50 text-orange-900"}`}
                      >
                        {delta > 0 ? "Age policy" : "Run to failure"}
                        <span className="mt-1 block font-normal">
                          {number(Math.abs(delta), 1)}%{" "}
                          {delta > 0 ? "lower" : "higher"} age-policy cost
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <details className="mt-6 rounded-xl border border-slate-200 p-4">
          <summary className="cursor-pointer font-bold text-slate-950">
            Inspect the equations and modelling assumptions
          </summary>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            <p className="break-words font-mono text-xs">
              S(t) = exp[−(t/η)^β]
            </p>
            <p className="break-words font-mono text-xs">
              C(T) = 1000 × [Cp × S(T) + Cf × (1−S(T))] / ∫₀ᵀ S(t) dt
            </p>
            <p className="break-words font-mono text-xs">
              C(∞) = 1000 × Cf / [η × Γ(1+1/β)]
            </p>
            <p>
              The denominator is expected operating time to failure or planned
              replacement, whichever comes first. Simpson integration uses 800
              subintervals. The MLE includes every censored observation in the
              survival contribution. All replacements restore as-new condition.
            </p>
            <p>
              The empirical curve is a diagnostic comparison, not a
              goodness-of-fit test. A mixture of failure mechanisms, informative
              censoring or changing duty can invalidate this model. There are no
              failure-mode labels in this fictional dataset, so no unsupported
              mode-specific fit is offered.
            </p>
          </div>
        </details>
      </section>

      <section className="rounded-3xl bg-slate-950 p-6 text-white sm:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
          05 / What could make this answer wrong?
        </p>
        <h2 className="mt-3 text-3xl font-black">
          The limitations are part of the engineering.
        </h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
          <li>
            Only 24 fictional observations: the resampling band illustrates
            sampling uncertainty, but no distribution comparison, simultaneous
            confidence band or formal goodness-of-fit test has been performed.
          </li>
          <li>
            Censoring is treated as non-informative. That may not be true in
            real maintenance datasets.
          </li>
          <li>
            Failures are treated as exchangeable within one population, with no
            operating severity, duty cycle, failure-mode or common-cause
            differences.
          </li>
          <li>
            Costs exclude downtime, production effects, residual value, safety
            consequences, inspection and logistics.
          </li>
          <li>
            Preventive and corrective replacement are assumed to restore as-new
            condition. No imperfect-repair or condition-based policy is
            modelled.
          </li>
          <li>
            Before recommending a maintenance interval I would validate work
            orders, event coding and physical failure mechanisms, estimate
            uncertainty, check alternatives and discuss access and execution
            constraints with operations.
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/lab/synthetic-component-history.csv"
            download
            className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-slate-100"
          >
            Download synthetic evidence
          </a>
          <a
            href="/lab/reproduce-weibull.py"
            download
            className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Download reproduction script
          </a>
          <Link
            href="/for/reliability"
            className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Reliability role evidence
          </Link>
          <Link
            href="/about#contact"
            className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Challenge the approach with me
          </Link>
        </div>
      </section>
    </div>
  );
}
