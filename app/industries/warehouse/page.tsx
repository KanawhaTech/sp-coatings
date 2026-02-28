import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Coatings - SP Coatings",
  description: "Roof and wall insulation coatings to reduce heat and lower air conditioning costs in warehouses and distribution centres.",
};

export default function WarehousePage() {
  return (
    <IndustryPage
      name="Warehouse"
      description="Thermal insulation coatings for warehouse roofs and walls to reduce heat, lower air conditioning costs and improve worker productivity."
      longDescription="Warehouses and distribution centres are often enormous structures with large roof areas exposed to direct solar radiation. In hot climates, these roofs can reach temperatures of over 80°C, radiating heat into the warehouse and creating uncomfortable and sometimes dangerous working conditions. Air conditioning these large spaces is enormously expensive. Super Therm® applied to warehouse roofs has delivered measured energy savings of 30-40% in multiple documented case studies worldwide."
      challenges={[
        "Extreme heat in summer months making warehouses uncomfortable and dangerous for workers",
        "High air conditioning energy costs for large roof-area buildings",
        "Solar heat causing hot spots and product damage in temperature-sensitive warehouses",
        "Corrosion of steel structures in warehouses storing corrosive goods",
        "Floor damage from forklift and pallet truck traffic",
        "Roof waterproofing failures causing product and inventory damage",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Proven to reduce warehouse roof temperatures by up to 40°C, dramatically cutting cooling costs and improving worker comfort.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Sunshield",
          benefit: "Cost-effective heat reflective roof coating for warehouses. Measurable energy savings from first summer.",
          href: "/coating-products/sunshield",
        },
        {
          product: "SP Interlock",
          benefit: "Durable epoxy floor coating for warehouse floors subject to forklift and pallet truck traffic.",
          href: "/coating-products/sp-interlock",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for warehouse steel structures, roof cladding and equipment.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Waterproof warehouse roofs to prevent leaks and inventory damage.",
          href: "/coating-products/sp-liquid-membrane",
        },
      ]}
      image="/images/warehouse-industry.jpg"
      accentColor="#9C27B0"
    />
  );
}
