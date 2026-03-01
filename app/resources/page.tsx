import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - SPI Coatings",
  description:
    "Product & Application Videos, Glossary, SPI Coatings Conversions, SDS, Tech & Application Sheets, Super Therm Testing & Results and more.",
};

const glossary = [
  {
    letter: "#",
    terms: [
      {
        term: '"0" Fire and Smoke Spread Rating',
        definition:
          "Coatings meeting these testing standards will not add to the spread of a flame. At extreme temperatures, they will begin to burn, but will stop when the heat source is removed.",
      },
    ],
  },
  {
    letter: "A",
    terms: [
      {
        term: "Airless Sprayer",
        definition:
          "A coating sprayer using high-pressure to force a liquid through a nozzle and onto a surface. Spraying provides the most even and consistent surface.",
      },
    ],
  },
  {
    letter: "B",
    terms: [
      {
        term: "Base and Curing Agent",
        definition:
          "Some coatings require the mixing of two chemicals (a base and a curing agent) to initiate the curing process. All epoxies and some polyurethanes are of this type.",
      },
      {
        term: "Batt Insulation",
        definition:
          "Includes fiberglass and mineral wool fibre, this is a type of insulation that comes in 'blankets' that are relatively simple to install and provide some R-value.",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        term: "Ceramic-Based",
        definition:
          "A coating using ceramics as a base material to give certain properties, such as reflectivity and heat blockage.",
      },
      {
        term: "Chalking",
        definition:
          "Unless UV controlled, many coatings will lose gloss and begin to 'chalk' in sunlight. Chalking is the formation of a powder on the surface of a paint film caused by disintegration of the binder during weathering. Epoxy coatings are particularly prone to chalking and must be over-coated, if used outdoors, with a UV controlled coating.",
      },
      {
        term: "Class A Fire Coating",
        definition:
          "Coatings meeting these testing standards will not add to the spread of a flame. At extreme temperatures, they will begin to burn, but will stop when the heat source is removed.",
      },
      {
        term: "Class A Fire Rating",
        definition:
          "Coatings meeting these testing standards will not add to the spread of a flame. At extreme temperatures, they will begin to burn, but will stop when the heat source is removed.",
      },
      {
        term: "Condensation",
        definition:
          "Condensation is the accumulation of water on surfaces as a result of temperature differences between the surface and the surrounding air. It is a factor of the temperature difference and the percentage of humidity in the air.",
      },
      {
        term: "Crosshatch Method",
        definition:
          "A method of spraying on coatings that involves one pass horizontally and then a second pass vertically over the same surface area to ensure complete coverage.",
      },
      {
        term: "Curing Agent",
        definition:
          "Some coatings require the mixing of two chemicals (a base and a curing agent) to initiate the curing process. All epoxies and some polyurethanes are of this type.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Dew Point",
        definition:
          "The temperature at which air must be cooled to reach saturation and begin to condense. As a surface cools, warm moist air is chilled and water vapour in the air condenses into droplets. The greater the difference between the surface temperature and the dew point, the drier is the air.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "Elastomeric",
        definition:
          "The elastic, rubber-like properties of a material that will stretch when pulled and will return relatively quickly to its original shape when released.",
      },
      {
        term: "Emulsifying",
        definition:
          "To form a suspension of very finely divided oily or resinous liquid in another (watery) liquid.",
      },
      {
        term: "Enamel",
        definition:
          "A paint that dries to a hard glossy finish. Technically, enamel is a colored varnish or high-gloss paint. Generally, the term is used for high quality, dirt-resistant paints that may have a sheen level from satin to glossy. These coatings are usually used for more demanding applications.",
      },
      {
        term: "Epoxy",
        definition:
          "A synthetic resin that cures or hardens by chemical reaction between components which are mixed together shortly before use. Epoxy coatings are extremely tough, durable and highly resistant to chemicals, abrasion, moisture and alcohol.",
      },
    ],
  },
  {
    letter: "F",
    terms: [
      {
        term: "Film Thickness",
        definition:
          "Thickness is usually measured in mils, microns, or millimeters. One mils = one thousand of an inch. The metric equivalent is a micron. One micron = one thousand of a millimeter.\nExamples:\n500 mils = ½ of an inch\n500 microns = ½ of a millimetre\n40 mils = 1 mm\nA business card is usually 8-10 mils thick",
      },
    ],
  },
  {
    letter: "H",
    terms: [
      {
        term: "Hopper Gun",
        definition: "Usually air assisted, it is a spray machine used for textured coatings.",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "Infrared (IR)",
        definition:
          "Light that is so red humans cannot see it. The long wave, electromagnetic radiation of radiant heat emitted by all hot objects. On the electromagnetic spectrum, it can be found between microwave radiation and visible light.",
      },
      {
        term: "Insulation Equivalent",
        definition:
          "Insulation Equivalent is a system developed to account for all three methods of heat transfer, especially with regard to reflective coatings. The Insulation Equivalent is simply a measure of how well a conventional insulation resists heat transfer through conduction only. The greater the value, the greater the ability of the insulation to resist and absorb conductive heat transfer. The Insulation Equivalent measures the value of a conventional insulation material (i.e. fibreglass or polyurethane foam). The Insulation Equivalent does not consider moisture absorption or air movement.",
      },
      {
        term: "Intumiscent",
        definition:
          "Coatings designed to expand and swell when contacted with flames, giving a greater volume and area to absorb heat and repel flames.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "Latex",
        definition:
          "A water emulsion of a synthetic rubber or plastic obtained by polymerization and used especially in coatings and adhesives. Generally non-toxic and easy to clean up.",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "Metallic-Based",
        definition:
          "A coating using metallics as a base material to give certain properties such as strength, longevity, and flexibility.",
      },
      {
        term: "Micron and Mils Thickness",
        definition:
          "Thickness is usually measured in mils. One mil = one thousand of an inch. The metric equivalent is a micron. One micron = one thousand of a millimeter.\nExamples:\n500 mils = ½ of an inch\n500 microns = ½ of a millimetre\n40 mils = 1 mm\nA business card is usually 8-10 mils thick",
      },
      {
        term: "Moisture-Cure",
        definition: "Coatings that use moisture from the air to maintain the curing process.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Polyurethane",
        definition:
          "Broad class of polymers noted for excellent abrasion and solvent resistance. Can be in solid or cellular form (formed/expanded). Often used as a chemical linkage in finishes, plastic parts and flexible parts. Polyurethane paints are known for their durability.",
      },
      {
        term: "Polyurethane Foam",
        definition:
          "A type of polyurethane that exists in cellular form. Commonly used as insulation in a sprayed-on or solid panel form.",
      },
      {
        term: "Pot Life",
        definition:
          "The time after which a two-part (or greater) coating can be applied to a surface, before enough of the chemical curing has occurred to compromise adhesion.",
      },
      {
        term: "Pot Sprayer",
        definition:
          "An air-assisted hand sprayer using a small container or 'pot' to contain the coating to be applied.",
      },
    ],
  },
  {
    letter: "R",
    terms: [
      {
        term: "Reefer",
        definition: "A refrigerated trailer.",
      },
      {
        term: "R-Value",
        definition:
          "The R-value is simply a measure of how well traditional insulation resists heat transfer through conduction only. The greater the value, the greater the ability of the insulation to resist and absorb conductive heat. The R-value does not consider moisture absorption or air movement.",
      },
      {
        term: "Resin",
        definition:
          "Any of a class of solid or semi-solid organic products of natural or synthetic origin, generally of high molecular weight with no definite melting point. The material that forms a hard film on the surface after the chemicals have evaporated. Acrylics and urethanes are the common resins used in water-base finishes.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Saponification",
        definition:
          "A chemical decomposition of a paint's binder from a substrate, by alkali and moisture (e.g., new concrete or fresh plaster). Saponified coatings may deteriorate, lose their adhesion, and become discoloured.",
      },
      {
        term: "Self-Leveling",
        definition:
          "While curing, self-leveling coatings will spread/even themselves out to a smooth finish, free of brush marks or similar rough spots.",
      },
    ],
  },
  {
    letter: "T",
    terms: [
      {
        term: "Thermal Shock",
        definition:
          "Thermal shock is the flexing and cracking of concrete due to rapid changes in temperature.",
      },
      {
        term: "Tip Size",
        definition:
          "The outlet size on a spray gun. Measured in inches or thousands of an inch.\nExample: Super Therm® requires a tip size of 0.029-0.032 inches, or 29-32 thousands.",
      },
      {
        term: "Two-Component",
        definition:
          "Some coatings require the mixing of two chemicals (a base and a curing agent) to initiate the curing process. All epoxies and some polyurethanes are of this type.",
      },
      {
        term: "Two-Part",
        definition:
          "Some coatings require the mixing of two chemicals (a base and a curing agent) to initiate the curing process. All epoxies and some polyurethanes are of this type.",
      },
    ],
  },
  {
    letter: "U",
    terms: [
      {
        term: "Urethanes",
        definition:
          "A type of binder used in coatings. Characterized by excellent flexibility, toughness, and chemical resistance.",
      },
      {
        term: "Ultraviolet (UV)",
        definition:
          "Short wavelength light that is beyond the visible spectrum at the violet end; rays of light that are invisible to the human eye but can damage objects, thus creating the need for UV-controlled coatings for outdoor use.",
      },
      {
        term: "Ultraviolet (UV) Controlled or Ultraviolet (UV) Protected",
        definition:
          "UV controlled coatings contain components that prevent the breakdown of the coating, due to the damaging effects of UV rays.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "Visual Light",
        definition:
          "The portion of the electromagnetic spectrum that can be detected by the human eye. It has a wavelength longer than ultraviolet light and shorter than x-rays.",
      },
      {
        term: "Visual Wavelength",
        definition:
          "The portion of the electromagnetic spectrum that can be detected by the human eye. It has a wavelength longer than ultraviolet light and shorter than x-rays.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "Water-Based or Water-Borne",
        definition:
          "Coatings that use water soluble components as carriers. Are generally easy to use and clean up.",
      },
    ],
  },
];

const glossaryTerms = glossary.flatMap((section) => section.terms);

const conversionData = [
  { from: "°C", to: "°F", formula: "(°C × 9/5) + 32", example: "25°C → 77°F" },
  { from: "°F", to: "°C", formula: "(°F − 32) × 5/9", example: "77°F → 25°C" },
  { from: "Mils", to: "Microns (µm)", formula: "mils × 25.4", example: "10 mils → 254 µm" },
  { from: "Microns (µm)", to: "Mils", formula: "µm ÷ 25.4", example: "254 µm → 10 mils" },
  { from: "m²", to: "ft²", formula: "m² × 10.764", example: "1 m² → 10.76 ft²" },
  { from: "ft²", to: "m²", formula: "ft² × 0.0929", example: "100 ft² → 9.29 m²" },
  { from: "L/m²", to: "m²/L", formula: "1 ÷ (L/m²)", example: "0.25 L/m² → 4 m²/L" },
  { from: "kg/m²", to: "lb/ft²", formula: "kg/m² × 0.2048", example: "1 kg/m² → 0.20 lb/ft²" },
];

export default function ResourcesPage() {
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
            <span style={{ color: "#888" }}>Resources</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4" style={{ padding: "40px 16px 60px" }}>
        <h1
          style={{
            color: "#00578e",
            fontWeight: "800",
            fontSize: "2em",
            marginBottom: "24px",
          }}
        >
          Resources
        </h1>
      </div>

      {/* Technical Data Sheets */}
      <section id="tds" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Technical Data Sheets
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Technical Data Sheets (TDS) for all SP Coatings products are available from your authorised SP Coatings distributor or by contacting SP Coatings directly. Each TDS includes full product specifications, application instructions, coverage rates and safety information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Super Therm® Solar Heat Block Coating",
              "Sunshield Heat Reflective Paint",
              "HPC® Hot Pipe Coating",
              "HPC®-INT Coating",
              "HPC®-HT Coating",
              "HSC™ Hot Surface Coating",
              "Rust Grip® Corrosion Encapsulation",
              "Moist Metal Grip",
              "Omega Fire™ Intumescent Coating",
              "Enamo Grip® Polyurethane",
              "Enamo Grip 5000® High Solids",
              "Lining Kote UHS Tank Lining",
              "SP APC Strippable",
              "SP Interlock Concrete Conditioner",
              "SP Liquid Membrane®",
              "SP Seal Coat",
              "SP Seal Coat HT",
              "SP Texture Coat",
              "Super Base HS",
            ].map((product) => (
              <div
                key={product}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid #e5e5e5",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <span style={{ color: "#333", fontSize: "13px", fontWeight: "600" }}>{product}</span>
                <Link
                  href="/contact"
                  style={{
                    color: "#CC2026",
                    fontSize: "12px",
                    fontWeight: "700",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Request →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guides */}
      <section id="guides" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Application Guides
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Proper surface preparation and application technique are critical to coating performance. SP Coatings application guides provide step-by-step instructions for each product and substrate type. Contact SP Coatings or your local distributor for product-specific application documentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Surface Preparation",
                description: "All surfaces must be clean, dry and free of loose material, oil and contaminants. SP Coatings products are surface-tolerant but perform best on well-prepared substrates. Refer to the individual product TDS for minimum surface preparation requirements.",
              },
              {
                title: "Application Methods",
                description: "Most SP Coatings products can be applied by brush, roller or airless spray. Coverage rates vary by product and substrate porosity. Always apply in the correct DFT (dry film thickness) as specified in the product TDS.",
              },
              {
                title: "Environmental Conditions",
                description: "Apply in dry conditions. Avoid application in rain, high humidity (above 85% RH) or on frozen surfaces. Substrate and air temperature should be within the ranges specified for each product. Do not apply if rain is expected within 4 hours.",
              },
              {
                title: "Multi-coat Systems",
                description: "Some SP Coatings applications require multi-coat systems — for example, Rust Grip® primer with Enamo Grip® topcoat, or Super Therm® with SP Seal Coat. Refer to the system specification sheet for inter-coat times and compatibility.",
              },
            ].map((guide) => (
              <div
                key={guide.title}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  borderLeft: "4px solid #CC2026",
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
                  {guide.title}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "15px", textAlign: "center" }}>
            Educational Videos
          </h2>
          <p style={{ color: "#555", fontSize: "1em", lineHeight: "1.8", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Watch SP Coatings educational videos covering product applications, scientific principles and real-world case studies. Visit the{" "}
            <a href="https://www.youtube.com/@spicoatings" target="_blank" rel="noopener noreferrer" style={{ color: "#CC2026", fontWeight: "700" }}>
              SP Coatings YouTube channel
            </a>{" "}
            for the full video library.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Advanced Ceramic Compounds to Block Heat", href: "https://youtu.be/P45tFzJvwLU", videoId: "P45tFzJvwLU" },
              { title: "History of SPI and Ceramics Thermal Coatings", href: "https://youtu.be/GzeRBhxcmT4", videoId: "GzeRBhxcmT4" },
              { title: "Rust Grip Workstrings SP Coatings", href: "https://youtu.be/bqXo_ZuqXGg", videoId: "bqXo_ZuqXGg" },
              { title: "Corrosion Encapsulation with Rust Grip Explained®", href: "https://youtu.be/gIWq87uotiY", videoId: "gIWq87uotiY" },
            ].map((video) => (
              <a
                key={video.videoId}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    gap: "0",
                    background: "#fff",
                  }}
                >
                  <div style={{ position: "relative", width: "160px", flexShrink: 0, background: "#000" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt={video.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ color: "#00578e", fontWeight: "700", fontSize: "14px", lineHeight: "1.5", margin: "0 0 8px" }}>
                      {video.title}
                    </p>
                    <span style={{ color: "#CC2026", fontWeight: "700", fontSize: "12px" }}>Watch on YouTube →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section id="qa" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {[
              {
                q: "Can Super Therm® be applied over existing paint?",
                a: "Yes. Super Therm® can be applied over most firmly bonded existing coatings. The surface should be clean, dry and in good condition. Loose or peeling paint must be removed before application. A spot test is recommended on unknown existing coatings.",
              },
              {
                q: "Can Rust Grip® be applied to a wet surface?",
                a: "Rust Grip® must be applied to completely dry surfaces. For wet or damp surfaces, use Moist Metal Grip — a two-part epoxy system specifically designed for wet or damp metal substrates, including underwater applications.",
              },
              {
                q: "How long does Super Therm® last?",
                a: "Super Therm® has been documented to maintain performance for over 30 years in real-world installations. The Hoover Dam installation and installations from the early 1990s in Japan are still performing. With a suitable topcoat such as SP Seal Coat or Enamo Grip®, service life is extended further.",
              },
              {
                q: "Can HPC® Coating be applied to a hot pipe without shutting down?",
                a: "Yes — this is a key advantage of HPC® Coating. It can be applied to pipes operating at up to 232°C (450°F) for HPC®, up to 426°C (800°F) for HPC®-INT, and up to 650°C (1200°F) for HPC®-HT. No plant shutdown is required.",
              },
              {
                q: "What is the difference between Super Therm® and Sunshield?",
                a: "Super Therm® is a premium commercial and industrial ceramic coating developed with NASA, containing 4 specific ceramic compounds that block solar heat across the UV, visual light and infrared spectrum. Sunshield is a simpler, cost-effective heat reflective paint for residential and light commercial use that provides good solar reflectance but does not deliver the same level of ceramic heat blocking performance as Super Therm®.",
              },
              {
                q: "Is SP Coatings the same as SPI Coatings?",
                a: "SP Coatings products are manufactured by Superior Products International II, Inc. (SPI), the original manufacturer and owner of all SP Coatings formulations. Our products are genuine SPI products supplied through authorised representatives displaying the SPI Authorised Logo.",
              },
              {
                q: "How do I know if I'm buying genuine SPI products?",
                a: "Genuine SPI COATING PRODUCTS can only be purchased from SPI Authorised Representatives displaying the SPI Authorised Logo on their website. If you are uncertain, contact SP Coatings directly to verify your supplier's authorised status.",
              },
              {
                q: "What is Corrosion Under Insulation (CUI)?",
                a: "CUI is corrosion that occurs on steel pipe and vessel surfaces beneath conventional pipe insulation. Moisture enters under the insulation cladding, creates a trapped humid environment, and accelerates corrosion — often unseen until pipe failure. HPC® Coating prevents CUI by replacing the jacketed insulation system with a monolithic ceramic coating directly applied to the pipe surface, eliminating the hidden space where moisture accumulates.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "20px 25px",
                  marginBottom: "12px",
                }}
              >
                <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1em", marginBottom: "10px" }}>
                  Q: {item.q}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
                  <strong>A:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Coatings Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  padding: "16px 20px",
                }}
              >
                <p style={{ color: "#333", fontWeight: "700", fontSize: "13px", marginBottom: "6px" }}>
                  {item.term}
                </p>
                <p
                  style={{
                    color: "#555",
                    fontSize: "13px",
                    lineHeight: "1.7",
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversions */}
      <section id="conversions" style={{ padding: "70px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <h2 style={{ color: "#00578e", fontSize: "2em", fontWeight: "800", marginBottom: "40px", textAlign: "center" }}>
            Coatings Conversions
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "#00578e", color: "#fff" }}>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>From</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>To</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>Formula</th>
                  <th style={{ padding: "15px 20px", textAlign: "left", fontWeight: "700" }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {conversionData.map((row, i) => (
                  <tr
                    key={row.from}
                    style={{ background: i % 2 === 0 ? "#fff" : "#f0f0f0", borderBottom: "1px solid #e5e5e5" }}
                  >
                    <td style={{ padding: "12px 20px", color: "#333", fontWeight: "600" }}>{row.from}</td>
                    <td style={{ padding: "12px 20px", color: "#333" }}>{row.to}</td>
                    <td style={{ padding: "12px 20px", color: "#555", fontFamily: "monospace" }}>{row.formula}</td>
                    <td style={{ padding: "12px 20px", color: "#555" }}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
