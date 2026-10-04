import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Shared miniature-app chrome for every screen vignette.
   Vignettes are authored demonstrations with synthetic data. */

export function Screen({ title, children, className, nav }: { title: string; children: ReactNode; className?: string; nav?: string[] }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-[#0f1115] text-[#e8e8e8] font-body text-[11px] leading-[1.35] antialiased select-none", className)} aria-label={`${title} screen, illustrative`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#13161c] px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" />
        <span className="font-display uppercase tracking-[0.12em] text-[10px] text-white/85">{title}</span>
        <span className="ml-1 rounded-[2px] border border-[#ff5a1f]/70 px-1 py-px font-display text-[8px] uppercase tracking-[0.14em] text-[#ff9a6b]">Demo data</span>
        {nav && (
          <span className="ml-auto hidden gap-2.5 text-[9.5px] text-white/45 sm:flex">
            {nav.map((n, i) => (
              <span key={n} className={cn(i === 0 && "text-white/85 border-b border-[#ff5a1f] pb-px")}>{n}</span>
            ))}
          </span>
        )}
      </div>
      <div className="relative flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

export function Panel({ children, className, title }: { children: ReactNode; className?: string; title?: string }) {
  return (
    <div className={cn("rounded-[3px] border border-white/10 bg-[#171a20]", className)}>
      {title && <div className="border-b border-white/10 px-2 py-1 text-[9.5px] uppercase tracking-[0.1em] text-white/50">{title}</div>}
      {children}
    </div>
  );
}

export function Dot({ tone = "ok", className }: { tone?: "ok" | "warn" | "err" | "idle" | "info"; className?: string }) {
  const c = { ok: "bg-[#35c46a]", warn: "bg-[#f2b134]", err: "bg-[#ff4d3d]", idle: "bg-white/30", info: "bg-[#4aa8ff]" }[tone];
  return <span className={cn("inline-block h-1.5 w-1.5 rounded-full", c, className)} />;
}

export function Chip({ children, tone = "idle", className }: { children: ReactNode; tone?: "ok" | "warn" | "err" | "idle" | "info"; className?: string }) {
  const c = {
    ok: "bg-[#35c46a]/15 text-[#7fe0a4] border-[#35c46a]/30",
    warn: "bg-[#f2b134]/15 text-[#ffd37a] border-[#f2b134]/30",
    err: "bg-[#ff4d3d]/15 text-[#ff9a90] border-[#ff4d3d]/30",
    idle: "bg-white/5 text-white/60 border-white/15",
    info: "bg-[#4aa8ff]/15 text-[#9ccfff] border-[#4aa8ff]/30",
  }[tone];
  return <span className={cn("inline-flex items-center rounded-[2px] border px-1 py-px text-[9px] uppercase tracking-[0.08em] leading-[1.3]", c, className)}>{children}</span>;
}

export function Row({ cells, head, className, widths }: { cells: ReactNode[]; head?: boolean; className?: string; widths?: string[] }) {
  return (
    <div className={cn("grid items-center gap-x-2 border-b border-white/[0.07] px-2", head ? "py-1 text-[9px] uppercase tracking-[0.1em] text-white/45" : "py-[5px]", className)} style={{ gridTemplateColumns: widths?.join(" ") ?? `repeat(${cells.length}, minmax(0,1fr))` }}>
      {cells.map((c, i) => (
        <div key={i} className="truncate tabular-nums">{c}</div>
      ))}
    </div>
  );
}

export function Btn({ children, primary, className }: { children: ReactNode; primary?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-[2px] px-2 py-[3px] text-[10px] font-medium", primary ? "bg-[#ff5a1f] text-black" : "border border-white/20 text-white/80", className)}>
      {children}
    </span>
  );
}

export function Field({ label, value, className }: { label: string; value: ReactNode; className?: string }) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-[8.5px] uppercase tracking-[0.1em] text-white/45">{label}</div>
      <div className="truncate rounded-[2px] border border-white/15 bg-black/30 px-1.5 py-[3px] text-[10.5px] text-white/90">{value}</div>
    </div>
  );
}

export function Bars({ values, max, color = "#ff5a1f", className, labels }: { values: number[]; max?: number; color?: string; className?: string; labels?: string[] }) {
  const m = max ?? Math.max(...values);
  return (
    <div className={cn("flex items-end gap-[3px] h-full", className)}>
      {values.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-0.5 min-w-0">
          <div className="w-full rounded-t-[1px]" style={{ height: `${Math.max(4, (v / m) * 100)}%`, background: color, opacity: 0.85 }} />
          {labels && <span className="text-[7.5px] text-white/40 truncate w-full text-center">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}
