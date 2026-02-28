import Link from "next/link";
import type { Metadata } from "next";
import ApprovedAccredited from "@/components/ApprovedAccredited";

export const metadata: Metadata = {
  title: "Industry Uses - SP Coatings",
  description:
    "Many industries have different challenges regarding environment threats from heat, condensation, corrosion and fire. SP Coatings has provided solutions worldwide for over 35 years.",
};

const industries = [
  {
    name: "Agriculture",
    href: "/industries/agriculture",
    description:
      "Our coatings offer many cost-reducing, profit enhancing agricultural benefits. Farms and poultry houses have improved running costs, effective temperature control and managed humidity levels. This equates into regular feed consumption and increases average livestock weight and profits.",
  },
  {
    name: "Architecture",
    href: "/industries/architecture",
    description:
      "Architects are always looking for sustainable, energy savings, environmentally friendly and long term solutions to enhance their designs and help their clients. With our coatings you can design knowing SP Coatings have roof, ceiling, walls and floor products covered.",
  },
  {
    name: "Aviation",
    href: "/industries/aviation",
    description:
      "Protection in the aviation industry with Super Therm® is extensive. The environmentally friendly energy saving cool ceramic coating protects a range of important assets. From Airport Protection, Electronics Protection, Barrack walls/roofs, Aircraft Hangars, Trucks and Vehicles, Supply Boxes and Storage Containers, Tanks, Engine room behind the cockpit, Coat the engine manifold and tail pipe.",
  },
  {
    name: "Commercial & Industrial",
    href: "/industries/commercial-industrial",
    description:
      "Japan is one of the largest applicators of our solar heat block coatings systems. Corporations have embraced the rewards of application of Super Therm® and the financial returns plus other benefits such as thermal shock asset management, employee comfort and more. With the important of environmental sustainability, reducing overheads and improving productivity our coatings systems are world leaders on every continent.",
  },
  {
    name: "Construction",
    href: "/industries/construction",
    description:
      "As the construction industry looks for better ways to build with guaranteed, long term solutions on buildings they are seeing the benefits of our coatings. Insulation, corrosion, condensation, fire proofing and much more can be addressed whether it's new construction or a retrofit, we have the coatings to suit all constructions needs.",
  },
  {
    name: "Cold & Cool Storage",
    href: "/industries/cool-cold-storage",
    description:
      "Cold chain solutions require careful management. This includes freezers and chillers. With the running costs of refrigeration climbing annually SP Coatings have a series of coatings that will ease the tide and give your company a significant saving and protection. Our coatings assist with condensation, corrosion, and insulation that work in all environments to guarantee to save you energy. Refrigeration trucks, reefers and more have shown significant fuel savings with the application of Super Therm®.",
  },
  {
    name: "Energy & Mining",
    href: "/industries/energy-mining",
    description:
      "The Energy and Mining industries have a significant environmental challenges. Our range of coatings have proven worldwide they can handle the harshest, toughest and most enduring environmental challenges; providing solutions for heat, moisture, corrosion and more. There's a diverse range of our coatings' combinations that make powerful and effective systems to suit any need on oil fields, gas rigs and other related energy industrial needs. With the only coatings for live pipe application, SP Coatings have got you covered!",
  },
  {
    name: "Marine",
    href: "/industries/marine",
    description:
      "Without doubt the marine environment is one of the biggest challenges for everyone. Corrosion is a big issue and we have the perfect solutions with Rust Grip®. Rust Grip® corrosion protection coating has withstood 15,000 hours of seaspray testing with perfect results. We also tackle both submersed corrosion with Moist Metal Grip along with biofouling with our hard coatings saving you thousands in slipping and biofoul contamination costs. Contact us regarding corrosion and moisture management.",
  },
  {
    name: "Military & Defence",
    href: "/industries/defence-military",
    description:
      "The military have a significant range of assets far and wide. SP Coatings can assist with buildings, barrack walls and roofs, storage, transportation, hangars and any lead or asbestos based issues. We are able to also help with storage tanks, heat control, exhaust pipe protection, engine rooms and other heat related issues with our coatings systems.",
  },
  {
    name: "Residential",
    href: "/industries/residential",
    description:
      "With the price of energy going up and up, people are looking to better and more effective ways to protect their homes and offices against the harsh Australian sun while reducing costs. While solar panels takes a front line to power savings, many results around the world show how Super Therm® are reducing power by blocking solar heat entering the building. No tricks, no gimmicks…our coatings give you the best outcomes available in the marketplace with 96.1% solar heat block proven over 30 years.",
  },
  {
    name: "Shipping Containers",
    href: "/industries/shipping-containers",
    description:
      "Shipping containers are a very viable option for storage and living nowadays. Effective solar insulation of large steel containers allows for little compromise of internal spaces. Super Therm® has widely become accepted as an outstanding solution to block solar heat, reduce condensation, add corrosion protection and protect shipping containers generally.",
  },
  {
    name: "Transportation",
    href: "/industries/transportation",
    description:
      "Transportation has a range of different challenges regarding heat management. SP Coatings helps buses, trucks, aircraft, RV's and more. Independent tests have shown our coatings reduced refrigerated trailer fuel consumption. Super Therm® is also is used to stop heat transfer from engine mounts and much more.",
  },
  {
    name: "Warehouses",
    href: "/industries/warehouse",
    description:
      "Reduce the solar heat, save energy in your warehouse during summer. Here's some tips to help you save energy and increase your warehouse efficiency. Finding a way to save energy in warehouses during summer is an easy solution. Improve efficiency, reduce your emissions, create employee comfort and protect your assets. Super Therm® helps you work towards Net Zero Carbon emissions.",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>Home</Link>
            {" › "}
            <span style={{ color: "#888" }}>Industry Uses</span>
          </p>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "40px 0 20px" }}>
        <div className="container mx-auto px-4">
          <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "2em", marginBottom: "16px" }}>
            Industry Uses
          </h1>
          <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", maxWidth: "820px", marginBottom: "30px" }}>
            Many industries have different challenges and challenges regarding environment threats from heat,
            condensation, corrosion and fire. Each situation needs to be assessed before recommendations can be made
            regarding the use of our specialised coatings systems. Please contact us for your specific need, if you
            have questions or a requirement for your industry or business challenge. Our coatings have provided
            solutions worldwide for over 35 years.
          </p>

          {/* Quick nav tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
            {industries.map((ind) => (
              <a
                key={ind.href}
                href={`#${ind.href.split("/").pop()}`}
                style={{
                  background: "#f0f0f0",
                  color: "#333",
                  padding: "6px 14px",
                  borderRadius: "2px",
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1px solid #ddd",
                }}
              >
                {ind.name}
              </a>
            ))}
          </div>

          <hr style={{ border: "none", borderTop: "2px solid #CC2026", marginBottom: "40px" }} />
        </div>
      </div>

      {/* Industries list */}
      <section style={{ paddingBottom: "60px" }}>
        <div className="container mx-auto px-4">
          {industries.map((industry, i) => (
            <div
              key={industry.href}
              id={industry.href.split("/").pop()}
              style={{
                paddingBottom: "36px",
                marginBottom: "36px",
                borderBottom: i < industries.length - 1 ? "1px solid #e5e5e5" : "none",
              }}
            >
              <h3
                style={{
                  color: "#00578e",
                  fontWeight: "700",
                  fontSize: "1.15em",
                  marginBottom: "10px",
                }}
              >
                {industry.name}
              </h3>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "10px" }}>
                {industry.description}
              </p>
              <Link
                href={industry.href}
                style={{
                  color: "#CC2026",
                  fontWeight: "700",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                See More &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ApprovedAccredited />
    </div>
  );
}
