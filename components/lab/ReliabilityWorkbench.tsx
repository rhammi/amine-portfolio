"use client";

import { useMemo, useState } from "react";
import { ageReplacement, fitWeibull, hazardPer1000, observations, runToFailure, sampleCsv, survival } from "@/lib/reliability-lab";

const number = (n: number, digits = 0) => n.toLocaleString("en-GB", { maximumFractionDigits: digits, minimumFractionDigits: digits });

function Knob({ label, value, onChange, min, max, step, suffix = "" }: { label: string; value: number; onChange: (n: number) => void; min: number; max: number; step: number; suffix?: string }) {
  return <label className="block rounded-xl border border-slate-200 bg-white p-4">
    <span className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-900"><span>{label}</span><span className="font-mono text-orange-700">{number(value, step < 1 ? 2 : 0)}{suffix}</span></span>
    <input className="mt-4 w-full accent-orange-700" type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} aria-label={label} />
    <span className="mt-1 flex justify-between text-xs text-slate-400"><span>{number(min)}</span><span>{number(max)}</span></span>
  </label>;
}

function SurvivalPlot({ beta, eta, interval }: { beta: number; eta: number; interval: number }) {
  const maxAge=16000, toX=(h:number)=>48+540*h/maxAge, toY=(p:number)=>200-160*p;
  const points=Array.from({length:121},(_,i)=>{const h=maxAge*i/120; return String(toX(h))+","+String(toY(survival(h,beta,eta)));}).join(" ");
  const x=toX(interval), y=toY(survival(interval,beta,eta));
  return <svg viewBox="0 0 625 247" role="img" aria-label="Weibull survival probability by operating age; dashed line marks the selected planned replacement interval" className="w-full">
    {[0,0.25,0.5,0.75,1].map(v=><g key={v}><line x1="48" x2="588" y1={toY(v)} y2={toY(v)} stroke="#CBD5E1" strokeDasharray="3 5" /><text x="38" y={toY(v)+4} fill="#64748B" textAnchor="end" fontSize="12">{Math.round(v*100)}%</text></g>)}
    {[0,4000,8000,12000,16000].map(h=><text key={h} x={toX(h)} y="223" fontSize="12" textAnchor="middle" fill="#64748B">{number(h)}</text>)}
    <polyline points={points} fill="none" stroke="#0F766E" strokeWidth="3.5" strokeLinejoin="round"/>
    <line x1={x} x2={x} y1="40" y2="200" stroke="#C2410C" strokeWidth="2" strokeDasharray="6 5"/>
    <circle cx={x} cy={y} r="5" fill="#C2410C" stroke="#FFF" strokeWidth="2"/>
    <text x="315" y="243" fontSize="12" fill="#475569" textAnchor="middle">Operating age (hours)</text>
    <text x="51" y="22" fontSize="12" fill="#475569">Estimated survival</text>
  </svg>;
}

export default function ReliabilityWorkbench() {
  const fitted=useMemo(()=>fitWeibull(observations),[]);
  const [beta,setBeta]=useState(Number((fitted?.beta ?? 1.8).toFixed(2)));
  const [eta,setEta]=useState(Math.round((fitted?.eta ?? 6500)/100)*100);
  const [interval,setInterval]=useState(4500);
  const [planned,setPlanned]=useState(4500);
  const [corrective,setCorrective]=useState(15000);
  const failed=observations.filter(o=>o.status==="Failure").length;
  const result=ageReplacement(interval,beta,eta,planned,corrective);
  const baseline=runToFailure(beta,eta,corrective);
  const difference=baseline-result.rate;
  const reset=()=>{setBeta(Number((fitted?.beta??1.8).toFixed(2)));setEta(Math.round((fitted?.eta??6500)/100)*100);setInterval(4500);setPlanned(4500);setCorrective(15000);};
  const download=()=>{
    const blob=new Blob([sampleCsv(observations)],{type:"text/csv;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download="fictional-component-life-data.csv";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  };
  return <div className="space-y-10">
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-xs font-extrabold uppercase tracking-widest text-orange-300">Synthetic sample</p><p className="mt-3 text-4xl font-black">{observations.length}</p><p className="mt-1 text-sm text-slate-300">fictional components</p></div>
      <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-xs font-extrabold uppercase tracking-widest text-orange-300">Observed failures</p><p className="mt-3 text-4xl font-black">{failed}</p><p className="mt-1 text-sm text-slate-300">{observations.length-failed} right-censored observations</p></div>
      <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-xs font-extrabold uppercase tracking-widest text-orange-300">Weibull MLE</p><p className="mt-3 text-3xl font-black">β {number(fitted?.beta??0,2)}</p><p className="mt-1 text-sm text-slate-300">η {number(fitted?.eta??0)} h · fitted from sample</p></div>
    </section>
    <section className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <h2 className="text-2xl font-black tracking-tight">Challenge the assumptions</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">The initial β and η are maximum-likelihood estimates from the synthetic observations, including suspended records. Adjust them to test the consequences of model uncertainty; the costs are fictional UK-pound example inputs.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <Knob label="Shape β" value={beta} onChange={setBeta} min={0.6} max={4} step={0.05}/>
          <Knob label="Scale η" value={eta} onChange={setEta} min={1500} max={12000} step={100} suffix=" h"/>
          <Knob label="Planned age" value={interval} onChange={setInterval} min={500} max={14000} step={250} suffix=" h"/>
          <Knob label="Planned replacement" value={planned} onChange={setPlanned} min={1000} max={12000} step={500} suffix=" £"/>
          <Knob label="Failure replacement" value={corrective} onChange={setCorrective} min={2000} max={30000} step={1000} suffix=" £"/>
        </div>
        <button type="button" onClick={reset} className="mt-4 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100">Restore starting example</button>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
        <p className="text-sm font-extrabold uppercase tracking-widest text-orange-700">Model behaviour</p>
        <h3 className="mt-2 text-2xl font-black">Survival and cost</h3>
        <SurvivalPlot beta={beta} eta={eta} interval={interval}/>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-100 p-5"><p className="text-xs font-bold uppercase text-slate-500">Survival to planned age</p><p className="mt-2 text-2xl font-black">{number(result.survival*100,1)}%</p></div>
          <div className="rounded-2xl bg-slate-100 p-5"><p className="text-xs font-bold uppercase text-slate-500">Hazard at planned age</p><p className="mt-2 text-2xl font-black">{number(hazardPer1000(interval,beta,eta),3)}<span className="ml-1 text-sm">per 1,000 h</span></p></div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5"><p className="text-xs font-bold uppercase text-teal-900">Fixed-age replacement</p><p className="mt-2 text-2xl font-black">£{number(result.rate,0)}<span className="ml-1 text-sm">/ 1,000 h</span></p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase text-slate-500">Run to failure</p><p className="mt-2 text-2xl font-black">£{number(baseline,0)}<span className="ml-1 text-sm">/ 1,000 h</span></p></div>
        </div>
        <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-sm leading-relaxed text-white" aria-live="polite">
          {difference>0 ? "In this simplified model, fixed-age replacement is £"+number(difference)+" cheaper per 1,000 operating hours." : difference<0 ? "In this simplified model, run-to-failure is £"+number(-difference)+" cheaper per 1,000 operating hours." : "The simplified strategies have equal expected cost at these assumptions."}
          <p className="mt-2 text-slate-300">This is an analytical comparison, not a real-world maintenance recommendation. Condition monitoring, downtime, safety consequences, uncertainty and spare-part constraints are not priced into the model.</p>
        </div>
      </div>
    </section>
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-2xl font-black">Inspect the raw evidence</h2><p className="mt-2 text-sm text-slate-600">Each record contains a fictional operating age and whether the failure was observed or the component was still operating at last inspection.</p></div><button type="button" onClick={download} className="rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white hover:bg-orange-800">Download synthetic CSV</button></div>
      <div className="mt-6 overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b-2 border-slate-200 text-slate-500"><tr><th className="p-3">Component</th><th className="p-3">Observed age</th><th className="p-3">Event</th></tr></thead><tbody>{observations.slice(0,12).map(o=><tr key={o.id} className="border-b border-slate-100"><td className="p-3 font-mono">{o.id}</td><td className="p-3">{number(o.hours)} h</td><td className="p-3">{o.status}</td></tr>)}</tbody></table></div>
      <p className="mt-4 text-xs text-slate-500">Showing 12 of 48 records; the CSV contains all observations. Data are generated deterministically with a fixed seed for reproducibility.</p>
    </section>
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-slate-950 p-7 text-slate-200"><h2 className="text-xl font-black text-white">Calculation method</h2><p className="mt-4 text-sm leading-relaxed">Failed observations contribute a Weibull density term; right-censored observations contribute survival probability. β is estimated by profile maximum likelihood and η from all observed ages. The expected fixed-age replacement cost is [CₚS(T) + C𝒻(1−S(T))] / ∫₀ᵀ S(t)dt. Cost rates here are shown per 1,000 operating hours.</p><p className="mt-3 text-xs text-slate-400">Assumes independent identical component lives, perfect replacement, two mutually exclusive costs and no competing risks. These assumptions must be checked on real equipment.</p></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-black">Engineering judgement</h2><p className="mt-4 text-sm leading-relaxed text-slate-700">{beta>1.1 ? "An increasing model hazard is consistent with wear-out, but it does not prove that an age-based intervention is economically or practically optimal." : beta<0.9 ? "A decreasing model hazard suggests an early-life failure mechanism; replacing components by age can reinforce rather than solve the problem." : "Near-constant model hazard gives little direct evidence that age-based replacement alone will reduce failures."}</p><p className="mt-3 text-sm leading-relaxed text-slate-700">I would also investigate operating conditions, actual failure modes, detection lead time, asset criticality, maintenance access, right-censoring quality and the consequences of missed failures before specifying a task interval.</p></div>
    </section>
  </div>;
}
