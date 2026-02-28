import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HPC® Hot Pipe Coating - SP Coatings",
  description: "HPC® Coating can be applied to live operating hot pipes up to 232°C (450°F) without shutting down operations. The world's leading hot pipe insulation coating.",
};

export default function HpcCoatingPage() {
  return (
    <ProductPage
      name="HPC® Coating"
      tagline="Live Hot Pipe Coating — Apply to Operating Pipes up to 232°C Without Shutting Down"
      category="Thermal Insulation Coatings"
      description="HPC® is a revolutionary hot pipe coating that can be applied directly to pipes operating at temperatures up to 232°C (450°F) — without any shutdown of the process. This breakthrough technology allows facilities to insulate their hot piping systems while remaining fully operational."
      longDescription="Traditional pipe insulation requires complete plant shutdown, cool-down, insulation installation, and restart — a process that can take days or weeks and cost millions. HPC® changes everything. Applied like paint while the pipe is hot and running, HPC® builds up as a thick insulating system that dramatically reduces heat loss, surface temperatures and energy consumption. Recognised by the US EPA ENERGY STAR programme."
      features={[
        {
          title: "Live Application",
          description: "Apply directly to pipes operating up to 232°C (450°F) with no shutdown, cool-down or process interruption required.",
        },
        {
          title: "EPA ENERGY STAR Recognised",
          description: "Recognised by the US Environmental Protection Agency ENERGY STAR programme for its energy-saving performance.",
        },
        {
          title: "Significant Energy Savings",
          description: "Reduces pipe heat loss by up to 75%, delivering substantial energy savings and reduced CO₂ emissions.",
        },
        {
          title: "Personnel Protection",
          description: "Reduces pipe surface temperatures to safe levels for personnel, eliminating burn hazards without physical guarding.",
        },
        {
          title: "Corrosion Under Insulation",
          description: "Eliminates corrosion under insulation (CUI) — a major cause of pipe failure — by providing a breathable moisture barrier.",
        },
        {
          title: "No Scaffolding",
          description: "Can often be applied without scaffolding using access equipment, reducing installation costs significantly.",
        },
      ]}
      applications={[
        "Steam pipes and distribution lines",
        "Hot oil pipelines and process lines",
        "Chemical process piping",
        "Power generation steam systems",
        "Oil refinery process piping",
        "Food and beverage process lines",
        "Pharmaceutical process piping",
        "District heating systems",
        "Industrial boiler systems",
        "Petrochemical facility piping",
      ]}
      specifications={[
        { label: "Maximum Service Temperature", value: "232°C (450°F)" },
        { label: "Application Temperature Range", value: "Ambient to 232°C pipe surface" },
        { label: "Number of Coats", value: "Multiple coats to achieve required thickness" },
        { label: "Application Method", value: "Brush, roller (special equipment for hot application)" },
        { label: "Thermal Conductivity", value: "0.040 W/m·K" },
        { label: "Coverage per Coat", value: "0.8-1.2 m² per litre" },
      ]}
      image="/images/hpc-coating.jpg"
      accentColor="#CC2026"
      relatedProducts={[
        { name: "HPC®-HT Coating", href: "/coating-products/hpc-ht-coating" },
        { name: "HPC®-INT Coating", href: "/coating-products/hpc-int-coating" },
        { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
        { name: "Super Therm®", href: "/coating-products/super-therm" },
      ]}
    />
  );
}
