import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Block Coatings - SP Coatings",
  description: "Block solar radiation and reduce heat gain through roofs and walls using advanced ceramic technology.",
};

export default function HeatBlockCoatingsPage() {
  return (
    <SolutionPage
      title="Heat Block Coatings"
      subtitle="Block solar radiation at the source — before it becomes heat — using advanced ceramic coating technology"
      description="Heat block coatings work differently from conventional insulation. Rather than resisting the flow of heat after it has entered the building fabric, heat block coatings reflect and re-emit solar radiation before it can be absorbed and converted to heat. Super Therm® achieves this by using a precisely engineered blend of ceramic compounds, each of which blocks a specific portion of the solar spectrum. The result is one of the world's highest heat blocking ratings for a coating system — with documented, independently verified performance."
      benefits={[
        "Block up to 96% of solar heat before it enters the building fabric",
        "Reduce roof surface temperatures by up to 40°C",
        "No physical insulation batt or board installation required",
        "Works on any substrate — metal, concrete, wood, existing coatings",
        "Thin film application — no structural loading",
        "Long-lasting — 20+ year track record",
        "Easy maintenance — simply repaint when required",
        "Reduces urban heat island effect",
      ]}
      products={[
        {
          name: "Super Therm®",
          description: "The original and still the world's best heat block ceramic coating. Total solar heat blocking rating of 367 to 4 BTUs. Developed with NASA.",
          href: "/coating-products/super-therm",
        },
        {
          name: "Sunshield",
          description: "High solar reflectance heat block paint for roofs and exterior surfaces. Easy application, excellent value.",
          href: "/coating-products/sunshield",
        },
        {
          name: "SP Texture Coat",
          description: "Textured decorative coating with heat block properties for architectural wall applications.",
          href: "/coating-products/sp-texture-coat",
        },
      ]}
      accentColor="#CC2026"
    />
  );
}
