"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface HeroSection20Props {
  title?: React.ReactNode;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function HeroSection20({
  title = "Own assistant. Gets things done.",
  subtitle = "Dona autonomously handles your work, plans your vacations and notifies you when you need to take action.",
  primaryCta = { text: "Get Dona", href: "#home" },
  secondaryCta = { text: "Learn More", href: "#" },
}: HeroSection20Props) {
  return (
    <div className="bg-background text-foreground selection:bg-foreground/10 selection:text-primary">
      {/* 1. Centered Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center overflow-hidden p-6">
          <Link className="flex items-center" aria-label="Home" href="/">
            <img alt="Oxymor logo" loading="lazy" width="32" height="32" decoding="async" src="/oxy-logo.svg" />
          </Link>
        </div>
      </header>

      {/* 2. Hero Section with Video Backdrop */}
      <main className="overflow-hidden bg-background">
        <section id="home" className="relative py-16">
          <div className="relative mx-auto max-w-6xl">
            <div aria-hidden="true" className="z-10 flex h-140 w-84 flex-col justify-end sm:h-174" />
            <div className="absolute inset-0 mask-radial-[50%_50%] mask-radial-from-35% mask-radial-at-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 z-20 bg-linear-to-br from-pink-400 via-sky-300 to-purple-400 opacity-15 mix-blend-plus-lighter"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 mask-b-from-85% opacity-15 mix-blend-plus-lighter"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--color-white) 1px, transparent 1px), linear-gradient(to bottom, var(--color-white) 1px, transparent 1px)",
                  backgroundSize: "2px 2px",
                }}
              />
              <div className="absolute inset-0 z-10 grayscale">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="size-full object-cover object-[50%_25%] brightness-75 contrast-125 saturate-150"
                  src="https://videos.pexels.com/video-files/8090202/8090202-uhd_2732_1440_25fps.mp4"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <h1 className="mx-auto max-w-xl text-center text-5xl font-medium tracking-tight text-balance text-foreground lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 mb-6 max-w-md text-pretty text-muted-foreground">
              {subtitle}
            </p>
            <Link
              href={primaryCta.href}
              className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border-[0.5px] border-white/10 bg-zinc-950 px-8 text-sm font-medium text-white shadow-md transition-all hover:bg-zinc-950/90 active:scale-98 dark:border-transparent"
            >
              {primaryCta.text}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}