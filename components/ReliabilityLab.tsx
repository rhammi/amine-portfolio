"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
type Point = { t:number; cost:number };
type Event = { id:string; hours:number; type:"Failure"|"Right-censored"; cutoff:number };

const fmt=(n:number)=>Math.round(n).toLocaleString("en-GB");
const gbp=(n:number)=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",maximumFractionDigits:0}).format(n);
const S=(t:number,b:number,e:number)=>Math.exp(-Math.pow(t/e,b));

function meanCycle(t:number,b:number,e:number) {
  const N=96,h=t/N;
  let sum=S(0,b,e)+S(t,b,e);
  for(let i=1;i<N;i++) sum+=(i%2?4:2)*S(i*h,b,e);
  return sum*h/3;
}
function rate(t:number,b:number,e:number,cp:number,cf:number) {
  const surv=S(t,b,e);
  return 1000*(cp*surv+cf*(1-surv))/meanCycle(t,b,e);
}
function gamma(z:number):number {
  const p=[0.99999999999980993,676.5203681218851,-1259.1392167224028,771.32342877765313,-176.6150291621406,12.507343278686905,-0.13857109526572012,9.984369578019572e-6,1.5056327351493116e-7];
  if(z<0.5)return Math.PI/(Math.sin(Math.PI*z)*gamma(1-z));
  const n=z-1;let x=p[0];
  for(let i=1;i<p.length;i++)x+=p[i]/(n+i);
  const t=n+7.5;
  return Math.sqrt(2*Math.PI)*Math.pow(t,n+0.5)*Math.exp(-t)*x;
}
function makeHistory(b:number,e:number):Event[] {
  let seed=20271017;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return (seed+.5)/4294967296;};
  return Array.from({length:48},(_,i)=>{
    const trueLife=e*Math.pow(-Math.log(1-random()),1/b);
    const cutoff=1700+Math.round(7500*random());
    const failed=trueLife<=cutoff;
    return {id:"SIM-"+String(i+1).padStart(3,"0"),hours:Math.round(failed?trueLife:cutoff),type:failed?"Failure":"Right-censored",cutoff};
  });
}
function Control({id,title,value,set,min,max,step,unit}:{
  id:string;title:string;value:number;set:(n:number)=>void;min:number;max:number;step:number;unit?:string;
}) {
 const show=(n:number)=>unit==="£"?gbp(n):n.toLocaleString("en-GB",{maximumFractionDigits:1})+(unit?" "+unit:"");
 return <div className="rounded-2xl border border-slate-200 bg-white p-5">
   <div className="flex justify-between gap-3 text-sm"><label htmlFor={id} className="font-bold text-slate-950">{title}</label><output htmlFor={id} className="font-mono font-bold text-orange-700">{show(value)}</output></div>
   <input id={id} type="range" className="mt-5 w-full accent-orange-700" value={value} min={min} max={max} step={step} onChange={event=>set(Number(event.target.value))}/>
   <div className="mt-2 flex justify-between text-xs text-slate-500"><span>{show(min)}</span><span>{show(max)}</span></div>
 </div>;
}
export default function ReliabilityLab() {
 const [beta,setBeta]=useState(2.2),[eta,setEta]=useState(5500);
 const [cp,setCp]=useState(2800),[cf,setCf]=useState(14500),[age,setAge]=useState(3500);
 const [showRecords,setShowRecords]=useState(false);
 const curve=useMemo<Point[]>(()=>Array.from({length:116},(_,i)=>{
   const t=500+i*100;return {t,cost:rate(t,beta,eta,cp,cf)};
 }),[beta,eta,cp,cf]);
 const best=curve.reduce((a,p)=>p.cost<a.cost?p:a);
 const selected=rate(age,beta,eta,cp,cf);
 const failureOnly=1000*cf/(eta*gamma(1+1/beta));
 const rec=best.cost<failureOnly?"Age-based policy: lowest tested cost at "+fmt(best.t)+" hours.":"Failure-only has a lower modelled cost than any tested age-based interval.";
 const low=Math.min(...curve.map(p=>p.cost),failureOnly)*0.9;
 const high=Math.max(...curve.map(p=>p.cost),failureOnly)*1.06;
 const x=(t:number)=>64+(t-500)/11500*700;
 const y=(cost:number)=>210-(Math.log(cost)-Math.log(low))/(Math.log(high)-Math.log(low))*170;
 const shape=curve.map(p=>x(p.t)+","+y(p.cost)).join(" ");
 const records=useMemo(()=>makeHistory(beta,eta),[beta,eta]);
 const failures=records.filter(x=>x.type==="Failure").length;
 function download(){
  const csv=["asset_id,observed_hours,event_type,administrative_cutoff_hours,data_origin",...records.map(r=>[r.id,r.hours,r.type,r.cutoff,"SYNTHETIC"].join(","))].join("\n");
  const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
  const a=document.createElement("a");a.href=url;a.download="synthetic_reliability_life_data.csv";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
 }
 return <>
  <header className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
    <Link href="/for/reliability" className="text-sm font-bold text-slate-300">← Reliability recruitment pathway</Link>
    <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">Interactive engineering study · Synthetic data only</p>
    <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">Reliability Evidence Lab</h1>
    <p className="mt-6 max-w-4xl text-xl leading-relaxed text-slate-300">A maintenance interval is only useful when the failure definition, assumptions and economics can be defended. Change the model and inspect the consequences.</p>
    <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold">{["Weibull survival","Age replacement","Right-censoring","Reproducible CSV"].map(t=><span key={t} className="rounded-full border border-white/30 px-3 py-2">{t}</span>)}</div>
  </div></header>
  <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-slate-800"><strong>Evidence boundary:</strong> All records and amounts below are fictional. The model parameters are chosen by the visitor, not fitted to an employer dataset. This is not a validated predictive model or a maintenance instruction.</div>
    <section className="mt-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">01 / State the assumptions</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950">Describe failure behaviour before proposing an interval.</h2>
      <p className="mt-4 max-w-3xl text-slate-700">Weibull shape β controls the hazard trend; characteristic life η sets the time scale. Costs must reflect parts, labour, downtime and relevant consequences in a real study.</p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <Control id="shape" title="Weibull shape β" value={beta} set={setBeta} min={0.7} max={3.5} step={0.1}/>
        <Control id="scale" title="Characteristic life η" value={eta} set={setEta} min={2500} max={9000} step={250} unit="h"/>
        <Control id="planned" title="Planned replacement cost" value={cp} set={setCp} min={500} max={7000} step={250} unit="£"/>
        <Control id="reactive" title="Failure replacement cost" value={cf} set={setCf} min={3500} max={25000} step={500} unit="£"/>
      </div>
      <p className="mt-5 text-sm text-slate-700"><strong>Interpretation:</strong> {beta>1.05?"Increasing hazard is consistent with wear-out, though not proof of a particular failure mode.":"The hazard is nearly constant or decreasing; age-based preventive replacement may be unjustified."}</p>
    </section>
    <section className="mt-14 border-t border-slate-300 pt-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">02 / Test an intervention</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950">What if the component is changed at a different age?</h2>
      <div className="mt-7"><Control id="interval" title="Chosen replacement age" value={age} set={setAge} min={500} max={12000} step={250} unit="h"/></div>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Survival to chosen age",(100*S(age,beta,eta)).toFixed(1)+"%"],
          ["Chosen policy / 1,000 h",gbp(selected)],
          ["Lowest tested age-policy / 1,000 h",gbp(best.cost)],
          ["Failure-only / 1,000 h",gbp(failureOnly)]
        ].map(([label,value])=><div key={label} className="rounded-2xl border border-slate-200 bg-white p-5"><dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</dt><dd className="mt-3 text-2xl font-black text-slate-950">{value}</dd></div>)}
      </dl>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
        <h3 className="text-xl font-black text-slate-950">Expected maintenance cost per 1,000 operating hours</h3>
        <p className="mt-2 text-xs text-slate-600">Logarithmic cost axis; dashed horizontal line = run-to-failure comparison; vertical marker = your selected policy.</p>
        <svg role="img" aria-label="Maintenance cost by replacement interval with failure-only comparison" viewBox="0 0 810 260" className="mt-5 w-full">
          <rect x="64" y="40" width="700" height="170" fill="#f8fafc"/>
          {[0,0.25,0.5,0.75,1].map((f,i)=><g key={i}><line x1="64" x2="764" y1={210-f*170} y2={210-f*170} stroke="#cbd5e1"/><text x="56" y={214-f*170} textAnchor="end" fontSize="11" fill="#475569">{gbp(Math.exp(Math.log(low)+(Math.log(high)-Math.log(low))*f))}</text></g>)}
          <polyline points={shape} fill="none" stroke="#c2410c" strokeWidth="3"/>
          <line x1="64" x2="764" y1={y(failureOnly)} y2={y(failureOnly)} stroke="#334155" strokeWidth="2" strokeDasharray="6 5"/>
          <line x1={x(age)} x2={x(age)} y1="40" y2="210" stroke="#0f766e" strokeDasharray="4 4" strokeWidth="2"/>
          <circle cx={x(age)} cy={y(selected)} r="6" fill="#0f766e" stroke="white" strokeWidth="2"/>
          <circle cx={x(best.t)} cy={y(best.cost)} r="5" fill="#c2410c" stroke="white" strokeWidth="2"/>
          {[500,3500,6500,9500,12000].map(t=><text key={t} x={x(t)} y="230" textAnchor="middle" fontSize="12" fill="#475569">{fmt(t)}</text>)}
          <text x="415" y="251" textAnchor="middle" fontSize="12" fill="#475569">Chosen age (operating hours)</text>
        </svg>
        <p className="mt-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-800"><strong>Result:</strong> {rec} The displayed search is limited to 500–12,000 hours. Modelled minima are not safe maintenance recommendations.</p>
      </div>
    </section>
    <section className="mt-14 border-t border-slate-300 pt-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">03 / Audit the observations</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950">A change-out is not necessarily a failure.</h2>
      <p className="mt-4 max-w-3xl text-slate-700">Right-censored records describe equipment that did not exhibit the studied failure before observation ended. Treating every replacement as a breakdown biases component-life analysis.</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        {[["Fictional assets",48],["Observed failures",failures],["Right-censored records",48-failures]].map(([label,value])=><div key={label} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase text-slate-500">{label}</p><p className="mt-2 text-3xl font-black text-slate-950">{value}</p></div>)}
      </div>
      <p className="mt-4 max-w-3xl text-sm text-slate-600">The 48 seeded example observations are generated using your current β and η values and random administrative cut-offs. They illustrate right-censoring; the parameters are <strong>not</strong> fitted to these records.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={download} className="rounded-full bg-orange-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-800">Download synthetic CSV</button>
        <button type="button" onClick={()=>setShowRecords(!showRecords)} aria-expanded={showRecords} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950">{showRecords?"Hide":"Inspect"} sample records</button>
      </div>
      {showRecords?<div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="min-w-full text-sm"><thead><tr className="bg-slate-100 text-left"><th className="p-3">Asset</th><th className="p-3">Observed hours</th><th className="p-3">Classification</th></tr></thead><tbody>{records.slice(0,12).map(r=><tr key={r.id} className="border-t border-slate-200"><td className="p-3 font-mono">{r.id}</td><td className="p-3">{fmt(r.hours)}</td><td className="p-3">{r.type}</td></tr>)}</tbody></table><p className="border-t border-slate-200 p-4 text-xs text-slate-600">First 12 of 48 rows. Download CSV for the full synthetic sample.</p></div>:null}
    </section>
    <section className="mt-14 grid gap-7 border-t border-slate-300 pt-12 lg:grid-cols-2">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">04 / Explain the model</p>
        <h2 className="mt-3 text-3xl font-black text-slate-950">Show the method and the limits.</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">A renewal-reward age-replacement model assumes independent cycles, as-good-as-new replacement and constant costs. Expected cycle duration is the area under the survival curve up to the replacement age.</p>
        <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 font-mono text-sm text-slate-800">
          <p>S(t) = exp[−(t / η)^β]</p><p>E[cost] = Cp × S(T) + Cf × (1 − S(T))</p><p>E[hours] = ∫₀ᵀ S(t) dt</p><p>£ / 1,000 h = 1,000 × E[cost] / E[hours]</p>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-600">Expected cycle duration is integrated using Simpson's rule. Run-to-failure uses mean Weibull life ηΓ(1+1/β). No fitted data, confidence intervals, avoided failures or realised savings are claimed.</p>
      </div>
      <div className="rounded-3xl bg-slate-950 p-7 text-white">
        <h3 className="text-2xl font-black">What the curve cannot prove</h3>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
          <li>That real equipment follows one Weibull population or a single physical failure mechanism.</li>
          <li>That every planned intervention restores the system to as-good-as-new condition.</li>
          <li>That failure costs include all safety, production, access and environmental consequences.</li>
          <li>That a mathematically low-cost age interval is physically achievable or acceptable.</li>
          <li>That condition monitoring, inspections or design changes would not be better alternatives.</li>
        </ul>
        <p className="mt-6 border-t border-white/20 pt-5 text-sm text-slate-300">A real decision needs verified failure definitions, censoring rules, quality checks, uncertainty analysis and an engineering/safety review.</p>
      </div>
    </section>
    <section className="mt-16 rounded-3xl bg-orange-700 p-8 text-white sm:p-11">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-100">Who built this demonstration?</p>
      <h2 className="mt-4 text-3xl font-black">Challenge my assumptions.</h2>
      <p className="mt-4 max-w-3xl text-orange-50">I am a Mechanical Engineering (Mechatronics) BEng candidate graduating April 2027. My industrial placements taught me that an elegant calculation can still be wrong when the equipment context or maintenance records are misunderstood. I welcome technical feedback and conversations about early-career engineering opportunities.</p>
      <div className="mt-7 flex flex-wrap gap-3"><a href="mailto:aminecana@hotmail.com?subject=Reliability%20Evidence%20Lab%20%E2%80%94%20technical%20discussion" className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950">Discuss the model</a><Link href="/for/reliability" className="rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white">See my reliability work</Link></div>
    </section>
  </div>
 </>;
}
