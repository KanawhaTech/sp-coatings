"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "HPC® Coating – Pemex Offshore Thermal Insulation",
    industry: "Heavy Industries",
    description: "SPI Coatings’ application on Pemex Oil’s offshore crude piping in the Gulf of Mexico was applied in 2014. This showcases the coatings’ ability to withstand harsh oceanic conditions while preventing corrosion and maintaining significant temperature reductions over time including withstanding hurricane winds. &nbsp; Mexico’s Pemex Offshore Crude Piping in 2014 with HPC® Coating’s fresh application … ",
    image: "/images/project/Pemex-HPC-2014-SPI-Coatings.jpg",
  },
  {
    title: "Mitsubishi Related Tank Terminal Insulation",
    industry: "Aviation",
    description: "Super Therm® was applied to walkways at Harry Reid International Airport to reduce surface temperatures and improve passenger comfort in the Nevada heat.",
    image: "/images/project-airport.jpg",
  },
  {
    title: "Aramco Oil and Gas: Jyaymah NGL Spherial Tanks",
    industry: "Marine",
    description: "Complete coating solution for the world's largest casino boat, providing corrosion protection and thermal management for the marine vessel.",
    image: "/images/project-casino-boat.jpg",
  },
  {
    title: "Workstrings International Specify Rust Grip®",
    industry: "Heavy Industries",
    description: "Super Therm® has been applied to over 10.3 million square metres of industrial and commercial facilities across Japan.",
    image: "/images/project-japan.jpg",
  },
  {
    title: "RUST GRIP® and ENAMO GRIP on Suncor Energy Tanks",
    industry: "Heavy Industries",
    description: "Georgia Pacific achieved EPA ENERGY STAR recognition through energy savings from SPI Coatings' HPC® hot pipe coating application.",
    image: "/images/project-georgia-pacific.jpg",
  },
  {
    title: "HPC® Coating on Oil Tanks, Campo Palagua, Columbia",
    industry: "Oil Gas Energy",
    description: "Rust Grip® applied to oil field equipment for Workstrings International, providing unequalled corrosion protection in harsh oilfield environments.",
    image: "/images/project-oilfield.jpg",
  },
  {
    title: "Mall Plaza Vespucio Shopping Center, Santiago-Chile – Super Therm®",
    industry: "Oil Gas Energy",
    description: "State-owned Brazilian petroleum corporation Petrobras tested and approved Rust Grip® — the best performer among zinc-free single-component systems.",
    image: "/images/project-petrobras.jpg",
  },
  {
    title: "Lead Based Paint Abatement and Encapsulation at Fort Bragg",
    industry: "Marine",
    description: "Complete corrosion protection system for port infrastructure, combining Rust Grip® primer and Enamo Grip® topcoat for maximum performance.",
    image: "/images/project-port.jpg",
  },
  {
    title: "Tuscon Airport Airconditioning Savings",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Baku Metro Underground Tunnel Corrosion Protection",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "City of Adelaide Cool Roof Trial 2022-2023",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Abu Dhabi LNG Super Tanker with Rust Grip®",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Water cooling tower corrosion treated with Moist Metal Grip",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Poland Pantech with Super Therm Ceramic Coating®",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "World’s Largest Blue Chip Casino Boat Build",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Moist Metal Grip antifouling paint on an Australian houseboat",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Chevron Pacific Gas Pipelines, Indonesia",
    industry: "Building",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "Underwater Pipes Anti-Corrosion System, Nigeria",
    industry: "Building",
    description: "Nigeria Offshore Applications The attached pictures show one of two applications performed in Nigeria. The job is about pipes used for offshore oil drilling operations, subject to cycles of immersion underwater and storage on deck. Very tough environment and very tough life cycle (salt water, salt spray, sun, impacts, abrasion, and temperatures ranging from 5° … ",
    image: "/images/project-cold-storage.jpg",
  },
  {
    title: "DryDocks World (Dubai) Super Therm Container Test ResultsUnderwater Pipes Anti-Corrosion System, Nigeria",
    industry: "Building",
    description: "In winter 2011 a test was set up at the DryDocks World in Dubai. Two shipping containers were tested in real world environments for 48 hours. The surfaces were not cleaned when tested. See the Case Study pdf. The study showed the Super Therm® container was on average 5°C cooler inside than the container without … ",
    image: "/images/project-cold-storage.jpg",
  },
];

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
                  key={project.title}
                  className="hover-shadow"
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <div style={{ position: "relative", height: "200px", background: "#e5e5e5" }}>
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
                  <div style={{ padding: "20px" }}>
                    <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1em", marginBottom: "8px", lineHeight: "1.4" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.6" }}>
                      {project.description}
                    </p>
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
