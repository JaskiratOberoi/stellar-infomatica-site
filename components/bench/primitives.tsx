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

/* ─── Icons: one stroke weight, matched to the mark ─────────── */
const iconBase = "inline-block h-[1em] w-[1em] shrink-0 align-[-0.1em]";
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn(iconBase, className)} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M2.5 8h10M8.5 3.5L13 8l-4.5 4.5" />
    </svg>
  );
}
export function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn(iconBase, className)} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M13.5 8h-10M7.5 3.5L3 8l4.5 4.5" />
    </svg>
  );
}
export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn(iconBase, className)} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M8 2.5v10M3.5 8.5L8 13l4.5-4.5" />
    </svg>
  );
}

/* ─── Plate (buttons) ──────────────────────────────────────────
   A plate is a punched metal tag: perforation columns left and right.
   Primary is solid orange; secondary is an outlined plate. State is the
   hole marks and the tape tone, never a glow. */
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
  "relative inline-flex items-center justify-center font-display uppercase tracking-[0.14em] whitespace-nowrap select-none transition-[background-color,color,transform] duration-200 ease-out active:translate-y-px shadow-[0_3px_8px_-2px_rgba(0,0,0,0.5)]";
const plateTone = {
  primary: "bg-orange text-ink hover:bg-tape",
  secondary: "border border-orange text-orange hover:bg-orange hover:text-ink",
  ink: "bg-ink text-orange border border-orange/60 hover:border-orange hover:text-tape",
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

/* ─── Tape flag ───────────────────────────────────────────────────
   A strip of canvas tape folded over the perforation where the editor
   stopped: woven texture, a fold with its own shadow, a torn foot.
   Drawn as vector so it stays crisp at any density. */
export function TapeFlag({ className, label }: { className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 64 120" className={cn("h-[7.5rem] w-16", className)} aria-hidden>
      <defs>
        <pattern id="tape-weave" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#ff7a3d" />
          <path d="M0 0h2v2H0zM2 2h2v2H2z" fill="#ff8f5a" opacity="0.7" />
          <path d="M0 2h2v2H0zM2 0h2v2H2z" fill="#f0612a" opacity="0.5" />
        </pattern>
        <linearGradient id="tape-fold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.45" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tape-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
        <filter id="tape-drop" x="-30%" y="-10%" width="160%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#tape-drop)">
        {/* the strip, folded over at the top */}
        <path d="M4 14 L60 14 L60 96 L52 104 L44 96 L36 106 L28 97 L20 105 L12 96 L4 102 Z" fill="url(#tape-weave)" />
        <path d="M4 14 L60 14 L60 96 L52 104 L44 96 L36 106 L28 97 L20 105 L12 96 L4 102 Z" fill="url(#tape-shade)" />
        {/* the fold: a doubled band at the top with its shadow falling down the strip */}
        <path d="M4 2 L60 8 L60 24 L4 18 Z" fill="#ff8f5a" />
        <path d="M4 2 L60 8 L60 24 L4 18 Z" fill="url(#tape-weave)" opacity="0.6" />
        <rect x="4" y="18" width="56" height="22" fill="url(#tape-fold)" />
        {/* grease-pencil frame number */}
        {label && (
          <text x="32" y="66" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="600" fontSize="26" fill="#0a0a0a" letterSpacing="2" filter="url(#grease)">
            {label}
          </text>
        )}
      </g>
    </svg>
  );
}

/* ─── Grease-pencil marks (state) ──────────────────────────────
   Hand-weight strokes: the width swells and the ends overshoot. */
export function GreaseTick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden fill="currentColor" style={{ filter: "url(#grease)" }}>
      <path d="M3.2 12.6c.6-.9 1.4-1.6 2.3-1.1 1.6 1 3 2.6 4.1 4 .3.3.5.2.7-.1 2.6-4 5.6-7.5 9.2-10.4.8-.6 1.9.3 1.4 1.2-3.4 3.8-6.4 8-8.9 12.4-.5.9-1.6 1-2.2.2-1.8-2.2-3.8-4.2-6.3-5.4-.5-.2-.6-.6-.3-.8z" />
    </svg>
  );
}
export function GreaseCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden fill="currentColor" style={{ filter: "url(#grease)" }}>
      <path d="M3.6 4.9c.4-.9 1.3-1.2 2-.6 5.2 4.6 10 9.6 14.6 14.7.6.7.1 1.8-.8 1.6-5.5-4.4-10.6-9.3-15.5-14.5-.4-.4-.5-.8-.3-1.2z" />
      <path d="M20.2 4.1c.9.1 1.3 1 .8 1.7-4.4 5.5-9.3 10.5-14.6 15.1-.7.6-1.8 0-1.6-.9 4.5-5.4 9.5-10.4 14.8-15.3.2-.3.4-.5.6-.6z" />
    </svg>
  );
}
/* Tape band: a strip of orange canvas across an item that is committed. */
export function TapeBand({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <span className={cn("relative inline-flex items-center px-2.5 py-1 font-display text-[0.75rem] uppercase tracking-[0.14em] text-ink", className)} style={{ background: "repeating-linear-gradient(90deg, #ff7a3d 0 2px, #ff8f5a 2px 4px)", transform: "rotate(-1.5deg)", boxShadow: "0 1px 2px rgba(0,0,0,0.45)" }}>
      {children ?? "committed"}
    </span>
  );
}
export function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 24" className={cn("h-6 w-3.5", className)} aria-hidden>
      <defs>
        <radialGradient id="pin-head" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffb089" />
          <stop offset="0.45" stopColor="#ff5a1f" />
          <stop offset="1" stopColor="#a8320c" />
        </radialGradient>
      </defs>
      <ellipse cx="7.5" cy="22" rx="3.5" ry="1" fill="#000" opacity="0.5" />
      <rect x="6.3" y="7.5" width="1.4" height="14" fill="#d8d8d8" />
      <rect x="7" y="7.5" width="0.7" height="14" fill="#8a8a8a" />
      <circle cx="7" cy="4.4" r="4" fill="url(#pin-head)" />
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
      <filter id="grease" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
