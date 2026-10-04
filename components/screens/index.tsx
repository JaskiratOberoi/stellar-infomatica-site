import type { ComponentType } from "react";
import { SynapseScreen, InfinityScreen, TeloScreen, NexusScreen, PolarisScreen } from "./lab";
import { BioSentryScreen, SenseScreen } from "./clinical";
import { MatterScreen, SmsScreen, AssetTrackerScreen, ApexScreen, MaximusScreen } from "./ops";

export const SCREENS: Record<string, ComponentType> = {
  synapse: SynapseScreen,
  infinity: InfinityScreen,
  telo: TeloScreen,
  nexus: NexusScreen,
  polaris: PolarisScreen,
  biosentry: BioSentryScreen,
  sense: SenseScreen,
  matter: MatterScreen,
  sms: SmsScreen,
  "asset-tracker": AssetTrackerScreen,
  apex: ApexScreen,
  maximus: MaximusScreen,
};

export function ScreenFor({ slug }: { slug: string }) {
  const C = SCREENS[slug];
  return C ? <C /> : null;
}
