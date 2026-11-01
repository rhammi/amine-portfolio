import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aminer-rhammi.netlify.app"),
  title: {
    default: "Amine Rhammi | Mechanical Engineering Portfolio",
    template: "%s | Amine Rhammi",
  },
  description:
    "Mechanical engineering graduate candidate working across reliability, asset integrity, mechanical design, mechatronics and industrial automation.",
  keywords: [
    "mechanical engineer",
    "reliability engineering",
    "asset integrity",
    "mechatronics",
    "industrial automation",
    "mechanical design",
    "mechanical engineering portfolio",
  ],
  authors: [{ name: "Amine Rhammi" }],
  creator: "Amine Rhammi",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amine Rhammi | Mechanical Engineering Portfolio",
    description: "Evidence-led work across reliability, mechanical systems and mechatronics.",
    type: "website",
    url: "/",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Amine Rhammi mechanical engineering portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-card.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amine Rhammi",
    url: "https://aminer-rhammi.netlify.app",
    image: "https://aminer-rhammi.netlify.app/logos/moi.png",
    jobTitle: "Mechanical Engineering Graduate Candidate",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Université du Québec à Trois-Rivières" },
    sameAs: ["https://www.linkedin.com/in/amine-rhammi-392376b9/"],
    knowsAbout: ["Mechanical engineering", "Reliability engineering", "Asset integrity", "Mechatronics", "Industrial automation"],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
