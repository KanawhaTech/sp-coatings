import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import NewsCarousel from "@/components/NewsCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import {
  productLogos,
  recentNews,
  globalStats,
  accreditations,
  videoResources,
} from "@/lib/data/home";
import { APP_NAME, APP_NAME_FULL, APP_TAGLINE } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      {/* ── Hero Slider ── */}
      <section style={{ position: "relative" }}>
        <HeroSlider />
      </section>

      {/* ── Welcome + Product Logo Grid ── */}
      <section style={{ padding: "60px 0 50px", background: "#fff" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 style={{ color: "#CC2026", fontSize: "1.7em", fontWeight: "800", marginBottom: "14px" }}>
            Welcome to {APP_NAME_FULL} - {APP_TAGLINE}
          </h1>
          <p style={{ fontSize: "14px", color: "#555", maxWidth: "820px", margin: "0 auto 40px", lineHeight: "1.8" }}>
            {APP_NAME} designs, formulates, and manufactures the world&apos;s most innovative coatings and solutions
            that solve major industrial problems. We help reduce energy usage, stop corrosion, give personal protection, and so much more.
          </p>

          {/* Product logos grid — 3×2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              maxWidth: "780px",
              margin: "0 auto 36px",
            }}
          >
            {productLogos.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`product-logo-item animate-fade-up delay-${(i + 1) * 100}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px 20px",
                  textDecoration: "none",
                  minHeight: "110px",
                }}
              >
                <div className="product-logo-img" style={{ position: "relative", width: "100%", height: "52px" }}>
                  <Image src={p.logo} alt={p.name} fill style={{ objectFit: "contain" }} />
                </div>
                <p style={{ color: "#777", fontSize: "11px", marginTop: "8px", lineHeight: "1.3", textAlign: "center" }}>
                  {p.tagline}
                </p>
              </Link>
            ))}
          </div>

          <Link href="/coating-products" className="btn-cta btn-cta-orange">
            FULL COATINGS RANGE
          </Link>
        </div>
      </section>

      {/* ── News / Coatings / Projects — 3 banner cards ── */}
      <section style={{ padding: "0 0 60px", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "8px" }}>
            {[
              { label: "News", image: "/images/news-bg.jpg", href: "/news" },
              { label: "Coatings", image: "/images/coatings-bg.jpg", href: "/coating-products" },
              { label: "Projects", image: "/images/projects-bg.jpg", href: "/projects" },
            ].map((card) => (
              <Link key={card.label} href={card.href} className="banner-card">
                <Image src={card.image} alt={card.label} fill style={{ objectFit: "cover" }} />
                <div className="banner-card-overlay">
                  <span style={{ color: "#fff", fontWeight: "800", fontSize: "1.5em", letterSpacing: "2px", textTransform: "uppercase" }}>
                    {card.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent News ── */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up" style={{ marginBottom: "40px" }}>
            <div className="section-accent" style={{ margin: "0 auto 12px" }} />
            <h2 style={{ color: "#CC2026", fontSize: "1.9em", fontWeight: "800", marginBottom: "8px" }}>
              Recent News
            </h2>
            <p style={{ color: "#777", fontSize: "14px" }}>Transforming the world with innovative coatings</p>
          </div>
          <NewsCarousel items={recentNews} />
        </div>
      </section>

      {/* ── Coatings Resource Center — YouTube videos ── */}
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up" style={{ marginBottom: "36px" }}>
            <div className="section-accent" style={{ margin: "0 auto 12px" }} />
            <h2 style={{ color: "#CC2026", fontSize: "1.9em", fontWeight: "800", marginBottom: "10px" }}>
              Coatings Resource Center
            </h2>
            <Link href="/resources" style={{ color: "#00578e", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}>
              More Videos and Resources →
            </Link>
          </div>
          <VideoCarousel items={videoResources} />
        </div>
      </section>

      {/* ── Thin Film / Thick Film Science ── */}
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <div className="container mx-auto px-4">
          {/* Headline */}
          <div style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "1.6em", fontWeight: "800", lineHeight: "1.3" }}>
              <span style={{ background: "#f99d22", color: "#fff", padding: "2px 8px", marginRight: "4px" }}>
                Thin Film. Thick Film. Real
              </span>
              <span style={{ color: "#CC2026" }}>Insulation Science Performance!</span>
            </h2>
          </div>

          {/* 2-column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                <strong>SP Coatings</strong> is the only insulation-coating manufacturer that developed both{" "}
                <strong>thin-film and thick-film ceramic systems</strong>, each engineered for a completely different heat-control function.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                Thin films are designed to <strong>block radiative</strong> heat at the surface.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                Thick films are designed to <strong>hold and control conducted heat</strong> on hot substrates.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                They are not interchangeable.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9" }}>
                No matter what a manufacturer claims, a thick coating cannot block radiative heat the way a properly engineered thin ceramic film can. The physics doesn&apos;t allow it.
              </p>
            </div>
            <div>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                Most insulation-coating suppliers only offer an average-performing thick film and market it as a universal solution. Industry is now discovering the limitation.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                Between 1989 and 1995, SP Coatings worked directly with <strong>NASA</strong> in a six-year research program led by the company&apos;s founder, focusing on ceramic compound behaviour. That work identified which ceramic structures function in thin films and which are required for thick insulation systems.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "14px" }}>
                That knowledge gap still exists today.
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9" }}>
                There is no other manufacturer with{" "}
                <strong style={{ color: "#00578e" }}>
                  <Link href="/about" style={{ color: "#00578e", textDecoration: "underline" }}>
                    37 years of continuous ceramic insulation research
                  </Link>
                </strong>{" "}
                producing coatings that perform exactly as claimed. Not four years. Not marketing hype. Proven performance, delivered for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Projects ── */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text left */}
            <div>
              <h2 style={{ color: "#CC2026", fontSize: "1.6em", fontWeight: "800", marginBottom: "10px" }}>
                Global Projects and Local Solutions
              </h2>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "12px" }}>
                Globally SPI products have transformed the planet offering multiple solutions to many challenges.{" "}
                <Link href="/projects" style={{ color: "#00578e", fontWeight: "600" }}>more projects &gt;</Link>
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginTop: "24px", flexWrap: "wrap" }}>
                {/* SPI Global logo */}
                <div style={{ position: "relative", width: "100px", height: "100px", flexShrink: 0 }}>
                  <Image src="/images/spi-global-logo.png" alt="SPI Global Distribution Network" fill style={{ objectFit: "contain" }} />
                </div>
                <p style={{ color: "#00578e", fontSize: "1em", fontWeight: "700", lineHeight: "1.7", flex: 1 }}>
                  Successfully used for over 35 years around the world including the USA, Canada, Japan, China, Europe, Middle East, South America, Africa…and Australia!{" "}
                  <Link href="/projects" style={{ color: "#CC2026", fontWeight: "700" }}>See our projects &gt;</Link>
                </p>
              </div>
            </div>

            {/* Stats right */}
            <div className="grid grid-cols-2 gap-4">
              {globalStats.map((stat, i) => (
                <div key={stat.label} className={`stat-card animate-count delay-${(i + 1) * 100}`}>
                  <div style={{ fontSize: "2.2em", fontWeight: "800", color: "#CC2026", marginBottom: "6px" }}>
                    {stat.label}
                  </div>
                  <div style={{ color: "#666", fontSize: "13px", fontWeight: "600" }}>
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approved & Accredited Coatings ── */}
      <section style={{ padding: "56px 0 64px", background: "#fff" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 style={{ color: "#CC2026", fontSize: "1.8em", fontWeight: "800", marginBottom: "28px" }}>
            Approved &amp; Accredited Coatings
          </h2>

          {/* Accreditation logos — imágenes reales */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px 28px",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            {accreditations.map((acc) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={acc.name}
                src={acc.logo}
                alt={acc.name}
                style={{ height: "60px", width: "auto", objectFit: "contain" }}
              />
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/coating-products"
            style={{
              background: "#f99d22",
              color: "#fff",
              padding: "14px 40px",
              fontWeight: "700",
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "1px",
              borderRadius: "4px",
              marginBottom: "36px",
            }}
          >
            FULL COATING RANGE
          </Link>

          {/* Product logos — imágenes originales, sin cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              gap: "24px 20px",
              maxWidth: "780px",
              margin: "0 auto",
              alignItems: "start",
            }}
          >
            {[
              { name: "Super Therm®", tagline: "Heat Neutralizer...Thermal Insulation Coating", logo: "/images/logo-super-therm.png", href: "/coating-products/super-therm" },
              { name: "Rust Grip®", tagline: "World's Toughest Encapsulation Coating", logo: "/images/logo-rust-grip.png", href: "/coating-products/rust-grip" },
              { name: "HPC® Coating", tagline: "Hot Pipe Insulation Coating", logo: "/images/logo-hpc-coating.png", href: "/coating-products/hpc-coating" },
              { name: "Enamo Grip®", tagline: "The Ultimate Protection Coating", logo: "/images/logo-enamo-grip.png", href: "/coating-products/enamo-grip" },
              { name: "Moist Metal Grip®", tagline: "Corrosion Protection in Moisture", logo: "/images/logo-moist-metal-grip.png", href: "/coating-products/moist-metal-grip" },
              { name: "HPC®-INT Coating", tagline: "Internal Pipe Thermal Insulation", logo: "/images/logo-hpc-int.png", href: "/coating-products/hpc-int-coating" },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "10px 0",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ maxWidth: "100%", height: "70px", objectFit: "contain", objectPosition: "left" }}
                />
                <p style={{ color: "#555", fontSize: "12px", marginTop: "8px", lineHeight: "1.4", textAlign: "left" }}>
                  {p.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
