import { GreaseTick, PerfEdge, Pin } from "@/components/bench/primitives";

interface Pathology {
  id: string;
  name: string;
  markers: string[];
  description: string;
  state: "committed" | "deferred";
}

const pathologies: Pathology[] = [
  { id: "t21", name: "Trisomy 21 (Down syndrome)", markers: ["Free β-hCG", "PAPP-A", "AFP", "uE3", "Inhibin-A"], description: "Chromosomal anomaly caused by an extra copy of chromosome 21. Screened in both trimesters.", state: "committed" },
  { id: "t18-13", name: "Trisomy 18 / 13", markers: ["Low uE3", "Low hCG", "PAPP-A"], description: "Edwards syndrome (T18) and Patau syndrome (T13) through integrated marker analysis.", state: "committed" },
  { id: "osb", name: "Neural tube defects (OSB)", markers: ["AFP"], description: "Open spina bifida and anencephaly from second-trimester AFP.", state: "committed" },
  { id: "preeclampsia", name: "Pre-eclampsia", markers: ["PlGF", "PAPP-A"], description: "Early-onset hypertensive disorder risk assessment.", state: "deferred" },
];

export function PathologyGrid() {
  const live = pathologies.filter((p) => p.state === "committed");
  const parked = pathologies.filter((p) => p.state === "deferred");
  return (
    <div>
      <div className="grid gap-px border border-spool bg-spool md:grid-cols-3">
        {live.map((p) => (
          <div key={p.id} className="flex flex-col bg-ink p-6">
            <div className="flex items-start gap-3">
              <GreaseTick className="mt-1 shrink-0 text-accent" />
              <h3 className="text-[1.7rem] text-edge">{p.name}</h3>
            </div>
            <p className="mt-3 flex-1 text-edge-dim">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.markers.map((m) => (
                <li key={m} className="label-caps border border-accent/60 px-2 py-1.5 text-accent">{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {parked.length > 0 && (
        <div className="mt-8">
          <div className="h-px w-full bg-edge-dim/50" aria-hidden />
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-3">
            {parked.map((p) => (
              <div key={p.id} className="flex flex-col items-center">
                <Pin />
                <div className="-mt-1 w-full border border-spool-light bg-char">
                  <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                  <div className="px-4 py-3">
                    <h3 className="text-[1.4rem] text-edge">{p.name}</h3>
                    <p className="mt-1.5 text-[0.9rem] text-edge-dim">{p.description}</p>
                    <p className="label-caps mt-3 text-edge-dim">Planned · {p.markers.join(", ")}</p>
                  </div>
                  <PerfEdge hole="edge" className="h-2.5 opacity-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
