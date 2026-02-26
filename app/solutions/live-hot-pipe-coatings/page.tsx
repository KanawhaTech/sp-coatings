import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Hot Pipe Coatings - SPI Coatings",
  description: "Insulate operating hot pipes without plant shutdown. Apply directly to pipes at temperatures up to 650°C.",
};

export default function LiveHotPipeCoatingsPage() {
  return (
    <SolutionPage
      title="Live Hot Pipe Coatings"
      subtitle="Insulate operating hot pipes without shutdown — apply directly to pipes at temperatures up to 650°C"
      description="Traditional pipe insulation requires a complete plant shutdown, cool-down, installation of insulation materials, and restart — a process that can take days or weeks and cost millions in lost production. SPI Coatings' revolutionary HPC® system is applied like paint while the pipe is hot and in service. There is no shutdown, no lost production and no scaffolding-intensive installation. The coating cures in place to form a thick, durable thermal insulation system that dramatically reduces heat loss, surface temperatures and energy consumption. Recognised by the US EPA ENERGY STAR programme."
      benefits={[
        "No plant shutdown required — apply to pipes at full operating temperature",
        "Eliminate days or weeks of shutdown costs and lost production",
        "Apply to pipes at temperatures up to 650°C",
        "US EPA ENERGY STAR recognised performance",
        "Reduce pipe heat loss by up to 75%",
        "Surface temperatures reduced to safe levels for personnel",
        "Prevent corrosion under insulation (CUI)",
        "Significantly lower cost than traditional pipe insulation",
        "Can be applied without heavy scaffolding",
      ]}
      products={[
        {
          name: "HPC® Coating",
          description: "The original live hot pipe coating. Apply to pipes operating up to 232°C (450°F) without shutdown. EPA ENERGY STAR recognised.",
          href: "/coating-products/hpc-coating",
        },
        {
          name: "HPC®-HT Coating",
          description: "High-temperature version for extreme applications — pipes operating at temperatures up to 650°C (1200°F).",
          href: "/coating-products/hpc-ht-coating",
        },
        {
          name: "HPC®-INT Coating",
          description: "Interior pipe coating system for internal pipe surface insulation where external application is not possible.",
          href: "/coating-products/hpc-int-coating",
        },
        {
          name: "SP Seal Coat HT",
          description: "High-temperature primer used to prepare pipe surfaces prior to HPC® system application.",
          href: "/coating-products/sp-seal-coat-ht",
        },
      ]}
      accentColor="#BF360C"
    />
  );
}
