import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Therm® Solar Heat Reduction Coating - SP Coatings",
  description:
    "Super Therm® is the original ceramics thermal insulation coating developed with NASA. Reduces infrared heat, stops heat load. SRI 105, 367 to 4 BTU reduction. 35+ year lifespan. The world's #1 solar heat blocking ceramic coating.",
};

const accentColor = "#00578e";

export default function SuperThermPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <div
        style={{
          background: `linear-gradient(135deg, #003d66 0%, ${accentColor} 60%, #0077b6 100%)`,
          color: "#fff",
          padding: "80px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/images/super-therm.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div className="container mx-auto px-4" style={{ position: "relative" }}>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            Thermal Insulation Coatings
          </p>
          <h1
            style={{
              fontSize: "clamp(2em, 5vw, 3.2em)",
              fontWeight: "800",
              marginBottom: "15px",
              lineHeight: "1.1",
            }}
          >
            Super Therm®
          </h1>
          <p
            style={{
              fontSize: "1.15em",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "680px",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            The Original Ceramics Thermal Insulation Coating since 1989 — The
            only solar heat reduction coating developed with NASA.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#fff",
                color: accentColor,
                padding: "12px 28px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              REQUEST QUOTE
            </Link>
            <Link
              href="/distributors"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "20px",
                border: "2px solid rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              FIND DISTRIBUTOR
            </Link>
          </div>
        </div>
      </div>

      {/* ── Key Stats Bar ── */}
      <div style={{ background: "#003d66", color: "#fff", padding: "22px 0" }}>
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "0", textAlign: "center" }}
          >
            {[
              { value: "367 → 4 BTU", label: "Total Heat Reduction" },
              { value: "SRI 105", label: "Solar Reflectance Index" },
              { value: "35+ Years", label: "Proven Lifespan" },
              { value: "10.3M m²", label: "Applied in Japan Alone" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 10px",
                  borderRight:
                    i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "800",
                    color: "#5bc8f5",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.65)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Overview ── */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2
                style={{
                  color: accentColor,
                  fontSize: "1.8em",
                  fontWeight: "800",
                  marginBottom: "18px",
                }}
              >
                Super Therm® reduces thermal heat load and energy consumption!
              </h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                  marginBottom: "16px",
                }}
              >
                Reducing the initial thermal heat load is the{" "}
                <strong>&quot;key&quot;</strong> to controlling heat flows.
                Super Therm® is the original ceramics thermal insulation coating
                that reduces infrared heat and stops heat load. It&apos;s the
                only ceramics coating developed with NASA — the most effective,
                proven, durable and long lasting ceramics coating on the market.
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                  marginBottom: "16px",
                }}
              >
                For the best cool roofing options, consider a high solar
                reflectance value, high emissivity and high thermal reduction.
                Super Therm® has the world&apos;s highest total solar heat
                blocking rating — <strong>367 to 4 BTU reduction</strong> — and
                thermal emittance of <strong>0.91</strong>.
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                  marginBottom: "28px",
                }}
              >
                Super Therm® heat blocked <strong>11°C in 90 seconds</strong>{" "}
                to ambient — a 60% temperature benefit. It reflects and reduces
                all three wavelengths of solar radiation: UV, visible light, and
                infrared.
              </p>

              {/* Quick specs card */}
              <div
                style={{
                  background: "#f0f7ff",
                  border: "1px solid #c8dff2",
                  borderRadius: "6px",
                  padding: "20px",
                  marginBottom: "28px",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    color: accentColor,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  At a Glance
                </p>
                <div
                  className="grid grid-cols-2"
                  style={{ gap: "8px", fontSize: "13px" }}
                >
                  {[
                    ["Product Chemistry", "Ceramic & Water Based"],
                    ["Volume Solids", "60%"],
                    ["VOC Level", "67.2 g/L"],
                    ["Dry Time", "30–60 min (tack free)"],
                    ["Full Cure", "2 hrs @ 40% RH"],
                    ["Coat System", "1 Coat"],
                    ["Primer Required", "No"],
                    ["Shelf Life", "3 Years"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <span style={{ color: "#888", fontWeight: "600" }}>
                        {k}:{" "}
                      </span>
                      <span style={{ color: "#333" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    background: accentColor,
                    color: "#fff",
                    padding: "12px 28px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "13px",
                  }}
                >
                  REQUEST QUOTE
                </Link>
                <Link
                  href="/resources"
                  style={{
                    background: "#fff",
                    color: accentColor,
                    padding: "12px 28px",
                    borderRadius: "20px",
                    border: `2px solid ${accentColor}`,
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "13px",
                  }}
                >
                  VIEW RESOURCES
                </Link>
              </div>
            </div>

            <div>
              <Image
                src="/images/super-therm.jpg"
                alt="Super Therm® Solar Heat Reduction Coating"
                width={620}
                height={460}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                  marginBottom: "20px",
                }}
              />
              <Image
                src="/images/super-therm-tsr.jpg"
                alt="Super Therm Total Solar Reflectance"
                width={620}
                height={220}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NASA Development Story ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#f0f7ff",
          borderTop: "1px solid #dde9f4",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/images/nasa-research.jpg"
                alt="Super Therm developed with NASA"
                width={580}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                }}
              />
            </div>
            <div>
              <p
                style={{
                  color: accentColor,
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                NASA Development
              </p>
              <h2
                style={{
                  color: "#003d66",
                  fontSize: "1.8em",
                  fontWeight: "800",
                  marginBottom: "18px",
                  lineHeight: "1.25",
                }}
              >
                Our special ceramics formula developed with NASA
              </h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                  marginBottom: "16px",
                }}
              >
                Super Therm® was developed as a ceramics solar heat thermal
                coating. In collaboration with{" "}
                <strong>NASA&apos;s Marshall Space Center</strong>, J.E.
                Pritchett created a water-based coating composed of four ceramic
                compounds embedded in a foundation of four resins.{" "}
                <strong>Super Therm® wasn&apos;t a spin-off coating — it&apos;s the Real Deal!</strong>
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                  marginBottom: "16px",
                }}
              >
                Creation and progress of Super Therm® was achieved at NASA when
                trying to develop a heat shield for space shuttles that resisted
                extreme heat fluctuations. After{" "}
                <strong>2 years of testing more than 4,000 different ceramic components</strong>
                , 3 ceramics with the greatest ability of radiation reflection
                and the smallest heat conductivity were ultimately selected.
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1em",
                  lineHeight: "1.85",
                }}
              >
                The ceramics used in Super Therm® do not conduct heat. After
                testing up to 100°C the performance remained the same. A fourth
                ceramic membrane was added applying knowledge from the space
                environment — creating a unique ceramic solar heat reduction
                coating for civil usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Science: 4 Ceramics ── */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <p
            style={{
              color: accentColor,
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            21st Century Science
          </p>
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            How Super Therm® Works — The 4 Ceramics
          </h2>
          <p
            style={{
              color: "#666",
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 50px",
              lineHeight: "1.7",
            }}
          >
            Super Therm® contains 4 specific ceramics that work together unlike
            any other product on the market. Each ceramic targets a different
            wavelength of solar radiation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "UV Ceramic",
                subtitle: "Ultraviolet Radiation",
                desc: "Micron-sized ceramic that reflects ultraviolet (UV) radiation — the shortest and most energetic solar wavelength. Prevents UV degradation of the substrate and reduces surface heating.",
                color: "#7c3aed",
              },
              {
                num: "02",
                title: "Visual Light Ceramic",
                subtitle: "Short Wave Radiation",
                desc: "Second micron-sized ceramic reflective for visible light (short wave radiation). Works in concert with the UV ceramic to reflect the majority of solar energy back before it loads the surface.",
                color: "#0077b6",
              },
              {
                num: "03",
                title: "Infrared Ceramic",
                subtitle: "Long Wave Radiation",
                desc: "The third ceramic specifically targets and reduces infrared solar heat energy (long wave radiation) — the primary driver of surface temperature. This is what sets Super Therm® apart from all reflective paints.",
                color: "#d97706",
              },
              {
                num: "04",
                title: "Emissivity Ceramic",
                subtitle: "Non-Conductor",
                desc: "The fourth ceramic acts as a non-conductor for emissivity, stopping the solar heat load from penetrating the coating. Creates a genuine thermal break. Emissivity: 0.91.",
                color: "#059669",
              },
            ].map((c) => (
              <div
                key={c.num}
                style={{
                  border: "1px solid #e5e5e5",
                  borderTop: `4px solid ${c.color}`,
                  borderRadius: "6px",
                  padding: "28px 22px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: "2em",
                    fontWeight: "900",
                    color: c.color,
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {c.num}
                </div>
                <h3
                  style={{
                    color: "#003d66",
                    fontWeight: "800",
                    fontSize: "1em",
                    marginBottom: "4px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: c.color,
                    fontSize: "11px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  {c.subtitle}
                </p>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#003d66",
              color: "#fff",
              borderRadius: "6px",
              padding: "28px 35px",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.05em", lineHeight: "1.7" }}>
              The basic principles of Super Therm® solar heat reduction:{" "}
              <strong>high-performance thermal reflection</strong> +{" "}
              <strong>low absorptive emissivity</strong> +{" "}
              <strong>high radiative emissivity</strong> +{" "}
              <strong>conductive resistance</strong> = the incredible thermal
              solar heat reduction of Super Therm®.
            </p>
            <p
              style={{
                marginTop: "14px",
                color: "#5bc8f5",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Solar Absorption: 0.039 &nbsp;|&nbsp; Emissivity: 0.91
              &nbsp;|&nbsp; SRI: 105
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#f7f7f7",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Key Features &amp; Benefits
          </h2>
          <p
            style={{
              color: "#666",
              textAlign: "center",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: "1.7",
            }}
          >
            You will not find another product that can genuinely verify that it
            repels solar radiated heat, reflects convective heat and resists
            conducted heat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Highest Total Solar Heat Reduction",
                desc: "367 down to 3.99 BTU reduction — the world's highest total solar heat blocking rating for a ceramics coating. Reflects UV, visual light and infrared radiation.",
              },
              {
                title: "Developed with NASA",
                desc: "The only ceramics solar heat reduction coating developed directly with NASA's Marshall Space Center. Independently verified. Not a spin-off — the real deal.",
              },
              {
                title: "Class A Fire Rating",
                desc: "Classified as highest Class A with zero flame spread across all three samples in flammability tests at NASA, FM Approvals ASTM E108, ABS Fire Resistive Rating, and Australian laboratories.",
              },
              {
                title: "35+ Year Proven Lifespan",
                desc: "Proven performance over 35+ years of real-world installations globally. Ongoing 30-year USA test confirms durability. Does not lose effectiveness even when dirty.",
              },
              {
                title: "50–68% Sound Reduction",
                desc: "Acoustics rated at 50–68% sound reduction. Super Therm® provides significant noise dampening in addition to thermal insulation — ideal for transport and industrial buildings.",
              },
              {
                title: "Single Coat Application",
                desc: "One coat wet 425µm applied by airless spray, brush or roller. No primer required on most substrates. 54% solids by volume means no need for multiple applications.",
              },
              {
                title: "Works Even When Dirty",
                desc: "Reflective white paints reduce reflectivity by 30% within 1.5 years when dirty. Super Therm® maintains its heat reduction performance regardless of surface dirt accumulation.",
              },
              {
                title: "Condensation Control",
                desc: "The permeability rating of 8.8 allows the coating to breathe air but not allow moisture to enter — preventing condensation, mould and mildew, and corrosion under insulation.",
              },
              {
                title: "USDA Approved",
                desc: "Accepted by the USDA as a non-toxic coating for food sanitation. Safe for use in food factories, dairy facilities, and stockbreeding buildings. Zero off-gassing.",
              },
              {
                title: "Energy Star, LEED & CRRC Rated",
                desc: "Recognised by the EPA for reducing energy consumption. Energy Star, LEED and CRRC rated. Supports Net Zero Emissions targets and reduces the Urban Heat Island effect.",
              },
              {
                title: "Moisture & Water Barrier",
                desc: "Passed 80 km/h wind-driven rain testing. Forms a moisture reduction barrier to stop moisture migration, preventing substrate corrosion from humid air or rain.",
              },
              {
                title: "FM Approved & UL Approved",
                desc: "FM Approvals ASTM E108 and UL Approved — the highest fire, safety and performance certifications available in the coatings industry.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "6px",
                  border: "1px solid #e5e5e5",
                  borderTop: `4px solid ${accentColor}`,
                }}
              >
                <h3
                  style={{
                    color: "#003d66",
                    fontWeight: "700",
                    fontSize: "0.95em",
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Data ── */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p
                style={{
                  color: accentColor,
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                Proven Results
              </p>
              <h2
                style={{
                  color: "#003d66",
                  fontSize: "1.8em",
                  fontWeight: "800",
                  marginBottom: "18px",
                }}
              >
                Used by Multi-national Organisations &amp; Governments
              </h2>
              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  marginBottom: "16px",
                  fontSize: "1em",
                }}
              >
                Super Therm® has been thoroughly tested and proven. It has been
                used by many multi-national organisations and governments which
                have applied millions of m² around the world since it was first
                released in 1989.
              </p>
              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  fontSize: "1em",
                }}
              >
                Super Therm® greatly reduces roof temperature, improves the work
                environment and increases the efficiency of air conditioning. In
                cool environments it also keeps heat inside in winter — reducing
                energy consumption throughout the year.
              </p>

              {/* Sony Koda Case Study */}
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    background: "#003d66",
                    padding: "14px 20px",
                    color: "#fff",
                  }}
                >
                  <h3 style={{ fontWeight: "700", fontSize: "1em", margin: 0 }}>
                    Sony Koda — Large Reduction in Energy Costs
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.65)",
                      marginTop: "3px",
                    }}
                  >
                    Source: Daiko Shokai, Japan
                  </p>
                </div>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "13px",
                  }}
                >
                  <thead>
                    <tr style={{ background: "#f0f7ff" }}>
                      <th
                        style={{
                          padding: "10px 16px",
                          textAlign: "left",
                          color: "#555",
                          fontWeight: "700",
                          borderBottom: "1px solid #e5e5e5",
                        }}
                      >
                        Application
                      </th>
                      <th
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#555",
                          fontWeight: "700",
                          borderBottom: "1px solid #e5e5e5",
                        }}
                      >
                        May
                      </th>
                      <th
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#555",
                          fontWeight: "700",
                          borderBottom: "1px solid #e5e5e5",
                        }}
                      >
                        June
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td style={{ padding: "10px 16px", color: "#333" }}>
                        Before Super Therm®
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#c0392b",
                          fontWeight: "600",
                        }}
                      >
                        3,767 KW
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#c0392b",
                          fontWeight: "600",
                        }}
                      >
                        5,647 KW
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td style={{ padding: "10px 16px", color: "#333" }}>
                        After Super Therm®
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#27ae60",
                          fontWeight: "600",
                        }}
                      >
                        519 KW
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          color: "#27ae60",
                          fontWeight: "600",
                        }}
                      >
                        1,896 KW
                      </td>
                    </tr>
                    <tr style={{ background: "#f0f7ff" }}>
                      <td
                        style={{
                          padding: "10px 16px",
                          fontWeight: "800",
                          color: "#003d66",
                        }}
                      >
                        TOTAL KW REDUCTION
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          fontWeight: "800",
                          color: "#003d66",
                          fontSize: "1.1em",
                        }}
                      >
                        87%
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "center",
                          fontWeight: "800",
                          color: "#003d66",
                          fontSize: "1.1em",
                        }}
                      >
                        67%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Nissan Factory highlight */}
              <div
                style={{
                  background: "#f0f7ff",
                  border: "1px solid #c8dff2",
                  borderRadius: "6px",
                  padding: "16px 20px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <strong style={{ color: accentColor }}>
                  Nissan Factory — Yokohama, Japan:
                </strong>{" "}
                165,000 m² of Super Therm® applied. Reported cooler roof
                temperatures and improved production environment across the
                entire facility.
              </div>
            </div>

            <div>
              <Image
                src="/images/nissan-factory.jpg"
                alt="Nissan Factory Yokohama Japan with Super Therm"
                width={580}
                height={380}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  marginBottom: "20px",
                }}
              />
              <Image
                src="/images/corporations-super-therm.jpg"
                alt="Multi-national corporations using Super Therm"
                width={580}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#f7f7f7",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Stop the Heat — Applications
          </h2>
          <p
            style={{
              color: "#666",
              textAlign: "center",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: "1.7",
            }}
          >
            Super Therm® is applied globally across virtually every industry and
            building type wherever solar heat management, energy reduction and
            long-term coating durability are required.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Aged Care Facilities",
              "Airports",
              "Aircraft Hangars",
              "Agriculture",
              "Architectural Buildings",
              "Car Sales Showrooms",
              "Council Buildings",
              "Data Centres",
              "Distribution Centres",
              "Education / Schools",
              "Factories & Manufacturing",
              "Homes & Houses",
              "Hospitals",
              "Leisure Centres",
              "Military Facilities",
              "Offices",
              "Plant Rooms",
              "Shipping Containers",
              "Shopping Centres",
              "Sporting Clubs",
              "Storage Units",
              "Supermarkets",
              "Transportation (Bus, Train, Truck)",
              "Warehouses",
              "Wineries",
              "Workshops",
              "Commercial & Industrial Roofing",
              "Cold & Cool Storage",
              "Marine Vessels",
              "Pipelines & Storage Tanks",
            ].map((app) => (
              <div
                key={app}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "12px 16px",
                  fontSize: "13px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: accentColor,
                    flexShrink: 0,
                  }}
                />
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specifications ── */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "44px",
            }}
          >
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3
                style={{
                  color: accentColor,
                  fontWeight: "700",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px",
                }}
              >
                Performance Data
              </h3>
              <table
                style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}
              >
                <tbody>
                  {[
                    ["Total Solar Heat Reduction", "Extremely High"],
                    ["Total BTU Reduction", "367 to 4 BTU"],
                    ["Solar Reflectance Index (SRI)", "105"],
                    ["Solar Absorption", "0.039"],
                    ["Emissivity", "0.91"],
                    ["Acoustics Rated", "50–68% Sound Reduction"],
                    ["Condensation Control", "Yes"],
                    ["Fire Rating", 'Class "A" by NASA'],
                    ["FM Approved", "Yes (ASTM E108)"],
                    ["UL Approved", "Yes"],
                    ["EPA Cool Roof Support", "Yes"],
                    ["Energy Star / LEED / CRRC", "Yes"],
                    ["USDA Approved", "Yes (food/potable water)"],
                    ["NASA Development", "Yes"],
                    ["ISO Current", "Yes"],
                    ["Year Developed", "1989"],
                    ["Used in Australia Since", "1995"],
                    ["Manufactured", "Kansas, USA"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td
                        style={{
                          padding: "10px 12px 10px 0",
                          color: "#333",
                          fontWeight: "600",
                          width: "55%",
                        }}
                      >
                        {label}
                      </td>
                      <td style={{ padding: "10px 0", color: "#555" }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3
                style={{
                  color: accentColor,
                  fontWeight: "700",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px",
                }}
              >
                Application &amp; Product Data
              </h3>
              <table
                style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}
              >
                <tbody>
                  {[
                    ["Product Chemistry", "Ceramic & Water Based"],
                    ["Colour", "Egg Shell White (Tintable)"],
                    ["Texture", "Silky Matt"],
                    ["% by Solids (Weight)", "70%"],
                    ["% by Volume", "54%"],
                    ["Volume Solids", "60%"],
                    ["Litres to Weight Ratio", "1.53 – very high"],
                    ["Wet Film Thickness", "425µm"],
                    ["Dry Film Thickness", "250µm"],
                    ["Spread Rate per Litre", "2.3 m² @ 425µ wet"],
                    ["Spread Rate per Gallon", "8.9 m² / 96.2 ft²"],
                    ["Coat System", "1 Coat"],
                    ["Primer Required", "No (most substrates)"],
                    ["Application Method", "Airless, Brush, Roller"],
                    ["Min. Surface Temp. (Application)", "5°C"],
                    ["Max. Surface Temp. (Application)", "65°C"],
                    ["Dry Time (at 21°C)", "30–60 min to tack free"],
                    ["Full Cure", "2 hours at 40% rel. humidity"],
                    ["VOC Level", "67.2 g/L (0.561 gal/lbs)"],
                    ["Low VOC (g/L)", "67"],
                    ["Perm Rating", "8.8"],
                    ["Binding", "Urethanes & Acrylic"],
                    ["Formulation", "4 Micron sized ceramics"],
                    ["Expected Lifespan", "30+ Years"],
                    ["Shelf Life", "3 Years"],
                    ["Maintenance Program Required", "No"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td
                        style={{
                          padding: "10px 12px 10px 0",
                          color: "#333",
                          fontWeight: "600",
                          width: "55%",
                        }}
                      >
                        {label}
                      </td>
                      <td style={{ padding: "10px 0", color: "#555" }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Spread Rate Table */}
          <div style={{ marginTop: "50px" }}>
            <h3
              style={{
                color: accentColor,
                fontWeight: "700",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "16px",
              }}
            >
              Spread Rate Summary
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13px",
                  minWidth: "600px",
                }}
              >
                <thead>
                  <tr style={{ background: "#003d66", color: "#fff" }}>
                    {[
                      "Product",
                      "% Solids by Volume",
                      "Microns DFT",
                      "mm DFT",
                      "Mils DFT",
                      "Spread m²/litre",
                      "Spread m²/gal",
                      "Spread ft²/gal",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 14px",
                          textAlign: "left",
                          fontWeight: "700",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "#f0f7ff" }}>
                    <td
                      style={{
                        padding: "10px 14px",
                        fontWeight: "700",
                        color: "#003d66",
                      }}
                    >
                      Super Therm®
                    </td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>60.0</td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>250</td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>0.25</td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>10</td>
                    <td
                      style={{
                        padding: "10px 14px",
                        color: "#003d66",
                        fontWeight: "700",
                      }}
                    >
                      2.3
                    </td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>8.9</td>
                    <td style={{ padding: "10px 14px", color: "#555" }}>96.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety & Environmental ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#f0f7ff",
          borderTop: "1px solid #dde9f4",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Safety &amp; Environmental
          </h2>
          <p
            style={{
              color: "#666",
              textAlign: "center",
              maxWidth: "680px",
              margin: "0 auto 44px",
              lineHeight: "1.7",
            }}
          >
            Super Therm® is an environmentally friendly, safe and advanced
            scientific formulated ceramics solar heat reduction coating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Harmlessness — USDA Approved",
                body: 'Super Therm® is accepted by the USDA as a non-toxic coating in terms of food sanitation. It can be used in food factories, dairy factories, and on the interiors of stockbreeding buildings. Classified highest class "K" with zero off-gassing in NASA\'s flammability test.',
                icon: "🛡️",
              },
              {
                title: "Non-Toxic & Non-Flammable",
                body: "Super Therm® does not emit any toxic gases in fire. Japanese Railway Rollingstock and Machinery Association tests (8-135K) confirm it is nonflammable. Rated Class A at NASA, FM Approvals ASTM E108, ABS Fire Resistive Rating, and Australian laboratories.",
                icon: "🔬",
              },
              {
                title: "Net Zero & Environmental",
                body: "The EPA has recognised the environmental benefits of cool surfaces for reducing energy consumption and pollution. Super Therm® reduces the Urban Heat Island effect. It is Energy Star, LEED and CRRC rated — supporting your Net Zero Emissions targets.",
                icon: "🌿",
              },
            ].map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  border: "1px solid #c8dff2",
                  borderRadius: "6px",
                  padding: "30px 26px",
                }}
              >
                <div style={{ fontSize: "2em", marginBottom: "14px" }}>
                  {s.icon}
                </div>
                <h3
                  style={{
                    color: "#003d66",
                    fontWeight: "800",
                    fontSize: "1em",
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.75" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section
        style={{
          padding: "50px 0",
          background: "#fff",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div className="container mx-auto px-4">
          <p
            style={{
              color: "#888",
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Approved &amp; Accredited
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[
              {
                src: "/images/accreditation-nasa.png",
                alt: "NASA Developed & Approved",
              },
              {
                src: "/images/accreditation-fm.png",
                alt: "FM Approved",
              },
              {
                src: "/images/accreditation-ul.png",
                alt: "UL Approved",
              },
              {
                src: "/images/accreditation-energy-star.png",
                alt: "Energy Star",
              },
              {
                src: "/images/accreditation-jisc.png",
                alt: "JIS Certified",
              },
            ].map((a) => (
              <Image
                key={a.src}
                src={a.src}
                alt={a.alt}
                width={120}
                height={70}
                style={{
                  height: "55px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(30%)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#f7f7f7",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Super Therm® in Action
          </h2>
          <p
            style={{
              color: "#666",
              textAlign: "center",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: "1.7",
            }}
          >
            See how Super Therm® performs in real-world applications around the
            globe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                videoId: "sddefault",
                title: "How does Super Therm® Insulation Coating Work?",
                desc: "A detailed explanation of the science and ceramics behind Super Therm® and how it blocks solar heat.",
              },
              {
                videoId: "sddefault",
                title: "Super Therm® — Real World Results",
                desc: "Case studies from Japan, the USA, Australia and beyond demonstrating measurable energy savings.",
              },
            ].map((v, i) => (
              <div key={i}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    borderRadius: "6px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    background: "#000",
                    marginBottom: "16px",
                  }}
                >
                  <Image
                    src={`/images/${v.videoId}.jpg`}
                    alt={v.title}
                    fill
                    style={{ objectFit: "cover", opacity: 0.8 }}
                  />
                  <a
                    href="https://www.youtube.com/@SPICoatings"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.75)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <h3
                  style={{
                    color: "#003d66",
                    fontWeight: "700",
                    fontSize: "1em",
                    marginBottom: "6px",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.65" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a
              href="https://www.youtube.com/@SPICoatings"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#c00",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "13px",
                display: "inline-block",
              }}
            >
              VIEW MORE VIDEOS ON YOUTUBE
            </a>
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "44px",
            }}
          >
            Super Therm® Resources &amp; Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Product Documents",
                desc: "Full product documentation including safety data sheets, formulation details and application guidelines.",
                href: "https://www.spicoatings.com/wp-content/uploads/2021/08/Super-Therm-Product-Documents-01-31-20.pdf",
                label: "DOWNLOAD PDF",
              },
              {
                title: "Testing & Results",
                desc: "Independent laboratory test results from Japan, Russia and USA. Florida Energy Office verification. NASA test results.",
                href: "https://spicoatings.com/super-therm-testing-and-results/",
                label: "VIEW RESULTS",
              },
              {
                title: "Super Therm® & NASA",
                desc: "Full documentation of the NASA collaboration, Marshall Space Center testing and development history since 1989.",
                href: "https://spicoatings.com/coating-products/super-therm-solar-heat-block-coating/super-therm-ceramic-coating-developed-with-nasa/",
                label: "READ MORE",
              },
              {
                title: "Spread Rate Calculator",
                desc: "Calculate how many litres or pails you need for your project based on area and surface profile.",
                href: "https://spicoatings.com/coating-products/super-therm-solar-heat-block-coating/#calculator",
                label: "USE CALCULATOR",
              },
              {
                title: "Application Instructions",
                desc: "Detailed surface preparation, application method, equipment setup and quality control guidelines for Super Therm®.",
                href: "https://spicoatings.com/coating-products/super-therm-solar-heat-block-coating/super-therm-application-instructions/",
                label: "VIEW GUIDE",
              },
              {
                title: "Colour Tinting Guide",
                desc: "Super Therm® is tintable. View the full colour tinting chart and understand performance considerations when tinting.",
                href: "https://spicoatings.com/coating-products/super-therm-solar-heat-block-coating/super-therm-colour-tinting-chart/",
                label: "VIEW TINTING GUIDE",
              },
            ].map((r) => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "6px",
                    padding: "24px",
                    height: "100%",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    background: "#fff",
                  }}
                >
                  <h3
                    style={{
                      color: "#003d66",
                      fontWeight: "700",
                      fontSize: "1em",
                      marginBottom: "10px",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    {r.desc}
                  </p>
                  <span
                    style={{
                      color: accentColor,
                      fontSize: "12px",
                      fontWeight: "700",
                      textTransform: "uppercase" as const,
                      letterSpacing: "1px",
                    }}
                  >
                    {r.label} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 Key Benefits ── */}
      <section
        style={{
          padding: "70px 0",
          background: "#003d66",
          color: "#fff",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              fontSize: "1.8em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "44px",
            }}
          >
            5 Key Benefits of High Performance Super Therm®
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              {
                num: "1",
                text: "Reduce your energy costs — clients showing ROI within 3 years.",
              },
              {
                num: "2",
                text: "World's leading solar heat reduction coating — tested and reduces solar heat load.",
              },
              {
                num: "3",
                text: "Proven to last over 35 years — ongoing USA field test confirms performance.",
              },
              {
                num: "4",
                text: "Prevents thermal shock, protecting assets — reduces fuel consumption and running costs.",
              },
              {
                num: "5",
                text: "Environmentally friendly, safe, easy water-based application — USDA approved.",
              },
            ].map((b) => (
              <div
                key={b.num}
                style={{
                  textAlign: "center",
                  padding: "20px 16px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#5bc8f5",
                    color: "#003d66",
                    fontWeight: "900",
                    fontSize: "1.4em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  {b.num}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "60px 0",
          background: accentColor,
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#fff",
              fontSize: "1.8em",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Ready to Get Started with Super Therm®?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1em",
              maxWidth: "600px",
              margin: "0 auto 30px",
              lineHeight: "1.6",
            }}
          >
            Contact SP Coatings or find an authorised distributor in your region
            to learn more about how Super Therm® can solve your heat management
            and energy reduction challenges.
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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

      {/* ── Related Products ── */}
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2
            style={{
              color: "#003d66",
              fontSize: "1.5em",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            Related Products
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {[
              { name: "Sunshield", href: "/coating-products/sunshield" },
              { name: "Rust Grip®", href: "/coating-products/rust-grip" },
              { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
              { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
              {
                name: "SP Liquid Membrane®",
                href: "/coating-products/sp-liquid-membrane",
              },
              { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                style={{
                  background: accentColor,
                  color: "#fff",
                  padding: "10px 22px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
