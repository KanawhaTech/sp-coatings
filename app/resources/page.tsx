import Link from "next/link";
import type { Metadata } from "next";
import ApprovedAccredited from "@/components/ApprovedAccredited";

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

const quickLinks = [
  { label: "Product & Application Videos", href: "/resources#videos" },
  { label: "Glossary", href: "/resources#glossary" },
  { label: "Industry Uses", href: "/industries" },
  { label: "SPI Coatings Conversions", href: "/resources#conversions" },
  { label: "Temperature & Area Conversions", href: "/resources#conversions" },
  { label: "Distributors", href: "/distributors" },
  { label: "SDS, Tech & Application Sheet", href: "/contact" },
  { label: "Super Therm Testing & Results", href: "/coating-products/super-therm" },
  { label: "Gallery", href: "/projects" },
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

        <hr style={{ border: "none", borderTop: "2px solid #CC2026", marginBottom: "24px" }} />

        {/* Quick links */}
        <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "50px" }}>
          {quickLinks.map((link) => (
            <li key={link.label} style={{ marginBottom: "8px" }}>
              <Link
                href={link.href}
                style={{
                  color: "#00578e",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Glossary */}
        <div id="glossary" style={{ marginBottom: "50px" }}>
          {glossary.map((section) => (
            <div key={section.letter} style={{ marginBottom: "24px" }}>
              <h3
                style={{
                  color: "#00578e",
                  fontWeight: "800",
                  fontSize: "1.1em",
                  borderBottom: "1px solid #e5e5e5",
                  paddingBottom: "6px",
                  marginBottom: "14px",
                }}
              >
                {section.letter}
              </h3>
              {section.terms.map((item) => (
                <div key={item.term} style={{ marginBottom: "14px" }}>
                  <p style={{ color: "#333", fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>
                    {item.term}
                  </p>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "14px",
                      lineHeight: "1.8",
                      margin: 0,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Conversions */}
        <div id="conversions" style={{ marginBottom: "50px" }}>
          <h2
            style={{
              color: "#00578e",
              fontWeight: "800",
              fontSize: "1.2em",
              marginBottom: "20px",
            }}
          >
            Metric / Imperial Conversion Charts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Celsius to Fahrenheit */}
            <div
              style={{
                background: "#f7f7f7",
                border: "1px solid #e5e5e5",
                padding: "20px",
                borderTop: "3px solid #CC2026",
              }}
            >
              <h3
                style={{
                  color: "#00578e",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                Degrees Celsius to Fahrenheit
              </h3>
              <p style={{ color: "#444", fontSize: "13px", lineHeight: "1.8", fontFamily: "monospace" }}>
                °F = ( °C * [ 9 / 5 ] ) + 32
                <br />
                °C = ( °F – 32 ) * ( 5 / 9 )
              </p>
            </div>

            {/* Mils to Microns */}
            <div
              style={{
                background: "#f7f7f7",
                border: "1px solid #e5e5e5",
                padding: "20px",
                borderTop: "3px solid #CC2026",
              }}
            >
              <h3
                style={{
                  color: "#00578e",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                Mils to Microns
              </h3>
              <p style={{ color: "#444", fontSize: "13px", lineHeight: "1.8" }}>
                1 mil = 25.4 microns
                <br />
                1 micron = 0.03937 mils
              </p>
            </div>

            {/* Square Feet to Square Meters */}
            <div
              style={{
                background: "#f7f7f7",
                border: "1px solid #e5e5e5",
                padding: "20px",
                borderTop: "3px solid #CC2026",
              }}
            >
              <h3
                style={{
                  color: "#00578e",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                Square Feet to Square Meters
              </h3>
              <p style={{ color: "#444", fontSize: "13px", lineHeight: "1.8" }}>
                1 m² = 10.76 ft²
                <br />
                1 ft² = 0.3048 m²
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
