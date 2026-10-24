import { IllustrationsView } from "./illustrations-view";

export const metadata = {
  title: "Tailark Quartz Illustrations - AI & Animated SVG Cards",
  description: "Pixel-perfect replication of Tailark Quartz animated SVG illustrations.",
};

export default function IllustrationPage() {
  return <IllustrationsView initialMode="category" initialCategory="ai" />;
}
