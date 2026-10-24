// @ts-nocheck
"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import catalogData from "./data/catalog.json";
import { ShadcnIllustration } from "./shadcn-registry";
import { CodeDialog } from "./components/CodeDialog";

export interface CategoryMeta {
  id: string;
  label: string;
  title: string;
  count: number;
  previewIllustration: string;
  colSpan?: number;
  rowSpan?: number;
}

export const CATEGORIES_META: CategoryMeta[] = [
  { id: "beam", label: "Beam", title: "Shadcn Beam Illustrations", count: 53, previewIllustration: "beam-illustrations-01", colSpan: 2, rowSpan: 1 },
  { id: "orbit", label: "Orbit", title: "Shadcn Orbit Illustrations", count: 30, previewIllustration: "orbit-01", colSpan: 1, rowSpan: 1 },
  { id: "chat", label: "Chat", title: "Shadcn Chat Illustrations", count: 23, previewIllustration: "chat-illustrations-01", colSpan: 1, rowSpan: 1 },
  { id: "marquee", label: "Marquee", title: "Shadcn Marquee Illustrations", count: 23, previewIllustration: "marquee-01", colSpan: 2, rowSpan: 1 },
  { id: "card-stack", label: "Card Stack", title: "Shadcn Card Stack Illustrations", count: 18, previewIllustration: "card-stack-01", colSpan: 1, rowSpan: 1 },
  { id: "text-animation", label: "Text Animation", title: "Shadcn Text Animations", count: 31, previewIllustration: "text-animations-07", colSpan: 1, rowSpan: 1 },
  { id: "ripple-effect", label: "Ripple Effect", title: "Shadcn Ripple Effect Illustrations", count: 11, previewIllustration: "ripple-effect-01", colSpan: 1, rowSpan: 1 },
  { id: "miscellaneous", label: "Miscellaneous", title: "Shadcn Miscellaneous Illustrations", count: 75, previewIllustration: "miscellaneous-01", colSpan: 2, rowSpan: 1 },
];

export function IllustrationsBrowseView({
  initialMode = "categories",
  initialCategory = "beam",
}: {
  initialMode?: "categories" | "category";
  initialCategory?: string;
}) {
  const [mode, setMode] = useState<"categories" | "category">(initialMode);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [activeCodeDialog, setActiveCodeDialog] = useState<any | null>(null);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle URL change
  const navigateToCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSection("all");
    setSearchQuery("");
    setMode("category");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/illustrations/${catId}`);
    }
  };

  const navigateToCategories = () => {
    setMode("categories");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/illustrations`);
    }
  };

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  // Find active category data from catalog
  const currentCategoryData = useMemo(() => {
    return catalogData.categories.find((c) => c.id === selectedCategory) || catalogData.categories[0];
  }, [selectedCategory]);

  // Flatten illustrations for the selected category with section metadata
  const allCategoryIllustrations = useMemo(() => {
    if (!currentCategoryData) return [];
    const list: Array<{
      name: string;
      title: string;
      description?: string;
      badge?: string;
      sectionTitle: string;
      sectionSlug: string;
    }> = [];

    currentCategoryData.sections.forEach((sec) => {
      sec.illustrations.forEach((ill) => {
        list.push({
          name: ill.name,
          title: ill.title,
          description: ill.description,
          badge: ill.badge || ill.meta?.badge || "Basic",
          sectionTitle: sec.section.title,
          sectionSlug: sec.section.slug,
        });
      });
    });
    return list;
  }, [currentCategoryData]);

  // Filter illustrations by section and search query
  const filteredIllustrations = useMemo(() => {
    return allCategoryIllustrations.filter((item) => {
      if (selectedSection !== "all" && item.sectionSlug !== selectedSection) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.sectionTitle.toLowerCase().includes(q) ||
          (item.badge && item.badge.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [allCategoryIllustrations, selectedSection, searchQuery]);

  const activeCategoryMeta = CATEGORIES_META.find((c) => c.id === selectedCategory) || CATEGORIES_META[0];

  return (
    <div
      data-theme="global"
      className={darkMode ? "dark min-h-screen bg-background text-foreground" : "min-h-screen bg-background text-foreground"}
    >
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 flex h-11 items-center justify-between border-b border-foreground/8 bg-background/95 px-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md py-1 pr-1.5 text-foreground transition-opacity hover:opacity-80"
            aria-label="Home"
            title="Back to Home"
          >
            <div className="flex size-6 items-center justify-center rounded-md bg-foreground text-background font-bold text-xs">
              K
            </div>
            <span className="text-xs font-semibold tracking-tight hidden sm:inline">Kairo</span>
          </Link>

          <span className="text-muted-foreground/30">/</span>

          {/* Sidebar Toggle */}
          <button
            type="button"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle Sidebar"
            title="Toggle Sidebar"
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
            </svg>
          </button>

          <div className="h-3.5 w-px bg-foreground/10" />

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs font-medium">
            <button
              type="button"
              onClick={navigateToCategories}
              className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${
                mode === "categories"
                  ? "bg-foreground/6 text-foreground font-semibold"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              Illustrations
            </button>
            <span className="text-muted-foreground/40">/</span>
            <button
              type="button"
              onClick={() => setMode("category")}
              className={`cursor-pointer rounded-md px-2 py-1 capitalize transition-colors ${
                mode === "category"
                  ? "bg-foreground/6 text-foreground font-semibold"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {activeCategoryMeta.label} ({allCategoryIllustrations.length})
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Switcher */}
          <div className="flex items-center rounded-lg bg-foreground/5 p-0.5 text-xs">
            <button
              type="button"
              onClick={navigateToCategories}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                mode === "categories"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Categories Bento
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("category");
              }}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                mode === "category"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategoryMeta.label} ({allCategoryIllustrations.length})
            </button>
          </div>

          <div className="h-3.5 w-px bg-foreground/10" />

          {/* Tailark link */}
          <Link
            href="/illustration"
            className="hidden text-xs text-muted-foreground hover:text-foreground transition-colors sm:inline-block px-1"
            title="Browse Tailark Vector Illustrations"
          >
            Tailark (62)
          </Link>

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle theme"
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            title="Toggle theme"
          >
            {darkMode ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex min-h-[calc(100vh-2.75rem)]">
        {/* Collapsible Left Sidebar */}
        {sidebarOpen && (
          <aside className="sticky top-11 h-[calc(100vh-2.75rem)] shrink-0 w-48 overflow-y-auto border-r border-foreground/8 bg-background px-2.5 py-3 self-start">
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Shadcn Studio
            </div>
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                onClick={navigateToCategories}
                className={`flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-[13px] transition-colors ${
                  mode === "categories"
                    ? "bg-foreground/6 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                <span>Categories</span>
                <span className="text-xs text-muted-foreground/80">8</span>
              </button>

              {CATEGORIES_META.map((cat) => {
                const isActive = mode === "category" && selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => navigateToCategory(cat.id)}
                    className={`flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-[13px] capitalize transition-colors ${
                      isActive
                        ? "bg-foreground/6 font-medium text-foreground"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs text-muted-foreground/80">{cat.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Other Collections
            </div>
            <div className="flex flex-col gap-0.5">
              <Link
                href="/illustration"
                className="flex h-7 w-full items-center justify-between rounded-lg px-2 text-[13px] text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <span>Tailark SVGs</span>
                <span className="text-xs text-muted-foreground/80">62</span>
              </Link>
              <Link
                href="/hero"
                className="flex h-7 w-full items-center justify-between rounded-lg px-2 text-[13px] text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <span>Marketing Heroes</span>
                <span className="text-xs text-muted-foreground/80">20</span>
              </Link>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1 bg-background p-2">
          {mode === "categories" ? (
            /* Bento Grid Overview (Exact Tailark / Vector style) */
            <div className="relative grid auto-rows-[18rem] gap-[4.5px] px-1 pb-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CATEGORIES_META.map((cat) => (
                <div
                  key={cat.id}
                  data-theme="both"
                  className={`group relative h-full min-h-0 overflow-hidden rounded-2xl [contain-intrinsic-size:auto_18rem] [content-visibility:auto] ${
                    cat.rowSpan === 2 ? "row-span-2" : "row-span-1"
                  } ${cat.colSpan === 2 ? "sm:col-span-2" : ""}`}
                >
                  <div className="peer relative z-1 flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-muted/50 dark:bg-neutral-950 shadow-xs transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md">
                    <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-6 py-10 *:scale-95">
                      <div className="flex w-full items-center justify-center pointer-events-none">
                        <ShadcnIllustration
                          category={cat.id}
                          name={cat.previewIllustration}
                          className="size-full"
                        />
                      </div>
                    </div>
                    <div className="z-10 shrink-0 space-y-0.5 px-4 pt-1 pb-4">
                      <p className="text-sm font-medium capitalize">
                        <Link
                          className="before:absolute before:inset-0 text-foreground"
                          href={`/illustrations/${cat.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateToCategory(cat.id);
                          }}
                        >
                          {cat.label}
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">{cat.count} illustrations</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Category Mode with Section Filters and Cards */
            <div className="space-y-3">
              {/* Category Toolbar: Section Pills & Search */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                {/* Section filter pills */}
                <div className="flex flex-wrap items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setSelectedSection("all")}
                    className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                      selectedSection === "all"
                        ? "bg-foreground text-background"
                        : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                    }`}
                  >
                    All ({allCategoryIllustrations.length})
                  </button>
                  {currentCategoryData.sections.map((sec) => {
                    const isSecActive = selectedSection === sec.section.slug;
                    return (
                      <button
                        key={sec.section.slug}
                        type="button"
                        onClick={() => setSelectedSection(sec.section.slug)}
                        className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                          isSecActive
                            ? "bg-foreground text-background"
                            : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                        }`}
                      >
                        {sec.section.title} ({sec.illustrations.length})
                      </button>
                    );
                  })}
                </div>

                {/* Search input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search illustrations..."
                    className="h-7 w-44 rounded-md border border-border bg-background px-2.5 pl-7 text-xs text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-foreground/20 sm:w-56"
                  />
                  <svg
                    className="pointer-events-none absolute left-2 top-2 size-3 text-muted-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>

              {/* Grid of Illustration Cards */}
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredIllustrations.map((item) => (
                  <div
                    key={item.name}
                    className="group relative min-h-72 rounded-2xl max-sm:overflow-hidden"
                  >
                    <div className="peer relative z-1 flex h-full min-h-72 items-center justify-center rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-muted/50 p-6 py-10 *:scale-95 not-dark:in-data-[theme=dark]:bg-black/95 dark:bg-neutral-950 shadow-xs transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md">
                      <ShadcnIllustration
                        category={selectedCategory}
                        name={item.name}
                        className="size-full"
                      />
                    </div>

                    {/* Badge on top right */}
                    <div className="absolute top-3 right-3 z-10 transition-opacity group-hover:opacity-40">
                      <span className="inline-flex items-center rounded-full bg-foreground/6 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title on top left */}
                    <div className="pointer-events-none absolute top-3 left-3 z-10 text-xs font-medium text-muted-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                      {item.title}
                    </div>

                    {/* Floating Action Pill */}
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100 p-1 rounded-lg bg-card/95 shadow-md border border-border/70 backdrop-blur-sm">
                      {/* Copy Name Button */}
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(item.name);
                          notify(`Copied "${item.name}"`);
                        }}
                        aria-label="Copy name"
                        title="Copy component name"
                        className="relative flex h-6 w-7 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
                      >
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </button>

                      {/* Copy CLI Command Button */}
                      <button
                        type="button"
                        onClick={() => {
                          const cmd = `npx shadcn add @ss-illustrations/${item.name}`;
                          navigator.clipboard.writeText(cmd);
                          notify("Copied shadcn CLI command");
                        }}
                        aria-label="Copy shadcn CLI command"
                        title="Copy shadcn CLI command"
                        className="relative flex h-6 w-7 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
                      >
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="4 17 10 11 4 5" />
                          <line x1="12" x2="20" y1="19" y2="19" />
                        </svg>
                      </button>

                      {/* View Code Dialog Button */}
                      <button
                        type="button"
                        onClick={() => setActiveCodeDialog(item)}
                        aria-label="View code"
                        title="View code & installation instructions"
                        className="relative flex h-6 w-7 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
                      >
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </button>

                      {/* Fullscreen Preview Link */}
                      <Link
                        href={`/preview/illustrations/${selectedCategory}/${item.sectionSlug}`}
                        aria-label="Fullscreen section preview"
                        title="Fullscreen preview"
                        className="relative flex h-6 w-7 items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
                      >
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredIllustrations.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-sm font-medium text-foreground">No illustrations found</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try adjusting your search query or section filter.
                  </p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Code Dialog Modal */}
      {activeCodeDialog && (
        <CodeDialog
          illustration={{
            name: activeCodeDialog.name,
            title: activeCodeDialog.title,
            category: selectedCategory,
            description: activeCodeDialog.description,
          }}
          onClose={() => setActiveCodeDialog(null)}
        />
      )}

      {/* Toast Feedback */}
      {toastMsg && (
        <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-lg">
          <svg className="size-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
