export type CompanyLogo = {
  name: string;
  slug: string;
  logo: string;
  url: string; // <-- NEW (company website)
};

export const companiesWorkedWith: CompanyLogo[] = [
  {
    name: "Imperial Oil | ExxonMobil",
    slug: "imperial-oil-exxonmobil",
    logo: "/logos/imperial-exxonmobil.png",
    url: "https://www.imperialoil.ca/",
  },
  {
    name: "Rio Tinto",
    slug: "rio-tinto",
    logo: "/logos/rio-tinto.png",
    url: "https://www.riotinto.com/en/can/",
  },
  {
    name: "Soucy",
    slug: "soucy",
    logo: "/logos/soucy.png",
    url: "https://www.soucy-group.com/en/about",
  },
  {
    name: "Kruger Energy",
    slug: "kruger-wayagamack",
    logo: "/logos/kruger.png",
    url: "https://paper.kruger.com/",
  },
  {
    name: "Valero",
    slug: "valero",
    logo: "/logos/valero.png",
    url: "https://www.valero.com/",
  },
];
