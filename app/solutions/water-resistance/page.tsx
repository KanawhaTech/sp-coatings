import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Resistance Coatings - SPI Coatings",
  description: "Waterproof roofs, walls, tanks and structures with seamless elastic membrane coatings.",
};

export default function WaterResistancePage() {
  return (
    <SolutionPage
      title="Water Resistance"
      subtitle="Seamless, flexible waterproofing for roofs, walls, tanks and below-grade structures"
      description="Water is one of the most destructive forces acting on buildings and infrastructure. Water ingress causes structural damage, mould growth, corrosion of steel reinforcement and deterioration of finishes. SPI Coatings' SP Liquid Membrane® provides a seamless, flexible waterproof barrier that eliminates joints and laps — the most common failure points in conventional waterproofing systems. It bridges cracks, remains flexible through temperature cycling and provides long-term waterproofing protection."
      benefits={[
        "Seamless application — no joints or laps that can fail",
        "Bridges cracks up to 3mm in width",
        "Flexible — stretches and contracts with substrate",
        "Withstands temperature cycling from -30°C to +80°C",
        "Root resistant for green roof and planter applications",
        "UV stable for exposed roof applications",
        "Rapid application with brush, roller or spray",
        "Compatible with thermal insulation topcoats",
      ]}
      products={[
        {
          name: "SP Liquid Membrane®",
          description: "Elastomeric waterproof membrane for flat roofs, terraces, basements and below-grade concrete. Bridges cracks, remains flexible.",
          href: "/coating-products/sp-liquid-membrane",
        },
        {
          name: "SP Seal Coat",
          description: "Penetrating sealer for concrete and masonry, reducing porosity and moisture vapour transmission.",
          href: "/coating-products/sp-seal-coat",
        },
        {
          name: "Lining Kote UHS",
          description: "Ultra-high solids internal lining for tanks and vessels — pinhole-free barrier against chemical and water ingress.",
          href: "/coating-products/lining-kote-uhs",
        },
      ]}
      accentColor="#0D47A1"
    />
  );
}
