import { Screen, Panel, Chip, Row, Btn, Field } from "./chrome";

/* Synthetic demonstration data only. No real patients. */

export function BioSentryScreen() {
  const markers = [
    ["AFP", "42.10", "ng/mL", "1.08", "1.08"],
    ["uE3", "1.70", "ng/mL", "1.12", "1.12"],
    ["Free β-hCG", "12.40", "ng/mL", "0.86", "0.86"],
    ["Inhibin-A", "210.0", "pg/mL", "0.93", "0.93"],
  ];
  const risks = [
    ["Trisomy 21", "1:1,420", "< 1:10,000", "< 1:10,000"],
    ["Trisomy 18", "1:4,900", "< 1:10,000", "< 1:10,000"],
    ["Trisomy 13", "1:8,600", "1:8,600", "1:8,600"],
  ];
  return (
    <Screen title="BioSentry · Risk analysis" nav={["Worksheet", "Risk analysis", "Reports"]}>
      <div className="grid h-full grid-rows-[auto_1fr_auto] gap-2 p-2">
        <div className="grid grid-cols-6 gap-1.5">
          {[["Patient", "Case 4172"], ["Age", "29 y"], ["Weight", "58 kg"], ["Trimester", "Second · 15w 3d"], ["Fetuses", "Twins · DC"], ["IVF", "No"]].map(([k, v]) => (
            <Field key={k} label={k} value={v} />
          ))}
        </div>
        <div className="grid grid-rows-[auto_1fr] gap-2 min-h-0">
          <div className="grid grid-cols-[1.1fr_1fr] gap-2">
            <Panel title="Marker analysis">
              <Row head cells={["Marker", "Value", "Unit", "MoM", "Corr. MoM"]} widths={["1.1fr", "0.8fr", "0.7fr", "0.6fr", "0.8fr"]} />
              {markers.map((m) => (
                <Row key={m[0]} widths={["1.1fr", "0.8fr", "0.7fr", "0.6fr", "0.8fr"]} cells={[m[0], m[1], <span key="u" className="text-white/55">{m[2]}</span>, m[3], m[4]]} />
              ))}
              <div className="px-2 py-1.5 text-[9px] text-white/50">Corrections applied: weight 58 kg · South Asian medians · non-smoker</div>
            </Panel>
            <Panel title="Risk comparison · Fetus A">
              <Row head cells={["Aneuploidy", "Background", "Biochem.", "Combined"]} widths={["1fr", "0.9fr", "0.9fr", "0.9fr"]} />
              {risks.map((r) => (
                <Row key={r[0]} widths={["1fr", "0.9fr", "0.9fr", "0.9fr"]} cells={[r[0], r[1], r[2], <span key="c" className="text-[#7fe0a4] font-medium">{r[3]}</span>]} />
              ))}
              <div className="flex items-center gap-2 px-2 py-1.5 text-[9.5px]"><Chip tone="ok">NTD low risk</Chip><span className="text-white/50">cut-off 1:250</span><span className="ml-auto text-white/50">Fetus B: tab</span></div>
            </Panel>
          </div>
          {/* Risk vs maternal age: three small curves with the case marked */}
          <div className="grid grid-cols-3 gap-2 min-h-0">
            {[["Trisomy 21", "M30 54 C 58 51, 80 42, 92 27 S 104 9, 110 3"], ["Trisomy 18", "M30 57 C 60 54, 82 48, 94 33 S 104 15, 110 6"], ["Trisomy 13", "M30 58 C 62 57, 84 51, 96 36 S 105 18, 110 9"]].map(([t, d]) => (
              <Panel key={t} title={`${t} · risk vs maternal age`} className="min-h-0">
                <div className="h-full min-h-[60px] p-1.5">
                  <svg viewBox="0 0 116 66" className="h-full w-full">
                    {[15, 30, 45].map((y) => <line key={y} x1="14" x2="112" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" />)}
                    <line x1="14" x2="112" y1="60" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
                    <text x="0" y="61.5" fontSize="4" fill="rgba(255,255,255,0.4)">1:5k</text>
                    <text x="0" y="6" fontSize="4" fill="rgba(255,255,255,0.4)">1:5</text>
                    <path d={d} fill="none" stroke="#ea5a22" strokeWidth="1.1" />
                    <circle cx="52" cy="54" r="1.8" fill="#7fe0a4" />
                    <text x="55" y="51" fontSize="4" fill="#7fe0a4">29 y · this case</text>
                    <text x="29" y="65.5" fontSize="3.6" fill="rgba(255,255,255,0.35)">20</text>
                    <text x="106" y="65.5" fontSize="3.6" fill="rgba(255,255,255,0.35)">45</text>
                  </svg>
                </div>
              </Panel>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5"><span className="text-[9.5px] text-white/50">Chorionicity-specific medians · IVF correction off</span><Btn primary className="ml-auto">Calculate risk</Btn><Btn>Download report</Btn></div>
      </div>
    </Screen>
  );
}

export function SenseScreen() {
  const groups = [
    { g: "Mites", items: [["D. pteronyssinus", 3], ["D. farinae", 2]] },
    { g: "Pollens", items: [["Parthenium", 4], ["Cynodon", 1], ["Prosopis", 2]] },
    { g: "Foods", items: [["Peanut", 0], ["Milk", 1], ["Shrimp", 3]] },
    { g: "Moulds", items: [["Aspergillus", 1], ["Alternaria", 0]] },
  ];
  const cls = ["bg-white/10", "bg-[#35c46a]/35", "bg-[#f2b134]/45", "bg-[#ff8a3d]/60", "bg-[#ff4d3d]/70"];
  return (
    <Screen title="Sense · Allergen panel" nav={["Patients", "Tests", "Reports", "Settings"]}>
      <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-2 p-2">
        <Panel title="Advance panel · case 2208 · age band 18–40 · region North">
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 p-2">
            {groups.map((grp) => (
              <div key={grp.g}>
                <div className="mb-1 text-[8.5px] uppercase tracking-[0.1em] text-white/45">{grp.g}</div>
                {grp.items.map(([n, c]) => (
                  <div key={n as string} className="flex items-center gap-1.5 py-[2px] text-[10px]">
                    <span className="w-24 truncate">{n}</span>
                    <span className="flex gap-[2px]">{[0, 1, 2, 3, 4].map((i) => <span key={i} className={`h-2 w-3 rounded-[1px] ${i <= (c as number) && c !== 0 ? cls[c as number] : "bg-white/[0.06]"}`} />)}</span>
                    <span className="ml-auto text-white/55">class {c as number}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Panel>
        <div className="flex flex-col gap-2">
          <Panel title="Interpretation">
            <div className="p-2 text-[10px] leading-[1.45] text-white/80">Parthenium class 4 with Cynodon class 1: cross-reactivity flagged within the pollen group. Exposure context: high seasonal load in the patient’s region.</div>
          </Panel>
          <Panel title="Report">
            <div className="p-2 flex flex-col gap-1.5"><div className="flex justify-between text-[9.5px]"><span className="text-white/55">Letterhead</span><span>Lab branding</span></div><div className="flex justify-between text-[9.5px]"><span className="text-white/55">Signatory</span><span>Dr. (configured)</span></div><div className="flex gap-1.5 mt-0.5"><Btn primary>Generate PDF</Btn><Btn>QR link</Btn></div></div>
          </Panel>
        </div>
      </div>
    </Screen>
  );
}
