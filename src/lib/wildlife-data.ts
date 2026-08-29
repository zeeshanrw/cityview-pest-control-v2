export type WildlifeContent = {
  slug: string;
  label: string;
  tagline: string;
  summary: string;
  details: string[];
  signs: string[];
};

export const WILDLIFE_SERVICES: WildlifeContent[] = [
  {
    slug: "squirrel-removal",
    label: "Squirrel Removal",
    tagline: "Roofline and attic entry points found and sealed.",
    summary:
      "Squirrels chew through soffits and fascia to get into attics. We remove them humanely and close off how they got in.",
    details: [
      "Squirrels are persistent and capable of chewing through wood, vinyl siding, and even wiring to create an entry point into an attic or roofline.",
      "Once inside, they can cause real damage — chewed insulation, damaged wiring, and scattered nesting material through the attic space.",
      "We locate the entry point, remove the animal using humane methods, and seal the access point so it doesn't become a repeat problem.",
    ],
    signs: [
      "Scratching or scurrying sounds in the attic or walls, especially early morning and evening",
      "Chewed holes along the roofline, soffits, or fascia boards",
      "Visible nesting material near roof vents",
    ],
  },
  {
    slug: "raccoon-removal",
    label: "Raccoon Removal",
    tagline: "Handled carefully — raccoons can be aggressive when cornered.",
    summary:
      "Raccoons are strong and resourceful, and can cause serious damage once inside a chimney, attic, or crawl space.",
    details: [
      "Raccoons are one of the more destructive animals to deal with once they've made their way into a home, tearing through insulation, ductwork, and roofing material to create denning space.",
      "They're also more likely than smaller wildlife to become defensive if they feel trapped — especially a mother with young — so removal needs to be handled carefully.",
      "We assess how the raccoon is getting in, remove it safely, and address the entry point to prevent it from returning.",
    ],
    signs: [
      "Loud thumping or rolling sounds in the attic, especially at night",
      "Torn or flattened insulation",
      "Overturned garbage bins or scattered trash near the property",
    ],
  },
  {
    slug: "bat-removal",
    label: "Bat Removal",
    tagline: "Removal that respects provincial wildlife protections.",
    summary:
      "Bats are a protected species in Ontario, so removal has to follow specific timing and methods — not just sealing an entry point.",
    details: [
      "Several bat species found in Ontario are provincially protected, which means timing and method matter, particularly around maternity season when young bats may not yet be able to fly.",
      "We assess the colony situation and use humane exclusion methods that let bats leave without being able to re-enter, timed appropriately.",
      "Once the colony has vacated, entry points are sealed to prevent them — or anything else — from getting back in.",
    ],
    signs: [
      "Small droppings accumulating near attic access points or exterior walls",
      "Scratching sounds or a faint odour in the attic",
      "Bats seen exiting a specific point on the roofline at dusk",
    ],
  },
  {
    slug: "skunk-removal",
    label: "Skunk Removal",
    tagline: "Odour-conscious removal from under decks and sheds.",
    summary:
      "Skunks tend to den under decks, sheds, and porches. We remove them without triggering the spray you're trying to avoid.",
    details: [
      "Skunks are generally not aggressive, but they'll spray if they feel cornered — which is why removal method and timing matter more than with most wildlife.",
      "They typically den in dug-out spaces under decks, sheds, or porches, and can cause a persistent odour problem from scent marking near the den, even without spraying.",
      "We assess the den location and remove the animal using a low-stress approach, then close off the access point.",
    ],
    signs: [
      "A skunk odour lingering near a deck, shed, or porch without an obvious spray event",
      "Small holes dug in the lawn from foraging",
      "A visible den entrance under a deck or foundation gap",
    ],
  },
  {
    slug: "bird-removal",
    label: "Bird Removal",
    tagline: "Nests and roosting birds cleared from vents, eaves, and rooflines.",
    summary:
      "Pigeons, starlings, and other birds nesting in vents or rooflines can block airflow and create a mess fast. We clear the nest and reduce return visits.",
    details: [
      "Pigeons and starlings are the most common issue in the GTA, often nesting in roof vents, eaves, signage, and ledges. Nesting material can block exhaust vents and create ventilation hazards over time.",
      "Beyond the mess, accumulated droppings can damage roofing material and create a genuine health concern in enclosed spaces like attics.",
      "We remove nests and current activity, then apply deterrents suited to the location to reduce birds returning to the same spot.",
    ],
    signs: [
      "Visible nesting material in vents, eaves, or on ledges",
      "Droppings accumulating on a roof, deck, or below a nesting spot",
      "Persistent cooing or scratching sounds from a vent or roofline",
    ],
  },
  {
    slug: "opossum-removal",
    label: "Opossum Removal",
    tagline: "Low-conflict removal — opossums are generally non-aggressive.",
    summary:
      "Opossums often end up denning in sheds, crawl spaces, or under porches. They're not aggressive, but they don't belong indoors.",
    details: [
      "Opossums are typically docile and more likely to freeze than act aggressively, but they can still cause a mess denning in crawl spaces, sheds, or under decks.",
      "They're opportunistic and often drawn in by accessible food sources like garbage or pet food left outside.",
      "We remove the animal and close off the entry point, along with practical suggestions to reduce what's attracting them to the property.",
    ],
    signs: [
      "Visible denning activity under a deck, shed, or porch",
      "Overturned garbage or scattered pet food outside",
      "A musty odour from a crawl space or shed corner",
    ],
  },
];

export function getWildlifeBySlug(slug: string) {
  return WILDLIFE_SERVICES.find((s) => s.slug === slug);
}