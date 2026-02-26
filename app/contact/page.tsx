import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SPI Coatings - Get in Touch",
  description: "Contact SPI Coatings for product information, technical support, distributor enquiries or to request a quote.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #00578e 0%, #CC2026 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>Contact SPI Coatings</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            Get in touch with our team for product information, technical support, distributor enquiries or to request a quote.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <section style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 style={{ color: "#00578e", fontSize: "1.5em", fontWeight: "800", marginBottom: "25px" }}>
                Get In Touch
              </h2>

              <div style={{ marginBottom: "25px" }}>
                <h3 style={{ color: "#CC2026", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Head Office
                </h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  Superior Products International II, Inc.<br />
                  10835 W 78th St<br />
                  Shawnee, Kansas 66214<br />
                  USA
                </p>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <h3 style={{ color: "#CC2026", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Phone
                </h3>
                <a
                  href="tel:+19139624848"
                  style={{ color: "#00578e", fontWeight: "700", fontSize: "1.2em", textDecoration: "none" }}
                >
                  +1 913-962-4848
                </a>
              </div>

              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ color: "#CC2026", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Connect With Us
                </h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="https://www.linkedin.com/company/spi-coatings"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#CC2026",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    in
                  </a>
                  <a
                    href="https://www.youtube.com/user/spicoatings"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#CC2026",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "12px",
                    }}
                  >
                    ▶
                  </a>
                </div>
              </div>

              {/* Contact reasons */}
              <div
                style={{
                  background: "#00578e",
                  color: "#fff",
                  padding: "25px",
                  borderRadius: "4px",
                }}
              >
                <h3 style={{ fontWeight: "700", fontSize: "1em", marginBottom: "15px" }}>
                  We Can Help With:
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {[
                    "Product technical information",
                    "Application specifications",
                    "Project quotations",
                    "Finding a local distributor",
                    "Technical support",
                    "Becoming an authorised distributor",
                    "Training and certification",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "13px",
                        padding: "6px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#f99d22" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2"
              style={{
                background: "#fff",
                borderRadius: "4px",
                padding: "40px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ color: "#00578e", fontWeight: "800", fontSize: "1.5em", marginBottom: "25px" }}>
                Send Us a Message
              </h2>
              <form action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                        outline: "none",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                        outline: "none",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                        outline: "none",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    Country *
                  </label>
                  <select
                    name="country"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                      outline: "none",
                      borderRadius: "2px",
                      background: "#fff",
                    }}
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="AU">Australia</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="JP">Japan</option>
                    <option value="CN">China</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="BR">Brazil</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="SG">Singapore</option>
                    <option value="ZA">South Africa</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    Industry
                  </label>
                  <select
                    name="industry"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                      outline: "none",
                      borderRadius: "2px",
                      background: "#fff",
                    }}
                  >
                    <option value="">Select Industry</option>
                    <option>Industrial</option>
                    <option>Commercial</option>
                    <option>Energy &amp; Mining</option>
                    <option>Marine</option>
                    <option>Transportation</option>
                    <option>Agriculture</option>
                    <option>Defence &amp; Military</option>
                    <option>Construction</option>
                    <option>Residential</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    How did you find out about us?
                  </label>
                  <select
                    name="source"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                      outline: "none",
                      borderRadius: "2px",
                      background: "#fff",
                    }}
                  >
                    <option value="">Select</option>
                    <option>Google</option>
                    <option>Social Media</option>
                    <option>Forums</option>
                    <option>Referral</option>
                    <option>Existing project</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label style={{ display: "block", color: "#333", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your coating challenge or project..."
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                      outline: "none",
                      borderRadius: "2px",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#CC2026",
                    color: "#fff",
                    padding: "14px 40px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "15px",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "background 0.3s",
                    width: "100%",
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
