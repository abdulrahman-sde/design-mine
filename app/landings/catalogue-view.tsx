// @ts-nocheck
"use client";

import "../illustration/tailark.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getIllustrationComponent } from "../illustration/registry";

function IllustrationPreview({ name }: { name: string }) {
  const Comp = getIllustrationComponent(name);
  if (!Comp) return null;
  return (
    <div className="flex size-full items-center justify-center p-6 *:scale-110">
      <Comp />
    </div>
  );
}

export function LandingsCatalogue() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "landings">("all");

  const cards = [
    {
      id: "quartz-libre",
      type: "landing",
      title: "Quartz Libre",
      subtitle: "Landing Page · Fintech & Payments OS",
      href: "/pages/quartz/libre/landing/one?fullscreen=true",
      actionLabel: "Fullscreen",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src="https://cdn.jsdelivr.net/gh/tailark/pro-images@main/pages/dusk/landing-one.png"
            alt="Quartz Libre Landing"
            fill
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      ),
    },
    {
      id: "aside-workspace",
      type: "landing",
      title: "Aside Workspace",
      subtitle: "Landing Page · AI Developer Browser",
      href: "/aside",
      actionLabel: "Fullscreen",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src="/opengraph-image.png"
            alt="Aside Workspace"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      ),
    },
    {
      id: "mintro-financial",
      type: "landing",
      title: "Mintro Financial",
      subtitle: "Landing Page · Financial Management Webflow",
      href: "/mintro",
      actionLabel: "Fullscreen",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#eef7ec] dark:bg-zinc-900 flex items-center justify-center p-4">
          <Image
            src="/mintro/assets/67050d6b59657c8a0a1cffd3_I_Phone.png"
            alt="Mintro Financial App"
            fill
            unoptimized
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ),
    },
    {
      id: "hero-blocks",
      type: "hero",
      title: "Marketing Heroes",
      subtitle: "20 Component Blocks · Analytics, AI & SaaS",
      href: "/hero",
      actionLabel: "Explore",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4">
          <Image
            src="/tailark/hero-illustration_nl1gdn.png"
            alt="Marketing Heroes"
            fill
            unoptimized
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ),
    },
    {
      id: "how-it-works-blocks",
      type: "hero",
      title: "How It Works Blocks",
      subtitle: "7 Step Sections · Payment, Gantt, AI & Pipeline",
      href: "/how-it-works",
      actionLabel: "Explore",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4">
          <Image
            src="/tailark/human-face_kf9mt7.png"
            alt="How It Works Blocks"
            fill
            unoptimized
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ),
    },
    {
      id: "comparator-blocks",
      type: "hero",
      title: "Comparator Blocks",
      subtitle: "7 Matrix Sections · Pricing, Enterprise & SLA",
      href: "/comparator",
      actionLabel: "Explore",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 3h5v5" />
                <path d="M8 21H3v-5" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-foreground">7 Plan Comparators</span>
            <span className="text-[11px] text-muted-foreground">Free · Pro · Team · Enterprise</span>
          </div>
        </div>
      ),
    },
    {
      id: "animated-illustrations",
      type: "illustration",
      title: "Vector Illustrations",
      subtitle: "62 Animated SVGs · 10 Categories",
      href: "/illustration",
      actionLabel: "Explore",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100/60 dark:bg-zinc-900/60 flex items-center justify-center">
          <IllustrationPreview name="models-2" />
        </div>
      ),
    },
    {
      id: "shadcn-studio-illustrations",
      type: "illustration",
      title: "Shadcn Studio Illustrations",
      subtitle: "264 Component Animations · 8 Categories & 42 Sections",
      href: "/illustrations",
      actionLabel: "Explore",
      renderPreview: () => (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100/60 dark:bg-zinc-900/60 flex items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-lg">
              <svg width="28" height="28" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="328" height="328" rx="164" fill="currentColor" />
                <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="white" strokeWidth="20" className="dark:stroke-black" />
                <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="white" strokeWidth="20" className="dark:stroke-black" />
                <line x1="166" y1="133" x2="166" y2="205" stroke="white" strokeWidth="20" className="dark:stroke-black" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-foreground">264 Interactive Animations</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Beam · Orbit · Chat · Marquee · Card Stack</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const visibleCards =
    selectedFilter === "landings"
      ? cards.filter((c) => c.type === "landing")
      : cards;

  return (
    <div
      data-theme="global"
      className={
        darkMode
          ? "dark min-h-screen bg-background text-foreground selection:bg-accent/15"
          : "min-h-screen bg-background text-foreground selection:bg-accent/50"
      }
    >
      {/* Top Navbar: Aligned to matching max-w-6xl container */}
      <header className="sticky top-0 z-50 border-b border-foreground/8 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md py-1 pr-1.5 transition-opacity hover:opacity-85"
              aria-label="Home"
              title="Back to Home"
            >
              <div className="flex size-6 items-center justify-center rounded-md bg-foreground text-background font-bold text-xs">
                K
              </div>
              <span className="text-xs font-semibold tracking-tight text-foreground">
                Kairo Templates
              </span>
            </Link>

            <span className="text-muted-foreground/30">/</span>

            <span className="text-xs font-medium text-muted-foreground">
              Overview
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Filter Tabs */}
            <div className="flex items-center rounded-lg bg-foreground/5 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                  selectedFilter === "all"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("landings")}
                className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                  selectedFilter === "landings"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Landings (2)
              </button>
              <Link
                href="/hero"
                className="rounded-md px-2.5 py-1 font-medium text-muted-foreground hover:text-foreground transition-all"
              >
                Heroes (20)
              </Link>
              <Link
                href="/illustration"
                className="rounded-md px-2.5 py-1 font-medium text-muted-foreground hover:text-foreground transition-all"
              >
                Tailark (62)
              </Link>
              <Link
                href="/illustrations"
                className="rounded-md px-2.5 py-1 font-medium text-muted-foreground hover:text-foreground transition-all"
              >
                Shadcn Studio (264)
              </Link>
            </div>

            <div className="h-4 w-px bg-foreground/10" />

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle theme"
              className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              title="Toggle theme"
            >
              {darkMode ? (
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66-1.41 1.41M19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area: Perfectly aligned with header */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Understated Minimal Header: NO SLOP, NO EYEBROWS, NO PULSING BADGES */}
        <div className="mb-6 space-y-1">
          <h1 className="text-base sm:text-lg font-medium tracking-tight text-foreground">
            Curated Templates
          </h1>
          <p className="text-xs text-muted-foreground">
            Production-grade landing pages, marketing heroes, and animated illustrations.
          </p>
        </div>

        {/* Minimal Illustration-Style Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {visibleCards.map((card) => (
            <article
              key={card.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-muted/30 dark:bg-neutral-950 shadow-xs transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md"
            >
              {/* Visual Preview Container with rigid, responsive height */}
              <Link href={card.href} className="block w-full">
                {card.renderPreview()}
              </Link>

              {/* Minimal Card Details */}
              <div className="flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 px-4.5 py-3.5 bg-background">
                <div className="space-y-0.5">
                  <h2 className="text-sm font-medium text-foreground">
                    <Link
                      href={card.href}
                      className="before:absolute before:inset-0 hover:underline"
                    >
                      {card.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {card.subtitle}
                  </p>
                </div>

                {/* Minimal Action Pill */}
                <span className="inline-flex items-center gap-1 rounded-md border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs font-medium text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <span>{card.actionLabel}</span>
                  <svg
                    className="size-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
