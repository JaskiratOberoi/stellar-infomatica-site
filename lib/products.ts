export type ProductGroup = "lab-floor" | "clinical" | "stores" | "people";

export type Mark = "committed" | "deferred";

export interface Product {
  slug: string;
  frame: number; // position on the rail, 01..12
  name: string;
  short: string; // one line on the frame
  group: ProductGroup;
  platform: string;
  summary: string; // one paragraph, factual
  features: string[]; // concrete, from the repo
  provenance: string; // where it runs today
  marks: { label: string; mark: Mark }[]; // honest state
  related: string[]; // slugs
}

export const GROUPS: Record<ProductGroup, { scene: string; title: string; line: string }> = {
  "lab-floor": {
    scene: "Scene 01",
    title: "The lab floor",
    line: "From the analyzer port to the signed report: the pipeline every sample rides.",
  },
  clinical: {
    scene: "Scene 02",
    title: "Clinical engines",
    line: "Screening maths for qualified professionals, with the working shown.",
  },
  stores: {
    scene: "Scene 03",
    title: "Stores and stock",
    line: "Every tube, letterhead and reagent counted from the ledger, never guessed.",
  },
  people: {
    scene: "Scene 04",
    title: "People and money",
    line: "Who works where, what it costs, and what each unit bills, by unit only.",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "synapse",
    frame: 1,
    name: "Stellar Synapse",
    short: "Analyzer interfacing",
    group: "lab-floor",
    platform: "Windows desktop, tray-resident",
    summary:
      "Synapse sits on the lab PC and talks to the analyzers. It connects over TCP or serial, decodes ASTM, HL7 and vendor protocols, maps every analyte to an LIS test, and writes results into the LIS. When the network or LIS is down it queues and keeps interfacing.",
    features: [
      "Driver catalogue across analyzer families: Maglumi, MAGICL, Beckman, Mindray, Horiba, Autobio, Getein, Roche and more",
      "ASTM, HL7 and vendor-specific protocol decoding over TCP and serial",
      "LAN auto-discovery of instruments and per-lab presets",
      "Automatic analyte-to-test mapping with an editor for the exceptions",
      "Offline write queue: results are never lost when the LIS is unreachable",
      "Monitor and raw-frame logs one click from the overview",
      "Disconnect and stuck-connecting alerts as OS notifications",
      "Over-the-air updates and realtime telemetry into Stellar Infinity",
    ],
    provenance: "Interfacing analyzers across the network's labs today, running minimised in the tray on shared lab PCs.",
    marks: [
      { label: "Multi-vendor driver catalogue", mark: "committed" },
      { label: "Offline queueing", mark: "committed" },
      { label: "Cloud telemetry to Infinity", mark: "committed" },
    ],
    related: ["infinity", "polaris", "nexus"],
  },
  {
    slug: "infinity",
    frame: 2,
    name: "Stellar Infinity",
    short: "Laboratory command centre",
    group: "lab-floor",
    platform: "Web, .NET 9 API + React",
    summary:
      "Infinity is the modern face of the laboratory information system. Ordering, accessioning, worksheets, result entry, report rendering, billing and delivery run on one API with one role model, over the same database the legacy LIS already trusts.",
    features: [
      "Order entry for B2C and B2B with package expansion and rate-list pricing",
      "One accessioning desk for every sample sent: scan to register, reject with reason",
      "Worksheets with result save, authentication and report lock",
      "Report PDFs in three paper modes, including per-client letterheads",
      "WhatsApp delivery of reports from the lab's own linked number",
      "Smart Reports and test interpretations alongside the standard report",
      "Sub-franchise accounts scoped to their own unit, prices hidden where they should be",
      "Ten roles derived from the LIS user model, overridable per user",
      "Realtime site telemetry from Synapse instruments",
    ],
    provenance: "Production since August 2026 for the network's billing, reporting and accessioning.",
    marks: [
      { label: "Report format v2", mark: "committed" },
      { label: "WhatsApp report delivery", mark: "committed" },
      { label: "Trend bands on reports", mark: "deferred" },
    ],
    related: ["synapse", "telo", "nexus"],
  },
  {
    slug: "telo",
    frame: 3,
    name: "Stellar Telo",
    short: "Billing and reporting layer",
    group: "lab-floor",
    platform: "Web, Next.js + read-only LIS bridge",
    summary:
      "Telo is the B2C and B2B billing and reporting layer that sits on top of the legacy LIS. It reads the LIS through a small bridge, stamps every row it writes with its origin, and gives the counter a fast, modern screen without migrating a single record.",
    features: [
      "B2C and B2B billing over the existing LIS tables",
      "Worksheet reports and lookups served over HTTP by the Listec bridge",
      "Per-client invoice branding",
      "Payment transaction tracking and balance pinning",
      "Role overrides per user on top of LIS roles",
      "Every row it creates carries a visible origin marker",
    ],
    provenance: "In daily use at the counter; shares its stored procedures with Infinity.",
    marks: [
      { label: "B2B billing", mark: "committed" },
      { label: "Invoice branding", mark: "committed" },
    ],
    related: ["infinity", "nexus"],
  },
  {
    slug: "nexus",
    frame: 4,
    name: "Nexus",
    short: "Genomics lab dashboard",
    group: "lab-floor",
    platform: "Web + Windows thin client",
    summary:
      "Nexus gives a genomics lab three doors into one system: a Teller counter with reports and a scheduler, a Lab view scoped to each technician's units and machines, and an Admin console for kits, parameters, machines and daily validation.",
    features: [
      "Teller: LIS counter, reports and scheduler for every authenticated role",
      "Lab: technician view scoped to assigned business units and machines",
      "Admin: business units, machines, kits, parameters and users",
      "Visual parameter-to-machine mapping",
      "Inventory and daily validation records",
      "JWT authentication with multi-tenant scoping; PostgreSQL behind it",
      "Windows desktop thin client that opens the deployed site",
    ],
    provenance: "Built for the network's genomics bench; ships with Docker and a desktop installer.",
    marks: [
      { label: "Teller, Lab and Admin modules", mark: "committed" },
      { label: "Desktop thin client", mark: "committed" },
    ],
    related: ["infinity", "synapse", "polaris"],
  },
  {
    slug: "polaris",
    frame: 5,
    name: "Stellar Polaris",
    short: "LIS auto-authentication",
    group: "lab-floor",
    platform: "Node + browser automation, React console",
    summary:
      "Polaris reads the worksheet grid like a technician would and authenticates in-range results for a short, defined list of tests. It only acts when the whole worksheet is one it understands, and every decision it makes is written to an append-only log.",
    features: [
      "Scans the worksheet grid for sample IDs and reads each result modal",
      "Age-banded and unisex reference rules for Vitamin B12, Vitamin D and Total IgE",
      "Strict gate: acts only when the worksheet contains nothing it does not understand",
      "Write mode off by default; read-only decisions stream to the console",
      "Out-of-range results get the lab's own comment text, never a silent pass",
      "Background scheduler: complete scan, cooldown, repeat, restored on boot",
      "Append-only audit trail of every decision and every skip, as CSV and JSONL",
    ],
    provenance: "Runs scheduled passes over the network's worksheets with the audit trail kept on disk.",
    marks: [
      { label: "B12, Vitamin D, Total IgE rules", mark: "committed" },
      { label: "Further test rules", mark: "deferred" },
    ],
    related: ["infinity", "nexus"],
  },
  {
    slug: "biosentry",
    frame: 6,
    name: "Stellar BioSentry",
    short: "Prenatal screening engine",
    group: "clinical",
    platform: "Web, on-premise",
    summary:
      "BioSentry turns maternal serum markers and ultrasound measurements into a risk the clinician can defend. First-trimester dual marker, second-trimester quad marker, twins with chorionicity-specific medians, and every covariate the literature asks for.",
    features: [
      "First trimester dual marker (free β-hCG, PAPP-A) with NT and CRL",
      "Second trimester quad marker (AFP, uE3, free β-hCG, Inhibin-A)",
      "Twin pregnancies: independent risk per fetus with chorionicity-specific medians",
      "Covariates: maternal weight, ethnicity, smoking, diabetes, IVF with transfer date",
      "Dating by LMP or ultrasound (CRL or BPD) with gestational age shown at collection",
      "Risk for Trisomy 21, 18 and 13 and open neural tube defects",
      "Background, biochemistry and combined risk shown side by side with MoM and corrected MoM",
      "Report PDF with or without headless layout and doctor's signature",
      "Written SOPs for dual and quad marker workflows",
    ],
    provenance: "Screening cases for the network's prenatal panel; SOPs and regulatory packs maintained in step with the engine.",
    marks: [
      { label: "Dual and quad marker", mark: "committed" },
      { label: "Twin risk", mark: "committed" },
      { label: "Pre-eclampsia and OSB modules", mark: "deferred" },
    ],
    related: ["sense", "infinity"],
  },
  {
    slug: "sense",
    frame: 7,
    name: "Stellar Sense",
    short: "Allergy screening engine",
    group: "clinical",
    platform: "Web",
    summary:
      "Sense runs specific-IgE allergy screening from patient record to branded report. Its Pan-India engine reads each result against age-stratified interpretation, regional exposure and cross-reactivity, so the report says what the number means here, not somewhere else.",
    features: [
      "Advance and Standard allergen panels with their own report defaults",
      "Age-stratified specific-IgE interpretation",
      "Regional exposure context for Indian allergen profiles",
      "Cross-reactivity analysis across related allergens",
      "High-volume allergen entry built for the technician's keyboard",
      "Lab branding, doctor details and signatures configured once, printed on every report",
      "Public QR link so a patient can download their own report",
      "Company-scoped workspaces for multi-lab tenants",
    ],
    provenance: "In use for the network's allergy panels with lab-branded PDF reports.",
    marks: [
      { label: "Advance and Standard panels", mark: "committed" },
      { label: "QR report download", mark: "committed" },
    ],
    related: ["biosentry", "infinity"],
  },
  {
    slug: "matter",
    frame: 8,
    name: "Stellar Matter",
    short: "Materials ledger",
    group: "stores",
    platform: "Web, installable PWA",
    summary:
      "Matter is the official tally of physical materials: letterheads, envelopes, barcode labels, vials, tubes and containers. Every receipt, dispatch and adjustment is a ledger entry, balances are derived from it, and the Tracer reads real lab workload to say what each unit will consume.",
    features: [
      "Append-only ledger of receipts, dispatches and adjustments across stores and ~90 units",
      "Balances derived from history; a void removes the entry and every figure recomputes",
      "Pack-aware receipts (20 boxes of 100) with proof photos per line",
      "Purchase orders with proforma invoice PDFs, received straight into stock",
      "Tracer: converts LIS test volume into letterheads, envelopes, vials and tubes per unit",
      "Reorder levels on store stock; direct vendor-to-unit shipments supported",
      "Roles for viewer, operator, admin and super admin; every mutation audited",
      "Reads the LIS read-only through the Listec bridge",
    ],
    provenance: "Live for the network's two central stores and its business units since September 2026.",
    marks: [
      { label: "Ledger and Tracer", mark: "committed" },
      { label: "Purchase orders", mark: "committed" },
      { label: "Tracer-driven reorder suggestions", mark: "deferred" },
    ],
    related: ["sms", "asset-tracker", "infinity"],
  },
  {
    slug: "sms",
    frame: 9,
    name: "Stock Management System",
    short: "Reagent stock, every unit",
    group: "stores",
    platform: "Web PWA, .NET 9 API",
    summary:
      "SMS gives every business unit one screen for daily opening and closing stock of reagents and materials. Reagents belong to instruments, movements go to a ledger, snapshots freeze weekly and monthly, and consumption is derived on the server where only the right role can see it.",
    features: [
      "Daily opening and closing counts per reagent and material, per unit",
      "Instrument-specific reagent lists: each unit's instruments own their reagents",
      "Movement ledger for receipts, wastage, transfers and adjustments",
      "Weekly and monthly snapshots frozen per item per unit",
      "Consumption derived server-side and visible to super admin only",
      "Installs on desktop, Android and iOS from the browser",
      "Versioned integration API with API keys for Matter and Infinity",
    ],
    provenance: "Staging live for the network's units; production rollout scheduled.",
    marks: [
      { label: "Counts, ledger, snapshots, reports", mark: "committed" },
      { label: "Webhooks and offline drafts", mark: "deferred" },
      { label: "Reminders and push notifications", mark: "deferred" },
    ],
    related: ["matter", "infinity", "synapse"],
  },
  {
    slug: "asset-tracker",
    frame: 10,
    name: "Asset Tracker",
    short: "Equipment register",
    group: "stores",
    platform: "Web, self-hosted",
    summary:
      "Asset Tracker is the register of what the organisation owns and where it sits: companies, locations and assets, with the purchase bill attached in private storage. Anyone can submit an asset on onboarding; only admins can read or change the register.",
    features: [
      "Companies, locations and assets with their relationships",
      "Public onboarding form: anyone can insert, only admins can read, update or delete",
      "Bill documents in a private storage bucket with row-level security",
      "Row-level security policies enforced in the database, not the app",
      "Self-hosted stack with an admin dashboard",
    ],
    provenance: "Running for the network's equipment register on its own containers.",
    marks: [
      { label: "Register and bill storage", mark: "committed" },
    ],
    related: ["matter", "sms"],
  },
  {
    slug: "apex",
    frame: 11,
    name: "Stellar Apex",
    short: "People OS",
    group: "people",
    platform: "Web, PHP + MySQL API",
    summary:
      "Apex is the employee master for a group of companies. Directory, profiles and lifecycle states, with Indian statutory identifiers held encrypted, masked by default and revealed only through an audited action. Profile completeness tells payroll who is ready.",
    features: [
      "Employee directory and profiles across multiple entities",
      "Lifecycle states from offer to exit",
      "Aadhaar, PAN, UAN, ESI and bank details with IFSC, masked by default",
      "AES-256-GCM encryption at rest; every reveal is audited",
      "Server-enforced entity isolation and JWT authentication",
      "Profile completeness scoring for payroll readiness",
      "Multi-step add-employee wizard",
    ],
    provenance: "Phase one, the employee master, built for the group's entities; attendance, shifts, payroll and documents follow on the roadmap.",
    marks: [
      { label: "Employee master", mark: "committed" },
      { label: "Attendance and shifts", mark: "deferred" },
      { label: "Payroll and documents", mark: "deferred" },
    ],
    related: ["maximus"],
  },
  {
    slug: "maximus",
    frame: 12,
    name: "Stellar Maximus",
    short: "Cost-to-revenue map",
    group: "people",
    platform: "Web, 3D map",
    summary:
      "Maximus puts HR cost beside revenue billed on a map of India. States are coloured by cost, a click flies into a 3D view where each district rises by the cost of the unit in it, and every figure is reported by business unit and region. No individual's pay exists anywhere in it.",
    features: [
      "Choropleth of India coloured by total HR cost per state",
      "3D district extrusion by business unit on state fly-in",
      "Toggle between HR cost and revenue billed",
      "Rolling, to-date and fiscal reporting windows anchored to the last loaded day",
      "Revenue aggregated inside SQL, strictly per business unit",
      "Cost as a share of revenue per unit, as a ratio, never a person",
    ],
    provenance: "Reporting the network's unit economics each quarter.",
    marks: [
      { label: "Cost and revenue by unit", mark: "committed" },
      { label: "3D state view", mark: "committed" },
    ],
    related: ["apex", "infinity"],
  },
];

export const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const byGroup = (g: ProductGroup) => PRODUCTS.filter((p) => p.group === g);
export const frameNo = (n: number) => n.toString().padStart(2, "0");
