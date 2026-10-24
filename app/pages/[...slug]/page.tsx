import React from "react";
import { notFound } from "next/navigation";
import { findLandingBySlug } from "../../landings/registry";
import { QuartzLibreLandingOne } from "../../landings/quartz-libre-landing-one";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
  searchParams: Promise<{
    fullscreen?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  const page = findLandingBySlug(slug);

  if (!page) {
    return {
      title: "Quartz libre landing one - Tailark",
      description: "Discover the Quartz libre landing one page template.",
    };
  }

  return {
    title: `${page.title} - Tailark`,
    description: `Discover the ${page.title} page template.`,
  };
}

export default async function PagesSlugRoute({ params, searchParams }: PageProps) {
  const { slug = [] } = await params;
  const { fullscreen } = await searchParams;
  const isFullscreen = fullscreen === "true" || fullscreen === "1";

  const page = findLandingBySlug(slug);

  // If matched or specifically quartz/libre/landing/one, render the authentic cloned page
  if (page?.component) {
    const Component = page.component;
    return <Component fullscreen={isFullscreen} />;
  }

  // Fallback for default quartz/libre/landing/one path
  const joined = slug.join("/").toLowerCase();
  if (
    joined.includes("libre") && joined.includes("landing") && joined.includes("one") ||
    joined === "quartz/libre/landing/one"
  ) {
    return <QuartzLibreLandingOne fullscreen={isFullscreen} />;
  }

  if (!page) {
    notFound();
  }

  return <QuartzLibreLandingOne fullscreen={isFullscreen} />;
}
