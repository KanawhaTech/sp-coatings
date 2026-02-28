import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Base - High-Performance Primer - SP Coatings",
  description: "Super Base is a high-performance primer and base coat that improves adhesion of topcoats on difficult substrates.",
};

export default function SuperBasePage() {
  return (
    <ProductPage
      name="Super Base"
      tagline="High-Performance Primer Maximising Adhesion on Difficult Substrates"
      category="Base Coatings"
      description="Super Base is a high-performance primer and base coat designed to maximise adhesion of SPI topcoats on difficult or challenging substrates. It creates a robust base for the entire coating system, ensuring long-term performance."
      longDescription="Not all substrates are straightforward to coat. Chalky, lightly contaminated, aged or unusual surfaces can challenge even the best topcoats if the primer system is inadequate. Super Base penetrates and bonds to difficult substrates, creating a firm, consistent base for SPI thermal insulation and protective coatings. It is particularly valuable as a primer under Super Therm® on aged or difficult surfaces."
      features={[
        {
          title: "Excellent Adhesion",
          description: "Outstanding adhesion to difficult, aged or contaminated substrates where standard primers fail.",
        },
        {
          title: "Enhances Topcoat Performance",
          description: "Creates the ideal surface for SPI topcoats, maximising the adhesion and durability of the entire system.",
        },
        {
          title: "Versatile Substrate Compatibility",
          description: "Suitable for metal, concrete, wood, fibreglass, existing coatings and other challenging surfaces.",
        },
        {
          title: "Fast Drying",
          description: "Fast drying time allows rapid topcoat application, reducing overall project duration.",
        },
      ]}
      applications={[
        "Primer under Super Therm® on difficult surfaces",
        "Primer on aged and weathered surfaces",
        "Pre-treatment for thermal insulation systems",
        "Base coat on fibreglass surfaces",
        "Primer on concrete and masonry",
        "Base coat on aged metal",
      ]}
      specifications={[
        { label: "Function", value: "Adhesion primer / base coat" },
        { label: "Substrate Compatibility", value: "Metal, concrete, wood, fibreglass, existing coatings" },
        { label: "Coverage Rate", value: "8-10 m² per litre" },
        { label: "Dry Time", value: "1-2 hours before topcoat" },
        { label: "Application Method", value: "Brush, roller, spray" },
      ]}
      image="/images/super-base.jpg"
      accentColor="#6a1b9a"
      relatedProducts={[
        { name: "Super Therm®", href: "/coating-products/super-therm" },
        { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
      ]}
    />
  );
}
