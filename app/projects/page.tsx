import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects - SPI Coatings",
  description: "Browse SPI Coatings global project portfolio. From the Hoover Dam to marine vessels, see proven performance worldwide.",
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <div>
        <img
          width={1600}
          height={290}
          src="/images/spi-coatings-hpc-offshore-pemex-banners.jpg"
          alt="SPI Coatings — HPC Offshore"
          style={{ width: "100%", display: "block" }}
        />
      </div>

      {/* Barra azul */}
      <section style={{ padding: "15px 0", background: "#203065" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "1.2em", fontWeight: "800", color: "#fff", textAlign: "center", margin: 0 }}>
            World&apos;s Coating Innovator™
          </p>
        </div>
      </section>

      {/* Contenido interactivo (título, filtros, grid, CTA) */}
      <ProjectsClient />
    </div>
  );
}
