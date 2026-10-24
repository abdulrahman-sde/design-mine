import React from "react";
import { Comparator1 } from "./Comparator1";
import { Comparator2 } from "./Comparator2";
import { Comparator3 } from "./Comparator3";
import { Comparator4 } from "./Comparator4";
import { Comparator5 } from "./Comparator5";
import { Comparator6 } from "./Comparator6";
import { Comparator7 } from "./Comparator7";

export {
  Comparator1,
  Comparator2,
  Comparator3,
  Comparator4,
  Comparator5,
  Comparator6,
  Comparator7,
};

export interface ComparatorMeta {
  id: number;
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  category: string;
  badge: string;
  isPro: boolean;
  component: React.ComponentType;
  defaultHeight: number;
}

export const COMPARATOR_LIST: ComparatorMeta[] = [
  {
    id: 1,
    slug: "comparator-1",
    name: "Comparator 1",
    headline: "Minimal Feature Comparison Matrix",
    tagline: "Compact 2-column benefits comparison with highlighted gradient accents and clover badge indicators.",
    category: "Feature Matrix",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator1,
    defaultHeight: 609,
  },
  {
    id: 2,
    slug: "comparator-2",
    name: "Comparator 2",
    headline: "Highlighted Badge Comparison Table",
    tagline: "Comparison layout with interactive info triggers, tooltips, and highlighted plan columns.",
    category: "Pricing & Plans",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator2,
    defaultHeight: 689,
  },
  {
    id: 3,
    slug: "comparator-3",
    name: "Comparator 3",
    headline: "Full Category Plan Matrix",
    tagline: "Comprehensive 4-category comparison across Platform, Infrastructure, Support, and Analytics.",
    category: "Enterprise Matrix",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator3,
    defaultHeight: 2112,
  },
  {
    id: 4,
    slug: "comparator-4",
    name: "Comparator 4",
    headline: "Multi-Tier Infrastructure Matrix",
    tagline: "Full-feature tier comparison table with sticky headers, feature descriptions, and capacity limits.",
    category: "Enterprise Matrix",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator4,
    defaultHeight: 2112,
  },
  {
    id: 5,
    slug: "comparator-5",
    name: "Comparator 5",
    headline: "Structured Feature Breakdown",
    tagline: "Detailed side-by-side tier breakdown covering core platform capabilities and support SLA.",
    category: "Feature Matrix",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator5,
    defaultHeight: 2099,
  },
  {
    id: 6,
    slug: "comparator-6",
    name: "Comparator 6",
    headline: "Sticky Pricing Tier Comparator",
    tagline: "Interactive 3-tier matrix (Free, Pro, Team) with sticky card headers and checkmark indicators.",
    category: "Pricing & Plans",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator6,
    defaultHeight: 1665,
  },
  {
    id: 7,
    slug: "comparator-7",
    name: "Comparator 7",
    headline: "Quick Comparison Guide",
    tagline: "Split-view guide comparing your solution vs competitor alternatives with zebra-striped rows.",
    category: "Competitor Guide",
    badge: "Quartz Pro",
    isPro: true,
    component: Comparator7,
    defaultHeight: 720,
  },
];

export function getComparatorById(id: string | number): ComparatorMeta | undefined {
  const num = typeof id === "number" ? id : parseInt(id, 10);
  if (!isNaN(num)) {
    return COMPARATOR_LIST.find((c) => c.id === num);
  }
  return COMPARATOR_LIST.find((c) => c.slug.toLowerCase() === String(id).toLowerCase());
}
