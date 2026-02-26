import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coating Products - SPI Coatings",
  description: "Explore SPI Coatings full range of thermal insulation, corrosion, fire, sealant and base coatings. Innovative coatings developed with NASA for 35+ years.",
};

const allProducts = [
  {
    category: "Thermal Insulation Coatings",
    color: "#00578e",
    products: [
      {
        name: "Super Therm®",
        description: "The original ceramics thermal insulation coating developed with NASA. Reduces infrared heat and stops heat load. Highest solar heat blocking ratings.",
        href: "/coating-products/super-therm",
        image: "/images/super-therm.jpg",
      },
      {
        name: "Sunshield",
        description: "Heat reflective paint for roofs and exterior surfaces. Reflects solar heat to reduce cooling costs and improve comfort.",
        href: "/coating-products/sunshield",
        image: "/images/sunshield.jpg",
      },
      {
        name: "HPC® Coating",
        description: "Hot Pipe Coating for live application on pipes operating up to 232°C (450°F). Can be applied while pipe is in service.",
        href: "/coating-products/hpc-coating",
        image: "/images/hpc-coating.jpg",
      },
      {
        name: "HPC®-INT Coating",
        description: "Interior hot pipe coating system for high-temperature insulation on internal pipe surfaces.",
        href: "/coating-products/hpc-int-coating",
        image: "/images/hpc-int.jpg",
      },
      {
        name: "HPC®-HT Coating",
        description: "High-temperature pipe coating system rated for pipes operating up to 650°C (1200°F).",
        href: "/coating-products/hpc-ht-coating",
        image: "/images/hpc-ht.jpg",
      },
      {
        name: "HSC™ Coating",
        description: "Hot Surface Coating for high-temperature equipment and vessels. Provides thermal insulation and corrosion protection.",
        href: "/coating-products/hsc-coating",
        image: "/images/hsc-coating.jpg",
      },
      {
        name: "SP Texture Coat",
        description: "Textured decorative coating with thermal insulation properties. Ideal for exterior walls and roofs.",
        href: "/coating-products/sp-texture-coat",
        image: "/images/sp-texture-coat.jpg",
      },
    ],
  },
  {
    category: "Corrosion Coatings",
    color: "#CC2026",
    products: [
      {
        name: "Rust Grip®",
        description: "Moisture-cured polyurethane that penetrates rust and bonds directly to corroded surfaces. Zero VOC, single coat application.",
        href: "/coating-products/rust-grip",
        image: "/images/rust-grip.jpg",
      },
      {
        name: "Moist Metal Grip",
        description: "Primer and topcoat in one — applies directly to wet, damp or contaminated metal surfaces without surface preparation.",
        href: "/coating-products/moist-metal-grip",
        image: "/images/moist-metal-grip.jpg",
      },
    ],
  },
  {
    category: "Fire Coating",
    color: "#e65100",
    products: [
      {
        name: "Omega Fire",
        description: "Intumescent fire protection coating for structural steel. Expands under heat to form an insulating char barrier, providing up to 4 hours fire resistance.",
        href: "/coating-products/omega-fire",
        image: "/images/omega-fire.jpg",
      },
    ],
  },
  {
    category: "Sealant Coatings",
    color: "#2e7d32",
    products: [
      {
        name: "Enamo Grip®",
        description: "Two-component epoxy polyamide coating providing excellent adhesion, chemical resistance and high gloss finish.",
        href: "/coating-products/enamo-grip",
        image: "/images/enamo-grip.jpg",
      },
      {
        name: "Enamo Grip 5000®",
        description: "Enhanced version of Enamo Grip with superior chemical resistance for the harshest environments.",
        href: "/coating-products/enamo-grip-5000",
        image: "/images/enamo-grip-5000.jpg",
      },
      {
        name: "Lining Kote UHS",
        description: "Ultra-high solids lining coating for tanks, vessels and pipelines handling aggressive chemicals.",
        href: "/coating-products/lining-kote-uhs",
        image: "/images/lining-kote.jpg",
      },
      {
        name: "SP APC Strippable",
        description: "Removable strippable coating for temporary surface protection during transport, storage and construction.",
        href: "/coating-products/sp-apc-strippable",
        image: "/images/sp-apc.jpg",
      },
      {
        name: "SP Interlock",
        description: "Interlocking epoxy floor coating for industrial and commercial floors. Excellent abrasion and chemical resistance.",
        href: "/coating-products/sp-interlock",
        image: "/images/sp-interlock.jpg",
      },
    ],
  },
  {
    category: "Base Coatings",
    color: "#6a1b9a",
    products: [
      {
        name: "SP Liquid Membrane®",
        description: "Elastomeric waterproof membrane coating for roofs, terraces and below-grade concrete.",
        href: "/coating-products/sp-liquid-membrane",
        image: "/images/sp-liquid-membrane.jpg",
      },
      {
        name: "SP Seal Coat",
        description: "Penetrating sealer and primer for concrete, masonry and porous substrates.",
        href: "/coating-products/sp-seal-coat",
        image: "/images/sp-seal-coat.jpg",
      },
      {
        name: "SP Seal Coat HT",
        description: "High-temperature version of SP Seal Coat for surfaces exposed to elevated temperatures.",
        href: "/coating-products/sp-seal-coat-ht",
        image: "/images/sp-seal-coat-ht.jpg",
      },
      {
        name: "Super Base",
        description: "High-performance primer and base coat that improves adhesion of topcoats on difficult substrates.",
        href: "/coating-products/super-base",
        image: "/images/super-base.jpg",
      },
    ],
  },
];

export default function CoatingProductsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #00578e 0%, #CC2026 100%)",
          color: "#fff",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", marginBottom: "15px" }}>
            Our Coating Products
          </h1>
          <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto" }}>
            The world&apos;s most innovative coating solutions — engineered for performance, proven over 35+ years of research and real-world application.
          </p>
        </div>
      </div>

      {/* Products by category */}
      {allProducts.map((section, idx) => (
        <section
          key={section.category}
          style={{ padding: "70px 0", background: idx % 2 === 0 ? "#fff" : "#f7f7f7" }}
        >
          <div className="container mx-auto px-4">
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "40px" }}>
              <div
                style={{
                  width: "6px",
                  height: "40px",
                  background: section.color,
                  borderRadius: "3px",
                }}
              />
              <h2 style={{ color: "#00578e", fontSize: "1.8em", fontWeight: "800" }}>
                {section.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    className="hover-card"
                    style={{
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      overflow: "hidden",
                      background: "#fff",
                      height: "100%",
                    }}
                  >
                    <div style={{ position: "relative", height: "180px", background: "#e5e5e5" }}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to top, rgba(0,0,0,0.5), transparent)`,
                        }}
                      />
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3
                        style={{
                          color: section.color,
                          fontWeight: "700",
                          fontSize: "1.1em",
                          marginBottom: "8px",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
                        {product.description}
                      </p>
                      <p
                        style={{
                          color: "#CC2026",
                          fontWeight: "700",
                          fontSize: "12px",
                          marginTop: "12px",
                        }}
                      >
                        LEARN MORE →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
