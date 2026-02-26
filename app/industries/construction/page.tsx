import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Industry Coatings - SPI Coatings",
  description: "Protective and insulative coatings for new construction and renovation projects. SPI Coatings.",
};

export default function ConstructionPage() {
  return (
    <IndustryPage
      name="Construction"
      description="Protective and insulative coatings for new construction projects, renovations and refurbishment of existing structures."
      longDescription="The construction industry relies on high-performance coatings to protect new structures from day one and to extend the life of existing buildings during refurbishment. SPI Coatings offers products for every stage of construction — from waterproof membranes and primers to thermal insulation systems and fire protection coatings. Our products help builders and developers meet energy efficiency targets and deliver lasting protection."
      challenges={[
        "Meeting energy efficiency requirements in new construction",
        "Waterproofing of roofs, terraces and below-grade structures",
        "Fire protection compliance for structural steel",
        "Corrosion protection during and after construction",
        "Surface preparation limitations on existing structures",
        "Tight construction schedules requiring fast-curing products",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Thermal insulation coating for new roofs and walls, helping buildings achieve energy efficiency ratings.",
          href: "/coating-products/super-therm",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Seamless waterproof membrane for flat roofs, basements and below-grade concrete.",
          href: "/coating-products/sp-liquid-membrane",
        },
        {
          product: "Omega Fire",
          benefit: "Intumescent fire protection for structural steel — meets fire rating requirements.",
          href: "/coating-products/omega-fire",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for structural steel during and after construction.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Super Base",
          benefit: "High-performance primer for difficult substrates encountered in renovation projects.",
          href: "/coating-products/super-base",
        },
      ]}
      image="/images/construction-industry.jpg"
      accentColor="#FF8F00"
    />
  );
}
