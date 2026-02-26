import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries - SPI Coatings",
  description: "SPI Coatings serves 14+ industries worldwide with proven coating solutions for thermal insulation, corrosion protection, fire resistance and more.",
};

const industries = [
  {
    name: "Agriculture",
    href: "/industries/agriculture",
    description: "Protect farm buildings, grain silos and agricultural equipment from heat and corrosion.",
    icon: "🌾",
    color: "#4CAF50",
  },
  {
    name: "Architecture",
    href: "/industries/architecture",
    description: "Cool roofing solutions, aesthetic finishes and protective coatings for architectural applications.",
    icon: "🏛️",
    color: "#00578e",
  },
  {
    name: "Aviation",
    href: "/industries/aviation",
    description: "High-performance coatings for hangars, runways, aircraft support facilities and equipment.",
    icon: "✈️",
    color: "#1565C0",
  },
  {
    name: "Commercial & Industrial",
    href: "/industries/commercial-industrial",
    description: "Complete coating solutions for factories, warehouses and commercial facilities.",
    icon: "🏭",
    color: "#795548",
  },
  {
    name: "Construction",
    href: "/industries/construction",
    description: "Protective and insulative coatings for new construction and renovation projects.",
    icon: "🏗️",
    color: "#FF8F00",
  },
  {
    name: "Cool & Cold Storage",
    href: "/industries/cool-cold-storage",
    description: "Thermal insulation coatings to reduce energy consumption in refrigerated storage facilities.",
    icon: "❄️",
    color: "#0097A7",
  },
  {
    name: "Energy & Mining",
    href: "/industries/energy-mining",
    description: "Hot pipe coatings, corrosion protection and insulation for energy and mining operations.",
    icon: "⚡",
    color: "#F57F17",
  },
  {
    name: "Marine",
    href: "/industries/marine",
    description: "Anti-corrosion and protective coatings for ships, offshore platforms and marine structures.",
    icon: "🚢",
    color: "#0D47A1",
  },
  {
    name: "Defence & Military",
    href: "/industries/defence-military",
    description: "Specialised coatings for military vehicles, infrastructure and defence installations.",
    icon: "🛡️",
    color: "#33691E",
  },
  {
    name: "Infrastructure",
    href: "/industries/infrastructure",
    description: "Protecting bridges, dams, highways and public infrastructure for extended service life.",
    icon: "🌉",
    color: "#37474F",
  },
  {
    name: "Residential",
    href: "/industries/residential",
    description: "Passive cooling solutions for homes — reduce heat gain and lower energy bills.",
    icon: "🏠",
    color: "#E91E63",
  },
  {
    name: "Shipping Containers",
    href: "/industries/shipping-containers",
    description: "Thermal insulation and corrosion protection for shipping containers and modular units.",
    icon: "📦",
    color: "#FF5722",
  },
  {
    name: "Transportation",
    href: "/industries/transportation",
    description: "Protective coatings for rail, road and transportation infrastructure and vehicles.",
    icon: "🚛",
    color: "#607D8B",
  },
  {
    name: "Warehouse",
    href: "/industries/warehouse",
    description: "Roof and wall insulation coatings to reduce heat and lower air conditioning costs in warehouses.",
    icon: "🏢",
    color: "#9C27B0",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #00578e 0%, #1a1a1a 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>Industries We Serve</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            SPI Coatings provides proven coating solutions across 14+ industries worldwide. From marine to mining,
            aviation to agriculture — we have a coating for every challenge.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="hover-lift"
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    padding: "30px",
                    background: "#fff",
                    borderLeft: `5px solid ${industry.color}`,
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "2.5em", marginBottom: "15px" }}>{industry.icon}</div>
                  <h2
                    style={{
                      color: industry.color,
                      fontWeight: "700",
                      fontSize: "1.2em",
                      marginBottom: "10px",
                    }}
                  >
                    {industry.name}
                  </h2>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                    {industry.description}
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
