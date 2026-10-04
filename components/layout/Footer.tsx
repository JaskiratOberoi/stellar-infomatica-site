import Link from "next/link";
import { GROUPS, PRODUCTS, byGroup, frameNo, type ProductGroup } from "@/lib/products";
import { Wordmark, PerfEdge, Pin } from "@/components/bench/primitives";

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/disclaimer", label: "Clinical disclaimer" },
];

export function Footer() {
  const groups = Object.keys(GROUPS) as ProductGroup[];
  return (
    <footer className="relative mt-24 bg-ink">
      <PerfEdge hole="ink" className="h-4 bg-orange" />
      <div className="mx-auto max-w-[80rem] px-4 pb-10 pt-12 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[42ch] text-edge-dim">
              Software for diagnostic laboratories, developed and operated inside a working laboratory network in India.
            </p>
            <a href="mailto:support@stellarinfomatica.com" className="mt-6 inline-block font-display text-[1.4rem] uppercase tracking-[0.04em] text-orange hover:text-tape">
              support@stellarinfomatica.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g}>
                <div className="label-caps mb-4 text-orange">{GROUPS[g].scene} · {GROUPS[g].title}</div>
                <ul className="space-y-2.5">
                  {byGroup(g).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/products/${p.slug}`} className="group flex items-baseline gap-2 text-edge-dim hover:text-edge">
                        <span className="font-display text-[0.75rem] tracking-[0.1em] text-spool-light group-hover:text-orange">{frameNo(p.frame)}</span>
                        <span className="text-[0.95rem]">{p.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal pages hang on pins */}
        <div className="mt-14">
          <div className="h-px w-full bg-edge-dim/50" aria-hidden />
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {legal.map((l) => (
              <div key={l.href} className="flex flex-col items-center">
                <Pin />
                <Link href={l.href} className="-mt-1 border border-spool-light bg-char px-4 py-2 text-[0.85rem] text-edge-dim hover:border-orange hover:text-edge">
                  {l.label}
                </Link>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <Pin />
              <Link href="/clinical" className="-mt-1 border border-spool-light bg-char px-4 py-2 text-[0.85rem] text-edge-dim hover:border-orange hover:text-edge">
                Clinical logic
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-spool pt-6">
          <p className="label-caps text-edge-dim">© {new Date().getFullYear()} Stellar Infomatica · {PRODUCTS.length} products</p>
          <p className="label-caps text-edge-dim">Screens on this site are illustrative and use synthetic data</p>
        </div>
      </div>
    </footer>
  );
}
