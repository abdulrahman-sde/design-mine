"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { IllustrationCard } from "../components/IllustrationCard";
import { FaqAccordion } from "../components/FaqAccordion";

interface CategoryClientViewProps {
  categoryData: {
    id: string;
    title: string;
    description: string;
    count: number;
    sections: Array<{
      section: {
        slug: string;
        title: string;
        description: string;
        breakpoints?: Record<string, number>;
      };
      illustrations: Array<{
        name: string;
        title: string;
        description?: string;
        badge?: string;
        dependencies?: string[];
      }>;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  allCategories: Array<{
    id: string;
    title: string;
    count: number;
  }>;
}

export function CategoryClientView({ categoryData, allCategories }: CategoryClientViewProps) {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = categoryData.sections
    .filter((sec) => selectedSection === "all" || sec.section.slug === selectedSection)
    .map((sec) => {
      if (!searchQuery.trim()) return sec;
      const q = searchQuery.toLowerCase();
      const matched = sec.illustrations.filter(
        (ill) =>
          ill.title.toLowerCase().includes(q) ||
          ill.name.toLowerCase().includes(q) ||
          (ill.description && ill.description.toLowerCase().includes(q))
      );
      return {
        ...sec,
        illustrations: matched,
      };
    })
    .filter((sec) => sec.illustrations.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentCategory={categoryData.id} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/illustrations" className="hover:text-foreground">
            Illustrations
          </Link>
          <span>/</span>
          <span className="font-medium text-foreground capitalize">{categoryData.id}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            <span>{categoryData.count} Animated Illustrations</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {categoryData.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {categoryData.description}
          </p>
        </div>

        {/* Section Navigation Pills & Search Bar */}
        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSection("all")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedSection === "all"
                  ? "bg-foreground text-background"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              All ({categoryData.count})
            </button>
            {categoryData.sections.map((sec) => {
              const isSelected = selectedSection === sec.section.slug;
              return (
                <button
                  key={sec.section.slug}
                  onClick={() => setSelectedSection(sec.section.slug)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-foreground text-background"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {sec.section.title} ({sec.illustrations.length})
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Sections and Illustration Grids */}
        {filteredSections.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              No illustrations matched your search query.
            </p>
            <button
              onClick={() => {
                setSelectedSection("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-primary underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredSections.map((sec) => (
              <section key={sec.section.slug} id={sec.section.slug} className="scroll-mt-20">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {sec.section.title}
                    </h2>
                    {sec.section.description && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sec.section.description}
                      </p>
                    )}
                  </div>

                  <Link
                    href={`/preview/illustrations/${categoryData.id}/${sec.section.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:underline sm:self-auto"
                  >
                    <span>Full Preview</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.illustrations.map((illustration) => (
                    <IllustrationCard
                      key={illustration.name}
                      illustration={illustration}
                      category={categoryData.id}
                      sectionSlug={sec.section.slug}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Other Categories Switcher */}
        <section className="mt-20 border-t border-border pt-12">
          <h3 className="mb-6 text-lg font-bold text-foreground">Explore Other Categories</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {allCategories
              .filter((c) => c.id !== categoryData.id)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/illustrations/${c.id}`}
                  className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/50 hover:bg-muted/30 hover:shadow-xs"
                >
                  <span className="text-sm font-semibold text-foreground capitalize">{c.id}</span>
                  <span className="mt-1 text-xs text-muted-foreground">{c.count} items</span>
                </Link>
              ))}
          </div>
        </section>

        {/* Category FAQs */}
        {categoryData.faqs && categoryData.faqs.length > 0 && (
          <div className="mt-16">
            <FaqAccordion
              faqs={categoryData.faqs}
              title={`${categoryData.title} FAQs`}
            />
          </div>
        )}
      </main>
    </div>
  );
}
