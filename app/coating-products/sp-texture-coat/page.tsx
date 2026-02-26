import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Texture Coat - SPI Coatings",
  description: "SP Texture Coat is a textured decorative coating with thermal insulation properties. Ideal for exterior walls and roofs.",
};

export default function SpTextureCoatPage() {
  return (
    <ProductPage
      name="SP Texture Coat"
      tagline="Textured Decorative Coating with Thermal Insulation Properties"
      category="Thermal Insulation Coatings"
      description="SP Texture Coat is a textured, decorative coating that combines aesthetic appeal with thermal insulation properties. It is designed for exterior walls, roofs and surfaces where both appearance and thermal performance are required."
      longDescription="SP Texture Coat provides a durable, weather-resistant textured finish that reduces heat absorption and improves the thermal performance of building envelopes. The textured surface adds dimensional interest to architectural surfaces while the thermal insulation properties help reduce cooling and heating loads. Available in a range of textures and colours."
      features={[
        {
          title: "Decorative Texture Finish",
          description: "Creates attractive textured surfaces for architectural applications where aesthetics are important.",
        },
        {
          title: "Thermal Insulation",
          description: "Ceramic-enhanced formula provides thermal insulation properties to reduce heat transfer through wall and roof surfaces.",
        },
        {
          title: "Weather Resistant",
          description: "Durable, weather-resistant finish for long-term exterior performance.",
        },
        {
          title: "Wide Colour Range",
          description: "Available in a wide range of colours and textures to meet architectural specifications.",
        },
      ]}
      applications={[
        "Exterior building walls",
        "Architectural facades",
        "Roofs with decorative requirements",
        "Residential exteriors",
        "Commercial building exteriors",
        "Feature walls",
      ]}
      specifications={[
        { label: "Finish", value: "Textured (various textures available)" },
        { label: "Coverage Rate", value: "2-5 m² per litre (texture dependent)" },
        { label: "Application Method", value: "Spray, roller, trowel" },
        { label: "Service Temperature", value: "-40°C to +120°C" },
      ]}
      image="/images/sp-texture-coat.jpg"
      accentColor="#f99d22"
      relatedProducts={[
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "Sunshield", href: "/coating-products/sunshield" },
        { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
      ]}
    />
  );
}
