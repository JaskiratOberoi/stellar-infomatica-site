"use client";

import { useId, useState } from "react";

/* Multiple of the median: a patient value divided by the population median
   for the same gestational age. 1.0 is the median; the slider moves a dot. */
export function MoMExplainer() {
  const [mom, setMom] = useState(1.0);
  const id = useId();
  // The chart spans one third to three times the median, so ×3 and ÷3 sit
  // the same distance from the centre line. The slider stops at 0.4.
  const min = 0.4;
  const max = 3.0;
  // Rounded so server and client render the same string.
  const pos = (v: number) => Math.round((50 - (Math.log(v) / Math.log(max)) * 50) * 100) / 100;
  const top = Math.max(4, Math.min(96, pos(mom)));
  const status = mom === 1 ? "At the median" : mom > 1 ? "Deviated high" : "Deviated low";

  return (
    <div className="grid gap-8 bg-char p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
      <div>
        <p className="text-edge-dim">
          Marker levels change with gestational age, so a raw value means little on its own. Dividing by the population median for that week normalises every marker to the same scale. A MoM of 1.0 is exactly typical; the further from 1.0, the larger the deviation the risk model weighs.
        </p>
        <div className="mt-8">
          <label htmlFor={id} className="label-caps text-edge-dim">Drag the patient result</label>
          <input
            id={id}
            type="range"
            min={min}
            max={max}
            step={0.1}
            value={mom}
            onChange={(e) => setMom(parseFloat(e.target.value))}
            className="mt-3 w-full accent-accent"
            aria-valuetext={`${mom.toFixed(1)} MoM, ${status}`}
          />
          <div className="mt-4 flex items-baseline gap-4">
            <span className="font-display text-[3.2rem] leading-none text-accent tabular">{mom.toFixed(1)}</span>
            <span className="label-caps text-edge">MoM · {status}</span>
          </div>
        </div>
      </div>

      {/* Punched window with the chart */}
      <div className="bg-punch p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]">
        <div className="relative h-[320px] bg-[#0f1115] text-[#e8e8e8]" aria-hidden>
          <div className="absolute left-3 top-3 bottom-3 flex flex-col justify-between font-display text-[0.75rem] tracking-[0.1em] text-white/45">
            {[3.0, 2.0, 1.0, 0.5, 0.33].map((v) => (
              <span key={v} className={v === 1 ? "text-[#8f6bff]" : ""} style={{ position: "absolute", top: `calc(${pos(v)}% - 0.5em)` }}>{v === 0.33 ? "⅓" : v.toFixed(1)}</span>
            ))}
          </div>
          <div className="absolute inset-y-3 left-14 right-4">
            {[3.0, 2.0, 0.5, 0.33].map((v) => (
              <div key={v} className="absolute left-0 right-0 h-px bg-white/10" style={{ top: `${pos(v)}%` }} />
            ))}
            <div className="absolute left-0 right-0 border-t-2 border-dashed border-[#8f6bff]/80" style={{ top: "50%" }}>
              <span className="absolute -top-5 right-0 font-display text-[0.75rem] tracking-[0.1em] text-[#8f6bff]">Population median · 1.0 MoM</span>
            </div>
            {mom !== 1 && (
              <div className="absolute left-1/2 w-0.5 -translate-x-1/2 bg-white/30" style={{ top: `${Math.min(50, top)}%`, height: `${Math.abs(50 - top)}%` }} />
            )}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[top] duration-200 ease-out" style={{ top: `${top}%` }}>
              <div className="h-5 w-5 rounded-full border-2 border-white bg-[#8f6bff] shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
          <div className="absolute bottom-3 left-14 font-display text-[0.75rem] tracking-[0.1em] text-white/45">Log scale · same distance for ×3 and ÷3</div>
        </div>
      </div>
    </div>
  );
}
