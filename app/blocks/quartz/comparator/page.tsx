import { Metadata } from "next";
import { ComparatorView } from "../../../comparator/comparator-view";

export const metadata: Metadata = {
  title: "comparator Quartz Blocks - Tailark",
  description: "Discover Quartz comparator marketing blocks.",
};

export default function BlocksQuartzComparatorPage() {
  return <ComparatorView />;
}
