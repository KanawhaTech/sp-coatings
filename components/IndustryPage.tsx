import Image from "next/image";
import Link from "next/link";

interface IndustryPageProps {
  name: string;
  description: string;
  longDescription: string;
  challenges: string[];
  solutions: { product: string; benefit: string; href: string }[];
  image: string;
  accentColor?: string;
}

export default function IndustryPage({
  name,
  description,
  longDescription,
  challenges,
  solutions,
  image,
  accentColor = "#CC2026",
}: IndustryPageProps) {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
          color: "#fff",
          padding: "0",
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover", opacity: 0.5 }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="container mx-auto px-4" style={{ position: "relative", zIndex: 1, paddingBottom: "50px" }}>
          <p
            style={{
              color: accentColor,
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            Industry Solutions
          </p>
          <h1
            style={{
              fontSize: "3em",
              fontWeight: "800",
              marginBottom: "15px",
              lineHeight: "1.2",
            }}
          >
            {name}
          </h1>
          <p style={{ fontSize: "1.1em", color: "rgba(255,255,255,0.85)", maxWidth: "600px", lineHeight: "1.6" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Overview */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "20px" }}>
                Industry Overview
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                {longDescription}
              </p>
              <Link href="/contact" className="btn-primary">
                GET A QUOTE
              </Link>
            </div>
            <div>
              <h3 style={{ color: "#CC2026", fontSize: "1.2em", fontWeight: "700", marginBottom: "20px" }}>
                Key Challenges in {name}
              </h3>
              <ul style={{ listStyle: "none" }}>
                {challenges.map((challenge) => (
                  <li
                    key={challenge}
                    style={{
                      padding: "12px 0",
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
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: accentColor,
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      !
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended products */}
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
            Recommended Coatings for {name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.product}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "25px",
                  borderTop: `4px solid ${accentColor}`,
                  transition: "box-shadow 0.3s",
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "10px" }}>
                  {solution.product}
                </h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", marginBottom: "15px" }}>
                  {solution.benefit}
                </p>
                <Link
                  href={solution.href}
                  style={{
                    color: accentColor,
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
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
            Need a Coating Solution for {name}?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px" }}>
            Contact SP Coatings or find an authorised distributor for expert advice on the right coating system.
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
