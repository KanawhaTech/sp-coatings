import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - SPI Coatings",
  description: "Browse SPI Coatings global project portfolio. From the Hoover Dam to marine vessels, see proven performance worldwide.",
};

const projects = [
  {
    title: "Hoover Dam — USA",
    industry: "Infrastructure",
    product: "Rust Grip®",
    description: "Award-winning corrosion protection applied to the iconic Hoover Dam. Rust Grip® was selected for its proven performance in demanding infrastructure applications.",
    image: "/images/project-hoover-dam.jpg",
    location: "Nevada/Arizona, USA",
  },
  {
    title: "Harry Reid International Airport — Las Vegas",
    industry: "Aviation",
    product: "Super Therm®",
    description: "Super Therm® was applied to walkways at Harry Reid International Airport to reduce surface temperatures and improve passenger comfort in the Nevada heat.",
    image: "/images/project-airport.jpg",
    location: "Las Vegas, USA",
  },
  {
    title: "World's Largest Casino Boat",
    industry: "Marine",
    product: "Rust Grip® + Super Therm®",
    description: "Complete coating solution for the world's largest casino boat, providing corrosion protection and thermal management for the marine vessel.",
    image: "/images/project-casino-boat.jpg",
    location: "USA",
  },
  {
    title: "Industrial Facilities — Japan",
    industry: "Industrial Commercial",
    product: "Super Therm®",
    description: "Super Therm® has been applied to over 10.3 million square metres of industrial and commercial facilities across Japan.",
    image: "/images/project-japan.jpg",
    location: "Japan",
  },
  {
    title: "Georgia Pacific — ENERGY STAR Win",
    industry: "Industrial",
    product: "HPC® Coating",
    description: "Georgia Pacific achieved EPA ENERGY STAR recognition through energy savings from SPI Coatings' HPC® hot pipe coating application.",
    image: "/images/project-georgia-pacific.jpg",
    location: "USA",
  },
  {
    title: "Workstrings International — Oil Field",
    industry: "Energy & Mining",
    product: "Rust Grip®",
    description: "Rust Grip® applied to oil field equipment for Workstrings International, providing unequalled corrosion protection in harsh oilfield environments.",
    image: "/images/project-oilfield.jpg",
    location: "USA",
  },
  {
    title: "Petrobras — Brazil",
    industry: "Energy & Mining",
    product: "Rust Grip®",
    description: "State-owned Brazilian petroleum corporation Petrobras tested and approved Rust Grip® — the best performer among zinc-free single-component systems.",
    image: "/images/project-petrobras.jpg",
    location: "Brazil",
  },
  {
    title: "Port Facility — Marine Infrastructure",
    industry: "Marine / Infrastructure",
    product: "Rust Grip® + Enamo Grip®",
    description: "Complete corrosion protection system for port infrastructure, combining Rust Grip® primer and Enamo Grip® topcoat for maximum performance.",
    image: "/images/project-port.jpg",
    location: "Worldwide",
  },
  {
    title: "Cold Storage Facility — Asia",
    industry: "Cold Storage",
    product: "Super Therm®",
    description: "Super Therm® applied to refrigerated warehouse roof, achieving 30% reduction in refrigeration energy consumption.",
    image: "/images/project-cold-storage.jpg",
    location: "Asia",
  },
];

const industries = ["All", "Infrastructure", "Aviation", "Marine", "Industrial", "Energy & Mining", "Cold Storage"];

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #00578e 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>Global Projects</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            Transforming the world with innovative coatings — proven performance across 50+ countries for over 35 years.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section style={{ padding: "40px 0", background: "#CC2026" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "35+", label: "Years of Performance" },
              { value: "50+", label: "Countries Worldwide" },
              { value: "10.3M m²", label: "Coated in Japan" },
              { value: "100K+", label: "Projects Completed" },
            ].map((stat) => (
              <div key={stat.value}>
                <div style={{ color: "#fff", fontSize: "2em", fontWeight: "800" }}>{stat.value}</div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: "600" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
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
                  <p style={{ color: "#CC2026", fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>
                    Product: {project.product}
                  </p>
                  <p style={{ color: "#888", fontSize: "11px", marginBottom: "10px" }}>
                    📍 {project.location}
                  </p>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.6" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}
