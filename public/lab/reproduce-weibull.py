#!/usr/bin/env python3
"""Reproduce the Reliability Evidence Lab with fictional component observations.

Only Python's standard library is required. This demonstration is not an
analysis of actual industrial equipment and does not validate a Weibull fit.

Run from a directory containing synthetic-component-history.csv:
  python reproduce-weibull.py
"""
from __future__ import annotations

import csv
import math
from pathlib import Path

SOURCE = Path(__file__).with_name("synthetic-component-history.csv")
INTERVAL = 5250.0
PREVENTIVE_COST = 4000.0
CORRECTIVE_COST = 16000.0

def load_data(path: Path):
    with path.open(newline="", encoding="utf-8") as handle:
        return [(float(row["age_hours"]), row["event_status"] == "failure")
                for row in csv.DictReader(handle)]

def fit_weibull(rows):
    # Scaled units avoid large powers in the profile log-likelihood.
    t = [age / 1000.0 for age, _ in rows]
    f = [age / 1000.0 for age, failed in rows if failed]
    r = len(f)
    if r == 0:
        raise ValueError("At least one failure is needed for the MLE.")
    sum_failure_log = sum(math.log(x) for x in f)
    def profile(beta):
        sum_power = sum(x ** beta for x in t)
        eta_scaled = (sum_power / r) ** (1.0 / beta)
        return (r * math.log(beta) - r * beta * math.log(eta_scaled)
                + (beta - 1.0) * sum_failure_log - sum_power / eta_scaled ** beta)
    a, b = 0.4, 6.0
    ratio = (math.sqrt(5) - 1.0) / 2.0
    x1, x2 = b - ratio * (b-a), a + ratio * (b-a)
    for _ in range(95):
        if profile(x1) < profile(x2):
            a, x1 = x1, x2
            x2 = a + ratio * (b-a)
        else:
            b, x2 = x2, x1
            x1 = b - ratio * (b-a)
    beta = (a+b) / 2.0
    eta = 1000 * (sum(x ** beta for x in t) / r) ** (1.0 / beta)
    return beta, eta

def survival(t, beta, eta):
    return math.exp(-(max(t, 0) / eta) ** beta)

def cycle_hours(age, beta, eta, n=800):
    # Simpson quadrature: E[min(X,T)] = integral from 0 to T of S(t) dt.
    h = age / n
    total = survival(0, beta, eta) + survival(age, beta, eta)
    for i in range(1, n):
        total += (4 if i % 2 else 2) * survival(i*h, beta, eta)
    return total * h / 3

def rate(age, preventive_cost, corrective_cost, beta, eta):
    s = survival(age, beta, eta)
    return 1000 * (preventive_cost*s + corrective_cost*(1-s)) / cycle_hours(age, beta, eta)

def main():
    rows = load_data(SOURCE)
    beta, eta = fit_weibull(rows)
    mean = eta * math.gamma(1 + 1 / beta)
    base = 1000 * CORRECTIVE_COST / mean
    proposed = rate(INTERVAL, PREVENTIVE_COST, CORRECTIVE_COST, beta, eta)
    best = min(((rate(t, PREVENTIVE_COST, CORRECTIVE_COST, beta, eta), t)
                for t in range(500, 15001, 250)), key=lambda result: result[0])
    print("FICTIONAL DATA: NOT FOR AN OPERATING ASSET")
    print(f"Observations: {len(rows)}; failures: {sum(event for _,event in rows)}; censored: {sum(not event for _,event in rows)}")
    print(f"Weibull MLE beta: {beta:.4f}, eta: {eta:.1f} h")
    print(f"Model B10: {eta*(-math.log(.9))**(1/beta):.1f} h")
    print(f"Age replacement at {INTERVAL:.0f} h: GBP {proposed:.2f} / 1000 h")
    print(f"Run-to-failure: GBP {base:.2f} / 1000 h")
    print(f"Lowest tested age-policy cost: GBP {best[0]:.2f} / 1000 h at {best[1]} h")
    print("Point-estimate reproduction only. Browser adds paired-bootstrap bands and a Kaplan-Meier diagnostic. Both omit downtime, safety consequences and imperfect repair.")

if __name__ == "__main__":
    main()
