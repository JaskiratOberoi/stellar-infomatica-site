import Link from "next/link";
import { Rail } from "@/components/bench/Rail";
import { ScaledScreen } from "@/components/bench/ScaledScreen";
import { ScreenFor } from "@/components/screens";
import { ArrowDown, GreaseTick, PerfEdge, Pin, PlateAnchor, PlateLink, SceneHead } from "@/components/bench/primitives";
import { DEMO_MAILTO } from "@/components/layout/Navbar";
import { GROUPS, PRODUCTS, byGroup, frameNo, type ProductGroup } from "@/lib/products";
import { cn } from "@/lib/utils";

const governance = [
  ["Audit trails", "Polaris writes every decision and every skip to an append-only log. Matter audits every mutation. Apex records every reveal of a statutory identifier."],
  ["Access by role", "Ten roles derived from the LIS user model govern Infinity, Telo and Nexus; sub-franchise accounts see only their own unit, with prices hidden where they should be."],
  ["Data stays in the laboratory", "BioSentry runs on-premise. Synapse queues results locally when the LIS or network is down, so nothing is lost and nothing leaves the lab PC unplanned."],
  ["Encryption and masking", "Apex holds Aadhaar, PAN, UAN, ESI and bank details encrypted at rest with AES-256-GCM, masked by default, with isolation enforced on the server."],
];

export default function Home() {
  const groups = Object.keys(GROUPS) as ProductGroup[];
  const planned = PRODUCTS.flatMap((p) => p.marks.filter((m) => m.mark === "deferred").map((m) => ({ ...m, product: p })));

  return (
    <>
      {/* ── First viewport: headline, then the rail ──────────────── */}
      <section className="mx-auto max-w-[80rem] px-4 pb-7 pt-7 sm:px-6 md:pb-9 md:pt-9">
        <div className="grid items-end gap-x-12 gap-y-6 lg:grid-cols-[1.2fr_1fr]">
          <h1 className="text-[clamp(2.8rem,6.6vw,4.6rem)] font-medium text-edge">
            Every step of the laboratory.<br />
            <span className="text-accent">One integrated suite.</span>
          </h1>
          <div>
            <p className="max-w-[46ch] text-[1.0625rem] leading-snug text-edge-dim md:text-[1.125rem]">
              Twelve products for diagnostic laboratories, from analyzer interfacing and the laboratory information system to clinical screening, inventory and workforce analytics. Developed and operated inside a working laboratory network in India.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PlateAnchor href={DEMO_MAILTO} size="lg">Request a demonstration</PlateAnchor>
              <Link href="#products" className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-accent">
                All products <ArrowDown />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rail />

      {/* ── Why Stellar: where this was made ─────────────────────── */}
      <section id="why" className="mx-auto mt-24 max-w-[80rem] scroll-mt-24 px-4 sm:px-6">
        <SceneHead scene="Why Stellar" title="Developed inside a working laboratory" line="Each product was built for a live pathology and genomics network and operates there before it is offered to other laboratories." />
        <div className="mt-10 grid gap-px border border-spool bg-spool md:grid-cols-3">
          {[
            ["Around ninety", "business units, from central laboratories to collection points, served by the same systems described on this site."],
            ["Ten roles", "from laboratory director to front desk, derived from the LIS user model and shared across Infinity, Telo and Nexus."],
            ["One ledger", "for every tube, letterhead and reagent. Balances are derived from history and never stored."],
          ].map(([h, t]) => (
            <div key={h} className="bg-ink p-7">
              <h3 className="text-[2rem] text-edge">{h}</h3>
              <p className="mt-3 text-edge-dim">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 label-caps text-edge-dim">Figures describe the environment the suite was developed in. We do not publish customer counts, testimonials or logos.</p>
      </section>

      {/* ── Governance: facts for regulated laboratories ─────────── */}
      <section id="governance" className="mx-auto mt-24 max-w-[80rem] scroll-mt-24 px-4 sm:px-6">
        <SceneHead scene="Governance" title="Built for regulated laboratories" line="Capabilities that support an accredited laboratory’s obligations, stated as the products implement them." />
        <ul className="mt-10 grid gap-px border border-spool bg-spool sm:grid-cols-2">
          {governance.map(([h, t]) => (
            <li key={h} className="flex gap-4 bg-ink p-7">
              <GreaseTick className="mt-1 shrink-0 text-accent" />
              <div>
                <h3 className="text-[1.7rem] text-edge">{h}</h3>
                <p className="mt-2 text-edge-dim">{t}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[80ch] text-[0.95rem] text-edge-dim">
          These are product capabilities, not certifications. Accreditation and regulatory compliance remain the laboratory’s responsibility. Screening engines are decision support for qualified professionals; see the <Link href="/disclaimer" className="text-edge underline hover:text-accent">clinical disclaimer</Link>.
        </p>
      </section>

      {/* ── Products by area ─────────────────────────────────────── */}
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

      {/* ── Roadmap: planned work, hung on pins ──────────────────── */}
      <section id="roadmap" className="mx-auto mt-28 max-w-[80rem] scroll-mt-24 px-4 sm:px-6" aria-label="Roadmap">
        <SceneHead scene="Roadmap" title="In development" line="Work that is planned but not yet released is listed here, so what you see on a demonstration is what you would receive." />
        <div className="mt-2 h-px w-full bg-edge-dim/50" aria-hidden />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {planned.map((d) => (
            <div key={d.product.slug + d.label} className="flex flex-col items-center">
              <Pin />
              <Link href={`/products/${d.product.slug}`} className="-mt-1 w-full border border-spool-light bg-char hover:border-accent">
                <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                <div className="px-3 py-2.5">
                  <div className="label-caps text-accent">{d.product.name}</div>
                  <p className="mt-1.5 text-[0.9rem] leading-snug text-edge">{d.label}</p>
                  <p className="label-caps mt-2 text-edge-dim">Planned</p>
                </div>
                <PerfEdge hole="edge" className="h-2.5 opacity-40" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact close ────────────────────────────────────────── */}
      <section id="contact" className="mt-28 scroll-mt-24 bg-char">
        <PerfEdge hole="ink" className="h-4 bg-accent" />
        <div className="mx-auto grid max-w-[80rem] gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <h2 className="text-[clamp(2.6rem,6vw,4.4rem)] font-medium text-edge">Request a demonstration.</h2>
            <p className="mt-6 max-w-[50ch] text-[1.125rem] text-edge-dim">
              Tell us about your laboratory and the products you want to see. We reply from the same address and arrange a walkthrough on a staging system that mirrors production.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end gap-5">
            <PlateAnchor href={DEMO_MAILTO} size="lg" className="w-full md:w-auto">Request a demonstration</PlateAnchor>
            <a href="mailto:support@stellarinfomatica.com" className="font-display text-[1.4rem] uppercase tracking-[0.04em] text-accent hover:text-tape">
              support@stellarinfomatica.com
            </a>
          </div>
        </div>
        <PerfEdge hole="ink" className="h-4 bg-accent" />
      </section>
    </>
  );
}

/* A wide frame: punched window with the screen, and the copy carried on a
   trim beside it. The product number is printed on the sprocket strip. */
function ProductFrame({ slug, flip }: { slug: string; flip?: boolean }) {
  const p = PRODUCTS.find((x) => x.slug === slug)!;
  return (
    <article className="relative bg-char" aria-labelledby={`frame-h-${p.slug}`}>
      <div className="relative">
        <PerfEdge hole="ink" className="h-5 bg-accent" />
        <span className="absolute left-3 top-0 flex h-5 items-center bg-accent px-2 font-display text-[0.95rem] font-medium tracking-[0.16em] text-ink">{frameNo(p.frame)}</span>
      </div>
      <div className={cn("grid gap-6 p-4 md:gap-8 md:p-7 lg:grid-cols-[1.15fr_1fr]", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="self-start bg-punch p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]">
          <ScaledScreen designWidth={640} aspect={16 / 10}>
            <ScreenFor slug={p.slug} />
          </ScaledScreen>
        </div>

        <div className="flex flex-col border border-spool-light bg-ink">
          <PerfEdge hole="edge" className="h-2.5 opacity-40" />
          <div className="flex flex-1 flex-col px-5 py-4 md:px-6">
            <h3 id={`frame-h-${p.slug}`} className="text-[2.2rem] text-edge md:text-[2.5rem]">{p.name}</h3>
            <p className="label-caps mt-2 text-edge-dim">{p.short} · {p.platform}</p>
            <p className="mt-4 max-w-[58ch] text-edge-dim">{p.summary}</p>
            <ul className="mt-5 space-y-2">
              {p.features.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem] leading-snug text-edge">
                  <GreaseTick className="mt-0.5 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l border-accent/60 pl-4 text-[0.9rem] text-edge-dim">{p.provenance}</p>
            <div className="mt-auto pt-6">
              <PlateLink href={`/products/${p.slug}`} tone="secondary">View {p.name}</PlateLink>
            </div>
          </div>
          <PerfEdge hole="edge" className="h-2.5 opacity-40" />
        </div>
      </div>
      <PerfEdge hole="ink" className="h-5 bg-accent" />
    </article>
  );
}
