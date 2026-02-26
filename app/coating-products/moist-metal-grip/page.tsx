import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moist Metal Grip - Wet Surface Corrosion Coating - SPI Coatings",
  description: "Moist Metal Grip applies directly to wet, damp or contaminated metal surfaces without surface preparation. Primer and topcoat in one.",
};

export default function MoistMetalGripPage() {
  return (
    <ProductPage
      name="Moist Metal Grip"
      tagline="Apply Directly to Wet, Damp or Contaminated Surfaces — No Surface Preparation Required"
      category="Corrosion Coatings"
      description="Moist Metal Grip is a unique coating that can be applied directly to wet, damp, oily or otherwise contaminated metal surfaces without any surface preparation. It acts as both primer and topcoat in one, dramatically reducing application time and cost."
      longDescription="Traditional coatings require clean, dry surfaces for adhesion. Moist Metal Grip defies this convention — it penetrates through moisture, oil and contamination to bond directly to the metal substrate. This makes it invaluable in environments where surface preparation is difficult or impossible, such as underwater, in rain, or on equipment that cannot be cleaned before coating. It provides excellent corrosion protection in these challenging conditions."
      features={[
        {
          title: "Wet Surface Application",
          description: "Can be applied to wet, damp and water-immersed surfaces, including underwater application.",
        },
        {
          title: "No Surface Preparation",
          description: "Bonds directly to contaminated surfaces without sandblasting, washing or degreasing.",
        },
        {
          title: "Primer and Topcoat",
          description: "Acts as both primer and topcoat in a single product, reducing materials cost and application time.",
        },
        {
          title: "Immediate Protection",
          description: "Provides immediate corrosion protection even in wet conditions where other coatings would fail.",
        },
        {
          title: "Underwater Application",
          description: "Can be applied and cured underwater, making it ideal for marine and underwater infrastructure.",
        },
      ]}
      applications={[
        "Marine structures below waterline",
        "Underwater pipe repairs",
        "Wet industrial environments",
        "Emergency corrosion repairs",
        "Rain-affected applications",
        "Contaminated pipe surfaces",
        "Mining equipment in wet conditions",
        "Water treatment structures",
      ]}
      specifications={[
        { label: "Surface Condition", value: "Wet, damp, oily, contaminated metal" },
        { label: "Application Method", value: "Brush, roller" },
        { label: "Underwater Application", value: "Yes — cures underwater" },
        { label: "Function", value: "Primer and topcoat in one" },
      ]}
      image="/images/moist-metal-grip.jpg"
      accentColor="#CC2026"
      relatedProducts={[
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
      ]}
    />
  );
}
