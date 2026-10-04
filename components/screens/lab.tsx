import { Screen, Panel, Dot, Chip, Row, Btn, Field } from "./chrome";

/* All data below is synthetic demonstration content. */

export function SynapseScreen() {
  const instruments = [
    ["Maglumi X3", "TCP 192.168.4.21", "online", "ASTM E1394"],
    ["Mindray BS-240", "COM3 · 9600 8N1", "listening", "HL7 v2.3"],
    ["Horiba Pentra 60", "TCP 192.168.4.26", "online", "vendor"],
    ["Beckman AU480", "TCP 192.168.4.30", "connecting", "ASTM"],
    ["Getein MAGICL 6000", "COM5 · 19200", "offline", "vendor"],
  ] as const;
  const tone = { online: "ok", listening: "info", connecting: "warn", offline: "err" } as const;
  return (
    <Screen title="Synapse" nav={["Dashboard", "Instruments", "Discovery", "Mapping", "Monitor", "Logs"]}>
      <div className="grid h-full grid-cols-[1.4fr_1fr] gap-2 p-2">
        <Panel title="Instruments · 5 configured">
          <Row head cells={["Instrument", "Connection", "State", "Protocol"]} widths={["1.3fr", "1.2fr", "0.9fr", "0.8fr"]} />
          {instruments.map((r) => (
            <Row key={r[0]} widths={["1.3fr", "1.2fr", "0.9fr", "0.8fr"]} cells={[r[0], <span key="c" className="text-white/55">{r[1]}</span>, <span key="s" className="flex items-center gap-1"><Dot tone={tone[r[2]]} />{r[2]}</span>, <span key="p" className="text-white/55">{r[3]}</span>]} />
          ))}
        </Panel>
        <div className="flex flex-col gap-2 min-h-0">
          <Panel title="Pipeline · last 60 s" className="flex-1">
            <div className="grid grid-cols-4 gap-1 p-2 text-center">
              {[["Frames", "412"], ["Decoded", "412"], ["Mapped", "409"], ["Written", "409"]].map(([k, v]) => (
                <div key={k}><div className="font-display text-[18px] leading-none">{v}</div><div className="text-[8.5px] uppercase tracking-[0.1em] text-white/45 mt-1">{k}</div></div>
              ))}
            </div>
            <div className="px-2 pb-2 text-[9.5px] text-white/55">3 unmapped analytes queued for review · LIS live · cloud sync 12 s ago</div>
          </Panel>
          <Panel title="Monitor">
            <div className="p-2 font-mono text-[9px] leading-[1.5] text-white/70">
              <div><span className="text-white/35">14:02:11</span> ← H|\^&amp;|||Maglumi^X3||||P|E 1394-97</div>
              <div><span className="text-white/35">14:02:11</span> ← R|1|^^^TSH|2.41|uIU/mL||N||F</div>
              <div><span className="text-white/35">14:02:12</span> → LIS write S-0417 TSH 2.41 <Chip tone="ok">ok</Chip></div>
            </div>
          </Panel>
        </div>
      </div>
    </Screen>
  );
}

export function InfinityScreen() {
  const rows = [
    ["S-240918-0411", "Lipid profile", "BU-N04", "Authenticated", "ok"],
    ["S-240918-0412", "CBC + ESR", "BU-N04", "Entered", "info"],
    ["S-240918-0415", "Thyroid profile", "Client D-0298", "Pending", "warn"],
    ["S-240918-0417", "HbA1c", "BU-W02", "Authenticated", "ok"],
    ["S-240918-0419", "Vitamin D", "Client D-0113", "Rejected · haemolysed", "err"],
  ] as const;
  return (
    <Screen title="Infinity · Worksheet" nav={["Orders", "Accessioning", "Worksheet", "Reports", "Billing", "Analytics"]}>
      <div className="grid h-full grid-rows-[auto_1fr] gap-2 p-2">
        <div className="flex items-center gap-1.5">
          <Field label="Date" value="18 Sep 2026" className="w-24" />
          <Field label="Department" value="Biochemistry" className="w-28" />
          <Field label="Status" value="All" className="w-20" />
          <Btn primary className="ml-auto self-end">Save results</Btn>
          <Btn className="self-end">Lock report</Btn>
        </div>
        <Panel>
          <Row head cells={["Sample ID", "Tests", "Unit / client", "State", ""]} widths={["1.1fr", "1.1fr", "1fr", "1.2fr", "0.5fr"]} />
          {rows.map((r) => (
            <Row key={r[0]} widths={["1.1fr", "1.1fr", "1fr", "1.2fr", "0.5fr"]} cells={[<span key="s" className="font-mono text-[10px]">{r[0]}</span>, r[1], <span key="u" className="text-white/55">{r[2]}</span>, <Chip key="c" tone={r[4]}>{r[3]}</Chip>, <Btn key="b">PDF</Btn>]} />
          ))}
        </Panel>
      </div>
    </Screen>
  );
}

export function TeloScreen() {
  return (
    <Screen title="Telo · Bill" nav={["Counter", "Bills", "Receipts", "Clients", "Reports"]}>
      <div className="grid h-full grid-cols-[1fr_0.9fr] gap-2 p-2">
        <Panel title="Bill B-26-18833 · B2B · Client D-0298">
          <Row head cells={["Code", "Test", "Rate", "Amount"]} widths={["0.6fr", "1.6fr", "0.6fr", "0.7fr"]} />
          {[["BI235", "Vitamin B12", "₹ 650", "₹ 650"], ["BI005", "Vitamin D (25-OH)", "₹ 900", "₹ 900"], ["PK012", "Thyroid profile [PACKAGE]", "₹ 420", "₹ 420"], ["BI133", "Total IgE", "₹ 540", "₹ 540"]].map((r) => (
            <Row key={r[0]} widths={["0.6fr", "1.6fr", "0.6fr", "0.7fr"]} cells={[<span key="c" className="font-mono text-[10px] text-white/55">{r[0]}</span>, r[1], r[2], r[3]]} />
          ))}
          <div className="flex justify-between px-2 py-1.5 text-[10.5px]"><span className="text-white/55">Rate list 82 · B2B</span><span className="font-display text-[15px]">₹ 2,510</span></div>
        </Panel>
        <div className="flex flex-col gap-2">
          <Panel title="Sample IDs">
            <div className="p-2 grid grid-cols-2 gap-1">
              {["S-0411 EDTA", "S-0412 Serum", "S-0413 Fluoride", "S-0414 Serum"].map((s) => <span key={s} className="rounded-[2px] border border-white/15 px-1.5 py-[3px] font-mono text-[9.5px]">{s}</span>)}
            </div>
          </Panel>
          <Panel title="Origin">
            <div className="p-2 text-[9.5px] text-white/60">Created by <span className="font-mono text-white/85">telo:u-218</span> · receipt R-26-5120 · balance pinned</div>
          </Panel>
          <Btn primary className="justify-center">Print bill</Btn>
        </div>
      </div>
    </Screen>
  );
}

export function NexusScreen() {
  return (
    <Screen title="Nexus · Teller" nav={["Teller", "Lab", "Admin"]}>
      <div className="grid h-full grid-cols-3 gap-2 p-2">
        <Panel title="Today" className="col-span-3">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[["Samples in", "184"], ["Validated", "171"], ["Machines up", "6 / 7"], ["Kits low", "2"]].map(([k, v]) => (
              <div key={k} className="px-2 py-2"><div className="font-display text-[20px] leading-none">{v}</div><div className="mt-1 text-[8.5px] uppercase tracking-[0.1em] text-white/45">{k}</div></div>
            ))}
          </div>
        </Panel>
        <Panel title="Parameter ↔ machine" className="col-span-2">
          <div className="relative h-full min-h-[70px] p-2">
            <svg viewBox="0 0 220 70" className="h-full w-full">
              {[["HBsAg", 10], ["HCV", 30], ["HIV 1/2", 50]].map(([n, y]) => (
                <g key={n as string}><rect x="2" y={(y as number) - 7} width="52" height="14" rx="2" fill="#1f232b" stroke="rgba(255,255,255,0.15)" /><text x="8" y={(y as number) + 3.5} fontSize="7.5" fill="#ddd">{n}</text></g>
              ))}
              {[["CLIA-01", 20], ["CLIA-02", 50]].map(([n, y]) => (
                <g key={n as string}><rect x="160" y={(y as number) - 7} width="56" height="14" rx="2" fill="#1f232b" stroke="rgba(255,255,255,0.15)" /><text x="166" y={(y as number) + 3.5} fontSize="7.5" fill="#ddd">{n}</text></g>
              ))}
              {[[10, 20], [30, 20], [30, 50], [50, 50]].map(([a, b], i) => (
                <path key={i} d={`M54 ${a} C 110 ${a}, 110 ${b}, 160 ${b}`} stroke="#ea5a22" strokeWidth="1.2" fill="none" opacity="0.9" />
              ))}
            </svg>
          </div>
        </Panel>
        <Panel title="Daily validation">
          <div className="p-2 space-y-1 text-[9.5px]">
            {[["CLIA-01", "ok"], ["CLIA-02", "ok"], ["PCR-A", "warn"]].map(([m, t]) => (
              <div key={m} className="flex items-center justify-between"><span>{m}</span><Chip tone={t as "ok" | "warn"}>{t === "ok" ? "passed" : "due"}</Chip></div>
            ))}
          </div>
        </Panel>
      </div>
    </Screen>
  );
}

export function PolarisScreen() {
  const dec = [
    ["S-0402", "BI235", "412 pg/mL", "in range", "auth", "ok"],
    ["S-0405", "BI005", "18.2 ng/mL", "in range", "auth", "ok"],
    ["S-0409", "BI133", "640 IU/mL", "high", "comment", "warn"],
    ["S-0411", "LIPID", "—", "other test", "skip", "idle"],
  ] as const;
  return (
    <Screen title="Polaris · Console" nav={["Run", "Scheduler", "Decisions", "Scans"]}>
      <div className="grid h-full grid-cols-[1fr_0.75fr] gap-2 p-2">
        <Panel title="Decisions · run 2026-09-18T08:00">
          <Row head cells={["SID", "Test", "Value", "Rule", "Decision"]} widths={["0.7fr", "0.6fr", "0.9fr", "0.8fr", "0.8fr"]} />
          {dec.map((d) => (
            <Row key={d[0] + d[1]} widths={["0.7fr", "0.6fr", "0.9fr", "0.8fr", "0.8fr"]} cells={[<span key="s" className="font-mono text-[10px]">{d[0]}</span>, <span key="t" className="font-mono text-[10px] text-white/60">{d[1]}</span>, d[2], d[3], <Chip key="c" tone={d[5]}>{d[4]}</Chip>]} />
          ))}
        </Panel>
        <div className="flex flex-col gap-2">
          <Panel title="Write mode">
            <div className="flex items-center justify-between p-2 text-[10px]"><span>Authenticate</span><span className="relative inline-block h-3.5 w-7 rounded-full bg-white/20"><span className="absolute left-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-white/70" /></span></div>
            <div className="px-2 pb-2 text-[9px] text-white/50">Off: decisions are logged, nothing is clicked.</div>
          </Panel>
          <Panel title="Scheduler">
            <div className="p-2 text-[10px] space-y-0.5"><div className="flex justify-between"><span className="text-white/55">Status</span><span className="flex items-center gap-1"><Dot tone="ok" />cooldown</span></div><div className="flex justify-between"><span className="text-white/55">Next run</span><span className="tabular-nums">08:20:00</span></div><div className="flex justify-between"><span className="text-white/55">Audit</span><span className="font-mono text-[9px]">decisions.csv</span></div></div>
          </Panel>
        </div>
      </div>
    </Screen>
  );
}
