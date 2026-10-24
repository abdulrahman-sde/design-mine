import React from "react";
import { notFound } from "next/navigation";
import catalogData from "../data/catalog.json";
import { IllustrationsBrowseView } from "../illustrations-browse-view";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return catalogData.categories.map((c) => ({
    category: c.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = catalogData.categories.find((c) => c.id === category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.title} - Shadcn Studio Illustrations`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = catalogData.categories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  return <IllustrationsBrowseView initialMode="category" initialCategory={cat.id} />;
}
