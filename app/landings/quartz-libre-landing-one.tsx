"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./landing.css";
import { LandingNavbar } from "./components/LandingNavbar";
import { LandingHero } from "./components/LandingHero";
import { LandingIntegrations } from "./components/LandingIntegrations";
import { LandingBento } from "./components/LandingBento";
import { LandingProductDirection } from "./components/LandingProductDirection";
import { LandingSmarterBlocks } from "./components/LandingSmarterBlocks";
import { LandingTestimonials } from "./components/LandingTestimonials";
import { LandingCta } from "./components/LandingCta";
import { LandingFooter } from "./components/LandingFooter";

interface QuartzLibreLandingOneProps {
  fullscreen?: boolean;
}

export function QuartzLibreLandingOne({ fullscreen: initialFullscreen = true }: QuartzLibreLandingOneProps) {
  const [fullscreen, setFullscreen] = useState(initialFullscreen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      data-theme="quartz"
      className="bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white relative min-h-screen antialiased [--color-primary:var(--color-zinc-800)] selection:bg-indigo-500/20 selection:text-indigo-600 font-sans"
    >
      {/* Discreet floating control bar for preview navigation */}
      <aside aria-label="Preview controls" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 p-1.5 shadow-xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/90 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:scale-105">
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5"
        >
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </Link>
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
        <Link
          href="/landings"
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5"
        >
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Landings Catalog
        </Link>
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
        <button
          type="button"
          onClick={() => setFullscreen(!fullscreen)}
          className="rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 cursor-pointer"
        >
          {fullscreen ? (
            <>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
              Standard View
            </>
          ) : (
            <>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              Fullscreen
            </>
          )}
        </button>
      </aside>

      {/* Header */}
      <LandingNavbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />

      {/* Main Landing Body */}
      <main role="main" className="bg-background [--color-primary:var(--color-indigo-500)]">
        <LandingHero />
        <LandingIntegrations />
        <LandingBento />
        <LandingProductDirection />
        <LandingSmarterBlocks />
        <LandingTestimonials />
        <LandingCta />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
