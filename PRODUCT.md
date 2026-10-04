# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners and directors of Indian diagnostic laboratories, pathology and genomics labs, and franchise lab networks, evaluating software to run the whole lab. They arrive from a referral, a sales conversation, or a search, usually on a phone or laptop between operational tasks, and want to know in seconds whether Stellar is a serious suite and who to call. (Confirmed 2026-10-04.)

Secondary: lab IT staff, pathologists and lab managers who evaluate one module in depth (interfacing, prenatal screening, allergy screening) after the owner has shown interest. (Inferred from the module repos; not user-stated.)

## Product Purpose

The site is the public face of Stellar Infomatica, a software house that builds a suite of laboratory and lab-business software, developed and run daily inside a live Indian pathology and genomics network. Its job is to make the suite legible as one family, show each product doing its real job, and get a lab owner to request a demo by email. Success is a demo request from a qualified lab.

## Positioning

Stellar is not a vendor-supplied single-instrument tool nor a generic LIS: it is a connected suite where the analyzer middleware, the laboratory command centre, the clinical screening engines, and the stock, materials, people and finance tools share one data spine and are proven on a production lab network before they ship. The suite was built by operating a lab, not by surveying one.

## Operating Context

- The site is a static Next.js export deployed by FTPS to Hostinger on every push to main; there is no server runtime, API or database. Forms cannot post anywhere; the call to action is email to support@stellarinfomatica.com (confirmed 2026-10-04).
- Products the site must showcase (confirmed 2026-10-04), with their truth sources on X:\:
  - **Stellar Infinity**, Laboratory Command Centre: modern LIS layer over the Noble lab database; .NET 9 API + React SPA; ordering, accessioning, worksheets, result entry, report PDFs in three paper modes, client letterheads, WhatsApp report delivery, B2B/B2C billing and rate lists, Smart Reports, sub-franchise accounts, ten roles. (X:\Stellar-Infinity)
  - **Stellar Synapse**, instrument interfacing middleware: Electron desktop app for Windows lab PCs; connects analyzers (Maglumi, MAGICL, Beckman, Mindray, Horiba, Autobio, Getein, Roche and others) over TCP/serial, decodes ASTM/HL7/vendor protocols, auto-maps analytes to LIS tests, writes results to the LIS, queues offline, LAN auto-discovery, per-lab presets, OTA updates, realtime telemetry to Infinity. (X:\Stellar-Synapse)
  - **Stellar Telo**, LIS worksheet and billing layer on the Noble database, plus the Listec integration service that exposes worksheet reports and lookups over HTTP. (X:\Stellar Telo)
  - **Nexus**, genomics dashboard: Teller (LIS counter, reports, scheduler), Lab (technician view scoped to units and machines), Admin (units, machines, kits, parameters, parameter-to-machine mapping, inventory, users, daily validation); web app plus a Windows thin client. (X:\Stellar-Shark)
  - **Stellar Polaris**, LIS automation: browser-automation bot that reads worksheet grids and auto-authenticates in-range results for defined tests (Vitamin B12, Vitamin D, Total IgE) under strict gates, with a background scheduler and an append-only audit trail. (X:\Stellar-Polaris)
  - **Stellar BioSentry**, prenatal screening engine: first-trimester dual marker, second-trimester quad marker, twin pregnancies with chorionicity-specific medians, IVF correction, maternal weight, ethnicity, smoking and diabetes covariates; risk for Trisomy 21, 18/13, neural tube defects; SOPs and regulatory packs exist. (X:\stellar-infomatica-prenatal-screener)
  - **Stellar Sense**, Pan-India specific-IgE allergy screening: patient records, Advance and Standard allergen panels, age-stratified IgE interpretation, regional exposure context, cross-reactivity analysis, branded PDF reports, public QR download links. (X:\stellar-sense)
  - **Stellar Matter**, materials ledger: append-only receipts, dispatches and adjustments across stores and ~90 business units; balances derived, never stored; Tracer reads real LIS workload to forecast letterheads, envelopes, vials and tubes per unit; purchase orders with proforma invoices. (X:\Stellar Matter)
  - **Stock Management System (SMS)**, reagent and materials stock PWA for every business unit: daily opening/closing counts, instrument-specific reagent lists, movement ledger, frozen weekly and monthly snapshots, server-derived consumption, integration API to Matter and Infinity. (X:\Stellar-checklist)
  - **Asset Tracker**, multi-tenant asset register for companies, locations and assets with bill documents in private storage and public onboarding. (X:\Asset-tracker)
  - **Stellar Apex**, People OS: employee master, lifecycle states, Indian statutory data (Aadhaar, PAN, UAN, ESI, bank) with privacy-first masking and audited reveal, AES-256-GCM at rest, payroll-readiness completeness; roadmap covers attendance, shifts, payroll, documents. (X:\Stellar-Apex)
  - **Stellar Maximus**, HR cost-to-revenue analytics: India choropleth by state, 3D district extrusion per business unit, toggle between HR cost and revenue billed, selectable fiscal windows; figures only ever by unit and region, never by person. (X:\Stellar-Maximus)
- Excluded by decision (2026-10-04): Report Seal. Not offerings: the Breast Cancer AI research notebook, Stellar Emulate (internal analyzer emulator), Stellar Ops.
- Terminology: **LIS** = laboratory information system; **BU** = business unit (one lab or collection centre); **SID** = sample ID; **MoM** = multiple of the median; **B2B** = franchise/referral client billing; **MCC code** = client code.

## Capabilities and Constraints

- Stack is fixed: Next.js 16 app router, React 19, Tailwind v4, shadcn primitives, framer-motion, static export with unoptimized images. No server components that need a runtime; every route must prerender.
- Every push to main deploys to production with a clean-slate FTP sync. Nothing experimental lands on main unbuilt.
- The existing routes `/clinical`, `/privacy`, `/terms`, `/disclaimer` carry legal and clinical copy for BioSentry that must survive (moved, not lost). The legal pages describe an on-premise, no-telemetry posture for the prenatal software; do not extend that claim to products that do sync to the cloud (Synapse telemetry, SMS integration API).
- Undecided: pricing, licensing model, whether any public demo URL exists, and whether individual products get their own routes beyond the suite page. Record, do not invent.

## Brand Commitments

- Company name: **Stellar Infomatica**. Product names as listed above; "Stellar" prefixes most products, "Nexus", "SMS" and "Asset Tracker" do not carry it in their repos.
- No logo or brand kit exists; a wordmark and mark are to be created as part of the overhaul (confirmed 2026-10-04).
- Contact: support@stellarinfomatica.com. Domain: stellarinfomatica.com.
- Voice across the product family is plain, operational and honest about state; no hype register. Marketing copy may be confident but must stay factual.

## Evidence on Hand

- Real feature inventories, screens, SOPs and documentation for every product exist in the repos listed above; demonstration data on the site may mirror them truthfully.
- Real operating scale behind the suite: one lab network of roughly 90 business units across north India, 55 tracked materials, a 69-million-row results history replicated for analytics, ten LIS roles. These are facts about the proving ground, not customer counts.
- No testimonials, customer logos, pricing, certifications or benchmarks exist for public use; do not fabricate any. NABL and ISO references in old copy are unverified and must not be presented as held certifications.
- The old site's prenatal copy, legal pages, and the cyan/fuchsia dark look are evidence of the former single-product positioning, not authority for the new one.

## Product Principles

1. **One suite, legible at a glance.** A lab owner should see in one viewport that Stellar runs the whole lab, from analyzer to invoice.
2. **Show the software working.** Every product is presented through a real screen, flow or data shape, not an icon and a sentence.
3. **Proven in production, said plainly.** The suite's credibility is that it runs a real lab network; say that factually and never dress it as customer logos.
4. **Clinical honesty.** Screening engines are decision support for qualified professionals; keep the disclaimers reachable and never overstate diagnostic claims.
5. **One action.** Everything resolves to requesting a demo by email.
