import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import catalogData from "@/app/illustrations/data/catalog.json";
import { ThemeToggle } from "@/app/illustrations/components/ThemeToggle";
import { IllustrationCard } from "@/app/illustrations/components/IllustrationCard";

interface PreviewSectionPageProps {
  params: Promise<{
    category: string;
    section: string;
  }>;
}

export async function generateStaticParams() {
  const params: Array<{ category: string; section: string }> = [];
  catalogData.categories.forEach((cat) => {
    cat.sections.forEach((sec) => {
      params.push({
        category: cat.id,
        section: sec.section.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PreviewSectionPageProps) {
  const { category, section } = await params;
  const cat = catalogData.categories.find((c) => c.id === category);
  const sec = cat?.sections.find((s) => s.section.slug === section);
  if (!cat || !sec) return { title: "Section Preview Not Found" };

  return {
    title: `${sec.section.title} - ${cat.title} Preview`,
    description: sec.section.description,
  };
}

export default async function PreviewSectionPage({ params }: PreviewSectionPageProps) {
  const { category, section } = await params;
  const cat = catalogData.categories.find((c) => c.id === category);
  const sec = cat?.sections.find((s) => s.section.slug === section);

  if (!cat || !sec) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Preview Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href={`/illustrations/${cat.id}#${sec.section.slug}`}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-accent"
            aria-label="Back to category"
            title="Back to category illustrations"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Link>

          <div>
            <h1 className="text-sm font-bold text-foreground sm:text-base">
              {sec.section.title}
            </h1>
            <p className="text-xs text-muted-foreground capitalize">
              {cat.id} Illustrations ({sec.illustrations.length} components)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/illustrations"
            className="hidden text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            All Collections
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Full-Bleed Grid */}
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sec.illustrations.map((illustration) => (
            <IllustrationCard
              key={illustration.name}
              illustration={illustration}
              category={cat.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
