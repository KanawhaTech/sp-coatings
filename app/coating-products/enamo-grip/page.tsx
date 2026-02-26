import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enamo Grip® - Durable Topcoat - SPI Coatings",
  description: "Enamo Grip® is a two-component epoxy polyamide topcoat with excellent adhesion, chemical resistance and high gloss finish for industrial and commercial applications.",
};

export default function EnamoGripPage() {
  return (
    <ProductPage
      name="Enamo Grip®"
      tagline="Superior Chemical Resistance & High Gloss Topcoat for Industrial and Commercial Applications"
      category="Sealant Coatings"
      description="Enamo Grip® is a two-component epoxy polyamide coating that provides excellent adhesion, chemical resistance and a high gloss finish. It is designed to work as a topcoat over Rust Grip® and other SPI base coatings, providing the ultimate protective finish."
      longDescription="Enamo Grip® forms an extremely hard, chemically resistant film that protects underlying coatings and substrates from chemical attack, abrasion and weathering. It is used extensively in industrial environments where chemical splash, spillage and fumes are present. The high gloss finish also makes it ideal for commercial and decorative applications where appearance is important."
      features={[
        {
          title: "Superior Chemical Resistance",
          description: "Excellent resistance to a wide range of acids, alkalis, solvents and chemicals encountered in industrial environments.",
        },
        {
          title: "High Gloss Finish",
          description: "Provides a high gloss, aesthetic finish suitable for both industrial protection and decorative commercial applications.",
        },
        {
          title: "Excellent Adhesion",
          description: "Outstanding adhesion to steel, concrete, and previously coated surfaces including Rust Grip® and other SPI coatings.",
        },
        {
          title: "Two-Component System",
          description: "Two-part epoxy polyamide formulation cures to a tough, cross-linked film with exceptional hardness and durability.",
        },
        {
          title: "Abrasion Resistant",
          description: "Hard film provides excellent abrasion resistance for floors, walkways and surfaces subject to mechanical wear.",
        },
        {
          title: "UV Stable",
          description: "Good UV stability for exterior applications, maintaining colour and gloss over extended periods.",
        },
      ]}
      applications={[
        "Industrial floors and walkways",
        "Chemical plant surfaces",
        "Tank exteriors and interiors",
        "Structural steelwork",
        "Commercial buildings and warehouses",
        "Marine topcoat over Rust Grip®",
        "Food processing facilities",
        "Water treatment plants",
        "Pharmaceutical facilities",
        "Power generation equipment",
      ]}
      specifications={[
        { label: "Type", value: "Two-component epoxy polyamide" },
        { label: "Mixing Ratio", value: "As specified on product data sheet" },
        { label: "Pot Life", value: "4-6 hours at 25°C" },
        { label: "Dry Film Thickness", value: "75-125 microns per coat" },
        { label: "Coverage Rate", value: "8-10 m² per litre" },
        { label: "Drying Time (touch)", value: "4-6 hours at 25°C" },
        { label: "Full Cure", value: "7 days at 25°C" },
        { label: "Gloss Level", value: "High gloss (>85 GU)" },
        { label: "Application Temperature", value: "5°C to 40°C" },
        { label: "Substrates", value: "Steel, concrete, existing coatings" },
      ]}
      image="/images/enamo-grip.jpg"
      accentColor="#2e7d32"
      relatedProducts={[
        { name: "Enamo Grip 5000®", href: "/coating-products/enamo-grip-5000" },
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
        { name: "Lining Kote UHS", href: "/coating-products/lining-kote-uhs" },
        { name: "SP Interlock", href: "/coating-products/sp-interlock" },
      ]}
    />
  );
}
