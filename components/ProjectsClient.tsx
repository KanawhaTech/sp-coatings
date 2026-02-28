"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

const filters = [
  "All",
  "Aviation",
  "Bridges",
  "Building",
  "Containers",
  "Defence",
  "Heavy Industries",
  "Infrastructure",
  "Marine",
  "Oil Gas Energy",
  "Transportation",
];

export default function ProjectsClient() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.industry === active);

  return (
    <>
      {/* Title + Subtitle */}
      <section style={{ padding: "30px 0 10px", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "1.6em", marginBottom: "8px" }}>
            Projects
          </h1>
          <p style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", textAlign: "center", marginBottom: "0" }}>
            Proven Global Coatings Solutions for the Toughest Landscapes!!
          </p>
        </div>
      </section>

      {/* Filter tags */}
      <section style={{ padding: "14px 0 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0" }}>
            {filters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  style={{
                    padding: "8px 14px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    border: "none",
                    cursor: "pointer",
                    background: isActive ? "#203065" : "#F5A623",
                    color: "#fff",
                    transition: "background 0.15s",
                  }}
                >
                  {filter.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "40px 0 70px", background: "#fff" }}>
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p style={{ color: "#888", textAlign: "center", padding: "40px 0" }}>
              No projects found for this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.slug}
                  className="hover-shadow"
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ position: "relative", height: "200px", background: "#e5e5e5", flexShrink: 0 }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#CC2026",
                        color: "#fff",
                        padding: "4px 10px",
                        fontSize: "11px",
                        fontWeight: "700",
                        borderRadius: "2px",
                      }}
                    >
                      {project.industry}
                    </div>
                  </div>
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1em", marginBottom: "10px", lineHeight: "1.4" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.6", flex: 1, marginBottom: "16px" }}>
                      {project.description.length > 140
                        ? project.description.slice(0, 140) + "…"
                        : project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      style={{
                        display: "inline-block",
                        background: "#F5A623",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        padding: "9px 20px",
                        borderRadius: "2px",
                        textDecoration: "none",
                        alignSelf: "flex-start",
                      }}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", background: "#f7f7f7", textAlign: "center" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800", marginBottom: "15px" }}>
            Want to Add Your Project?
          </h2>
          <p style={{ color: "#666", fontSize: "1em", marginBottom: "30px" }}>
            Contact SPI Coatings to discuss your coating project and get expert advice.
          </p>
          <Link href="/contact" className="btn-primary">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
