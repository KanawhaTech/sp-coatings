import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture Industry Coatings - SP Coatings",
  description: "Protect farm buildings, grain silos and agricultural equipment from heat and corrosion with SP Coatings.",
};

export default function AgriculturePage() {
  return (
    <IndustryPage
      name="Agriculture"
      description="Thermal insulation and corrosion protection coatings for farm buildings, grain silos, irrigation systems and agricultural equipment."
      longDescription="Agricultural businesses rely on their buildings and equipment to protect crops, livestock and machinery. Heat is a major enemy — heat stress in livestock, heat damage to stored crops and excessive temperatures in farm buildings all reduce productivity and increase costs. Corrosion of metal silos, equipment and infrastructure adds to operating expenses. SP Coatings provides cost-effective solutions to both challenges, proven over 35 years of agricultural use worldwide."
      challenges={[
        "Excessive heat in livestock buildings causing heat stress",
        "High temperatures in grain storage reducing quality and causing spoilage",
        "Corrosion of metal silos, equipment and irrigation systems",
        "High energy costs for cooling agricultural buildings",
        "Harsh weather conditions degrading building surfaces",
        "Chemical exposure from fertilisers and pesticides",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Cool dairy sheds, poultry houses and farm buildings, reducing heat stress in livestock and lowering cooling costs.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Sunshield",
          benefit: "Heat reflective paint for grain silos and storage buildings to reduce internal temperatures and protect stored products.",
          href: "/coating-products/sunshield",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for metal silos, irrigation equipment and farm machinery.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Waterproof membrane for farm building roofs and water storage structures.",
          href: "/coating-products/sp-liquid-membrane",
        },
      ]}
      image="/images/agriculture-industry.jpg"
      accentColor="#4CAF50"
    />
  );
}
