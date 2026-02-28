import Link from "next/link";
import type { Metadata } from "next";
import ApprovedAccredited from "@/components/ApprovedAccredited";

export const metadata: Metadata = {
  title: "SPI Global Distributors - SPI Coatings",
  description:
    "Based in Kansas, USA, Superior Products International II, Inc. (SPI Coatings) is a leading developer and manufacturer of technologically advanced, environmentally friendly, energy-efficient coatings.",
};

const videos = [
  {
    title: "History of SPI and Ceramics Thermal Coatings",
    id: "nQ409JfzkwU",
  },
  {
    title: "Thin and Thick Ceramics Thermal Coatings",
    id: "ceZ5ZFVmeXY",
  },
  {
    title: "J.E. demonstrates emissivity and no heat load with Super Therm®",
    id: "7pz7OC6D89g",
  },
  {
    title: "Corrosion Encapsulation with Rust Grip® Explained by inventor J.E. Pritchett",
    id: "gIWq87uotiY",
  },
  {
    title: "Omega Fire Test – 1200°C / 2100°F",
    id: "9It0aieY2WQ",
  },
  {
    title: "Rust Grip® Pemex Drop Test",
    id: "DdvekzWhcNo",
  },
];

export default function DistributorsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>
              Home
            </Link>
            {" › "}
            <span style={{ color: "#888" }}>SPI Global Distributors</span>
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: "40px 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <h1
            style={{
              color: "#00578e",
              fontWeight: "800",
              fontSize: "2em",
              marginBottom: "24px",
            }}
          >
            SPI Global Distributors
          </h1>

          <hr style={{ border: "none", borderTop: "2px solid #CC2026", marginBottom: "24px" }} />

          <h3
            style={{
              color: "#00578e",
              fontWeight: "700",
              fontSize: "1.1em",
              marginBottom: "16px",
            }}
          >
            A worldwide leader in special corrosion encapsulation and heat insulation coatings
          </h3>

          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
            Based in Kansas, USA, Superior Products International II, Inc. (SPI Coatings) is a
            leading developer and manufacturer of technologically advanced, environmentally friendly,
            energy-efficient coatings for a range of industrial, petrochemical, commercial and
            residential applications.
          </p>

          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
            Founded in 1988 by Joseph E. Pritchett, SPI supplies coatings to both domestic and
            international markets, including:
          </p>

          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>Asia:</strong> Japan • China • Taiwan • Korea • Malaysia • Singapore • Indonesia
            • India
          </p>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>Europe:</strong> Italy • Germany • France • Belgium • Netherlands • Turkey •
            Greece • Spain • Russia • Ukraine
          </p>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>Middle East:</strong> Saudi Arabia • UAE • Oman
          </p>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>South America:</strong> Venezuela • Colombia • Brazil • Argentina • Chile
          </p>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>Central America:</strong> Mexico • Panama • Puerto Rico • Costa Rica
          </p>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
            <strong>Africa:</strong> Egypt • Nigeria • Tanzania • South Africa • Angola
          </p>
          <p
            style={{
              color: "#444",
              fontSize: "14px",
              lineHeight: "1.9",
              marginBottom: "24px",
              fontWeight: "700",
            }}
          >
            Australia • New Zealand • Mexico • Canada • U.S.A.
          </p>

          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
            <strong>SPI</strong> Coatings work with many different industries to provide some of the
            world&apos;s major ongoing challenges including oil fields, roofing, heavy industry,
            marine, auto industry, military, aerospace, housing, containers, infrastructures and
            more.
          </p>

          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "30px" }}>
            Thanks to a team of creative and dedicated distributor and dealer network, a commitment
            to comprehensive customer service, and some of the world&apos;s most exceptional
            coatings, SPI continues to outperform the competition more than 20 years later – all
            while thriving in some of the world&apos;s toughest environments.
          </p>

          {/* What Does SPI Do */}
          <h3
            style={{
              color: "#00578e",
              fontWeight: "700",
              fontSize: "1.1em",
              marginBottom: "14px",
            }}
          >
            What Does SPI Do?
          </h3>
          <ul style={{ paddingLeft: "20px", marginBottom: "40px" }}>
            {[
              "Save Energy Usage and Costs – 20% up to 50%",
              "Save Maintenance, Repair and Replacement costs",
              "Reduce or eliminate CUI (Corrosion Under Insulation)",
              "Provide Thermal Protection to all surfaces of any building material – stop heat load",
              "Provide Fire Protection to all surfaces of any building material – up to and beyond 7 hours",
              "Provide Corrosion Protection with a single coat system – replace sandblast and 3 coat systems",
            ].map((item, i) => (
              <li
                key={i}
                style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "4px" }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: "48px" }}>
            {videos.map((video) => (
              <div key={video.id}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    marginBottom: "10px",
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
                <p
                  style={{
                    color: "#555",
                    fontSize: "13px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "50%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1FMg5wS62ww6Mur6u7AWiyMb3HYkklrs&ll=0,0&z=2"
                title="SPI Coatings Distributors Map"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "1px solid #e5e5e5",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ApprovedAccredited />
    </div>
  );
}
