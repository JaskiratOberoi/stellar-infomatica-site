import type { Metadata } from "next";
import Link from "next/link";
import { PathologyGrid } from "@/components/clinical/PathologyGrid";
import { MoMExplainer } from "@/components/clinical/MoMExplainer";
import { PerfEdge, PlateLink, SceneHead } from "@/components/bench/primitives";

export const metadata: Metadata = {
  title: "Clinical logic — how BioSentry computes risk",
  description: "The pathologies, markers, MoM normalisation and covariates behind the Stellar BioSentry prenatal screening engine.",
};

const vectors = [
  ["IVF treatment", "Correction factors for in-vitro fertilisation pregnancies, dated from the transfer."],
  ["Smoking status", "Maternal smoking shifts PAPP-A and free β-hCG; the medians are adjusted."],
  ["Maternal weight", "Marker concentration is corrected for maternal weight before MoM is computed."],
  ["Ethnicity", "Population-specific median adjustments, including South Asian profiles."],
  ["Gestational age", "The axis every marker is normalised on; dated by LMP or ultrasound (CRL or BPD)."],
  ["Diabetes", "Type 1 and type 2 diabetes carry their own marker corrections."],
];

export default function ClinicalPage() {
  return (
    <>
      <section className="field-orange">
        <PerfEdge hole="ink" className="h-4" />
        <div className="mx-auto max-w-[80rem] px-4 py-12 sm:px-6 md:py-20">
          <Link href="/products/biosentry" className="label-caps text-ink/80 hover:text-ink">◀ Frame 06 · Stellar BioSentry</Link>
          <h1 className="mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6rem)] font-semibold text-ink">The science of probability.</h1>
          <p className="mt-6 max-w-[56ch] text-[1.125rem] text-ink/85 md:text-[1.25rem]">
            The pathologies, markers and corrections that drive the BioSentry engine, shown with the working. Decision support for qualified professionals; the clinician signs the result.
          </p>
        </div>
        <PerfEdge hole="ink" className="h-4" />
      </section>

      <section className="mx-auto mt-20 max-w-[80rem] px-4 sm:px-6">
        <SceneHead scene="A" title="Target pathologies" line="What the engine screens for, and which markers each pathology reads." />
        <div className="mt-10"><PathologyGrid /></div>
      </section>

      <section className="mx-auto mt-24 max-w-[80rem] px-4 sm:px-6">
        <SceneHead scene="B" title="The mathematics of deviation" line="Multiples of the median: how a raw marker value becomes a comparable number." />
        <div className="mt-10"><MoMExplainer /></div>
      </section>

      <section className="mx-auto mt-24 max-w-[80rem] px-4 sm:px-6">
        <SceneHead scene="C" title="Input vectors" line="Covariates that move the medians before any risk is computed." />
        <ul className="mt-10 grid gap-px border border-spool bg-spool sm:grid-cols-2 lg:grid-cols-3">
          {vectors.map(([h, t]) => (
            <li key={h} className="bg-ink p-6">
              <h3 className="text-[1.6rem] text-edge">{h}</h3>
              <p className="mt-2 text-edge-dim">{t}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <PlateLink href="/products/biosentry" tone="secondary">Open frame 06</PlateLink>
          <Link href="/disclaimer" className="label-caps self-center text-edge-dim hover:text-orange">Read the clinical disclaimer ▸</Link>
        </div>
      </section>
    </>
  );
}
