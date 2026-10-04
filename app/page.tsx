import Link from "next/link";
import { Rail } from "@/components/bench/Rail";
import { ScaledScreen } from "@/components/bench/ScaledScreen";
import { ScreenFor } from "@/components/screens";
import { GreaseTick, PerfEdge, Pin, PlateAnchor, PlateLink, SceneHead } from "@/components/bench/primitives";
import { DEMO_MAILTO } from "@/components/layout/Navbar";
import { GROUPS, PRODUCTS, byGroup, frameNo, type ProductGroup } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function Home() {
  const groups = Object.keys(GROUPS) as ProductGroup[];
  const deferred = PRODUCTS.flatMap((p) => p.marks.filter((m) => m.mark === "deferred").map((m) => ({ ...m, product: p })));

  return (
    <>
      {/* ── First viewport: headline plate + the rail ───────────── */}
      <section className="mx-auto max-w-[80rem] px-4 pb-10 pt-10 sm:px-6 md:pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <h1 className="text-[clamp(3.4rem,9.5vw,6rem)] font-semibold text-edge">
              Every step<br />of the lab.<br />
              <span className="text-orange">On one rail.</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[1.125rem] leading-relaxed text-edge-dim md:text-[1.25rem]">
              Stellar Infomatica builds the software a diagnostic laboratory runs on: analyzer interfacing, the laboratory command centre, clinical screening engines, stock and materials, people and money. Twelve products, proven inside a working lab network in India.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PlateAnchor href={DEMO_MAILTO} size="lg">Request a demo</PlateAnchor>
              <Link href="#products" className="label-caps text-edge-dim hover:text-orange">See all twelve frames ▸</Link>
            </div>
          </div>

          {/* Edge-code readout */}
          <dl className="grid grid-cols-1 gap-px border border-spool bg-spool sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["12", "Products on the rail"],
              ["4", "Scenes: floor, clinic, stores, people"],
              ["1", "Lab network they were built inside"],
            ].map(([n, l]) => (
              <div key={l} className="flex items-baseline gap-4 bg-ink px-5 py-4">
                <dt className="font-display text-[2.6rem] leading-none text-orange tabular">{n}</dt>
                <dd className="label-caps text-edge-dim">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Rail />

      {/* ── The bench: where this was made ───────────────────────── */}
      <section id="bench" className="mx-auto mt-24 max-w-[80rem] scroll-mt-24 px-4 sm:px-6">
        <SceneHead scene="The bench" title="Built inside a working lab" line="None of this was designed from a survey. Each product was written for a live pathology and genomics network and runs there before it is offered to anyone else." />
        <div className="mt-10 grid gap-px border border-spool bg-spool md:grid-cols-3">
          {[
            ["Around ninety", "business units, from central labs to collection points, served by the same stack this site describes."],
            ["Ten roles", "from lab director to front desk, derived from the LIS user model and shared across Infinity, Telo and Nexus."],
            ["One ledger", "for every tube, letterhead and reagent. Balances are derived from history and never stored."],
          ].map(([h, t]) => (
            <div key={h} className="bg-ink p-7">
              <h3 className="text-[2rem] text-edge">{h}</h3>
              <p className="mt-3 text-edge-dim">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 label-caps text-edge-dim">Facts about the proving ground, not customer counts. We publish no testimonials or logos.</p>
      </section>

      {/* ── Scenes 01–04: every product as a frame ───────────────── */}
      <div id="products" className="scroll-mt-24" />
      {groups.map((g) => (
        <section key={g} className="mx-auto mt-28 max-w-[80rem] px-4 sm:px-6" aria-labelledby={`scene-${g}`}>
          <div id={`scene-${g}`}>
            <SceneHead scene={GROUPS[g].scene} title={GROUPS[g].title} line={GROUPS[g].line} />
          </div>
          <div className="mt-10 space-y-10">
            {byGroup(g).map((p, i) => (
              <ProductFrame key={p.slug} slug={p.slug} flip={i % 2 === 1} />
            ))}
          </div>
        </section>
      ))}

      {/* ── Set aside, still reachable ───────────────────────────── */}
      <section className="mx-auto mt-28 max-w-[80rem] px-4 sm:px-6" aria-labelledby="pins">
        <SceneHead scene="On the pins" title="Set aside, still reachable" line="What is deferred hangs here in plain sight. We would rather you knew." />
        <div className="mt-2 h-px w-full bg-edge-dim/50" aria-hidden />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {deferred.map((d, i) => (
            <div key={d.product.slug + d.label} className="flex flex-col items-center">
              <Pin />
              <Link href={`/products/${d.product.slug}`} className="-mt-1 w-full border border-spool-light bg-char hover:border-orange" style={{ transform: `rotate(${(i % 2 ? -1 : 1) * 1.2}deg)` }}>
                <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                <div className="px-3 py-2.5">
                  <div className="label-caps text-orange">{d.product.name}</div>
                  <p className="mt-1.5 text-[0.9rem] leading-snug text-edge">{d.label}</p>
                </div>
                <PerfEdge hole="edge" className="h-2.5 opacity-40" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact close: orange field ──────────────────────────── */}
      <section id="contact" className="mt-28 scroll-mt-24">
        <div className="field-orange">
          <PerfEdge hole="ink" className="h-4" />
          <div className="mx-auto grid max-w-[80rem] gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-24">
            <div>
              <h2 className="text-[clamp(2.8rem,7vw,5rem)] font-semibold text-ink">Book a bench demo.</h2>
              <p className="mt-6 max-w-[48ch] text-[1.125rem] text-ink/85">
                Write to us with your lab’s name, the city, and the frames you want to see. We reply from the same address and set up a walkthrough on a production-shaped staging system.
              </p>
            </div>
            <div className="flex flex-col items-start justify-end gap-5">
              <PlateAnchor href={DEMO_MAILTO} tone="ink" size="lg" className="w-full md:w-auto">Request a demo</PlateAnchor>
              <a href="mailto:support@stellarinfomatica.com" className="font-display text-[1.5rem] uppercase tracking-[0.04em] text-ink underline decoration-ink/40 underline-offset-[6px] hover:decoration-ink">
                support@stellarinfomatica.com
              </a>
            </div>
          </div>
          <PerfEdge hole="ink" className="h-4" />
        </div>
      </section>
    </>
  );
}

/* A wide frame: punched window with the screen, text column beside it. */
function ProductFrame({ slug, flip }: { slug: string; flip?: boolean }) {
  const p = PRODUCTS.find((x) => x.slug === slug)!;
  return (
    <article className="relative bg-char" aria-labelledby={`frame-h-${p.slug}`}>
      <PerfEdge hole="ink" className="h-3.5 bg-orange" />
      <div className={cn("grid gap-8 p-5 md:p-8 lg:grid-cols-[1.15fr_1fr]", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="self-start bg-punch p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]">
          <ScaledScreen designWidth={640} aspect={16 / 10}>
            <ScreenFor slug={p.slug} />
          </ScaledScreen>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[1.1rem] tracking-[0.14em] text-orange">{frameNo(p.frame)}</span>
            <span className="label-caps text-edge-dim">{p.short} · {p.platform}</span>
          </div>
          <h3 id={`frame-h-${p.slug}`} className="mt-3 text-[2.4rem] text-edge md:text-[2.8rem]">{p.name}</h3>
          <p className="mt-4 max-w-[58ch] text-edge-dim">{p.summary}</p>
          <ul className="mt-5 space-y-2">
            {p.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-3 text-[0.95rem] leading-snug text-edge">
                <GreaseTick className="mt-0.5 shrink-0 text-orange" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-l border-orange/60 pl-4 text-[0.9rem] text-edge-dim">{p.provenance}</p>
          <div className="mt-auto pt-7">
            <PlateLink href={`/products/${p.slug}`} tone="secondary">Open frame {frameNo(p.frame)}</PlateLink>
          </div>
        </div>
      </div>
      <PerfEdge hole="ink" className="h-3.5 bg-orange" />
    </article>
  );
}
