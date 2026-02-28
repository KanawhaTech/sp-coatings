import Link from "next/link";

interface SolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  products: { name: string; description: string; href: string }[];
  accentColor?: string;
}

export default function SolutionPage({
  title,
  subtitle,
  description,
  benefits,
  products,
  accentColor = "#CC2026",
}: SolutionPageProps) {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, #1a1a1a 100%)`,
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            Coating Solution
          </p>
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>{title}</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "20px" }}>
                About This Solution
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "25px" }}>
                {description}
              </p>
              <Link href="/contact" className="btn-primary">
                GET A QUOTE
              </Link>
            </div>
            <div>
              <h3 style={{ color: accentColor, fontSize: "1.2em", fontWeight: "700", marginBottom: "20px" }}>
                Key Benefits
              </h3>
              <ul style={{ listStyle: "none" }}>
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #e5e5e5",
                      color: "#555",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: accentColor,
                        fontWeight: "700",
                        fontSize: "16px",
                        flexShrink: 0,
                        marginTop: "-1px",
                      }}
                    >
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
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
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "25px",
                  borderTop: `4px solid ${accentColor}`,
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "10px" }}>
                  {product.name}
                </h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", marginBottom: "15px" }}>
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  style={{ color: accentColor, fontWeight: "700", fontSize: "13px", textDecoration: "none" }}
                >
                  VIEW PRODUCT →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", background: accentColor, textAlign: "center" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#fff", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Ready to Solve Your {title} Challenge?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px" }}>
            Contact SP Coatings for expert advice on the right coating solution for your specific needs.
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
              }}
            >
              FIND DISTRIBUTOR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
