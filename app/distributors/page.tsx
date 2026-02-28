import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPI Global Distributors - Find Your Local Distributor",
  description: "Find authorised SP Coatings distributors in your region. Only purchase from authorised representatives displaying the SPI Authorised Logo.",
};

const regions = [
  {
    name: "North America",
    countries: [
      { name: "United States", contact: "Head Office: Superior Products International II, Inc.", phone: "+1 913-962-4848" },
      { name: "Canada", contact: "Contact head office for Canadian distributor information", phone: "+1 913-962-4848" },
    ],
  },
  {
    name: "Asia Pacific",
    countries: [
      { name: "Australia", contact: "Contact head office for Australian distributor information", phone: "+1 913-962-4848" },
      { name: "Japan", contact: "10.3 million m² applied — multiple authorised distributors", phone: "" },
      { name: "China", contact: "Contact head office for Chinese distributor information", phone: "" },
      { name: "Singapore", contact: "Contact head office for Singapore distributor information", phone: "" },
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "United Kingdom", contact: "Contact head office for UK distributor information", phone: "" },
      { name: "Germany", contact: "Contact head office for German distributor information", phone: "" },
      { name: "Netherlands", contact: "Contact head office for Netherlands distributor information", phone: "" },
    ],
  },
  {
    name: "Middle East & Africa",
    countries: [
      { name: "United Arab Emirates", contact: "Contact head office for UAE distributor information", phone: "" },
      { name: "Saudi Arabia", contact: "Contact head office for Saudi Arabia distributor information", phone: "" },
      { name: "South Africa", contact: "Contact head office for South Africa distributor information", phone: "" },
    ],
  },
  {
    name: "Latin America",
    countries: [
      { name: "Brazil", contact: "Products approved by Petrobras. Contact head office for Brazilian distributor", phone: "" },
      { name: "Other Countries", contact: "Contact head office for Latin American distributor information", phone: "" },
    ],
  },
];

export default function DistributorsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #CC2026 0%, #1a1a1a 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>
            SPI Global Distributors
          </h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            Find your authorised local SP Coatings distributor worldwide.
          </p>
        </div>
      </div>

      {/* Important notice */}
      <div
        style={{
          background: "#f99d22",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <p style={{ color: "#fff", fontWeight: "700", fontSize: "1em" }}>
            ⚠️ IMPORTANT: Genuine SPI COATING PRODUCTS can only be purchased from SPI Authorised Representatives
            displaying the SPI Authorised Logo on their website.
          </p>
        </div>
      </div>

      {/* Become a Distributor */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "20px" }}>
                Find a Distributor in Your Region
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "20px" }}>
                SP Coatings has an established network of authorised distributors worldwide. Our distributors are
                trained in SPI products and can provide technical support, product supply and application guidance
                in your region.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "25px" }}>
                To find the authorised distributor nearest to you, contact SP Coatings directly or use the
                contact form below. Please include your country and region to enable us to connect you with
                the most appropriate distributor.
              </p>
              <Link href="/contact" className="btn-primary" style={{ marginRight: "15px" }}>
                FIND MY DISTRIBUTOR
              </Link>
            </div>
            <div>
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "20px" }}>
                Become an Authorised Distributor
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                Are you interested in distributing SP Coatings products in your region? We are always looking for
                qualified, professional distributors to represent our products worldwide.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "20px" }}>
                As an authorised SPI distributor, you will benefit from:
              </p>
              <ul style={{ listStyle: "none", marginBottom: "25px" }}>
                {[
                  "Access to the world's most innovative coating range",
                  "Comprehensive product training and technical support",
                  "Marketing materials and technical documentation",
                  "Exclusive regional distribution rights (in qualifying territories)",
                  "Ongoing product development updates",
                  "SPI Authorised Distributor accreditation",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    style={{
                      color: "#555",
                      fontSize: "13px",
                      padding: "8px 0",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: "#CC2026", fontWeight: "700" }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                style={{
                  background: "#00578e",
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  display: "inline-block",
                }}
              >
                ENQUIRE ABOUT DISTRIBUTORSHIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Distributors */}
      <section style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Distribution by Region
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div style={{ background: "#00578e", color: "#fff", padding: "15px 20px" }}>
                  <h3 style={{ fontWeight: "700", fontSize: "1.1em" }}>{region.name}</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  {region.countries.map((country) => (
                    <div
                      key={country.name}
                      style={{ marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #e5e5e5" }}
                    >
                      <p style={{ fontWeight: "700", color: "#333", fontSize: "14px", marginBottom: "4px" }}>
                        {country.name}
                      </p>
                      <p style={{ color: "#666", fontSize: "12px", lineHeight: "1.5" }}>{country.contact}</p>
                      {country.phone && (
                        <a
                          href={`tel:${country.phone.replace(/\s/g, "")}`}
                          style={{ color: "#CC2026", fontSize: "12px", fontWeight: "600", textDecoration: "none" }}
                        >
                          {country.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "60px 0", background: "#CC2026", textAlign: "center" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#fff", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Can&apos;t Find a Distributor in Your Country?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px" }}>
            Contact SP Coatings directly. We ship globally and can direct you to the closest authorised representative.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
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
              CONTACT SPI COATINGS
            </Link>
            <a
              href="tel:+19139624848"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "20px",
                border: "2px solid #fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              +1 913-962-4848
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
