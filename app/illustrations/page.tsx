import React from "react";
import { IllustrationsBrowseView } from "./illustrations-browse-view";

export const metadata = {
  title: "Shadcn Illustrations - 264 Animated SVGs · 8 Categories",
  description:
    "Enhance your landing pages with animated, themeable illustrations built for Shadcn UI and Tailwind CSS.",
};

export default function IllustrationsPage() {
  return <IllustrationsBrowseView initialMode="categories" initialCategory="beam" />;
}
