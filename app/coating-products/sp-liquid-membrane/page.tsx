import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Liquid Membrane® - Elastomeric Waterproof Membrane - SP Coatings",
  description: "SP Liquid Membrane® is an elastomeric waterproof membrane coating for roofs, terraces and below-grade concrete.",
};

export default function SpLiquidMembranePage() {
  return (
    <ProductPage
      name="SP Liquid Membrane®"
      tagline="Elastomeric Waterproof Membrane Coating for Roofs, Terraces and Below-Grade Surfaces"
      category="Base Coatings"
      description="SP Liquid Membrane® is an elastomeric waterproof membrane coating that provides seamless, flexible waterproofing for roofs, terraces, basements and other surfaces where water infiltration must be prevented. It bridges cracks and remains flexible through temperature cycling."
      longDescription="Unlike rigid waterproofing systems, SP Liquid Membrane® is highly elastic — it stretches and contracts with the substrate, bridging cracks up to 3mm in width. Applied as a liquid, it forms a seamless membrane with no joints or overlaps that could become failure points. It is used on flat and low-pitch roofs, terraces, balconies and below-grade concrete walls and floors."
      features={[
        {
          title: "Seamless Application",
          description: "Applied as a liquid, it forms a seamless membrane with no joints or seams that could fail.",
        },
        {
          title: "Crack Bridging",
          description: "Highly elastic formula bridges cracks up to 3mm in width, accommodating substrate movement.",
        },
        {
          title: "Temperature Flexibility",
          description: "Remains flexible from -30°C to +80°C, withstanding extreme temperature cycling without cracking.",
        },
        {
          title: "Root Resistant",
          description: "Resistant to plant root penetration, making it suitable for green roof and planted terrace applications.",
        },
        {
          title: "UV Stable",
          description: "UV stable formulation for exposed roof applications without the need for a protective topcoat.",
        },
      ]}
      applications={[
        "Flat and low-pitch roofs",
        "Terraces and balconies",
        "Basement waterproofing",
        "Below-grade concrete walls",
        "Planter boxes and water features",
        "Bridge deck waterproofing",
        "Green roof membranes",
      ]}
      specifications={[
        { label: "Elongation at Break", value: ">300%" },
        { label: "Crack Bridging", value: "Up to 3mm" },
        { label: "Service Temperature", value: "-30°C to +80°C" },
        { label: "Coverage Rate", value: "1-1.5 kg/m² per coat" },
        { label: "Number of Coats", value: "2-3 coats to specification" },
        { label: "UV Stability", value: "Excellent" },
      ]}
      image="/images/sp-liquid-membrane.jpg"
      accentColor="#6a1b9a"
      relatedProducts={[
        { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "Sunshield", href: "/coating-products/sunshield" },
      ]}
    />
  );
}
