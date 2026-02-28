import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete & Flooring Solutions - SP Coatings",
  description: "Protect and seal concrete floors from abrasion, chemicals and moisture with SPI coating systems.",
};

export default function ConcreteFlooringPage() {
  return (
    <SolutionPage
      title="Concrete & Flooring"
      subtitle="Durable, chemical-resistant floor coating systems for industrial and commercial concrete surfaces"
      description="Industrial and commercial floors take enormous abuse — forklifts, heavy machinery, chemical spills, heavy foot traffic and temperature extremes all degrade unprotected concrete surfaces rapidly. SP Coatings' floor coating systems seal concrete, prevent chemical penetration, resist abrasion and provide a safe, cleanable surface. Our systems are used in factories, warehouses, food processing plants, pharmaceutical facilities and commercial kitchens worldwide."
      benefits={[
        "Protect concrete from chemical spills and penetration",
        "Resist abrasion from forklift and machinery traffic",
        "Seamless, hygienic surface — easy to clean and disinfect",
        "Anti-slip options for wet and oily environments",
        "Wide range of colours for floor marking and zone identification",
        "Long service life — reduce maintenance and replacement costs",
        "Dust suppression from concrete surface",
        "Improves light reflectivity in warehouse and factory environments",
      ]}
      products={[
        {
          name: "SP Interlock",
          description: "Heavy-duty two-component epoxy floor coating for industrial floors. Excellent abrasion and chemical resistance.",
          href: "/coating-products/sp-interlock",
        },
        {
          name: "Enamo Grip®",
          description: "High-gloss epoxy coating for commercial and industrial floors requiring a decorative finish with protection.",
          href: "/coating-products/enamo-grip",
        },
        {
          name: "SP Seal Coat",
          description: "Penetrating concrete sealer used as primer and to reduce porosity before application of epoxy floor systems.",
          href: "/coating-products/sp-seal-coat",
        },
        {
          name: "Lining Kote UHS",
          description: "Ultra-high solids lining coating for floors in chemically aggressive environments.",
          href: "/coating-products/lining-kote-uhs",
        },
      ]}
      accentColor="#37474F"
    />
  );
}
