"use client";

import "../hero/tailark.css";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { HOW_IT_WORKS_LIST } from "./components";

type DisplayMode = "stream" | "grid";

export function HowItWorksView() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("stream");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(HOW_IT_WORKS_LIST.map((h) => h.category))];
    return cats;
  }, []);

  // Filtered list
  const filteredList = useMemo(() => {
    return HOW_IT_WORKS_LIST.filter((h) => {
      return selectedCategory === "All" || h.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div
      data-theme="global"
      className={
        darkMode
          ? "dark min-h-screen bg-background text-foreground selection:bg-accent/15"
          : "min-h-screen bg-card text-foreground selection:bg-accent/50 lg:bg-muted"
      }
    >
      {/* Top Main Navigation Bar */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-foreground/10 bg-background/95 px-4 backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-2.5">
          {/* Logo / Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg py-1 transition-opacity hover:opacity-85"
            aria-label="Home"
            title="Back to Home"
          >
            <div className="flex size-7 items-center justify-center rounded-[6px] bg-[oklch(0.7136_0.0576_117.84)]">
              <svg className="size-4.5 invert dark:opacity-90" viewBox="0 0 184 222" fill="none">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80 104H32C14.33 104 0 89.67 0 72V32C0 14.33 14.33 0 32 0H72C89.67 0 104 14.33 104 32V80H154C170.57 80 184 93.43 184 110V163.46C184 174.82 177.58 185.21 167.42 190.29L108.1 219.95C105.4 221.3 102.43 222 99.42 222C88.69 222 80 213.31 80 202.58V104ZM32 24C27.58 24 24 27.58 24 32V72C24 76.42 27.58 80 32 80H80V32C80 27.58 76.42 24 72 24H32ZM104 104H152C156.42 104 160 107.58 160 112V162.02C160 165.07 158.27 167.85 155.53 169.2L115.53 188.84C110.21 191.45 104 187.58 104 181.66V104Z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">Kairo</span>
          </Link>

          <span className="text-muted-foreground/30">/</span>

          <span className="text-xs font-semibold text-foreground">How It Works Blocks</span>
          <span className="rounded-full bg-foreground/6 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            {HOW_IT_WORKS_LIST.length}
          </span>
        </div>

        {/* Center / Right Toolbar */}
        <div className="flex items-center gap-3">
          {/* Display Mode switcher */}
          <div className="flex rounded-full border border-foreground/10 bg-foreground/3 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setDisplayMode("stream")}
              className={`rounded-full px-3 py-1 transition-all cursor-pointer ${
                displayMode === "stream"
                  ? "bg-foreground text-background font-medium shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Stream
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode("grid")}
              className={`rounded-full px-3 py-1 transition-all cursor-pointer ${
                displayMode === "grid"
                  ? "bg-foreground text-background font-medium shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Grid
            </button>
          </div>

          <div className="h-4 w-px bg-foreground/10" />

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle Theme"
            className="flex size-8 items-center justify-center rounded-full border border-foreground/10 bg-foreground/3 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            {darkMode ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Subheader Filters */}
      <div className="border-b border-foreground/8 bg-background/80 px-4 py-2.5 backdrop-blur-xs sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? HOW_IT_WORKS_LIST.length
                  : HOW_IT_WORKS_LIST.filter((h) => h.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? "bg-foreground text-background shadow-xs font-semibold"
                      : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${active ? "opacity-75" : "text-muted-foreground/70"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-3 py-8 sm:px-6">
        {/* MODE: STREAM */}
        {displayMode === "stream" && (
          <div className="space-y-12">
            {filteredList.map((item) => {
              const Comp = item.component;

              return (
                <section
                  key={item.id}
                  id={item.slug}
                  className="overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xs transition-shadow hover:shadow-md"
                >
                  {/* Card Header Toolbar */}
                  <div className="flex items-center justify-between border-b border-foreground/8 px-4 py-2.5 bg-foreground/2 sm:px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-md bg-foreground/8 text-xs font-mono font-bold text-foreground">
                        {item.id}
                      </span>
                      <h3 className="text-xs font-semibold tracking-tight text-foreground sm:text-sm">
                        {item.name}
                      </h3>
                      <span className="hidden sm:inline-flex rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/how-it-works/${item.id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-98"
                      >
                        <span>Fullscreen</span>
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="relative isolate w-full overflow-hidden bg-background"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <Comp />
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* MODE: GRID OVERVIEW */}
        {displayMode === "grid" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredList.map((item) => {
              const Comp = item.component;
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-all hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg"
                >
                  <div
                    className="relative h-64 w-full overflow-hidden bg-muted/20"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div className="pointer-events-none absolute inset-0 origin-top scale-[0.38] select-none p-4 w-[260%]">
                      <Comp />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  </div>

                  <div className="p-4 flex flex-col justify-between gap-3 flex-1 border-t border-foreground/8">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="rounded-md bg-foreground/6 px-2 py-0.5 text-[10px] font-mono font-bold text-foreground">
                          #{item.id}
                        </span>
                        <span className="text-[11px] font-medium text-muted-foreground">{item.category}</span>
                      </div>
                      <h3 className="line-clamp-1 text-sm font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{item.tagline}</p>
                    </div>

                    <Link
                      href={`/how-it-works/${item.id}`}
                      target="_blank"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-foreground/10 bg-foreground/4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/10"
                    >
                      <span>Fullscreen View</span>
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
