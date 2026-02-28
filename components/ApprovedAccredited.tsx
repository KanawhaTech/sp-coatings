import Image from "next/image";
import Link from "next/link";

const approvedLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const productLogos = [
  {
    src: "/images/products/Super-Therm-Heat-Block-logo-colour-1024x209.png",
    alt: "Super Therm®",
    href: "/coating-products/super-therm",
  },
  {
    src: "/images/products/Rust-Grip-logo.jpg",
    alt: "Rust Grip®",
    href: "/coating-products/rust-grip",
  },
  {
    src: "/images/products/HPC-Coating-logo.jpg",
    alt: "HPC® Coating",
    href: "/coating-products/hpc-coating",
  },
  {
    src: "/images/products/logo-5.jpg",
    alt: "Enamo Grip®",
    href: "/coating-products/enamo-grip",
  },
  {
    src: "/images/products/logo-2.jpg",
    alt: "Moist Metal Grip®",
    href: "/coating-products/moist-metal-grip",
  },
  {
    src: "/images/products/HSC-Coating-colour-logo.png",
    alt: "HPC®-INT Coating",
    href: "/coating-products/hpc-int-coating",
  },
];

export default function ApprovedAccredited() {
  return (
    <section style={{ padding: "50px 0", background: "#fff", borderTop: "1px solid #e5e5e5" }}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2
          style={{
            color: "#CC2026",
            fontWeight: "800",
            fontSize: "1.3em",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Approved &amp; Accredited Coatings
        </h2>

        {/* Accreditation logos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            marginBottom: "30px",
          }}
        >
          {approvedLogos.map((n) => (
            <Image
              key={n}
              src={`/images/Approved/accreditation-sponsor-${n}.jpg`}
              alt={`Accreditation sponsor ${n}`}
              width={80}
              height={80}
              style={{ height: "60px", width: "auto", objectFit: "contain" }}
            />
          ))}
        </div>

        {/* Full Coating Range button */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Link
            href="/coating-products"
            style={{
              background: "#e87722",
              color: "#fff",
              padding: "12px 32px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
            }}
          >
            FULL COATING RANGE
          </Link>
        </div>

        {/* Product logos grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {productLogos.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={200}
                height={80}
                style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
