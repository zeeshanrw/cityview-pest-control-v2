"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import RequestForm from "./RequestForm";
export default function CallbackWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname === "/");
  const [autoClosePending, setAutoClosePending] = useState(pathname === "/");
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);
  useEffect(() => {
    if (open && focusOnOpen.current) {
      panel.current?.querySelector<HTMLInputElement>("input")?.focus();
      focusOnOpen.current = false;
    }
  }, [open]);
  useEffect(() => {
    if (!open || !autoClosePending) return;
    const timer = window.setTimeout(() => {
      setOpen(false);
      setAutoClosePending(false);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [open, autoClosePending]);
  if (pathname === "/contact") return null;
  function close() {
    setAutoClosePending(false);
    setOpen(false);
    trigger.current?.focus();
  }
  function toggle() {
    setAutoClosePending(false);
    if (!open) focusOnOpen.current = true;
    setOpen(!open);
  }
  return <aside aria-label="Callback request" className="fixed bottom-3 right-3 z-40 flex max-w-[calc(100vw-1.5rem)] flex-col items-end md:bottom-6 md:right-6" onKeyDown={event => { if (event.key === "Escape") close(); }}>
    <div aria-hidden={!open} inert={!open} className={`w-80 max-w-full overflow-hidden transition-[max-height,opacity,transform,margin] duration-500 ease-out motion-reduce:transition-none ${open ? "mb-3 max-h-[calc(100dvh-11rem)] translate-y-0 opacity-100" : "pointer-events-none mb-0 max-h-0 translate-y-2 opacity-0 delay-100"}`}>
      <div ref={panel} id="callback-panel" onFocusCapture={() => setAutoClosePending(false)} onPointerDown={() => setAutoClosePending(false)} className="max-h-[calc(100dvh-11rem)] overflow-y-auto rounded-xl border border-paper/15 bg-ink/90 p-4 text-paper shadow-2xl backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="font-display text-xl uppercase">Request a Callback</h2>
          <button type="button" onClick={close} aria-label="Close callback form" className="h-11 w-11 shrink-0">✕</button>
        </div>
        <RequestForm id="floating-callback" callback dark />
      </div>
    </div>
    <button ref={trigger} type="button" onClick={toggle} aria-expanded={open} aria-controls="callback-panel" className="rounded-lg bg-signal px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-lg hover:bg-signal-dark">{open ? "Close callback" : "Request a Callback"}</button>
  </aside>;
}
