import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP APC Strippable - Temporary Surface Protection - SPI Coatings",
  description: "SP APC Strippable is a removable strippable coating for temporary surface protection during transport, storage and construction.",
};

export default function SpApcPage() {
  return (
    <ProductPage
      name="SP APC Strippable"
      tagline="Removable Strippable Coating for Temporary Surface Protection"
      category="Sealant Coatings"
      description="SP APC Strippable is a removable coating that provides temporary surface protection during transport, storage, construction and fabrication. It can be easily peeled off when protection is no longer required, leaving the underlying surface clean and undamaged."
      longDescription="Protecting valuable surfaces during construction, transportation and storage is critical. SP APC Strippable forms a tough, flexible film that shields surfaces from scratches, abrasion, moisture and contamination. When the project is complete or the surface is ready for its final finish, the strippable coating is simply peeled away or washed off — no solvents, no damage, no mess."
      features={[
        {
          title: "Easy Removal",
          description: "Simply peel or wash off when protection is no longer needed — no solvents required.",
        },
        {
          title: "No Surface Damage",
          description: "Removes cleanly without leaving residue or damaging the protected surface.",
        },
        {
          title: "Broad Surface Compatibility",
          description: "Suitable for protection of metal, glass, plastic, painted and polished surfaces.",
        },
        {
          title: "Flexible Duration",
          description: "Provides protection for days, weeks or months depending on formulation and exposure conditions.",
        },
      ]}
      applications={[
        "Equipment transport protection",
        "Construction site surface protection",
        "Fabrication shop surface protection",
        "Painted surface protection during handling",
        "Glass and window protection",
        "Polished metal protection",
        "Storage protection",
      ]}
      specifications={[
        { label: "Removal Method", value: "Peel or water wash" },
        { label: "Application Method", value: "Spray, brush, roller" },
        { label: "Protection Duration", value: "Days to months (formulation dependent)" },
        { label: "Substrate Compatibility", value: "Metal, glass, plastic, painted surfaces" },
      ]}
      image="/images/sp-apc.jpg"
      accentColor="#2e7d32"
      relatedProducts={[
        { name: "SP Interlock", href: "/coating-products/sp-interlock" },
        { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
      ]}
    />
  );
}
