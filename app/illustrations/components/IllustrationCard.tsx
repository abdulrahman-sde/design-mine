"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShadcnIllustration } from "../shadcn-registry";
import { CodeDialog } from "./CodeDialog";

export interface IllustrationItem {
  name: string;
  title: string;
  description?: string;
  badge?: string;
  category?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  meta?: {
    category?: string;
    badge?: string;
    className?: string;
  };
}

interface IllustrationCardProps {
  illustration: IllustrationItem;
  category: string;
  sectionSlug?: string;
}

export function IllustrationCard({ illustration, category, sectionSlug }: IllustrationCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const badgeText = illustration.badge || illustration.meta?.badge || "Basic";
  const cat = illustration.category || illustration.meta?.category || category;

  const copyName = () => {
    navigator.clipboard.writeText(illustration.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        data-slot={illustration.name}
        className="group/item relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-0 text-card-foreground shadow-xs transition-all hover:border-border/80 hover:shadow-md"
      >
        {/* Canvas area */}
        <div
          data-slot="card-content"
          className="relative flex h-full min-h-55 w-full items-center justify-center overflow-hidden py-12 px-6 max-sm:px-4 sm:px-8"
        >
          <ShadcnIllustration category={cat} name={illustration.name} className="size-full" />
        </div>

        {/* Title overlay on hover */}
        <div className="pointer-events-none absolute top-3 left-4.5 hidden text-sm font-medium text-muted-foreground transition-opacity group-hover/item:block">
          {illustration.title}
        </div>

        {/* Badge on top right */}
        <div className="absolute top-3 right-4.5 transition-opacity group-hover/item:hidden">
          <span
            data-slot="badge"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {badgeText}
          </span>
        </div>

        {/* Action toolbar on hover */}
        <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 transition-opacity group-hover/item:opacity-100 focus-within:opacity-100">
          {/* Copy Component name button */}
          <button
            onClick={copyName}
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border/50 bg-background/90 text-muted-foreground shadow-xs backdrop-blur-xs transition-colors hover:bg-accent hover:text-foreground"
            title="Copy component name"
            aria-label="Copy component name"
          >
            {copied ? (
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
                className="text-emerald-500"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </button>

          {/* View code button */}
          <button
            onClick={() => setShowCode(true)}
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border/50 bg-background/90 text-muted-foreground shadow-xs backdrop-blur-xs transition-colors hover:bg-accent hover:text-foreground"
            title="View code"
            aria-label="View code"
          >
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
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </button>

          {/* Fullscreen Preview link if sectionSlug is available */}
          {sectionSlug && (
            <Link
              href={`/preview/illustrations/${cat}/${sectionSlug}`}
              className="inline-flex size-8 items-center justify-center rounded-md border border-border/50 bg-background/90 text-muted-foreground shadow-xs backdrop-blur-xs transition-colors hover:bg-accent hover:text-foreground"
              title="Fullscreen Preview"
              aria-label="Fullscreen Preview"
              target="_blank"
            >
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
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {showCode && (
        <CodeDialog
          illustration={{
            name: illustration.name,
            title: illustration.title,
            category: cat,
            description: illustration.description,
            dependencies: illustration.dependencies,
          }}
          onClose={() => setShowCode(false)}
        />
      )}
    </>
  );
}
