import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, PerfEdge } from "@/components/bench/primitives";

export function LegalLayout({ title, date, children }: { title: string; date: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-char">
        <PerfEdge hole="ink" className="h-4 bg-orange" />
        <div className="mx-auto max-w-[80rem] px-4 py-10 sm:px-6 md:py-14">
          <Link href="/" className="label-caps inline-flex items-center gap-1.5 text-edge-dim hover:text-edge"><ArrowLeft /> Home</Link>
          <h1 className="mt-5 text-[clamp(2.6rem,7vw,4.5rem)] font-medium text-edge">{title}</h1>
          <p className="label-caps mt-3 text-edge-dim">Last updated {date}</p>
        </div>
        <PerfEdge hole="ink" className="h-4 bg-orange" />
      </section>
      <article className="legal mx-auto max-w-[80rem] px-4 pt-12 sm:px-6">
        <div className="mx-auto max-w-[72ch] space-y-10 text-[1.0625rem] leading-relaxed text-edge-dim [&_h2]:mb-4 [&_h2]:text-[1.9rem] [&_h2]:text-edge [&_p]:mb-4 [&_strong]:text-edge">
          {children}
        </div>
      </article>
    </>
  );
}
