"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { NAV_CATEGORIES } from "@/lib/constants";

export default function MegaNav() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenCategory(label);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenCategory(null), 150);
  }

  const linkClass =
    "text-paper/80 hover:text-signal hover:bg-paper/10 px-3 py-2 transition-colors";

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1 font-body text-sm">
        <Link href="/" className={linkClass}>
          Home
        </Link>

        {NAV_CATEGORIES.map((category) => (
          <div
            key={category.label}
            className="relative"
            onMouseEnter={() => handleEnter(category.label)}
            onMouseLeave={handleLeave}
          >
            <Link
              href={category.href}
              className={`flex items-center gap-1 ${
                openCategory === category.label
                  ? "text-signal bg-paper/10"
                  : "text-paper/80 hover:text-signal hover:bg-paper/10"
              } px-3 py-2 transition-colors`}
            >
              {category.label}
              <span className="text-xs" aria-hidden="true">
                ▼
              </span>
            </Link>

            {openCategory === category.label && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-paper text-ink border border-line shadow-lg">
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      onClick={() => setOpenCategory(null)}
                      className="block px-4 py-3 text-sm font-medium hover:bg-signal hover:text-ink transition-colors border-b border-line last:border-b-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <Link href="/about" className={linkClass}>
          About
        </Link>
        <Link href="/contact" className={linkClass}>
          Contact
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-paper p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink border-t border-paper/10 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-paper border-b border-paper/10 active:bg-paper/10"
          >
            Home
          </Link>
          {NAV_CATEGORIES.map((category) => (
            <div key={category.label} className="border-b border-paper/10">
              <Link
                href={category.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 pt-3 pb-1 font-mono text-xs uppercase tracking-widest text-signal"
              >
                {category.label}
              </Link>
              {category.items.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-paper/80 active:bg-paper/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-paper border-b border-paper/10 active:bg-paper/10"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-paper active:bg-paper/10"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}