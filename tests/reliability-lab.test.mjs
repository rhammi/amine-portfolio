// Run on Node 22+ with: node --experimental-strip-types --test tests/reliability-lab.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { observations, fitWeibull, ageReplacement, runToFailure, survival, expectedMinLifetime, sampleCsv, gamma } from "../lib/reliability-lab.ts";

test("synthetic dataset is fixed, labeled, and has censored observations", () => {
  assert.equal(observations.length, 48);
  assert.equal(observations.filter(o => o.status === "Failure").length, 28);
  assert.equal(observations.filter(o => o.status === "Right-censored").length, 20);
  assert.ok(observations.every(o => o.id.startsWith("DEMO-") && o.hours > 0));
});
test("censored maximum likelihood fit is reproducible", () => {
  const params=fitWeibull(observations);
  assert.ok(params);
  assert.ok(Math.abs(params.beta-1.79658) < 0.01);
  assert.ok(Math.abs(params.eta-7501.2) < 10);
  assert.equal(fitWeibull(observations.filter(o => o.status === "Right-censored")),null);
});
test("survival and renewal reward maths behave at boundaries", () => {
  assert.equal(survival(0,1.8,7000),1);
  assert.ok(survival(8000,1.8,7000)<survival(3000,1.8,7000));
  assert.ok(Math.abs(gamma(2)-1)<1e-8);
  assert.ok(Math.abs(expectedMinLifetime(3000,1,6000)-6000*(1-Math.exp(-0.5)))<1);
});
test("age-based replacement cannot beat run-to-failure for a memoryless model", () => {
  const fixed=ageReplacement(4500,1,6000,3500,12000).rate;
  const baseline=runToFailure(1,6000,12000);
  assert.ok(fixed>baseline);
});
test("synthetic CSV contains no workplace identifiers",()=>{
  const csv=sampleCsv(observations);
  assert.equal(csv.trim().split("\n").length,49);
  assert.ok(csv.includes("right_censored"));
  assert.ok(!csv.toLowerCase().includes("imperial"));
});
