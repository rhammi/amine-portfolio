export type CompanyLogo = {
  name: string;
  slug: string;
  logo: string;
  url: string; // <-- NEW (company website)
};

export const companiesWorkedWith: CompanyLogo[] = [
  { name: "Rio Tinto", slug: "rio-tinto", logo: "/logos/rio-tinto.png", url: "https://www.riotinto.com/en/can/" }, // :contentReference[oaicite:1]{index=1}
  { name: "Soucy", slug: "soucy", logo: "/logos/soucy.png", url: "https://www.soucy-group.com/en/about" },       // :contentReference[oaicite:2]{index=2}
  { name: "Kruger Energy", slug: "kruger-wayagamack", logo: "/logos/kruger.png", url: "https://paper.kruger.com/" }, // :contentReference[oaicite:3]{index=3}
  { name: "Valero", slug: "valero", logo: "/logos/valero.png", url: "https://www.valero.com/" },           // :contentReference[oaicite:4]{index=4}
  { name: "Glencore", slug: "glencore", logo: "/logos/glencore.png", url: "https://www.glencore.ca/en/evr" },   // :contentReference[oaicite:5]{index=5}
];
