import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - SPI Coatings",
  description: "Access SPI Coatings technical data sheets, application guides, coating calculators, glossary and educational resources.",
};

const glossaryTerms = [
  {
    term: "Solar Reflectance (SR)",
    definition: "The fraction of solar energy reflected by a surface. A value of 1.0 means all solar energy is reflected; 0 means all is absorbed. Also called albedo.",
  },
  {
    term: "Thermal Emittance (TE)",
    definition: "The efficiency with which a surface emits thermal (infrared) radiation. A value of 1.0 means the surface emits as efficiently as a perfect 'black body'.",
  },
  {
    term: "Solar Reflectance Index (SRI)",
    definition: "A measure of a surface's ability to reject solar heat. Calculated from solar reflectance and thermal emittance. A standard black surface has SRI of 0; a standard white surface has SRI of 100.",
  },
  {
    term: "Corrosion Under Insulation (CUI)",
    definition: "Corrosion that occurs on steel pipe and vessel surfaces under insulation cladding due to moisture infiltration. A major cause of pipe failures in industrial plants.",
  },
  {
    term: "Dry Film Thickness (DFT)",
    definition: "The thickness of a coating after all solvents have evaporated and the coating has cured. Measured in microns (μm) or mils.",
  },
  {
    term: "Intumescent Coating",
    definition: "A coating that expands dramatically when exposed to heat, forming a thick insulating char layer that protects the substrate from fire damage.",
  },
  {
    term: "VOC (Volatile Organic Compounds)",
    definition: "Organic chemicals that evaporate readily at room temperature. High VOC coatings contribute to air pollution and have health impacts. Low or zero VOC coatings are preferred for environmental and safety reasons.",
  },
  {
    term: "Salt Spray Test",
    definition: "A standardised corrosion test method using a saline (salt water) mist environment. Results are expressed in hours of exposure. Used to compare the corrosion resistance of coatings.",
  },
  {
    term: "Moisture-Cured Polyurethane",
    definition: "A single-component coating that cures by reacting with moisture in the atmosphere or substrate. Rust Grip® is a moisture-cured polyurethane.",
  },
  {
    term: "Epoxy Polyamide",
    definition: "A two-component coating system where an epoxy resin is cured with a polyamide hardener. Provides excellent adhesion, chemical resistance and durability.",
  },
  {
    term: "Cool Roof",
    definition: "A roofing system that delivers higher solar reflectance and higher thermal emittance than a standard roof, resulting in lower roof surface temperatures and reduced building cooling loads.",
  },
  {
    term: "Thermal Conductivity (k-value)",
    definition: "A measure of a material's ability to conduct heat. Expressed in W/m·K. Lower values indicate better insulating properties.",
  },
];

const conversionData = [
  { from: "Microns (μm)", to: "Mils", formula: "Divide by 25.4", example: "100 μm = 3.94 mils" },
  { from: "Mils", to: "Microns (μm)", formula: "Multiply by 25.4", example: "4 mils = 101.6 μm" },
  { from: "m²/L", to: "sq ft/gal", formula: "Multiply by 40.75", example: "8 m²/L = 326 sq ft/gal" },
  { from: "°C", to: "°F", formula: "(°C × 9/5) + 32", example: "100°C = 212°F" },
  { from: "°F", to: "°C", formula: "(°F - 32) × 5/9", example: "212°F = 100°C" },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #00578e 0%, #333 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>Resources</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            Technical data sheets, application guides, educational videos, glossary and coating calculators.
          </p>
        </div>
      </div>

      {/* Resource Categories */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Technical Data Sheets",
                description: "Download detailed technical data sheets for all SPI Coatings products, including specifications, coverage rates and application instructions.",
                icon: "📄",
                href: "#tds",
              },
              {
                title: "Application Guides",
                description: "Step-by-step application guides for proper surface preparation and coating application to ensure maximum performance.",
                icon: "📋",
                href: "#guides",
              },
              {
                title: "Educational Videos",
                description: "Watch SPI Coatings educational videos covering product applications, technical demonstrations and case studies.",
                icon: "🎥",
                href: "#videos",
              },
              {
                title: "Coatings Glossary",
                description: "Comprehensive glossary of coating terminology, testing methods and technical terms used in the coatings industry.",
                icon: "📚",
                href: "#glossary",
              },
              {
                title: "Coating Conversions",
                description: "Quick reference conversion charts for coating measurements, coverage rates and temperature units.",
                icon: "🔄",
                href: "#conversions",
              },
              {
                title: "Q&A",
                description: "Answers to frequently asked questions about SPI Coatings products, applications and performance.",
                icon: "❓",
                href: "#qa",
              },
            ].map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="hover-shadow"
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    padding: "30px",
                    background: "#fff",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "3em", marginBottom: "15px" }}>{resource.icon}</div>
                  <h2 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "10px" }}>
                    {resource.title}
                  </h2>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Coatings Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                style={{
                  background: "#fff",
                  padding: "20px 25px",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  borderLeft: "4px solid #00578e",
                }}
              >
                <h3 style={{ color: "#CC2026", fontWeight: "700", fontSize: "1em", marginBottom: "8px" }}>
                  {item.term}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversions */}
      <section id="conversions" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Coatings Conversions
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "#00578e", color: "#fff" }}>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>From</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>To</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>Formula</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {conversionData.map((row, i) => (
                  <tr
                    key={row.from}
                    style={{ background: i % 2 === 0 ? "#f7f7f7" : "#fff", borderBottom: "1px solid #e5e5e5" }}
                  >
                    <td style={{ padding: "12px 20px", fontWeight: "600", color: "#333" }}>{row.from}</td>
                    <td style={{ padding: "12px 20px", color: "#555" }}>{row.to}</td>
                    <td style={{ padding: "12px 20px", color: "#00578e", fontWeight: "600" }}>{row.formula}</td>
                    <td style={{ padding: "12px 20px", color: "#666" }}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact for TDS */}
      <section style={{ padding: "60px 0", background: "#CC2026", textAlign: "center" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#fff", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Need Technical Data Sheets or Application Guides?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px" }}>
            Contact SPI Coatings or your local authorised distributor for product documentation and technical support.
          </p>
          <Link
            href="/contact"
            style={{
              background: "#fff",
              color: "#CC2026",
              padding: "12px 30px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
