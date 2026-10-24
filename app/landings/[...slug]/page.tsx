import React from "react";
import { notFound, redirect } from "next/navigation";
import { findLandingBySlug } from "../registry";

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
      title: "Landing Page Not Found - Tailark",
    };
  }

  return {
    title: `${page.title} - Tailark Landing Template`,
    description: page.description,
  };
}

export default async function LandingSlugPage({ params, searchParams }: PageProps) {
  const { slug = [] } = await params;
  const { fullscreen } = await searchParams;
  const isFullscreen = fullscreen === "true" || fullscreen === "1";

  const page = findLandingBySlug(slug);

  if (!page) {
    notFound();
  }

  // If this is the root aside landing, redirect to /
  if (page.id === "aside-landing" || page.viewUrl === "/") {
    redirect("/");
  }

  // Render the dedicated landing component
  if (page.component) {
    const Component = page.component;
    return <Component fullscreen={isFullscreen} />;
  }

  notFound();
}
