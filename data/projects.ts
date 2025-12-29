export type ProjectCategory =
  | "Computerized Maintenance Management System"
  | "CAD Modeling"
  | "Design"
  | "PLC Automation"
  | "Robotics"
  | "Numerical Circuits";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  image?: string;     // put images in /public and reference like "/projects/slug/hero.png"
  youtubeId?: string; // optional (unlisted is fine)
  skills: string[];
};

export const projects: Project[] = [
  {
    slug: "mov-register",
    title: "MOV & Actuator Register",
    category: "Computerized Maintenance Management System",
    summary:
      "Centralized actuator data inside CMMS-aligned register to support spares, torque envelopes, and reliability planning.",
    image: "/projects/mov-register/hero.png",
    youtubeId: "",
    skills: ["CMMS", "SAP PM", "Asset Register", "Standardization", "Reliability"],
  },
  {
    slug: "interal-pm-rollout",
    title: "INTERAL PM Rollout",
    category: "Computerized Maintenance Management System",
    summary:
      "Deployed and cleaned PM routes in INTERAL; reorganized inventory/master data for reliable scheduling.",
    image: "/projects/interal/hero.png",
    youtubeId: "",
    skills: ["INTERAL", "PM Scheduling", "Inventory Data", "Maintenance Planning"],
  },
  {
    slug: "excel-cbm-dashboards",
    title: "Excel CBM Dashboards",
    category: "Computerized Maintenance Management System",
    summary:
      "Built CBM dashboards and life/remaining-life metrics in Excel to accelerate reliability decisions.",
    image: "/projects/excel-cbm/hero.png",
    youtubeId: "",
    skills: ["Excel", "Power Query", "CBM", "Reliability Analytics"],
  },
  {
    slug: "spartakus-lube-standardization",
    title: "Spartakus Lubrication Standardization",
    category: "Computerized Maintenance Management System",
    summary:
      "Rebuilt lubrication and PM routes in Spartakus to remove duplicates and close coverage gaps.",
    image: "/projects/spartakus/hero.png",
    youtubeId: "",
    skills: ["Spartakus", "PM Routes", "Standardization", "Lubrication"],
  },
  {
    slug: "pi-processbook-views",
    title: "PI ProcessBook Equipment Views",
    category: "Computerized Maintenance Management System",
    summary:
      "Developed PI ProcessBook views for equipment monitoring to improve alert-to-action time.",
    image: "/projects/pi-processbook/hero.png",
    youtubeId: "",
    skills: ["PI ProcessBook", "Visualization", "Condition Monitoring"],
  },
  {
    slug: "stm32-vehicle-pwm",
    title: "STM32 Vehicle Control (PWM)",
    category: "Numerical Circuits",
    summary: "Dual PWM motor control with direction + duty-cycle speed control on STM32.",
    image: "/projects/stm32-vehicle-pwm/hero.png",
    youtubeId: "",
    skills: ["STM32", "Timers/PWM", "Embedded", "Control"],
  },
  {
    slug: "traffic-light-management",
    title: "Traffic Light Management",
    category: "Numerical Circuits",
    summary:
      "Designed and implemented a multi-state traffic light controller with timing, sequencing, and safe reset logic.",
    image: "/projects/traffic-light/hero.png",
    youtubeId: "",
    skills: ["Digital Logic", "State Machines", "Timing", "Embedded Control"],
  },
  {
    slug: "robotino-navigation",
    title: "Robotino Navigation",
    category: "Numerical Circuits",
    summary:
      "Programmed Robotino for autonomous navigation with sensor inputs, state control, and safety behaviors.",
    image: "/projects/robotino/hero.png",
    youtubeId: "",
    skills: ["Robotino", "Embedded Control", "Sensors", "State Machines"],
  },
  {
    slug: "guarding-cad-packs",
    title: "Machine Guarding CAD Packs",
    category: "CAD Modeling",
    summary:
      "Produced guarding/fixture CAD models and drawings for shop-floor installs aligned to safety standards.",
    image: "/projects/guarding-cad-packs/hero.png",
    youtubeId: "",
    skills: ["SolidWorks", "AutoCAD", "Safety", "Fabrication", "GD&T"],
  },
  {
    slug: "machine-safety-guards",
    title: "Machine Safety Guards",
    category: "CAD Modeling",
    summary:
      "Designed and detailed safety guarding for industrial equipment with compliant clearances and fastening schemes.",
    image: "/projects/machine-safety-guards/hero.png",
    youtubeId: "",
    skills: ["SolidWorks", "Guarding", "GD&T", "Fabrication"],
  },
  {
    slug: "3d-printed-steam-engine",
    title: "3D Printed Steam Engine",
    category: "CAD Modeling",
    summary:
      "Modeled and assembled a functional 3D-printable steam engine demonstrator with printed linkages and piston.",
    image: "/projects/3d-steam-engine/hero.png",
    youtubeId: "",
    skills: ["CAD", "3D Printing", "Assembly", "Mechanisms"],
  },
  {
    slug: "maintainability-redesign",
    title: "Maintainability-first Layout Redesign",
    category: "Design",
    summary:
      "Adjusted piping/access layouts and added filtration concepts to reduce service time and improve ergonomics.",
    image: "/projects/maintainability/hero.png",
    youtubeId: "",
    skills: ["Maintainability", "Piping Layout", "Ergonomics", "Concept Design"],
  },
  {
    slug: "plc-bottle-line",
    title: "PLC Bottle Line Automation",
    category: "PLC Automation",
    summary:
      "Programmed PLC logic for conveyor gating, sensor interlocks, and fault handling on a bottle line demo.",
    image: "/projects/plc-bottle-line/hero.png",
    youtubeId: "",
    skills: ["PLC", "Ladder Logic", "I/O", "Safety Interlocks"],
  },
  {
    slug: "festo-modular-line",
    title: "Festo Modular Automated Production Line",
    category: "PLC Automation",
    summary:
      "Developed PLC logic and sequencing for a modular Festo production line with stations, conveyors, and interlocks.",
    image: "/projects/festo-line/hero.png",
    youtubeId: "",
    skills: ["PLC", "Modular Automation", "Sequencing", "Interlocks"],
  },
  {
    slug: "robot-cell-simulation",
    title: "Robot Cell Simulation",
    category: "Robotics",
    summary:
      "Modeled a dual-robot cell with coordinated motion and safety zones for flexible manufacturing.",
    image: "/projects/robot-cell/hero.png",
    youtubeId: "",
    skills: ["Robotics", "Kinematics", "Safety", "Simulation"],
  },
];
