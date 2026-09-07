import type { DisciplineSlug } from "./projects";

export type Discipline = {
  slug: DisciplineSlug;
  eyebrow: string;
  title: string;
  proposition: string;
  methods: string[];
  evidence: { capability: string; proof: string; href: string }[];
};

export const disciplines: Discipline[] = [
  {
    slug: "reliability",
    eyebrow: "Pillar 01",
    title: "Reliability & Asset Integrity",
    proposition: "I turn maintenance history, condition evidence and field context into traceable equipment-strategy decisions.",
    methods: ["RCM and FMEA/FMECA", "Weibull life-data analysis", "RCA/RCFA", "CBM and PM optimisation", "SAP PM and master data", "Lifecycle-cost analysis"],
    evidence: [
      { capability: "Fleet strategy", proof: "36-unit dozer RCM and bad-actor analysis", href: "/projects/dozer-fleet-rcm" },
      { capability: "Failure information", proof: "500+ symptom codes consolidated to 95 categories", href: "/projects/maintenance-data-standardisation" },
      { capability: "Life and cost", proof: "Weibull-based intervention economics for NRS coolers", href: "/projects/component-life-economics" },
      { capability: "Maintenance execution", proof: "CBM review, route audit and 9,000+ standardised roller records", href: "/projects/cbm-pm-route-improvement" },
    ],
  },
  {
    slug: "mechanical",
    eyebrow: "Pillar 02",
    title: "Mechanical Design & Analysis",
    proposition: "I connect calculations and CAD with field verification, maintainability and controlled delivery in operating plants.",
    methods: ["Mechanical design and CAD", "Bending, deflection and weld checks", "Piping and equipment interfaces", "Field survey and fit verification", "MOC and commissioning", "FEA verification"],
    evidence: [
      { capability: "Brownfield delivery", proof: "Fuel-terminal drainage and pump modification support", href: "/projects/terminal-brownfield-modifications" },
      { capability: "Plant modifications", proof: "Fixtures, guards and piping checked in CAD and in the field", href: "/projects/mechanical-modifications-field-verification" },
      { capability: "Engineering analysis", proof: "Hand calculations compared with SolidWorks Simulation", href: "/projects/stress-analysis-hand-fea" },
      { capability: "System integration", proof: "Mechanical interfaces within an in-progress wire-feed capstone", href: "/projects/aluminium-wire-feed-capstone" },
    ],
  },
  {
    slug: "mechatronics",
    eyebrow: "Pillar 03",
    title: "Mechatronics, Controls & Automation",
    proposition: "I design control logic around measurable states, safe transitions and the physical system the software must operate.",
    methods: ["PLC and Ladder Logic", "GRAFCET sequencing", "MATLAB/Simulink modelling", "Instrumentation and sensors", "Mobile-robot control", "Embedded C", "Interlocks and fault recovery", "Calibration and repeatability"],
    evidence: [
      { capability: "Industrial automation", proof: "Five-station FESTO MPS control architecture", href: "/projects/modular-production-cell-automation" },
      { capability: "Autonomous mobile systems", proof: "Robotino modelling, sensor-state logic, recovery and physical demonstration", href: "/projects/robotino-autonomous-route-following" },
      { capability: "Embedded control", proof: "STM32 GPIO, EXTI and NVIC laboratory", href: "/projects/stm32-interrupt-control" },
      { capability: "Integrated control", proof: "Sensor, PLC and fault logic for the Alcoa-sponsored capstone", href: "/projects/aluminium-wire-feed-capstone" },
      { capability: "Industrial foundation", proof: "Instrumentation, automation and mechatronics coursework", href: "/education" },
    ],
  },
];

export function getDiscipline(slug: string) {
  return disciplines.find((discipline) => discipline.slug === slug);
}
