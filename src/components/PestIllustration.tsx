import type { ReactNode } from "react";

// Original vector illustrations, sized consistently for the service navigation.
export default function PestIllustration({ slug }: { slug: string }) {
  const legs = <path d="m24 28-10-8-5 2m15 13H11l-5 6m19-1-11 9-2 7m28-28 10-8 5 2M40 35h13l5 6m-19-1 11 9 2 7" />;
  const antennae = <path d="m28 19-7-9m15 9 7-9" />;
  let drawing: ReactNode;

  switch (slug) {
    case "wildlife-removal":
      drawing = <><path fill="currentColor" d="M12 28 8 9l17 10h14L56 9l-4 19c5 15-8 28-20 31C20 56 7 43 12 28Z" /><path stroke="var(--color-signal)" strokeWidth="5" d="m17 32 9 5m21-5-9 5" /><path fill="var(--color-signal)" stroke="none" d="m25 44 7-5 7 5-7 8Z" /><path stroke="var(--color-signal)" d="m17 19 3 5m27-5-3 5" /></>;
      break;
    case "rodents":
      drawing = <><circle cx="17" cy="18" r="11" fill="currentColor" /><circle cx="47" cy="18" r="11" fill="currentColor" /><path fill="currentColor" d="M15 29c0-17 34-17 34 0 0 13-10 25-17 29-7-4-17-16-17-29Z" /><path stroke="var(--color-signal)" strokeWidth="4" d="M24 31v2m16-2v2" /><path d="m22 43-16-4m16 8L7 49m35-6 16-4m-16 8 15 2" /><path stroke="var(--color-signal)" d="m29 47 3 3 3-3" /></>;
      break;
    case "spiders":
      drawing = <><path d="m25 28-10-9V8m9 25L8 27l-4-9m20 21L8 44l-4 10m22-10-10 9v7m23-32 10-9V8m-9 25 16-6 4-9m-20 21 16 5 4 10m-22-10 10 9v7" /><ellipse cx="32" cy="39" rx="10" ry="14" fill="currentColor" /><circle cx="32" cy="23" r="7" fill="currentColor" /></>;
      break;
    case "ants":
      drawing = <>{legs}{antennae}<circle cx="32" cy="22" r="7" fill="currentColor" /><ellipse cx="32" cy="35" rx="5" ry="7" fill="currentColor" /><ellipse cx="32" cy="50" rx="9" ry="11" fill="currentColor" /></>;
      break;
    case "wasps-hornets":
      drawing = <>{antennae}<path d="M28 31C5 6 4 34 25 38m11-7C59 6 60 34 39 38m-13 7-12 8m24-8 12 8" /><circle cx="32" cy="23" r="6" fill="currentColor" /><path fill="currentColor" d="M26 30h12c9 12 3 23-6 30-9-7-15-18-6-30Z" /><path stroke="var(--color-signal)" strokeWidth="4" d="M24 39h16m-15 9h14" /></>;
      break;
    case "mosquitoes":
      drawing = <><path d="m32 21 5-16m-8 29L12 19 5 21m27 13 18-15 9 2M29 39 13 42 6 57m29-18 16 3 7 15M29 31C1 3 5 41 29 35m6-4C61 3 59 41 35 35" /><circle cx="32" cy="25" r="4" fill="currentColor" /><path strokeWidth="5" d="M32 31v20" /></>;
      break;
    case "flies":
      drawing = <>{antennae}{legs}<ellipse cx="32" cy="41" rx="8" ry="14" fill="currentColor" /><circle cx="27" cy="23" r="6" fill="currentColor" /><circle cx="37" cy="23" r="6" fill="currentColor" /><path fill="var(--color-signal)" d="M29 31C5 18 7 53 18 48Zm6 0c24-13 22 22 11 17Z" /></>;
      break;
    case "silverfish":
      drawing = <><path d="m27 17-9-12m19 12L46 5m-22 23-13-5m13 12-14 2m16 5-12 7m26-21 13-5m-13 12 14 2m-16 5 12 7m-20 0-7 13m11-13 7 13m-9-13v15" /><path fill="currentColor" d="M32 14c-16 0-12 24 0 39 12-15 16-39 0-39Z" /><path stroke="var(--color-signal)" d="M25 25h14m-13 7h12m-10 7h8" /></>;
      break;
    case "fleas-ticks":
      drawing = <><path d="m25 25-10-8-5 7m14 8L8 33l-3 9m21-1-13 8v10m25-34 10-8 6 7m-14 8 16 1 3 9m-21-1 13 8v10" /><ellipse cx="32" cy="36" rx="12" ry="17" fill="currentColor" /><path d="M28 20V10m8 10V10" /><path stroke="var(--color-signal)" d="M27 31c-4 5-2 11 0 13" /></>;
      break;
    case "termites":
      drawing = <>{legs}{antennae}<circle cx="32" cy="22" r="8" fill="currentColor" /><ellipse cx="32" cy="42" rx="9" ry="16" fill="currentColor" /><path stroke="var(--color-signal)" d="M25 36h14m-15 7h16m-14 7h12" /><path d="m28 16-3-5m11 5 3-5" /></>;
      break;
    case "bed-bugs":
      drawing = <>{legs}{antennae}<circle cx="32" cy="22" r="6" fill="currentColor" /><ellipse cx="32" cy="40" rx="14" ry="17" fill="currentColor" /><path stroke="var(--color-signal)" d="M21 33h22m-24 8h26m-22 8h18M32 26v29" /></>;
      break;
    default:
      drawing = <>{legs}<path d="m27 20-8-15m18 15 8-15" /><ellipse cx="32" cy="38" rx="11" ry="21" fill="currentColor" /><path stroke="var(--color-signal)" d="M32 24v29m-7-25 7 7 7-7" /></>;
  }

  return <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 shrink-0">{drawing}</svg>;
}
