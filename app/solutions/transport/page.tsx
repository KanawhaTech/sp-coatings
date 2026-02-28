import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport Coatings - SP Coatings",
  description: "Coating solutions for transport vehicles, rail, road and maritime transport infrastructure.",
};

export default function TransportPage() {
  return (
    <SolutionPage
      title="Transport"
      subtitle="Corrosion protection and thermal management coatings for transport vehicles and infrastructure"
      description="The transport sector encompasses one of the largest inventories of steel in the world — from rail infrastructure and bridges to vehicle fleets and maritime vessels. All of this steel is exposed to the most aggressive corrosive environments: salt water spray on marine routes, de-icing salts on road and rail, and continuous vibration and mechanical stress. SP Coatings provides high-performance coating solutions that extend the service life of transport infrastructure and vehicle fleets while reducing maintenance costs."
      benefits={[
        "Extend service life of transport infrastructure and vehicles",
        "Reduce maintenance frequency and associated costs",
        "Apply to rusted and corroded surfaces without sandblasting",
        "Thermal management for passenger cabin comfort",
        "Fire protection for tunnels and enclosed transport structures",
        "Chemical resistance for fuel and cargo contact areas",
        "Apply without taking vehicles or infrastructure out of service",
        "Long-term protection in salt spray and de-icing salt environments",
      ]}
      products={[
        {
          name: "Rust Grip®",
          description: "Corrosion protection for vehicle chassis, rail infrastructure and transport structures. Apply to corroded surfaces.",
          href: "/coating-products/rust-grip",
        },
        {
          name: "Super Therm®",
          description: "Reduce cabin heat in passenger vehicles, rail cars and buses, improving comfort and reducing air conditioning energy.",
          href: "/coating-products/super-therm",
        },
        {
          name: "Omega Fire",
          description: "Fire protection for structural steel in transport tunnels, stations and enclosed transport facilities.",
          href: "/coating-products/omega-fire",
        },
        {
          name: "HPC® Coating",
          description: "Insulate hot exhaust pipes and engine components on heavy transport vehicles.",
          href: "/coating-products/hpc-coating",
        },
      ]}
      accentColor="#455A64"
    />
  );
}
