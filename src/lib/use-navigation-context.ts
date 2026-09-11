"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { getNavigationContext } from "./navigation";

function subscribe(callback: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  // Next Link can update a fragment using history.pushState.
  const afterClick = () => { timer = setTimeout(callback, 0); };
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  document.addEventListener("click", afterClick);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
    document.removeEventListener("click", afterClick);
  };
}

export function useNavigationContext() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  return { pathname, ...getNavigationContext(pathname, hash) };
}
