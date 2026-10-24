import React from "react";
import { HeroSection1 } from "./HeroSection1";
import { HeroSection2 } from "./HeroSection2";
import { HeroSection3 } from "./HeroSection3";
import { HeroSection4 } from "./HeroSection4";
import { HeroSection5 } from "./HeroSection5";
import { HeroSection6 } from "./HeroSection6";
import { HeroSection7 } from "./HeroSection7";
import { HeroSection8 } from "./HeroSection8";
import { HeroSection9 } from "./HeroSection9";
import { HeroSection10 } from "./HeroSection10";
import { HeroSection11 } from "./HeroSection11";
import { HeroSection12 } from "./HeroSection12";
import { HeroSection13 } from "./HeroSection13";
import { HeroSection14 } from "./HeroSection14";
import { HeroSection15 } from "./HeroSection15";
import { HeroSection16 } from "./HeroSection16";
import { HeroSection17 } from "./HeroSection17";
import { HeroSection18 } from "./HeroSection18";
import { HeroSection19 } from "./HeroSection19";
import { HeroSection20 } from "./HeroSection20";

export interface HeroMeta {
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

export const HEROES_LIST: HeroMeta[] = [
  {
    id: 1,
    slug: "hero-section-1",
    name: "Hero Section 1",
    headline: "Powerful Analytics for Smarter Decisions",
    tagline: "Unify your business metrics, forecast churn, and make data-driven decisions with clean interactive charts.",
    category: "Analytics & SaaS",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection1,
    defaultHeight: 1295,
  },
  {
    id: 2,
    slug: "hero-section-2",
    name: "Hero Section 2",
    headline: "Your Personal AI, With you Anywhere",
    tagline: "Converse, automate, and brainstorm with an intelligent AI companion tailored to your workflow.",
    category: "AI & Assistants",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection2,
    defaultHeight: 1087,
  },
  {
    id: 3,
    slug: "hero-section-3",
    name: "Hero Section 3",
    headline: "Powerful Analytics for Smarter Decisions (SaaS)",
    tagline: "Complete SaaS marketing hero with social proof, customer rating badges, and perspective tilted dashboard window.",
    category: "Analytics & SaaS",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection3,
    defaultHeight: 1060,
  },
  {
    id: 4,
    slug: "hero-section-4",
    name: "Hero Section 4",
    headline: "Transform your Sales with Data-Driven Insights",
    tagline: "Accelerate revenue operations with real-time pipeline velocity metrics and AI deal coaching.",
    category: "Sales & CRM",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection4,
    defaultHeight: 1120,
  },
  {
    id: 5,
    slug: "hero-section-5",
    name: "Hero Section 5",
    headline: "Simple payments for startups",
    tagline: "Accept credit cards, global currencies, and localized payments with zero friction and instant onboarding.",
    category: "Fintech & Payments",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection5,
    defaultHeight: 960,
  },
  {
    id: 6,
    slug: "hero-section-6",
    name: "Hero Section 6",
    headline: "Unlock Revenue Growth with Intelligent Analytics",
    tagline: "Empower finance and growth teams with predictive retention cohorts and automated attribution modeling.",
    category: "Analytics & SaaS",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection6,
    defaultHeight: 1040,
  },
  {
    id: 7,
    slug: "hero-section-7",
    name: "Hero Section 7",
    headline: "Software monetization for the AI era",
    tagline: "Price, meter, and bill AI token workloads effortlessly with flexible usage-based billing infrastructure.",
    category: "AI & Monetization",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection7,
    defaultHeight: 980,
  },
  {
    id: 8,
    slug: "hero-section-8",
    name: "Hero Section 8",
    headline: "Payments infrastructure built for SaaS that Scales",
    tagline: "Global payment routing, automated sales tax compliance, and seamless multi-currency support.",
    category: "Fintech & Payments",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection8,
    defaultHeight: 1020,
  },
  {
    id: 9,
    slug: "hero-section-9",
    name: "Hero Section 9",
    headline: "Modern Solutions for Customer Engagement",
    tagline: "Live customer chat, ticketing sync, and automated AI help desk resolutions all in one beautiful unified inbox.",
    category: "Customer Support",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection9,
    defaultHeight: 1150,
  },
  {
    id: 10,
    slug: "hero-section-10",
    name: "Hero Section 10",
    headline: "Write. Refine. Publish.",
    tagline: "The distraction-free publishing studio designed for modern writers, journalists, and engineering teams.",
    category: "Content & Publishing",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection10,
    defaultHeight: 890,
  },
  {
    id: 11,
    slug: "hero-section-11",
    name: "Hero Section 11",
    headline: "Payments infrastructure for SaaS",
    tagline: "Enterprise-grade checkout, recurring subscriptions, and frictionless payment conversion optimization.",
    category: "Fintech & Payments",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection11,
    defaultHeight: 1080,
  },
  {
    id: 12,
    slug: "hero-section-12",
    name: "Hero Section 12",
    headline: "AI-Powered Meeting Assistant",
    tagline: "Automated transcription, smart summaries, speaker diarization, and synced action items across your tech stack.",
    category: "AI & Productivity",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection12,
    defaultHeight: 960,
  },
  {
    id: 13,
    slug: "hero-section-13",
    name: "Hero Section 13",
    headline: "Record Studio quality Sounds outside the studio",
    tagline: "Studio grade voice enhancement, background noise suppression, and podcast-ready mastering anywhere.",
    category: "Audio & Media",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection13,
    defaultHeight: 940,
  },
  {
    id: 14,
    slug: "hero-section-14",
    name: "Hero Section 14",
    headline: "AI solutions for seamless Customer Acquisition",
    tagline: "Convert high-intent traffic into qualified enterprise pipeline using multi-step AI enrichment.",
    category: "Growth & Marketing",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection14,
    defaultHeight: 1060,
  },
  {
    id: 15,
    slug: "hero-section-15",
    name: "Hero Section 15",
    headline: "The Financial OS powering businesses on your platform",
    tagline: "Embed treasury accounts, branded debit cards, and automated capital financing directly into your SaaS.",
    category: "Fintech & Banking",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection15,
    defaultHeight: 990,
  },
  {
    id: 16,
    slug: "hero-section-16",
    name: "Hero Section 16",
    headline: "The Financial OS powering businesses on your platform (Atmospheric)",
    tagline: "Atmospheric dark theme variation featuring high-impact radial glows, holographic debit cards, and live ledger stream.",
    category: "Fintech & Banking",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection16,
    defaultHeight: 1140,
  },
  {
    id: 17,
    slug: "hero-section-17",
    name: "Hero Section 17",
    headline: "Spot problems before they deploy",
    tagline: "Automated staging verification, visual regression diffs, and instant rollbacks for high-velocity teams.",
    category: "Developer Tools",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection17,
    defaultHeight: 920,
  },
  {
    id: 18,
    slug: "hero-section-18",
    name: "Hero Section 18",
    headline: "Your Skin care companion",
    tagline: "Consumer mobile application showcase with phone hardware frames, App Store badges, and personalized routine scan.",
    category: "Mobile Apps & Health",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection18,
    defaultHeight: 856,
  },
  {
    id: 19,
    slug: "hero-section-19",
    name: "Hero Section 19",
    headline: "Beyond Sales team management",
    tagline: "Drive quota attainment with transparent team dashboards, automated commission tracking, and win rate analysis.",
    category: "Sales & CRM",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection19,
    defaultHeight: 1673,
  },
  {
    id: 20,
    slug: "hero-section-20",
    name: "Hero Section 20",
    headline: "Own assistant. Gets things done.",
    tagline: "Cinematic full-screen ambient video background, glowing typography, and voice assistant command chips.",
    category: "AI & Innovation",
    badge: "Quartz Pro",
    isPro: true,
    component: HeroSection20,
    defaultHeight: 1068,
  },
];

export function getHeroById(id: number | string): HeroMeta | undefined {
  const numId = typeof id === "number" ? id : parseInt(id.replace("hero-section-", ""), 10);
  return HEROES_LIST.find((h) => h.id === numId);
}

export {
  HeroSection1,
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
  HeroSection6,
  HeroSection7,
  HeroSection8,
  HeroSection9,
  HeroSection10,
  HeroSection11,
  HeroSection12,
  HeroSection13,
  HeroSection14,
  HeroSection15,
  HeroSection16,
  HeroSection17,
  HeroSection18,
  HeroSection19,
  HeroSection20,
};
