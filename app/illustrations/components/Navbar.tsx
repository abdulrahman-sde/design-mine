"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  currentCategory?: string;
}

export function Navbar({ currentCategory }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/illustrations" className="flex items-center gap-2.5 transition-opacity hover:opacity-85">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 328 329"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
            >
              <rect y="0.5" width="328" height="328" rx="164" fill="black" className="dark:fill-white" />
              <path
                d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
                stroke="white"
                strokeWidth="20"
                className="dark:stroke-black"
              />
              <path
                d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
                stroke="white"
                strokeWidth="20"
                className="dark:stroke-black"
              />
              <line x1="166" y1="133" x2="166" y2="205" stroke="white" strokeWidth="20" className="dark:stroke-black" />
            </svg>
            <div className="flex items-center gap-1.5 font-semibold text-foreground">
              <span>shadcn/studio</span>
              <span className="text-xs font-normal text-muted-foreground">illustrations</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
            <Link
              href="/illustrations"
              className={`transition-colors hover:text-foreground ${
                !currentCategory ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              All Categories
            </Link>
            <Link
              href="/illustrations/beam"
              className={`transition-colors hover:text-foreground ${
                currentCategory === "beam" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Beam
            </Link>
            <Link
              href="/illustrations/orbit"
              className={`transition-colors hover:text-foreground ${
                currentCategory === "orbit" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Orbit
            </Link>
            <Link
              href="/illustrations/chat"
              className={`transition-colors hover:text-foreground ${
                currentCategory === "chat" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Chat
            </Link>
            <Link
              href="/illustrations/card-stack"
              className={`transition-colors hover:text-foreground ${
                currentCategory === "card-stack" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Card Stack
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex h-8 items-center justify-center rounded-md border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            ← Home
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
