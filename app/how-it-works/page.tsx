import { Metadata } from "next";
import { HowItWorksView } from "./how-it-works-view";

export const metadata: Metadata = {
  title: "Tailark Quartz How It Works Blocks - 7 Interactive Step Sections",
  description:
    "Pixel-perfect replication of Tailark Quartz How It Works blocks with 3D card perspectives, Gantt timelines, interactive charts, and light/dark theme support.",
};

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
