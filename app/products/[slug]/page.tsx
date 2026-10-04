import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GROUPS, PRODUCTS, bySlug, frameNo } from "@/lib/products";
import { ScaledScreen } from "@/components/bench/ScaledScreen";
import { ScreenFor } from "@/components/screens";
import { ArrowLeft, ArrowRight, GreaseTick, PerfEdge, Pin, PlateAnchor, PlateLink, TapeBand } from "@/components/bench/primitives";
import { DEMO_MAILTO } from "@/components/layout/Navbar";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.short}`,
    description: p.summary,
    openGraph: { title: `${p.name} | Stellar Infomatica`, description: p.summary },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();
  const group = GROUPS[p.group];
  const prev = PRODUCTS.find((x) => x.frame === p.frame - 1);
  const next = PRODUCTS.find((x) => x.frame === p.frame + 1);
  const committed = p.marks.filter((m) => m.mark === "committed");
  const deferred = p.marks.filter((m) => m.mark === "deferred");

  return (
    <>
      {/* Frame header on the accent field */}
      <section className="bg-char">
        <PerfEdge hole="ink" className="h-4 bg-accent" />
        <div className="mx-auto max-w-[80rem] px-4 py-10 sm:px-6 md:py-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/#products" className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-edge"><ArrowLeft /> All products</Link>
            <span className="label-caps text-edge-dim">{group.scene} · {group.title}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
            <span className="font-display text-[clamp(4rem,12vw,8rem)] font-light leading-[0.8] text-accent tabular">{frameNo(p.frame)}</span>
            <div>
              <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-medium text-edge">{p.name}</h1>
              <p className="label-caps mt-3 text-edge-dim">{p.short} · {p.platform}</p>
            </div>
          </div>
        </div>
        <PerfEdge hole="ink" className="h-4 bg-accent" />
      </section>

      {/* The big punched window */}
      <section className="mx-auto -mt-0 max-w-[80rem] px-4 sm:px-6">
        <div className="bg-char">
          <div className="p-3 sm:p-5">
            <div className="bg-punch p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)] sm:p-3">
              <ScaledScreen designWidth={720} aspect={16 / 10}>
                <ScreenFor slug={p.slug} />
              </ScaledScreen>
            </div>
            <p className="label-caps mt-3 text-edge-dim">Illustrative screen with synthetic data</p>
          </div>
          <PerfEdge hole="ink" className="h-3.5 bg-accent" />
        </div>
      </section>

      {/* Copy and features */}
      <section className="mx-auto mt-14 grid max-w-[80rem] gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[1.25rem] leading-relaxed text-edge md:text-[1.35rem]">{p.summary}</p>
          <p className="mt-6 border-l border-accent/60 pl-4 text-edge-dim">{p.provenance}</p>

          <h2 className="mt-12 text-[2rem] text-edge">What it does</h2>
          <ul className="mt-5 divide-y divide-spool border-y border-spool">
            {p.features.map((f) => (
              <li key={f} className="flex gap-4 py-3 text-edge">
                <GreaseTick className="mt-0.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-10">
          <div>
            <h2 className="text-[2rem] text-edge">Status</h2>
            <ul className="mt-5 space-y-3">
              {committed.map((m) => (
                <li key={m.label} className="flex items-center gap-3 border border-spool-light bg-char px-4 py-3">
                  <GreaseTick className="shrink-0 text-accent" />
                  <span className="text-edge">{m.label}</span>
                  <TapeBand className="ml-auto" />
                </li>
              ))}
            </ul>
            {deferred.length > 0 && (
              <>
                <div className="mt-6 h-px w-full bg-edge-dim/50" aria-hidden />
                <ul className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                  {deferred.map((m) => (
                    <li key={m.label} className="flex flex-col items-center">
                      <Pin />
                      <div className="-mt-1 w-full border border-spool-light bg-char">
                        <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                        <p className="px-3 py-2.5 text-[0.9rem] leading-snug text-edge">{m.label}</p>
                        <p className="label-caps px-3 pb-2.5 text-edge-dim">Planned</p>
                        <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <h2 className="text-[2rem] text-edge">Works with</h2>
            <ul className="mt-5 grid gap-px border border-spool bg-spool">
              {p.related.map((slug) => {
                const r = bySlug(slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/products/${slug}`} className="group flex items-baseline gap-4 bg-ink px-4 py-3 hover:bg-char">
                      <span className="font-display text-[0.9rem] tracking-[0.14em] text-accent">{frameNo(r.frame)}</span>
                      <span className="text-edge">{r.name}</span>
                      <span className="label-caps ml-auto text-edge-dim group-hover:text-accent">{r.short}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border border-accent p-6">
            <h2 className="text-[1.8rem] text-edge">See it in a demonstration</h2>
            <p className="mt-3 text-edge-dim">Tell us about your laboratory and we will walk you through {p.name} on a staging system that mirrors production.</p>
            <PlateAnchor href={DEMO_MAILTO} className="mt-5 w-full">Request a demonstration</PlateAnchor>
          </div>
        </aside>
      </section>

      {/* Prev / next on the rail */}
      <nav className="mx-auto mt-20 grid max-w-[80rem] gap-px border border-spool bg-spool px-0 sm:grid-cols-2" aria-label="Neighbouring products">
        {prev ? (
          <Link href={`/products/${prev.slug}`} className="group flex items-center gap-4 bg-ink p-5 hover:bg-char">
            <span className="label-caps inline-flex items-center gap-1.5 text-edge-dim"><ArrowLeft /> {frameNo(prev.frame)}</span>
            <span className="font-display text-[1.4rem] uppercase text-edge group-hover:text-accent">{prev.name}</span>
          </Link>
        ) : <span className="bg-ink p-5" />}
        {next ? (
          <Link href={`/products/${next.slug}`} className="group flex items-center justify-end gap-4 bg-ink p-5 hover:bg-char">
            <span className="font-display text-[1.4rem] uppercase text-edge group-hover:text-accent">{next.name}</span>
            <span className="label-caps inline-flex items-center gap-1.5 text-edge-dim">{frameNo(next.frame)} <ArrowRight /></span>
          </Link>
        ) : <span className="bg-ink p-5" />}
      </nav>
      <div className="mx-auto mt-6 max-w-[80rem] px-4 sm:px-6">
        <PlateLink href="/#products" tone="secondary">All products</PlateLink>
      </div>
    </>
  );
}
