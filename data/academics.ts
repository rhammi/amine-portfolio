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
    title: "B.Eng. Mechanical Engineering – Mechatronics (Program 7347)",
    institution: "Université du Québec à Trois-Rivières (UQTR)",
    location: "Trois-Rivières, QC",
    period: "Expected Dec 2026",
  },
  {
    title: "B.Eng. Mechanical Engineering – Co-op Pathway (Program 6647)",
    institution: "Université du Québec à Trois-Rivières, Drummondville Campus",
    location: "Drummondville, QC",
    period: "Sept 2020 – Apr 2022",
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
    title: "Reliability & Asset Management",
    blurb: "Designing availability-focused maintenance systems (CMMS/FMEA/TPM).",
    evidence: "Applied at Valero and Kruger (registers, CBM dashboards, FMEA/FMECA updates).",
    courses: [
      {
        code: "GIA1077",
        title: "Reliability and Maintenance Systems Design",
        summary:
          "Reliability modeling, availability optimization, and maintenance program design with CMMS/FMEA/TPM.",
        relevance: "Direct link to reliability planning, life distributions, and proactive maintenance culture.",
      },
      {
        code: "STT1001",
        title: "Probability and Statistics",
        summary:
          "Foundations of probability, common distributions, sampling, and hypothesis testing for engineering data.",
        relevance: "Supports reliability statistics, failure modeling, and decision confidence.",
      },
    ],
  },
  {
    id: "production-systems",
    title: "Production Systems & Industrial Engineering",
    blurb: "Operations design, optimization, and production control methods.",
    evidence: "Supports maintenance-production coordination and planning rhythms.",
    courses: [
      {
        code: "GIA1082",
        title: "Industrial Production",
        summary:
          "Production system design, time/motion studies, layout, forecasting, inventory, ERP, quality, and lean tools.",
        relevance: "Connects reliability actions to throughput, scheduling, and quality objectives.",
      },
    ],
  },
  {
    id: "mechanical-integrity",
    title: "Mechanical Integrity & Design",
    blurb: "Safe sizing, stress analysis, fatigue, and dynamics of equipment/structures.",
    evidence: "Used for guarding, layouts, and equipment integrity work at Rio Tinto and Soucy.",
    courses: [
      {
        code: "ING1056",
        title: "Strength of Materials",
        summary:
          "Internal forces, stress/strain, torsion, bending, buckling, combined loading, and failure criteria.",
        relevance: "Core for assessing mechanical integrity and sizing components safely.",
      },
      {
        code: "GMC1016",
        title: "Elasticity and Plasticity",
        summary: "2D/3D stress-strain states, elastic-plastic behavior, and limit analysis of components.",
        relevance: "Underpins evaluation of overload, yielding, and plastic collapse scenarios.",
      },
      {
        code: "GMC1017",
        title: "Machine Elements Design",
        summary:
          "Design and fatigue life of shafts, gears, fasteners, springs; safety factors and failure criteria.",
        relevance: "Guides component selection and fatigue risk management in rotating assets.",
      },
      {
        code: "ING1039",
        title: "Statics and Dynamics I",
        summary:
          "Equilibrium in 2D/3D, friction, surface properties, and particle kinematics/kinetics.",
        relevance: "Baseline for force systems and motion fundamentals in equipment analysis.",
      },
      {
        code: "ING1040",
        title: "Statics and Dynamics II",
        summary:
          "Rigid-body kinematics/dynamics, energy methods, vibrations, and motion equation solving.",
        relevance: "Supports dynamic assessments, vibration understanding, and simulation readiness.",
      },
      {
        code: "GMC1006",
        title: "Mechanics of Machines",
        summary:
          "Kinematic/kinetostatic analysis of mechanisms, virtual work, and dynamic force evaluation.",
        relevance: "Helps evaluate linkage loads and reaction forces in industrial mechanisms.",
      },
    ],
  },
  {
    id: "thermo-fluids",
    title: "Thermo / Fluids / Energy Systems",
    blurb: "Energy, heat, and flow behavior for process and utility systems.",
    evidence: "Relevant to refinery/process equipment (pumps, compressors, exchangers).",
    courses: [
      {
        code: "ING1057",
        title: "Applied Thermodynamics I",
        summary:
          "First/Second Law applications, ideal gases, cycles (Carnot/engines/refrigeration), enthalpy/entropy.",
        relevance: "Foundational for evaluating energy systems and process thermodynamics.",
      },
      {
        code: "ING1058",
        title: "Transport Phenomena",
        summary:
          "Heat, fluid, and mass transfer; laminar profiles; Bernoulli/pressure losses; convective correlations; exchangers.",
        relevance: "Supports heat exchanger sizing, flow analysis, and thermal management.",
      },
      {
        code: "GMC1037",
        title: "Hydraulic and Pneumatic Systems",
        summary:
          "Compressible/incompressible flow for fluid power; circuits, pumps, compressors, and lubrication regimes.",
        relevance: "Directly applicable to hydraulic/pneumatic systems in heavy industry.",
      },
    ],
  },
  {
    id: "automation-controls",
    title: "Automation, Controls & Industrial Systems",
    blurb: "Control, PLC/robotics, and servo systems for automated assets.",
    evidence: "Supports CBM dashboards and controls literacy for reliability work.",
    courses: [
      {
        code: "GMC1024",
        title: "Industrial Automation",
        summary:
          "PLC-based automation, Boolean/sequential control, instrumentation, and safety/economic considerations.",
        relevance: "Enables troubleshooting and designing control logic for industrial equipment.",
      },
      {
        code: "GMC1031",
        title: "Control of Mechanical Systems",
        summary:
          "Feedback control, pneumatic/hydraulic/electrical actuators, PID tuning, stability (root locus), digital control.",
        relevance: "Supports servo tuning and stability checks for automated machinery.",
      },
      {
        code: "GMC1025",
        title: "Industrial Robotics",
        summary:
          "Robot kinematics/dynamics, trajectory planning, PID joint control, and flexible manufacturing cells.",
        relevance: "Adds robotics context for automated cells and safety in motion systems.",
      },
    ],
  },
  {
    id: "manufacturing-materials",
    title: "Manufacturing, Materials & Failure Mechanisms",
    blurb: "How materials behave and how parts are produced, welded, or machined.",
    evidence: "Supports failure investigations, repair methods, and manufacturability choices.",
    courses: [
      {
        code: "ING1043",
        title: "Engineering Materials",
        summary:
          "Structure-property relationships across metals, polymers, ceramics, and composites; corrosion and treatments.",
        relevance: "Material selection and degradation awareness for reliability decisions.",
      },
      {
        code: "GMC1028",
        title: "Forming and Welding Processes",
        summary:
          "Powder metallurgy, casting fundamentals/design, welding processes/standards, HAZ behavior, testing.",
        relevance: "Guides weld quality, joint design, and repair considerations.",
      },
      {
        code: "GMC1036",
        title: "Machining and Forming Processes",
        summary:
          "Machining/CNC, fixture design, forming processes, press design, and combined machining-forming project.",
        relevance: "Informs manufacturability and precision for fabricated components.",
      },
      {
        code: "ING1042",
        title: "Technical Drawing and CAD",
        summary:
          "Technical drawing standards and CAD fundamentals for compliant engineering documentation.",
        relevance: "Ensures clear, standard-compliant drawings and models.",
      },
      {
        code: "ING1045",
        title: "Tolerancing and CAD",
        summary:
          "Dimensional/geometric tolerancing (ISO/ANSI), surface finish, fits, and advanced CAD features.",
        relevance: "Supports tolerance decisions, inspection planning, and cost-aware design.",
      },
    ],
  },
  {
    id: "modeling-data",
    title: "Modeling, Data & Engineering Methods",
    blurb: "Numerical methods, math, and computational tools for analysis and dashboards.",
    evidence: "Used for CBM dashboards, life calculations, and register automation (Valero, Kruger).",
    courses: [
      {
        code: "MAP1006",
        title: "Applied Mathematics I",
        summary:
          "Matrix algebra and ODE fundamentals; solving linear systems and introductory differential equations.",
        relevance: "Baseline math for modeling and simulation tasks.",
      },
      {
        code: "MAP1007",
        title: "Applied Mathematics II",
        summary:
          "Multivariable/vector calculus, line/surface integrals, and applications to geometry and physics.",
        relevance: "Supports vector/field analyses and multivariable modeling.",
      },
      {
        code: "MAP1008",
        title: "Applied Mathematics III",
        summary:
          "Fourier series, complex analysis, Laplace transforms for solving ODE/PDE boundary-value problems.",
        relevance: "Toolset for system response, signal, and control-related analyses.",
      },
      {
        code: "GMC1035",
        title: "Numerical Methods in Engineering",
        summary:
          "Numerical linear algebra, regression, numerical integration/differentiation, ODE solvers.",
        relevance: "Enables regression, trending, and computational solutions in reliability analytics.",
      },
      {
        code: "GMC1032",
        title: "Engineering Design and Modeling I",
        summary:
          "Selecting and applying computational tools (e.g., MATLAB/Excel) across circuits, mechanics, fluids, and manufacturing.",
        relevance: "Builds practical modeling workflows and tool selection habits.",
      },
    ],
  },
];



