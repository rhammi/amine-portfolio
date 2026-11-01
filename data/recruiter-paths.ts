export type RecruiterPath = {
  slug: "reliability" | "mechanical" | "mechatronics";
  eyebrow: string;
  title: string;
  audience: string;
  proposition: string;
  question: string;
  answer: string;
  strengths: { label: string; detail: string }[];
  evidence: string[];
  projectSlugs: string[];
  closing: string;
};

export const recruiterPaths: RecruiterPath[] = [
  {
    slug: "reliability",
    eyebrow: "Reliability · Maintenance · Asset performance",
    title: "From failure records to maintenance decisions.",
    audience: "For reliability managers, maintenance teams and asset-integrity recruiters",
    proposition: "A mechanical engineering graduate candidate who has worked with real equipment histories, component lives, maintenance systems and the people responsible for keeping industrial assets running.",
    question: "What makes the analysis worth trusting?",
    answer: "The work begins with defining failures and checking the maintenance evidence. A curve or dashboard becomes useful only after the assumptions, coding and physical context are understood.",
    strengths: [
      {label:"Field-to-data experience",detail:"Heavy mobile equipment, pumps, conveyors and operating-plant maintenance across six university placements."},
      {label:"Failure analysis",detail:"RCM, FMECA, bad-actor reviews, Weibull MLE with failed and right-censored records."},
      {label:"Practical delivery",detail:"SAP PM, Python, SQL/Databricks, Excel and engineering outputs for maintenance reviews."}
    ],
    evidence: [
      "Studied a 36-unit D11 dozer fleet to separate undercarriage cost concentration from wider repair activity and prioritise follow-up.",
      "Led a cross-functional maintenance-data Kaizen workstream that consolidated more than 500 symptom codes into 95 standardised categories.",
      "Reviewed failure and suspended/replacement histories for component-life modelling rather than treating every change-out as a breakdown."
    ],
    projectSlugs:["dozer-fleet-rcm","component-life-economics","maintenance-data-standardisation","cbm-pm-route-improvement"],
    closing:"Explore a transparent, fictional maintenance-strategy model in the Reliability Evidence Lab. It is separate from confidential employer data."
  },
  {
    slug:"mechanical",
    eyebrow:"Mechanical · Design · Field engineering",
    title:"Engineering that survives contact with a real plant.",
    audience:"For graduate mechanical, plant, project and design engineering teams",
    proposition:"Mechanical design experience shaped by working around operating equipment, access constraints, maintenance requirements and technical documentation—not only CAD coursework.",
    question:"What happens after the drawing?",
    answer:"A modification has to be checked against what is installed, how it can be isolated and maintained, how contractors will build it and how the change will be documented and prepared for commissioning.",
    strengths:[
      {label:"Industrial equipment",detail:"Pumps, valves, piping, process equipment, conveyors, guarding and mobile machinery."},
      {label:"Mechanical design",detail:"SolidWorks/AutoCAD, stress and deflection checks, field measurements and maintainability review."},
      {label:"Change delivery",detail:"P&IDs, Management of Change, vendor/OEM information and commissioning preparation."}
    ],
    evidence:[
      "Prepared MOC documentation, updated P&IDs and commissioning checklists for a hazardous-service pump replacement at Valero.",
      "Developed design-stage fuel-terminal drainage modifications around isolation, air admission, vacuum limits and site conditions.",
      "Designed mechanical fixtures and guarding and checked structural and fabrication requirements during a Rio Tinto placement."
    ],
    projectSlugs:["terminal-brownfield-modifications","mechanical-modifications-field-verification","stress-analysis-hand-fea","aluminium-wire-feed-capstone"],
    closing:"See the design constraint, calculation or field check—not just the finished shape."
  },
  {
    slug:"mechatronics",
    eyebrow:"Mechatronics · Automation · Controls",
    title:"Mechanical behaviour, sensing and control in one system.",
    audience:"For graduate mechatronics, automation, instrumentation and test engineering teams",
    proposition:"A mechatronics concentration supported by physical PLC, embedded-control and robotics projects, alongside industrial experience using equipment measurements to understand machinery.",
    question:"How do you know the control system works?",
    answer:"Show the state sequence, sensor feedback, actuator response, test method and where simulation ends and physical validation begins. Team projects are identified as such.",
    strengths:[
      {label:"PLC systems",detail:"FESTO press/pick-and-place synchronisation; GRAFCET, Ladder logic and inter-station handshakes."},
      {label:"Embedded sensing",detail:"STM32/ESP32 motor PWM, direction control, Hall-encoder feedback and calibration evidence."},
      {label:"Modelling and controls",detail:"Robotino navigation, wire-winder dynamic modelling and an Alcoa-sponsored capstone in progress."}
    ],
    evidence:[
      "Developed assigned motor-control and encoder-calibration functions in a four-person tracked-vehicle project; the overall robot is a team outcome.",
      "Built and tested a two-station FESTO sequence with a project partner, with diagrams and physical demonstration available.",
      "Contributed to a three-person wire-winder modelling/control project; simulated controller exploration is distinguished from embedded implementation."
    ],
    projectSlugs:["tracked-vehicle-dual-mcu-control","modular-production-cell-automation","wire-winder-digital-twin","robotino-autonomous-route-following","aluminium-wire-feed-capstone"],
    closing:"The project pages include original diagrams, prototype imagery and laboratory demonstration clips with individual and team work distinguished."
  }
];

export const recruiterPathBySlug = Object.fromEntries(
  recruiterPaths.map((path) => [path.slug, path])
) as Record<RecruiterPath["slug"], RecruiterPath>;
