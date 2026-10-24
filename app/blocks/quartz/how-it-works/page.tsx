import { Metadata } from "next";
import { HowItWorksView } from "../../../how-it-works/how-it-works-view";

export const metadata: Metadata = {
  title: "how it works Quartz Blocks - Tailark",
  description: "Discover Quartz how it works marketing blocks.",
};

export default function BlocksQuartzHowItWorksPage() {
  return <HowItWorksView />;
}
