import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enamo Grip 5000® - Enhanced Chemical Resistance - SP Coatings",
  description: "Enamo Grip 5000® offers enhanced chemical resistance over standard Enamo Grip for the most demanding industrial environments.",
};

export default function EnamoGrip5000Page() {
  return (
    <ProductPage
      name="Enamo Grip 5000®"
      tagline="Enhanced Chemical Resistance for the Most Demanding Industrial Environments"
      category="Sealant Coatings"
      description="Enamo Grip 5000® is the enhanced version of Enamo Grip® offering superior chemical resistance for the most demanding industrial environments. It provides protection against a broader range of aggressive chemicals and is formulated for applications where standard epoxy coatings would fail."
      longDescription="Where standard Enamo Grip® provides excellent protection in typical industrial environments, Enamo Grip 5000® is engineered for extreme chemical exposure scenarios. It features an enhanced epoxy formulation with improved resistance to strong acids, concentrated alkalis and aggressive solvents. Ideal for chemical processing plants, refineries and facilities handling highly corrosive substances."
      features={[
        {
          title: "Superior Chemical Resistance",
          description: "Enhanced resistance to strong acids, concentrated alkalis and aggressive solvents beyond standard Enamo Grip® performance.",
        },
        {
          title: "High Solids Content",
          description: "5000 series high solids formulation provides a thicker, more durable film with fewer coats required.",
        },
        {
          title: "Extreme Environment Performance",
          description: "Designed for facilities handling highly aggressive chemicals where standard coatings cannot provide adequate protection.",
        },
        {
          title: "Excellent Adhesion",
          description: "Outstanding adhesion over Rust Grip® and other SPI coatings as well as bare steel and prepared surfaces.",
        },
      ]}
      applications={[
        "Chemical processing plants",
        "Oil refineries",
        "Petrochemical facilities",
        "Acid storage areas",
        "Waste treatment facilities",
        "Mining chemical handling areas",
        "Laboratory floors and surfaces",
        "Pharmaceutical manufacturing",
      ]}
      specifications={[
        { label: "Type", value: "Enhanced two-component epoxy" },
        { label: "Solids Content", value: ">80% by volume" },
        { label: "Dry Film Thickness", value: "100-150 microns per coat" },
        { label: "Application Temperature", value: "5°C to 40°C" },
        { label: "Full Cure", value: "7-14 days at 25°C" },
      ]}
      image="/images/enamo-grip-5000.jpg"
      accentColor="#2e7d32"
      relatedProducts={[
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
        { name: "Lining Kote UHS", href: "/coating-products/lining-kote-uhs" },
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
      ]}
    />
  );
}
