import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HPC®-HT High Temperature Hot Pipe Coating - SPI Coatings",
  description: "HPC®-HT is a high-temperature pipe coating system rated for pipes operating up to 650°C (1200°F). For extreme temperature industrial applications.",
};

export default function HpcHtPage() {
  return (
    <ProductPage
      name="HPC®-HT Coating"
      tagline="High-Temperature Hot Pipe Coating — Rated for Pipes up to 650°C (1200°F)"
      category="Thermal Insulation Coatings"
      description="HPC®-HT is the high-temperature version of the HPC® hot pipe coating system, rated for pipes and equipment operating at surface temperatures up to 650°C (1200°F). It is designed for the most extreme temperature applications found in heavy industry, power generation and petrochemical facilities."
      longDescription="For pipes operating above 232°C where standard HPC® coating cannot be used, HPC®-HT provides a complete thermal insulation solution. The system can be applied to hot operating surfaces, eliminates the need for plant shutdown, and provides significant energy savings while protecting personnel from burn hazards. It is used extensively in oil and gas, power generation and heavy manufacturing."
      features={[
        {
          title: "650°C Service Rating",
          description: "Rated for surface temperatures up to 650°C (1200°F), covering the most extreme industrial temperature applications.",
        },
        {
          title: "Live Application",
          description: "Can be applied to hot operating surfaces without plant shutdown, maintaining continuous production.",
        },
        {
          title: "Extreme Thermal Insulation",
          description: "Dramatically reduces heat loss from high-temperature process equipment, cutting energy consumption.",
        },
        {
          title: "Personnel Safety",
          description: "Reduces external surface temperatures to safe levels, eliminating burn hazards around high-temperature equipment.",
        },
      ]}
      applications={[
        "High-temperature steam lines",
        "Furnace piping and ducting",
        "Exhaust systems",
        "Power boiler piping",
        "Petrochemical process lines",
        "Steel mill equipment",
        "Ceramic and glass furnace piping",
      ]}
      specifications={[
        { label: "Maximum Service Temperature", value: "650°C (1200°F)" },
        { label: "Application Method", value: "Specialised hot application equipment" },
        { label: "Number of Coats", value: "Multiple coats to specification" },
        { label: "Thermal Conductivity", value: "0.035 W/m·K" },
      ]}
      image="/images/hpc-ht.jpg"
      accentColor="#CC2026"
      relatedProducts={[
        { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
        { name: "HPC®-INT Coating", href: "/coating-products/hpc-int-coating" },
        { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
      ]}
    />
  );
}
