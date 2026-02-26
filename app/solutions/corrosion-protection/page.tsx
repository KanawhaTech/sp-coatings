import SolutionPage from "@/components/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corrosion Protection Coatings - SPI Coatings",
  description: "Stop corrosion with penetrating encapsulating coatings. Apply to rusted, wet or contaminated surfaces without sandblasting.",
};

export default function CorrosionProtectionPage() {
  return (
    <SolutionPage
      title="Corrosion Protection"
      subtitle="The paradigm shift in corrosion protection — penetrate, encapsulate and protect in a single coat"
      description="Corrosion costs the global economy trillions of dollars annually. Traditional approaches to corrosion protection — sandblast, prime, topcoat — are effective but enormously expensive and disruptive. Rust Grip® from SPI Coatings represents a paradigm shift: it penetrates into rust and existing corrosion, expands upon curing to seal out air and moisture, and forms a tough, impervious barrier that stops corrosion at the source. Among zinc-free single-coat systems tested in independent studies, Rust Grip® consistently shows the best performance."
      benefits={[
        "Apply directly to rusted and corroded surfaces without sandblasting",
        "Single coat provides complete corrosion protection",
        "Tested to 30,000+ hours salt spray resistance",
        "Zero zinc — environmentally friendly formulation",
        "Galvanic, barrier and encapsulation protection in one coat",
        "Apply to wet, damp or contaminated surfaces",
        "Apply underwater — marine and infrastructure applications",
        "Significantly lower cost than conventional sandblast and coat systems",
      ]}
      products={[
        {
          name: "Rust Grip®",
          description: "The paradigm shift corrosion coating. Single coat, zero zinc. Penetrates rust, encapsulates and protects. 30,000+ hours salt spray.",
          href: "/coating-products/rust-grip",
        },
        {
          name: "Moist Metal Grip",
          description: "Apply to wet, damp, oily or contaminated metal without any surface preparation. Cures underwater.",
          href: "/coating-products/moist-metal-grip",
        },
        {
          name: "Enamo Grip®",
          description: "Chemical-resistant topcoat to overcoat Rust Grip® and provide additional chemical and UV protection.",
          href: "/coating-products/enamo-grip",
        },
        {
          name: "HSC™ Coating",
          description: "Combined thermal insulation and corrosion protection for hot equipment. Prevents corrosion under insulation.",
          href: "/coating-products/hsc-coating",
        },
      ]}
      accentColor="#1B5E20"
    />
  );
}
