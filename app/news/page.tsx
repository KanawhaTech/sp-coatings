import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - SPI Coatings",
  description: "Latest news and updates from SPI Coatings — the World's Coating Innovator.",
};

const news = [
  {
    title: "Historical Resume: Over 175 years R&D experience with insulation and corrosion protection coatings",
    date: "2024",
    category: "Research & Development",
    summary: "SPI Coatings reflects on a remarkable legacy of coating research, development and innovation spanning over 175 combined years of experience in the industry.",
    href: "#",
  },
  {
    title: "NASA's 2024 Spinoff Magazine with Super Therm®",
    date: "2024",
    category: "Awards & Recognition",
    summary: "Super Therm® is featured in NASA's 2024 Spinoff Magazine, recognising its continued relevance and exceptional performance 35 years after its development through joint NASA research.",
    href: "#",
  },
  {
    title: "Where Physics, Data and Science Combine to Revolutionize Insulation — \"Thin and Thick Film Insulation\"",
    date: "2024",
    category: "Technical",
    summary: "A deep dive into the science behind thin-film and thick-film ceramic insulation systems — and why they are not interchangeable. The physics that separates Super Therm® from all competitors.",
    href: "#",
  },
  {
    title: "Revolutionary Energy-Saving Game-Changer: Georgia Pacific's HPC® EPA ENERGY STAR Win",
    date: "2024",
    category: "Case Study",
    summary: "Georgia Pacific achieved EPA ENERGY STAR programme recognition through the application of SPI Coatings' HPC® live hot pipe coating system — without shutting down production.",
    href: "#",
  },
  {
    title: "Super Therm® – Walkways Coated at Harry Reid International Airport in Las Vegas",
    date: "2024",
    category: "Project",
    summary: "Super Therm® has been applied to walkways at Harry Reid International Airport in Las Vegas, Nevada, reducing surface temperatures and improving passenger comfort in the desert heat.",
    href: "#",
  },
  {
    title: "SSPC Presentation: Insulative Coatings Fit for Purpose by Arin Shahmoradian",
    date: "2023",
    category: "Industry",
    summary: "SPI Coatings' Arin Shahmoradian presents to the SSPC (Society for Protective Coatings) on insulative coatings and their proper selection for purpose in industrial applications.",
    href: "#",
  },
  {
    title: "Rust Grip® – Unequaled Corrosion Protection with Workstrings International",
    date: "2023",
    category: "Case Study",
    summary: "Workstrings International selected Rust Grip® for corrosion protection of their oil field equipment. The results confirmed Rust Grip® as the top-performing single-coat corrosion protection system.",
    href: "#",
  },
];

const categories = ["All", "Research & Development", "Awards & Recognition", "Technical", "Case Study", "Project", "Industry"];

export default function NewsPage() {
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
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>News & Updates</h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            Transforming the world with innovative coatings — latest news, case studies and research from SPI Coatings.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ padding: "20px 0", background: "#f7f7f7", borderBottom: "1px solid #e5e5e5" }}>
        <div className="container mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                style={{
                  background: cat === "All" ? "#CC2026" : "#fff",
                  color: cat === "All" ? "#fff" : "#555",
                  border: "1px solid #ddd",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Articles */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <div
                key={article.title}
                className="hover-lift"
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                {/* Category bar */}
                <div
                  style={{
                    background: "#00578e",
                    color: "#fff",
                    padding: "8px 15px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {article.category}
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ color: "#CC2026", fontSize: "11px", fontWeight: "700", marginBottom: "10px" }}>
                    {article.date}
                  </p>
                  <h2 style={{ color: "#00578e", fontWeight: "700", fontSize: "0.95em", lineHeight: "1.5", marginBottom: "12px" }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", marginBottom: "15px" }}>
                    {article.summary}
                  </p>
                  <a
                    href={article.href}
                    style={{
                      color: "#CC2026",
                      fontWeight: "700",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    READ MORE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
