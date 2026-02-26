import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Management Coatings - SPI Coatings",
  description: "Manage heat on hot surfaces and equipment in industrial facilities with SPI Coatings thermal management solutions.",
};

export default function HeatManagementPage() {
  return (
    <SolutionPage
      title="Heat Management"
      subtitle="Control, contain and manage heat on industrial equipment, vessels and piping systems"
      description="Heat management in industrial facilities is critical for both energy efficiency and personnel safety. Hot surfaces, process pipes and equipment radiate enormous quantities of heat, both wasting energy and creating burn hazards. SPI Coatings offers a family of products specifically engineered to manage heat on hot industrial equipment — from pipes operating at a few degrees above ambient all the way up to furnaces and equipment operating at 650°C. These coatings can be applied while equipment is in operation, without shutdown."
      benefits={[
        "Dramatically reduce heat loss from process equipment",
        "Apply to operating equipment without shutdown",
        "Eliminate personnel burn hazards from hot surfaces",
        "Prevent corrosion under insulation (CUI)",
        "Reduce energy costs through improved thermal efficiency",
        "Available for surface temperatures up to 650°C",
        "Extend equipment service life through combined thermal/corrosion protection",
        "Lower maintenance costs compared to traditional insulation",
      ]}
      products={[
        {
          name: "HPC® Coating",
          description: "Live hot pipe coating for pipes at up to 232°C. Apply without shutdown. EPA ENERGY STAR recognised.",
          href: "/coating-products/hpc-coating",
        },
        {
          name: "HPC®-HT Coating",
          description: "High-temperature version for pipes up to 650°C in power stations, refineries and heavy industry.",
          href: "/coating-products/hpc-ht-coating",
        },
        {
          name: "HSC™ Coating",
          description: "Hot surface coating for vessels, exchangers and equipment. Combines thermal insulation and corrosion protection.",
          href: "/coating-products/hsc-coating",
        },
        {
          name: "HPC®-INT Coating",
          description: "Interior pipe coating system for insulation of internal pipe and vessel surfaces.",
          href: "/coating-products/hpc-int-coating",
        },
      ]}
      accentColor="#e65100"
    />
  );
}
