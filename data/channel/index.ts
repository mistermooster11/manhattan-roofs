import type { ChannelPageData } from "@/components/custom/channel/types";
import manhattanRoofs from "./manhattan-roofs";

const channelDataMap: Record<string, ChannelPageData> = {
  "manhattan-roofs": manhattanRoofs,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
