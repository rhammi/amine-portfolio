/** Educational reliability model. All inputs are synthetic; no employer data is used. */
export type ReliabilityInputs = {
  shape: number; // beta
  scaleHours: number; // eta
  plannedCost: number;
  failureCost: number;
};

export type PolicyResult = {
  intervalHours: number;
  survivalAtInterval: number;
  probabilityOfFailure: number;
  expectedCycleHours: number;
  expectedCycleCost: number;
  costPer1000Hours: number;
};

export const survival = (hours: number, shape: number, scaleHours: number): number =>
  Math.exp(-Math.pow(Math.max(0, hours) / scaleHours, shape));

export function hazardPer1000Hours(hours: number, shape: number, scaleHours: number): number {
  if (hours <= 0) return 0;
  return (shape / scaleHours) * Math.pow(hours / scaleHours, shape - 1) * 1000;
}

/** E[min(lifetime,T)] = integral_0^T S(t) dt. Trapezoidal numerical quadrature. */
export function expectedTimeToReplacement(limitHours: number, shape: number, scaleHours: number, steps = 600): number {
  const step = limitHours / steps;
  let total = (1 + survival(limitHours, shape, scaleHours)) / 2;
  for (let i = 1; i < steps; i++) total += survival(i * step, shape, scaleHours);
  return total * step;
}

/** Cost per renewal cycle / expected cycle length. Assumes replacement restores as-good-as-new condition. */
export function ageReplacementPolicy(intervalHours: number, input: ReliabilityInputs): PolicyResult {
  const surv = survival(intervalHours, input.shape, input.scaleHours);
  const fail = 1 - surv;
  const expectedCycleHours = expectedTimeToReplacement(intervalHours, input.shape, input.scaleHours);
  const expectedCycleCost = input.plannedCost * surv + input.failureCost * fail;
  return {
    intervalHours,
    survivalAtInterval: surv,
    probabilityOfFailure: fail,
    expectedCycleHours,
    expectedCycleCost,
    costPer1000Hours: expectedCycleCost / expectedCycleHours * 1000,
  };
}

/** Reactive-only policy: no age-based replacement; integrate the survival tail. */
export function reactiveOnlyCostPer1000Hours(input: ReliabilityInputs): number {
  // At shape >= 0.8 the remaining survival mass past 30*eta is negligible for this illustrative model.
  const expectedLifeHours = expectedTimeToReplacement(30 * input.scaleHours, input.shape, input.scaleHours, 3000);
  return (input.failureCost / expectedLifeHours) * 1000;
}

export function bestAgeReplacement(input: ReliabilityInputs): PolicyResult {
  let best = ageReplacementPolicy(500, input);
  for (let interval = 750; interval <= 12000; interval += 250) {
    const result = ageReplacementPolicy(interval, input);
    if (result.costPer1000Hours < best.costPer1000Hours) best = result;
  }
  return best;
}
