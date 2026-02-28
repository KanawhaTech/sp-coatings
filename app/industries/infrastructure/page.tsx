import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure Coatings - SP Coatings",
  description: "Protecting bridges, dams, highways and public infrastructure for extended service life. Award-winning coatings used on the Hoover Dam.",
};

export default function InfrastructurePage() {
  return (
    <IndustryPage
      name="Infrastructure"
      description="Protecting bridges, dams, tunnels, highways and critical public infrastructure for extended service life with proven coating solutions."
      longDescription="Critical infrastructure represents enormous national investment. The premature failure of bridges, dams, tunnels and public facilities due to corrosion and deterioration costs governments and taxpayers billions every year. SP Coatings has been protecting critical infrastructure for over 35 years — most notably with award-winning coatings used on the Hoover Dam. Our products extend the service life of infrastructure, reducing lifecycle costs and protecting public safety."
      challenges={[
        "Corrosion of steel reinforcement and structural steel in bridges and tunnels",
        "Carbonation of concrete causing rebar corrosion in aged infrastructure",
        "Extreme weathering of exposed concrete and steel surfaces",
        "Difficult access for maintenance coating in operational infrastructure",
        "Minimal traffic disruption requirements during maintenance",
        "Long-term performance requirements of 20+ years",
      ]}
      solutions={[
        {
          product: "Rust Grip®",
          benefit: "Award-winning corrosion protection used on the Hoover Dam. Applied to rusted steel without sandblasting.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Super Therm®",
          benefit: "Reduce heat gain on bridge decks and concrete surfaces, reducing thermal movement and extending service life.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Moist Metal Grip",
          benefit: "Apply corrosion protection in damp, wet or difficult-access locations without surface preparation.",
          href: "/coating-products/moist-metal-grip",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Waterproof bridge decks and concrete structures against water infiltration and chloride attack.",
          href: "/coating-products/sp-liquid-membrane",
        },
        {
          product: "Enamo Grip®",
          benefit: "Protective topcoat for infrastructure surfaces subject to traffic, weathering and environmental exposure.",
          href: "/coating-products/enamo-grip",
        },
      ]}
      image="/images/infrastructure-industry.jpg"
      accentColor="#37474F"
    />
  );
}
