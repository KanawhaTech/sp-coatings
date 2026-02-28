import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coating Products - SP Coatings",
  description: "Explore SP Coatings full range of thermal insulation, corrosion, fire, sealant and base coatings. Innovative coatings developed with NASA for 35+ years.",
};

const quickNav = [
  {
    category: "Thermal Insulation Coatings",
    anchor: "#thermal-insulation",
    products: [
      { name: "Super Therm®", anchor: "#super-therm" },
      { name: "Sunshield", anchor: "#sunshield" },
      { name: "HPC® Coating", anchor: "#hpc-coating" },
      { name: "HPC®-INT Coating", anchor: "#hpc-int-coating" },
      { name: "HPC®-HT Coating", anchor: "#hpc-ht-coating" },
      { name: "HSC™ Coating", anchor: "#hsc-coating" },
      { name: "SP Texture Coat", anchor: "#sp-texture-coat" },
    ],
  },
  {
    category: "Fire Coating",
    anchor: "#fire-coating",
    products: [{ name: "Omega Fire™", anchor: "#omega-fire" }],
  },
  {
    category: "Corrosion Coatings",
    anchor: "#corrosion-coatings",
    products: [
      { name: "Rust Grip®", anchor: "#rust-grip" },
      { name: "Moist Metal Grip", anchor: "#moist-metal-grip" },
    ],
  },
  {
    category: "Sealant Coatings",
    anchor: "#sealant-coatings",
    products: [
      { name: "Enamo Grip®", anchor: "#enamo-grip" },
      { name: "Enamo Grip 5000®", anchor: "#enamo-grip-5000" },
      { name: "Lining Kote UHS", anchor: "#lining-kote-uhs" },
      { name: "SP APC Strippable", anchor: "#sp-apc-strippable" },
      { name: "SP Interlock", anchor: "#sp-interlock" },
    ],
  },
  {
    category: "Base Coatings",
    anchor: "#base-coatings",
    products: [
      { name: "SP Liquid Membrane®", anchor: "#sp-liquid-membrane" },
      { name: "SP Seal Coat", anchor: "#sp-seal-coat" },
      { name: "SP Seal Coat HT", anchor: "#sp-seal-coat-ht" },
      { name: "Super Base HS", anchor: "#super-base" },
    ],
  },
];

type Product = {
  id: string;
  name: string;
  logo?: string;
  subtitle: string;
  description: string;
  href: string;
};

type Section = {
  id: string;
  category: string;
  products: Product[];
};

const sections: Section[] = [
  {
    id: "thermal-insulation",
    category: "Thermal Insulation Coatings",
    products: [
      {
        id: "super-therm",
        name: "Super Therm®",
        logo: "/images/products/Super-Therm-Heat-Block-logo-colour-1024x209.png",
        subtitle: "Ceramics Heat Reduction Insulation Coating – Reduces much of the Total Solar Heat absorption",
        description:
          "Super Therm® is the only NASA collaborated insulation coating in the world. It is a water-borne combination of high-performance aliphatic urethanes, elastomeric acrylics, and resin additives which produces a tough, yet flexible coating film that's been protecting the planet since 1989 from the sun's harsh heat. Designed for performance and durability, Super Therm® contains 4 unique ceramics to reduce the total solar radiational heat entering a structure from Visual Light, Ultra Violet (UV), and Infrared (IR). Super Therm® is a flexible membrane with low permeability that can greatly reduce expansion and contraction of a roof (eliminate thermal shock) and prevents corrosion and surface deterioration as well as reduce carbon emissions through less power consumption to remain cool.",
        href: "/coating-products/super-therm",
      },
      {
        id: "sunshield",
        name: "Sunshield",
        subtitle: "More than just a Heat Reflective White Paint – Sunshield is not developed, designed, or intended for commercial and industrial use",
        description:
          "Sunshield is a water-borne combination of high-performance duo of elastomeric acrylics and resin additives, which produces a tough, yet flexible coating film. It combines four different ceramics that provide both heat reflectivity and heat-reducing properties. Sunshield is a flexible membrane with low permeability that can greatly reduce expansion and contraction of a roof. Sunshield's blend of resin additives produce a flexible coating membrane that can be applied directly to any surface. It also prevents corrosion and surface deterioration. Although durable and offering solar blocking performance, Sunshield does not give the same benefits as Super Therm®.",
        href: "/coating-products/sunshield",
      },
      {
        id: "hpc-coating",
        name: "HPC® Coating",
        logo: "/images/products/HPC-Coating-logo.jpg",
        subtitle: "Get \u201cHigh\u201d Heat Insulation and Protection that Stops CUI",
        description:
          "HPC® Coating, HPC®-INT Coating and HPC®-HT Coating is a single component water-based coating designed to insulate hot pipes or surfaces that load up to 650°C. The coating is not a reflective coating but an insulation coating and works to block or hold the loading of higher heats and to resist the transfer of heat through the coating to the cooler side. Once coated, the surface should be equal to the interior temperature.\n\n• HPC® Coating – Ambient up to 204°C / 400°F\n• HPC®-INT Coating – 204°C / 400°F up to 426°C / 800°F\n• HPC®-HT Coating – 426°C / 800°F up to 650°C / 1200°F",
        href: "/coating-products/hpc-coating",
      },
      {
        id: "hpc-int-coating",
        name: "HPC®-INT Coating",
        subtitle: "Internal hot pipe coating for surfaces operating 204°C to 426°C",
        description:
          "HPC®-INT Coating is designed for high-temperature internal pipe insulation applications operating between 204°C / 400°F and 426°C / 800°F. Part of the HPC® Coating family, it provides the same live-application advantage and CUI prevention for medium to high temperature process environments.",
        href: "/coating-products/hpc-int-coating",
      },
      {
        id: "hpc-ht-coating",
        name: "HPC®-HT Coating",
        subtitle: "High-temperature pipe coating for surfaces up to 650°C / 1200°F",
        description:
          "HPC®-HT Coating has been successfully applied to hot pipe surfaces around 650°C. Designed for the most demanding thermal applications in power generation, petrochemical and heavy industry, HPC®-HT extends the HPC® Coating range to the highest temperature applications. No plant shutdown required.",
        href: "/coating-products/hpc-ht-coating",
      },
      {
        id: "hsc-coating",
        name: "HSC™ Coating",
        logo: "/images/products/HSC-Coating-colour-logo.png",
        subtitle: "Get \u201cHigh\u201d Heat Protection that Surpasses Conventional Insulation",
        description:
          "HSC® Coating is designed to control heat transfer on surface temperatures up to 350°F / 176°C. It is water-borne, and extremely lightweight and smooth in appearance. HSC® Coating uses a special acrylic resin blend with specific ceramic compounds added to provide a non-conductive block against heat transfer. HSC® Coating offers a \"Green\", non-flammable, non-toxic formula for medium heat surface applications over standard steam pipe or oven wall construction. It can be applied over metal, concrete, wood, and other substrates.",
        href: "/coating-products/hsc-coating",
      },
      {
        id: "sp-texture-coat",
        name: "SP Texture Coat",
        subtitle: "High-performance textured ceramic coating for breathability, adhesion, flexibility and toughness",
        description:
          "SP Texture Coat is a mixture of high-performance ceramics and acrylics specially blended for breathability, adhesion, flexibility, and toughness. Additional lightweight aggregate compound is added into the formulation to ensure a texture while having added characteristics not found in standard dry mix ratios of stucco. SP Texture Coat is tested to show a low permeability and is not affected by water or moisture-penetration. It is designed to stay down for a long bonding life. It will not crack and peel. It is UV-protected for long life and durability whether in hot or cool climates, or whether in high humidity or very dry environments.",
        href: "/coating-products/sp-texture-coat",
      },
    ],
  },
  {
    id: "fire-coating",
    category: "Fire Coating",
    products: [
      {
        id: "omega-fire",
        name: "Omega Fire™",
        logo: "/images/products/Omega-Fire-logo.png",
        subtitle: "A Coating Designed to Withstand 1200°C Direct Flame and Heat Transfer",
        description:
          "Omega Fire is a single component coating having a blend of seven different ceramics combined in a water-based, acrylic/hybrid modified silicone formula to create a barrier against extreme flame impingement and heat migration. The coating can withstand direct flame up to 2200°F / 1204°C by hardening on the surface at first contact, while continuing to provide the necessary insulation value. The resin blend binds the compounds together and forms a char causing a matrix with the ceramics across the face of the coating, facing the flame. Omega Fire is designed to stay intact with constant adhesion at extreme temperatures, while remaining flexible.",
        href: "/coating-products/omega-fire",
      },
    ],
  },
  {
    id: "corrosion-coatings",
    category: "Corrosion Coatings",
    products: [
      {
        id: "rust-grip",
        name: "Rust Grip®",
        logo: "/images/products/Rust-Grip-logo.jpg",
        subtitle: "The World's Toughest Encapsulation Coating",
        description:
          "Rust Grip® is a single component urethane formula applied directly to rust or blasted metal surfaces. 6780 psi surface tensile strength. Pull test results in the field and lab average 1200 psi and in the field over blasted surface at 2200 psi. Extremely tough, anchors itself inside the pores of the metal surface or surface rust to block moisture and air from developing corrosion. Simple to use and extremely effective against all corrosive environments. Applied only to completely dry surfaces.",
        href: "/coating-products/rust-grip",
      },
      {
        id: "moist-metal-grip",
        name: "Moist Metal Grip",
        subtitle: "The Ideal Protection in Harsh, Wet Environments",
        description:
          "Moist Metal Grip is a two-part epoxy coating system that has been specifically designed with specific additives to promote adhesion when used on metal. Moist Metal Grip was developed to be applied to metal surfaces that cannot be dry enough to use Rust Grip®. It can be used directly to wet or damp metal surfaces and maintain excellent adhesion to prevent further surface corrosion. It is a water repelling epoxy for use under water or in areas where constant splashing or condensation is a problem. It is resistant to chemicals and solvents, and is designed to be applied directly to concrete, masonry and wood.",
        href: "/coating-products/moist-metal-grip",
      },
    ],
  },
  {
    id: "sealant-coatings",
    category: "Industrial Sealant Coatings",
    products: [
      {
        id: "enamo-grip",
        name: "Enamo Grip®",
        subtitle: "The Ultimate Protection Coating",
        description:
          "Enamo Grip is a two-part aliphatic polyurethane enamel available in clear and colors. It forms a uniquely hard and durable coating film, which demonstrates unsurpassed semi-gloss and color retention, as well as chalk resistance when used in exterior applications. It is resistant to water and humidity, stains, acids, solvents, and chemicals, as well as having tremendous scuff, mar and impact resistance. Enamo Grip will self-level to an even and smooth finish.",
        href: "/coating-products/enamo-grip",
      },
      {
        id: "enamo-grip-5000",
        name: "Enamo Grip 5000®",
        subtitle: "High solids coating for protection against vapors, acid rain and harsh chemical environments",
        description:
          "Enamo Grip 5000 is a two component polyester high solids coating for protection against vapors, acid rain, and other harsh chemical environments while giving a car-like finish and UV protection. Can withstand Skydrol® hydraulic fluids used in aircraft when applied to flooring. Available in clear and custom colors.",
        href: "/coating-products/enamo-grip-5000",
      },
      {
        id: "lining-kote-uhs",
        name: "Lining Kote UHS",
        logo: "/images/products/Lining-Kote-logo.png",
        subtitle: "Protect Against the Harshest Acids, Chemicals and Solvents",
        description:
          "Lining Kote UHS is a two-part pigmented epoxy coating, which will produce a hard, tough coating film. Designed for use on the interior of tanks, this epoxy coating was built to resist the toughest acid, chemical or solvent environments. Lining Kote UHS has outstanding adhesion and can withstand direct impact. It is resistant to water, humidity and high heat. Lining Kote UHS is made with a high molecular weight base and cure for strength and durability.",
        href: "/coating-products/lining-kote-uhs",
      },
      {
        id: "sp-apc-strippable",
        name: "SP APC Strippable",
        subtitle: "Temporary surface protection — strippable on demand",
        description:
          "APC Strippable Base is a single component, water-based coating designed to be a strippable base for bare or painted metal, painted concrete, masonry, high-density plastic and wood. It offers a dual ability to adhere to a surface and to have a top-coat applied, while allowing itself to be sliced to break the surface tension and be removed months or years later.",
        href: "/coating-products/sp-apc-strippable",
      },
      {
        id: "sp-interlock",
        name: "SP Interlock",
        logo: "/images/products/sp-interlock-logo-spi-neotech-coatings.png",
        subtitle: "Stone and Concrete Sealant — Perfect for Treating Salt Damp",
        description:
          "SP Interlock is a concrete \"conditioner\" for use on aged and weathered concrete. It is a combination of non-acidic water-soluble agents, which penetrate through the open pores. Once absorbed, SP Interlock works to replace lost solids within a concrete surface before being over-coated with Rust Grip®, Enamo Grip, or other coatings.",
        href: "/coating-products/sp-interlock",
      },
    ],
  },
  {
    id: "base-coatings",
    category: "Base Coatings",
    products: [
      {
        id: "sp-liquid-membrane",
        name: "SP Liquid Membrane®",
        subtitle: "Tough elastomeric waterproofing membrane loaded with ceramic pigment",
        description:
          "SP Liquid Membrane is a tough, one-part elastomeric hydrocarbon rubber compound coating that is loaded with a ceramic pigment for strength. Upon curing, SP Liquid Membrane provides a protective coating film of superior adhesion and flexibility, and is resistant to abrasion and impact. SP Liquid Membrane can be used as a primer, as a one-coating system or as a topcoat to seal Super Therm® from ponding water. It can be applied over pressure-washed substrate of TPO, EPDM, PVC, wood, concrete or metal.",
        href: "/coating-products/sp-liquid-membrane",
      },
      {
        id: "sp-seal-coat",
        name: "SP Seal Coat",
        subtitle: "High-performance elastomeric topcoat — resists ponding water, mold and mildew",
        description:
          "SP Seal Coat is a one component coating that combines three high performance water-borne resins. The coating is designed using a high quality elastomeric and a self-cross-linking resin system for long life and weathering, as well as against water that ponds, and having good dirt release. SP Seal Coat is used as a topcoat over Super Therm®, HPC® Coating or other base materials. It remains flexible and is resistant to mold and mildew. SP Seal Coat can be applied over most firmly bonded paints or foams.",
        href: "/coating-products/sp-seal-coat",
      },
      {
        id: "sp-seal-coat-ht",
        name: "SP Seal Coat HT",
        subtitle: "High-temperature topcoat over HPC® Coating up to 500°F / 260°C",
        description:
          "SP Seal Coat HT is a single-component hybrid resin, water-based coating using specific ceramic loads for application directly over HPC® Coating to seal and face up to 500°F / 260°C. It was designed to provide a seal for HPC® Coating to block water/moisture absorption and seal the surface. SP Seal Coat HT offers a \"green\", nonflammable, non-toxic formula for surface applications. It will give additional protection for CUI development.",
        href: "/coating-products/sp-seal-coat-ht",
      },
      {
        id: "super-base",
        name: "Super Base HS",
        subtitle: "Used to Fill and Seal Cracks and Breaks in the Roof Substrate",
        description:
          "Super Base HS is a one-part water-based acrylic coating that is easily applied without environmental concerns, and used as a base coat for either Super Therm® or Sunshield. Super Base HS can be used as a base coat to seal tar, asphalt, shingles, rubber, concrete, or wood roofs.",
        href: "/coating-products/super-base",
      },
    ],
  },
];

export default function CoatingProductsPage() {
  return (
    <div>
      {/* Barra azul superior */}
      <div style={{ background: "#203065", padding: "14px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ color: "#fff", fontWeight: "800", fontSize: "1.1em", margin: 0, textAlign: "center" }}>
            World&apos;s Coating Innovator™
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4" style={{ padding: "40px 16px" }}>
        {/* Título principal */}
        <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "2em", marginBottom: "30px" }}>
          Coating Products
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar — navegación rápida */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div style={{ position: "sticky", top: "80px", background: "#f7f7f7", border: "1px solid #e5e5e5", borderRadius: "4px", padding: "20px" }}>
              {quickNav.map((section) => (
                <div key={section.category} style={{ marginBottom: "18px" }}>
                  <a
                    href={section.anchor}
                    style={{ display: "block", color: "#CC2026", fontWeight: "700", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px", textDecoration: "none", marginBottom: "6px" }}
                  >
                    {section.category}
                  </a>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {section.products.map((p) => (
                      <li key={p.anchor}>
                        <a
                          href={p.anchor}
                          style={{ display: "block", color: "#00578e", fontSize: "13px", fontWeight: "600", padding: "3px 0", textDecoration: "none", borderBottom: "1px solid #eee" }}
                        >
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="lg:col-span-3">
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "10px" }}>
              Since 1989 Super Therm was born from a NASA relationship. <strong>35 years of Super Therm excellence!</strong>
            </p>
            <p style={{ marginBottom: "30px" }}>
              <a
                href="#"
                style={{ display: "inline-block", background: "#CC2026", color: "#fff", fontWeight: "700", fontSize: "13px", padding: "8px 18px", borderRadius: "2px", textDecoration: "none" }}
              >
                SDS, Tech &amp; Application Sheets
              </a>
            </p>

            {sections.map((section) => (
              <div key={section.id} id={section.id} style={{ marginBottom: "50px" }}>
                {/* Section heading */}
                <h1
                  style={{
                    color: "#fff",
                    background: "#203065",
                    padding: "12px 20px",
                    fontSize: "1.3em",
                    fontWeight: "800",
                    marginBottom: "0",
                    borderRadius: "2px 2px 0 0",
                  }}
                >
                  {section.category}
                </h1>

                <div style={{ border: "1px solid #e5e5e5", borderTop: "none", borderRadius: "0 0 2px 2px" }}>
                  {section.products.map((product, idx) => (
                    <div key={product.id}>
                      <div
                        id={product.id}
                        style={{
                          padding: "28px 24px",
                          background: idx % 2 === 0 ? "#fff" : "#fafafa",
                        }}
                      >
                        {/* Logo */}
                        {product.logo && (
                          <div style={{ marginBottom: "14px" }}>
                            <Image
                              src={product.logo}
                              alt={`${product.name} logo`}
                              width={280}
                              height={70}
                              style={{ height: "56px", width: "auto", objectFit: "contain", objectPosition: "left" }}
                            />
                          </div>
                        )}

                        {/* Product name */}
                        <h2
                          style={{
                            color: "#00578e",
                            fontWeight: "800",
                            fontSize: "1.3em",
                            marginBottom: "4px",
                          }}
                        >
                          {product.name}
                        </h2>

                        {/* Subtitle */}
                        <h4
                          style={{
                            color: "#555",
                            fontWeight: "600",
                            fontSize: "13px",
                            marginBottom: "12px",
                            fontStyle: "italic",
                          }}
                        >
                          {product.subtitle}
                        </h4>

                        {/* Description */}
                        <div style={{ marginBottom: "14px" }}>
                          {product.description.split("\n").map((line, i) =>
                            line.startsWith("•") ? (
                              <p key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", paddingLeft: "12px", margin: "2px 0" }}>
                                {line}
                              </p>
                            ) : (
                              <p key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "6px" }}>
                                {line}
                              </p>
                            )
                          )}
                        </div>

                        {/* More Info link */}
                        <Link
                          href={product.href}
                          style={{
                            color: "#CC2026",
                            fontWeight: "700",
                            fontSize: "13px",
                            textDecoration: "none",
                          }}
                        >
                          More Info &gt;
                        </Link>
                      </div>

                      {/* Separator */}
                      {idx < section.products.length - 1 && (
                        <hr style={{ margin: "0", border: "none", borderTop: "1px solid #e0e0e0" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
