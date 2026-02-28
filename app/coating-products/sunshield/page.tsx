import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunshield - Heat Reflective Paint - SP Coatings",
  description: "Sunshield is a heat reflective paint for roofs and exterior surfaces. Reflects solar heat to reduce cooling costs, improve comfort and extend roof life.",
};

export default function SunshieldPage() {
  return (
    <ProductPage
      name="Sunshield"
      tagline="Heat Reflective Paint — Reflect Solar Heat, Reduce Cooling Costs, Improve Comfort"
      category="Thermal Insulation Coatings"
      description="Sunshield is a heat reflective paint designed for roofs and exterior surfaces. By reflecting solar radiation, Sunshield reduces the heat absorbed by the building, lowering cooling loads and improving interior comfort levels."
      longDescription="Sunshield's advanced reflective pigments reflect up to 85% of solar radiation before it can be converted to heat. This makes it an effective and economical solution for reducing the urban heat island effect, lowering air conditioning costs and extending the service life of roofing membranes and substrates. Available in a range of colours including high-performance whites and cool-colour options."
      features={[
        {
          title: "High Solar Reflectance",
          description: "Reflects up to 85% of solar radiation, significantly reducing heat absorption by roofing and wall surfaces.",
        },
        {
          title: "Reduced Cooling Costs",
          description: "By lowering surface temperatures, Sunshield reduces the cooling load on buildings, saving energy and money.",
        },
        {
          title: "Extended Roof Life",
          description: "Lower surface temperatures reduce thermal stress on roofing membranes and materials, extending their service life.",
        },
        {
          title: "Multiple Substrates",
          description: "Suitable for metal roofs, concrete, fibreglass, existing coatings and a wide range of building surfaces.",
        },
        {
          title: "Easy Application",
          description: "Single component, water-based formula. Apply by brush, roller or spray — no special equipment required.",
        },
        {
          title: "Durable Finish",
          description: "Excellent weather resistance, UV stability and dirt pick-up resistance for long-lasting performance.",
        },
      ]}
      applications={[
        "Commercial and industrial metal roofing",
        "Concrete and tiled roofs",
        "Exterior walls of commercial buildings",
        "Shipping container roofs",
        "Agricultural building roofing",
        "Warehouse and factory roofing",
        "Residential roofing",
        "Cool roof systems",
      ]}
      specifications={[
        { label: "Solar Reflectance", value: "Up to 0.85 (85%)" },
        { label: "Thermal Emittance", value: "0.90" },
        { label: "Solar Reflectance Index", value: "Up to 105" },
        { label: "Coverage Rate", value: "6-8 m² per litre" },
        { label: "Application Method", value: "Brush, roller, airless spray" },
        { label: "VOC Content", value: "< 50 g/L" },
        { label: "Service Temperature", value: "-40°C to +120°C" },
      ]}
      image="/images/sunshield.jpg"
      accentColor="#f99d22"
      relatedProducts={[
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "SP Texture Coat", href: "/coating-products/sp-texture-coat" },
        { name: "SP Liquid Membrane®", href: "/coating-products/sp-liquid-membrane" },
      ]}
    />
  );
}
