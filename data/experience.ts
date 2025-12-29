export type ExperienceItem = {
  slug: string;

  company: string;
  companyUrl: string;
  logo: string;

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

  // ✅ NEW: multiple photos per company/page
  gallery?: { src: string; alt: string; caption?: string }[];
};

export const experience: ExperienceItem[] = [
  {
    slug: "valero-energy-2025",
    company: "Valero Energy",
    companyUrl: "https://www.valero.com/",
    logo: "/logos/valero.png",
    location: "Montréal East Terminal, QC, Canada",
    dates: "May – Aug 2025",
    title: "Mechanical Engineering Intern (Reliability)",
    highlights: [
      "Standardized pump families + MOV/actuator assemblies by reconciling OEM vs SAP PM BOMs.",
      "Built a terminal-wide MOV/actuator register (torque, RPM, voltage, ISO 5211 mount) and closed tag gaps.",
      "Supported MOC deliverables (P&IDs, commissioning checklists/SWIs, document traceability).",
      "Designed a gravity-drain + low-ΔP magnetic pre-filtration system for hazardous-vapor service.",
    ],
    summary:
      "Reliability internship focused on lifecycle control through standardized asset data, improved traceability, and practical design improvements that strengthen safety and maintainability.",
    whatIDid: [
      "Reconciled OEM documentation against SAP PM BOMs to standardize pump families and actuator assemblies; identified obsolescence and interchangeability to support lifecycle cost control.",
      "Created and maintained a terminal-wide MOV/actuator register (torque, RPM, voltage, ISO 5211 mount) and resolved tag gaps to improve reliability planning and spares decisions.",
      "Contributed to Management of Change (MOC): updated P&IDs, wrote commissioning checklists/SWIs, and ensured revision/traceability for auditable start-ups.",
      "Designed a gravity-drain and low-ΔP magnetic pre-filtration system for hazardous-vapor service to improve maintainability and extend service intervals.",
    ],
    tools: [
      "SAP PM (BOM reconciliation)",
      "Excel (advanced analysis/registers)",
      "P&ID / drafting + revision control",
      "MOC documentation",
      "Reliability planning (spares/risk-based thinking)",
    ],
    topSkills: [
      "BOM reconciliation between SAP PM and OEM sources",
      "Actuator/MOV sizing and standardization (torque/RPM/ISO 5211)",
      "Reliability register building and gap closure",
      "MOC documentation with P&ID updates and commissioning checklists",
      "Maintainability-focused filtration concepting",
    ],
    outcomes: [
      "Improved asset data quality and standardization to support better spares/lifecycle decisions.",
      "Increased traceability of MOV/actuator assets, enabling more accurate reliability planning.",
      "Delivered MOC documentation that supports safe, auditable commissioning.",
      "Proposed a maintainability-focused filtration concept that reduces servicing burden and improves safety.",
    ],
    // ✅ simple folder name (no numbers)
    heroImage: "/experience/valero/hero.jpg",
    gallery: [
      { src: "/experience/valero/terminal.jpg", alt: "Valero terminal environment", caption: "Terminal environment" },
      { src: "/experience/valero/piping.jpg", alt: "Piping and infrastructure", caption: "Piping / infrastructure" },
      { src: "/experience/valero/equipment.jpg", alt: "Equipment area", caption: "Equipment / assets" },
    ],
  },

  {
    slug: "kruger-wayagamack-2024",
    company: "Kruger Inc.",
    companyUrl: "https://www.kruger.com/",
    logo: "/logos/kruger.png",
    location: "Trois-Rivières, QC, Canada",
    dates: "May – Aug 2024",
    title: "Mechanical Engineering Intern (Reliability)",
    highlights: [
      "Rebuilt and standardized lubrication + PM routes (Spartakus CMMS + Excel); removed duplicates and filled gaps.",
      "Consolidated vibration health reports into a single CBM dashboard; led weekly reliability meetings.",
      "Automated a 9,000-row roller-life database (life + remaining-life metrics, MTBF tracking).",
      "Built an Excel belt-tension/selection tool to standardize belt sizing and reduce premature failures.",
    ],
    summary:
      "Reliability internship in pulp & paper focused on PM execution quality, condition monitoring visibility, and practical tools that improve decision-making speed and consistency.",
    whatIDid: [
      "Standardized lubrication/PM routes in CMMS + Excel, eliminating duplicates and closing coverage gaps to improve compliance and reduce lubrication-related downtime.",
      "Merged multi-source vibration/health reporting into a single CBM dashboard and facilitated weekly reliability discussions with operations and maintenance.",
      "Cleaned and automated a large roller-life dataset (~9k rows), generating life and remaining-life metrics to support replacement planning and trend analysis (MTBF).",
      "Created an Excel belt tension + selection tool using formulas to standardize belt sizing and prevent early failures.",
      "Supported FMECA and RCAs, translating findings into updated PM tasks and standard work documentation.",
    ],
    tools: [
      "Spartakus CMMS",
      "Excel (Power Query / automation / formulas)",
      "CBM dashboards (vibration reporting)",
      "MTBF / life-data analysis",
      "FMECA / RCA support",
    ],
    topSkills: [
      "Lubrication/PM route rebuilds in CMMS (Spartakus)",
      "CBM/vibration dashboarding and weekly reliability rhythms",
      "Power Query and Excel automation for life-data analysis",
      "Belt tension/selection standardization via engineering formulas",
      "FMECA/RCA translation into PM updates",
    ],
    outcomes: [
      "Higher PM/lubrication route quality and clearer execution paths.",
      "Faster reliability decision-making with a single CBM dashboard + weekly review rhythm.",
      "Data-driven replacement planning from automated remaining-life metrics and trends.",
      "Reduced belt-related failures through standardized selection/tension guidance.",
    ],
    heroImage: "/experience/kruger/hero.jpg",
    gallery: [
      { src: "/experience/kruger/mill.jpg", alt: "Kruger mill environment", caption: "Mill environment" },
      { src: "/experience/kruger/maintenance.jpg", alt: "Maintenance work area", caption: "Maintenance area" },
      { src: "/experience/kruger/cbm.jpg", alt: "Condition monitoring", caption: "CBM / vibration focus" },
    ],
  },

  {
    slug: "rio-tinto-tdp-2023",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy Metallurgical Complex, QC, Canada",
    dates: "May – Aug 2023",
    title: "Mechanical Engineering Intern (Reliability)",
    highlights: [
      "Designed fixtures/guarding in SolidWorks/AutoCAD validated by structural and safety calculations.",
      "Modified layouts (piping elbows/access points) to improve maintainability and ergonomics.",
      "Built daily/weekly dashboards for TDP critical assets to shorten alert-to-action time.",
      "Assisted RCFAs for fire incidents and updated mitigation measures; improved traceability in AssetWise/SAP PM.",
    ],
    summary:
      "Reliability internship bridging design and field execution: safety-focused mechanical design, maintainability improvements, and asset visibility tools that support proactive maintenance.",
    whatIDid: [
      "Designed engineered fixtures and machine guarding using SolidWorks/AutoCAD and supported validation with structural/safety calculations.",
      "Implemented layout modifications (piping elbows/access points) to improve maintainability and operator ergonomics.",
      "Built daily/weekly dashboards for critical assets in Titanium Dioxide Production (TDP) to enable proactive maintenance and quicker response.",
      "Supported RCFAs for fire incidents: documented causes, helped implement mitigation actions, and improved maintenance documentation quality.",
      "Developed/updated maintenance plans for conveyors; updated/coded parts in AssetWise and SAP PM for better traceability.",
    ],
    tools: [
      "SolidWorks / AutoCAD",
      "Excel dashboards",
      "RCFA support",
      "AssetWise + SAP PM (traceability)",
      "Maintainability / ergonomics improvements",
    ],
    topSkills: [
      "SolidWorks/AutoCAD guarding and fixture design with validation checks",
      "Layout and ergonomics improvements for maintainability",
      "Reliability dashboards for critical TDP assets",
      "RCFA documentation and mitigation follow-through",
      "Maintenance plan and parts traceability in AssetWise/SAP PM",
    ],
    outcomes: [
      "Safer and more maintainable equipment via engineered guarding and layout improvements.",
      "Improved visibility of critical asset status and faster alert-to-action cycles.",
      "Better maintenance traceability through structured plans and parts coding in CMMS tools.",
    ],
    // you can pick any rio-tinto photo as hero for this role
    heroImage: "/experience/rio-tinto/plant.jpg",
    gallery: [
      { src: "/experience/rio-tinto/plant.jpg", alt: "Rio Tinto plant environment", caption: "Plant environment" },
      { src: "/experience/rio-tinto/safety.jpg", alt: "Safety / field environment", caption: "Safety / field focus" },
    ],
  },

  {
    slug: "soucy-maintenance-2022",
    company: "Soucy International",
    companyUrl: "https://www.soucy-group.com/en",
    logo: "/logos/soucy.png",
    location: "Drummondville, QC, Canada",
    dates: "May – Aug 2022",
    title: "Mechanical Engineering Intern (Maintenance Supervisor)",
    highlights: [
      "Supported preventive maintenance deployment in INTERAL CMMS; cleaned inventory/master data.",
      "Designed/fabricated/installed custom machine guarding aligned with plant safety standards.",
      "Produced weekly maintenance schedules and coordinated with production to reduce unplanned downtime.",
    ],
    summary:
      "Maintenance-focused internship centered on PM deployment, data cleanliness for scheduling accuracy, and hands-on safety guarding improvements.",
    whatIDid: [
      "Supported rollout of preventive maintenance within INTERAL CMMS by reorganizing inventory and cleansing master data to improve scheduling accuracy.",
      "Designed, fabricated, and installed custom machine guarding compliant with plant safety expectations.",
      "Built weekly maintenance schedules and coordinated execution with production to improve completion rates and reduce unplanned downtime.",
    ],
    tools: [
      "INTERAL CMMS",
      "Excel (tracking/schedules)",
      "Shop-floor coordination",
      "Design-for-safety guarding",
    ],
    topSkills: [
      "Preventive maintenance deployment within INTERAL CMMS",
      "Inventory/master-data cleansing for scheduling accuracy",
      "Custom machine guarding design, fabrication, and installation",
      "Maintenance scheduling and production coordination",
    ],
    outcomes: [
      "Improved PM scheduling quality through cleaner data and better inventory organization.",
      "Reduced safety risk through compliant guarding installations.",
      "Stronger maintenance-production coordination for fewer interruptions and higher task completion.",
    ],
    heroImage: "/experience/soucy/hero.jpg",
    gallery: [
      { src: "/experience/soucy/shopfloor.jpg", alt: "Soucy shopfloor", caption: "Shopfloor environment" },
      { src: "/experience/soucy/guarding.jpg", alt: "Machine guarding", caption: "Safety guarding work" },
    ],
  },

  {
    slug: "rio-tinto-ugs-2021-2022",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy Metallurgical Complex, QC, Canada",
    dates: "May 2021 – 2022",
    title: "Mechanical Engineering Intern (Process Optimization)",
    highlights: [
      "Developed equipment monitoring interfaces for UGS plant to support reliability initiatives.",
      "Supported RCA and maintenance-plan development with the reliability engineer.",
      "Contributed to compliance reviews and investment opportunity identification.",
      "Participated in FMECA for the Acid Regeneration Plant (ARP) to improve risk visibility.",
    ],
    summary:
      "Process optimization internship supporting reliability through monitoring interfaces, structured analysis (RCA/FMECA), and compliance-driven improvement planning.",
    whatIDid: [
      "Developed equipment monitoring interfaces for the Upgraded Titanium Slag (UGS) plant to support predictive and reliability initiatives.",
      "Assisted with RCA and maintenance-plan development alongside the reliability engineer.",
      "Completed compliance reviews and identified improvement/investment opportunities based on field findings.",
      "Contributed to FMECA activities for the Acid Regeneration Plant (ARP) to improve visibility of failure risk and operational exposure.",
    ],
    tools: [
      "Monitoring/visualization interfaces",
      "RCA support",
      "FMECA participation",
      "Compliance reviews / audit thinking",
    ],
    topSkills: [
      "Equipment monitoring/visualization interface design",
      "RCA and FMECA participation for reliability improvements",
      "Compliance review and audit-minded gap identification",
      "Maintenance plan development and coding for traceability",
    ],
    outcomes: [
      "Improved monitoring visibility supporting proactive reliability work.",
      "Stronger maintenance planning inputs via RCA support and structured analysis.",
      "Better risk transparency for key assets/processes through FMECA contribution.",
    ],
    heroImage: "/experience/rio-tinto/hero-ugs.jpg",
    gallery: [
      { src: "/experience/rio-tinto/hero-ugs.jpg", alt: "UGS environment", caption: "UGS environment" },
      { src: "/experience/rio-tinto/plant.jpg", alt: "Plant equipment", caption: "Plant equipment" },
      { src: "/experience/rio-tinto/safety.jpg", alt: "Safety environment", caption: "Safety / field environment" },
    ],
  },
];
