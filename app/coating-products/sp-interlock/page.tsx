import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SP Interlock: Anti-Slip Coating - SP Coatings",
  description: "SP Interlock is a reactive sealer for stone and concrete — perfect for treating salt damp. Penetrates from inside out to restore and seal aged concrete.",
};

export default function SpInterlockPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>Home</Link>
            {" › "}
            <Link href="/coating-products" style={{ color: "#00578e", textDecoration: "none" }}>Coating Products</Link>
            {" › "}
            <span style={{ color: "#888" }}>SP Interlock</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4" style={{ padding: "40px 16px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div style={{ background: "#f7f7f7", border: "1px solid #e5e5e5", borderRadius: "4px", padding: "20px", marginBottom: "20px" }}>
              <h3 style={{ color: "#CC2026", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                Resources
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "8px", marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#00578e", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                    Product Documents
                  </a>
                </li>
                <li>
                  <a href="#spread-rate" style={{ color: "#00578e", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                    SP Interlock Spread Rate
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA box */}
            <div style={{ background: "#CC2026", borderRadius: "4px", padding: "20px", textAlign: "center" }}>
              <h3 style={{ color: "#fff", fontWeight: "800", fontSize: "1em", marginBottom: "10px" }}>
                Make an Enquiry
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", marginBottom: "14px" }}>
                SP Coatings the home of Super Therm®, Rust Grip® and HPC®!
              </p>
              <Link href="/contact" style={{ display: "block", background: "#fff", color: "#CC2026", fontWeight: "700", fontSize: "13px", padding: "9px", borderRadius: "2px", textDecoration: "none" }}>
                CONTACT US
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3">

            {/* Logo + Title */}
            <div style={{ marginBottom: "6px" }}>
              <Image
                src="/images/products/sp-interlock-logo-spi-neotech-coatings.png"
                alt="SP Interlock logo"
                width={280}
                height={70}
                style={{ height: "56px", width: "auto", objectFit: "contain", objectPosition: "left" }}
              />
            </div>

            <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "2em", marginBottom: "4px" }}>
              SP Interlock
            </h1>
            <h2 style={{ color: "#555", fontWeight: "600", fontSize: "1.1em", marginBottom: "20px" }}>
              Stone and Concrete Sealant…perfect for treating salt damp
            </h2>

            <hr style={{ border: "none", borderTop: "2px solid #CC2026", marginBottom: "24px" }} />

            <p style={{ color: "#888", fontSize: "12px", fontWeight: "600", marginBottom: "20px" }}>
              Superior Products International II Inc. Certified Coating
            </p>

            {/* Main description */}
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
              <strong>SP Interlock® – is a reactive sealer</strong>, single component water-based coating containing a combination of non-acidic water-soluble agents, which penetrate through the open pores of aged concrete. <strong>SP Interlock®</strong> sets up a chemical reaction (within the substrate) with the salts and limes present. <strong>SP Interlock®</strong> purges the impurities and unlike other sealants, <strong>SP Interlock®</strong> works from the inside out. This is not a surface sealant. <strong>SP Interlock®</strong> works to replace solids lost by age and weathering to strengthen concrete and works great on fixing salt damp.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "24px" }}>
              Solves problems resulting from dusting, algae formation, soft concrete, loss of strength, spalling, sulfate and nitrate degradation, saponification (causes vinyl tiles, paint, polyurethane and epoxy coatings to peel off) or simple efflorescence (ordinary concrete disintegration). Used to seal concrete flooring, walls, blocks, pipes or other concrete substrates.
            </p>

            {/* Features table */}
            <div style={{ overflowX: "auto", marginBottom: "30px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "#203065", color: "#fff" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: "700" }}>Features</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: "700" }}>Characteristics</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: "700" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ease of application", "Product Chemistry", "Non-Acidic Water-Soluble Agents"],
                    ["Ease of removal", "Volume Solids", "3%"],
                    ["VOC Level", "38 g/L", ""],
                    ["Dry Time (at 70°F/21°C)", "4 to 12 hours", ""],
                    ["Full Cure", "7 days", ""],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f7f7f7" : "#fff", borderBottom: "1px solid #e5e5e5" }}>
                      <td style={{ padding: "10px 14px", color: "#444", fontWeight: "600" }}>{row[0]}</td>
                      <td style={{ padding: "10px 14px", color: "#444" }}>{row[1]}</td>
                      <td style={{ padding: "10px 14px", color: "#444" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* How does it work */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              How does SP Interlock® work?
            </h3>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "12px" }}>
              Where top coatings protect the top surfaces of concrete, <strong>SP Interlock®</strong> solves the problems of concrete from the inside out.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "12px" }}>
              All the action by <strong>SP Interlock®</strong> takes place deep down inside the concrete slab or structure instead of just on the surface. When <strong>SP Interlock®</strong> is sprayed or poured on the surface, it soaks deep into the concrete.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "12px" }}>
              When contact is made with the alkali and calcium ions inside the concrete, within eight seconds it solidifies into a cold permanent compound in the form of a gel, chemically changing the alkali forever. This gel expands and flows in all directions, filling the pores and hairline cracks, emulsifying any oil, acid, juice and other such foreign matter until it has been purged from inside the concrete, floating it to the top to be washed away.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "12px" }}>
              This is an excellent way to help remove most oil spills from porous concrete while sealing the concrete from any future seepage. The gel, which now fills the pores, starts to turn hard like the concrete itself. This hardening action reaches its maximum in about 30 – 90 days and will turn the surface stone hard.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "24px" }}>
              Since <strong>SP Interlock®</strong> deeply penetrates the concrete, the concrete is now sealed permanently from the inside, not just temporarily on the surface as achieved from other sealants resisting the penetration of destructive pollutants and stops moisture migration via capillary action. All of the action of <strong>SP Interlock®</strong> takes place down inside the concrete other than a possible surface whitening. Unless <strong>SP Interlock®</strong> is under chemical attack, it is inert and has an infinite life span.
            </p>

            {/* The ultimate for */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              The ultimate for:
            </h3>
            <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
              {[
                "Concrete sealing and restoration",
                "Preserves the life of concrete in high moisture",
                "High corrosion areas by preventing the concrete from deteriorating",
                "Tightens old weathered concrete",
                "Seals and preserves weathering concrete from acid rain, pollution, freeze / thaw cycles, repels mould and algae growth",
                "Enhances bonding of repairs, paint and floor coatings or mastics.",
              ].map((item, i) => (
                <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "4px" }}>{item}</li>
              ))}
            </ul>

            {/* Applications */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              SP Interlock® Applications
            </h3>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "12px" }}>
              <strong>SP Interlock®</strong> may be applied to stucco, concrete, brick, cement block, terrazzo, walls or floors, inside or outside, wet or dry, new or old. Surfaces must be clean and unpainted.
            </p>
            <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
              <strong>SP Interlock®</strong> will remove most grease and oil from concrete floors and will prevent future deterioration by normal causes. It will end chalking or dusting of concrete and crumbling of stucco. Additives included for mould and mildew inhibition, USDA certified penetration, freeze preventative, and improved blending for better penetration and sealing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ marginBottom: "24px" }}>
              <ul style={{ paddingLeft: "20px" }}>
                {[
                  "Concrete walls",
                  "Retains the natural non-slip surface of concrete",
                  "Stops concrete dusting or chalking",
                  "Stops mold and algae growth",
                  "Allows for low maintenance cleaning",
                  "Aids concrete curing",
                ].map((item, i) => (
                  <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8" }}>{item}</li>
                ))}
              </ul>
              <ul style={{ paddingLeft: "20px" }}>
                {[
                  "Stops alkali problems",
                  "Retards capillary seepage",
                  "Aids the floor covering trade",
                  "Aids the paint trade",
                  "Stops wall sweating problems",
                  "Prevents Radon transmission",
                ].map((item, i) => (
                  <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8" }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              SP Interlock® is ideal for:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ marginBottom: "30px" }}>
              {[
                [
                  "Retains the natural non-slip surface of concrete",
                  "Stops concrete dusting or chalking",
                  "Stops mould and algae growth",
                  "Allows for low maintenance cleaning",
                  "Aids concrete curing",
                  "Retards capillary seepage",
                  "Stops alkali problems",
                  "Aids the floor covering trade",
                  "Aids the paint trade",
                  "Stops wall sweating problems",
                ],
                [
                  "Prevents Radon transmission",
                  "Waterproofing basements",
                  "Sewage plants",
                  "Elevator shafts",
                  "Cisterns",
                  "Sealing patios and pools",
                  "Zoos and hatcheries",
                  "Plant floors",
                  "Sidewalks and driveways",
                  "Silos",
                  "Parking decks",
                ],
                [
                  "Roadways",
                  "Buildings",
                  "Bridges",
                  "Tunnels",
                  "Kennels",
                  "Granaries",
                  "Fertiliser facilities",
                  "Curbs",
                  "Gutters, etc.",
                ],
              ].map((col, ci) => (
                <ul key={ci} style={{ paddingLeft: "20px" }}>
                  {col.map((item, i) => (
                    <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8" }}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Physical Data */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              Physical Data
            </h3>
            <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
              {[
                "Solids: By weight 10%",
                "Solids: By volume 3%",
                "Dry Time: 4 hours on new concrete and 12 hours on old concrete / Overcoat window begins in 24 hours / Fully cures in 30 to 90 days",
                "Cures by chemical reaction",
                "Lead and Chromate free",
                "Spread rate: Ordinarily, 18.9 litres (5 gallon pail) covers 45m² with one application – dependent of substrate absorption",
                "Weight: 1.20kg per litre (10 lbs. per gallon)",
                "Vehicle Type: Water",
                "Shelf Life: up to 3 years unopened under appropriate storage conditions (see SDS)",
                "VOC Level: 58 grams per litre",
                "Colour: Opaque; Finish colour: Clear",
                "Coating cures from the inside of the concrete/stone out",
                "Inhibits mould and mildew",
                "Non-flammable and gives off zero toxic gasses",
                "Increases the density of concrete",
                "Resistant to mild concentrations of solvents, chemicals and acids",
                "58% treated water + 31% active ingredients",
                "Flammability / Toxic Fumes: 0; pH liquid: 11.1 / pH gel: 9; Odor: none",
                "Environmental hazards: None; Dilutant / Cleanup: water",
                "Freeze temperature: 0°F (32°C.); Boil = 230°F (110°C.); Harm, if frozen = none",
              ].map((item, i) => (
                <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8" }}>{item}</li>
              ))}
            </ul>

            {/* Spread Rate table */}
            <h3 id="spread-rate" style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              SP Interlock Application Spread Rate guide
            </h3>
            <div style={{ overflowX: "auto", marginBottom: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "#203065", color: "#fff" }}>
                    {["Product", "% solids by volume", "Microns DFT", "mm DFT", "Mils DFT", "Spread m²/litre", "Spread m²/gal", "Spread ft²/gal"].map((h) => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: "700", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "#f7f7f7", borderBottom: "1px solid #e5e5e5" }}>
                    <td style={{ padding: "10px 12px", color: "#00578e", fontWeight: "600" }}>SP Interlock</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>3.0</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>12.2</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>0.012</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>0.48</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>2.45</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>9.3</td>
                    <td style={{ padding: "10px 12px", color: "#444" }}>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ color: "#444", fontSize: "14px", marginBottom: "30px" }}>
              <strong>2 coats</strong> at the same DFT for <strong>new concrete</strong><br />
              <strong>3 coats</strong> at the same DFT for <strong>old concrete</strong>
            </p>

            {/* Performance Features */}
            <h3 style={{ color: "#00578e", fontWeight: "700", fontSize: "1.1em", marginBottom: "12px" }}>
              Performance Features
            </h3>
            <ol style={{ paddingLeft: "20px", marginBottom: "40px" }}>
              {[
                "Concrete samples treated with SP Interlock® show an increase in flexural strength up to 436% and in compression strength up to 142%. Samples absorb up to 85% less water by weight than untreated samples. Reduced dusting, stains, efflorescence and saponification.",
                "You can walk on the concrete surface immediately after the SP Interlock® has penetrated as all the action is inside the concrete.",
                "The normal penetration time for each application is 5 to 10 minutes.",
                "SP Interlock® reaction with the calcium Ions and alkali begins within eight seconds, becoming rock hard over the following 90 days.",
                "Pollutant purging can continue for a few hours up to a 7 days according to the amount and type of contaminants inside the concrete.",
                "Set time between application can vary from one hour to twelve hours according to the age and porosity of the concrete, as well as the amount of pollutant purging taking place.",
                "Spread rate: Ordinarily, 5 gallon (18.9 litres) will treat 45 square metres with one application. Much higher rates of coverage are frequently obtained. Obviously porous concrete block consumes more product.",
                "Stops chalking and dusting, reduces stains, efflorescence, and saponification.",
                "Strengthens and hardens old deteriorated concrete and adds many years of useful life, saving costly replacement.",
                "Strengthens, tightens, and seals deteriorating mortar between bricks and concrete blocks.",
                "It helps to form a better and lasting bond between old and new concrete. Stops rapid hydration from sub surface slab.",
                "Resists the penetration of all kinds of liquid pollutants.",
                "Resists cracking, crumbling and pitting related to salt erosion and freeze / thaw Spall.",
                "Actions and results are permanent.",
                "Stops paint from peeling off concrete and walls",
                "Please note: SP Interlock® won't stop hydrostatic pressure.",
              ].map((item, i) => (
                <li key={i} style={{ color: "#444", fontSize: "14px", lineHeight: "1.8", marginBottom: "6px" }}>{item}</li>
              ))}
            </ol>

            {/* Related products */}
            <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "24px" }}>
              <p style={{ color: "#888", fontSize: "13px", marginBottom: "10px", fontWeight: "600" }}>Related Products:</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { name: "Rust Grip®", href: "/coating-products/rust-grip" },
                  { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
                  { name: "SP Liquid Membrane®", href: "/coating-products/sp-liquid-membrane" },
                ].map((p) => (
                  <Link key={p.name} href={p.href} style={{ background: "#00578e", color: "#fff", padding: "8px 18px", borderRadius: "2px", textDecoration: "none", fontWeight: "600", fontSize: "13px" }}>
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>

    </div>
  );
}
