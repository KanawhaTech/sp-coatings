import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rust Grip® - Superior Corrosion Protection - SPI Coatings",
  description: "Rust Grip® is a moisture-cured polyurethane that penetrates rust and bonds to corroded surfaces. Single coat, zero zinc, tested to 30,000+ hours salt spray. The paradigm shift in corrosion protection.",
};

export default function RustGripPage() {
  return (
    <ProductPage
      name="Rust Grip®"
      tagline="The Paradigm Shift Corrosion Coating — 3 days work in a single day at half the price with double the performance"
      category="Corrosion Coatings"
      description="Rust Grip® not only generates barrier protection, but also galvanic protection and encapsulation of the substrate. This moisture-cured polyurethane coating has been used successfully in the harshest environments; chemical fields, oil fields, marine, oil rigs and in areas that demand resistance to the corrosive effects of day-to-day exposure."
      longDescription="Imagine: 3 days work in a single day, at half the price and double the corrosion protection performance! No Air, no Moisture = no Corrosion! Rust Grip® penetrates into porous surfaces and rust, expands upon curing to seal off air and moisture, and creates a tough, impervious barrier. Among zinc-free paint systems tested, Rust Grip® showed the best performance — outstanding adherence to the substrate, low corrosion advance from incision and no corrosion points at the end of tests. Endorsed by state-owned Brazilian petroleum multinational corporation Petrobras."
      features={[
        {
          title: "Penetrates Rust",
          description: "Penetrates into existing rust and corrosion, encapsulating it and stopping further corrosion progression from within.",
        },
        {
          title: "Galvanic Protection",
          description: "Provides triple protection: barrier, galvanic and encapsulation — a complete corrosion protection system in one coat.",
        },
        {
          title: "Wet Surface Application",
          description: "Can be applied to wet, damp, rusted or contaminated surfaces without sandblasting or extensive surface preparation.",
        },
        {
          title: "30,000+ Hours Salt Spray",
          description: "Tested to over 30,000 hours salt spray resistance — far exceeding conventional corrosion protection coatings.",
        },
        {
          title: "Single Coat System",
          description: "One coat of Rust Grip® provides complete corrosion protection, eliminating the need for multiple primer and topcoat layers.",
        },
        {
          title: "Zero Zinc Formula",
          description: "Zinc-free formula eliminates environmental and health concerns associated with zinc-rich primers while outperforming them.",
        },
        {
          title: "Chemical Resistance",
          description: "Excellent resistance to acids, alkalis, solvents and chemical splash in industrial environments.",
        },
        {
          title: "Extreme Flexibility",
          description: "Remains flexible after cure, accommodating substrate movement and temperature cycling without cracking.",
        },
        {
          title: "Fast Return to Service",
          description: "Fast cure time allows rapid return to service, minimising downtime in industrial and marine operations.",
        },
      ]}
      applications={[
        "Oil rigs and offshore platforms",
        "Oil and gas pipelines",
        "Marine vessels and ship hulls",
        "Bridges and structural steel",
        "Chemical plant equipment",
        "Storage tanks and vessels",
        "Industrial machinery and equipment",
        "Mining equipment",
        "Infrastructure (water towers, bridges)",
        "Railway infrastructure",
        "Port and harbour structures",
        "Power generation facilities",
      ]}
      specifications={[
        { label: "Base", value: "Moisture-cured polyurethane" },
        { label: "Zinc Content", value: "Zero" },
        { label: "Salt Spray Resistance", value: "30,000+ hours" },
        { label: "Application Method", value: "Brush, roller, spray" },
        { label: "Coverage Rate", value: "8-10 m² per litre" },
        { label: "Dry Film Thickness", value: "75-100 microns per coat" },
        { label: "Drying Time (touch)", value: "2-4 hours at 25°C" },
        { label: "Full Cure", value: "7 days" },
        { label: "Application Temperature", value: "2°C to 50°C" },
        { label: "Humidity Requirement", value: "Moisture cured — humidity required" },
        { label: "Surface Preparation", value: "St2 minimum (St3 preferred)" },
        { label: "Substrates", value: "Steel, iron, aluminium, galvanised steel" },
      ]}
      image="/images/rust-grip.jpg"
      accentColor="#CC2026"
      relatedProducts={[
        { name: "Moist Metal Grip", href: "/coating-products/moist-metal-grip" },
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "Lining Kote UHS", href: "/coating-products/lining-kote-uhs" },
      ]}
    />
  );
}
