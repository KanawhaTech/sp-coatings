import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, newsArticles } from "@/lib/data/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} – SPI Coatings`,
    description: article.summary,
  };
}

function renderContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;
  let tableHeader: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${key}`} style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "4px" }}>
              {item}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const flushTable = (key: string) => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${key}`} style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            {tableHeader.length > 0 && (
              <thead>
                <tr style={{ background: "#203065", color: "#fff" }}>
                  {tableHeader.map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: "700" }}>{h.trim()}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f7f7f7" : "#fff", borderBottom: "1px solid #e5e5e5" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: "#444" }}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      tableHeader = [];
      inTable = false;
    }
  };

  lines.forEach((line, idx) => {
    const key = String(idx);

    // Table detection
    if (line.startsWith("|")) {
      const cells = line.split("|").filter((_, i, a) => i > 0 && i < a.length - 1);
      if (line.includes("---")) return; // separator row
      if (!inTable) {
        flushList(key);
        inTable = true;
        tableHeader = cells;
      } else {
        tableRows.push(cells);
      }
      return;
    } else if (inTable) {
      flushTable(key);
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushList(key);
      const content = line.replace(/^> /, "").replace(/\*\*(.*?)\*\*/g, "$1");
      elements.push(
        <blockquote
          key={key}
          style={{
            borderLeft: "4px solid #F5A623",
            paddingLeft: "16px",
            margin: "16px 0",
            color: "#555",
            fontStyle: "italic",
            fontSize: "14px",
            lineHeight: "1.8",
          }}
        >
          {content}
        </blockquote>
      );
      return;
    }

    // Attribution line (starts with —)
    if (line.startsWith("> —") || line.startsWith("—")) {
      const content = line.replace(/^> /, "").replace(/\*\*(.*?)\*\*/g, "$1");
      elements.push(
        <p key={key} style={{ color: "#888", fontSize: "12px", fontStyle: "italic", marginBottom: "16px", paddingLeft: "20px" }}>
          {content}
        </p>
      );
      return;
    }

    // H3
    if (line.startsWith("### ")) {
      flushList(key);
      elements.push(
        <h3 key={key} style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginTop: "28px", marginBottom: "12px" }}>
          {line.replace("### ", "")}
        </h3>
      );
      return;
    }

    // H2
    if (line.startsWith("## ")) {
      flushList(key);
      elements.push(
        <h2 key={key} style={{ color: "#00578e", fontWeight: "800", fontSize: "1.3em", marginTop: "32px", marginBottom: "14px" }}>
          {line.replace("## ", "")}
        </h2>
      );
      return;
    }

    // List item
    if (line.startsWith("- ")) {
      listItems.push(line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1"));
      return;
    }

    // Blank line
    if (line.trim() === "") {
      flushList(key);
      return;
    }

    // Normal paragraph
    flushList(key);
    const cleaned = line
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");
    elements.push(
      <p key={key} style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
        {cleaned}
      </p>
    );
  });

  flushList("end");
  flushTable("end");

  return elements;
}

const categoryColors: Record<string, string> = {
  "Research & Development": "#00578e",
  "Awards & Recognition": "#F5A623",
  "Technical": "#203065",
  "Case Study": "#CC2026",
  "Project": "#4CAF50",
  "Industry": "#607D8B",
};

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = newsArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const catColor = categoryColors[article.category] ?? "#00578e";

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>Home</Link>
            {" › "}
            <Link href="/news" style={{ color: "#00578e", textDecoration: "none" }}>News</Link>
            {" › "}
            <span style={{ color: "#888" }}>{article.title}</span>
          </p>
        </div>
      </div>

      {/* Article */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Category badge */}
              <span
                style={{
                  display: "inline-block",
                  background: catColor,
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "700",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "16px",
                }}
              >
                {article.category}
              </span>

              <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "1.8em", lineHeight: "1.3", marginBottom: "10px" }}>
                {article.title}
              </h1>

              <p style={{ color: "#888", fontSize: "12px", marginBottom: "28px", fontWeight: "600" }}>
                {article.date} · SPI Coatings
              </p>

              {/* Summary */}
              <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", fontWeight: "600", marginBottom: "28px", borderLeft: "4px solid #CC2026", paddingLeft: "16px" }}>
                {article.summary}
              </p>

              <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", marginBottom: "28px" }} />

              {/* Full content */}
              <div>{renderContent(article.content)}</div>
            </div>

            {/* Sidebar */}
            <div>
              {/* CTA box */}
              <div
                style={{
                  background: "#CC2026",
                  borderRadius: "4px",
                  padding: "24px 20px",
                  textAlign: "center",
                  marginBottom: "28px",
                }}
              >
                <h3 style={{ color: "#fff", fontWeight: "800", fontSize: "1.1em", marginBottom: "10px" }}>
                  Make an Enquiry
                </h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", marginBottom: "16px" }}>
                  SPI Coatings — home of Super Therm®, Rust Grip® and HPC®!
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    background: "#fff",
                    color: "#CC2026",
                    fontWeight: "700",
                    fontSize: "13px",
                    padding: "10px",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  CONTACT US
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>
                    Related Articles
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/news/${rel.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "12px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              background: categoryColors[rel.category] ?? "#00578e",
                              color: "#fff",
                              fontSize: "10px",
                              fontWeight: "700",
                              padding: "2px 8px",
                              borderRadius: "2px",
                              marginBottom: "6px",
                              textTransform: "uppercase",
                            }}
                          >
                            {rel.category}
                          </span>
                          <p style={{ color: "#00578e", fontSize: "13px", fontWeight: "600", lineHeight: "1.4", margin: 0 }}>
                            {rel.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All news link */}
              <div style={{ marginTop: "20px" }}>
                <Link
                  href="/news"
                  style={{ color: "#CC2026", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}
                >
                  ← All News & Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
