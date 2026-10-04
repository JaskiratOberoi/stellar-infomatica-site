import { Screen, Panel, Chip, Row, Btn, Field, Bars } from "./chrome";

/* Synthetic demonstration data only. No real units, people or payroll. */

export function MatterScreen() {
  const ledger = [
    ["18 Sep 14:10", "Dispatch", "Store A → BU-N04", "Letterhead A4", "−2,000"],
    ["18 Sep 11:42", "Receipt", "Vendor → Store A", "EDTA vial 2 mL", "+5,000"],
    ["18 Sep 09:05", "Dispatch", "Store A → BU-W02", "Envelope DL", "−600"],
    ["17 Sep 17:30", "Adjustment", "Store B", "Barcode roll", "−3 · voided"],
  ];
  return (
    <Screen title="Matter · Ledger" nav={["Record", "Stock", "Orders", "Tracer", "Catalog"]}>
      <div className="grid h-full grid-cols-[1.25fr_0.75fr] gap-2 p-2">
        <Panel title="Ledger · newest first">
          <Row head cells={["When", "Kind", "Route", "Material", "Base units"]} widths={["0.9fr", "0.7fr", "1.1fr", "1fr", "0.8fr"]} />
          {ledger.map((r, i) => (
            <Row key={i} widths={["0.9fr", "0.7fr", "1.1fr", "1fr", "0.8fr"]} className={i === 3 ? "opacity-50 line-through" : ""} cells={[<span key="w" className="text-white/55">{r[0]}</span>, r[1], r[2], r[3], <span key="n" className="text-right block">{r[4]}</span>]} />
          ))}
          <div className="px-2 py-1.5 text-[9.5px] text-white/50">Balances are derived from this list. 1 voided, excluded from stock.</div>
        </Panel>
        <div className="flex flex-col gap-2">
          <Panel title="Tracer · BU-N04 · Sept">
            <div className="p-2 space-y-[3px] text-[10px]">
              {[["Letterheads", "1,840"], ["Envelopes", "1,620"], ["EDTA vials", "2,210"], ["Serum tubes", "1,975"], ["Urine containers", "410"]].map(([k, v]) => (
                <div key={k} className="flex justify-between"><span className="text-white/65">{k}</span><span className="tabular-nums">{v}</span></div>
              ))}
              <div className="pt-1 text-[9px] text-white/45">From 3,112 LIS results · 16 s</div>
            </div>
          </Panel>
          <Btn primary className="justify-center">Record a movement</Btn>
        </div>
      </div>
    </Screen>
  );
}

export function SmsScreen() {
  const items = [
    ["TSH reagent kit", "CLIA-01", "12", "2", "0", "10"],
    ["HbA1c cartridge", "HPLC-A", "40", "0", "1", "33"],
    ["CBC diluent 20 L", "CBC-02", "3", "1", "0", "3"],
    ["Serum tube 5 mL", "—", "1,200", "0", "4", "1,048"],
  ];
  return (
    <Screen title="SMS · Daily count" nav={["Today", "Ledger", "Snapshots", "Instruments"]}>
      <div className="grid h-full grid-rows-[auto_1fr] gap-2 p-2">
        <div className="flex items-end gap-1.5">
          <Field label="Unit" value="BU-N04" className="w-20" />
          <Field label="Date" value="18 Sep 2026" className="w-24" />
          <Chip tone="warn" className="self-end mb-[3px]">closing not yet submitted</Chip>
          <Btn primary className="ml-auto self-end">Submit closing</Btn>
        </div>
        <Panel>
          <Row head cells={["Item", "Instrument", "Opening", "Receipts", "Wastage", "Closing"]} widths={["1.3fr", "0.8fr", "0.6fr", "0.6fr", "0.6fr", "0.7fr"]} />
          {items.map((r) => (
            <Row key={r[0]} widths={["1.3fr", "0.8fr", "0.6fr", "0.6fr", "0.6fr", "0.7fr"]} cells={[r[0], <span key="i" className="text-white/55">{r[1]}</span>, r[2], r[3], r[4], <span key="c" className="rounded-[2px] border border-[#ea5a22]/60 bg-black/30 px-1 py-px text-right block">{r[5]}</span>]} />
          ))}
          <div className="px-2 py-1.5 text-[9.5px] text-white/50">Consumption is derived on the server and shown to super admin only.</div>
        </Panel>
      </div>
    </Screen>
  );
}

export function AssetTrackerScreen() {
  const assets = [
    ["AT-0113", "Centrifuge, 24-place", "BU-N04 · Sample room", "Bill attached", "ok"],
    ["AT-0114", "−20 °C freezer", "Store A", "Bill attached", "ok"],
    ["AT-0117", "Barcode printer", "BU-W02 · Counter", "Bill missing", "warn"],
    ["AT-0121", "UPS 3 kVA", "BU-N04 · Analyzer bay", "Pending review", "info"],
  ] as const;
  return (
    <Screen title="Asset Tracker" nav={["Assets", "Locations", "Companies", "Onboarding"]}>
      <div className="grid h-full grid-cols-[1.3fr_0.7fr] gap-2 p-2">
        <Panel title="Assets · 212">
          <Row head cells={["Tag", "Asset", "Location", "Bill"]} widths={["0.6fr", "1.2fr", "1.2fr", "0.9fr"]} />
          {assets.map((a) => (
            <Row key={a[0]} widths={["0.6fr", "1.2fr", "1.2fr", "0.9fr"]} cells={[<span key="t" className="font-mono text-[10px]">{a[0]}</span>, a[1], <span key="l" className="text-white/55">{a[2]}</span>, <Chip key="c" tone={a[4]}>{a[3]}</Chip>]} />
          ))}
        </Panel>
        <Panel title="Public onboarding">
          <div className="p-2 space-y-1.5"><Field label="Asset name" value="Microscope, binocular" /><Field label="Location" value="BU-E01 · Histology" /><Field label="Bill (PDF)" value="INV-2291.pdf" /><Btn primary className="w-full justify-center">Submit for review</Btn><div className="text-[9px] text-white/45">Anyone can submit. Only admins can read.</div></div>
        </Panel>
      </div>
    </Screen>
  );
}

export function ApexScreen() {
  return (
    <Screen title="Apex · Profile" nav={["Directory", "Profile", "Add employee"]}>
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-2 p-2">
        <Panel title="Employee">
          <div className="p-2 space-y-1.5">
            <div className="flex items-center gap-2"><span className="h-7 w-7 rounded-full bg-white/15" /><div><div className="text-[11px]">R. Verma</div><div className="text-[9px] text-white/50">Lab technician · Entity N · BU-N04</div></div><Chip tone="ok" className="ml-auto">active</Chip></div>
            <div className="grid grid-cols-2 gap-1.5"><Field label="Employee code" value="N-00418" /><Field label="Joined" value="02 Jun 2025" /></div>
            <div><div className="flex justify-between text-[9px] text-white/50"><span>Payroll readiness</span><span>86%</span></div><div className="mt-1 h-1.5 rounded-full bg-white/10"><div className="h-full w-[86%] rounded-full bg-[#ea5a22]" /></div></div>
          </div>
        </Panel>
        <Panel title="Statutory · masked by default">
          <div className="p-2 space-y-1.5">
            {[["Aadhaar", "•••• •••• 4821"], ["PAN", "•••••12•K"], ["UAN", "•••••••3317"], ["Bank · IFSC", "••••9041 · SBIN00•••"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[10px]"><span className="text-white/55">{k}</span><span className="font-mono tracking-wider">{v}</span><Btn className="ml-2">Reveal</Btn></div>
            ))}
            <div className="text-[9px] text-white/45">Every reveal is written to the audit log. Stored AES-256-GCM.</div>
          </div>
        </Panel>
      </div>
    </Screen>
  );
}

export function MaximusScreen() {
  const units = [["Unit A", 10.4], ["Unit B", 16.5], ["Unit C", 21.6], ["Unit D", 22.6], ["Unit E", 23.4], ["Unit F", 27.9]];
  return (
    <Screen title="Maximus · Cost vs revenue" nav={["Map", "Units", "Periods"]}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-2 p-2">
        <Panel title="India · Q1 FY · HR cost">
          <div className="relative h-full min-h-[90px] p-1.5">
            <svg viewBox="0 0 120 120" className="h-full w-full">
              {/* stylised state blocks, not a true map */}
              {[[30, 10, 30, 26, 0.35], [60, 12, 28, 22, 0.75], [22, 36, 36, 30, 0.55], [58, 34, 34, 30, 0.9], [40, 66, 30, 32, 0.25], [70, 64, 26, 28, 0.45]].map(([x, y, w, h, o], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill="#ea5a22" opacity={o} stroke="#0f1115" strokeWidth="1.5" />
              ))}
              <text x="64" y="52" fontSize="7" fill="#fff" fontWeight="600">Unit D</text>
            </svg>
            <div className="absolute bottom-1.5 left-1.5 flex gap-1 text-[8.5px]"><span className="rounded-[2px] bg-[#ea5a22] px-1 text-black">HR cost</span><span className="rounded-[2px] border border-white/20 px-1 text-white/70">Revenue</span></div>
          </div>
        </Panel>
        <Panel title="Cost as share of revenue · by unit">
          <div className="h-full p-2 pb-1 min-h-[90px]"><Bars values={units.map((u) => u[1] as number)} max={35} labels={units.map((u) => u[0] as string)} /></div>
        </Panel>
      </div>
    </Screen>
  );
}
