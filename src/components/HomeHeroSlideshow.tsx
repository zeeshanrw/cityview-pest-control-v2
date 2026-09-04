"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

const SLIDES = [
  {
    src: "/images/services/wasps-hornets.png",
    alt: "Wasp and hornet nest removal service",
    label: "Wasps & Hornets",
    headline: "Summer's Here. So Are the Pests.",
    copy:
      "Fast, direct help for wasp nests, ants, mosquitoes, rodents, and wildlife across the GTA.",
  },
  {
    src: "/images/services/ants.png",
    alt: "Ant control treatment around a home",
    label: "Ant Control",
    headline: "Stop the Trail at the Source.",
    copy:
      "We identify where pests are coming from and treat the problem behind what you can see.",
  },
  {
    src: "/images/services/rodents.png",
    alt: "Rodent control inspection for mice and rats",
    label: "Rodents",
    headline: "Mice and Rats Need More Than Traps.",
    copy:
      "Current activity is handled, then entry points are checked so the issue does not keep returning.",
  },
  {
    src: "/images/services/bed-bugs.png",
    alt: "Bed bug treatment service",
    label: "Bed Bugs",
    headline: "Discreet Treatment. Thorough Work.",
    copy:
      "Every quote starts with the actual situation in your home, not a generic fixed-price package.",
  },
  {
    src: "/images/services/cockroaches.png",
    alt: "Cockroach control service for kitchens and apartments",
    label: "Cockroaches",
    headline: "Fast Response for Urgent Infestations.",
    copy:
      "Call or WhatsApp the person doing the work and get a practical plan for your property.",
  },
  {
    src: "/images/services/mosquitoes.png",
    alt: "Mosquito control service for a backyard",
    label: "Mosquitoes",
    headline: "Get Your Backyard Back.",
    copy:
      "Seasonal pest pressure moves quickly. Same-day response is available when scheduling allows.",
  },
];

export default function HomeHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,56,0.92)_0%,rgba(20,33,56,0.74)_42%,rgba(20,33,56,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,33,56,0.72)_0%,rgba(20,33,56,0.08)_44%,rgba(20,33,56,0.46)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-14 md:min-h-[calc(100svh-5rem)] md:px-6 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex bg-alert px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-paper animate-heartbeat md:text-base">
            Wasp Activity Is High Right Now Across the GTA
          </span>

          <p className="mt-7 font-mono text-xs uppercase tracking-widest text-signal">
            {activeSlide.label}
          </p>

          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-normal md:text-6xl">
            {activeSlide.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/82 md:text-lg">
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
            <span>Same-day response available</span>
            <span>All pests, all wildlife</span>
            <span>No fixed pricing surprises</span>
          </div>
        </div>

        <div className="absolute bottom-5 left-4 right-4 flex items-center justify-between gap-6 md:bottom-8 md:left-6 md:right-6">
          <div className="hidden font-mono text-xs uppercase tracking-widest text-paper/65 sm:block">
            Cityview Pest Control
          </div>
          <div className="flex gap-2" aria-label="Homepage photo slideshow">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 transition-all ${
                  index === activeIndex
                    ? "w-9 bg-signal"
                    : "w-2.5 bg-paper/55 hover:bg-paper"
                }`}
                aria-label={`Show ${slide.label} slide`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
