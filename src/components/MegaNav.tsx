"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NAV_CATEGORIES } from "@/lib/constants";

export default function MegaNav() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenCategory(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <nav ref={navRef} className="hidden md:flex items-center gap-6 font-body text-sm">
        <Link href="/" className="text-paper/80 hover:text-paper transition-colors">
          Home
        </Link>

        {NAV_CATEGORIES.map((category) => (
          <div key={category.label} className="relative">
            <button
              onClick={() =>
                setOpenCategory(openCategory === category.label ? null : category.label)
              }
              className="flex items-center gap-1 text-paper/80 hover:text-paper transition-colors"
            >
              {category.label}
              <span className="text-xs" aria-hidden="true">
                {openCategory === category.label ? "▲" : "▼"}
              </span>
            </button>

            {openCategory === category.label && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-paper text-ink border border-line shadow-lg z-50">
                {category.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => setOpenCategory(null)}
                    className="block px-4 py-3 text-sm hover:bg-ink hover:text-paper transition-colors border-b border-line last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/about" className="text-paper/80 hover:text-paper transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-paper/80 hover:text-paper transition-colors">
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
            className="block px-4 py-3 text-paper border-b border-paper/10"
          >
            Home
          </Link>
          {NAV_CATEGORIES.map((category) => (
            <div key={category.label} className="border-b border-paper/10">
              <p className="px-4 pt-3 pb-1 font-mono text-xs uppercase tracking-widest text-signal">
                {category.label}
              </p>
              {category.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-paper/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-paper border-b border-paper/10"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-paper"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}