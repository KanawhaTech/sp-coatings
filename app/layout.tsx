import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "SPI Coatings - Energy Savings, Corrosion & Asset Protection",
  description: "SPI Coatings | Leading Thermal Insulation and Corrosion Coatings. The World's Coating Innovator™. Innovative coatings solutions for energy savings, corrosion protection and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
