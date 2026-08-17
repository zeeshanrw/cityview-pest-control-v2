export type ServiceContent = {
  slug: string;
  label: string;
  tagline: string;
  summary: string; // shown on the overview page
  details: string[]; // paragraphs shown on the dedicated page
  signs: string[]; // "signs you might have this pest"
};

export const PEST_SERVICES: ServiceContent[] = [
  {
    slug: "wasps-hornets",
    label: "Wasps & Hornets",
    tagline: "Nests removed safely — no repeat visits.",
    summary:
      "Wasp and hornet activity peaks over summer. We locate and remove nests from eaves, sheds, and yards before anyone gets stung.",
    details: [
      "Wasp and hornet nests can grow quickly once the weather warms up, often in places you won't notice until activity picks up — eaves, wall voids, sheds, and dense shrubs.",
      "We assess the nest location and size, then remove it using methods safe for your household and pets. Repeat visits are handled at no extra charge if activity returns within the treatment window.",
    ],
    signs: [
      "Visible nest under eaves, decks, or in trees",
      "Increased wasp activity near entry points",
      "Papery nest material found in attics or sheds",
    ],
  },
  {
    slug: "ants",
    label: "Ants",
    tagline: "Colonies treated at the source, not just the trail.",
    summary:
      "Seeing a few ants means there's a colony nearby. We trace the source and treat it directly instead of just spraying what's visible.",
    details: [
      "Ant colonies can be inside walls, under slabs, or in soil right against your foundation. Surface sprays only kill what's visible and rarely solve the actual problem.",
      "We identify the species and colony location, then apply treatment that addresses the source — reducing the chance of the same trail reappearing weeks later.",
    ],
    signs: [
      "Visible trails in kitchens or bathrooms",
      "Small dirt mounds near your foundation",
      "Ants reappearing after store-bought sprays",
    ],
  },
  {
    slug: "cockroaches",
    label: "Cockroaches",
    tagline: "Fast response — cockroach issues don't wait.",
    summary:
      "Cockroaches spread quickly and multiply fast. We treat both visible activity and the hiding spots you can't see.",
    details: [
      "Cockroaches favour warm, moist areas — under appliances, behind baseboards, inside wall voids — and a small sighting is often a sign of a larger population.",
      "Treatment targets both active roaches and egg-laying areas so the problem doesn't return in a few weeks.",
    ],
    signs: [
      "Roaches seen at night in kitchens",
      "Musty odour in cupboards or under sinks",
      "Small dark droppings near appliances",
    ],
  },
  {
    slug: "spiders",
    label: "Spiders",
    tagline: "Webs cleared, entry points treated.",
    summary:
      "Most spiders are harmless but unwelcome. We clear webs and treat common entry points to reduce activity indoors.",
    details: [
      "Spider activity usually increases when other insects (their food source) are present, so treatment often addresses both.",
      "We clear existing webs and treat likely entry points — window frames, foundation cracks, garage doors — to reduce indoor sightings.",
    ],
    signs: [
      "Webs in corners, basements, or garages",
      "Increased spider sightings indoors",
      "Egg sacs found in storage areas",
    ],
  },
  {
    slug: "mosquitoes",
    label: "Mosquitoes",
    tagline: "Get your backyard back this summer.",
    summary:
      "Standing water is the usual culprit. We identify breeding areas around your property and treat to reduce mosquito activity.",
    details: [
      "Mosquitoes breed in even small amounts of standing water — gutters, plant saucers, low spots in the yard.",
      "We inspect the property for breeding sites and apply treatment to reduce the local population, not just repel what's already active.",
    ],
    signs: [
      "Standing water anywhere on the property",
      "Bites concentrated near shaded, humid areas",
      "Noticeable activity at dusk",
    ],
  },
  {
    slug: "termites",
    label: "Termites",
    tagline: "Caught early, termite damage is manageable.",
    summary:
      "Termite damage is often invisible until it's serious. We inspect for early signs and treat before structural damage sets in.",
    details: [
      "Termites can be active for a long time before visible damage appears, which is why early inspection matters more than most other pests.",
      "We assess the property, identify activity, and apply a treatment plan suited to the extent of the problem.",
    ],
    signs: [
      "Mud tubes along foundation walls",
      "Hollow-sounding wood",
      "Discarded wings near windowsills",
    ],
  },
  {
    slug: "bed-bugs",
    label: "Bed Bugs",
    tagline: "Discreet, thorough treatment.",
    summary:
      "Bed bugs spread fast between rooms and units. We treat thoroughly and discreetly, with a plan for full elimination.",
    details: [
      "Bed bugs are resilient and can spread between rooms, furniture, and even neighbouring units if left untreated.",
      "Treatment is thorough — covering bedding, furniture seams, and baseboards — with follow-up available if any activity is spotted after the initial visit.",
    ],
    signs: [
      "Small reddish-brown stains on sheets",
      "Bites appearing in a line or cluster",
      "Musty odour near the mattress",
    ],
  },
  {
    slug: "rodents",
    label: "Rodents",
    tagline: "Mice and rats removed — entry points sealed.",
    summary:
      "Seeing one mouse usually means more. We trap existing activity and identify how they're getting in.",
    details: [
      "Mice and rats can enter through gaps as small as a coin. Removing existing activity is only half the job — finding and sealing entry points is what prevents it from coming back.",
      "We handle both: clearing current activity and identifying the access points causing it.",
    ],
    signs: [
      "Droppings near baseboards or in cupboards",
      "Scratching sounds in walls or ceilings",
      "Gnaw marks on food packaging",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return PEST_SERVICES.find((s) => s.slug === slug);
}