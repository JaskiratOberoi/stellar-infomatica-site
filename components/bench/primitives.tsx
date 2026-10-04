import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ─── Wordmark ─────────────────────────────────────────────── */
export function Mark({ className }: { className?: string }) {
  // A punched 35mm frame with a star in the window: the Stellar mark.
  return (
    <svg viewBox="0 0 40 28" className={cn("h-6 w-auto", className)} aria-hidden="true" fill="none">
      <rect x="0.75" y="0.75" width="38.5" height="26.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {[4, 10, 16, 22].map((y) => (
        <g key={y}>
          <rect x="3.5" y={y} width="3" height="2.4" fill="currentColor" />
          <rect x="33.5" y={y} width="3" height="2.4" fill="currentColor" />
        </g>
      ))}
      <path d="M20 6.5l2.1 5.4 5.7.3-4.5 3.6 1.5 5.6L20 18.3l-4.8 3.1 1.5-5.6-4.5-3.6 5.7-.3L20 6.5z" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className, tone = "edge" }: { className?: string; tone?: "edge" | "orange" | "ink" }) {
  const color = tone === "orange" ? "text-orange" : tone === "ink" ? "text-ink" : "text-edge";
  return (
    <span className={cn("inline-flex items-center gap-2.5", color, className)}>
      <Mark />
      <span className="font-display uppercase tracking-[0.06em] text-[1.35rem] leading-none">
        Stellar <span className="font-light">Infomatica</span>
      </span>
    </span>
  );
}

/* ─── Plate (buttons) ──────────────────────────────────────────
   A plate is a punched metal tag: perforation columns left and right.
   Primary is solid orange; secondary is an outlined plate. */
type PlateProps = {
  tone?: "primary" | "secondary" | "ink";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

function PlateHoles({ tone }: { tone: PlateProps["tone"] }) {
  const hole = tone === "primary" ? "bg-ink" : tone === "ink" ? "bg-orange" : "border border-current";
  return (
    <>
      <span aria-hidden className="absolute left-1.5 top-0 bottom-0 flex flex-col justify-center gap-1">
        {[0, 1, 2].map((i) => <span key={i} className={cn("block h-1.5 w-1.5 rounded-full", hole)} />)}
      </span>
      <span aria-hidden className="absolute right-1.5 top-0 bottom-0 flex flex-col justify-center gap-1">
        {[0, 1, 2].map((i) => <span key={i} className={cn("block h-1.5 w-1.5 rounded-full", hole)} />)}
      </span>
    </>
  );
}

const plateBase =
  "relative inline-flex items-center justify-center font-display uppercase tracking-[0.14em] whitespace-nowrap select-none transition-[background-color,color,transform,box-shadow] duration-200 ease-out active:translate-y-px";
const plateTone = {
  primary: "bg-orange text-ink hover:bg-tape shadow-[0_6px_18px_-6px_rgba(255,90,31,0.55)] hover:shadow-[0_10px_24px_-8px_rgba(255,90,31,0.7)]",
  secondary: "border border-orange text-orange hover:bg-orange hover:text-ink",
  ink: "bg-ink text-orange border border-orange/60 hover:border-orange",
};
const plateSize = { md: "h-11 px-9 text-[0.9rem]", lg: "h-14 px-12 text-[1.05rem]" };

export function PlateLink({ tone = "primary", size = "md", className, children, ...rest }: PlateProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(plateBase, plateTone[tone], plateSize[size], className)} {...rest}>
      <PlateHoles tone={tone} />
      {children}
    </Link>
  );
}

export function PlateAnchor({ tone = "primary", size = "md", className, children, ...rest }: PlateProps & ComponentProps<"a">) {
  return (
    <a className={cn(plateBase, plateTone[tone], plateSize[size], className)} {...rest}>
      <PlateHoles tone={tone} />
      {children}
    </a>
  );
}

export function PlateButton({ tone = "primary", size = "md", className, children, ...rest }: PlateProps & ComponentProps<"button">) {
  return (
    <button className={cn(plateBase, plateTone[tone], plateSize[size], className)} {...rest}>
      <PlateHoles tone={tone} />
      {children}
    </button>
  );
}

/* ─── Punched window ───────────────────────────────────────────
   The only place running copy and foreign images are allowed. */
export function Window({ className, children, inset = true }: { className?: string; children: ReactNode; inset?: boolean }) {
  return (
    <div className={cn("relative bg-punch text-ink overflow-hidden", inset && "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25),inset_0_2px_10px_rgba(0,0,0,0.35)]", className)}>
      {children}
    </div>
  );
}

/* ─── Perforated edge strip ───────────────────────────────────── */
export function PerfEdge({ className, hole = "ink", orientation = "x" }: { className?: string; hole?: "ink" | "orange" | "edge"; orientation?: "x" | "y" }) {
  const holeVar = hole === "ink" ? "var(--color-ink)" : hole === "orange" ? "var(--color-orange)" : "var(--color-edge)";
  return (
    <div
      aria-hidden
      className={cn(orientation === "x" ? "sprocket-x h-3 w-full" : "perf-y w-3 h-full", className)}
      style={{ ["--perf-hole" as string]: holeVar }}
    />
  );
}

/* ─── Tape flag ───────────────────────────────────────────────── */
export function TapeFlag({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={cn("relative w-9", className)} aria-hidden>
      <div className="h-9 w-9 bg-tape shadow-[0_3px_6px_rgba(0,0,0,0.35)]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)" }} />
      <div className="absolute inset-x-0 top-0 h-2 bg-orange-deep/70" />
      {label && <span className="absolute inset-x-0 top-1.5 text-center font-display text-[0.7rem] text-ink tracking-[0.1em]">{label}</span>}
    </div>
  );
}

/* ─── Grease mark (state) ─────────────────────────────────────── */
export function GreaseTick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13.2l5 4.8L20 6.5" />
    </svg>
  );
}
export function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 22" className={cn("h-5 w-3", className)} aria-hidden>
      <circle cx="6" cy="4" r="3.6" fill="var(--color-orange)" />
      <circle cx="4.8" cy="3" r="1.1" fill="rgba(255,255,255,0.55)" />
      <rect x="5.3" y="7" width="1.4" height="14" fill="var(--color-edge-dim)" />
    </svg>
  );
}

/* ─── Section heading plate ───────────────────────────────────── */
export function SceneHead({ scene, title, line, right }: { scene: string; title: string; line?: string; right?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b rule-orange pb-4">
      <div>
        <h2 className="text-[2.6rem] md:text-[3.4rem] text-edge">
          <span className="text-orange">{scene}.</span> {title}
        </h2>
        {line && <p className="mt-3 max-w-[60ch] text-edge-dim">{line}</p>}
      </div>
      {right}
    </div>
  );
}

/* ─── SVG filter for grease strokes (mounted once in layout) ───── */
export function GreaseFilterDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <filter id="grease" x="-10%" y="-200%" width="120%" height="500%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9 0.08" numOctaves="2" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
      </filter>
    </svg>
  );
}
