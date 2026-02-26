import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HPC®-INT Interior Hot Pipe Coating - SPI Coatings",
  description: "HPC®-INT is an interior hot pipe coating system for high-temperature insulation on internal pipe surfaces and vessel linings.",
};

export default function HpcIntPage() {
  return (
    <ProductPage
      name="HPC®-INT Coating"
      tagline="Interior Hot Pipe Coating System — High-Temperature Insulation for Internal Surfaces"
      category="Thermal Insulation Coatings"
      description="HPC®-INT is an interior-rated version of the HPC® hot pipe coating system, designed for application to internal pipe surfaces and vessel linings. It provides thermal insulation on the inside of pipes and vessels where external application is not possible or practical."
      longDescription="In many industrial applications, pipes and vessels require internal insulation to reduce heat transfer from the process fluid to the pipe wall or vessel shell. HPC®-INT is specifically formulated for internal application, providing thermal insulation that keeps process fluid temperatures stable and reduces heat loss from within the pipe or vessel. It is chemically resistant and approved for use in contact with a range of process fluids."
      features={[
        {
          title: "Internal Application",
          description: "Specifically formulated for application to internal pipe surfaces and vessel linings where external coating is impractical.",
        },
        {
          title: "High Temperature Rating",
          description: "Provides thermal insulation for internal surfaces operating at elevated temperatures.",
        },
        {
          title: "Process Fluid Compatibility",
          description: "Chemically resistant to a range of process fluids. Contact SPI for specific fluid compatibility guidance.",
        },
        {
          title: "Reduces Heat Loss",
          description: "Maintains process fluid temperatures, reduces energy consumption and improves process efficiency.",
        },
      ]}
      applications={[
        "Internal pipe insulation",
        "Vessel and tank lining insulation",
        "Duct internal linings",
        "Process pipe systems",
        "Industrial heat exchangers",
      ]}
      specifications={[
        { label: "Application Location", value: "Internal pipe and vessel surfaces" },
        { label: "Temperature Rating", value: "Up to 232°C (contact SPI for higher)" },
        { label: "Application Method", value: "Spray, brush (contact SPI for guidance)" },
      ]}
      image="/images/hpc-int.jpg"
      accentColor="#CC2026"
      relatedProducts={[
        { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
        { name: "HPC®-HT Coating", href: "/coating-products/hpc-ht-coating" },
        { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
      ]}
    />
  );
}
