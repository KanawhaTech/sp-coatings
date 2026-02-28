import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omega Fire - Intumescent Fire Protection Coating - SP Coatings",
  description: "Omega Fire is an intumescent fire protection coating for structural steel. Expands under heat to provide up to 4 hours fire resistance.",
};

export default function OmegaFirePage() {
  return (
    <ProductPage
      name="Omega Fire"
      tagline="Intumescent Fire Protection — Expanding Char Barrier for Structural Steel"
      category="Fire Coating"
      description="Omega Fire is an intumescent fire protection coating for structural steel that expands under heat to form an insulating char barrier. It protects structural steel from the effects of fire, providing a rated fire resistance period that allows safe evacuation and emergency response."
      longDescription="When exposed to heat, Omega Fire expands dramatically to form a thick, insulating char that acts as a barrier between the fire and the steel substrate. This char barrier prevents the steel from reaching critical temperatures that would cause structural failure. Omega Fire can provide up to 4 hours of fire resistance when applied at the correct dry film thickness, as specified by third-party fire test data."
      features={[
        {
          title: "Up to 4 Hours Fire Resistance",
          description: "Provides rated fire resistance periods of 30 minutes to 4 hours depending on application thickness and steel section.",
        },
        {
          title: "Intumescent Action",
          description: "Expands up to 50 times its original thickness when exposed to fire, creating an insulating char barrier.",
        },
        {
          title: "Water-Based Formula",
          description: "Water-based, low VOC formula for safe application in occupied buildings and sensitive environments.",
        },
        {
          title: "Topcoat Compatible",
          description: "Can be overcoated with compatible decorative topcoats for architectural finish requirements.",
        },
        {
          title: "Third-Party Tested",
          description: "Independently tested and certified to international fire resistance standards.",
        },
        {
          title: "Lightweight Protection",
          description: "Thin film application adds minimal weight to structures compared to traditional boarding and spray insulation systems.",
        },
      ]}
      applications={[
        "Structural steel in commercial buildings",
        "Industrial steel structures",
        "Offshore platforms and topsides",
        "Car parks and transit structures",
        "Power stations",
        "Petrochemical facilities",
        "Airport terminals",
        "Shopping centres and public buildings",
      ]}
      specifications={[
        { label: "Type", value: "Intumescent water-based coating" },
        { label: "Fire Rating", value: "30 min to 4 hours (thickness dependent)" },
        { label: "Expansion Ratio", value: "Up to 50:1" },
        { label: "Application Method", value: "Airless spray, brush, roller" },
        { label: "VOC Content", value: "< 30 g/L" },
        { label: "Application Temperature", value: "5°C to 35°C" },
      ]}
      image="/images/omega-fire.jpg"
      accentColor="#e65100"
      relatedProducts={[
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
        { name: "Super Therm®", href: "/coating-products/super-therm" },
      ]}
    />
  );
}
