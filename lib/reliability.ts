/** Fictional data and educational models. No employer records or calibrated asset recommendations. */
export type Observation = { id: string; hours: number; failed: boolean };
export type WeibullFit = {
  beta: number;
  eta: number;
  failures: number;
  suspended: number;
};
export const observations: Observation[] = [
  {
    id: "DEMO-001",
    hours: 1150,
    failed: false,
  },
  {
    id: "DEMO-002",
    hours: 1650,
    failed: true,
  },
  {
    id: "DEMO-003",
    hours: 2230,
    failed: false,
  },
  {
    id: "DEMO-004",
    hours: 2510,
    failed: true,
  },
  {
    id: "DEMO-005",
    hours: 2780,
    failed: true,
  },
  {
    id: "DEMO-006",
    hours: 3100,
    failed: false,
  },
  {
    id: "DEMO-007",
    hours: 3480,
    failed: true,
  },
  {
    id: "DEMO-008",
    hours: 3820,
    failed: false,
  },
  {
    id: "DEMO-009",
    hours: 4160,
    failed: true,
  },
  {
    id: "DEMO-010",
    hours: 4450,
    failed: false,
  },
  {
    id: "DEMO-011",
    hours: 4730,
    failed: true,
  },
  {
    id: "DEMO-012",
    hours: 5150,
    failed: true,
  },
  {
    id: "DEMO-013",
    hours: 5420,
    failed: false,
  },
  {
    id: "DEMO-014",
    hours: 5710,
    failed: true,
  },
  {
    id: "DEMO-015",
    hours: 6190,
    failed: false,
  },
  {
    id: "DEMO-016",
    hours: 6550,
    failed: true,
  },
  {
    id: "DEMO-017",
    hours: 6910,
    failed: true,
  },
  {
    id: "DEMO-018",
    hours: 7300,
    failed: false,
  },
  {
    id: "DEMO-019",
    hours: 7580,
    failed: true,
  },
  {
    id: "DEMO-020",
    hours: 8090,
    failed: false,
  },
  {
    id: "DEMO-021",
    hours: 8410,
    failed: true,
  },
  {
    id: "DEMO-022",
    hours: 8890,
    failed: false,
  },
  {
    id: "DEMO-023",
    hours: 9140,
    failed: true,
  },
  {
    id: "DEMO-024",
    hours: 9900,
    failed: false,
  },
];

export function fitWeibull(rows: Observation[]): WeibullFit {
  if (
    rows.length < 2 ||
    rows.some((r) => !Number.isFinite(r.hours) || r.hours <= 0)
  )
    throw new Error(
      "Positive finite ages and at least two observations are required.",
    );
  const failures = rows.filter((r) => r.failed);
  if (failures.length < 2)
    throw new Error(
      "At least two failures are required for this demonstration.",
    );
  const logs = rows.map((r) => Math.log(r.hours));
  const failureMean =
    failures.reduce((s, r) => s + Math.log(r.hours), 0) / failures.length;
  // Profile-likelihood score, using log-sum-exp for numerical stability.
  const score = (beta: number) => {
    const max = Math.max(...logs) * beta;
    const weights = logs.map((t) => Math.exp(beta * t - max));
    return (
      1 / beta +
      failureMean -
      weights.reduce((s, w, i) => s + w * logs[i], 0) /
        weights.reduce((s, w) => s + w, 0)
    );
  };
  let low = 0.02,
    high = 4;
  while (score(high) > 0 && high < 128) high *= 2;
  if (score(low) <= 0 || score(high) >= 0)
    throw new Error(
      "No finite shape estimate within the demonstration bounds.",
    );
  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    if (score(mid) > 0) low = mid;
    else high = mid;
  }
  const beta = (low + high) / 2;
  const max = Math.max(...logs) * beta;
  const logSum =
    max + Math.log(logs.reduce((s, t) => s + Math.exp(beta * t - max), 0));
  const eta = Math.exp((logSum - Math.log(failures.length)) / beta);
  return {
    beta,
    eta,
    failures: failures.length,
    suspended: rows.length - failures.length,
  };
}
export const survival = (
  hours: number,
  fit: Pick<WeibullFit, "beta" | "eta">,
) => Math.exp(-Math.pow(Math.max(0, hours) / fit.eta, fit.beta));
export const quantileLife = (probability: number, fit: WeibullFit) =>
  fit.eta * Math.pow(-Math.log(1 - probability), 1 / fit.beta);
export function gamma(z: number): number {
  const p = [
    0.9999999999998099, 676.5203681218851, -1259.1392167224028,
    771.3234287776531, -176.6150291621406, 12.5073432786869,
    -0.13857109526572012, 9.984369578019572e-6, 1.5056327351493116e-7,
  ];
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
  z -= 1;
  let a = p[0];
  for (let i = 1; i < p.length; i++) a += p[i] / (z + i);
  const t = z + 7.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * a;
}
export function cycleHours(age: number, fit: WeibullFit, intervals = 800) {
  if (age <= 0 || intervals < 2 || intervals % 2)
    throw new Error("Positive age and an even integration count are required.");
  const h = age / intervals;
  let total = survival(0, fit) + survival(age, fit);
  for (let i = 1; i < intervals; i++)
    total += (i % 2 ? 4 : 2) * survival(i * h, fit);
  return (h * total) / 3;
}
export function costRate(
  age: number,
  planned: number,
  corrective: number,
  fit: WeibullFit,
) {
  const s = survival(age, fit);
  return (1000 * (planned * s + corrective * (1 - s))) / cycleHours(age, fit);
}
export const reactiveRate = (corrective: number, fit: WeibullFit) =>
  (1000 * corrective) / (fit.eta * gamma(1 + 1 / fit.beta));
export function bestAge(planned: number, corrective: number, fit: WeibullFit) {
  let best = { age: 500, rate: Infinity };
  for (let age = 500; age <= 15000; age += 250) {
    const rate = costRate(age, planned, corrective, fit);
    if (rate < best.rate) best = { age, rate };
  }
  return best;
}
export function percentile(values: number[], fraction: number) {
  const sorted = [...values].sort((a, b) => a - b);
  const at = (sorted.length - 1) * fraction;
  const lo = Math.floor(at);
  return sorted[lo] + (sorted[Math.ceil(at)] - sorted[lo]) * (at - lo);
}
export function bootstrapFits(rows: Observation[], count = 250): WeibullFit[] {
  // Fixed seed makes the public illustration reproducible across server and browser.
  let seed = 20261101;
  const random = () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const fits: WeibullFit[] = [];
  for (let sample = 0; sample < count; sample++) {
    const resampled = Array.from(
      { length: rows.length },
      () => rows[Math.floor(random() * rows.length)],
    );
    try {
      fits.push(fitWeibull(resampled));
    } catch {
      /* Degenerate resamples are excluded and the valid count is reported. */
    }
  }
  return fits;
}
export function kaplanMeier(rows: Observation[]) {
  let atRisk = rows.length,
    probability = 1;
  const result = [{ hours: 0, survival: 1 }];
  for (const age of [...new Set(rows.map((r) => r.hours))].sort(
    (a, b) => a - b,
  )) {
    const group = rows.filter((r) => r.hours === age),
      failed = group.filter((r) => r.failed).length;
    result.push({ hours: age, survival: probability });
    probability *= 1 - failed / atRisk;
    result.push({ hours: age, survival: probability });
    atRisk -= group.length;
  }
  return result;
}
