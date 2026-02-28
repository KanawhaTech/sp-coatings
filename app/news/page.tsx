import Link from "next/link";
import type { Metadata } from "next";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News - SPI Coatings",
  description: "Latest news and updates from SPI Coatings — the World's Coating Innovator.",
};

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
            {newsArticles.map((article) => (
              <div
                key={article.slug}
                className="hover-lift"
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
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
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ color: "#CC2026", fontSize: "11px", fontWeight: "700", marginBottom: "10px" }}>
                    {article.date}
                  </p>
                  <h2 style={{ color: "#00578e", fontWeight: "700", fontSize: "0.95em", lineHeight: "1.5", marginBottom: "12px" }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", marginBottom: "15px", flex: 1 }}>
                    {article.summary}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    style={{
                      color: "#CC2026",
                      fontWeight: "700",
                      fontSize: "13px",
                      textDecoration: "none",
                      alignSelf: "flex-start",
                    }}
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
