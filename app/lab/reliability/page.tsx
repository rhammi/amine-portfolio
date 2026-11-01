import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReliabilityLab from "@/components/ReliabilityLab";

export const metadata: Metadata = {
 title: "Reliability Evidence Lab | Maintenance Decision Simulator",
 description: "Interactive synthetic-data Weibull survival and maintenance-replacement cost model. Inspect assumptions, failure definitions and results.",
 alternates: { canonical: "/lab/reliability" }
};

export default function ReliabilityLabPage() {
 return <main id="main-content" className="min-h-screen bg-slate-50">
   <Navbar />
   <ReliabilityLab />
   <Footer />
 </main>;
}
