"use client";

import { useEffect, useState, type CSSProperties } from "react";

const VISIT_KEY = "cityview-bug-intro-v2-seen";
const IS_PREVIEW = process.env.NODE_ENV === "development";

const BUGS = [
  { type: "ant", x: -56, y: -56, angle: -45 },
  { type: "roach", x: 56, y: -48, angle: 50 },
  { type: "ant", x: -48, y: 56, angle: -140 },
  { type: "roach", x: 56, y: 56, angle: 135 },
  { type: "beetle", x: -56, y: -42, angle: -55 },
  { type: "spider", x: 46, y: -56, angle: 40 },
  { type: "ant", x: 48, y: 56, angle: 140 },
  { type: "roach", x: -56, y: 45, angle: -130 },
  { type: "beetle", x: 56, y: 38, angle: 125 },
] as const;

export default function FirstVisitAnts() {
  const [visible, setVisible] = useState(false);
  const [previewRun, setPreviewRun] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const explicitPreview = IS_PREVIEW && previewRun > 0;
    if (motion.matches && !explicitPreview) return;
    try {
      if (!IS_PREVIEW && window.localStorage.getItem(VISIT_KEY)) return;
    } catch {
      // Skip the optional intro if we cannot remember that it was shown.
      return;
    }

    let finish: ReturnType<typeof setTimeout>;
    let start: ReturnType<typeof setTimeout>;
    let started = false;
    const startWhenVisible = () => {
      if (document.visibilityState !== "visible" || started || (motion.matches && !explicitPreview)) return;
      started = true;
      // Give the page a moment to settle before introducing the bugs.
      start = setTimeout(() => {
        if (motion.matches && !explicitPreview) return;
        setVisible(true);
        finish = setTimeout(() => {
          setVisible(false);
          if (!IS_PREVIEW) {
            try {
              window.localStorage.setItem(VISIT_KEY, "1");
            } catch { /* Storage can become unavailable during a visit. */ }
          }
        }, 5000);
      }, 700);
    };
    startWhenVisible();
    document.addEventListener("visibilitychange", startWhenVisible);
    const stopForReducedMotion = () => {
      if (motion.matches && !explicitPreview) setVisible(false);
    };
    motion.addEventListener("change", stopForReducedMotion);
    return () => {
      clearTimeout(start);
      clearTimeout(finish);
      document.removeEventListener("visibilitychange", startWhenVisible);
      motion.removeEventListener("change", stopForReducedMotion);
    };
  }, [previewRun]);

  return (
    <>
    {IS_PREVIEW && <button type="button" onClick={() => setPreviewRun((run) => run + 1)} className="fixed bottom-4 left-1/2 z-[70] -translate-x-1/2 rounded-full border border-signal bg-ink px-4 py-2 text-xs font-medium text-paper shadow-lg" title="Development preview: explicitly plays motion, including when reduced motion is enabled">
      Preview bug animation
    </button>}
    {visible && <div key={previewRun} aria-hidden="true" className={`first-visit-ants ${previewRun > 0 ? "bug-preview" : ""} pointer-events-none fixed inset-0 z-[60] overflow-hidden`}>
      {BUGS.map((bug, index) => (
        <div key={index} className={`intro-bug intro-bug-${bug.type}`} style={{
          "--end-x": `${bug.x}vw`, "--end-y": `${bug.y}vh`,
          "--angle": `${bug.angle}deg`,
          "--start-x": `${(index % 3 - 1) * 36}px`,
          "--start-y": `${(Math.floor(index / 3) - 1) * 36}px`,
          animationDelay: `${index * 60}ms`,
        } as CSSProperties}>
          <svg viewBox="0 0 48 64" className="intro-bug-drawing" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <g className="intro-ant-legs">
              <path fill="none" d="m20 27-10-8-5 2m15 12H8l-4 6m16 0-10 9-2 7m20-28 10-8 5 2m-15 12h12l4 6m-16 0 10 9 2 7" />
            </g>
            {bug.type !== "spider" && <path fill="none" d="m21 16-7-12m13 12 7-12" />}
            <circle cx="24" cy="21" r="6" />
            {bug.type === "ant" ? <>
              <ellipse cx="24" cy="33" rx="4" ry="7" />
              <ellipse cx="24" cy="49" rx="8" ry="11" />
            </> : <>
              <ellipse cx="24" cy="40" rx={bug.type === "roach" ? 10 : 13} ry={bug.type === "roach" ? 20 : 16} />
              {bug.type !== "spider" && <path stroke="#b58c61" strokeWidth="1.5" fill="none" d="M24 27v28m-7-24 7 7 7-7" />}
              {bug.type === "spider" && <path fill="none" d="m18 25-8-14V4m20 21 8-14V4" />}
            </>}
          </svg>
        </div>
      ))}
    </div>}
    </>
  );
}
