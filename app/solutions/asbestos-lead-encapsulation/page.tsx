import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asbestos & Lead Paint Encapsulation - SP Coatings",
  description: "Safely encapsulate asbestos and lead paint surfaces, preventing fibre and particle release.",
};

export default function AsbestosLeadPage() {
  return (
    <SolutionPage
      title="Asbestos & Lead Encapsulation"
      subtitle="Safe, cost-effective encapsulation of asbestos and lead paint — eliminating hazardous removal"
      description="Asbestos and lead paint are widespread in buildings constructed before the 1980s. Removal of these hazardous materials is expensive, disruptive and dangerous. Encapsulation — sealing the material in place with a specially formulated coating — is often a safer and more cost-effective alternative where the substrate is in good condition. SP Coatings provides encapsulation solutions that seal asbestos fibres and lead particles, preventing their release into the air. Always consult a qualified asbestos hygienist before treating any asbestos-containing material."
      benefits={[
        "Eliminates expensive and hazardous asbestos/lead removal",
        "Much lower cost than removal and disposal",
        "Minimal disruption to building occupants",
        "Prevents release of fibres and particles",
        "Long-lasting protection — extends safe service life of substrate",
        "Can be topcoated for aesthetic purposes",
        "Reduces occupant exposure risk",
        "Compliant with encapsulation regulations (consult local authority)",
      ]}
      products={[
        {
          name: "Super Therm®",
          description: "Can be used as an encapsulating topcoat for asbestos-cement roofs and walls, sealing fibres while providing thermal insulation.",
          href: "/coating-products/super-therm",
        },
        {
          name: "Enamo Grip®",
          description: "Hard epoxy encapsulant for lead paint surfaces, providing a durable sealed barrier over the hazardous substrate.",
          href: "/coating-products/enamo-grip",
        },
        {
          name: "SP Seal Coat",
          description: "Penetrating sealer used to consolidate friable surfaces prior to encapsulation topcoat application.",
          href: "/coating-products/sp-seal-coat",
        },
      ]}
      accentColor="#E65100"
    />
  );
}
