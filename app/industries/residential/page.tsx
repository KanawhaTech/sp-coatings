import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Passive Cooling - SPI Coatings",
  description: "Passive cooling solutions for homes. Reduce heat gain through roofs and walls to lower air conditioning costs and improve comfort.",
};

export default function ResidentialPage() {
  return (
    <IndustryPage
      name="Residential"
      description="Passive cooling solutions for homes and residential buildings — reduce heat gain, lower energy bills and improve indoor comfort without additional equipment."
      longDescription="Homeowners worldwide are facing increasing energy costs as summer temperatures rise. Air conditioning is often the largest single energy cost in a household. SPI Coatings' passive cooling solutions dramatically reduce the heat absorbed by roofs and walls, reducing the cooling load on air conditioning systems and improving indoor comfort — all without any mechanical equipment. Our coatings pay for themselves through energy savings."
      challenges={[
        "High air conditioning costs in hot climates",
        "Heat discomfort in poorly insulated homes",
        "Rising energy prices reducing household budgets",
        "Environmental impact of high energy consumption",
        "Urban heat island effect increasing local temperatures",
        "Ageing homes without adequate thermal insulation",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Apply to roof to block up to 96% of solar heat gain. Dramatically reduce indoor temperatures and air conditioning costs.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Sunshield",
          benefit: "Cost-effective heat reflective paint for residential roofs. Easy DIY or professional application.",
          href: "/coating-products/sunshield",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Waterproof flat roofs and terraces, preventing water ingress and structural damage.",
          href: "/coating-products/sp-liquid-membrane",
        },
        {
          product: "SP Texture Coat",
          benefit: "Decorative textured wall coating with thermal insulation properties for home exteriors.",
          href: "/coating-products/sp-texture-coat",
        },
      ]}
      image="/images/residential-industry.jpg"
      accentColor="#E91E63"
    />
  );
}
