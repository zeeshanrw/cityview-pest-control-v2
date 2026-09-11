"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NAV_CATEGORIES } from "@/lib/constants";
import { useNavigationContext } from "@/lib/use-navigation-context";

export default function MegaNav() {
  const { pathname, category: activeCategory, item: activeItem } = useNavigationContext();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) { setMobileOpen(false); setOpenCategory(null); }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => { document.removeEventListener("pointerdown", dismiss); if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

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
    <div ref={root} onKeyDown={event => {
      if (event.key === "Escape") {
        if (mobileOpen) mobileTrigger.current?.focus();
        else root.current?.querySelector<HTMLButtonElement>(`button[aria-expanded="true"]`)?.focus();
        setMobileOpen(false); setOpenCategory(null);
      }
    }}>
      {/* Desktop nav */}
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 font-body text-sm">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={linkClass}>
          Home
        </Link>

        {NAV_CATEGORIES.map((category) => (
          <div
            key={category.label}
            className="relative"
            onMouseEnter={() => handleEnter(category.label)}
            onMouseLeave={handleLeave}
            onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenCategory(null); }}
          >
            <button
              type="button"
              aria-expanded={openCategory === category.label}
              aria-controls={openCategory === category.label ? `desktop-${category.label}` : undefined}
              onClick={() => setOpenCategory(openCategory === category.label ? null : category.label)}
              className={`flex items-center gap-1 ${
                openCategory === category.label || activeCategory?.label === category.label
                  ? "text-signal bg-paper/10"
                  : "text-paper/80 hover:text-signal hover:bg-paper/10"
              } px-3 py-2 transition-colors`}
            >
              {category.label}
              <span className="text-xs" aria-hidden="true">
                ▼
              </span>
            </button>

            {openCategory === category.label && (
              <div id={`desktop-${category.label}`} className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-ink text-paper border border-paper/20 shadow-2xl rounded-xl overflow-hidden">
                  <Link href={category.href} onClick={() => setOpenCategory(null)} className="block border-b border-paper/20 px-4 py-3 text-signal underline">All {category.label.toLowerCase()} services</Link>
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      aria-current={activeItem?.slug === item.slug ? "page" : undefined}
                      onClick={() => setOpenCategory(null)}
                      className="block px-4 py-3 text-sm font-medium text-paper/90 hover:bg-paper/10 hover:text-signal transition-colors border-b border-paper/10 last:border-b-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={linkClass}>
          About
        </Link>
        <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={linkClass}>
          Contact
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        ref={mobileTrigger}
        className="lg:hidden h-11 w-11 text-paper"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          if (!mobileOpen) setMobileCategory(activeCategory?.label ?? null);
        }}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
          className={`lg:hidden absolute top-full right-4 mt-2 w-max min-w-44 max-w-[calc(100vw-2rem)] origin-top-right rounded-xl bg-ink border border-paper/10 max-h-[80vh] overflow-y-auto shadow-xl transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
            mobileOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
          }`}
        >
          {NAV_CATEGORIES.map((category) => (
            <div key={category.label} className="border-b border-paper/10">
              <button
                type="button"
                onClick={() => setMobileCategory((current) => current === category.label ? null : category.label)}
                aria-expanded={mobileCategory === category.label}
                data-active={activeCategory?.label === category.label}
                aria-controls={`mobile-${category.label.toLowerCase()}`}
                className="flex w-full items-center justify-between gap-6 px-4 py-4 text-left font-medium text-paper active:bg-paper/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal"
              >
                {category.label}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-5 w-5 text-signal transition-transform motion-reduce:transition-none ${mobileCategory === category.label ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div id={`mobile-${category.label.toLowerCase()}`} hidden={mobileCategory !== category.label}>
                <div className="flex flex-col bg-paper/5 py-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      aria-current={activeItem?.slug === item.slug ? "page" : undefined}
                      onClick={closeMobileMenu}
                      className="block px-5 py-2.5 text-sm leading-snug text-paper/80 transition-colors hover:text-signal active:bg-paper/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-signal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={closeMobileMenu}
            className="block px-4 py-4 font-medium text-paper border-b border-paper/10 active:bg-paper/10"
          >
            About
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={closeMobileMenu}
            className="block px-4 py-4 font-medium text-paper active:bg-paper/10"
          >
            Contact
          </Link>
        </nav>
    </div>
  );
}
