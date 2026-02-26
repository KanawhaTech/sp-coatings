import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Resistance Coatings - SPI Coatings",
  description: "Intumescent fire protection coatings for structural steel providing up to 4 hours rated fire resistance.",
};

export default function FireResistancePage() {
  return (
    <SolutionPage
      title="Fire Resistance"
      subtitle="Passive fire protection for structural steel — intumescent coatings providing up to 4 hours rated fire resistance"
      description="Structural steel loses strength rapidly when exposed to fire — at around 550°C, structural steel begins to fail, potentially causing catastrophic building collapse. Passive fire protection coatings prevent steel from reaching these critical temperatures by forming an insulating char layer when exposed to fire. Omega Fire from SPI Coatings is an intumescent coating that expands dramatically when exposed to heat, creating a thick, insulating char that can provide up to 4 hours of rated fire resistance, giving occupants time to evacuate and fire services time to respond."
      benefits={[
        "Up to 4 hours rated fire resistance",
        "Thin film application adds minimal weight to structure",
        "Water-based, low VOC formula — safe in occupied buildings",
        "Can be overcoated with decorative topcoats",
        "Third-party independently tested and certified",
        "Prevents structural collapse during fire events",
        "Meets building code fire rating requirements",
        "Suitable for internal and external structural steel",
      ]}
      products={[
        {
          name: "Omega Fire",
          description: "Intumescent fire protection coating for structural steel. Expands up to 50x under heat to form an insulating char barrier. Rated up to 4 hours.",
          href: "/coating-products/omega-fire",
        },
      ]}
      accentColor="#880E4F"
    />
  );
}
