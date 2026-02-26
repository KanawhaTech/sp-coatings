import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface ProductPageProps {
  name: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  features: Feature[];
  applications: string[];
  specifications?: { label: string; value: string }[];
  image: string;
  accentColor?: string;
  relatedProducts?: { name: string; href: string }[];
}

export default function ProductPage({
  name,
  tagline,
  category,
  description,
  longDescription,
  features,
  applications,
  specifications,
  image,
  accentColor = "#CC2026",
  relatedProducts = [],
}: ProductPageProps) {
  return (
    <div>
      {/* Page Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, #00578e 0%, ${accentColor} 100%)`,
          color: "#fff",
          padding: "70px 0",
        }}
      >
        <div className="container mx-auto px-4">
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            {category}
          </p>
          <h1
            style={{
              fontSize: "2.8em",
              fontWeight: "800",
              marginBottom: "15px",
              lineHeight: "1.2",
            }}
          >
            {name}
          </h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", lineHeight: "1.6" }}>
            {tagline}
          </p>
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                style={{
                  color: "#00578e",
                  fontSize: "1.8em",
                  fontWeight: "800",
                  marginBottom: "20px",
                }}
              >
                Product Overview
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                {description}
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "25px" }}>
                {longDescription}
              </p>
              <Link
                href="/contact"
                style={{
                  background: accentColor,
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  display: "inline-block",
                  marginRight: "15px",
                  transition: "opacity 0.3s",
                }}
              >
                REQUEST QUOTE
              </Link>
              <Link
                href="/distributors"
                style={{
                  background: "#00578e",
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  display: "inline-block",
                  transition: "opacity 0.3s",
                }}
              >
                FIND DISTRIBUTOR
              </Link>
            </div>
            <div>
              <Image
                src={image}
                alt={name}
                width={600}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#00578e",
              fontSize: "1.8em",
              fontWeight: "800",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Key Features &amp; Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  borderTop: `4px solid ${accentColor}`,
                }}
              >
                <h3
                  style={{
                    color: "#00578e",
                    fontWeight: "700",
                    fontSize: "1em",
                    marginBottom: "10px",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                style={{
                  color: "#00578e",
                  fontSize: "1.8em",
                  fontWeight: "800",
                  marginBottom: "25px",
                }}
              >
                Applications
              </h2>
              <ul style={{ listStyle: "none" }}>
                {applications.map((app) => (
                  <li
                    key={app}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #e5e5e5",
                      color: "#555",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: accentColor,
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {specifications && specifications.length > 0 && (
              <div>
                <h2
                  style={{
                    color: "#00578e",
                    fontSize: "1.8em",
                    fontWeight: "800",
                    marginBottom: "25px",
                  }}
                >
                  Technical Specifications
                </h2>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                  }}
                >
                  <tbody>
                    {specifications.map((spec) => (
                      <tr key={spec.label} style={{ borderBottom: "1px solid #e5e5e5" }}>
                        <td
                          style={{
                            padding: "12px 15px 12px 0",
                            color: "#333",
                            fontWeight: "700",
                            width: "45%",
                          }}
                        >
                          {spec.label}
                        </td>
                        <td style={{ padding: "12px 0", color: "#555" }}>
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "60px 0",
          background: accentColor,
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#fff", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Ready to Get Started with {name}?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
            Contact SPI Coatings or find an authorised distributor in your region to learn more about how {name} can solve your coating challenges.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#fff",
                color: accentColor,
                padding: "12px 30px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              CONTACT US
            </Link>
            <Link
              href="/distributors"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "20px",
                border: "2px solid #fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              FIND DISTRIBUTOR
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
          <div className="container mx-auto px-4">
            <h2
              style={{
                color: "#00578e",
                fontSize: "1.5em",
                fontWeight: "800",
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              Related Products
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {relatedProducts.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  style={{
                    background: "#00578e",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "13px",
                    transition: "background 0.3s",
                  }}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
