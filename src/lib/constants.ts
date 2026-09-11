export const BUSINESS = {
  name: "Cityview Pest Control",
  email: "info@cityviewpestcontrol.ca",
  phone: "647-779-1770",
  phoneHref: "tel:+16477791770",
  whatsappHref: "https://wa.me/16477791770",
  whatsappNumber: "647-779-1770",
  googleReviewsHref: "https://www.google.com/search?q=CityView+Pest+Control+Vaughan&stick=H4sIAAAAAAAA_-NgU1I1qLCwMEoysrQwNTRNMTMxNDK2MqgwTE4zMEwyMjRJTLU0MTNNXcQq65xZUhmWmVquEJBaXKLgnJ9XUpSfoxCWWJqekZgHAKmU-pZJAAAA",
  googleRating: "5.0",
  serviceArea: "Greater Toronto Area",
} as const;

// Full list for the contact form's service checkboxes — pests + individual wildlife species
export const ALL_SERVICES = [
  { slug: "wasps-hornets", label: "Wasps & Hornets" },
  { slug: "ants", label: "Ants" },
  { slug: "cockroaches", label: "Cockroaches" },
  { slug: "spiders", label: "Spiders" },
  { slug: "mosquitoes", label: "Mosquitoes" },
  { slug: "termites", label: "Termites" },
  { slug: "bed-bugs", label: "Bed Bugs" },
  { slug: "rodents", label: "Rodents" },
  { slug: "flies", label: "Flies" },
  { slug: "fleas-ticks", label: "Fleas & Ticks" },
  { slug: "silverfish", label: "Silverfish" },
  { slug: "squirrel-removal", label: "Squirrel Removal" },
  { slug: "raccoon-removal", label: "Raccoon Removal" },
  { slug: "bat-removal", label: "Bat Removal" },
  { slug: "skunk-removal", label: "Skunk Removal" },
  { slug: "bird-removal", label: "Bird Removal" },
  { slug: "opossum-removal", label: "Opossum Removal" },
] as const;

// Shorter list specifically for the homepage services grid.
// Wildlife is one combined tile here, linking to its own overview page.
export const HOMEPAGE_SERVICES = [
  { slug: "wasps-hornets", label: "Wasps & Hornets" },
  { slug: "ants", label: "Ants" },
  { slug: "cockroaches", label: "Cockroaches" },
  { slug: "spiders", label: "Spiders" },
  { slug: "mosquitoes", label: "Mosquitoes" },
  { slug: "termites", label: "Termites" },
  { slug: "bed-bugs", label: "Bed Bugs" },
  { slug: "rodents", label: "Rodents" },
  { slug: "flies", label: "Flies" },
  { slug: "fleas-ticks", label: "Fleas & Ticks" },
  { slug: "silverfish", label: "Silverfish" },
  { slug: "wildlife-removal", label: "Wildlife Removal" },
] as const;

// Categorized for the nav dropdown.
// Insects/Rodents point to anchors on the /services overview page.
// Wildlife now lists each species, pointing to anchors on the wildlife overview page.
export const NAV_CATEGORIES = [
  {
    label: "Insects",
    href: "/services",

    items: [
      { slug: "wasps-hornets", label: "Wasps & Hornets", href: "/services#wasps-hornets" },
      { slug: "ants", label: "Ants", href: "/services#ants" },
      { slug: "cockroaches", label: "Cockroaches", href: "/services#cockroaches" },
      { slug: "spiders", label: "Spiders", href: "/services#spiders" },
      { slug: "mosquitoes", label: "Mosquitoes", href: "/services#mosquitoes" },
      { slug: "termites", label: "Termites", href: "/services#termites" },
      { slug: "bed-bugs", label: "Bed Bugs", href: "/services#bed-bugs" },
      { slug: "flies", label: "Flies", href: "/services#flies" },
      { slug: "fleas-ticks", label: "Fleas & Ticks", href: "/services#fleas-ticks" },
      { slug: "silverfish", label: "Silverfish", href: "/services#silverfish" },
    ],
  },
  {
    label: "Rodents",
    href: "/services#rodents",
    items: [{ slug: "rodents", label: "Mice & Rats", href: "/services#rodents" }],
  },
  {
    label: "Wildlife",
    href: "/services/wildlife-removal",
    items: [
      { slug: "squirrel-removal", label: "Squirrel Removal", href: "/services/wildlife-removal#squirrel-removal" },
      { slug: "raccoon-removal", label: "Raccoon Removal", href: "/services/wildlife-removal#raccoon-removal" },
      { slug: "bat-removal", label: "Bat Removal", href: "/services/wildlife-removal#bat-removal" },
      { slug: "skunk-removal", label: "Skunk Removal", href: "/services/wildlife-removal#skunk-removal" },
      { slug: "bird-removal", label: "Bird Removal", href: "/services/wildlife-removal#bird-removal" },
      { slug: "opossum-removal", label: "Opossum Removal", href: "/services/wildlife-removal#opossum-removal" },
    ],
  },
] as const;
