import React from "react";
import { HowItWorks1 } from "./HowItWorks1";
import { HowItWorks2 } from "./HowItWorks2";
import { HowItWorks3 } from "./HowItWorks3";
import { HowItWorks4 } from "./HowItWorks4";
import { HowItWorks5 } from "./HowItWorks5";
import { HowItWorks6 } from "./HowItWorks6";
import { HowItWorks7 } from "./HowItWorks7";

export {
  HowItWorks1,
  HowItWorks2,
  HowItWorks3,
  HowItWorks4,
  HowItWorks5,
  HowItWorks6,
  HowItWorks7,
};

export interface HowItWorksMeta {
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

export const HOW_IT_WORKS_LIST: HowItWorksMeta[] = [
  {
    id: 1,
    slug: "how-it-works-1",
    name: "How It Works 1",
    headline: "Payment & Document Verification Flow",
    tagline: "3-step progressive onboarding with 3D perspective credit card, document signature pad, and instant verification receipt.",
    category: "Fintech & Payments",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks1,
    defaultHeight: 783,
  },
  {
    id: 2,
    slug: "how-it-works-2",
    name: "How It Works 2",
    headline: "Pipeline Setup & Workspace Gantt Timeline",
    tagline: "Comprehensive 4-step pipeline onboarding featuring interactive visual charts, live project cards, and workspace layout.",
    category: "Workflow & Project OS",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks2,
    defaultHeight: 2479,
  },
  {
    id: 3,
    slug: "how-it-works-3",
    name: "How It Works 3",
    headline: "Collaborative Analysis & Real-time Invoicing",
    tagline: "Bento-style 3-step setup with human team face-detection, analytics monitoring graph, and instant invoice dispatcher.",
    category: "Collaboration & Analytics",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks3,
    defaultHeight: 1073,
  },
  {
    id: 4,
    slug: "how-it-works-4",
    name: "How It Works 4",
    headline: "Data Collection, Automated Analysis & Reports",
    tagline: "Sleek 3-card pipeline diagram with animated workflow connectors, data collection, automated analysis, and reports.",
    category: "Automation & Data",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks4,
    defaultHeight: 840,
  },
  {
    id: 5,
    slug: "how-it-works-5",
    name: "How It Works 5",
    headline: "Step-by-Step System Integration",
    tagline: "Linear 3-step timeline with connected status nodes, data parsing nodes, and actionable executive insights.",
    category: "Integration & Developer",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks5,
    defaultHeight: 1560,
  },
  {
    id: 6,
    slug: "how-it-works-6",
    name: "How It Works 6",
    headline: "AI Face Detection & Automated Security",
    tagline: "Modern security pipeline with AI camera feed, facial feature bounding boxes, and compliance export reports.",
    category: "AI & Computer Vision",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks6,
    defaultHeight: 865,
  },
  {
    id: 7,
    slug: "how-it-works-7",
    name: "How It Works 7",
    headline: "Secure Messaging & Real-time Resource Monitoring",
    tagline: "3-column workflow cards with end-to-end encrypted messaging, CPU/memory performance gauges, and team dashboard.",
    category: "DevOps & Infrastructure",
    badge: "Quartz Pro",
    isPro: true,
    component: HowItWorks7,
    defaultHeight: 749,
  },
];

export function getHowItWorksById(id: string | number): HowItWorksMeta | undefined {
  const num = typeof id === "number" ? id : parseInt(id, 10);
  if (!isNaN(num)) {
    return HOW_IT_WORKS_LIST.find((h) => h.id === num);
  }
  return HOW_IT_WORKS_LIST.find((h) => h.slug.toLowerCase() === String(id).toLowerCase());
}
