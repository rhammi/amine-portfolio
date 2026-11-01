"use client";
import Link from "next/link";
import { useState } from "react";
import { observations, fitWeibull, survival } from "@/lib/reliability";
const fit = fitWeibull(observations);
const curve = Array.from(
  { length: 81 },
  (_, i) => `${30 + i * 5},${158 - 130 * survival((i * 15000) / 80, fit)}`,
).join(" ");
export default function LabPreview() {
  const [age, setAge] = useState(5250);
  return (
    <section
      className="grid min-w-0 gap-8 rounded-xl bg-[#14243a] p-6 text-white sm:p-9 lg:grid-cols-2"
      aria-labelledby="lab-preview-title"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[.14em] text-orange-200">
          02 / Interactive engineering investigation
        </p>
        <h2
          id="lab-preview-title"
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Challenge the maintenance decision.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          A fictional component population. A right-censored Weibull fit. Change
          the replacement age, then open the lab to question the costs,
          uncertainty and assumptions.
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-orange-200">
          Synthetic data / No employer records
        </p>
        <Link
          href="/lab/reliability"
          className="journal-button journal-button-accent mt-6"
        >
          Enter the Reliability Evidence Lab ↗
        </Link>
      </div>
      <div className="min-w-0 rounded-lg border border-white/20 bg-white/[.04] p-4 sm:p-5">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-[11px] text-slate-300">
          <span>MODEL SURVIVAL / S(t)</span>
          <output htmlFor="preview-age" className="text-orange-200">
            {Math.round(100 * survival(age, fit))}% at{" "}
            {age.toLocaleString("en-GB")} h
          </output>
        </div>
        <svg
          viewBox="0 0 460 190"
          role="img"
          aria-label="Fictional fitted survival curve with selected operating age"
          className="mt-2 w-full"
        >
          {[28, 93, 158].map((y) => (
            <line key={y} x1="30" x2="430" y1={y} y2={y} stroke="#ffffff25" />
          ))}
          <polyline
            points={curve}
            fill="none"
            stroke="#fdba74"
            strokeWidth="3"
          />
          <line
            x1={30 + (400 * age) / 15000}
            x2={30 + (400 * age) / 15000}
            y1="28"
            y2="158"
            stroke="#ffffff"
            strokeDasharray="4 4"
          />
          <text x="30" y="181" fill="#cbd5e1" fontSize="11">
            0 h
          </text>
          <text x="430" y="181" fill="#cbd5e1" fontSize="11" textAnchor="end">
            15,000 h
          </text>
        </svg>
        <label htmlFor="preview-age" className="text-xs text-slate-200">
          Explore the operating age
        </label>
        <input
          id="preview-age"
          type="range"
          min="1000"
          max="15000"
          step="250"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="mt-3 min-h-6 w-full accent-orange-300"
        />
        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
          A modelled probability, not a measured fleet result.
        </p>
      </div>
    </section>
  );
}
