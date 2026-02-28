import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Industry Coatings - SP Coatings",
  description: "Anti-corrosion and protective coatings for marine vessels, offshore platforms and marine structures. World's Coating Innovator.",
};

export default function MarinePage() {
  return (
    <IndustryPage
      name="Marine"
      description="Superior corrosion protection and insulation coatings for ships, offshore platforms, port structures and marine equipment."
      longDescription="The marine environment is one of the most corrosive on earth. Constant exposure to salt water, high humidity, wave action and UV radiation destroys conventional coatings quickly and leads to rapid deterioration of steel and concrete structures. SP Coatings has been providing proven marine coating solutions for over 35 years, protecting everything from small vessels to the world's largest casino boat. Our coatings are trusted by shipyards, offshore operators and port authorities worldwide."
      challenges={[
        "Constant salt water and salt spray exposure causing accelerated corrosion",
        "High humidity environments accelerating metal corrosion rates",
        "Limited dry-docking windows requiring long-lasting coating solutions",
        "Heat from engine rooms and process equipment",
        "Chemical splash and spillage on vessel decks",
        "Wave impact and mechanical abrasion on hull surfaces",
        "UV degradation of coatings in tropical and high-UV environments",
      ]}
      solutions={[
        {
          product: "Rust Grip®",
          benefit: "Single coat corrosion protection for ship hulls, decks and marine structures. Apply directly to rusted surfaces without sandblasting.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Super Therm®",
          benefit: "Reduce heat on vessel superstructures and accommodation areas. Cool walkways and working surfaces in hot climates.",
          href: "/coating-products/super-therm",
        },
        {
          product: "HPC® Coating",
          benefit: "Insulate hot engine room pipes and steam lines without vessel shutdown. Reduces personnel burn risk.",
          href: "/coating-products/hpc-coating",
        },
        {
          product: "Moist Metal Grip",
          benefit: "Emergency corrosion treatment for wet, damp and salt-contaminated surfaces. Can be applied underwater.",
          href: "/coating-products/moist-metal-grip",
        },
        {
          product: "Enamo Grip®",
          benefit: "Durable chemical-resistant topcoat for marine vessel decks and superstructures.",
          href: "/coating-products/enamo-grip",
        },
        {
          product: "Omega Fire",
          benefit: "Fire protection for structural steel in engine rooms and accommodation areas.",
          href: "/coating-products/omega-fire",
        },
      ]}
      image="/images/marine-industry.jpg"
      accentColor="#0D47A1"
    />
  );
}
