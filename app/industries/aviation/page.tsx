import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Industry Coatings - SP Coatings",
  description: "High-performance coatings for airport hangars, runways, aircraft support facilities and aviation infrastructure.",
};

export default function AviationPage() {
  return (
    <IndustryPage
      name="Aviation"
      description="High-performance coatings for airport hangars, terminals, runways and aviation support facilities worldwide."
      longDescription="The aviation industry demands the highest standards of performance and safety from every component — including coatings. Airport facilities require coatings that can withstand aviation fuel spills, jet blast heat, heavy traffic from aircraft and ground equipment, and the rigours of daily operations. SP Coatings has supplied coatings to major international airports including Harry Reid International Airport in Las Vegas, where Super Therm® was used to cool airport walkways."
      challenges={[
        "Extreme heat on tarmac and runway surfaces in hot climates",
        "Fuel and chemical spills requiring chemically resistant surfaces",
        "Heavy mechanical loading from aircraft and ground equipment",
        "Large hangar roofs requiring thermal insulation to reduce cooling costs",
        "Fire safety requirements for aircraft maintenance hangars",
        "Anti-slip requirements for walkways and working surfaces",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Applied to airport walkways at Harry Reid International Airport, Las Vegas. Reduces surface temperatures for passenger comfort.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for hangar steel structures and ground equipment in fuel-rich environments.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "SP Interlock",
          benefit: "High-performance epoxy floor coating for hangars and maintenance facilities subject to fuel spills.",
          href: "/coating-products/sp-interlock",
        },
        {
          product: "Omega Fire",
          benefit: "Fire protection for structural steel in aircraft hangars where fire resistance is a regulatory requirement.",
          href: "/coating-products/omega-fire",
        },
      ]}
      image="/images/aviation-industry.jpg"
      accentColor="#1565C0"
    />
  );
}
