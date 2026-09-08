import type { MetadataRoute } from "next";

import { disciplines } from "@/data/disciplines";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aminer-rhammi.netlify.app";
  const staticRoutes = ["", "/experience", "/projects", "/education", "/about", "/lifesaving"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...experience.map((item) => ({ url: `${base}/experience/${item.slug}`, changeFrequency: "yearly" as const, priority: 0.65 })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: project.status === "In progress" ? "monthly" as const : "yearly" as const, priority: 0.75 })),
    ...disciplines.map((discipline) => ({ url: `${base}/disciplines/${discipline.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
