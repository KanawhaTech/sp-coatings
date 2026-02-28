"use client";

export default function ContactSection() {
  return (
    <section style={{ padding: "60px 0", background: "#f5f5f5" }}>
      <div className="container mx-auto px-4">
        <h2
          style={{
            color: "#CC2026",
            fontSize: "1.8em",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Connect and Contact SPI
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: radio selectors */}
          <div>
            <p style={{ color: "#444", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
              Industry:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", marginBottom: "24px" }}>
              {["Industrial", "Commercial", "Energy & Mining", "Marine", "Transportation", "Agriculture", "Other"].map(
                (opt) => (
                  <label
                    key={opt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      color: "#444",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="industry-select"
                      value={opt}
                      defaultChecked={opt === "Industrial"}
                    />
                    {opt}
                  </label>
                )
              )}
            </div>
            <p style={{ color: "#444", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
              How did you find out about us?
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
              {["Google", "Social Media", "Forums", "Referral", "Existing project", "Other"].map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    color: "#444",
                    cursor: "pointer",
                  }}
                >
                  <input type="radio" name="source-select" value={opt} defaultChecked={opt === "Google"} />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <form action="/contact" method="POST">
              <div className="grid grid-cols-2 gap-3" style={{ marginBottom: "12px" }}>
                {[
                  { placeholder: "First Name*", type: "text", name: "firstname" },
                  { placeholder: "Last Name*", type: "text", name: "lastname" },
                  { placeholder: "Company Name", type: "text", name: "company" },
                  { placeholder: "Your Phone*", type: "tel", name: "phone" },
                  { placeholder: "State*", type: "text", name: "state" },
                  { placeholder: "Your Email*", type: "email", name: "email" },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="form-input"
                    style={{ background: "#fff" }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3" style={{ marginBottom: "12px" }}>
                <select name="country" className="form-input" style={{ background: "#fff" }}>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Japan</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={3}
                  className="form-input"
                  style={{ resize: "vertical", background: "#fff" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "#CC2026",
                  color: "#fff",
                  padding: "11px 36px",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  borderRadius: "2px",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
