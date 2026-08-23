export type AcademicCourse = {
  code: string;
  title: string;
  summary: string;
  relevance: string;
};

export type AcademicCategory = {
  id: string;
  title: string;
  blurb: string;
  evidence?: string;
  courses: AcademicCourse[];
};

export type EducationItem = {
  title: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
};

export const educationTimeline: EducationItem[] = [
  {
    title: "B.Eng. Mechanical Engineering – Mechatronics",
    institution: "Université du Québec à Trois-Rivières (UQTR)",
    location: "Trois-Rivières, QC",
    period: "Expected Dec 2027",
  },
  {
    title: "Diploma of College Studies (DEC) – Mathematics & Computer Science",
    institution: "Collège Rosemont",
    location: "Montréal, QC",
    period: "Completed",
  },
];

export const academicCategories: AcademicCategory[] = [
  {
    id: "reliability",
    title: "Reliability & Engineering Statistics",
    blurb: "Reliability, maintenance-system design, probability, statistics, and data-driven engineering decisions.",
    evidence: "Applied through industrial PM/CBM work, SAP maintenance-history analysis, failure classification, and Weibull life-data studies.",
    courses: [
      {
        code: "GIA1077",
        title: "Reliability and Maintenance Systems Design",
        summary: "Reliability modelling, availability, maintenance-program design, CMMS, FMEA/FMECA, and maintenance strategy.",
        relevance: "Direct foundation for reliability engineering, maintenance optimization, and asset-performance work.",
      },
      {
        code: "STT1001",
        title: "Probability and Statistics",
        summary: "Probability distributions, sampling, estimation, hypothesis testing, and engineering-data interpretation.",
        relevance: "Supports life-data analysis, reliability statistics, and evidence-based engineering decisions.",
      },
    ],
  },
  {
    id: "mechanical-integrity",
    title: "Mechanical Integrity & Design",
    blurb: "Stress, fatigue, machine elements, dynamics, CAD, tolerancing, and practical mechanical design.",
    evidence: "Applied in guarding design, maintainability improvements, heavy-equipment inspection references, and field-oriented mechanical work.",
    courses: [
      {
        code: "ING1056 / GMC1016",
        title: "Strength of Materials / Elasticity & Plasticity",
        summary: "Stress, strain, bending, torsion, buckling, combined loading, yielding, and failure criteria.",
        relevance: "Foundation for structural integrity, component assessment, and safe mechanical design.",
      },
      {
        code: "GMC1017",
        title: "Machine Elements Design",
        summary: "Fatigue life and design of shafts, gears, fasteners, springs, and mechanical components.",
        relevance: "Supports component-life thinking and mechanical failure analysis.",
      },
      {
        code: "ING1042 / ING1045",
        title: "Technical Drawing, CAD & Tolerancing",
        summary: "Engineering drawings, CAD, dimensional and geometric tolerancing, fits, and manufacturing documentation.",
        relevance: "Supports clear, fabrication-ready, inspection-aware engineering documentation.",
      },
    ],
  },
  {
    id: "thermo-fluids",
    title: "Thermo-Fluids & Hydraulic Systems",
    blurb: "Fluid mechanics, thermodynamics, heat transfer, pumps, compressors, and hydraulic/pneumatic systems.",
    evidence: "Relevant to industrial rotating equipment, process systems, hydraulic mobile equipment, and maintenance troubleshooting.",
    courses: [
      {
        code: "ING1057 / ING1058",
        title: "Applied Thermodynamics & Transport Phenomena",
        summary: "Energy balances, fluid flow, pressure loss, heat transfer, and heat-exchanger fundamentals.",
        relevance: "Core understanding for process and rotating-equipment applications.",
      },
      {
        code: "GMC1037",
        title: "Hydraulic and Pneumatic Systems",
        summary: "Fluid-power circuits, pumps, compressors, actuators, and lubrication regimes.",
        relevance: "Directly applicable to industrial and heavy-mobile-equipment systems.",
      },
    ],
  },
  {
    id: "automation-controls",
    title: "Automation, Controls & Mechatronics",
    blurb: "PLC automation, feedback control, embedded systems, robotics, instrumentation, and electromechanical integration.",
    evidence: "Provides controls literacy that complements mechanical reliability and troubleshooting.",
    courses: [
      {
        code: "GMC1024 / GMC1031",
        title: "Industrial Automation & Control of Mechanical Systems",
        summary: "PLC logic, instrumentation, sequential control, feedback systems, PID tuning, stability, and actuators.",
        relevance: "Supports troubleshooting across mechanical, electrical, instrumentation, and control boundaries.",
      },
      {
        code: "GMC1025",
        title: "Industrial Robotics",
        summary: "Robot kinematics, dynamics, trajectory planning, control, and automated-cell integration.",
        relevance: "Builds systems-level understanding of automated industrial equipment.",
      },
    ],
  },
  {
    id: "modeling-data",
    title: "Engineering Modelling & Data",
    blurb: "Numerical methods, mathematical modelling, programming, and data analysis for engineering problems.",
    evidence: "Applied through Excel automation, Python/PySpark reliability workflows, dashboards, and life-data analysis.",
    courses: [
      {
        code: "GMC1035",
        title: "Numerical Methods in Engineering",
        summary: "Regression, numerical linear algebra, integration, differentiation, and ODE solution methods.",
        relevance: "Supports computational analysis and engineering-data workflows.",
      },
      {
        code: "GMC1032",
        title: "Engineering Design and Modelling",
        summary: "Applying computational tools such as MATLAB and Excel to multidisciplinary engineering problems.",
        relevance: "Strengthens practical modelling and tool-selection judgement.",
      },
    ],
  },
];
