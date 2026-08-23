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
    slug: "imperial-oil-reliability-2026",
    company: "Imperial Oil / ExxonMobil",
    companyUrl: "https://www.imperialoil.ca/",
    location: "Calgary / Kearl Oil Sands, Alberta, Canada",
    dates: "May 2026 – Present",
    title: "Reliability & Maintenance Engineering Associate",
    highlights: [
      "Analyze SAP equipment history and maintenance work orders for heavy mobile mining assets to support reliability investigations and maintenance decisions.",
      "Apply life-data and Weibull methods with failed and suspended events to characterize component reliability and expected survival.",
      "Build structured reliability datasets, dashboards, and repeatable analytical workflows using Excel, Python/PySpark, Databricks, JMP Pro, and Power BI.",
      "Support field-focused investigations involving haul trucks, dozers, pumps, structural inspection references, failure modes, and maintenance strategy.",
    ],
    summary:
      "Reliability engineering role in a large mining environment, combining field context, SAP maintenance history, life-data analysis, and scalable data workflows to turn complex equipment information into decision-ready reliability evidence.",
    whatIDid: [
      "Review SAP PM work orders, equipment history, counters, functional locations, parts, symptoms, and failure records to distinguish true failures from non-failure replacements and maintenance events.",
      "Run Weibull maximum-likelihood and survival analyses, including censored data, to estimate characteristic life and expected survival metrics for component populations.",
      "Standardize location, symptom, part, and failure-mode data so recurring reliability questions can be analyzed consistently across fleets and time periods.",
      "Develop Databricks/PySpark and Excel-based tools that reduce repetitive data preparation and make reliability analyses reproducible.",
      "Create and improve field inspection references by comparing equipment configurations, validating component naming, and incorporating site observations and photographs.",
      "Translate analytical findings into concise engineering outputs for review by maintenance, reliability, and equipment stakeholders.",
    ],
    tools: [
      "SAP PM",
      "Databricks / PySpark",
      "Python",
      "Excel / Power Query",
      "Power BI",
      "JMP Pro",
      "Weibull / life-data analysis",
      "RCFA / FMECA",
      "Heavy mobile equipment",
    ],
    topSkills: [
      "Reliability engineering using maintenance and equipment-history data",
      "Weibull MLE and censored life-data analysis",
      "Failure-event classification and failure-mode structuring",
      "Heavy-equipment field and structural reliability support",
      "Scalable analytics and repeatable engineering workflows",
    ],
    outcomes: [
      "Converted fragmented maintenance and equipment data into structured evidence that supports reliability reviews and maintenance decisions.",
      "Reduced manual analysis effort by building reusable data-processing and reliability-analysis workflows.",
      "Improved consistency of failure classification and inspection documentation across engineering investigations.",
      "Supported cross-functional review with traceable methods rather than anecdotal conclusions.",
    ],
  },
  {
    slug: "valero-energy-2025",
    company: "Valero Energy",
    companyUrl: "https://www.valero.com/",
    logo: "/logos/valero.png",
    location: "Montréal East Terminal, QC, Canada",
    dates: "May – Aug 2025",
    title: "Mechanical Engineering Intern (Reliability)",
    highlights: [
      "Standardized pump families and MOV/actuator assemblies by reconciling OEM documentation with CMMS/SAP asset information.",
      "Built an actuator register covering key technical attributes used for maintenance planning, spares, and interchangeability decisions.",
      "Supported MOC and engineering documentation including P&IDs, commissioning checks, and traceability updates.",
      "Developed maintainability-focused design concepts for process equipment and filtration applications.",
    ],
    summary:
      "Reliability internship focused on asset standardization, rotating/process equipment, maintenance data quality, and practical design improvements in a terminal environment.",
    whatIDid: [
      "Reconciled OEM and CMMS/SAP information for pumps and actuators to identify standardization, obsolescence, and interchangeability opportunities.",
      "Created and maintained a structured MOV/actuator register covering torque, speed, voltage, mounting, and asset identifiers.",
      "Supported Management of Change documentation and engineering traceability through drawing and commissioning-document updates.",
      "Developed practical design concepts intended to improve maintainability and serviceability in process-equipment applications.",
    ],
    tools: ["SAP PM / CMMS", "Excel", "P&IDs", "MOC documentation", "Pump and actuator data", "Mechanical design"],
    topSkills: [
      "Asset-data reconciliation and BOM validation",
      "Pump and actuator standardization",
      "Maintenance planning and lifecycle thinking",
      "Engineering documentation and MOC support",
    ],
    outcomes: [
      "Improved visibility and consistency of asset information used for maintenance and spares decisions.",
      "Created reusable engineering registers that reduced reliance on scattered vendor documentation.",
      "Strengthened documentation traceability for maintenance and engineering changes.",
    ],
    heroImage: "/experience/valero/hero.jpg",
    gallery: [
      { src: "/experience/valero/terminal.jpg", alt: "Valero terminal environment", caption: "Terminal environment" },
      { src: "/experience/valero/piping.jpg", alt: "Piping and infrastructure", caption: "Piping and infrastructure" },
      { src: "/experience/valero/equipment.jpg", alt: "Equipment area", caption: "Equipment and assets" },
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
      "Rebuilt lubrication and preventive-maintenance routes in Spartakus CMMS, removing duplicates and closing coverage gaps.",
      "Consolidated condition-monitoring information into a single dashboard to improve reliability review and follow-up.",
      "Automated a large roller-life dataset to support remaining-life and MTBF analysis.",
      "Built engineering tools for belt selection and tensioning and supported RCA/FMECA-related maintenance improvements.",
    ],
    summary:
      "Reliability internship in pulp and paper focused on PM execution quality, condition monitoring, life-data visibility, and practical maintenance-engineering tools.",
    whatIDid: [
      "Standardized lubrication and PM routes in Spartakus CMMS and Excel, eliminating duplicate tasks and addressing coverage gaps.",
      "Combined multi-source vibration and health reporting into a concise CBM dashboard used in reliability discussions.",
      "Cleaned and automated a large roller-life dataset to calculate life, remaining-life, and trend information for replacement planning.",
      "Created an Excel-based belt selection and tensioning tool using engineering formulas.",
      "Supported failure analysis and translated findings into maintenance-task and documentation improvements.",
    ],
    tools: ["Spartakus CMMS", "Excel / Power Query", "CBM / vibration", "MTBF / life analysis", "RCA / FMECA"],
    topSkills: [
      "Lubrication and PM optimization",
      "Condition-monitoring dashboarding",
      "Maintenance data automation",
      "Life and replacement planning",
      "Reliability problem solving",
    ],
    outcomes: [
      "Improved PM-route quality and maintainability of the maintenance program.",
      "Made condition information easier to review and act on through consolidated reporting.",
      "Created repeatable tools for replacement planning and belt-maintenance decisions.",
    ],
    heroImage: "/experience/kruger/hero.jpg",
    gallery: [
      { src: "/experience/kruger/mill.jpg", alt: "Kruger mill environment", caption: "Mill environment" },
      { src: "/experience/kruger/maintenance.jpg", alt: "Maintenance work area", caption: "Maintenance area" },
      { src: "/experience/kruger/cbm.jpg", alt: "Condition monitoring", caption: "Condition-monitoring focus" },
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
      "Designed mechanical fixtures and guarding in SolidWorks/AutoCAD with safety and structural considerations.",
      "Supported maintainability improvements to equipment layouts and access points.",
      "Built asset-health reporting for critical production equipment and supported reliability investigations.",
      "Improved maintenance and parts traceability through AssetWise and SAP-related documentation work.",
    ],
    summary:
      "Reliability internship combining field-oriented mechanical design, maintainability, asset-health visibility, and maintenance-documentation improvement.",
    whatIDid: [
      "Designed fixtures and machine guarding and supported engineering validation for safe field installation.",
      "Proposed layout and access changes intended to improve maintainability and ergonomics.",
      "Built recurring dashboards for critical assets to support quicker review of equipment condition.",
      "Supported RCFA work and follow-through on corrective actions and maintenance documentation.",
      "Updated maintenance plans and equipment/parts information in asset-management systems.",
    ],
    tools: ["SolidWorks", "AutoCAD", "Excel", "RCFA", "AssetWise", "SAP PM"],
    topSkills: ["Mechanical design", "Maintainability", "Reliability reporting", "RCFA support", "Maintenance traceability"],
    outcomes: [
      "Improved equipment safety and maintainability through practical mechanical-design changes.",
      "Improved visibility of critical-asset condition through structured reporting.",
      "Strengthened maintenance traceability through better documentation and asset information.",
    ],
    heroImage: "/experience/rio-tinto/plant.jpg",
    gallery: [
      { src: "/experience/rio-tinto/plant.jpg", alt: "Rio Tinto plant environment", caption: "Plant environment" },
      { src: "/experience/rio-tinto/safety.jpg", alt: "Safety and field environment", caption: "Safety and field focus" },
    ],
  },
  {
    slug: "soucy-maintenance-2022",
    company: "Soucy International",
    companyUrl: "https://www.soucy-group.com/en",
    logo: "/logos/soucy.png",
    location: "Drummondville, QC, Canada",
    dates: "May – Aug 2022",
    title: "Maintenance Supervisor Intern",
    highlights: [
      "Supported preventive-maintenance deployment in INTERAL CMMS and improved inventory/master-data organization.",
      "Designed, fabricated, and installed machine guarding for shop-floor safety improvements.",
      "Built weekly maintenance schedules and coordinated execution with production teams.",
    ],
    summary:
      "Maintenance-focused internship centered on preventive maintenance, maintenance scheduling, CMMS data quality, and hands-on safety improvements.",
    whatIDid: [
      "Supported PM implementation in INTERAL CMMS and reorganized maintenance inventory/master data.",
      "Designed and installed custom machine guarding for industrial equipment.",
      "Prepared weekly maintenance schedules and coordinated work with production requirements.",
    ],
    tools: ["INTERAL CMMS", "Excel", "Maintenance scheduling", "Mechanical guarding", "Shop-floor coordination"],
    topSkills: ["Preventive maintenance", "CMMS data quality", "Safety-focused design", "Maintenance planning"],
    outcomes: [
      "Improved maintenance scheduling inputs through cleaner data and better inventory organization.",
      "Reduced safety exposure through engineered guarding improvements.",
      "Strengthened coordination between maintenance and production.",
    ],
    heroImage: "/experience/soucy/hero.jpg",
    gallery: [
      { src: "/experience/soucy/shopfloor.jpg", alt: "Soucy shop floor", caption: "Shop-floor environment" },
      { src: "/experience/soucy/guarding.jpg", alt: "Machine guarding", caption: "Safety-guarding work" },
    ],
  },
];
