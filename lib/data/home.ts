export interface CoatingCategory {
  title: string;
  description: string;
  image: string;
  href: string;
  products: string[];
}

export interface Industry {
  name: string;
  href: string;
  icon: string;
  svg: string;
}

export interface FeaturedProduct {
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

export interface NewsItem {
  title: string;
  href: string;
  date: string;
  category?: string;
  excerpt?: string;
  image?: string;
}

export interface Stat {
  label: string;
  sublabel: string;
}

export interface Resource {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Accreditation {
  name: string;
  logo: string;
  href?: string;
}

export const coatingCategories: CoatingCategory[] = [
  {
    title: "Thermal Insulation Coatings",
    description:
      "Reduce heat gain and loss, block solar radiation and lower energy costs with our advanced ceramic-based insulation coatings.",
    image: "/images/thermal-insulation.jpg",
    href: "/coating-products/super-therm",
    products: ["Super Therm®", "Sunshield", "HPC® Coating", "HSC™ Coating"],
  },
  {
    title: "Corrosion Coatings",
    description:
      "Unequalled corrosion protection for steel, metal and concrete. Penetrates rust and bonds directly to the substrate.",
    image: "/images/corrosion-coating.jpg",
    href: "/coating-products/rust-grip",
    products: ["Rust Grip®", "Moist Metal Grip"],
  },
  {
    title: "Fire Coating",
    description:
      "Intumescent fire protection coating that expands under heat to form an insulating char barrier, protecting structural steel.",
    image: "/images/fire-coating.jpg",
    href: "/coating-products/omega-fire",
    products: ["Omega Fire"],
  },
  {
    title: "Sealant Coatings",
    description:
      "High-performance sealant and protective coatings for chemical resistance, waterproofing and surface protection.",
    image: "/images/sealant-coating.jpg",
    href: "/coating-products/enamo-grip",
    products: ["Enamo Grip®", "Enamo Grip 5000®", "Lining Kote UHS"],
  },
  {
    title: "Base Coatings",
    description:
      "Foundation coatings that prepare surfaces for topcoat application and provide additional protection layers.",
    image: "/images/base-coating.jpg",
    href: "/coating-products/sp-liquid-membrane",
    products: ["SP Liquid Membrane®", "SP Seal Coat", "Super Base"],
  },
];

export const industries: Industry[] = [
  {
    name: "Agriculture",
    href: "/industries/agriculture",
    icon: "🌾",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6C15 6 8 14 8 24c0 4 1.5 8 4 11l4-4c-1.5-2-2-4.5-2-7 0-6.6 4.9-12 11-12s11 5.4 11 12c0 2.5-.5 5-2 7l4 4c2.5-3 4-7 4-11 0-10-7-18-16-18z" fill="currentColor"/><path d="M24 18v6M24 24l-4 4M24 24l4 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><rect x="10" y="36" width="28" height="4" rx="2" fill="currentColor" opacity="0.5"/></svg>`,
  },
  {
    name: "Architecture",
    href: "/industries/architecture",
    icon: "🏛️",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 38h32M24 10L10 22h28L24 10z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="22" width="4" height="16" fill="currentColor" opacity="0.7"/><rect x="22" y="22" width="4" height="16" fill="currentColor"/><rect x="30" y="22" width="4" height="16" fill="currentColor" opacity="0.7"/></svg>`,
  },
  {
    name: "Aviation",
    href: "/industries/aviation",
    icon: "✈️",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 20L28 24l-8-10H14l4 10-8 2v4l8-1 2 9h5l3-9 12 3c3 0 5-1.5 5-4s-2-4-5-4z" fill="currentColor"/></svg>`,
  },
  {
    name: "Commercial & Industrial",
    href: "/industries/commercial-industrial",
    icon: "🏭",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 38V20l10 6V20l10 6V14h12v24H8z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><rect x="28" y="26" width="5" height="7" fill="currentColor" opacity="0.6"/><rect x="14" y="26" width="5" height="7" fill="currentColor" opacity="0.6"/><path d="M8 38h32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  {
    name: "Construction",
    href: "/industries/construction",
    icon: "🏗️",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v32M20 8v32M12 16h8M12 24h8M12 32h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M24 24l14-10v26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40h32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  {
    name: "Cool & Cold Storage",
    href: "/industries/cool-cold-storage",
    icon: "❄️",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8v32M8 24h32M13 13l22 22M35 13L13 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="24" r="4" fill="currentColor"/><circle cx="24" cy="10" r="2" fill="currentColor"/><circle cx="24" cy="38" r="2" fill="currentColor"/><circle cx="10" cy="24" r="2" fill="currentColor"/><circle cx="38" cy="24" r="2" fill="currentColor"/></svg>`,
  },
  {
    name: "Energy & Mining",
    href: "/industries/energy-mining",
    icon: "⚡",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 8L14 26h12l-4 14L38 22H26L30 8z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  },
  {
    name: "Marine",
    href: "/industries/marine",
    icon: "🚢",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 30l4-14h24l4 14H8z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><path d="M16 16V10h8v6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M6 38c4 0 6-2 10-2s6 2 10 2 6-2 10-2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M24 10V6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  {
    name: "Defence & Military",
    href: "/industries/defence-military",
    icon: "🛡️",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6L10 12v12c0 9 6 16 14 18 8-2 14-9 14-18V12L24 6z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><path d="M17 24l5 5 9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    name: "Infrastructure",
    href: "/industries/infrastructure",
    icon: "🌉",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 34h36M6 34V22M42 34V22M6 22c0-8 6-14 18-14s18 6 18 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M24 8v14M15 22V34M33 22V34" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/></svg>`,
  },
  {
    name: "Residential",
    href: "/industries/residential",
    icon: "🏠",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 22L24 8l16 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18v20h24V18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="19" y="28" width="10" height="10" rx="1" fill="currentColor" opacity="0.6"/></svg>`,
  },
  {
    name: "Shipping Containers",
    href: "/industries/shipping-containers",
    icon: "📦",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="14" width="36" height="22" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M6 22h36M6 30h36M18 14v22M30 14v22" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.7"/></svg>`,
  },
  {
    name: "Transportation",
    href: "/industries/transportation",
    icon: "🚛",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14h28v18H4z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><path d="M32 20h8l4 6v6h-12V20z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><circle cx="12" cy="36" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="36" cy="36" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/></svg>`,
  },
  {
    name: "Warehouse",
    href: "/industries/warehouse",
    icon: "🏢",
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 38V18l18-10 18 10v20H6z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/><path d="M18 38V28h12v10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 24h36" stroke="currentColor" stroke-width="2" opacity="0.5"/></svg>`,
  },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "Super Therm®",
    tagline: "The World's #1 Thermal Insulation Coating",
    description:
      "Super Therm® has one of the world's highest total solar heat blocking ratings of 367 to 4 BTUs for a ceramic coating and thermal emittance of 0.91. Developed with NASA since 1989.",
    image: "/images/super-therm.jpg",
    href: "/coating-products/super-therm",
    color: "#00578e",
  },
  {
    name: "Rust Grip®",
    tagline: "Unequalled Corrosion Protection",
    description:
      "Rust Grip® is a single component, moisture-cured polyurethane that penetrates rust and encapsulates it. Works on wet, rusted or contaminated surfaces. Tested to 30,000+ hours salt spray.",
    image: "/images/rust-grip.jpg",
    href: "/coating-products/rust-grip",
    color: "#CC2026",
  },
  {
    name: "Enamo Grip®",
    tagline: "Superior Chemical & Abrasion Resistance",
    description:
      "Enamo Grip® is a two-component epoxy polyamide coating that provides excellent adhesion, chemical resistance and a high gloss finish for industrial and commercial applications.",
    image: "/images/enamo-grip.jpg",
    href: "/coating-products/enamo-grip",
    color: "#f99d22",
  },
];

export const recentNews: NewsItem[] = [
  {
    title: "Historical Resume: Over 175 years R&D experience with insulation and corrosion protection coatings",
    href: "/news/over-175-years-rd-experience",
    date: "2025",
    category: "Research & Development",
    image: "/images/below-grade-pipes.jpg",
  },
  {
    title: "NASA's 2024 Spinoff Magazine with Super Therm®",
    href: "/news/nasas-2024-spinoff-magazine-super-therm",
    date: "2025",
    category: "Awards & Recognition",
    image: "/images/nasa-spinoff-2024.jpg",
  },
  {
    title: 'Where Physics, Data and Science Combine to Revolutionize Insulation "Thin and Thick Film Insulation"',
    href: "/news/thin-and-thick-film-insulation-science",
    date: "2025",
    category: "Technical",
    image: "/images/physics-data-insulation.jpg",
  },
  {
    title: "Revolutionary Energy-Saving Game-Changer: Georgia Pacific's HPC® EPA ENERGY STAR Win",
    href: "/news/georgia-pacific-hpc-energy-star",
    date: "2024",
    category: "Case Study",
    image: "/images/georgia-pacific.jpg",
  },
  {
    title: "Super Therm® – Walkways Coated at Harry Reid International Airport in Las Vegas",
    href: "/news/super-therm-harry-reid-airport-las-vegas",
    date: "2025",
    category: "Project",
    image: "/images/las-vegas-airport.jpg",
  },
  {
    title: "SSPC Presentation Insulative Coatings Fit for Purpose By: Arin Shahmoradian",
    href: "/news/insulative-coatings-fit-for-purpose",
    date: "2024",
    category: "Industry",
    image: "/images/pipe-insulation.jpg",
  },
  {
    title: "Rust Grip® – Unequaled Corrosion Protection with Workstrings International",
    href: "/news/rust-grip-workstrings-corrosion-protection",
    date: "2025",
    category: "Case Study",
    image: "/images/workstrings-rust-grip.jpg",
  },
];

export const globalStats: Stat[] = [
  { label: "35+", sublabel: "Years of Experience" },
  { label: "10.3M m²", sublabel: "Coated in Japan alone" },
  { label: "50+", sublabel: "Countries worldwide" },
  { label: "100K+", sublabel: "Projects completed" },
];

export const resourceCenter: Resource[] = [
  {
    title: "Technical Data Sheets",
    description: "Download detailed technical data sheets for all SPI coating products.",
    icon: "📄",
    href: "/resources",
  },
  {
    title: "Application Videos",
    description: "Watch step-by-step application videos for proper coating techniques.",
    icon: "🎥",
    href: "/resources",
  },
  {
    title: "Case Studies & Projects",
    description: "Browse real-world projects demonstrating coating performance.",
    icon: "📊",
    href: "/projects",
  },
];

export const accreditations: Accreditation[] = [
  { name: "UL", logo: "/images/accreditation-sponsor-1.jpg" },
  { name: "NASA", logo: "/images/accreditation-sponsor-2.jpg" },
  { name: "JISC", logo: "/images/accreditation-sponsor-3.jpg" },
  { name: "FM Approved", logo: "/images/accreditation-sponsor-4.jpg" },
  { name: "FEU", logo: "/images/accreditation-sponsor-5.jpg" },
  { name: "Florida", logo: "/images/accreditation-sponsor-6.jpg" },
  { name: "Energy Star", logo: "/images/accreditation-sponsor-7.jpg" },
  { name: "CRRC", logo: "/images/accreditation-sponsor-8.jpg" },
  { name: "Home", logo: "/images/accreditation-sponsor-9.jpg" },
  { name: "UL Listed", logo: "/images/accreditation-sponsor-10.jpg" },
];

export interface ProductLogo {
  name: string;
  tagline: string;
  logo: string;
  href: string;
}

export const productLogos: ProductLogo[] = [
  {
    name: "Super Therm®",
    tagline: "Heat Neutralizer...Heat Block Insulation Coating",
    logo: "/images/logo-super-therm.png",
    href: "/coating-products/super-therm",
  },
  {
    name: "Rust Grip®",
    tagline: "World's Toughest Encapsulation Coating",
    logo: "/images/logo-rust-grip.png",
    href: "/coating-products/rust-grip",
  },
  {
    name: "HPC® Coating",
    tagline: "Hot Pipe Insulation Coating",
    logo: "/images/logo-hpc-coating.png",
    href: "/coating-products/hpc-coating",
  },
  {
    name: "Enamo Grip®",
    tagline: "The Ultimate Protection Coating",
    logo: "/images/logo-enamo-grip.png",
    href: "/coating-products/enamo-grip",
  },
  {
    name: "Moist Metal Grip®",
    tagline: "Corrosion Protection in Moisture",
    logo: "/images/logo-moist-metal-grip.png",
    href: "/coating-products/moist-metal-grip",
  },
  {
    name: "HPC®-INT Coating",
    tagline: "Internal Pipe Thermal Insulation",
    logo: "/images/logo-hpc-int.png",
    href: "/coating-products/hpc-int-coating",
  },
];

export const videoResources = [
  {
    title: "Advanced Ceramic Compounds to Block Heat",
    thumbnail: "/images/sddefault.jpg",
    youtubeId: "mVjXoApx59qU8VkH",
    href: "https://youtu.be/P45tFzJvwLU?si=mVjXoApx59qU8VkH",
  },
  {
    title: "History of SPI and Ceramics Thermal Coatings",
    thumbnail: "/images/sddefault (1).jpg",
    youtubeId: "q2Wa_agUW8QIgRR1",
    href: "https://youtu.be/GzeRBhxcmT4?si=q2Wa_agUW8QIgRR1",
  },
  {
    title: "Rust Grip Workstrings SP Coatings",
    thumbnail: "https://img.youtube.com/vi/bqXo_ZuqXGg/sddefault.jpg",
    youtubeId: "OAgQ3ovs65YYuOYg",
    href: "https://youtu.be/bqXo_ZuqXGg?si=OAgQ3ovs65YYuOYg",
  },
  {
    title: "Corrosion Encapsulation with Rust Grip Explained®",
    thumbnail: "https://img.youtube.com/vi/gIWq87uotiY/sddefault.jpg",
    youtubeId: "jngXYaEVKRQP2tKv",
    href: "https://youtu.be/gIWq87uotiY?si=jngXYaEVKRQP2tKv",
  },
];
