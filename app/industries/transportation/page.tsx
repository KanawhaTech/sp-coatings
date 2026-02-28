import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation Industry Coatings - SP Coatings",
  description: "Protective coatings for rail, road, vehicles and transportation infrastructure.",
};

export default function TransportationPage() {
  return (
    <IndustryPage
      name="Transportation"
      description="Protective coatings for rail infrastructure, road vehicles, bridges, tunnels and transportation facilities worldwide."
      longDescription="The transportation sector encompasses one of the largest concentrations of steel infrastructure in the world — from rail lines and bridges to vehicle fleets and terminals. SP Coatings provides corrosion protection, thermal insulation and fire protection solutions that extend the life of transportation infrastructure and reduce operating costs. Our products are used on rail systems, road bridges, port facilities and vehicle fleets across the globe."
      challenges={[
        "Corrosion of steel rail infrastructure, bridges and vehicles",
        "Heat buildup in vehicle cabins and passenger areas in hot climates",
        "Fire safety requirements for rail and road tunnels",
        "Chemical resistance for vehicles in industrial service",
        "Fuel corrosion on vehicle tanks and transport containers",
        "Maintenance scheduling limitations on operational transport systems",
      ]}
      solutions={[
        {
          product: "Rust Grip®",
          benefit: "Long-lasting corrosion protection for rail, road vehicles and infrastructure. Apply to rusted surfaces.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Super Therm®",
          benefit: "Reduce cabin heat in rail cars, buses and transport vehicles for improved passenger comfort.",
          href: "/coating-products/super-therm",
        },
        {
          product: "HPC® Coating",
          benefit: "Insulate exhaust pipes and hot engine components in transport vehicles.",
          href: "/coating-products/hpc-coating",
        },
        {
          product: "Omega Fire",
          benefit: "Fire protection for structural steel in transport tunnels and terminals.",
          href: "/coating-products/omega-fire",
        },
      ]}
      image="/images/transportation-industry.jpg"
      accentColor="#607D8B"
    />
  );
}
