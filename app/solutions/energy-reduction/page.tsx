import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Reduction Coatings - SPI Coatings",
  description: "Reduce energy consumption in buildings and industrial equipment with SPI Coatings thermal insulation solutions.",
};

export default function EnergyReductionPage() {
  return (
    <SolutionPage
      title="Energy Reduction"
      subtitle="Dramatically reduce energy consumption and carbon emissions through innovative thermal insulation coating technology"
      description="Energy reduction is the primary driver for most SPI Coatings applications. Whether it's reducing the cooling load on a building, cutting heat loss from industrial piping, or insulating storage tanks to reduce evaporation losses — SPI Coatings provide proven, measurable energy savings. Our coatings are recognised by the US EPA ENERGY STAR programme and have documented energy savings in hundreds of projects worldwide. The typical payback period is 12-24 months, making these coatings an excellent investment."
      benefits={[
        "Reduce building cooling costs by up to 40%",
        "Cut industrial pipe heat loss by up to 75%",
        "Recognised by US EPA ENERGY STAR programme",
        "Payback period typically 12-24 months",
        "Reduce CO₂ emissions and carbon footprint",
        "Improve worker comfort in industrial environments",
        "Extend equipment life by reducing thermal stress",
        "Help achieve green building certifications (LEED, BREEAM)",
      ]}
      products={[
        {
          name: "Super Therm®",
          description: "The world's #1 thermal insulation coating. Blocks up to 96% of solar heat gain. Developed with NASA. Used on 10.3 million m² in Japan alone.",
          href: "/coating-products/super-therm",
        },
        {
          name: "HPC® Coating",
          description: "Live hot pipe coating that insulates operating pipes at up to 232°C without shutdown. EPA ENERGY STAR recognised.",
          href: "/coating-products/hpc-coating",
        },
        {
          name: "Sunshield",
          description: "Cost-effective heat reflective paint for roofs and walls. High solar reflectance for energy savings.",
          href: "/coating-products/sunshield",
        },
        {
          name: "HSC™ Coating",
          description: "Hot surface coating for industrial equipment combining thermal insulation and corrosion protection.",
          href: "/coating-products/hsc-coating",
        },
      ]}
      accentColor="#F57F17"
    />
  );
}
