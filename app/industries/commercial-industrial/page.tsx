import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial & Industrial Coatings - SP Coatings",
  description: "Complete coating solutions for factories, warehouses and commercial facilities. Energy savings, corrosion protection and more.",
};

export default function CommercialIndustrialPage() {
  return (
    <IndustryPage
      name="Commercial & Industrial"
      description="Comprehensive coating solutions for factories, manufacturing plants, commercial buildings and industrial facilities."
      longDescription="Commercial and industrial facilities face a wide range of coating challenges — from energy costs driven by inadequately insulated roofs to corrosion of structural steel and equipment. SP Coatings provides a complete range of products addressing these challenges, with proven installations across 10.3 million square metres of industrial and commercial facilities in Japan alone. Our coatings deliver measurable energy savings and long-term protection."
      challenges={[
        "High energy costs from uninsulated roofs and walls in large buildings",
        "Corrosion of structural steel and equipment reducing asset life",
        "Floor surfaces subject to heavy forklift and machinery traffic",
        "Chemical resistance requirements in manufacturing environments",
        "Fire protection compliance for structural steel",
        "Worker comfort in hot industrial environments",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Insulate factory and warehouse roofs, reducing cooling costs by up to 40% and improving worker comfort.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for structural steel, equipment and machinery. Apply to rusted surfaces without shutdown.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "SP Interlock",
          benefit: "Heavy-duty epoxy floor coating for factories and warehouses subject to forklift and heavy machinery traffic.",
          href: "/coating-products/sp-interlock",
        },
        {
          product: "HPC® Coating",
          benefit: "Insulate process pipes in manufacturing facilities without shutting down production.",
          href: "/coating-products/hpc-coating",
        },
        {
          product: "Omega Fire",
          benefit: "Fire protection for structural steel columns and beams in commercial and industrial buildings.",
          href: "/coating-products/omega-fire",
        },
        {
          product: "Enamo Grip®",
          benefit: "Chemical-resistant topcoat for surfaces subject to chemical splash and spillage.",
          href: "/coating-products/enamo-grip",
        },
      ]}
      image="/images/commercial-industrial.jpg"
      accentColor="#795548"
    />
  );
}
