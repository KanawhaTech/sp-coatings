import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Friendly Coatings - SP Coatings",
  description: "Low VOC, water-based coating formulations that meet environmental regulations and sustainability goals.",
};

export default function EcoFriendlyPage() {
  return (
    <SolutionPage
      title="Eco Friendly"
      subtitle="Environmentally responsible coatings — low VOC, water-based formulations for sustainable operations"
      description="Environmental responsibility is at the core of SP Coatings' product development philosophy. Our coatings are formulated to minimise environmental impact while maximising performance. Most SPI products are water-based with very low VOC content, eliminating the health and environmental risks associated with solvent-based coatings. Furthermore, by reducing energy consumption in buildings and industrial processes, SPI coatings help reduce CO₂ emissions and combat climate change."
      benefits={[
        "Water-based, low VOC formulations — minimal environmental impact",
        "Reduce building energy consumption and CO₂ emissions",
        "Help achieve green building certifications",
        "Safe for use in food processing, healthcare and educational facilities",
        "Reduce urban heat island effect",
        "Zero zinc in corrosion protection coatings — no environmental zinc contamination",
        "Long service life reduces recoating frequency and waste",
        "EPA ENERGY STAR recognised products",
      ]}
      products={[
        {
          name: "Super Therm®",
          description: "Water-based, low VOC. Reduces building energy consumption by up to 40%. EPA ENERGY STAR recognised. Developed with NASA.",
          href: "/coating-products/super-therm",
        },
        {
          name: "HPC® Coating",
          description: "Live pipe coating reducing industrial energy consumption without plant shutdown. EPA ENERGY STAR recognised.",
          href: "/coating-products/hpc-coating",
        },
        {
          name: "Rust Grip®",
          description: "Zero zinc corrosion protection — eliminates zinc contamination of waterways while outperforming zinc-rich primers.",
          href: "/coating-products/rust-grip",
        },
        {
          name: "Omega Fire",
          description: "Water-based intumescent fire protection coating with low VOC content.",
          href: "/coating-products/omega-fire",
        },
      ]}
      accentColor="#2E7D32"
    />
  );
}
