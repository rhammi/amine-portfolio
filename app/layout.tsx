import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Amine Rhammi | Mechanical Reliability Engineer",
    template: "%s | Amine Rhammi",
  },
  description:
    "Mechanical Engineering (Mechatronics) candidate with industrial experience in reliability, maintenance engineering, SAP PM, Weibull life-data analysis, heavy equipment, CBM, and engineering analytics.",
  keywords: [
    "mechanical reliability engineer",
    "maintenance engineer",
    "reliability engineering",
    "SAP PM",
    "Weibull analysis",
    "asset performance",
    "heavy equipment reliability",
    "mechanical engineering portfolio",
  ],
  authors: [{ name: "Amine Rhammi" }],
  creator: "Amine Rhammi",
  openGraph: {
    title: "Amine Rhammi | Mechanical Reliability Engineer",
    description: "Reliability, maintenance engineering, heavy equipment, SAP PM, life-data analysis, and mechanical engineering case studies.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
