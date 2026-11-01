# Reliability Evidence Lab — model and disclosure

This component is an educational case study. It uses no employer equipment identifiers, work orders, costs, confidential reliability data, or proprietary strategies.

## Fictional observations
48 deterministic, generated component records. Latent failure times use a Weibull distribution with shape 1.85 and scale 6,500 h. Simulated last-observation inspections create right-censored records; the generation parameters are not presented as fitted results.

## Parameter estimation
The portfolio estimates Weibull shape and scale by maximum likelihood from observed failure ages and suspended/right-censored ages. For a given shape beta, eta^beta = sum(t_i^beta)/number_of_failures. The shape is found by solving the profile-score equation using bisection.

## Cost model
For planned replacement age T, Weibull survival S(T), planned cost Cp, corrective failure cost Cf:

Expected cycle cost = Cp*S(T) + Cf*(1-S(T)).
Expected cycle operating hours = integral from 0 to T of S(t) dt.
Rate = expected cost / expected hours; UI reports GBP per 1,000 operating hours.

Run-to-failure rate = Cf / E[life], where E[life] = eta * Gamma(1 + 1/beta).

The display contains neither a sensor-based condition-monitoring model nor a probability model for imperfect repairs. It assumes iid lives, correct failure/censoring classification, perfect replacements and no uncertainty in cost inputs.

## Interpretation and limitations
The results compare two simplified policies under fictional assumptions; they do not justify a real maintenance interval. Before making an industrial recommendation, validate physical failure modes, censoring mechanism, costs, detectability, maintenance access, safety consequences, competing risks and model uncertainty.

## Source and reviewer checks
- Implementation: lib/reliability-lab.ts
- Interactive client: components/lab/ReliabilityWorkbench.tsx
- Route: app/lab/reliability/page.tsx
- Test: node --experimental-strip-types --test tests/reliability-lab.test.mjs
- Dataset: download directly from the client; it is generated from the exact fixed-seed observations displayed by the site.

## Review and publication
The build is staged on a feature branch for review. Do not publish to the primary Netlify URL until Next.js type check/build and mobile/desktop QA pass. The richer portfolio branch is the correct starting point; main currently contains a different reduced version of the site.
