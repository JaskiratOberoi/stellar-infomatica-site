"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Wordmark, PlateAnchor, PerfEdge } from "@/components/bench/primitives";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#why", label: "Why Stellar" },
  { href: "/clinical", label: "Clinical logic" },
  { href: "/#contact", label: "Contact" },
];

export const DEMO_MAILTO = "mailto:support@stellarinfomatica.com?subject=Demonstration%20request%20%E2%80%94%20Stellar%20Infomatica";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Stellar Infomatica, home">
          <Wordmark />
        </Link>
        <span aria-hidden className="hidden h-6 w-px bg-spool-light lg:block" />
        <span className="label-caps hidden text-edge-dim lg:block">Laboratory software suite</span>

        <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => {
            const current = l.href === path || (l.href.startsWith("/#") && path === "/" && false);
            return (
              <Link key={l.href} href={l.href} className={cn("label-caps border-b border-transparent pb-1 text-edge-dim transition-colors hover:text-edge", current && "border-accent text-edge")}>
                {l.label}
              </Link>
            );
          })}
          <PlateAnchor href={DEMO_MAILTO} size="md" className="ml-2">Request a demonstration</PlateAnchor>
        </nav>

        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" className="ml-auto flex h-10 w-10 items-center justify-center border border-spool-light text-edge md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <PerfEdge hole="ink" className="h-2.5 bg-accent" />
      {open && (
        <div id="mobile-nav" className="border-b border-spool bg-ink md:hidden">
          <nav className="mx-auto flex max-w-[80rem] flex-col px-4 py-3 sm:px-6" aria-label="Primary, mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="label-caps border-b border-spool py-4 text-edge">
                {l.label}
              </Link>
            ))}
            <PlateAnchor href={DEMO_MAILTO} className="mt-4 w-full">Request a demonstration</PlateAnchor>
          </nav>
        </div>
      )}
    </header>
  );
}
