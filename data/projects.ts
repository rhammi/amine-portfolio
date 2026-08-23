export type ProjectCategory = "Reliability & Asset Performance" | "Mechanical & Field Engineering" | "Automation & Mechatronics";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  skills: string[];
  confidentiality?: string;
};

export const projects: Project[] = [
  {
    slug: "heavy-equipment-reliability",
    title: "Heavy Equipment Reliability Analytics",
    category: "Reliability & Asset Performance",
    summary: "Structured SAP maintenance history and equipment-event data into repeatable reliability investigations for mobile mining assets.",
    challenge: "Maintenance and equipment-history data can be fragmented across work orders, counters, functional locations, parts, symptoms, and free-text descriptions. The engineering challenge was to turn that history into evidence that could support repeat-failure, component-life, and maintenance-strategy questions.",
    approach: [
      "Joined and standardized SAP maintenance and equipment-history information into analysis-ready datasets.",
      "Separated true failures from planned, administrative, and non-failure replacement events before statistical analysis.",
      "Structured location, symptom, part, and failure-mode information so recurring patterns could be compared consistently.",
      "Built reusable Excel and Databricks/PySpark workflows rather than one-off manual analyses.",
    ],
    outcome: [
      "Created traceable reliability evidence for engineering review rather than relying on anecdotal failure history.",
      "Reduced repetitive preparation effort for future equipment and component investigations.",
      "Improved consistency of event classification and failure-mode analysis across reliability work.",
    ],
    skills: ["SAP PM", "Reliability engineering", "Databricks", "PySpark", "Excel", "Failure modes", "Heavy equipment"],
    confidentiality: "Public version: internal fleet identifiers, financial figures, proprietary thresholds, and employer-sensitive records are intentionally omitted.",
  },
  {
    slug: "weibull-life-data",
    title: "Weibull & Life-Data Analysis",
    category: "Reliability & Asset Performance",
    summary: "Applied Weibull maximum-likelihood methods to failed and suspended component histories to characterize reliability and expected survival.",
    challenge: "Replacement history alone does not equal failure history. A defensible life-data analysis requires correctly distinguishing failures from censored/suspended observations and verifying the underlying maintenance evidence before fitting a distribution.",
    approach: [
      "Reviewed replacement events against SAP history and maintenance context to classify observations as failed or suspended.",
      "Captured failure-mode information where supporting evidence existed.",
      "Applied Weibull maximum-likelihood estimation with right-censored observations.",
      "Used fitted life-distribution parameters and survival metrics as engineering evidence rather than treating the statistical output as a standalone answer.",
    ],
    outcome: [
      "Produced reproducible component-life analyses that account for censored observations.",
      "Made assumptions and event classifications explicit for stakeholder review.",
      "Created a reusable analytical pattern for future reliability studies.",
    ],
    skills: ["Weibull", "MLE", "Censored data", "JMP Pro", "Python", "SAP PM", "Reliability statistics"],
    confidentiality: "Public version: equipment IDs, internal datasets, exact results, and employer-specific decision thresholds are not published.",
  },
  {
    slug: "789f-inspection-guide",
    title: "789F Structural Inspection Reference",
    category: "Mechanical & Field Engineering",
    summary: "Developed a field-informed structural inspection reference by adapting an existing haul-truck guide to a different chassis configuration.",
    challenge: "An existing inspection reference could not simply be copied because the target truck differed in chassis geometry, suspension arrangement, component layout, and inspection-point applicability.",
    approach: [
      "Compared the two truck configurations component by component to identify genuine similarities and differences.",
      "Used field photographs and a site visit to validate chassis features, component naming, and inspection access.",
      "Corrected inspection-point numbering and component terminology where the source guide did not transfer accurately.",
      "Preserved applicable inspection items while creating new references for configuration-specific areas.",
    ],
    outcome: [
      "Produced a more accurate, standardized inspection reference for field use.",
      "Reduced ambiguity created by transferring terminology and numbering from a different truck model.",
      "Connected document development with direct field observation rather than desk-only assumptions.",
    ],
    skills: ["Structural inspection", "Heavy equipment", "Field engineering", "Technical documentation", "Component identification"],
    confidentiality: "Public version: internal inspection documents, detailed photographs, unit identifiers, and proprietary maintenance instructions are excluded.",
  },
  {
    slug: "mov-register",
    title: "MOV & Actuator Asset Standardization",
    category: "Reliability & Asset Performance",
    summary: "Reconciled actuator and valve information into a structured engineering register for maintenance planning and lifecycle decisions.",
    challenge: "Technical information was distributed across OEM documentation and maintenance-system records, making it difficult to compare installed actuators, identify data gaps, and evaluate interchangeability.",
    approach: [
      "Reconciled OEM and CMMS/SAP information for tagged assets.",
      "Standardized engineering attributes including torque, speed, voltage, mounting, and identifiers.",
      "Flagged missing or inconsistent information requiring follow-up.",
    ],
    outcome: [
      "Created a reusable source of technical asset information for maintenance and spares decisions.",
      "Improved traceability between field assets, OEM data, and maintenance records.",
    ],
    skills: ["SAP PM", "Asset registers", "Valves & actuators", "Standardization", "Excel"],
  },
  {
    slug: "cbm-maintenance-optimization",
    title: "CBM & Preventive Maintenance Optimization",
    category: "Reliability & Asset Performance",
    summary: "Improved lubrication/PM routes and consolidated condition-monitoring information to make maintenance execution and reliability review more consistent.",
    challenge: "Duplicate PM activities, route gaps, and distributed condition-monitoring reports made execution and reliability review less efficient.",
    approach: [
      "Reviewed and standardized lubrication and PM routes in CMMS and Excel.",
      "Removed duplicate activities and identified coverage gaps.",
      "Consolidated vibration and condition information into a single review view.",
      "Automated life and remaining-life calculations for a large component dataset.",
    ],
    outcome: [
      "Improved clarity and maintainability of PM routes.",
      "Made condition information easier to review and discuss with maintenance stakeholders.",
      "Created repeatable replacement-planning calculations.",
    ],
    skills: ["Spartakus", "CBM", "Vibration", "Power Query", "PM optimization", "MTBF"],
  },
  {
    slug: "mechanical-guarding-design",
    title: "Mechanical Guarding & Maintainability Design",
    category: "Mechanical & Field Engineering",
    summary: "Designed safety-focused mechanical guarding and maintainability improvements for industrial equipment.",
    challenge: "Industrial modifications needed to satisfy safety, access, fabrication, and maintainability constraints while remaining practical for field installation.",
    approach: [
      "Created guarding and fixture designs using SolidWorks and AutoCAD.",
      "Considered structural loading, clearances, fastening, fabrication, and access requirements.",
      "Worked with field conditions and maintenance needs rather than treating the design as an isolated CAD exercise.",
    ],
    outcome: [
      "Delivered practical designs that improved safety and equipment access.",
      "Strengthened the connection between CAD work and maintainability requirements.",
    ],
    skills: ["SolidWorks", "AutoCAD", "Mechanical design", "Safety", "Maintainability", "Fabrication"],
  },
  {
    slug: "automation-mechatronics",
    title: "Automation & Mechatronics Projects",
    category: "Automation & Mechatronics",
    summary: "University and laboratory projects covering PLC sequencing, embedded control, robotics, instrumentation, and dynamic systems.",
    challenge: "Translate mechanical-system requirements into reliable sensing, sequencing, control, and actuation logic across multiple mechatronic platforms.",
    approach: [
      "Programmed PLC sequences with sensors, interlocks, fault handling, and conveyor logic.",
      "Implemented STM32-based PWM motor control and embedded-system behavior.",
      "Worked with robotics, state machines, instrumentation, and control-system modeling.",
    ],
    outcome: [
      "Built a practical controls foundation that complements mechanical reliability work.",
      "Developed troubleshooting literacy across sensors, actuators, embedded systems, and automation logic.",
    ],
    skills: ["PLC", "STM32", "Embedded systems", "Robotics", "Instrumentation", "Controls"],
  },
];
