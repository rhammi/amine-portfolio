"use client";

import { useMemo, useState } from "react";
import {
  ageReplacementPolicy, bestAgeReplacement, hazardPer1000Hours,
  reactiveOnlyCostPer1000Hours, survival, type ReliabilityInputs,
} from "@/lib/reliability-model";

const pounds = (value: number) => new Intl.NumberFormat("en-GB", {
  style: "currency", currency: "GBP", maximumFractionDigits: 0,
}).format(value);
const number = (value: number) => new Intl.NumberFormat("en-GB").format(value);
const percent = (value: number) => (value * 100).toFixed(1) + "%";

function RangeControl({
  id, label, value, suffix, min, max, step, onChange, explanation,
}: {
  id: string; label: string; value: number; suffix?: string;
  min: number; max: number; step: number; onChange: (value: number) => void; explanation?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-bold text-slate-900">{label}</label>
        <output htmlFor={id} className="font-mono text-sm font-bold tabular-nums text-orange-800">{number(value)}{suffix ? " " + suffix : ""}</output>
      </div>
      <input id={id} type="range" className="mt-2 w-full accent-orange-700" min={min} max={max} step={step} value={value}
        onChange={(event) => onChange(Number(event.target.value))} />
      {explanation ? <p className="mt-1 text-xs leading-relaxed text-slate-500">{explanation}</p> : null}
    </div>
  );
}

export default function ReliabilityLab() {
  const [shape, setShape] = useState(2);
  const [scaleHours, setScaleHours] = useState(6000);
  const [interval, setInterval] = useState(4500);
  const [plannedCost, setPlannedCost] = useState(3000);
  const [failureCost, setFailureCost] = useState(12000);

  const inputs: ReliabilityInputs = useMemo(() => ({ shape, scaleHours, plannedCost, failureCost }), [shape, scaleHours, plannedCost, failureCost]);
  const planned = useMemo(() => ageReplacementPolicy(interval, inputs), [interval, inputs]);
  const reactive = useMemo(() => reactiveOnlyCostPer1000Hours(inputs), [inputs]);
  const optimum = useMemo(() => bestAgeReplacement(inputs), [inputs]);
  const optimumUseful = optimum.costPer1000Hours < reactive * 0.995;
  const maxCost = Math.max(reactive, planned.costPer1000Hours, 1);
  const saving = Math.max(0, (reactive - planned.costPer1000Hours) / reactive);
  const horizon = Math.max(12000, 2.2 * scaleHours);
  const plotLeft = 42, plotWidth = 674, plotTop = 18, plotHeight = 205;
  const px = (hours: number) => plotLeft + (hours / horizon) * plotWidth;
  const py = (probability: number) => plotTop + (1 - probability) * plotHeight;
  const line = Array.from({ length: 121 }, (_, i) => {
    const hours = horizon * i / 120;
    return (i === 0 ? "M" : "L") + px(hours).toFixed(1) + "," + py(survival(hours, shape, scaleHours)).toFixed(1);
  }).join(" ");
  const atInterval = survival(interval, shape, scaleHours);

  return (
    <section aria-label="Interactive Weibull reliability and age-replacement model" className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">01 / Change the assumptions</p>
          <h2 className="mt-3 text-2xl font-black text-slate-950">Hypothetical component model</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">Drag a slider. The survival curve, expected cost rates and candidate maintenance decision update from the same assumptions.</p>
          <div className="mt-7 space-y-6">
            <RangeControl id="shape" label="Weibull shape (β)" value={shape} min={0.8} max={3.5} step={0.1} onChange={setShape}
              explanation="β above 1 represents an increasing failure hazard; below 1 suggests early-life failures." />
            <RangeControl id="scale" label="Characteristic life (η)" value={scaleHours} suffix="h" min={3000} max={10000} step={500} onChange={setScaleHours}
              explanation="An assumed model input, not a fit to the downloadable example records." />
            <RangeControl id="interval" label="Proposed replacement age" value={interval} suffix="h" min={1000} max={12000} step={250} onChange={setInterval} />
            <RangeControl id="planned" label="Planned replacement cost" value={plannedCost} suffix="GBP" min={1000} max={12000} step={500} onChange={setPlannedCost} />
            <RangeControl id="failure" label="Failure replacement cost" value={failureCost} suffix="GBP" min={5000} max={30000} step={1000} onChange={setFailureCost} />
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">02 / Understand survival</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">Probability the component survives</h2>
            <svg className="mt-4 w-full" viewBox="0 0 755 265" role="img" aria-label={`Weibull survival curve, with ${percent(atInterval)} survival probability at ${number(interval)} hours`}>
              {[0, 0.25, 0.5, 0.75, 1].map((y) => (
                <g key={y}>
                  <line x1={plotLeft} y1={py(y)} x2={plotLeft + plotWidth} y2={py(y)} stroke="#CBD5E1" strokeWidth="1" />
                  <text x="34" y={py(y) + 4} textAnchor="end" fontSize="12" fill="#475569">{Math.round(y * 100)}%</text>
                </g>
              ))}
              <path d={line} fill="none" stroke="#C2410C" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
              <line x1={px(interval)} x2={px(interval)} y1={plotTop} y2={plotTop + plotHeight} stroke="#334155" strokeDasharray="5 5" strokeWidth="2" />
              <circle cx={px(interval)} cy={py(atInterval)} r="7" fill="#C2410C" stroke="#FFFFFF" strokeWidth="2" />
              {[0, 0.5, 1].map((fraction) => (
                <text key={fraction} x={px(horizon * fraction)} y="246" textAnchor={fraction === 0 ? "start" : fraction === 1 ? "end" : "middle"} fontSize="13" fill="#475569">{number(Math.round(horizon * fraction))} h</text>
              ))}
            </svg>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Survival to proposed age</p>
                <p className="mt-2 text-3xl font-black tabular-nums text-slate-950">{percent(planned.survivalAtInterval)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Hazard at proposed age</p>
                <p className="mt-2 text-3xl font-black tabular-nums text-slate-950">{hazardPer1000Hours(interval, shape, scaleHours).toFixed(3)}</p>
                <p className="mt-1 text-xs text-slate-500">per 1,000 operating hours</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">03 / Compare costs</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">Expected long-run cost rate</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">GBP per 1,000 operating hours, using a renewal-reward model. Lower is better under the stated assumptions.</p>
            <div className="mt-6 space-y-5">
              {[
                { label: "Reactive replacement only", rate: reactive, tone: "bg-slate-700" },
                { label: `Replace at ${number(interval)} h or failure`, rate: planned.costPer1000Hours, tone: "bg-orange-700" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-800">
                    <span>{row.label}</span><span className="tabular-nums">{pounds(row.rate)}</span>
                  </div>
                  <div className="mt-2 h-4 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${row.tone}`} style={{ width: `${Math.max(1, row.rate / maxCost * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-700">{saving > 0 ? `This proposed interval is modelled ${(saving * 100).toFixed(1)}% below reactive replacement cost.` : "This proposed interval does not reduce the modelled cost relative to reactive replacement."}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-400">04 / Engineering judgement</p>
        <h2 className="mt-3 text-3xl font-black">{optimumUseful ? `A candidate age: ${number(optimum.intervalHours)} operating hours` : "No age-based intervention beats reactive replacement in this model"}</h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
          {optimumUseful
            ? `Of the 250-hour increments assessed between 500 and 12,000 hours, the lowest modelled age-replacement cost is ${pounds(optimum.costPer1000Hours)} per 1,000 operating hours at ${number(optimum.intervalHours)} hours. This is a screening result, not a maintenance instruction.`
            : "Across the 500–12,000-hour search grid, replacing on age is not demonstrably better than run-to-failure under these assumptions. Investigate failure modes, detectability and consequence before setting a time-based PM task."}
        </p>
        <p className="mt-5 border-t border-white/20 pt-5 text-sm leading-relaxed text-slate-300">A real maintenance decision also requires failure-mode evidence, censoring validation, equipment criticality, safety and environmental consequences, downtime, spare-part lead times, condition-monitoring feasibility and engineering review.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black text-slate-950">Reproduce the calculation</h2>
          <p className="mt-4 leading-relaxed text-slate-700">Weibull survival: S(t) = exp[−(t/η)^β]. A cycle ends at the planned age or an earlier failure. Expected cycle cost = planned cost × S(T) + failure cost × [1 − S(T)]. Expected cycle length = the integral of S(t) from 0 to T. Their ratio gives the cost rate.</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">Reactive-only cost divides failure cost by expected component lifetime, calculated by integrating the survival curve. Numerical integration uses a trapezoidal rule; candidate planned ages are searched in 250-hour steps, not continuously optimised.</p>
          <a href="https://github.com/rhammi/amine-portfolio/blob/codex/recruiter-entry-points-reliability-lab-2026/lib/reliability-model.ts" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-extrabold text-orange-800 underline underline-offset-4">Inspect the model source code ↗</a>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black text-slate-950">Inspect the synthetic records</h2>
          <p className="mt-4 leading-relaxed text-slate-700">A separate example CSV illustrates the distinction between recorded failures and suspended (right-censored) observations. These rows are invented for learning and do not determine the sliders or fitted model parameters above.</p>
          <a href="/lab/synthetic-component-history.csv" download className="mt-5 inline-flex rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white hover:bg-orange-800">Download synthetic CSV</a>
          <p className="mt-4 text-sm text-slate-500">No employer names, asset identifiers, operational thresholds or industrial records are included.</p>
        </section>
      </div>

      <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-950">
        <strong>Model boundary:</strong> Synthetic inputs only; an illustrative Weibull distribution, not a fit to the CSV; independent and identically distributed component lives; as-good-as-new replacements; fixed event costs; no discounting, imperfect repair, lead times, competing risks or availability penalties. Outputs are decision-support examples, not field recommendations or achieved savings.
      </aside>
    </section>
  );
}
