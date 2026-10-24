"use client";

import React from "react";
import Link from "next/link";
import { ShadcnIllustration } from "../shadcn-registry";

interface CategoryShowcaseCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    count: number;
    sectionsCount: number;
    sampleIllustration?: string;
  };
}

export function CategoryShowcaseCard({ category }: CategoryShowcaseCardProps) {
  const sampleName = category.sampleIllustration || `${category.id}-illustrations-01`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-border/80 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            {category.id}
          </span>
        </div>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {category.count} Illustrations
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
        <Link href={`/illustrations/${category.id}`} className="focus:outline-none">
          {category.title}
        </Link>
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
        {category.description}
      </p>

      {/* Interactive preview canvas */}
      <div className="relative mt-6 flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-muted/20 p-4 transition-colors group-hover:bg-muted/30">
        <ShadcnIllustration category={category.id} name={sampleName} className="size-full" />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
        <span className="text-xs text-muted-foreground">
          {category.sectionsCount} Sections
        </span>
        <Link
          href={`/illustrations/${category.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5"
        >
          <span>Explore collection</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
