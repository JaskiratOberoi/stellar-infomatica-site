import { Hero } from "@/components/sections/Hero";
import { IntegrationEcosystem } from "@/components/sections/IntegrationEcosystem";
import { TwinSupportSection } from "@/components/sections/TwinSupportSection";
import { AboutMission } from "@/components/sections/AboutMission";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <IntegrationEcosystem />
      <TwinSupportSection />
      <AboutMission />
      <ContactFooter />
    </>
  );
}
