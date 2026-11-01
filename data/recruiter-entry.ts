export type EntrySlug = "reliability" | "mechanical" | "mechatronics";
export type EntryPoint = {
  slug: EntrySlug;
  eyebrow: string;
  title: string;
  hook: string;
  summary: string;
  suitable: string[];
  evidence: { title: string; body: string; href: string; label: string }[];
  approach: string[];
  next: string;
};
export const entryPoints: EntryPoint[] = [
  {
    slug: "reliability",
    eyebrow: "For reliability and maintenance engineering teams",
    title: "From failure history to a maintenance decision.",
    hook: "My most useful work begins where the CMMS data stops being trustworthy.",
    summary: "I have investigated equipment reliability across mobile mining fleets, refineries and process plants. I combine field observations, work-order evidence and life-data methods to find the failure mechanism worth investigating next.",
    suitable: ["Graduate Reliability Engineer", "Maintenance Engineer", "Asset Performance", "Condition Monitoring"],
    evidence: [
      { title: "36 CAT D11 dozers", body: "RCM and bad-actor assessment used equipment and cost histories to narrow attention to the dominant undercarriage exposure.", href: "/projects/dozer-fleet-rcm", label: "Reliability strategy" },
      { title: "500+ codes reviewed", body: "A cross-functional Kaizen workstream standardised more than 500 symptom codes into 95 categories, raising coding accuracy from 70% to 80%.", href: "/projects/maintenance-data-standardisation", label: "Maintenance evidence" },
      { title: "Weibull and intervention economics", body: "Failure/suspension classification, life-data fitting and comparison of cost assumptions before recommending maintenance tasks.", href: "/projects/component-life-economics", label: "Component analysis" },
    ],
    approach: ["Verify failure records and separate suspended observations.", "Trace symptoms to a physical failure mode, not just a cost code.", "Compare engineering options against operating constraints and consequences."],
    next: "Try the Reliability Evidence Lab, a reproducible demonstration built on synthetic data.",
  },
  {
    slug: "mechanical",
    eyebrow: "For mechanical design, plant and project engineering teams",
    title: "Mechanical decisions that survive a site walkdown.",
    hook: "A tidy drawing is not the end of a design problem.",
    summary: "My engineering placements have involved pumps, pipework, guarding, mechanical calculations and controlled modifications in operating industrial facilities. I approach design through load paths, space constraints, maintainability and practical commissioning.",
    suitable: ["Graduate Mechanical Engineer", "Plant Engineer", "Mechanical Project Engineer", "Asset Integrity"],
    evidence: [
      { title: "Fuel terminal modifications", body: "Pump replacement preparation, MOC, P&ID updates, commissioning checks and safe drainage concepts in a live terminal.", href: "/projects/terminal-brownfield-modifications", label: "Brownfield engineering" },
      { title: "CAD checked in the field", body: "Guarding, fixtures and piping modifications supported by stress, deflection and weld calculations and practical site verification.", href: "/projects/mechanical-modifications-field-verification", label: "Mechanical design" },
      { title: "Analytical cross-checks", body: "Hand calculations checked against finite-element assumptions and results in an academic mechanical design exercise.", href: "/projects/stress-analysis-hand-fea", label: "Engineering analysis" },
    ],
    approach: ["Define function, loads, safety and maintainability constraints.", "Calculate before selecting or modifying geometry.", "Check drawings and design intent against access and installation conditions."],
    next: "Open a mechanical case study to see how decisions were checked against field constraints.",
  },
  {
    slug: "mechatronics",
    eyebrow: "For automation, controls and test engineering teams",
    title: "The sensor, the control logic and the actual machine.",
    hook: "A controller only works if the physical system and its signals make sense.",
    summary: "My mechatronics studies and prototypes cover programmable controllers, embedded motor control, sensor feedback, digital twins and fault recovery. My industrial placements add experience seeing how measurement quality and machine availability affect real maintenance decisions.",
    suitable: ["Graduate Mechatronics Engineer", "Graduate Controls Engineer", "Automation Engineer", "Test Engineer"],
    evidence: [
      { title: "FESTO automation cell", body: "Linked pick-and-place and press stations with PLC handshakes, GRAFCET, Ladder logic and demonstrated sequential operation.", href: "/projects/modular-production-cell-automation", label: "Industrial automation" },
      { title: "Dual-MCU tracked vehicle", body: "STM32/ESP32 motor PWM, encoder measurement, calibration and integration supported by physical demonstration.", href: "/projects/tracked-vehicle-dual-mcu-control", label: "Embedded control" },
      { title: "Wire-winder digital twin", body: "Simulink modelling and tension-control work integrated with a physical demonstration of a feedback-controlled mechanical process.", href: "/projects/wire-winder-digital-twin", label: "Mechatronic modelling" },
      { title: "Alcoa-sponsored capstone", body: "In-progress measurement and PLC fault-logic work for an industrial wire-feed system; completion is not claimed.", href: "/projects/aluminium-wire-feed-capstone", label: "In-progress integration" },
    ],
    approach: ["Map sensors and actuators to measurable system states.", "Design safe sequencing, handshakes and fault recovery.", "Validate control behaviour on a physical prototype, not only in simulation."],
    next: "Explore the academic demonstrations, drawings and annotated controls evidence.",
  },
];
export const findEntry = (slug:string) => entryPoints.find(p=>p.slug===slug);
