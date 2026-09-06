export type ExperienceItem = {
  slug: string;
  company: string;
  companyUrl: string;
  logo?: string;
  location: string;
  dates: string;
  title: string;
  sector: string;
  summary: string;
  highlights: string[];
  methods: string[];
  linkedProjects: { label: string; href: string }[];
  heroImage?: string;
  imageCaption?: string;
};

export const experience: ExperienceItem[] = [
  {
    slug: "imperial-oil-reliability-2026",
    company: "Imperial Oil / ExxonMobil",
    companyUrl: "https://www.imperialoil.ca/",
    location: "Calgary / Kearl Oil Sands, Alberta, Canada",
    dates: "May 2026 – Present",
    title: "Reliability & Maintenance Engineering Associate · 12-month student placement",
    sector: "Mining · Heavy mobile equipment",
    summary: "Supporting mobile-equipment reliability and maintenance readiness by combining SAP evidence, equipment strategy, life-data analysis and practical field documentation.",
    highlights: [
      "Led a data-quality Kaizen workstream that consolidated more than 500 symptom codes into 95 ISO 14224-aligned categories and improved coding accuracy from 70% to 80% against an 85% target.",
      "Designed and executed RCM analysis for a 36-unit D11 dozer fleet, identifying undercarriage cost concentration and a 4.6× spread between bad actors.",
      "Developed an OEM support assessment across 73 CAT 797F haul trucks and classified 183 qualifying structural-tube events.",
      "Built a Weibull-based maintenance-cost model for NRS coolers and a fleet-stewardship platform covering more than 40 units across eight equipment types.",
    ],
    methods: ["SAP PM", "RCM", "FMEA/FMECA", "Weibull MLE", "Python / PySpark", "Databricks", "Power BI", "JMP Pro"],
    linkedProjects: [
      { label: "Dozer fleet RCM", href: "/projects/dozer-fleet-rcm" },
      { label: "Data standardisation", href: "/projects/maintenance-data-standardisation" },
      { label: "Component life economics", href: "/projects/component-life-economics" },
      { label: "OEM support assessment", href: "/projects/oem-support-assessment" },
    ],
  },
  {
    slug: "valero-energy-2025",
    company: "Valero Energy",
    companyUrl: "https://www.valero.com/",
    logo: "/logos/valero.png",
    location: "Montréal, Quebec, Canada",
    dates: "May – Aug 2025",
    title: "Mechanical Engineering Intern, Reliability",
    sector: "Oil & gas · Terminal operations",
    summary: "Supported brownfield mechanical modifications, rotating-equipment readiness, MOC, commissioning and asset-data quality in an operating fuel terminal.",
    highlights: [
      "Developed a hydrocarbon-drainage modification with independent routes, isolation and controlled air admission for safe tank emptying.",
      "Prepared MOC documentation, P&ID updates and commissioning checks for a hazardous-service submersible-pump replacement.",
      "Reconciled field and OEM information against SAP PM bills of material across pump families.",
      "Completed MOV and actuator field walkdowns and built a terminal-wide register for maintenance and spares planning.",
    ],
    methods: ["Brownfield design", "P&IDs", "MOC", "Commissioning", "Pumps", "Valves / actuators", "SAP PM", "Field verification"],
    linkedProjects: [{ label: "Fuel-terminal brownfield modifications", href: "/projects/terminal-brownfield-modifications" }],
    heroImage: "/experience/valero/terminal.jpg",
    imageCaption: "Publicly available terminal-context image; not project evidence.",
  },
  {
    slug: "kruger-wayagamack-2024",
    company: "Kruger",
    companyUrl: "https://www.kruger.com/",
    logo: "/logos/kruger.png",
    location: "Trois-Rivières, Quebec, Canada",
    dates: "May – Aug 2024",
    title: "Mechanical Engineering Intern, Reliability",
    sector: "Pulp & paper · Process equipment",
    summary: "Worked at the maintenance decision level: turnaround defects, weekly condition review, lubrication and PM routes, equipment history and practical calculation tools.",
    highlights: [
      "Supported turnaround execution by translating inspection findings into repair scopes and return-to-service follow-up.",
      "Prepared weekly condition-monitoring reviews, tracked repair actions and communicated lubrication requirements.",
      "Audited lubrication and PM routes for coverage gaps, duplication and critical-equipment priority.",
      "Standardised more than 9,000 roller-history records and developed an Excel belt-management tool with tension calculations.",
    ],
    methods: ["Condition monitoring", "PM optimisation", "Lubrication", "Turnaround support", "Excel", "Spartakus CMMS"],
    linkedProjects: [{ label: "CBM and PM route improvement", href: "/projects/cbm-pm-route-improvement" }],
    heroImage: "/experience/kruger/mill.jpg",
    imageCaption: "Publicly available mill-context image; not project evidence.",
  },
  {
    slug: "rio-tinto-tdp-2023",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy, Quebec, Canada",
    dates: "May – Aug 2023",
    title: "Mechanical Engineering Intern, Reliability",
    sector: "Metallurgy · Plant engineering",
    summary: "Combined mechanical design, calculations and field verification with maintenance-plan development and incident follow-up.",
    highlights: [
      "Designed fixtures, protective guards and process-piping modifications in SolidWorks and AutoCAD.",
      "Completed bending-stress, deflection and weld-sizing calculations and field-verified proposed elbow modifications.",
      "Collected field evidence following a fire incident and supported a recurrence-mitigation measure.",
      "Developed preventive-maintenance plans for 14 conveyors using criticality and OEM documentation.",
    ],
    methods: ["SolidWorks", "AutoCAD", "Mechanical calculations", "Field survey", "Criticality", "SAP PM", "AssetWise"],
    linkedProjects: [{ label: "Mechanical modifications and field verification", href: "/projects/mechanical-modifications-field-verification" }],
    heroImage: "/experience/rio-tinto/plant.jpg",
    imageCaption: "Publicly available industrial-context image; not project evidence.",
  },
  {
    slug: "soucy-maintenance-2022",
    company: "Soucy",
    companyUrl: "https://www.soucy-group.com/en",
    logo: "/logos/soucy.png",
    location: "Drummondville, Quebec, Canada",
    dates: "May – Aug 2022",
    title: "Mechanical Engineering Intern, Maintenance",
    sector: "Manufacturing · Production equipment",
    summary: "Supported maintenance execution, lifting-equipment compliance, environmental improvement and shop-floor troubleshooting.",
    highlights: [
      "Coordinated annual overhead-crane and lifting-equipment inspections and tracked deficiencies through corrective closure.",
      "Developed an oil-waste handling and storage system that addressed unsafe accumulation and reduced annual handling cost by more than CAD 30,000.",
      "Troubleshot rubber-track production equipment and coordinated replacement-part needs with suppliers and purchasing.",
    ],
    methods: ["Maintenance coordination", "Inspection follow-up", "Environmental improvement", "Troubleshooting", "Supplier coordination"],
    linkedProjects: [],
    heroImage: "/experience/soucy/shopfloor.jpg",
    imageCaption: "Publicly available manufacturing-context image; not project evidence.",
  },
  {
    slug: "rio-tinto-process-optimisation-2021",
    company: "Rio Tinto",
    companyUrl: "https://www.riotinto.com/",
    logo: "/logos/rio-tinto.png",
    location: "Sorel-Tracy, Quebec, Canada",
    dates: "May 2021 – Apr 2022",
    title: "Mechanical Engineering Intern, Process Optimisation",
    sector: "Metallurgy · Reliability foundation",
    summary: "Built an early foundation in equipment monitoring, root-cause analysis, maintenance planning, compliance review and FMECA.",
    highlights: [
      "Developed equipment-monitoring interfaces for an upgraded-slag plant.",
      "Supported RCA, maintenance-plan development and compliance reviews.",
      "Contributed to FMECA for an acid-regeneration plant, clarifying failure modes, effects and operational criticality.",
    ],
    methods: ["Equipment monitoring", "RCA", "Maintenance plans", "Compliance review", "FMECA"],
    linkedProjects: [],
    heroImage: "/experience/rio-tinto/hero-ugs.jpg",
    imageCaption: "Publicly available company-context image; not project evidence.",
  },
];
