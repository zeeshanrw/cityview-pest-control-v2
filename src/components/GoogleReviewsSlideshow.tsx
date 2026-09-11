"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Gurveer Brar",
    date: "A week ago",
    text: "Great experience! Aftab was professional and provided great service. Will definitely recommend!",
  },
  {
    name: "Waheeda Asafrally",
    date: "A month ago",
    text: "Aftab did an excellent job treating my ants problem. He arrived on time and was very professional. I highly recommend his company to anyone looking for reliable pest control.",
  },
  {
    name: "Tania F",
    date: "2 years ago",
    text: "Aftab was fantastic! He was able to isolate the issue and provided a speedy solution. I would highly recommend his services; he is a master of his craft!",
  },
  {
    name: "Michael Pinet",
    date: "2 years ago",
    text: "We have employed Aftab’s services for 4 years. He has successfully resolved various issues such as a flying ant infestation and most recently a large wasp nest on our deck. He is always very professional, thorough and quick to respond. We highly recommend CityView Pest Control services.",
  },
  {
    name: "Mariam Khalil",
    date: "2 years ago",
    text: "Excellent service and good work performance. I recommend Aftab and CityView Pest Control Vaughan.",
  },
  {
    name: "Kiran Varagur",
    date: "2 years ago",
    text: "We had a family of skunks living under our deck. Aftab quickly implemented a humane solution to get rid of the problem for good. We’re very pleased with how cost effective it was, and Aftab is a very pleasant person to deal with. We would wholeheartedly recommend Aftab for any pest control needs.",
  },
  {
    name: "Erin Delmar",
    date: "2 years ago",
    text: "Aftab is nothing but amazing and professional. He has helped me out twice and helped us with a nasty backyard rodent issue. I highly recommend him.",
  },
  {
    name: "Lindsay Flawless",
    date: "2 years ago",
    text: "Great service. Showed up right away. Assessed the problem, set traps, and came back a few days later to repair where the animals came in. Highly recommend!",
  },
  {
    name: "Alexey Wool",
    date: "2 years ago",
    text: "Excellent service, very fair price.",
  },
] as const;

export default function GoogleReviewsSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % REVIEWS.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % REVIEWS.length);
  };

  return (
    <section aria-labelledby="google-reviews-title" aria-roledescription="carousel" className="border-t border-line bg-signal/10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[12rem_1fr] md:px-6 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5 md:flex-col md:items-stretch md:justify-between md:border-r md:border-b-0 md:pr-6 md:pb-0">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              Google Reviews
            </span>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-display text-5xl font-semibold leading-none text-ink">
                {BUSINESS.googleRating}
              </span>
              <span aria-label="5 out of 5 stars" className="pb-1 text-base tracking-wide text-signal">
                <span aria-hidden="true">★★★★★</span>
              </span>
            </div>
          </div>

          <a
            href={BUSINESS.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-ink px-4 py-2 font-display font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-signal hover:text-ink md:mt-4"
          >
            Read on Google
          </a>
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h2 id="google-reviews-title" className="font-display text-xl font-semibold uppercase text-ink md:text-2xl">
              What Customers Say
            </h2>

            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={showPrevious} aria-label="Show previous review" className="flex h-9 w-9 items-center justify-center border border-line text-lg text-ink transition-colors hover:border-signal hover:bg-signal">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" onClick={showNext} aria-label="Show next review" className="flex h-9 w-9 items-center justify-center border border-line text-lg text-ink transition-colors hover:border-signal hover:bg-signal">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="relative mt-4 h-60 sm:h-48 md:h-40">
            {REVIEWS.map((review, index) => (
              <article
                key={review.name}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 flex flex-col justify-between transition-[opacity,transform,visibility] duration-700 ease-in-out motion-reduce:transition-none ${index === activeIndex ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}
              >
                <blockquote className="max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
                  “{review.text}”
                </blockquote>
                <footer className="mt-3">
                  <p className="font-display text-base font-semibold uppercase text-ink">{review.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/55">{review.date} · Google review</p>
                </footer>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
