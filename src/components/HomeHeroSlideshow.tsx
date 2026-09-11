"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

type Slide = {
  src: string;
  alt: string;
  label: string;
  copy: string;
};

const GROUP_HEADLINES = [
  "Pest Control That Targets the Source.",
  "Fast, Thorough Help for Pest Problems.",
  "Complete Pest and Wildlife Solutions.",
  "Humane Wildlife Removal for Your Home.",
  "Careful Wildlife Removal. Practical Prevention.",
];

const SLIDES: Slide[] = [
  {
    src: "/images/services/wasps-hornets.png",
    alt: "Wasp and hornet nest removal service",
    label: "Wasps & Hornets",
    copy:
      "We locate active wasp and hornet nests, explain the safest treatment, and help reduce repeat activity around your property.",
  },
  {
    src: "/images/services/ants_homepage.png",
    alt: "Ant control treatment around a home",
    label: "Ant Control",
    copy:
      "We identify where pests are coming from and treat the problem behind what you can see.",
  },
  {
    src: "/images/services/rodents_homepage.png",
    alt: "Rodent control inspection for mice and rats",
    label: "Rodents",
    copy:
      "Current activity is handled, then entry points are checked so the issue does not keep returning.",
  },
  {
    src: "/images/services/bed-bugs-homepage.png",
    alt: "Bed bug treatment service",
    label: "Bed Bugs",
    copy:
      "We inspect the affected rooms, identify the extent of activity, and recommend a discreet treatment suited to your home.",
  },
  {
    src: "/images/services/cockroaches_homepage.png",
    alt: "Cockroach control service for kitchens and apartments",
    label: "Cockroaches",
    copy:
      "We target cockroach harbourage areas and the hidden activity behind the infestation, not only the insects you can see.",
  },
  {
    src: "/images/services/spiders_homepage.png",
    alt: "Spider control service around a home",
    label: "Spider Control",
    copy:
      "We inspect common hiding places and treat active spider areas to help reduce activity inside and around your home.",
  },
  {
    src: "/images/services/mosquitoes_homepage.png",
    alt: "Mosquito control service for a backyard",
    label: "Mosquitoes",
    copy:
      "Seasonal pest pressure moves quickly. Contact us to discuss your property and arrange a suitable time.",
  },
  {
    src: "/images/services/termites-homepage.png",
    alt: "Termite inspection and control service for a home",
    label: "Termite Control",
    copy:
      "We inspect for signs of termite activity and recommend treatment focused on protecting the affected structure.",
  },
  {
    src: "/images/services/flies-homepage.png",
    alt: "Fly control service for homes and businesses",
    label: "Fly Control",
    copy:
      "We identify breeding and entry areas, then recommend practical treatment to reduce persistent fly activity.",
  },
  {
    src: "/images/services/squirl_bw.png",
    alt: "Squirrels in trees near residential properties",
    label: "Squirrel Removal",
    copy:
      "Humane removal and careful sealing of roofline, soffit, and fascia entry points.",
  },
  {
    src: "/images/services/raccoon.png",
    alt: "Raccoons near residential structures",
    label: "Raccoon Removal",
    copy:
      "We locate how raccoons entered, remove them carefully, and help prevent their return.",
  },
  {
    src: "/images/services/bat.png",
    alt: "Bats roosting near a building",
    label: "Bat Removal",
    copy:
      "Appropriate exclusion methods help bats leave while protecting your home from re-entry.",
  },
  {
    src: "/images/services/skunk.png",
    alt: "Skunks outdoors near a residential structure",
    label: "Skunk Removal",
    copy:
      "Low-stress removal for skunks denning beneath decks, sheds, porches, and other structures.",
  },
  {
    src: "/images/services/bird.png",
    alt: "Nesting birds and pigeons around buildings",
    label: "Bird Removal",
    copy:
      "We remove nesting activity and recommend practical deterrents to reduce repeat problems.",
  },
  {
    src: "/images/services/Opossum.png",
    alt: "Opossums around residential yards and decks",
    label: "Opossum Removal",
    copy:
      "Careful removal and entry-point work for opossums beneath porches, sheds, and crawl spaces.",
  },
];

export default function HomeHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[activeIndex];
  const activeHeadline = GROUP_HEADLINES[Math.floor(activeIndex / 3)];

  return (
    <section aria-label="Pest and wildlife services" aria-roledescription="carousel" className="relative overflow-hidden bg-ink text-paper md:min-h-[38rem]">
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (index === activeIndex || index === (activeIndex + 1) % SLIDES.length || index === (activeIndex + SLIDES.length - 1) % SLIDES.length) && (
          <div
            key={slide.src}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 overflow-hidden transition-[opacity,transform] duration-[1800ms] ease-in-out motion-reduce:transition-none ${index === activeIndex ? "scale-100 opacity-100" : "scale-[1.025] opacity-0"}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,56,0.92)_0%,rgba(20,33,56,0.74)_42%,rgba(20,33,56,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,33,56,0.72)_0%,rgba(20,33,56,0.08)_44%,rgba(20,33,56,0.46)_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 md:px-6 md:py-16">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-lg bg-ink/80 px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-signal md:text-base">
            Family-owned. Fully licensed. Here to help.
          </span>

          <p className="mt-7 font-mono text-xs uppercase tracking-widest text-signal">
            {activeSlide.label}
          </p>

          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-normal md:text-6xl">
            {activeHeadline}
          </h1>

          <p className="mt-6 min-h-24 max-w-xl text-base leading-relaxed text-paper/90 md:text-lg">
            {activeSlide.copy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center bg-signal px-6 py-3.5 font-display font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
            >
              Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-paper/75 px-6 py-3.5 font-display font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact#callback"
              className="inline-flex items-center justify-center px-2 py-3.5 font-semibold text-paper underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal"
            >
              Request a callback
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-paper/78">
            <span>Personal advice</span>
            <span>Humane wildlife removal</span>
            <span>Quotes tailored to your home</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="hidden font-mono text-xs uppercase tracking-widest text-paper/65 sm:block">
            Cityview Pest Control
          </div>
          <div className="flex flex-wrap gap-1" aria-label="Homepage photo slideshow">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex h-11 w-6 items-center justify-center rounded-md hover:bg-paper/10"
                aria-label={`Show ${slide.label} slide`}
                aria-current={index === activeIndex ? "true" : undefined}
              ><span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? "bg-signal" : "bg-paper/60"}`} /></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
