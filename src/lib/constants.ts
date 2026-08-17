export const BUSINESS = {
  name: "Cityview Pest Control",
  phone: "647-779-1770",
  phoneHref: "tel:+16477791770",
  whatsappHref: "https://wa.me/16477791770",
  whatsappNumber: "647-779-1770",
  serviceArea: "Greater Toronto Area",
} as const;

// Full list, used for the contact form's service checkboxes
export const ALL_SERVICES = [
  { slug: "wasps-hornets", label: "Wasps & Hornets" },
  { slug: "ants", label: "Ants" },
  { slug: "cockroaches", label: "Cockroaches" },
  { slug: "spiders", label: "Spiders" },
  { slug: "mosquitoes", label: "Mosquitoes" },
  { slug: "termites", label: "Termites" },
  { slug: "bed-bugs", label: "Bed Bugs" },
  { slug: "rodents", label: "Rodents" },
  { slug: "wildlife-removal", label: "Wildlife Removal" },
] as const;

// Categorized for the nav dropdown.
// Insects/Rodents point to anchors on the /services overview page.
// Wildlife is its own separate page.
export const NAV_CATEGORIES = [
  {
    label: "Insects",
    items: [
      { slug: "wasps-hornets", label: "Wasps & Hornets", href: "/services#wasps-hornets" },
      { slug: "ants", label: "Ants", href: "/services#ants" },
      { slug: "cockroaches", label: "Cockroaches", href: "/services#cockroaches" },
      { slug: "spiders", label: "Spiders", href: "/services#spiders" },
      { slug: "mosquitoes", label: "Mosquitoes", href: "/services#mosquitoes" },
      { slug: "termites", label: "Termites", href: "/services#termites" },
      { slug: "bed-bugs", label: "Bed Bugs", href: "/services#bed-bugs" },
    ],
  },
  {
    label: "Rodents",
    items: [{ slug: "rodents", label: "Mice & Rats", href: "/services#rodents" }],
  },
  {
    label: "Wildlife",
    items: [
      { slug: "wildlife-removal", label: "Wildlife Removal", href: "/services/wildlife-removal" },
    ],
  },
] as const;