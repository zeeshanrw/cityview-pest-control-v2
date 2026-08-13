export const BUSINESS = {
  name: "Cityview Pest Control",
  phone: "647-779-1770",
  phoneHref: "tel:+16477791770",
  whatsappHref: "https://wa.me/16477791770",
  whatsappNumber: "647-779-1770",
  serviceArea: "Greater Toronto Area",
} as const;

export const SERVICES = [
  { slug: "termites", label: "Termites" },
  { slug: "bed-bugs", label: "Bed Bugs" },
  { slug: "rodents", label: "Rodents" },
  { slug: "ants", label: "Ants" },
  { slug: "cockroaches", label: "Cockroaches" },
  { slug: "mosquitoes", label: "Mosquitoes" },
  { slug: "wasps-hornets", label: "Wasps & Hornets" },
  { slug: "spiders", label: "Spiders" },
  { slug: "wildlife-removal", label: "Wildlife Removal" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
