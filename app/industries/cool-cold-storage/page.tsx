import IndustryPage from "@/components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cool & Cold Storage Coatings - SPI Coatings",
  description: "Thermal insulation coatings to reduce energy consumption in refrigerated storage and cold chain facilities.",
};

export default function CoolColdStoragePage() {
  return (
    <IndustryPage
      name="Cool & Cold Storage"
      description="Thermal insulation coatings that reduce heat ingress into refrigerated storage facilities, lowering energy consumption and maintaining cold chain integrity."
      longDescription="Cold storage and refrigerated facilities are among the highest energy consumers in the commercial sector. Keeping products cool requires massive refrigeration loads, and any reduction in the thermal insulation of the building envelope directly increases energy costs. SPI Coatings' Super Therm® dramatically reduces solar heat gain through roofs and walls, reducing the refrigeration load and delivering significant energy savings in cold storage operations."
      challenges={[
        "Enormous refrigeration energy costs from heat ingress through building envelope",
        "Solar heat gain through metal roofs driving up cooling loads",
        "Maintaining product temperatures and cold chain integrity",
        "Condensation and moisture causing corrosion of steel structures",
        "Temperature fluctuations stressing waterproof membranes",
        "Food safety requirements for internal coatings",
      ]}
      solutions={[
        {
          product: "Super Therm®",
          benefit: "Dramatically reduces solar heat gain through cold store roofs and walls, cutting refrigeration energy costs.",
          href: "/coating-products/super-therm",
        },
        {
          product: "Rust Grip®",
          benefit: "Corrosion protection for cold store steel structures in high-humidity refrigerated environments.",
          href: "/coating-products/rust-grip",
        },
        {
          product: "Lining Kote UHS",
          benefit: "Food-grade internal lining for cold store walls and floors where hygiene is critical.",
          href: "/coating-products/lining-kote-uhs",
        },
        {
          product: "SP Liquid Membrane®",
          benefit: "Flexible waterproof membrane that withstands temperature cycling in cold storage environments.",
          href: "/coating-products/sp-liquid-membrane",
        },
      ]}
      image="/images/cold-storage-industry.jpg"
      accentColor="#0097A7"
    />
  );
}
