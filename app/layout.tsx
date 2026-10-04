import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GreaseFilterDefs } from "@/components/bench/primitives";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-barlow", display: "swap" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-barlow-condensed", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stellarinfomatica.com"),
  title: {
    default: "Stellar Infomatica | Laboratory software suite",
    template: "%s | Stellar Infomatica",
  },
  description:
    "An integrated suite of twelve products for diagnostic laboratories: analyzer interfacing, the laboratory information system, prenatal and allergy screening engines, inventory and assets, people and finance. Developed inside a working laboratory network in India.",
  keywords: ["laboratory information system", "LIS", "analyzer interfacing", "HL7", "ASTM", "prenatal screening", "dual marker", "quad marker", "allergy screening", "specific IgE", "lab inventory", "diagnostic lab software India"],
  openGraph: {
    title: "Stellar Infomatica | Laboratory software suite",
    description: "An integrated suite of twelve products for diagnostic laboratories, developed inside a working laboratory network in India.",
    url: "https://stellarinfomatica.com",
    siteName: "Stellar Infomatica",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/* Direction contract (Impeccable). Emitted as an HTML comment, first child of body. */
const CONTRACT = `
THESIS: A diagnostic lab's software suite shown as frames on one cutting-bench select rail, refusing the healthcare-SaaS hero-plus-feature-grid.
OWN-WORLD: Ink black field, grain-accent rail holding a third of the screen, product screens only inside punched white windows, one condensed grotesk (Barlow Condensed) with caps labels, state as marks: tape flag where you are, grease tick committed, hung on a pin deferred.
STORY: A lab owner sees in one viewport that Stellar runs the whole lab from analyzer to invoice, scrubs the rail to any product, sees it working with real feature lines, and writes for a demo.
FIRST VIEWPORT: Headline plate top-left, Request a demo plate beneath, the accent perforated rail full-bleed below with twelve numbered frames, tape flag on the frame in view, trims on pins under the rail.
FORM: Cutting Bench Rail, dealt challenger operate-a-cutting-bench-select-rail, chosen over assigned candidate 6; seed key 30726f91.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="grain min-h-screen flex flex-col bg-ink text-edge antialiased">
        <div hidden aria-hidden dangerouslySetInnerHTML={{ __html: `<!--${CONTRACT}-->` }} />
        <GreaseFilterDefs />
        <Navbar />
        <main className="flex-1 pt-[4.6rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
