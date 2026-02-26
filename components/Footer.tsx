"use client";

import Link from "next/link";
import Image from "next/image";
import {
  footerProductLinks,
  footerSolutionLinks,
  footerIndustryLinks,
  footerAboutLinks,
} from "@/lib/data/navigation";

const footerColumnTitle = (title: string) => (
  <h4
    style={{
      color: "#fff",
      fontWeight: "700",
      fontSize: "14px",
      textTransform: "uppercase",
      marginBottom: "15px",
      paddingBottom: "10px",
      borderBottom: "2px solid #CC2026",
    }}
  >
    {title}
  </h4>
);

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: "#1a1a1a", color: "#ccc", padding: "50px 0 30px" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Column 1 — About */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <Image
                  src="/images/header-logo.png"
                  alt="SPI Coatings"
                  width={160}
                  height={55}
                  style={{ filter: "brightness(0) invert(1)", height: "auto" }}
                />
              </div>
              <p style={{ fontSize: "13px", lineHeight: "22px", color: "#aaa" }}>
                Superior Products International II, Inc.
              </p>
              <p style={{ fontSize: "13px", lineHeight: "22px", color: "#aaa", marginTop: "8px" }}>
                10835 W 78th St,<br />
                Shawnee, Kansas 66214, USA
              </p>
              <p style={{ fontSize: "13px", lineHeight: "22px", color: "#aaa", marginTop: "8px" }}>
                <a href="tel:+19139624848" style={{ color: "#f99d22", textDecoration: "none", fontWeight: "600" }}>
                  +1 913-962-4848
                </a>
              </p>
              {/* Social links */}
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <a
                  href="https://www.linkedin.com/company/spi-coatings"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", textDecoration: "none" }}
                  aria-label="LinkedIn"
                >
                  <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path d="M10.5 12.5H8V21.5H10.5V12.5ZM9.25 11.5C10.08 11.5 10.75 10.83 10.75 10C10.75 9.17 10.08 8.5 9.25 8.5C8.42 8.5 7.75 9.17 7.75 10C7.75 10.83 8.42 11.5 9.25 11.5ZM22 21.5H19.5V17.1C19.5 16.18 19.48 15 18.23 15C16.96 15 16.75 15.99 16.75 17.03V21.5H14.25V12.5H16.65V13.57H16.68C17.02 12.92 17.85 12.23 19.1 12.23C21.63 12.23 22 13.87 22 16.02V21.5Z" fill="#0077B5"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@spicoatings"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", textDecoration: "none" }}
                  aria-label="YouTube"
                >
                  <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path d="M22.8 11.6C22.6 10.8 21.9 10.2 21.1 10C19.7 9.7 15 9.7 15 9.7C15 9.7 10.3 9.7 8.9 10C8.1 10.2 7.4 10.9 7.2 11.6C7 13 7 15 7 15C7 15 7 17 7.2 18.4C7.4 19.2 8.1 19.8 8.9 20C10.3 20.3 15 20.3 15 20.3C15 20.3 19.7 20.3 21.1 20C21.9 19.8 22.6 19.1 22.8 18.4C23 17 23 15 23 15C23 15 23 13 22.8 11.6ZM13.3 17.5V12.5L17.7 15L13.3 17.5Z" fill="#FF0000"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Products */}
            <div>
              {footerColumnTitle("Our Products")}
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {footerProductLinks.map((item) => (
                  <li key={item.name} style={{ marginBottom: "5px" }}>
                    <Link href={item.href} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Solutions & Industries */}
            <div>
              {footerColumnTitle("Solutions")}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, marginBottom: "25px" }}>
                {footerSolutionLinks.map((item) => (
                  <li key={item.name} style={{ marginBottom: "5px" }}>
                    <Link href={item.href} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {footerColumnTitle("Industries")}
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {footerIndustryLinks.map((item) => (
                  <li key={item.name} style={{ marginBottom: "5px" }}>
                    <Link href={item.href} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — About SPI + Subscribe */}
            <div>
              {footerColumnTitle("About SPI Coatings")}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, marginBottom: "25px" }}>
                {footerAboutLinks.map((item) => (
                  <li key={item.name} style={{ marginBottom: "5px" }}>
                    <Link href={item.href} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {footerColumnTitle("Subscribe and Stay in Touch!")}
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { placeholder: "First Name", type: "text", name: "sub_firstname" },
                  { placeholder: "Last Name", type: "text", name: "sub_lastname" },
                  { placeholder: "Email*", type: "email", name: "sub_email" },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    style={{
                      padding: "9px 13px",
                      background: "#2a2a2a",
                      border: "1px solid #444",
                      color: "#fff",
                      fontSize: "12px",
                      outline: "none",
                      borderRadius: "3px",
                      fontFamily: "Montserrat, sans-serif",
                      width: "100%",
                      transition: "border-color 0.2s",
                    }}
                  />
                ))}
                <select
                  name="sub_country"
                  style={{
                    padding: "9px 13px",
                    background: "#2a2a2a",
                    border: "1px solid #444",
                    color: "#aaa",
                    fontSize: "12px",
                    outline: "none",
                    borderRadius: "3px",
                    fontFamily: "Montserrat, sans-serif",
                    width: "100%",
                  }}
                >
                  <option value="">Country</option>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Japan</option>
                  <option>Germany</option>
                  <option>China</option>
                  <option>Brazil</option>
                  <option>Other</option>
                </select>
                <button
                  type="submit"
                  style={{
                    background: "#CC2026",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "13px",
                    borderRadius: "3px",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.5px",
                    marginTop: "2px",
                    transition: "background 0.2s",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        style={{
          background: "#111",
          color: "#888",
          padding: "15px 0",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div className="container mx-auto px-4">
          <p>
            ©1989-2025 All Rights Reserved | Superior Products International II, Inc. |{" "}
            <Link href="/privacy" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link> |{" "}
            <Link href="/disclaimer" style={{ color: "#888", textDecoration: "none" }}>Disclaimer</Link> |{" "}
            <Link href="/copyright" style={{ color: "#888", textDecoration: "none" }}>Copyright</Link>
          </p>
          <p style={{ marginTop: "5px", color: "#666", fontSize: "11px" }}>
            Genuine SPI COATING PRODUCTS can only be purchased from SPI Authorised Representatives displaying the SPI Authorised Logo on their website.
          </p>
        </div>
      </div>
    </footer>
  );
}
