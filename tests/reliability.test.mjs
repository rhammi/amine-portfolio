import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import {
  observations,
  fitWeibull,
  survival,
  quantileLife,
  cycleHours,
  costRate,
  reactiveRate,
  bestAge,
  bootstrapFits,
  percentile,
  kaplanMeier,
} from "../lib/reliability.ts";
const reference = JSON.parse(
  readFileSync(
    new URL("./independent-reference.json", import.meta.url),
    "utf8",
  ),
);
const fitted = fitWeibull(observations);
const near = (a, b, tol = 1e-5) =>
  assert.ok(Math.abs(a - b) < tol, `${a} differs from ${b}`);
test("profile-score MLE agrees with independent full-likelihood SciPy optimisation and adaptive quadrature", () => {
  near(fitted.beta, reference.beta, 1e-6);
  near(fitted.eta, reference.eta, 0.005);
  near(costRate(5250, 4000, 16000, fitted), reference.age5250, 0.005);
  near(reactiveRate(16000, fitted), reference.reactive, 0.005);
  assert.equal(bestAge(4000, 16000, fitted).age, reference.bestAge);
});
test("downloadable fictional CSV is the exact population used in the browser", () => {
  const csv = readFileSync(
    new URL("../public/lab/synthetic-component-history.csv", import.meta.url),
    "utf8",
  )
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [id, hours, status] = line.split(",");
      return { id, hours: Number(hours), failed: status === "failure" };
    });
  assert.deepEqual(observations, csv);
  assert.equal(fitted.failures, 13);
  assert.equal(fitted.suspended, 11);
});
test("right censoring changes the fit; invalid histories do not produce a false result", () => {
  assert.ok(
    Math.abs(
      fitted.eta -
        fitWeibull(observations.map((r) => ({ ...r, failed: true }))).eta,
    ) > 1000,
  );
  assert.throws(() =>
    fitWeibull(observations.map((r) => ({ ...r, failed: false }))),
  );
  assert.throws(() =>
    fitWeibull([
      { id: "x", hours: 0, failed: true },
      { id: "y", hours: 2, failed: true },
    ]),
  );
});
test("survival and B10/B50 have the expected probability interpretation", () => {
  assert.equal(survival(0, fitted), 1);
  near(survival(quantileLife(0.1, fitted), fitted), 0.9);
  near(survival(quantileLife(0.5, fitted), fitted), 0.5);
  let previous = 1;
  for (let t = 0; t < 50000; t += 100) {
    const s = survival(t, fitted);
    assert.ok(s <= previous && s >= 0);
    previous = s;
  }
});
test("exponential limiting case agrees with closed-form cycle time and does not reward scheduled replacement", () => {
  const exponential = { beta: 1, eta: 8000, failures: 13, suspended: 11 };
  near(
    cycleHours(5250, exponential),
    8000 * (1 - Math.exp(-5250 / 8000)),
    1e-6,
  );
  assert.ok(
    costRate(5250, 4000, 16000, exponential) > reactiveRate(16000, exponential),
  );
  near(
    costRate(150000, 4000, 16000, exponential),
    reactiveRate(16000, exponential),
    0.001,
  );
});
test("paired bootstrap is deterministic, finite and reports meaningful ordered bands", () => {
  const fits = bootstrapFits(observations);
  assert.deepEqual(fits, bootstrapFits(observations));
  assert.ok(fits.length > 240);
  assert.ok(
    fits.every(
      (f) =>
        Number.isFinite(f.beta) &&
        f.beta > 0 &&
        Number.isFinite(f.eta) &&
        f.eta > 0,
    ),
  );
  const probabilities = fits.map((f) => survival(5250, f));
  assert.ok(percentile(probabilities, 0.05) < percentile(probabilities, 0.95));
});
test("Kaplan–Meier handles tied failures and censoring with the full risk set", () => {
  const points = kaplanMeier([
    { id: "a", hours: 10, failed: true },
    { id: "b", hours: 10, failed: true },
    { id: "c", hours: 10, failed: false },
    { id: "d", hours: 20, failed: true },
  ]);
  assert.deepEqual(points, [
    { hours: 0, survival: 1 },
    { hours: 10, survival: 1 },
    { hours: 10, survival: 0.5 },
    { hours: 20, survival: 0.5 },
    { hours: 20, survival: 0 },
  ]);
});
test("public Python reproduction independently matches displayed fit and economics", () => {
  const output = execFileSync("python", ["public/lab/reproduce-weibull.py"], {
    encoding: "utf8",
  });
  assert.ok(output.includes("beta: " + fitted.beta.toFixed(4)));
  assert.ok(output.includes("eta: " + fitted.eta.toFixed(1)));
  assert.ok(
    output.includes("GBP " + costRate(5250, 4000, 16000, fitted).toFixed(2)),
  );
});
