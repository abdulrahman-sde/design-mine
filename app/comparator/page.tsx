import { Metadata } from "next";
import { ComparatorView } from "./comparator-view";

export const metadata: Metadata = {
  title: "Tailark Quartz Comparator Blocks - 7 Feature Matrix & Pricing Sections",
  description:
    "Pixel-perfect replication of Tailark Quartz comparator blocks with side-by-side matrices, highlighted badges, multi-tier pricing tables, and light/dark theme support.",
};

export default function ComparatorPage() {
  return <ComparatorView />;
}
