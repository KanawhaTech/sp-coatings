import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy & Mining Industry Coatings - SPI Coatings",
  description: "Hot pipe coatings, corrosion protection and insulation for oil, gas, energy and mining operations worldwide.",
};

export default function EnergyMiningPage() {
  return (
    <IndustryPage
      name="Energy & Mining"
      description="Hot pipe coatings, corrosion protection and thermal insulation solutions for oil, gas, power generation and mining operations."
      longDescription="Energy production and mining operations subject equipment and infrastructure to extreme conditions — high temperatures, corrosive chemicals, abrasive materials and harsh weather. SPI Coatings has been the trusted partner for energy and mining companies worldwide for over 35 years, providing coating solutions that reduce energy loss, prevent corrosion and extend equipment life. Our HPC® hot pipe coating can be applied to live operating pipes, eliminating the need for costly plant shutdowns."
      challenges={[
        "High-temperature process pipes losing energy through uninsulated surfaces",
        "Corrosion of steel equipment in chemically aggressive environments",
        "Plant shutdown costs for conventional pipe insulation installation",
        "Corrosion under insulation (CUI) causing pipe failures",
        "Heat loss from storage tanks reducing process efficiency",
        "Personnel burn hazards from hot pipe surfaces",
        "Environmentally sensitive areas requiring low-VOC solutions",
      ]}
      solutions={[
        {
          product: "HPC® Coating",
          benefit: "Apply insulation to live operating hot pipes up to 232°C without shutdown. Recognised by EPA ENERGY STAR.",
          href: "/coating-products/hpc-coating",
        },
        {
          product: "HPC®-HT Coating",
          benefit: "High-temperature hot pipe coating for pipes operating up to 650°C in power stations and heavy industry.",
          href: "/coating-products/hpc-ht-coating",
        },
        {
          product: "Rust Grip®",
          benefit: "Unequalled corrosion protection for pipelines, equipment and structures in corrosive oil and gas environments.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Super Therm®",
          benefit: "Reduce heat gain in storage tanks and process buildings, lowering cooling costs and evaporation losses.",
          href: "/coating-products/super-therm",
        },
        {
          product: "HSC™ Coating",
          benefit: "Hot surface coating for vessels, exchangers and equipment requiring simultaneous insulation and corrosion protection.",
          href: "/coating-products/hsc-coating",
        },
        {
          product: "Lining Kote UHS",
          benefit: "Chemical-resistant internal lining for tanks and vessels storing aggressive process chemicals.",
          href: "/coating-products/lining-kote-uhs",
        },
      ]}
      image="/images/energy-mining-industry.jpg"
      accentColor="#F57F17"
    />
  );
}
