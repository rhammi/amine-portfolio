"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Invented demonstration data. These are NOT work orders or measurements from an employer.
type Observation = { id: string; hours: number; failed: boolean };
const observations: Observation[] = [
  {id:"DEMO-001",hours:1150,failed:false}, {id:"DEMO-002",hours:1650,failed:true},
  {id:"DEMO-003",hours:2230,failed:false}, {id:"DEMO-004",hours:2510,failed:true},
  {id:"DEMO-005",hours:2780,failed:true}, {id:"DEMO-006",hours:3100,failed:false},
  {id:"DEMO-007",hours:3480,failed:true}, {id:"DEMO-008",hours:3820,failed:false},
  {id:"DEMO-009",hours:4160,failed:true}, {id:"DEMO-010",hours:4450,failed:false},
  {id:"DEMO-011",hours:4730,failed:true}, {id:"DEMO-012",hours:5150,failed:true},
  {id:"DEMO-013",hours:5420,failed:false}, {id:"DEMO-014",hours:5710,failed:true},
  {id:"DEMO-015",hours:6190,failed:false}, {id:"DEMO-016",hours:6550,failed:true},
  {id:"DEMO-017",hours:6910,failed:true}, {id:"DEMO-018",hours:7300,failed:false},
  {id:"DEMO-019",hours:7580,failed:true}, {id:"DEMO-020",hours:8090,failed:false},
  {id:"DEMO-021",hours:8410,failed:true}, {id:"DEMO-022",hours:8890,failed:false},
  {id:"DEMO-023",hours:9140,failed:true}, {id:"DEMO-024",hours:9900,failed:false}
];

// Two-parameter Weibull maximum-likelihood fit with right censoring.
// Profile eta^beta = (sum_all t^beta) / number_of_failures.
function fitWeibull(rows: Observation[]) {
  const failures = rows.filter(row => row.failed);
  const r = failures.length;
  const lnFail = failures.reduce((sum, row) => sum + Math.log(row.hours / 1000), 0);
  const profile = (beta: number) => {
    const powerSum = rows.reduce((sum, row) => sum + Math.pow(row.hours / 1000, beta), 0);
    const etaScaled = Math.pow(powerSum / r, 1 / beta);
    return r * Math.log(beta) - r * beta * Math.log(etaScaled) +
      (beta - 1) * lnFail - powerSum / Math.pow(etaScaled, beta);
  };
  let low = 0.4, high = 6;
  const ratio = (Math.sqrt(5) - 1) / 2;
  let x1 = high - ratio * (high - low);
  let x2 = low + ratio * (high - low);
  for (let i = 0; i < 95; i++) {
    if (profile(x1) < profile(x2)) {
      low = x1; x1 = x2; x2 = low + ratio * (high - low);
    } else {
      high = x2; x2 = x1; x1 = high - ratio * (high - low);
    }
  }
  const beta = (low + high) / 2;
  const eta = 1000 * Math.pow(rows.reduce((sum,row) => sum + Math.pow(row.hours / 1000, beta), 0) / r, 1 / beta);
  return { beta, eta, failures: r, suspended: rows.length - r };
}

function gamma(z: number): number {
  const p = [0.9999999999998099, 676.5203681218851, -1259.1392167224028,
    771.3234287776531, -176.6150291621406, 12.5073432786869,
    -0.13857109526572012, 9.984369578019572e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1-z));
  z -= 1;
  let acc = p[0];
  for (let i=1; i<p.length; i++) acc += p[i] / (z+i);
  const t = z + 7.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t,z+0.5) * Math.exp(-t) * acc;
}

const fit = fitWeibull(observations);
const survival = (hours: number) => Math.exp(-Math.pow(Math.max(hours,0) / fit.eta, fit.beta));

function expectedCycleHours(interval: number) {
  // Simpson's rule for integral_0^T S(t)dt, the renewal cycle length.
  const intervals = 400;
  const h = interval / intervals;
  let total = survival(0) + survival(interval);
  for(let i=1; i<intervals; i++) total += (i%2===0 ? 2 : 4) * survival(i*h);
  return h * total / 3;
}

function costRate(interval: number, plannedCost: number, correctiveCost: number) {
  const s = survival(interval);
  // Renewal reward: one cost per as-good-as-new replacement / expected cycle hours.
  return (plannedCost * s + correctiveCost * (1-s)) / expectedCycleHours(interval) * 1000;
}

const number = (n: number, digits = 0) => n.toLocaleString("en-GB", {maximumFractionDigits:digits, minimumFractionDigits:digits});
const money = (n: number) => "£" + number(n);

export default function ReliabilityLab() {
  const [interval,setInterval] = useState(5250);
  const [plannedCost,setPlannedCost] = useState(4000);
  const [correctiveCost,setCorrectiveCost] = useState(16000);
  const expectedLifetime = fit.eta * gamma(1 + 1 / fit.beta);
  const reactiveRate = correctiveCost / expectedLifetime * 1000;
  const plannedRate = costRate(interval,plannedCost,correctiveCost);
  const difference = (reactiveRate - plannedRate) / reactiveRate * 100;
  const best = useMemo(() => {
    let candidate = { interval: 500, rate: Number.POSITIVE_INFINITY };
    for(let age=500; age<=15000; age+=250) {
      const rate = costRate(age,plannedCost,correctiveCost);
      if(rate < candidate.rate) candidate = {interval:age,rate};
    }
    return candidate;
  },[plannedCost,correctiveCost]);

  const curve = Array.from({length:121},(_,i)=>{
    const t=i*15000/120;
    return (56 + (t/15000)*548).toFixed(2)+","+(205-170*survival(t)).toFixed(2);
  }).join(" ");
  const cursorX = 56 + interval/15000*548;
  const cursorY = 205-170*survival(interval);
  const b10 = fit.eta * Math.pow(-Math.log(0.9),1/fit.beta);
  const b50 = fit.eta * Math.pow(Math.log(2),1/fit.beta);
  const preventiveBetter = plannedRate < reactiveRate;

  return <div className="space-y-10">
    <section className="rounded-3xl border border-orange-200 bg-orange-50 p-5 sm:p-7" aria-label="Demonstration disclaimer">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-800">Synthetic data · educational engineering demonstration</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-800">All 24 component histories, identifiers and costs are fictional. They are not Imperial Oil, Valero or other employer data, and the outputs are not recommendations for a real machine. The point is to expose the method, assumptions and limitations so another engineer can challenge the decision.</p>
    </section>

    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">01 / Validate the history</p>
          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">A replacement is not always a failure.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">This sample includes observed failures and right-censored observations. A suspended observation means the component survived to its recorded age; it does not mean it failed at that age.</p></div>
        <a href="/lab/synthetic-component-history.csv" download className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-900 hover:border-orange-600">Download fictional CSV ↓</a>
      </div>
      <dl className="mt-7 grid gap-3 sm:grid-cols-4">
        {[
          ["Observations",String(observations.length)],
          ["Observed failures",String(fit.failures)],
          ["Right censored",String(fit.suspended)],
          ["Fitted β",number(fit.beta,2)]
        ].map(([label,value])=><div key={label} className="rounded-2xl bg-slate-100 p-4"><dt className="text-xs font-bold text-slate-600">{label}</dt><dd className="mt-2 text-2xl font-black text-slate-950">{value}</dd></div>)}
      </dl>
      <details className="mt-6 rounded-2xl border border-slate-200 p-4">
        <summary className="cursor-pointer font-bold text-slate-950">Inspect all 24 fictional observations</summary>
        <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[350px] text-left text-sm"><thead><tr className="border-b border-slate-200 text-slate-600"><th className="py-2">ID</th><th className="py-2">Operating age</th><th className="py-2">Classification</th></tr></thead>
          <tbody>{observations.map(row=><tr key={row.id} className="border-b border-slate-100"><td className="py-2 font-mono">{row.id}</td><td className="py-2">{number(row.hours)} hours</td><td className="py-2">{row.failed?"Observed failure":"Right-censored"}</td></tr>)}</tbody></table></div>
      </details>
    </section>

    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">02 / Fit and inspect the model</p>
      <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">Two-parameter Weibull, right-censored likelihood.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">The synthetic histories determine the fitted shape β and characteristic life η. The survival curve expresses the fitted model; it is not a guarantee that the population follows a Weibull distribution.</p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Characteristic life η",number(fit.eta)+" h"],
          ["B10 model life",number(b10)+" h"],
          ["B50 model life",number(b50)+" h"]
        ].map(([label,value])=><div key={label} className="rounded-2xl bg-slate-100 p-4"><dt className="text-xs font-bold text-slate-600">{label}</dt><dd className="mt-2 text-xl font-black text-slate-950">{value}</dd></div>)}
      </dl>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
        <svg viewBox="0 0 640 250" role="img" aria-label={"Weibull survival curve with intervention at "+number(interval)+" hours"} className="h-auto w-full">
          {[0,0.25,0.5,0.75,1].map(y=><g key={y}><line x1="56" x2="604" y1={205-170*y} y2={205-170*y} stroke="#CBD5E1" strokeDasharray="3 4" /><text x="47" y={209-170*y} textAnchor="end" fontSize="12" fill="#475569">{Math.round(y*100)}%</text></g>)}
          <polyline points={curve} stroke="#0F766E" strokeWidth="4" fill="none" strokeLinejoin="round" />
          <line x1={cursorX} x2={cursorX} y1="34" y2="205" stroke="#C2410C" strokeWidth="2" strokeDasharray="5 5"/>
          <circle cx={cursorX} cy={cursorY} r="6" fill="#C2410C" stroke="white" strokeWidth="2" />
          <line x1="56" x2="604" y1="205" y2="205" stroke="#475569"/>
          <text x="56" y="229" fontSize="12" fill="#475569">0 h</text><text x="330" y="229" fontSize="12" textAnchor="middle" fill="#475569">7,500 h</text><text x="604" y="229" fontSize="12" textAnchor="end" fill="#475569">15,000 h</text>
        </svg>
        <p className="text-xs text-slate-600">Survival S(t) = exp[−(t / η)^β]; orange marker shows the selected preventive-replacement age. The curve is derived entirely from the fictional sample.</p>
      </div>
    </section>

    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">03 / Challenge the maintenance decision</p>
      <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">Change the assumptions. Change the answer.</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">Compare run-to-failure with an age-replacement policy. Both options assume replacement restores the component to as-new condition. Results are average modelled replacement cost per 1,000 operating hours, not actual savings.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-7">
          {[
            {id:"age",label:"Preventive replacement age",value:interval,min:1000,max:15000,step:250,onChange:setInterval,suffix:" h"},
            {id:"planned",label:"Planned replacement cost",value:plannedCost,min:1000,max:12000,step:500,onChange:setPlannedCost,prefix:"£"},
            {id:"failure",label:"Corrective replacement cost",value:correctiveCost,min:2000,max:32000,step:1000,onChange:setCorrectiveCost,prefix:"£"}
          ].map(item=><div key={item.id}>
            <label htmlFor={item.id} className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-slate-800"><span>{item.label}</span><span className="font-mono text-slate-950">{item.prefix||""}{number(item.value)}{item.suffix||""}</span></label>
            <input id={item.id} type="range" min={item.min} max={item.max} step={item.step} value={item.value} onChange={e=>item.onChange(Number(e.target.value))} className="mt-3 w-full accent-orange-700"/>
          </div>)}
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl bg-slate-100 p-5"><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Run to failure · £ / 1,000 h</p><p className="mt-2 text-3xl font-black tabular-nums text-slate-950">{money(reactiveRate)}</p></div>
          <div className="rounded-2xl bg-slate-100 p-5"><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Age replacement · £ / 1,000 h</p><p className="mt-2 text-3xl font-black tabular-nums text-slate-950">{money(plannedRate)}</p></div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5"><p className="text-xs font-bold uppercase tracking-wide text-orange-800">Illustrative comparison</p><p className="mt-2 text-2xl font-black text-slate-950">{preventiveBetter ? number(Math.abs(difference),1)+"% lower modelled cost" : number(Math.abs(difference),1)+"% higher modelled cost"}</p><p className="mt-2 text-xs leading-relaxed text-slate-700">Age replacement versus run-to-failure, with the current chosen parameters. This is not a verified saving.</p></div>
        </div>
      </div>
      <div className="mt-7 rounded-2xl border border-slate-200 p-5">
        <h3 className="text-lg font-black text-slate-950">Engineering interpretation</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{preventiveBetter
          ? "Under these assumptions, age replacement has the lower expected replacement cost rate. This does not establish that the same policy should be deployed on real equipment."
          : "Under these assumptions, the proposed age-replacement interval costs more than the run-to-failure comparator. An interval should not be adopted just because a Weibull curve can be fitted."}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">Among the tested age intervals (500–15,000 hours, in 250-hour increments), the lowest estimated age-policy rate is at {number(best.interval)} hours ({money(best.rate)} per 1,000 hours). This is a grid search, not a universal optimum; run-to-failure may still be cheaper.</p>
      </div>
    </section>

    <section className="rounded-3xl bg-slate-950 p-6 text-white sm:p-10">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">04 / What could make this answer wrong?</p>
      <h2 className="mt-3 text-3xl font-black">The limitations are part of the engineering.</h2>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
        <li>Only 24 fictional observations: there is no confidence interval, diagnostic fit check, model comparison or quantified parameter uncertainty.</li>
        <li>Censoring is treated as non-informative. That may not be true in real maintenance datasets.</li>
        <li>Failures are treated as exchangeable within one population, with no operating severity, duty cycle, failure-mode or common-cause differences.</li>
        <li>Costs exclude downtime, production effects, residual value, safety consequences, inspection and logistics.</li>
        <li>Preventive and corrective replacement are assumed to restore as-new condition. No imperfect-repair or condition-based policy is modelled.</li>
        <li>Before recommending a maintenance interval I would validate work orders, event coding and physical failure mechanisms, estimate uncertainty, check alternatives and discuss access and execution constraints with operations.</li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/lab/synthetic-component-history.csv" download className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-slate-100">Download synthetic evidence</a>
        <Link href="/for/reliability" className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Reliability role evidence</Link>
        <Link href="/about#contact" className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Challenge the approach with me</Link>
      </div>
    </section>
  </div>;
}
