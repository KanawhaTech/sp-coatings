import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SP Coatings - The World's Coating Innovator™",
  description: "SP Coatings has been designing, formulating and manufacturing the world's most innovative coatings since 1989. Developed with NASA. 37 years of ceramic insulation research.",
};

export default function AboutPage() {
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
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>
            About SP Coatings
          </h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            The World&apos;s Coating Innovator™ — over 37 years of research, innovation and proven performance
          </p>
        </div>
      </div>

      {/* About Overview */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                style={{
                  color: "#CC2026",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                Our Story
              </p>
              <h2
                style={{
                  color: "#00578e",
                  fontSize: "2em",
                  fontWeight: "800",
                  marginBottom: "25px",
                  lineHeight: "1.3",
                }}
              >
                Superior Products International II, Inc.
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                SP Coatings designs, formulates, and manufactures the world&apos;s most innovative coatings and solutions
                that solve major industrial problems. We help reduce energy usage, stop corrosion, give personal
                protection, and so much more.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                Founded in 1989, SP Coatings began its journey with a six-year joint research programme with NASA,
                studying the behaviour of ceramic compounds in thin and thick film applications. That research produced
                groundbreaking insights that led to the development of Super Therm® — still the world&apos;s leading
                ceramic thermal insulation coating today.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                Over 175 years of combined R&D experience with insulation and corrosion protection coatings is embedded
                in our team. Our knowledge of ceramic compound behaviour — which structures function in thin films and
                which are required for thick insulation systems — is unmatched in the industry.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "25px" }}>
                Today, SP Coatings products are used in over 50 countries worldwide, with landmark installations
                including the Hoover Dam, Harry Reid International Airport in Las Vegas, and 10.3 million square
                metres of industrial and commercial facilities in Japan alone.
              </p>
            </div>
            <div>
              <Image
                src="/images/about-spi.jpg"
                alt="SP Coatings Research"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", borderRadius: "4px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NASA Partnership */}
      <section style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/nasa-research.jpg"
                alt="NASA Research Partnership"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "4px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              />
            </div>
            <div>
              <p
                style={{
                  color: "#CC2026",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                Scientific Foundation
              </p>
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "20px" }}>
                Developed with NASA since 1989
              </h2>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                Between 1989 and 1995, SP Coatings worked directly with NASA in a six-year research program led by
                the company&apos;s founder. This program focused on ceramic compound behaviour — identifying which ceramic
                structures function effectively in thin films for radiative heat blocking, and which are required for
                thick insulation systems.
              </p>
              <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", marginBottom: "15px" }}>
                The results of this research produced Super Therm® — a thin-film ceramic coating that achieves
                radiative heat blocking performance that thick-film products simply cannot match. The physics of thin
                vs. thick film ceramic systems are fundamentally different, and this knowledge gap still exists among
                competing manufacturers today.
              </p>
              <p style={{ color: "#00578e", fontWeight: "700", fontSize: "1em", lineHeight: "1.8", marginBottom: "25px" }}>
                Super Therm® was featured in NASA&apos;s 2024 Spinoff Magazine — recognising its continued relevance
                and performance 35 years after its development.
              </p>
              <Link href="/coating-products/super-therm" className="btn-primary">
                LEARN ABOUT SUPER THERM®
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section style={{ padding: "70px 0", background: "#00578e" }}>
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#fff",
              fontSize: "2em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Why Choose SP Coatings?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              fontSize: "1em",
              maxWidth: "600px",
              margin: "0 auto 50px",
            }}
          >
            There is no other manufacturer with 37 years of continuous ceramic insulation research producing coatings
            that perform exactly as claimed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "37 Years of Research",
                description: "Unmatched ceramic insulation research and development track record since 1989, partnering with NASA.",
              },
              {
                title: "Both Thin & Thick Film",
                description: "The only manufacturer who understands and has developed both thin-film and thick-film ceramic systems for different heat control functions.",
              },
              {
                title: "Proven Performance",
                description: "Not marketing claims — independently tested, documented performance across thousands of real-world installations.",
              },
              {
                title: "50+ Countries",
                description: "Products proven in over 50 countries worldwide, in every climate and environment, for over 35 years.",
              },
              {
                title: "EPA ENERGY STAR",
                description: "Products recognised by the US Environmental Protection Agency ENERGY STAR programme for energy-saving performance.",
              },
              {
                title: "Over 175 Years Combined R&D",
                description: "The SPI team brings over 175 years of combined research and development experience in insulation and corrosion protection.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  padding: "25px",
                }}
              >
                <h3 style={{ color: "#f99d22", fontWeight: "700", fontSize: "1.1em", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: "1.7" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "60px 0", background: "#CC2026", textAlign: "center" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#fff", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Ready to Work with the World&apos;s Coating Innovator?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1em", marginBottom: "30px" }}>
            Contact SP Coatings or find an authorised distributor in your region.
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
