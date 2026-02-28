import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defence & Military Coatings - SP Coatings",
  description: "Specialised coatings for military vehicles, infrastructure and defence installations. High performance in extreme conditions.",
};

export default function DefenceMilitaryPage() {
  return (
    <IndustryPage
      name="Defence & Military"
      description="High-performance coating solutions for military vehicles, defence installations and military infrastructure operating in extreme conditions worldwide."
      longDescription="Defence and military operations demand coating solutions that perform in the most extreme conditions — desert heat, arctic cold, salt water exposure, chemical environments and combat conditions. SP Coatings has supplied coating solutions to defence organisations worldwide, providing thermal management, corrosion protection and durability in environments where equipment failure is not an option."
      challenges={[
        "Extreme thermal environments from desert heat to arctic conditions",
        "Corrosion of military vehicles and equipment in marine and chemical environments",
        "Heat reduction on armoured vehicles and crew compartments",
        "Stealth and low-infrared signature requirements",
        "Chemical and biological contamination resistance",
        "Rapid field repair and maintenance requirements",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Reduces heat gain in military vehicles and accommodation in hot theatres of operation, improving crew comfort and safety.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for military vehicles and equipment in marine, desert and tropical environments.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Moist Metal Grip",
          benefit: "Emergency field repairs on wet or contaminated surfaces without surface preparation equipment.",
          href: "/coating-products/moist-metal-grip",
        },
        {
          product: "HPC® Coating",
          benefit: "Insulate engine exhaust pipes and hot equipment on military vehicles and installations.",
          href: "/coating-products/hpc-coating",
        },
        {
          product: "Omega Fire",
          benefit: "Fire protection for military installations and structures requiring passive fire protection.",
          href: "/coating-products/omega-fire",
        },
      ]}
      image="/images/defence-military-industry.jpg"
      accentColor="#33691E"
    />
  );
}
