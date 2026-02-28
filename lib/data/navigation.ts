export interface NavLink {
  name: string;
  href: string;
}

export interface CoatingsMenuCategory {
  [category: string]: NavLink[];
}

export const coatingsMenu: CoatingsMenuCategory = {
  "Thermal Insulation Coatings": [
    { name: "Super Therm®", href: "/coating-products/super-therm" },
    { name: "Sunshield", href: "/coating-products/sunshield" },
    { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
    { name: "HPC®-INT Coating", href: "/coating-products/hpc-int-coating" },
    { name: "HPC®-HT Coating", href: "/coating-products/hpc-ht-coating" },
    { name: "HSC™ Coating", href: "/coating-products/hsc-coating" },
    { name: "SP Texture Coat", href: "/coating-products/sp-texture-coat" },
  ],
  "Corrosion Coatings": [
    { name: "Rust Grip®", href: "/coating-products/rust-grip" },
    { name: "Moist Metal Grip", href: "/coating-products/moist-metal-grip" },
  ],
  "Fire Coating": [
    { name: "Omega Fire", href: "/coating-products/omega-fire" },
  ],
  "Sealant Coatings": [
    { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
    { name: "Enamo Grip 5000®", href: "/coating-products/enamo-grip-5000" },
    { name: "Lining Kote UHS", href: "/coating-products/lining-kote-uhs" },
    { name: "SP APC Strippable", href: "/coating-products/sp-apc-strippable" },
    { name: "SP Interlock", href: "/coating-products/sp-interlock" },
  ],
  "Base Coatings": [
    { name: "SP Liquid Membrane®", href: "/coating-products/sp-liquid-membrane" },
    { name: "SP Seal Coat", href: "/coating-products/sp-seal-coat" },
    { name: "SP Seal Coat HT", href: "/coating-products/sp-seal-coat-ht" },
    { name: "Super Base", href: "/coating-products/super-base" },
  ],
};

export const industriesMenu: NavLink[] = [
  { name: "Agriculture", href: "/industries/agriculture" },
  { name: "Architecture", href: "/industries/architecture" },
  { name: "Aviation", href: "/industries/aviation" },
  { name: "Commercial & Industrial", href: "/industries/commercial-industrial" },
  { name: "Construction", href: "/industries/construction" },
  { name: "Cool & Cold Storage", href: "/industries/cool-cold-storage" },
  { name: "Energy & Mining", href: "/industries/energy-mining" },
  { name: "Marine", href: "/industries/marine" },
  { name: "Defence & Military", href: "/industries/defence-military" },
  { name: "Infrastructure", href: "/industries/infrastructure" },
  { name: "Residential", href: "/industries/residential" },
  { name: "Shipping Containers", href: "/industries/shipping-containers" },
  { name: "Transportation", href: "/industries/transportation" },
  { name: "Warehouse", href: "/industries/warehouse" },
];

export const solutionsMenu: NavLink[] = [
  { name: "Energy Reduction", href: "/solutions/energy-reduction" },
  { name: "Heat Block Coatings", href: "/solutions/heat-block-coatings" },
  { name: "Heat Management", href: "/solutions/heat-management" },
  { name: "Live Hot Pipe Coatings", href: "/solutions/live-hot-pipe-coatings" },
  { name: "Eco Friendly", href: "/solutions/eco-friendly" },
  { name: "Corrosion Protection", href: "/solutions/corrosion-protection" },
  { name: "Chemical Protection", href: "/solutions/chemical-protection" },
  { name: "Water Resistance", href: "/solutions/water-resistance" },
  { name: "Fire Resistance", href: "/solutions/fire-resistance" },
  { name: "Cold and Cool Storage", href: "/solutions/cold-cool-storage" },
  { name: "Concrete and Flooring", href: "/solutions/concrete-flooring" },
  { name: "Asbestos & Lead Encapsulation", href: "/solutions/asbestos-lead-encapsulation" },
  { name: "Transport", href: "/solutions/transport" },
];

export const simpleNavLinks: NavLink[] = [
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Distributors", href: "/distributors" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export const mobileNavLinks: NavLink[] = [
  { name: "Coatings", href: "/coating-products" },
  { name: "Industries", href: "/industries" },
  { name: "Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Distributors", href: "/distributors" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export const footerProductLinks: NavLink[] = [
  { name: "Super Therm®", href: "/coating-products/super-therm" },
  { name: "Rust Grip®", href: "/coating-products/rust-grip" },
  { name: "Enamo Grip®", href: "/coating-products/enamo-grip" },
  { name: "Omega Fire", href: "/coating-products/omega-fire" },
  { name: "HPC® Coating", href: "/coating-products/hpc-coating" },
  { name: "Moist Metal Grip", href: "/coating-products/moist-metal-grip" },
  { name: "Sunshield", href: "/coating-products/sunshield" },
  { name: "All Products →", href: "/coating-products" },
];

export const footerSolutionLinks: NavLink[] = [
  { name: "Energy Reduction", href: "/solutions/energy-reduction" },
  { name: "Corrosion Protection", href: "/solutions/corrosion-protection" },
  { name: "Fire Resistance", href: "/solutions/fire-resistance" },
  { name: "Heat Management", href: "/solutions/heat-management" },
  { name: "Water Resistance", href: "/solutions/water-resistance" },
  { name: "All Solutions →", href: "/solutions" },
];

export const footerIndustryLinks: NavLink[] = [
  { name: "Marine", href: "/industries/marine" },
  { name: "Energy & Mining", href: "/industries/energy-mining" },
  { name: "Infrastructure", href: "/industries/infrastructure" },
  { name: "Commercial & Industrial", href: "/industries/commercial-industrial" },
  { name: "All Industries →", href: "/industries" },
];

export const footerAboutLinks: NavLink[] = [
  { name: "About SP Coatings", href: "/about" },
  { name: "Global Projects", href: "/projects" },
  { name: "News & Updates", href: "/news" },
  { name: "Resources", href: "/resources" },
  { name: "Distributors", href: "/distributors" },
  { name: "Contact", href: "/contact" },
];
