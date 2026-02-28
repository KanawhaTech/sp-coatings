import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Seal Coat - Penetrating Sealer & Primer - SP Coatings",
  description: "SP Seal Coat is a penetrating sealer and primer for concrete, masonry and porous substrates.",
};

export default function SpSealCoatPage() {
  return (
    <ProductPage
      name="SP Seal Coat"
      tagline="Penetrating Sealer and Primer for Concrete, Masonry and Porous Substrates"
      category="Base Coatings"
      description="SP Seal Coat is a penetrating sealer and primer designed for concrete, masonry, brick and other porous substrates. It seals the surface, reducing porosity and providing an ideal base for subsequent coating applications."
      longDescription="Porous substrates like concrete and masonry can cause adhesion failures, pin-holing and early failure of topcoat systems if not properly sealed. SP Seal Coat penetrates deeply into the substrate, sealing pores and consolidating friable surfaces. It reduces substrate moisture vapour transmission, improves adhesion of subsequent coatings and prevents outgassing that can cause bubbling in topcoats."
      features={[
        {
          title: "Deep Penetration",
          description: "Penetrates deeply into concrete and masonry, sealing pores and consolidating friable surfaces.",
        },
        {
          title: "Moisture Vapour Control",
          description: "Reduces moisture vapour transmission through concrete, preventing coating blistering and delamination.",
        },
        {
          title: "Improved Adhesion",
          description: "Creates an ideal primed surface for subsequent SPI coatings and other high-performance coating systems.",
        },
        {
          title: "Anti-Outgassing",
          description: "Seals surface pores to prevent air and gas release during topcoat application, avoiding pin-holing.",
        },
      ]}
      applications={[
        "Concrete floors prior to epoxy coating",
        "Masonry and brick walls",
        "Concrete tanks and vessels",
        "Porous roofing substrates",
        "Concrete bridges and infrastructure",
        "Pre-treatment for Super Therm® on concrete",
      ]}
      specifications={[
        { label: "Substrate", value: "Concrete, masonry, brick, porous surfaces" },
        { label: "Coverage Rate", value: "5-10 m² per litre (substrate dependent)" },
        { label: "Application Method", value: "Brush, roller, spray" },
        { label: "Dry Time", value: "1-4 hours before topcoat" },
        { label: "Type", value: "Penetrating sealer / primer" },
      ]}
      image="/images/sp-seal-coat.jpg"
      accentColor="#6a1b9a"
      relatedProducts={[
        { name: "SP Seal Coat HT", href: "/coating-products/sp-seal-coat-ht" },
        { name: "Super Base", href: "/coating-products/super-base" },
        { name: "SP Interlock", href: "/coating-products/sp-interlock" },
      ]}
    />
  );
}
