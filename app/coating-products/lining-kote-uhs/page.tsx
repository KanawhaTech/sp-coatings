import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lining Kote UHS - Ultra-High Solids Lining Coating - SP Coatings",
  description: "Lining Kote UHS is an ultra-high solids lining coating for tanks, vessels and pipelines handling aggressive chemicals.",
};

export default function LiningKotePage() {
  return (
    <ProductPage
      name="Lining Kote UHS"
      tagline="Ultra-High Solids Lining Coating for Tanks, Vessels and Pipelines"
      category="Sealant Coatings"
      description="Lining Kote UHS is an ultra-high solids lining coating specifically designed for the internal lining of tanks, vessels and pipelines handling aggressive chemicals. It provides a thick, pinhole-free barrier that protects the substrate from chemical attack and contamination of contents."
      longDescription="Ultra-high solids content means Lining Kote UHS can build a thick, protective film in fewer coats compared to conventional coatings. The result is a seamless, pinhole-free lining that prevents chemical penetration to the substrate. It is widely used in chemical storage tanks, water treatment vessels and food grade storage where contamination of contents must be prevented."
      features={[
        {
          title: "Ultra-High Solids",
          description: "Very high solids content builds a thick protective film in fewer coats, reducing application time and cost.",
        },
        {
          title: "Chemical Resistance",
          description: "Excellent resistance to a wide range of aggressive chemicals, acids and solvents.",
        },
        {
          title: "Pinhole-Free Barrier",
          description: "Applied to correct thickness, provides a seamless, pinhole-free lining that prevents chemical penetration.",
        },
        {
          title: "Food Grade Available",
          description: "Food grade formulation available for tanks and vessels storing food and beverage products.",
        },
        {
          title: "Water Contact Approved",
          description: "Approved for use in potable water tanks and systems.",
        },
      ]}
      applications={[
        "Chemical storage tanks",
        "Potable water tanks and vessels",
        "Wastewater treatment tanks",
        "Food and beverage storage vessels",
        "Industrial pipeline internal lining",
        "Secondary containment areas",
        "Concrete tank linings",
      ]}
      specifications={[
        { label: "Solids Content", value: ">80% by volume" },
        { label: "Chemical Resistance", value: "Wide range — consult chemical resistance chart" },
        { label: "Application Method", value: "Airless spray, brush, roller" },
        { label: "Dry Film Thickness", value: "300-600 microns (to specification)" },
        { label: "Food Grade", value: "Food grade formulation available" },
      ]}
      image="/images/lining-kote.jpg"
      accentColor="#2e7d32"
      relatedProducts={[
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
        { name: "Enamo Grip 5000®", href: "/coating-products/enamo-grip-5000" },
        { name: "SP Interlock", href: "/coating-products/sp-interlock" },
      ]}
    />
  );
}
