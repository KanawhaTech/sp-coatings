import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Industry Coatings - SPI Coatings",
  description: "Cool roofing solutions, aesthetic finishes and protective coatings for architectural applications.",
};

export default function ArchitecturePage() {
  return (
    <IndustryPage
      name="Architecture"
      description="Cool roofing systems, decorative finishes and protective coatings that meet both performance and aesthetic requirements for architectural projects."
      longDescription="Modern architecture demands coatings that perform both functionally and aesthetically. Green building ratings, energy efficiency targets and long-term durability requirements all influence coating selection. SPI Coatings offers a range of products that help buildings achieve green building certifications, reduce operating energy costs and maintain their appearance over decades. Our coatings have been used on landmark buildings worldwide."
      challenges={[
        "Meeting green building energy efficiency requirements",
        "Urban heat island effect increasing cooling demands",
        "Long-term durability requirements reducing maintenance costs",
        "Aesthetic requirements for decorative architectural finishes",
        "Waterproofing of flat roofs and terraces",
        "Corrosion protection for architectural metalwork",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Achieve cool roof ratings for LEED and Green Star certification. Dramatically reduce building cooling loads.",
          href: "/coating-products/super-therm",
        },
        {
          product: "SP Texture Coat",
          benefit: "Decorative textured finish with thermal insulation properties for architectural wall and roof applications.",
          href: "/coating-products/sp-texture-coat",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Seamless waterproof membrane for flat roofs, terraces and balconies.",
          href: "/coating-products/sp-liquid-membrane",
        },
        {
          product: "Enamo Grip®",
          benefit: "High gloss protective topcoat for architectural metalwork and decorative surfaces.",
          href: "/coating-products/enamo-grip",
        },
      ]}
      image="/images/architecture-industry.jpg"
      accentColor="#00578e"
    />
  );
}
