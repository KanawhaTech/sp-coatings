import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Container Coatings - SP Coatings",
  description: "Thermal insulation and corrosion protection for shipping containers and modular units.",
};

export default function ShippingContainersPage() {
  return (
    <IndustryPage
      name="Shipping Containers"
      description="Thermal insulation and corrosion protection coatings for shipping containers, container homes, modular buildings and container-based structures."
      longDescription="Shipping containers are used worldwide for cargo transport, storage and increasingly as modular building units for homes, offices and commercial spaces. However, steel containers are prone to corrosion and conduct heat extremely well — making them either uncomfortably hot or expensive to cool. SP Coatings provides thermal insulation and corrosion protection solutions that transform containers into comfortable, durable spaces."
      challenges={[
        "Extreme heat buildup inside steel containers in sunny conditions",
        "Corrosion of container steel from salt water and marine environments",
        "High cooling energy costs for refrigerated or modified containers",
        "Condensation on cold steel walls causing rust and mould",
        "Cargo damage from temperature extremes",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Applied to container roofs and walls, dramatically reduces internal temperatures in hot conditions.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for container exteriors and interiors, particularly for marine-environment containers.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Sunshield",
          benefit: "Cost-effective heat reflective coating for container roofs to reduce solar heat gain.",
          href: "/coating-products/sunshield",
        },
        {
          product: "Enamo Grip®",
          benefit: "Durable interior topcoat for converted container homes and commercial spaces.",
          href: "/coating-products/enamo-grip",
        },
      ]}
      image="/images/shipping-containers-industry.jpg"
      accentColor="#FF5722"
    />
  );
}
