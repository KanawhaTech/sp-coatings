"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { APP_NAME } from "@/lib/constants";
import {
  coatingsMenu,
  industriesMenu,
  solutionsMenu,
  simpleNavLinks,
  mobileNavLinks,
} from "@/lib/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full" style={{ position: "sticky", top: 0, zIndex: 200 }}>
      {/* Top red bar — WORLD'S COATING INNOVATOR + social + distributors */}
      <div style={{ background: "#CC2026", padding: "6px 0" }}>
        <div className="container mx-auto px-4">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Left: brand text */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <span style={{ color: "#fff", fontWeight: "700", fontSize: "12px", letterSpacing: "0.5px" }}>
                WORLD&apos;S COATING INNOVATOR™
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>|</span>
              <span style={{ color: "#fff", fontWeight: "700", fontSize: "12px", letterSpacing: "0.5px" }}>
                OFFICIAL MANUFACTURER&apos;S WEBSITE
              </span>
            </div>
            {/* Right: phone + social + distributors */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="tel:+19139624848"
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                +1 913-962-4848
              </a>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>|</span>
              {/* LinkedIn — white circle with LinkedIn SVG */}
              <a
                href="https://www.linkedin.com/company/spi-coatings"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", textDecoration: "none" }}
                aria-label="LinkedIn"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M10.5 12.5H8V21.5H10.5V12.5ZM9.25 11.5C10.08 11.5 10.75 10.83 10.75 10C10.75 9.17 10.08 8.5 9.25 8.5C8.42 8.5 7.75 9.17 7.75 10C7.75 10.83 8.42 11.5 9.25 11.5ZM22 21.5H19.5V17.1C19.5 16.18 19.48 15 18.23 15C16.96 15 16.75 15.99 16.75 17.03V21.5H14.25V12.5H16.65V13.57H16.68C17.02 12.92 17.85 12.23 19.1 12.23C21.63 12.23 22 13.87 22 16.02V21.5Z" fill="#0077B5"/>
                </svg>
              </a>
              {/* YouTube — white circle with YouTube SVG */}
              <a
                href="https://www.youtube.com/@spicoatings"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", textDecoration: "none" }}
                aria-label="YouTube"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M22.8 11.6C22.6 10.8 21.9 10.2 21.1 10C19.7 9.7 15 9.7 15 9.7C15 9.7 10.3 9.7 8.9 10C8.1 10.2 7.4 10.9 7.2 11.6C7 13 7 15 7 15C7 15 7 17 7.2 18.4C7.4 19.2 8.1 19.8 8.9 20C10.3 20.3 15 20.3 15 20.3C15 20.3 19.7 20.3 21.1 20C21.9 19.8 22.6 19.1 22.8 18.4C23 17 23 15 23 15C23 15 23 13 22.8 11.6ZM13.3 17.5V12.5L17.7 15L13.3 17.5Z" fill="#FF0000"/>
                </svg>
              </a>
              <Link
                href="/distributors"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "#fff",
                  padding: "5px 16px",
                  fontWeight: "700",
                  fontSize: "12px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  letterSpacing: "1px",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                DISTRIBUTORS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer / note bar — oculto en mobile */}
      <div className="hidden md:block" style={{ background: "#EAEAEA", borderBottom: "1px solid #d5d5d5", padding: "5px 0" }}>
        <div className="container mx-auto px-4 text-center">
          <p style={{ color: "#CC2026", fontSize: "13px", fontWeight: "600" }}>
            NOTE: Laboratory and Field project results as stated here may vary according to different climate conditions.
          </p>
        </div>
      </div>

      {/* Main header: logo left + [hamburger top-right / nav+search bottom-right] */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "2px solid #e5e5e5",
          position: "relative",
          zIndex: 100,
        }}
      >
        <div className="container mx-auto px-4">
          <div style={{ display: "flex", alignItems: "stretch" }}>
            {/* Logo — left, spans both rows */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, paddingRight: "20px" }}>
              <Image
                src="/images/header-logo.png"
                alt={APP_NAME}
                width={200}
                height={70}
                style={{ height: "64px", width: "auto" }}
                priority
              />
            </Link>

            {/* Right column: two rows */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {/* Row 1: hamburger aligned to the right */}
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "4px 0" }}>
                <button
                  style={{ background: "none", border: "none", color: "#4A4A4A", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  <Icon icon="mdi:menu" width={26} height={26} />
                </button>
              </div>

              {/* Row 2: nav links + search icon */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <ul className="hidden md:flex items-center" style={{ listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
            {/* Coatings */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("coatings")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/coating-products"
                style={{
                  display: "block",
                  padding: "0 18px",
                  lineHeight: "50px",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: activeDropdown === "coatings" ? "#CC2026" : "#4A4A4A",
                  textDecoration: "none",
                  borderBottom: activeDropdown === "coatings" ? "3px solid #CC2026" : "3px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Coatings ▾
              </Link>
              {activeDropdown === "coatings" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 1000,
                    minWidth: "720px",
                    padding: "25px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    border: "1px solid #eee",
                    borderTop: "3px solid #CC2026",
                  }}
                >
                  {Object.entries(coatingsMenu).map(([category, products]) => (
                    <div key={category}>
                      <h4
                        style={{
                          color: "#00578e",
                          fontWeight: "700",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          marginBottom: "10px",
                          paddingBottom: "8px",
                          borderBottom: "2px solid #CC2026",
                        }}
                      >
                        {category}
                      </h4>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {products.map((product) => (
                          <li key={product.name} style={{ marginBottom: "6px" }}>
                            <Link
                              href={product.href}
                              style={{
                                color: "#444",
                                textDecoration: "none",
                                fontSize: "13px",
                                fontWeight: "600",
                                display: "block",
                                padding: "2px 0",
                              }}
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Industries */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/industries"
                style={{
                  display: "block",
                  padding: "0 18px",
                  lineHeight: "50px",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: activeDropdown === "industries" ? "#CC2026" : "#4A4A4A",
                  textDecoration: "none",
                  borderBottom: activeDropdown === "industries" ? "3px solid #CC2026" : "3px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Industries ▾
              </Link>
              {activeDropdown === "industries" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 1000,
                    minWidth: "460px",
                    padding: "25px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px 20px",
                    border: "1px solid #eee",
                    borderTop: "3px solid #CC2026",
                  }}
                >
                  {industriesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        color: "#444",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "5px 0",
                        display: "block",
                        borderBottom: "1px solid #f5f5f5",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Solutions */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/solutions"
                style={{
                  display: "block",
                  padding: "0 18px",
                  lineHeight: "50px",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: activeDropdown === "solutions" ? "#CC2026" : "#4A4A4A",
                  textDecoration: "none",
                  borderBottom: activeDropdown === "solutions" ? "3px solid #CC2026" : "3px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Solutions ▾
              </Link>
              {activeDropdown === "solutions" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 1000,
                    minWidth: "300px",
                    padding: "20px 25px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    border: "1px solid #eee",
                    borderTop: "3px solid #CC2026",
                  }}
                >
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        color: "#444",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "5px 0",
                        borderBottom: "1px solid #f5f5f5",
                        display: "block",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Simple nav links */}
            {simpleNavLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "0 16px",
                    lineHeight: "50px",
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#4A4A4A",
                    textDecoration: "none",
                    borderBottom: "3px solid transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
                </ul>

                {/* Search icon — end of nav row */}
                <button
                  style={{ background: "none", border: "none", color: "#4A4A4A", cursor: "pointer", padding: "6px", display: "flex", alignItems: "center", flexShrink: 0 }}
                  aria-label="Search"
                >
                  <Icon icon="mdi:magnify" width={22} height={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "2px solid #CC2026",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
            {mobileNavLinks.map((item) => (
              <li key={item.name} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "13px 20px",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
