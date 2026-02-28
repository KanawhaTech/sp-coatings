import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} – SPI Coatings`,
    description: project.description,
  };
}

function renderFullDescription(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("### ")) {
      return (
        <h3
          key={i}
          style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginTop: "24px", marginBottom: "10px" }}
        >
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.7", marginBottom: "4px" }}>
          {line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}
        </li>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    const cleaned = line.replace(/\*\*(.*?)\*\*/g, "$1");
    return (
      <p key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "10px" }}>
        {cleaned}
      </p>
    );
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.industry === project.industry)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>Home</Link>
            {" › "}
            <Link href="/projects" style={{ color: "#00578e", textDecoration: "none" }}>Projects</Link>
            {" › "}
            <span style={{ color: "#888" }}>{project.title}</span>
          </p>
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: "50px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: article */}
            <div className="lg:col-span-2">
              <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "1.8em", lineHeight: "1.3", marginBottom: "24px" }}>
                {project.title}
              </h1>

              {/* Hero image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "4px", overflow: "hidden", marginBottom: "30px", background: "#e5e5e5" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Full description */}
              <div>
                <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                  {renderFullDescription(project.fullDescription ?? project.description)}
                </ul>
              </div>
            </div>

            {/* Right: sidebar */}
            <div>
              {/* Project details box */}
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "30px",
                }}
              >
                <div style={{ background: "#203065", padding: "14px 18px" }}>
                  <h3 style={{ color: "#fff", fontWeight: "700", fontSize: "14px", margin: 0, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Project Details
                  </h3>
                </div>
                <div style={{ padding: "18px" }}>
                  {[
                    { label: "Industry", value: project.industry },
                    { label: "Location", value: project.location },
                    { label: "Products", value: project.products },
                    { label: "Global Partner", value: project.partner },
                  ]
                    .filter((item) => item.value)
                    .map((item) => (
                      <div
                        key={item.label}
                        style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "10px", marginBottom: "10px" }}
                      >
                        <p style={{ color: "#888", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", marginBottom: "2px" }}>
                          {item.label}
                        </p>
                        <p style={{ color: "#333", fontSize: "13px", fontWeight: "600", margin: 0 }}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* CTA box */}
              <div
                style={{
                  background: "#CC2026",
                  borderRadius: "4px",
                  padding: "24px 20px",
                  textAlign: "center",
                  marginBottom: "30px",
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

              {/* Related projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>
                    Related Projects
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {relatedProjects.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/projects/${rel.slug}`}
                        style={{ display: "flex", gap: "12px", textDecoration: "none", alignItems: "flex-start" }}
                      >
                        <div style={{ position: "relative", width: "72px", height: "54px", flexShrink: 0, borderRadius: "2px", overflow: "hidden", background: "#e5e5e5" }}>
                          <Image src={rel.image} alt={rel.title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <p style={{ color: "#00578e", fontSize: "13px", fontWeight: "600", lineHeight: "1.4", margin: 0 }}>
                          {rel.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: "30px 0", background: "#f7f7f7", borderTop: "1px solid #e5e5e5" }}>
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            style={{
              color: "#00578e",
              fontWeight: "700",
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
