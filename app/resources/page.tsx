import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - SP Coatings",
  description: "Access SP Coatings technical data sheets, application guides, coating calculators, glossary and educational resources.",
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
                description: "Download detailed technical data sheets for all SP Coatings products, including specifications, coverage rates and application instructions.",
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
                description: "Watch SP Coatings educational videos covering product applications, technical demonstrations and case studies.",
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
                description: "Answers to frequently asked questions about SP Coatings products, applications and performance.",
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

      {/* Technical Data Sheets */}
      <section id="tds" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Technical Data Sheets
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Technical Data Sheets (TDS) for all SP Coatings products are available from your authorised SP Coatings distributor or by contacting SP Coatings directly. Each TDS includes full product specifications, application instructions, coverage rates and safety information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Super Therm® Solar Heat Block Coating",
              "Sunshield Heat Reflective Paint",
              "HPC® Hot Pipe Coating",
              "HPC®-INT Coating",
              "HPC®-HT Coating",
              "HSC™ Hot Surface Coating",
              "Rust Grip® Corrosion Encapsulation",
              "Moist Metal Grip",
              "Omega Fire™ Intumescent Coating",
              "Enamo Grip® Polyurethane",
              "Enamo Grip 5000® High Solids",
              "Lining Kote UHS Tank Lining",
              "SP APC Strippable",
              "SP Interlock Concrete Conditioner",
              "SP Liquid Membrane®",
              "SP Seal Coat",
              "SP Seal Coat HT",
              "SP Texture Coat",
              "Super Base HS",
            ].map((product) => (
              <div
                key={product}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid #e5e5e5",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <span style={{ color: "#333", fontSize: "13px", fontWeight: "600" }}>{product}</span>
                <Link
                  href="/contact"
                  style={{
                    color: "#CC2026",
                    fontSize: "12px",
                    fontWeight: "700",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Request →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guides */}
      <section id="guides" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Application Guides
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Proper surface preparation and application technique are critical to coating performance. SP Coatings application guides provide step-by-step instructions for each product and substrate type. Contact SP Coatings or your local distributor for product-specific application documentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Surface Preparation",
                description: "All surfaces must be clean, dry and free of loose material, oil and contaminants. SP Coatings products are surface-tolerant but perform best on well-prepared substrates. Refer to the individual product TDS for minimum surface preparation requirements.",
              },
              {
                title: "Application Methods",
                description: "Most SP Coatings products can be applied by brush, roller or airless spray. Coverage rates vary by product and substrate porosity. Always apply in the correct DFT (dry film thickness) as specified in the product TDS.",
              },
              {
                title: "Environmental Conditions",
                description: "Apply in dry conditions. Avoid application in rain, high humidity (above 85% RH) or on frozen surfaces. Substrate and air temperature should be within the ranges specified for each product. Do not apply if rain is expected within 4 hours.",
              },
              {
                title: "Multi-coat Systems",
                description: "Some SP Coatings applications require multi-coat systems — for example, Rust Grip® primer with Enamo Grip® topcoat, or Super Therm® with SP Seal Coat. Refer to the system specification sheet for inter-coat times and compatibility.",
              },
            ].map((guide) => (
              <div
                key={guide.title}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  borderLeft: "4px solid #CC2026",
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
                  {guide.title}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Educational Videos
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Watch SP Coatings educational videos covering product applications, scientific principles and real-world case studies. Visit the{" "}
            <a href="https://www.youtube.com/@spicoatings" target="_blank" rel="noopener noreferrer" style={{ color: "#CC2026", fontWeight: "700" }}>
              SP Coatings YouTube channel
            </a>{" "}
            for the full video library.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Advanced Ceramic Compounds to Block Heat", href: "https://youtu.be/P45tFzJvwLU", videoId: "P45tFzJvwLU" },
              { title: "History of SPI and Ceramics Thermal Coatings", href: "https://youtu.be/GzeRBhxcmT4", videoId: "GzeRBhxcmT4" },
              { title: "Rust Grip Workstrings SP Coatings", href: "https://youtu.be/bqXo_ZuqXGg", videoId: "bqXo_ZuqXGg" },
              { title: "Corrosion Encapsulation with Rust Grip Explained®", href: "https://youtu.be/gIWq87uotiY", videoId: "gIWq87uotiY" },
            ].map((video) => (
              <a
                key={video.videoId}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    gap: "0",
                    background: "#fff",
                  }}
                >
                  <div style={{ position: "relative", width: "160px", flexShrink: 0, background: "#000" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt={video.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ color: "#00578e", fontWeight: "700", fontSize: "14px", lineHeight: "1.5", margin: "0 0 8px" }}>
                      {video.title}
                    </p>
                    <span style={{ color: "#CC2026", fontWeight: "700", fontSize: "12px" }}>Watch on YouTube →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section id="qa" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {[
              {
                q: "Can Super Therm® be applied over existing paint?",
                a: "Yes. Super Therm® can be applied over most firmly bonded existing coatings. The surface should be clean, dry and in good condition. Loose or peeling paint must be removed before application. A spot test is recommended on unknown existing coatings.",
              },
              {
                q: "Can Rust Grip® be applied to a wet surface?",
                a: "Rust Grip® must be applied to completely dry surfaces. For wet or damp surfaces, use Moist Metal Grip — a two-part epoxy system specifically designed for wet or damp metal substrates, including underwater applications.",
              },
              {
                q: "How long does Super Therm® last?",
                a: "Super Therm® has been documented to maintain performance for over 30 years in real-world installations. The Hoover Dam installation and installations from the early 1990s in Japan are still performing. With a suitable topcoat such as SP Seal Coat or Enamo Grip®, service life is extended further.",
              },
              {
                q: "Can HPC® Coating be applied to a hot pipe without shutting down?",
                a: "Yes — this is a key advantage of HPC® Coating. It can be applied to pipes operating at up to 232°C (450°F) for HPC®, up to 426°C (800°F) for HPC®-INT, and up to 650°C (1200°F) for HPC®-HT. No plant shutdown is required.",
              },
              {
                q: "What is the difference between Super Therm® and Sunshield?",
                a: "Super Therm® is a premium commercial and industrial ceramic coating developed with NASA, containing 4 specific ceramic compounds that block solar heat across the UV, visual light and infrared spectrum. Sunshield is a simpler, cost-effective heat reflective paint for residential and light commercial use that provides good solar reflectance but does not deliver the same level of ceramic heat blocking performance as Super Therm®.",
              },
              {
                q: "Is SP Coatings the same as SPI Coatings?",
                a: "SP Coatings products are manufactured by Superior Products International II, Inc. (SPI), the original manufacturer and owner of all SP Coatings formulations. Our products are genuine SPI products supplied through authorised representatives displaying the SPI Authorised Logo.",
              },
              {
                q: "How do I know if I'm buying genuine SPI products?",
                a: "Genuine SPI COATING PRODUCTS can only be purchased from SPI Authorised Representatives displaying the SPI Authorised Logo on their website. If you are uncertain, contact SP Coatings directly to verify your supplier's authorised status.",
              },
              {
                q: "What is Corrosion Under Insulation (CUI)?",
                a: "CUI is corrosion that occurs on steel pipe and vessel surfaces beneath conventional pipe insulation. Moisture enters under the insulation cladding, creates a trapped humid environment, and accelerates corrosion — often unseen until pipe failure. HPC® Coating prevents CUI by replacing the jacketed insulation system with a monolithic ceramic coating directly applied to the pipe surface, eliminating the hidden space where moisture accumulates.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "20px 25px",
                  marginBottom: "12px",
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1em", marginBottom: "10px" }}>
                  Q: {item.q}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
                  <strong>A:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" style={{ padding: "70px 0", background: "#fff" }}>
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
      <section id="conversions" style={{ padding: "70px 0", background: "#f7f7f7" }}>
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
                    style={{ background: i % 2 === 0 ? "#fff" : "#f0f0f0", borderBottom: "1px solid #e5e5e5" }}
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
            Contact SP Coatings or your local authorised distributor for product documentation and technical support.
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
