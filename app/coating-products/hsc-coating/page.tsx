import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSC™ Hot Surface Coating - SP Coatings",
  description: "HSC™ is a hot surface coating for high-temperature equipment and vessels. Provides thermal insulation and corrosion protection at elevated temperatures.",
};

export default function HscCoatingPage() {
  return (
    <ProductPage
      name="HSC™ Coating"
      tagline="Hot Surface Coating for High-Temperature Equipment — Thermal Insulation and Corrosion Protection Combined"
      category="Thermal Insulation Coatings"
      description="HSC™ is a hot surface coating designed for high-temperature equipment, vessels and structures. It provides both thermal insulation and corrosion protection at elevated temperatures, making it ideal for industrial equipment that operates at high temperatures and is also subject to corrosive environments."
      longDescription="HSC™ can be applied to hot surfaces and provides long-term thermal insulation performance while simultaneously protecting the substrate from corrosion. It is particularly valuable for equipment where traditional insulation systems would trap moisture and accelerate corrosion, and where shutdown for application is not feasible. Used extensively in oil and gas, chemical processing and heavy industry."
      features={[
        {
          title: "Dual Function",
          description: "Provides both thermal insulation and corrosion protection in a single coating system, eliminating the need for separate systems.",
        },
        {
          title: "Hot Application",
          description: "Can be applied to hot operating surfaces, reducing the need for process shutdown and associated costs.",
        },
        {
          title: "CUI Prevention",
          description: "Prevents corrosion under insulation by eliminating the moisture trapping mechanism of traditional insulation systems.",
        },
        {
          title: "Broad Temperature Range",
          description: "Effective across a wide temperature range for versatile application on diverse industrial equipment.",
        },
      ]}
      applications={[
        "Industrial vessels and reactors",
        "Heat exchangers",
        "Storage tanks",
        "Furnace walls and equipment",
        "Industrial ovens and kilns",
        "Pressure vessels",
        "High-temperature ducting",
      ]}
      specifications={[
        { label: "Service Temperature", value: "Up to 400°C (contact SPI for specifics)" },
        { label: "Application Method", value: "Airless spray, brush, roller" },
        { label: "Function", value: "Thermal insulation + corrosion protection" },
      ]}
      image="/images/hsc-coating.jpg"
      accentColor="#00578e"
      relatedProducts={[
        { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
      ]}
    />
  );
}
