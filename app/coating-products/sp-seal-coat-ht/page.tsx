import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Seal Coat HT - High-Temperature Sealer - SP Coatings",
  description: "SP Seal Coat HT is a high-temperature version of SP Seal Coat for surfaces exposed to elevated temperatures.",
};

export default function SpSealCoatHtPage() {
  return (
    <ProductPage
      name="SP Seal Coat HT"
      tagline="High-Temperature Penetrating Sealer for Hot Surfaces and Equipment"
      category="Base Coatings"
      description="SP Seal Coat HT is the high-temperature version of SP Seal Coat, designed for use on surfaces that are exposed to elevated temperatures. It provides the same sealing and priming benefits as standard SP Seal Coat but maintains its performance at higher temperatures."
      longDescription="In industrial environments, many surfaces run at elevated temperatures where standard sealers would fail. SP Seal Coat HT maintains its sealing and adhesion-promoting properties at elevated temperatures, making it the correct choice for priming hot surfaces prior to the application of HPC® and HSC™ coatings. It ensures maximum adhesion of the thermal insulation coating system to the substrate."
      features={[
        {
          title: "High Temperature Stability",
          description: "Maintains sealing and adhesion properties at elevated temperatures where standard sealers fail.",
        },
        {
          title: "Hot Surface Priming",
          description: "Ideal primer for hot surfaces prior to HPC® and HSC™ hot coating application.",
        },
        {
          title: "Deep Penetration",
          description: "Penetrates into porous substrates to seal pores and provide a firm base for hot coating systems.",
        },
      ]}
      applications={[
        "Hot pipe surfaces prior to HPC® application",
        "High-temperature vessel exteriors",
        "Industrial oven and furnace exteriors",
        "Hot equipment and machinery",
      ]}
      specifications={[
        { label: "Service Temperature", value: "Up to 400°C (contact SPI)" },
        { label: "Function", value: "High-temperature sealer / primer" },
        { label: "Application Method", value: "Brush, spray" },
        { label: "Substrate", value: "Metal, concrete at elevated temperatures" },
      ]}
      image="/images/sp-seal-coat-ht.jpg"
      accentColor="#6a1b9a"
      relatedProducts={[
        { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
        { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
        { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
      ]}
    />
  );
}
