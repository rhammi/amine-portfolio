// All records generated here are fictional demonstrations, not employer data.
export type Observation = { id: string; hours: number; status: "Failure" | "Right-censored" };
export type Parameters = { beta: number; eta: number };
export type Decision = { rate: number; survival: number; cycleHours: number; expectedCost: number };

export function syntheticObservations(): Observation[] {
  let seed = 246813579;
  const next = () => { seed = (1664525 * seed + 1013904223) >>> 0; return (seed + 0.5) / 4294967296; };
  return Array.from({ length: 48 }, (_, i) => {
    const lifetime = 6500 * Math.pow(-Math.log(1 - next()), 1 / 1.85);
    const inspection = 2500 + 8500 * next();
    return {
      id: "DEMO-" + String(i + 1).padStart(3, "0"),
      hours: Math.max(1, Math.round(Math.min(lifetime, inspection))),
      status: lifetime <= inspection ? "Failure" : "Right-censored"
    };
  });
}
export const observations = syntheticObservations();

export function fitWeibull(data: Observation[]): Parameters | null {
  const failures = data.filter(d => d.status === "Failure");
  if (failures.length < 2 || data.length < 3) return null;
  const logFailures = failures.reduce((sum, d) => sum + Math.log(d.hours), 0) / failures.length;
  const score = (beta: number) => {
    let weights = 0, weightedLogs = 0;
    for (const record of data) {
      const w = Math.pow(record.hours, beta);
      weights += w; weightedLogs += w * Math.log(record.hours);
    }
    return 1 / beta + logFailures - weightedLogs / weights;
  };
  let lo = 0.2, hi = 8;
  for (let i = 0; i < 90; i++) {
    const mid = (lo + hi) / 2;
    if (score(mid) > 0) lo = mid; else hi = mid;
  }
  const beta = (lo + hi) / 2;
  const eta = Math.pow(data.reduce((s, d) => s + Math.pow(d.hours, beta), 0) / failures.length, 1 / beta);
  return { beta, eta };
}

export const survival = (age: number, beta: number, eta: number) => Math.exp(-Math.pow(age / eta, beta));
export const hazardPer1000 = (age: number, beta: number, eta: number) => (beta / eta) * Math.pow(Math.max(1, age) / eta, beta - 1) * 1000;

// Lanczos gamma approximation: z used here is always > 1.
export function gamma(z: number): number {
  const coeff = [0.9999999999998099,676.5203681218851,-1259.139216722403,771.3234287776531,-176.6150291621406,12.507343278686905,-0.13857109526572012,9.984369578019572e-6,1.5056327351493116e-7];
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1-z));
  z -= 1;
  let x=coeff[0];
  for(let i=1; i<coeff.length; i++) x += coeff[i] / (z+i);
  const t=z+7.5;
  return Math.sqrt(2*Math.PI)*Math.pow(t,z+0.5)*Math.exp(-t)*x;
}

export function expectedMinLifetime(interval: number, beta: number, eta: number): number {
  const steps=320, h=interval/steps;
  let total=survival(0,beta,eta)+survival(interval,beta,eta);
  for(let i=1;i<steps;i++) total += (i%2?4:2)*survival(i*h,beta,eta);
  return total*h/3;
}
export function ageReplacement(interval:number, beta:number, eta:number, plannedCost:number, failureCost:number):Decision {
  const survive=survival(interval,beta,eta);
  const expectedCost=plannedCost*survive + failureCost*(1-survive);
  const cycleHours=expectedMinLifetime(interval,beta,eta);
  return {rate:expectedCost/cycleHours*1000, survival:survive, cycleHours, expectedCost};
}
export function runToFailure(beta:number,eta:number, failureCost:number) {
  return failureCost/(eta*gamma(1+1/beta))*1000;
}
export function sampleCsv(data:Observation[]):string {
  return ["component_id,observed_hours,event_status,data_origin",...data.map(d=>[d.id,d.hours,d.status==="Failure"?"failure":"right_censored","synthetic"].join(","))].join("\n")+"\n";
}
