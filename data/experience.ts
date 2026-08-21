export type ExperienceItem = {
  slug: string;
  company: string;
  companyUrl: string;
  logo?: string;
  location: string;
  dates: string;
  title: string;
  highlights: string[];
  summary: string;
  whatIDid: string[];
  tools: string[];
  topSkills: string[];
  outcomes: string[];
  heroImage?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
};

export const experience: ExperienceItem[] = [
  {
    slug: "imperial-oil-exxonmobil-2026",
    company: "Imperial Oil | ExxonMobil",
    companyUrl: "https://www.imperialoil.ca/",
    location: "Calgary, AB, Canada",
    dates: "May 2026 – Present",
    title: "Reliability & Maintenance Engineering Intern",
    highlights: [
      "Developed a model-specific structural inspection reference for CAT 789 haul trucks.",
      "Assessed 2,000+ inspection records across 81 truck frames to support a seven-figure warranty recovery case.",
      "Applied Weibull MLE to 33 component populations across a six-unit mining shovel fleet.",
      "Standardized reliability analysis across 199 assets and 6.17 million maintenance events using ISO 14224-aligned taxonomy.",
    ],
    summary:
      "Current mobile-equipment reliability placement combining field inspection, SAP maintenance evidence, life-data analysis, equipment strategy, and fleet-level prioritization.",
    whatIDid: [
      "Conducted an on-site structural survey of a newly introduced CAT 789 haul truck and defined standardized upper-chassis, lower-chassis, suspension, and dump-body inspection routes.",
      "Collaborated with inspection teams on a structural assessment methodology for 81 heavy-haul truck frame assemblies, evaluating more than 2,000 records against manufacturer support criteria.",
      "Analyzed loading exposure and structural-repair histories across an 83-truck fleet to support risk-based inspection prioritization and maintenance-strategy review.",
      "Reconciled component-replacement histories across 150 trucks and six fleet models against planned maintenance intervals to improve forecasting and spare-parts positioning.",
      "Performed two-parameter Weibull MLE on 33 component populations, validating failure and suspension data against SAP work orders and estimating B10/B50 life parameters.",
      "Established an ISO 14224-aligned taxonomy across 199 mine-fleet assets and deployed jackknife classification across 228 fleet-system combinations.",
    ],
    tools: [
      "SAP PM",
      "Weibull MLE",
      "ISO 14224",
      "Jackknife diagrams",
      "Excel / Power Query",
      "Structural inspection",
    ],
    topSkills: [
      "Heavy mobile-equipment reliability and structural inspection",
      "Weibull life-data analysis with failed and right-censored events",
      "Fleet maintenance strategy and PM interval validation",
      "Reliability taxonomy and failure-mode standardization",
      "Risk-based inspection and spare-parts forecasting",
    ],
    outcomes: [
      "Supported a seven-figure warranty cost-recovery case with structured inspection evidence.",
      "Improved risk-based prioritization across large truck and mining-shovel fleets.",
      "Enabled consistent cross-fleet reliability analysis through standardized equipment and failure coding.",
      "Provided planners and supply chain with evidence-based component replacement forecasts.",
    ],
  },
  {
    slug: "valero-energy-2025",
    company: "Valero Energy Corp.",
    companyUrl: "https://www.valero.com/",
    logo: "/logos/valero.png",
    location: "Montréal, QC, Canada",
    dates: "May 2025 – Aug 2025",
    title: "Mechanical Engineering Intern, Reliability",
    highlights: [
      "Designed a controlled tank-emptying modification that maintained a 300 Pa vacuum limit.",
      "Prepared MOC, P&ID, and commissioning documentation for a hazardous-service pump replacement.",
      "Developed a magnetic pre-filtration concept targeting over 95% capture above 10 μm.",
      "Reconciled pump BOMs and built a terminal-wide MOV and actuator register from field data.",
    ],
    summary:
      "Reliability placement focused on hazardous-service modifications, safe commissioning, equipment standardization, and maintenance readiness at a petroleum terminal.",
    whatIDid: [
      "Developed a tank-emptying modification using temporary piping, isolation valves, vacuum-truck connections, and air admission to maintain a jet-fuel tank within its 300 Pa vacuum limit.",
      "Prepared MOC documentation, updated P&IDs, and authored commissioning checklists for a submersible pump replacement while coordinating mechanical, structural, and electrical scope.",
      "Developed a low-pressure-drop magnetic pre-filtration concept for a 5,000 m³/h hazardous-vapour system, targeting more than 95% capture of ferrous particles above 10 μm at less than 1 inWC pressure drop.",
      "Reconciled field and OEM information against SAP PM bills of material across multiple pump families to identify obsolescence, interchangeability, and master-data gaps.",
      "Completed field walkdowns to verify MOV and actuator torque, speed, voltage, and mounting data and resolve equipment-tag gaps.",
    ],
    tools: ["SAP PM", "MOC", "P&IDs", "Commissioning checklists", "Excel", "Field walkdowns"],
    topSkills: [
      "Hazardous-service mechanical modification design",
      "MOC documentation and multidisciplinary coordination",
      "Pump BOM reconciliation and lifecycle readiness",
      "MOV and actuator data standardization",
      "Maintainability-focused filtration design",
    ],
    outcomes: [
      "Supported safe, traceable startup of a hazardous-service pump replacement.",
      "Improved pump and actuator spare-parts readiness through verified field and OEM data.",
      "Produced practical concepts for controlled tank emptying and high-flow ferrous-particle capture.",
    ],
    heroImage: "/experience/valero/hero.jpg",
    gallery: [
      { src: "/experience/valero/terminal.jpg", alt: "Valero terminal environment", caption: "Terminal environment" },
      { src: "/experience/valero/piping.jpg", alt: "Piping and infrastructure", caption: "Piping and infrastructure" },
      { src: "/experience/valero/equipment.jpg", alt: "Terminal equipment", caption: "Equipment and assets" },
    ],
  },
  {
    slug: "kruger-wayagamack-2024",
    company: "Kruger Inc.",
    companyUrl: "https://www.kruger.com/",
    logo: "/logos/kruger.png",
    location: "Trois-Rivières, QC, Canada",
    dates: "May 2024 – Aug 2024",
    title: "Mechanical Engineering Intern, Reliability",
    highlights: [
      "Supported condition-based planning for the Paper Machine 4 shutdown.",
      "Prepared weekly vibration and condition-monitoring reviews for critical pulp and paper equipment.",
      "Audited lubrication and PM routes for duplicate tasks, missing coverage, and criticality.",
      "Standardized more than 9,000 roller-history records and developed a belt-management tool.",
    ],
    summary:
      "Pulp-and-paper reliability placement focused on outage planning, condition monitoring, lubrication governance, and practical equipment-history tools.",
    whatIDid: [
      "Supported planning for the Paper Machine 4 shutdown by reviewing equipment condition and helping prioritize critical outage work.",
      "Prepared and helped conduct weekly condition-monitoring reviews, consolidating Spartakus vibration reports, identifying critical equipment, and tracking repair actions.",
      "Audited lubrication and preventive-maintenance routes for duplicate tasks and coverage gaps and created a standardized Excel tracker for lubrication points, products, frequencies, and completion.",
      "Standardized more than 9,000 roller-history records to calculate service duration from installation and removal dates.",
      "Developed a belt-management tool incorporating tension calculations for plant fans and agitators.",
    ],
    tools: ["Spartakus", "Vibration analysis", "Excel", "Lubrication routes", "Shutdown planning"],
    topSkills: [
      "Condition-monitoring review and action tracking",
      "Shutdown maintenance prioritization",
      "Lubrication and PM route auditing",
      "Equipment-history standardization",
      "Belt tension and lifecycle management",
    ],
    outcomes: [
      "Improved visibility of critical equipment condition before shutdown work.",
      "Strengthened lubrication and PM route coverage through duplicate and gap identification.",
      "Enabled data-driven roller replacement and belt-management decisions.",
    ],
    heroImage: "/experience/kruger/hero.jpg",
    gallery: [
      { src: "/experience/kruger/mill.jpg", alt: "Kruger mill environment", caption: "Mill environment" },
      { src: "/experience/kruger/maintenance.jpg", alt: "Maintenance work area", caption: "Maintenance area" },
      { src: "/experience/kruger/cbm.jpg", alt: "Condition monitoring", caption: "Condition monitoring" },
    ],
  },
  {
    slug: "rio-tinto-tdp-2023",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy, QC, Canada",
    dates: "May 2023 – Aug 2023",
    title: "Mechanical Engineering Intern, Reliability",
    highlights: [
      "Designed mechanical fixtures and protective guards with structural and weld calculations.",
      "Surveyed, designed, and field-verified piping-elbow modifications to reduce pressure drop.",
      "Collected evidence for a fire-incident investigation and implemented recurrence controls.",
      "Developed conveyor maintenance plans and improved AssetWise and SAP PM parts traceability.",
    ],
    summary:
      "Metallurgical-plant reliability placement combining mechanical design, field verification, incident investigation, and maintenance-data improvement.",
    whatIDid: [
      "Designed mechanical fixtures and protective guards in SolidWorks and AutoCAD and completed bending-stress, deflection, and weld-sizing calculations.",
      "Surveyed, designed, and field-verified process-piping elbow modifications intended to reduce pressure drop.",
      "Collected evidence for a fire incident caused by a water leak and developed and implemented mitigation measures to prevent recurrence.",
      "Developed conveyor maintenance plans and updated AssetWise and SAP PM parts records to improve traceability and maintenance readiness.",
    ],
    tools: ["SolidWorks", "AutoCAD", "SAP PM", "AssetWise", "Mechanical calculations", "Incident investigation"],
    topSkills: [
      "Mechanical fixture and machine-guarding design",
      "Bending, deflection, and weld-sizing calculations",
      "Process-piping field survey and modification",
      "Incident evidence collection and mitigation",
      "Conveyor maintenance planning and parts traceability",
    ],
    outcomes: [
      "Delivered field-verified designs for safer equipment and improved process piping.",
      "Reduced recurrence risk following a plant fire investigation.",
      "Improved conveyor maintenance readiness through updated plans and parts records.",
    ],
    heroImage: "/experience/rio-tinto/plant.jpg",
    gallery: [
      { src: "/experience/rio-tinto/plant.jpg", alt: "Rio Tinto plant environment", caption: "Plant environment" },
      { src: "/experience/rio-tinto/safety.jpg", alt: "Industrial safety environment", caption: "Safety and field work" },
    ],
  },
  {
    slug: "soucy-maintenance-2022",
    company: "Soucy",
    companyUrl: "https://www.soucy-group.com/en",
    logo: "/logos/soucy.png",
    location: "Drummondville, QC, Canada",
    dates: "May 2022 – Aug 2022",
    title: "Mechanical Engineering Intern, Maintenance",
    highlights: [
      "Coordinated annual overhead-crane and lifting-equipment inspections and corrective follow-up.",
      "Developed an oil-waste system that improved safety and reduced handling costs by more than CAD 30,000.",
      "Supported preventive-maintenance system implementation and machine-guarding projects.",
      "Assisted production-equipment troubleshooting and coordinated replacement-parts requirements.",
    ],
    summary:
      "Manufacturing maintenance placement focused on inspection coordination, environmental improvements, preventive maintenance, machine safety, and technician support.",
    whatIDid: [
      "Coordinated annual inspection of overhead cranes and lifting equipment, prepared the asset scope, accompanied the external inspector, and tracked deficiencies through documented closure.",
      "Developed an oil-waste handling and storage system with the environmental-services provider, eliminating unsafe outdoor accumulation of open containers.",
      "Supported implementation of a new preventive-maintenance system and department-efficiency projects.",
      "Designed, fabricated, and installed machine-safety guards with internal stakeholders.",
      "Supported electromechanical technicians in troubleshooting rubber-track production equipment and coordinated replacement-part needs with suppliers and purchasing.",
    ],
    tools: ["Preventive maintenance", "Inspection coordination", "Machine guarding", "Supplier coordination", "Shop-floor troubleshooting"],
    topSkills: [
      "Lifting-equipment inspection coordination",
      "Corrective-action tracking and closure",
      "Environmental handling-system improvement",
      "Machine-safety guarding",
      "Maintenance troubleshooting and parts coordination",
    ],
    outcomes: [
      "Improved closure and traceability for lifting-equipment inspection findings.",
      "Eliminated unsafe oil-waste storage and reduced handling costs by more than CAD 30,000.",
      "Supported safer equipment and more responsive maintenance execution.",
    ],
    heroImage: "/experience/soucy/hero.jpg",
    gallery: [
      { src: "/experience/soucy/shopfloor.jpg", alt: "Soucy shop floor", caption: "Shop-floor environment" },
      { src: "/experience/soucy/guarding.jpg", alt: "Machine guarding", caption: "Machine-safety guarding" },
    ],
  },
  {
    slug: "rio-tinto-ugs-2021-2022",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy, QC, Canada",
    dates: "May 2021 – Apr 2022",
    title: "Mechanical Engineering Intern, Process Optimisation",
    highlights: [
      "Developed equipment-monitoring interfaces for the upgraded-slag plant.",
      "Supported RCA and maintenance-plan development with reliability engineers.",
      "Completed compliance reviews to identify improvement and investment opportunities.",
      "Contributed to FMECA for the acid-regeneration plant.",
    ],
    summary:
      "Process-optimisation placement supporting predictive maintenance, structured reliability analysis, compliance review, and maintenance-plan development.",
    whatIDid: [
      "Developed equipment-monitoring interfaces for the upgraded-slag plant to support reliability initiatives and predictive-maintenance work.",
      "Assisted reliability engineers with root-cause analysis and maintenance-plan development.",
      "Conducted compliance reviews to identify improvement and investment opportunities.",
      "Contributed to FMECA for the acid-regeneration plant, improving visibility of equipment failure modes, effects, and operational criticality.",
    ],
    tools: ["Equipment monitoring", "RCA", "FMECA", "Maintenance planning", "Compliance reviews"],
    topSkills: [
      "Equipment-monitoring interface development",
      "Root-cause analysis support",
      "FMECA participation",
      "Maintenance-plan development",
      "Compliance and investment-opportunity review",
    ],
    outcomes: [
      "Improved equipment visibility for predictive and reliability work.",
      "Strengthened maintenance planning through RCA and structured analysis.",
      "Improved risk transparency for acid-regeneration plant equipment.",
    ],
    heroImage: "/experience/rio-tinto/hero-ugs.jpg",
    gallery: [
      { src: "/experience/rio-tinto/hero-ugs.jpg", alt: "Upgraded-slag plant environment", caption: "UGS environment" },
      { src: "/experience/rio-tinto/plant.jpg", alt: "Plant equipment", caption: "Plant equipment" },
      { src: "/experience/rio-tinto/safety.jpg", alt: "Industrial safety environment", caption: "Safety and field work" },
    ],
  },
];
