"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PRODUCTS, frameNo } from "@/lib/products";
import { ScreenFor } from "@/components/screens";
import { ScaledScreen } from "./ScaledScreen";
import { ArrowDown, ArrowLeft, ArrowRight, PerfEdge, Pin, PlateLink, TapeFlag } from "./primitives";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "stellar.rail.frame";

/* The select rail: twelve product frames on a perforated strip.
   Scrubs with native inertia, settles on frame pitch via scroll-snap,
   the tape flag follows the frame in view, and the trims below re-pin
   to that product's feature lines (one vignette exists per product,
   so the trims carry text, not stills). */
export function Rail() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [frameW, setFrameW] = useState(240);
  const [flagX, setFlagX] = useState(0);
  const [left, setLeft] = useState(0);
  const reduce = useReducedMotion();
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  // Measure a frame and track which one sits at the rail's read head.
  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-frame]");
    if (first) setFrameW(first.offsetWidth);
  }, []);

  const onScroll = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-frame]");
    if (!first) return;
    const pitch = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "12");
    const idx = Math.round(el.scrollLeft / pitch);
    const clamped = Math.max(0, Math.min(PRODUCTS.length - 1, idx));
    setActive(clamped);
    setFlagX(clamped * pitch - el.scrollLeft);
    setLeft(el.scrollLeft);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => { measure(); onScroll(); });
    if (scroller.current) ro.observe(scroller.current);
    // Return to the frame the visitor left.
    try {
      const saved = Number(sessionStorage.getItem(STORAGE_KEY));
      if (saved > 0 && scroller.current) {
        const first = scroller.current.querySelector<HTMLElement>("[data-frame]");
        const pitch = (first?.offsetWidth ?? 240) + 12;
        scroller.current.scrollLeft = saved * pitch;
      }
    } catch {}
    onScroll();
    return () => ro.disconnect();
  }, [measure, onScroll]);

  useEffect(() => {
    try { sessionStorage.setItem(STORAGE_KEY, String(active)); } catch {}
  }, [active]);

  const goTo = useCallback((i: number) => {
    const el = scroller.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-frame]");
    const pitch = (first?.offsetWidth ?? 240) + parseFloat(getComputedStyle(el).columnGap || "12");
    el.scrollTo({ left: i * pitch, behavior: reduce ? "auto" : "smooth" });
  }, [reduce]);

  // Mouse drag scrubbing on desktop.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !scroller.current) return;
    drag.current = { x: e.clientX, left: scroller.current.scrollLeft, moved: false };
    scroller.current.classList.add("cursor-grabbing");
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !scroller.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    scroller.current.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    if (!scroller.current) return;
    scroller.current.classList.remove("cursor-grabbing");
    if (drag.current?.moved) onScroll();
    drag.current = null;
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(Math.min(active + 1, PRODUCTS.length - 1)); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(Math.max(active - 1, 0)); }
    if (e.key === "Home") { e.preventDefault(); goTo(0); }
    if (e.key === "End") { e.preventDefault(); goTo(PRODUCTS.length - 1); }
  };

  const current = PRODUCTS[active];
  const padStart = "max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))";

  return (
    <section aria-label="The Stellar suite on the select rail" className="relative">
      {/* Orange field: the rail itself */}
      <div className="field-orange relative text-ink">
        <PerfEdge hole="ink" className="h-4" />

        {/* Frame-count ticks with numbers */}
        <div className="relative h-8 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 rail-ticks opacity-80" style={{ ["--frame-w" as string]: `${frameW + 12}px`, backgroundPositionX: `calc(${padStart} - ${left}px)` }} />
          <TickNumbers left={left} frameW={frameW + 12} padStart={padStart} />
        </div>

        {/* Tape flag folded over the perforation of the frame in view */}
        <div className="pointer-events-none absolute left-0 top-6 z-20 h-[8.5rem] w-full overflow-hidden" aria-hidden>
          <motion.div className="absolute top-0" animate={{ x: flagX }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }} style={{ left: `calc(${padStart} + ${frameW}px - 4.5rem)` }}>
            <TapeFlag label={frameNo(current.frame)} />
          </motion.div>
        </div>

        {/* The strip */}
        <div
          ref={scroller}
          role="listbox"
          aria-label="Products"
          aria-activedescendant={`frame-${current.slug}`}
          tabIndex={0}
          onKeyDown={onKey}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="snap-rail hide-scrollbar flex cursor-grab gap-3 overflow-x-auto pb-5 pt-3 outline-none focus-visible:[box-shadow:inset_0_0_0_3px_var(--color-ink)]"
          style={{ paddingLeft: padStart, paddingRight: padStart, scrollPaddingInline: padStart }}
        >
          {PRODUCTS.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.slug}
                id={`frame-${p.slug}`}
                role="option"
                aria-selected={isActive}
                data-frame
                onClick={() => { if (!drag.current?.moved) goTo(i); }}
                className={cn(
                  "snap-frame relative w-[15rem] shrink-0 bg-ink text-edge transition-[box-shadow,transform] duration-300 sm:w-[17rem] lg:w-[19rem]",
                  isActive ? "shadow-[0_0_0_3px_var(--color-ink),0_0_0_5px_var(--color-edge)] z-10" : "opacity-95 hover:opacity-100"
                )}
              >
                <PerfEdge hole="orange" className="h-3" />
                <div className="px-3 pb-2.5 pt-2">
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-display text-[0.8rem] tracking-[0.14em] text-orange">{frameNo(p.frame)}</span>
                    <span className="label-caps text-edge-dim">{p.short}</span>
                  </div>
                  {/* Punched white window: the only place the screen lives */}
                  <div className="bg-punch p-1.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]">
                    <ScaledScreen designWidth={560} aspect={16 / 10}>
                      <ScreenFor slug={p.slug} />
                    </ScaledScreen>
                  </div>
                  <div className="mt-2.5 font-display text-[1.25rem] uppercase leading-none tracking-[0.03em]">{p.name}</div>
                </div>
                <PerfEdge hole="orange" className="h-3" />
              </div>
            );
          })}
        </div>
        <PerfEdge hole="ink" className="h-4" />
      </div>

      {/* Hung trims: the active product's stills on pins */}
      <div className="relative bg-ink">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2 pt-5">
            <p className="label-caps text-edge-dim">
              On the pins · <span className="text-edge">{current.name}</span> · {current.platform}
            </p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => goTo(Math.max(active - 1, 0))} className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-orange disabled:opacity-40" disabled={active === 0} aria-label="Previous frame"><ArrowLeft /> Prev</button>
              <span className="label-caps tabular text-orange">{frameNo(active + 1)} / {frameNo(PRODUCTS.length)}</span>
              <button type="button" onClick={() => goTo(Math.min(active + 1, PRODUCTS.length - 1))} className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-orange disabled:opacity-40" disabled={active === PRODUCTS.length - 1} aria-label="Next frame">Next <ArrowRight /></button>
            </div>
          </div>

          {/* the wire */}
          <div className="mt-3 h-px w-full bg-edge-dim/60" aria-hidden />

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-5" key={current.slug}>
            {current.features.slice(0, 4).map((f, i) => (
              <div key={f} className="flex flex-col items-center">
                <Pin />
                <div className={cn("-mt-1 w-full border border-spool-light bg-char", !reduce && "swing")} style={{ ["--swing-from" as string]: `${(i % 2 ? -1 : 1) * (5 - i)}deg` }}>
                  <PerfEdge hole="edge" orientation="x" className="h-2.5 opacity-40" />
                  <p className="px-3 py-2.5 text-[0.9rem] leading-snug text-edge">{f}</p>
                  <PerfEdge hole="edge" orientation="x" className="h-2.5 opacity-40" />
                </div>
              </div>
            ))}
            <div className="col-span-2 flex flex-col items-start justify-end gap-3 sm:col-span-4 lg:col-span-1 lg:items-center">
              <PlateLink href={`/products/${current.slug}`} tone="secondary" className="w-full">Open frame {frameNo(current.frame)}</PlateLink>
              <Link href="#products" className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-orange">All twelve, by scene <ArrowDown /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Frame numbers riding above the ticks, moving with the strip. */
function TickNumbers({ left, frameW, padStart }: { left: number; frameW: number; padStart: string }) {
  return (
    <div className="absolute top-1 flex" style={{ left: `calc(${padStart} - ${left}px)` }}>
      {PRODUCTS.map((p) => (
        <span key={p.slug} className="font-display text-[0.8rem] tracking-[0.1em] text-ink/90" style={{ width: frameW }}>{frameNo(p.frame)}</span>
      ))}
    </div>
  );
}
