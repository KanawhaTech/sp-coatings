import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Interlock - Industrial Epoxy Floor Coating - SPI Coatings",
  description: "SP Interlock is an interlocking epoxy floor coating for industrial and commercial floors with excellent abrasion and chemical resistance.",
};

export default function SpInterlockPage() {
  return (
    <ProductPage
      name="SP Interlock"
      tagline="Industrial Epoxy Floor Coating — Abrasion and Chemical Resistance for High-Traffic Floors"
      category="Sealant Coatings"
      description="SP Interlock is a two-component epoxy floor coating designed for industrial and commercial floors subject to heavy traffic, abrasion and chemical exposure. It provides a tough, seamless floor surface that is easy to clean and maintain."
      longDescription="Industrial floors face extreme abuse from forklifts, heavy machinery, chemical spillage and daily foot traffic. SP Interlock creates a monolithic, seamless floor surface that withstands this punishment while remaining easy to clean and maintain. The interlocking molecular structure of the cured epoxy creates exceptional bond strength and abrasion resistance. Available in a range of colours for floor marking and zone identification."
      features={[
        {
          title: "Exceptional Abrasion Resistance",
          description: "Withstands forklift traffic, heavy machinery and daily industrial use without wearing.",
        },
        {
          title: "Chemical Resistance",
          description: "Resists spills of oils, fuels, acids, alkalis and solvents common in industrial environments.",
        },
        {
          title: "Seamless Finish",
          description: "Creates a seamless, hygienic floor surface with no joints or crevices for bacteria and dirt to accumulate.",
        },
        {
          title: "Anti-Slip Options",
          description: "Anti-slip aggregate can be added to improve traction in wet or oily conditions.",
        },
        {
          title: "Multiple Colours",
          description: "Available in many colours for floor marking, safety zones and aesthetic requirements.",
        },
      ]}
      applications={[
        "Manufacturing and production facilities",
        "Warehouses and logistics centres",
        "Food processing plants",
        "Pharmaceutical facilities",
        "Vehicle workshops",
        "Carparks",
        "Commercial kitchens",
        "Chemical plant floors",
      ]}
      specifications={[
        { label: "Type", value: "Two-component epoxy" },
        { label: "Dry Film Thickness", value: "200-400 microns (system dependent)" },
        { label: "Abrasion Resistance", value: "Excellent (Taber abrasion test rated)" },
        { label: "Application Method", value: "Roller, notched squeegee" },
        { label: "Full Cure", value: "7 days at 20°C" },
        { label: "Return to Light Traffic", value: "24-48 hours" },
      ]}
      image="/images/sp-interlock.jpg"
      accentColor="#2e7d32"
      relatedProducts={[
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
        { name: "Lining Kote UHS", href: "/coating-products/lining-kote-uhs" },
        { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
      ]}
    />
  );
}
