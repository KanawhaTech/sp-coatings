export interface Slide {
  image: string;
  label: string;
  title: string;
  subtitle: string;
  href: string;
}

export const slides: Slide[] = [
  {
    image: "/images/project-hoover-dam.jpg",
    label: "INFRASTRUCTURE",
    title: "Award Winning Coatings Hoover Dam",
    subtitle: "Protecting critical infrastructure with proven performance",
    href: "/industries/infrastructure",
  },
  {
    image: "/images/marine-industry.jpg",
    label: "MARINE",
    title: "Protect The Toughest Environments",
    subtitle: "Superior corrosion protection for marine applications",
    href: "/industries/marine",
  },
  {
    image: "/images/project-japan.jpg",
    label: "INDUSTRIAL COMMERCIAL",
    title: "10.3 million m² across Japan",
    subtitle: "Trusted by industry leaders worldwide",
    href: "/industries/commercial-industrial",
  },
  {
    image: "/images/project-oilfield.jpg",
    label: "ENERGY & MINING",
    title: "Reduce Energy Loss and CO₂",
    subtitle: "Innovative thermal insulation coating solutions",
    href: "/industries/energy-mining",
  },
  {
    image: "/images/pipe-insulation.jpg",
    label: "HEAVY INDUSTRY / OIL GAS ENERGY",
    title: "Hot Pipe Coating up to 650°C",
    subtitle: "Live application on operating equipment",
    href: "/coating-products/hpc-coating",
  },
  {
    image: "/images/nasa-research.jpg",
    label: "SCIENTIFIC RESEARCH",
    title: "Developed with NASA since 1989",
    subtitle: "Six years of joint research producing world-class coatings",
    href: "/about",
  },
  {
    image: "/images/project-casino-boat.jpg",
    label: "MARINE",
    title: "World's Largest Casino Boat",
    subtitle: "Complete corrosion and thermal coating solution",
    href: "/industries/marine",
  },
];
