import React from "react";
import { QuartzLibreLandingOne } from "./quartz-libre-landing-one";

export interface LandingPageItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  route: string;
  slug: string[];
  viewUrl: string;
  fullscreenUrl: string;
  description: string;
  features: string[];
  imageUrl: string;
  component?: React.ComponentType<{ fullscreen?: boolean }>;
}

export const LANDING_PAGES: LandingPageItem[] = [
  {
    id: "quartz-libre-landing-one",
    title: "Quartz Libre Landing One",
    subtitle: "The Financial OS powering businesses on your platform",
    category: "Fintech & Payments OS",
    badge: "Quartz Libre",
    route: "/pages/quartz/libre/landing/one",
    slug: ["quartz", "libre", "landing", "one"],
    viewUrl: "/landings/quartz/libre/landing/one",
    fullscreenUrl: "/pages/quartz/libre/landing/one?fullscreen=true",
    description:
      "Fully cloned, production-grade fintech landing page featuring animated SVG beam curves, 4 interactive Bento cards, IDE code blocks, customer testimonials, and sleek responsive footer.",
    features: ["9 Modular Sections", "Animated SVG Beams", "Interactive Bento Grid", "Tailwind v4"],
    imageUrl: "https://cdn.jsdelivr.net/gh/tailark/pro-images@main/pages/dusk/landing-one.png",
    component: QuartzLibreLandingOne,
  },
  {
    id: "aside-landing",
    title: "Aside AI Workspace",
    subtitle: "Flagship Developer Workspace & Productivity Landing",
    category: "AI Workspace & Tooling",
    badge: "Aside AI",
    route: "/aside",
    slug: ["aside"],
    viewUrl: "/aside",
    fullscreenUrl: "/aside",
    description:
      "High-performance developer workspace landing featuring hero illustrations, live benchmark charts, interactive Rive card animations, and 3D icon grid.",
    features: ["Interactive Hero Canvas", "Benchmark Latency Charts", "Rive Animations", "3D Icons Grid"],
    imageUrl: "/opengraph-image.png",
  },
  {
    id: "mintro",
    title: "Mintro Financial",
    subtitle: "Financial Management App Webflow Template",
    category: "Fintech & Personal Finance",
    badge: "Mintro Webflow",
    route: "/mintro",
    slug: ["mintro"],
    viewUrl: "/mintro",
    fullscreenUrl: "/mintro",
    description:
      "Pixel-perfect clone of the Mintro financial management template featuring all 14 sections, interactive feature tabs, dynamic monthly/yearly pricing switcher, 6-card testimonial slider, and 100% self-hosted assets.",
    features: ["14 Complete Sections", "Interactive Feature Tabs", "Monthly/Yearly Pricing Switcher", "Testimonial Carousel", "100% Local Assets"],
    imageUrl: "/mintro/assets/67050d6b59657c8a0a1cffd3_I_Phone.png",
  },
];

export function findLandingBySlug(slug: string[]): LandingPageItem | undefined {
  if (!slug || slug.length === 0) return undefined;
  const joined = slug.join("/").toLowerCase();

  if (
    joined === "quartz/libre/landing/one" ||
    joined === "libre/landing/one" ||
    joined === "libre/landing-one" ||
    joined === "libre-landing-one" ||
    joined === "landing/one" ||
    joined === "one"
  ) {
    return LANDING_PAGES[0];
  }

  if (joined === "aside" || joined === "root" || joined === "home") {
    return LANDING_PAGES[1];
  }

  if (joined === "mintro") {
    return LANDING_PAGES[2];
  }

  return LANDING_PAGES.find((p) => p.slug.join("/").toLowerCase() === joined || p.id === joined);
}
