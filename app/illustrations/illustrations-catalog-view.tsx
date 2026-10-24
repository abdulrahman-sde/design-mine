"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { CategoryShowcaseCard } from "./components/CategoryShowcaseCard";
import { IllustrationCard } from "./components/IllustrationCard";
import { FaqAccordion } from "./components/FaqAccordion";

interface IllustrationsCatalogViewProps {
  catalog: {
    totalIllustrations: number;
    categories: Array<{
      id: string;
      title: string;
      description: string;
      count: number;
      sectionsCount: number;
      sampleIllustration?: string;
      sections: Array<{
        section: {
          slug: string;
          title: string;
          description: string;
        };
        illustrations: Array<{
          name: string;
          title: string;
          description?: string;
          badge?: string;
          dependencies?: string[];
        }>;
      }>;
    }>;
    globalFaqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function IllustrationsCatalogView({ catalog }: IllustrationsCatalogViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // All illustrations flattened for global search
  const allIllustrationsFlat = useMemo(() => {
    const list: Array<{
      illustration: any;
      category: string;
      sectionTitle: string;
      sectionSlug: string;
    }> = [];
    catalog.categories.forEach((cat) => {
      cat.sections.forEach((sec) => {
        sec.illustrations.forEach((ill) => {
          list.push({
            illustration: ill,
            category: cat.id,
            sectionTitle: sec.section.title,
            sectionSlug: sec.section.slug,
          });
        });
      });
    });
    return list;
  }, [catalog]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allIllustrationsFlat.filter(
      (item) =>
        item.illustration.title.toLowerCase().includes(q) ||
        item.illustration.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.sectionTitle.toLowerCase().includes(q) ||
        (item.illustration.description && item.illustration.description.toLowerCase().includes(q))
    );
  }, [searchQuery, allIllustrationsFlat]);

  const selectedCategoryData = useMemo(() => {
    if (activeCategory === "all") return null;
    return catalog.categories.find((c) => c.id === activeCategory);
  }, [activeCategory, catalog]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1 text-xs font-semibold text-primary">
            <span className="size-2 rounded-full bg-primary" />
            <span>250+ Free & Pro Illustrations</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            250+ Shadcn Illustrations <br className="hidden sm:inline" />
            <span className="text-muted-foreground">— Free & Pro</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Enhance your landing pages with animated, themeable illustrations built for Shadcn UI and
            Tailwind CSS. Connect nodes, orbit integrations, compose chat interfaces, and bring pages to life
            — ready to copy or install with the CLI.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 size-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search 264+ illustrations (e.g. beam, orbit, chat, stack)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-2.5 pr-4 pl-10 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 rounded-full p-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-foreground text-background shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              All Categories ({catalog.totalIllustrations})
            </button>
            {catalog.categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery("");
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-all ${
                    isSelected
                      ? "bg-foreground text-background shadow-xs"
                      : "border border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {cat.id} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Mode */}
        {searchQuery.trim() !== "" ? (
          <section className="mt-14">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <h2 className="text-xl font-bold text-foreground">
                Search Results for &ldquo;{searchQuery}&rdquo; ({searchResults.length})
              </h2>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-medium text-primary hover:underline"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  No illustrations found matching &ldquo;{searchQuery}&rdquo;.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((item) => (
                  <IllustrationCard
                    key={item.illustration.name}
                    illustration={item.illustration}
                    category={item.category}
                    sectionSlug={item.sectionSlug}
                  />
                ))}
              </div>
            )}
          </section>
        ) : activeCategory !== "all" && selectedCategoryData ? (
          /* Filtered Category Direct View */
          <section className="mt-14 space-y-12">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{selectedCategoryData.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{selectedCategoryData.description}</p>
              </div>
              <Link
                href={`/illustrations/${selectedCategoryData.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Dedicated Category Page</span>
                <span>→</span>
              </Link>
            </div>

            {selectedCategoryData.sections.map((sec) => (
              <div key={sec.section.slug} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{sec.section.title}</h3>
                  <Link
                    href={`/preview/illustrations/${selectedCategoryData.id}/${sec.section.slug}`}
                    target="_blank"
                    className="text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    Preview Section ↗
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.illustrations.map((ill) => (
                    <IllustrationCard
                      key={ill.name}
                      illustration={ill}
                      category={selectedCategoryData.id}
                      sectionSlug={sec.section.slug}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : (
          /* All Categories Showcase Grid */
          <>
            <section className="mt-14">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Illustration Categories
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Browse all 8 categories covering 264 responsive components.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {catalog.categories.map((category) => (
                  <CategoryShowcaseCard key={category.id} category={category} />
                ))}
              </div>
            </section>

            {/* Feature Highlights Grid */}
            <section className="mt-24 rounded-3xl border border-border bg-card/60 p-8 sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  Engineered For Craft
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Motion, theming, install — all handled.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every illustration is built with pure Tailwind CSS and React Motion primitives, fully responsive, and adapts automatically to dark and light modes.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 4.24 4.24" />
                      <path d="m14.83 9.17 4.24-4.24" />
                      <path d="m14.83 14.83 4.24 4.24" />
                      <path d="m9.17 14.83-4.24 4.24" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Themed to your tokens</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    All components inherit your Shadcn UI theme’s CSS variables, so they switch between light and dark modes automatically.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m13 2-2 2.5h3L11 8" />
                      <path d="m13 14-2 2.5h3L11 20" />
                      <polygon points="12 2 15 8 9 8 12 2" />
                      <polygon points="12 14 15 20 9 20 12 14" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Motion, built in</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Smooth looping beams, orbiting satellites, flip card rotations, and fluid stagger animations built with lightweight motion primitives.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" x2="20" y1="19" y2="19" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">CLI or Copy-Paste</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Install illustrations straight into your codebase with the official CLI command or copy the raw React source code directly.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Global FAQs */}
        <div className="mt-20">
          <FaqAccordion faqs={catalog.globalFaqs} title="Frequently Asked Questions" />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-border bg-card/40 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <p>
            Shadcn Studio Illustrations Clone for Kairo Templates — Powered by Next.js, React 19, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
