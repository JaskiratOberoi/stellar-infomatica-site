import Link from "next/link";
import { Rail } from "@/components/bench/Rail";
import { ScaledScreen } from "@/components/bench/ScaledScreen";
import { ScreenFor } from "@/components/screens";
import { ArrowDown, GreaseCross, GreaseTick, PerfEdge, Pin, PlateAnchor, PlateLink, SceneHead } from "@/components/bench/primitives";
import { DEMO_MAILTO } from "@/components/layout/Navbar";
import { GROUPS, PRODUCTS, byGroup, frameNo, type ProductGroup } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function Home() {
  const groups = Object.keys(GROUPS) as ProductGroup[];
  const deferred = PRODUCTS.flatMap((p) => p.marks.filter((m) => m.mark === "deferred").map((m) => ({ ...m, product: p })));

  return (
    <>
      {/* ── First viewport: headline plate, then the rail ──────────
          Kept short on purpose so the orange rail starts inside the
          first screen at desktop and phone widths. */}
      <section className="mx-auto max-w-[80rem] px-4 pb-7 pt-7 sm:px-6 md:pb-9 md:pt-9">
        <div className="grid items-end gap-x-12 gap-y-6 lg:grid-cols-[1.2fr_1fr]">
          <h1 className="text-[clamp(2.9rem,7vw,4.9rem)] font-semibold text-edge">
            Every step of the lab.<br />
            <span className="text-orange">On one rail.</span>
          </h1>
          <div>
            <p className="max-w-[46ch] text-[1.0625rem] leading-snug text-edge-dim md:text-[1.125rem]">
              Twelve products for the diagnostic laboratory, from analyzer interfacing to billing, stock and payroll analytics. Built inside a working lab network in India.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PlateAnchor href={DEMO_MAILTO} size="lg">Request a demo</PlateAnchor>
              <Link href="#products" className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-orange">
                All twelve, by scene <ArrowDown />
              </Link>
            </div>
          </div>
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
        <SceneHead scene="On the pins" title="Set aside, still reachable" line="What is not in this cut hangs here in plain sight. We would rather you knew." />
        <div className="mt-2 h-px w-full bg-edge-dim/50" aria-hidden />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {deferred.map((d, i) => (
            <div key={d.product.slug + d.label} className="flex flex-col items-center">
              <Pin />
              <Link href={`/products/${d.product.slug}`} className="-mt-1 w-full border border-spool-light bg-char hover:border-orange" style={{ transform: `rotate(${(i % 2 ? -1 : 1) * 1.2}deg)` }}>
                <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                <div className="px-3 pb-2.5 pt-2">
                  {/* a crossed frame: not in this cut */}
                  <div className="relative mb-2.5 flex h-9 items-center justify-center bg-punch text-ink">
                    <GreaseCross className="h-8 w-8 text-ink" />
                    <span className="absolute bottom-0.5 right-1.5 font-display text-[0.6rem] uppercase tracking-[0.14em] text-ink/70">not in this cut</span>
                  </div>
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

/* A wide frame: punched window with the screen, and the copy carried on a
   trim beside it. The frame numeral is printed on the sprocket strip. */
function ProductFrame({ slug, flip }: { slug: string; flip?: boolean }) {
  const p = PRODUCTS.find((x) => x.slug === slug)!;
  return (
    <article className="relative bg-char" aria-labelledby={`frame-h-${p.slug}`}>
      <div className="relative">
        <PerfEdge hole="ink" className="h-5 bg-orange" />
        <span className="absolute left-3 top-0 flex h-5 items-center bg-orange px-2 font-display text-[0.95rem] font-semibold tracking-[0.16em] text-ink">{frameNo(p.frame)}</span>
      </div>
      <div className={cn("grid gap-6 p-4 md:gap-8 md:p-7 lg:grid-cols-[1.15fr_1fr]", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="self-start bg-punch p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]">
          <ScaledScreen designWidth={640} aspect={16 / 10}>
            <ScreenFor slug={p.slug} />
          </ScaledScreen>
        </div>

        {/* the trim: copy lives on its own strip, not loose on the field */}
        <div className="flex flex-col border border-spool-light bg-ink">
          <PerfEdge hole="edge" className="h-2.5 opacity-40" />
          <div className="flex flex-1 flex-col px-5 py-4 md:px-6">
            <h3 id={`frame-h-${p.slug}`} className="text-[2.3rem] text-edge md:text-[2.7rem]">{p.name}</h3>
            <p className="label-caps mt-2 text-edge-dim">{p.short} · {p.platform}</p>
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
            <div className="mt-auto pt-6">
              <PlateLink href={`/products/${p.slug}`} tone="secondary">Open frame {frameNo(p.frame)}</PlateLink>
            </div>
          </div>
          <PerfEdge hole="edge" className="h-2.5 opacity-40" />
        </div>
      </div>
      <PerfEdge hole="ink" className="h-5 bg-orange" />
    </article>
  );
}
