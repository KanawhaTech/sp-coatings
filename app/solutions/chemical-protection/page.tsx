import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemical Protection Coatings - SP Coatings",
  description: "Chemical-resistant coatings for tanks, pipes and surfaces exposed to aggressive chemicals.",
};

export default function ChemicalProtectionPage() {
  return (
    <SolutionPage
      title="Chemical Protection"
      subtitle="Chemical-resistant coating systems for tanks, vessels, pipes and surfaces in aggressive chemical environments"
      description="Chemical facilities, water treatment plants, pharmaceutical manufacturers and industrial processors all deal with aggressive chemicals that destroy unprotected surfaces rapidly. SP Coatings provides a range of chemical-resistant coating systems that protect substrates from acids, alkalis, solvents and specialty chemicals. Our products range from epoxy topcoats for general chemical environments to ultra-high solids tank lining systems for the most aggressive applications."
      benefits={[
        "Wide range of chemical resistance — acids, alkalis, solvents",
        "Ultra-high solids systems for most aggressive environments",
        "Pinhole-free barrier coating for tank and vessel linings",
        "Food-grade formulations available",
        "Potable water approved systems",
        "Reduce maintenance frequency and associated costs",
        "Extend equipment and structure service life",
        "Comply with chemical handling regulations",
      ]}
      products={[
        {
          name: "Enamo Grip 5000®",
          description: "Enhanced chemical resistance epoxy for the most aggressive industrial chemical environments.",
          href: "/coating-products/enamo-grip-5000",
        },
        {
          name: "Lining Kote UHS",
          description: "Ultra-high solids internal lining for tanks and vessels handling aggressive chemicals. Pinhole-free barrier.",
          href: "/coating-products/lining-kote-uhs",
        },
        {
          name: "Enamo Grip®",
          description: "Two-component epoxy with excellent chemical resistance for general industrial chemical environments.",
          href: "/coating-products/enamo-grip",
        },
        {
          name: "SP Interlock",
          description: "Chemical-resistant epoxy floor coating for areas subject to chemical spillage.",
          href: "/coating-products/sp-interlock",
        },
      ]}
      accentColor="#4A148C"
    />
  );
}
