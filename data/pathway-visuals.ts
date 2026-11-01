import type { DisciplineSlug } from "@/data/projects";

export const pathwayVisuals: Record<DisciplineSlug, { src: string; alt: string; caption: string; href: string; diagram: boolean }> = {
  reliability: {
    src: "/images/cat-d11-david-drew.jpg",
    alt: "Caterpillar D11 dozer, showing the undercarriage and blade",
    caption: "D11 equipment context · Explore the fleet RCM case",
    href: "/projects/dozer-fleet-rcm",
    diagram: false,
  },
  mechanical: {
    src: "/images/refinery-tanks-carl-young.jpg",
    alt: "Storage tanks and industrial pipework shown as equipment context",
    caption: "Equipment context · Explore the brownfield modification case",
    href: "/projects/terminal-brownfield-modifications",
    diagram: false,
  },
  mechatronics: {
    src: "/projects/gei1087/festo-cell-hero.jpg",
    alt: "FESTO pick-and-place equipment during the team laboratory test",
    caption: "Physical validation · Original team demonstration frame",
    href: "/projects/modular-production-cell-automation",
    diagram: false,
  },
};
