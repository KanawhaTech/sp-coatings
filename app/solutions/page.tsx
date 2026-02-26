import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coating Solutions - SPI Coatings",
  description: "SPI Coatings provides solutions for energy reduction, heat management, corrosion protection, fire resistance, waterproofing and more.",
};

const solutions = [
  {
    name: "Energy Reduction",
    href: "/solutions/energy-reduction",
    description: "Dramatically reduce energy consumption in buildings, equipment and industrial processes through thermal insulation coatings.",
    icon: "⚡",
    color: "#F57F17",
  },
  {
    name: "Heat Block Coatings",
    href: "/solutions/heat-block-coatings",
    description: "Block solar radiation and reduce heat gain through roofs, walls and surfaces using advanced ceramic technology.",
    icon: "☀️",
    color: "#CC2026",
  },
  {
    name: "Heat Management",
    href: "/solutions/heat-management",
    description: "Control heat on hot surfaces, hot pipes and high-temperature equipment in industrial facilities.",
    icon: "🌡️",
    color: "#e65100",
  },
  {
    name: "Live Hot Pipe Coatings",
    href: "/solutions/live-hot-pipe-coatings",
    description: "Insulate operating hot pipes without plant shutdown. Apply directly to pipes at temperatures up to 650°C.",
    icon: "🔥",
    color: "#BF360C",
  },
  {
    name: "Corrosion Protection",
    href: "/solutions/corrosion-protection",
    description: "Stop corrosion on metal surfaces with penetrating, encapsulating coatings that go where conventional coatings cannot.",
    icon: "🛡️",
    color: "#1B5E20",
  },
  {
    name: "Fire Resistance",
    href: "/solutions/fire-resistance",
    description: "Intumescent fire protection for structural steel, providing rated fire resistance of up to 4 hours.",
    icon: "🚒",
    color: "#880E4F",
  },
  {
    name: "Water Resistance",
    href: "/solutions/water-resistance",
    description: "Waterproof roofs, walls, tanks and below-grade structures with seamless, elastic membrane coatings.",
    icon: "💧",
    color: "#0D47A1",
  },
  {
    name: "Concrete & Flooring",
    href: "/solutions/concrete-flooring",
    description: "Protect and seal concrete floors and surfaces from abrasion, chemicals and moisture.",
    icon: "🏗️",
    color: "#37474F",
  },
  {
    name: "Chemical Protection",
    href: "/solutions/chemical-protection",
    description: "Chemical-resistant coatings for tanks, pipes and surfaces exposed to aggressive chemicals.",
    icon: "⚗️",
    color: "#4A148C",
  },
  {
    name: "Eco Friendly",
    href: "/solutions/eco-friendly",
    description: "Low VOC, water-based coating formulations that meet environmental regulations and sustainability goals.",
    icon: "🌿",
    color: "#2E7D32",
  },
  {
    name: "Cold & Cool Storage",
    href: "/solutions/cold-cool-storage",
    description: "Reduce energy costs in refrigerated storage with thermal insulation coatings that block solar heat gain.",
    icon: "❄️",
    color: "#006064",
  },
  {
    name: "Asbestos & Lead Encapsulation",
    href: "/solutions/asbestos-lead-encapsulation",
    description: "Safely encapsulate asbestos and lead paint surfaces, preventing fibre and particle release.",
    icon: "⚠️",
    color: "#E65100",
  },
  {
    name: "Transport",
    href: "/solutions/transport",
    description: "Coating solutions for transport vehicles, rail, road and maritime transport infrastructure.",
    icon: "🚛",
    color: "#455A64",
  },
];

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #CC2026 0%, #00578e 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>Coating Solutions</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            SPI Coatings provides innovative solutions for the most challenging coating problems in industry,
            commerce and infrastructure worldwide.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                href={solution.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="hover-lift"
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    padding: "30px",
                    background: "#fff",
                    borderTop: `4px solid ${solution.color}`,
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "2.5em", marginBottom: "15px" }}>{solution.icon}</div>
                  <h2
                    style={{
                      color: solution.color,
                      fontWeight: "700",
                      fontSize: "1.2em",
                      marginBottom: "10px",
                    }}
                  >
                    {solution.name}
                  </h2>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                    {solution.description}
                  </p>
                  <p style={{ color: "#CC2026", fontWeight: "700", fontSize: "12px", marginTop: "15px" }}>
                    LEARN MORE →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
