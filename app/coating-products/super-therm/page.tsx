import ProductPage from "@/components/ProductPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Therm® Solar Heat Reduction Coating - SPI Coatings",
  description: "Super Therm® is the original ceramics thermal insulation coating developed with NASA. Reduces infrared heat, stops heat load. Highest solar heat blocking rating of any ceramic coating.",
};

export default function SuperThermPage() {
  return (
    <ProductPage
      name="Super Therm®"
      tagline="The World's #1 Solar Heat Blocking Ceramic Coating — Developed with NASA since 1989"
      category="Thermal Insulation Coatings"
      description="Super Therm® is the original ceramics thermal insulation coating that reduces infrared heat and stops heat load. It's also the only ceramics coating developed with NASA. Super Therm® is the most effective, proven, durable and long lasting ceramics coating on the market — it's the Super Ceramics Thermal Coating!"
      longDescription="For the best cool roofing options, consider a high solar reflectance value, high emissivity and high thermal reduction. Super Therm® has one of the world's highest total solar heat blocking ratings of 367 to 4 BTUs for a ceramic coating and thermal emittance of 0.91. Between 1989 and 1995, SPI Coatings worked directly with NASA in a six-year research program identifying which ceramic structures function in thin films for radiative heat blocking. That knowledge gap still exists today — there is no other manufacturer with 37 years of continuous ceramic insulation research."
      features={[
        {
          title: "Highest Heat Block Rating",
          description: "One of the world's highest total solar heat blocking ratings of 367 to 4 BTUs for a ceramic coating.",
        },
        {
          title: "NASA Developed",
          description: "The only ceramics coating developed directly with NASA in a six-year joint research program from 1989 to 1995.",
        },
        {
          title: "Thermal Emittance 0.91",
          description: "Exceptional thermal emittance rating of 0.91 ensures maximum heat dissipation from coated surfaces.",
        },
        {
          title: "Single Coat Application",
          description: "One coat of Super Therm® provides complete solar heat protection — no primers or multiple coats required.",
        },
        {
          title: "30+ Year Durability",
          description: "Proven performance over 30+ years of real-world installations worldwide. Does not crack, peel or lose effectiveness.",
        },
        {
          title: "Energy Cost Reduction",
          description: "Reduces building cooling loads by up to 40%, delivering significant energy savings and lower operating costs.",
        },
        {
          title: "Environmentally Friendly",
          description: "Water-based, low VOC formula. Environmentally safe for use in sensitive areas including food processing facilities.",
        },
        {
          title: "Wide Temperature Range",
          description: "Suitable for surface temperatures from -40°C to +200°C, making it versatile for global applications.",
        },
        {
          title: "Corrosion Under Insulation",
          description: "Prevents corrosion under insulation (CUI) by providing a breathable moisture-resistant barrier.",
        },
      ]}
      applications={[
        "Commercial and industrial roofing",
        "Residential roofing and exterior walls",
        "Storage tanks and vessels",
        "Pipelines and process equipment",
        "Aviation hangars and military facilities",
        "Data centres and server rooms",
        "Cold storage and refrigerated buildings",
        "Shipping containers",
        "Agricultural buildings",
        "Infrastructure (bridges, dams, tunnels)",
        "Marine vessel decks and superstructures",
        "Walkways and pedestrian areas",
      ]}
      specifications={[
        { label: "Solar Reflectance Index (SRI)", value: "Up to 105" },
        { label: "Thermal Emittance", value: "0.91" },
        { label: "Heat Blocked (Total Solar)", value: "367 to 4 BTUs" },
        { label: "Application Temperature", value: "5°C to 40°C (41°F to 104°F)" },
        { label: "Service Temperature", value: "-40°C to +200°C" },
        { label: "Coverage Rate", value: "6-8 m² per litre (dry film)" },
        { label: "Dry Film Thickness", value: "150-200 microns per coat" },
        { label: "VOC Content", value: "< 50 g/L" },
        { label: "Flash Point", value: "None (water-based)" },
        { label: "Cure Time", value: "24-48 hours to full cure" },
        { label: "Colour", value: "White (standard), custom colours available" },
        { label: "Substrate Compatibility", value: "Metal, concrete, wood, fibreglass, existing coatings" },
      ]}
      image="/images/super-therm.jpg"
      accentColor="#00578e"
      relatedProducts={[
        { name: "Rust Grip®", href: "/coating-products/rust-grip" },
        { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
        { name: "Sunshield", href: "/coating-products/sunshield" },
        { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
        { name: "SP Liquid Membrane®", href: "/coating-products/sp-liquid-membrane" },
      ]}
    />
  );
}
