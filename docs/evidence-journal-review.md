# Engineering Evidence Journal — implementation and fresh review

1 November 2026. Direction: Concept A, with selected engineering interactions from Concept B.

## A. What the new inspection establishes

The starting point is `codex/portfolio-rebuild-2026-09-06` at `8ab8ca1`. This is newer than the deployed `88fcbeb4` snapshot and already integrates the recruiter routes and the 24-record, right-censored Reliability Evidence Lab. It preserves 13 case studies, original academic artefacts, four physical demonstration videos, the six-placement experience history, Lifesaving and eight individually displayed ExxonMobil training records. The separate branches are not interchangeable with `main`, which still contains an older portfolio.

The Netlify project is `aminer-rhammi`, site ID `56382d63-9f2b-472f-a2ce-65c5662265bc`. Before this work, its published deployment was `6ae222f00f3de6b44dc1437f`, sourced from PR #5. A ready deploy is evidence of that specific snapshot, not the latest source branch.

### Thanh Tran

Browser inspection: homepage, [FSAE gearbox](https://thanhvtran.com/portfolio/fsae-gearbox/) and [injection-mould study](https://thanhvtran.com/portfolio/injection-mold/).

The gearbox connects actual component photographs with machining, normalisation, supplier processes, press fits and assembly responsibilities. The mould article explains the undercut constraint and compares manufacturing mechanisms. This is persuasive because a reviewer can follow the physical constraint to the design choice. The layout is less useful as a model for reliability analysis or interactive engineering. The priority to adopt is the evidence-and-decision relationship, rather than the employer logo wall.

Confirmed in rendered markup: a WordPress-style theme and generated page classes. Precise plugins, private source architecture and performance under real traffic were not established. No code, photography or distinctive branding was copied.

### Alex Robotics

Browser inspection: [About](https://alexrobotics.net/about-me) and [Software](https://alexrobotics.net/software), including the Projects menu. The software catalogue exposes direct GitHub links for robot-arm control, serial communication, PID, vision and other implementations. The browser confirmed these destinations; the entire external repositories were not audited in this run. This is traceability that a generic technology list cannot provide.

The long catalogue and broad introduction require more scanning than an individual case-study summary. Counters such as lines of code are not a substitute for a test result. Hostinger/Zyro-hosted assets were visible; the precise authoring framework is not claimed as confirmed.

### Gaspard CK — correction to the supplied report

[The actual URL](https://gaspardck.blogspot.com/) **loaded in the browser**. Its title is *Adventures in Asset Maintenance Management*, with posts attributed to Chris. It is an older maintenance-management blog, not a contemporary engineering project portfolio. The visible latest post is dated January 2014.

The article about importance and criticality connects operating consequences to maintenance prioritisation. The useful principle is to explain the consequence that makes a decision matter. Its long chronological feed, old dates and absence of a clear project/CV/contact journey are unsuitable as the main portfolio structure. The supplied report's exclusion for inaccessible content is superseded by this observation; no identity or ownership beyond the visible blog is inferred.

## B. Comparative benchmark

These are editorial judgements about the inspected evidence, not measured hiring outcomes. Only a bounded sample of the reference sites was inspected; this is not a claim of exhaustive browser testing of their complete archives. The original baseline scores are retained for continuity; the blog is evaluated on the same portfolio rubric, which intentionally penalises missing project/recruitment features.

| Criterion | Weight | Thanh | Alex | Gaspard blog | Amine starting source |
|---|---:|---:|---:|---:|---:|
| Engineering evidence | 25 | 23 | 20 | 8 | 21 |
| Credibility | 15 | 14 | 12 | 9 | 14 |
| First impression | 15 | 13 | 11 | 4 | 11 |
| Engineering storytelling | 15 | 13 | 10 | 8 | 13 |
| Design and usability | 10 | 8 | 8 | 3 | 8 |
| Useful interactivity | 10 | 3 | 5 | 1 | 7 |
| Contact/recruitment journey | 10 | 8 | 7 | 2 | 7 |
| Total | 100 | 82 | 73 | 35 | 81 |

Thanh remains the strongest sampled physical-engineering presentation. Alex offers the clearest route to inspectable software. Amine's starting source already has more explicit ownership, verification and confidentiality boundaries. No numerical improvement is assigned to the redesign before user feedback or engagement measurements.

## C. Reusable patterns and implemented adaptations

| Observed pattern | Visitor purpose | Original adaptation | Priority / difficulty |
|---|---|---|---|
| Actual parts and prototype imagery | Establish physical context | Retain existing authorised FESTO/vehicle evidence and four demonstration videos | Essential / low |
| Constraint-to-option explanation | Make the decision defensible | Valero conceptual alternatives and commissioning-readiness questions, explicitly separated from historical records | Essential / medium |
| Direct technical traceability | Let a reviewer interrogate a claim | Full-size diagrams, existing artefacts, fictional CSV and Python reproduction | Essential / low |
| Short orientation before depth | Let recruiters choose where to spend time | Two-minute overview plus expandable full investigation on all case studies | Essential / medium |
| Engineering consequences | Connect analysis to action | Lab interpretation, cost sensitivity and explicit model limits | High / medium |
| Personality related to the work | Show the person without hiding the work | Retain industrial/lifesaving portraits in a compact personal section | High / low |

## D. Implemented design and routes

Concept A uses a navy `#14243A` introduction, paper `#F7F7F4`, burnt orange `#C75B2B`, sans-serif body text and sparse monospaced figure/parameter labels. Main content is limited to 1,200 px. No new external font or animation library is required.

Homepage order: identity and concise proposition → three discipline links → filterable evidence → interactive lab preview → industrial background → approach → person → contact. Mobile layouts stack rather than hiding technical material. Motion is limited to small colour/scale changes and honours reduced-motion preferences.

Existing URLs are retained: `/for/{reliability,mechanical,mechatronics}`, `/projects/[slug]`, `/lab/reliability`, `/experience`, `/education`, `/lifesaving`, `/about`. The former STM32 route retains its redirect. Navbar adds the lab and keeps Lifesaving immediately after Education. The mobile menu closes on Escape and returns focus to its button.

`EvidenceShelf` receives only card-sized project fields and filters client-side. `LabPreview` shares the same model functions as the full lab. `ProjectInsights` contains the bounded Valero and encoder-count explanations. Existing project data, galleries, methods and outcomes remain available in the investigation disclosure. Recruiter pages now use photographic/diagram-backed project cards.

The homepage uses existing authorised assets. The supplied dozer and FESTO mock-up pictures are illustrative references, not evidence owned by Amine. No stock photo is presented as a photograph of his actual project.

The tracked-vehicle result is stated as a **pulse-count difference**, not calibrated distance accuracy. The Alcoa project remains in progress, team contributions remain explicit, potential financial value remains potential, and the new UK mobility wording says eligible to apply rather than claiming a granted visa. The existing CV PDF is retained rather than replaced by an unrequested new CV.

## E. Reliability Lab implementation

- One shared TypeScript numerical module; fictional CSV checked for exact parity.
- Two-parameter right-censored Weibull MLE, using a bracketed profile-score solution and log-sum-exp stabilisation.
- Fitted survival, B10/B50, and renewal-reward cost per 1,000 operating hours.
- Kaplan–Meier diagnostic through the last observed age. Extrapolation is identified.
- 90% **pointwise** paired-bootstrap percentile band, 250 attempted resamples with fixed seed; valid fit count shown. It is conditional on independent observations, non-informative censoring and the model. It is not a simultaneous band, model-selection uncertainty or proof of a real interval.
- Nine-cell cost sensitivity, resettable controls, disclosed quadrature and grid bounds, and an upper-bound/increasing-hazard interpretation.
- Model comparison and failure-mode-specific fitting remain future work: the fictional records have no defensible failure-mode labels.
- Python download reproduces the point fit and costs; the page explicitly identifies which additional diagnostics are browser features.

Independent SciPy QA optimises the full two-parameter likelihood and uses adaptive quadrature, separately from the browser implementation. Reference output: beta approximately 2.3681005, eta 7,900.572 h; at 5,250 h the default age-policy cost is GBP 1,651.586 per 1,000 h versus GBP 2,285.035 for run-to-failure. The default grid minimum is 4,500 h. These are fictional model results, not employer findings.

## F. Priorities and 30/60/90-day roadmap

Impact, confidence and effort below use a relative 1–5 scale. The quotient prioritises comparable work; it is not a measured business return.

| Work | Impact | Confidence | Effort | I × C / E | State |
|---|---:|---:|---:|---:|---|
| Make discipline routes visible | 5 | 5 | 1 | 25 | Implemented |
| Quick read plus detailed evidence | 5 | 5 | 2 | 12.5 | Implemented |
| Consistent CV/contact access | 4 | 5 | 1 | 20 | Preserved/checked |
| Original evidence and measured calibration interpretation | 5 | 4 | 2 | 10 | Implemented |
| Numerical verification and uncertainty | 5 | 4 | 3 | 6.7 | Implemented |
| Condition-monitoring alternative | 4 | 3 | 5 | 2.4 | Future, requires justified detection/cost inputs |

Days 1–30: review this preview, reconcile the production branch when approved, use the three shareable recruiter routes, and collect concrete questions from reviewers. Acceptance: correct deployment commit, routes/downloads functioning, no unsupported public claims.

Days 31–60: add further authorised mechanical artefacts if available; investigate failure-mode stratification and an inspection alternative only with explicit fictional assumptions. Acceptance: independent numerical checks and clear evidence provenance.

Days 61–90: compare similarly targeted outreach with project links against CV-only outreach. Record relevant replies, technical conversations and interviews without attributing causation to small samples. Add analytics only after choosing the actual provider, privacy approach and events; none is silently installed here.

## G. Recruitment impact and measurement

The intended improvement is a shorter path from discipline to evidence to contact. The site does not promise interviews. Track the route shared, project opened, technical questions received, conversations and interviews in an outreach log. A small matched outreach experiment can guide revisions but will not establish hiring causality.

## Verification and publishing boundary

`npm run lint` and `npm run build` passed initially; production build generated 41 pages. Eight numerical/data/reproduction tests passed, including comparison with independent SciPy output, the exponential limiting case and tied Kaplan–Meier events. Final checks and browser findings are recorded in `docs/verification.md`.

The local managed preview launcher appended Vite flags to the existing Next.js command and failed before serving. The application was not rewritten to accommodate that infrastructure mismatch. Browser QA is performed against the actual Netlify Deploy Preview instead.

This change is prepared on a separate branch and PR. The attached master prompt says: “Do not merge into the main branch or publish over the existing production site without explicit approval.” Production publication therefore awaits the user's review of the concrete preview.
