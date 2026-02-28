import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ApprovedAccredited from "@/components/ApprovedAccredited";

export const metadata: Metadata = {
  title: "Solutions - SPI Coatings",
  description:
    "SPI Coatings offer a range of solutions that can meet any challenge in the global environment.",
};

const solutionColumns = [
  [
    { name: "Energy Reduction", href: "/solutions/energy-reduction" },
    { name: "Heat Block Coatings", href: "/solutions/heat-block-coatings" },
    { name: "Heat Management", href: "/solutions/heat-management" },
    { name: "Live Hot Pipe Coatings", href: "/solutions/live-hot-pipe-coatings" },
    { name: "Fireproofing", href: "/solutions/fire-resistance" },
  ],
  [
    { name: "Eco Friendly", href: "/solutions/eco-friendly" },
    { name: "Corrosion Management", href: "/solutions/corrosion-protection" },
    { name: "Chemical Protection", href: "/solutions/chemical-protection" },
    { name: "Water Resistance", href: "/solutions/water-resistance" },
  ],
  [
    { name: "Cold and Cool Storage", href: "/solutions/cold-cool-storage" },
    { name: "Concrete and Flooring Sealants", href: "/solutions/concrete-flooring" },
    { name: "Asbestos & Lead Encapsulation", href: "/solutions/asbestos-lead-encapsulation" },
    { name: "Transport", href: "/solutions/transport" },
  ],
];

const projectGallery = [
  {
    src: "/images/project/Project-3-Pipeline-6.jpg",
    caption: "Rust Grip applied to barges to prevent corrosion",
  },
  {
    src: "/images/project/Super-Therm-Poland-Pantech-NEOtech-Coatings.jpg",
    caption:
      "Super Therm being applied over black roof of Pasfrost Industrial Freezing, Belgium (Photo: SPE Coatings)",
  },
  {
    src: "/images/project/Project-1-Storage-tanks-3.jpg",
    caption:
      "Keerin\u2019s Hwasung factory floor coated with Rust Grip and Moist Metal Grip for toughness in Korea.",
  },
  {
    src: "/images/project/Baku-Metro-Underground-Tunnel-Corrosion-Protection-Rust-Grip.jpg",
    caption: "Railcars sound proofed with Super Therm Ceramic Coating",
  },
  {
    src: "/images/project/City-of-Adelaide-Cool-Roof-Trial-Super-Therm.jpg",
    caption: "Super Therm\u00ae applied to a house in Kapunda, South Australia",
  },
  {
    src: "/images/project/Hoover-Dam-Hero-Award-Photo.jpg",
    caption: "Hoover Dam project with Super Therm, Rust Grip and Enamo Grip",
  },
  {
    src: "/images/project/Peter-Davey-Houseboat-Moist-Metal-Grip-Nelson-Bay-12.jpg",
    caption: "Hepburn Spring, Victoria Shipping Container home with Super Therm",
  },
  {
    src: "/images/project/Marine-LNG-Tanker-Abu-Dhabi-Rust-Grip.jpg",
    caption: "Shipping container protected with Sunshield",
  },
  {
    src: "/images/project/El-Salvador-prison-6.jpg",
    caption:
      "Home in Geelong, Victoria painted with Super Therm to manage environmental noise (Photo: Suntraders Sustainable Solutions)",
  },
  {
    src: "/images/project/Pemex-HPC-2014-SPI-Coatings.jpg",
    caption:
      "Keeping the heat in: HPC\u00ae Coating was applied to 550\u00b0C steam pipes at a refinery for Gazprom, Russia\u2019s largest LPG energy supplier",
  },
  {
    src: "/images/project/Drill-Pipes-Workstrings-International-Rust-Grip.jpg",
    caption: "RUST GRIP\u00ae worked its magic at an oil drilling platform in Venezuela.",
  },
  {
    src: "/images/project/Pemex-HPC-2024-SPI-Coatings.jpg",
    caption: "Pemex Offshore rig used ENAMO GRIP for the ultimate protection.",
  },
  {
    src: "/images/project/Oil-Tank-Terminal-Mitsubishi-Super-Therm-Japan.jpg",
    caption:
      "Mitsubishi\u2019s \u2018tank terminal\u2019 in Japan was coated with Super Therm\u00ae/Sunshield\u00ae to stabalise fuel and oil storage.",
  },
  {
    src: "/images/project/Address-Dubai-Marina-Hotel-Super-Therm-photo-2.jpg",
    caption: "Address Dubai Marina Hotel, Super Therm\u00ae completed application",
  },
  {
    src: "/images/project/Nigeria-Offshore-Underwater-pipes-SPI-Coatings-10.jpg",
    caption: "SUPER THERM\u00ae applied to Australian oil fields at Halliburton",
  },
  {
    src: "/images/project/LNG-Tanks-Saudi-Arabia-Super-therm-NEOtech-Coatings.jpg",
    caption:
      "Super Therm\u00ae/Sunshield\u00ae reduced flaring on LNG tanks owned by Saudi Arabia\u2019s official oil company Saudi Aramco.",
  },
];

export default function SolutionsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>
              Home
            </Link>
            {" › "}
            <span style={{ color: "#888" }}>Solutions</span>
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: "40px 0 20px" }}>
        <div className="container mx-auto px-4">
          <h1
            style={{
              color: "#00578e",
              fontWeight: "800",
              fontSize: "2em",
              marginBottom: "16px",
            }}
          >
            Solutions
          </h1>
          <p
            style={{
              color: "#444",
              fontSize: "14px",
              lineHeight: "1.9",
              maxWidth: "820px",
              marginBottom: "10px",
            }}
          >
            SPI Coatings offer a range of solutions that can meet any challenge in the global
            environment.
          </p>
          <p
            style={{
              color: "#444",
              fontSize: "14px",
              lineHeight: "1.9",
              marginBottom: "24px",
            }}
          >
            This includes:
          </p>

          {/* Solutions columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: "50px" }}>
            {solutionColumns.map((col, ci) => (
              <ul key={ci} style={{ listStyle: "disc", paddingLeft: "20px" }}>
                {col.map((item) => (
                  <li key={item.href} style={{ marginBottom: "6px" }}>
                    <Link
                      href={item.href}
                      style={{
                        color: "#00578e",
                        fontWeight: "600",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", marginBottom: "40px" }} />

          {/* Project gallery */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            style={{ marginBottom: "20px" }}
          >
            {projectGallery.map((item, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    lineHeight: "1.5",
                    marginTop: "6px",
                    fontStyle: "italic",
                  }}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ApprovedAccredited />
    </div>
  );
}
