"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TailarkLogo,
  AppleLogo,
  AndroidLogo,
  SignalHigh,
  WifiHigh,
  TrendingUp,
  WreathIcon,
  ChevronDown,
  Menu,
  X,
} from "./icons";

export interface HeroSection2Props {
  title?: React.ReactNode;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function HeroSection2({
  title = "Your Personal AI, With you Anywhere",
  subtitle = "Craft. Build. Ship Modern Websites.",
  primaryCta = { text: "iPhone", href: "#" },
  secondaryCta = { text: "Android", href: "#" },
}: HeroSection2Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground selection:bg-foreground/10 selection:text-primary">
      {/* 1. Header Navigation */}
      <header data-state="inactive">
        <div className="fixed inset-x-0 top-0 z-50 pt-2 max-lg:h-18 max-lg:overflow-hidden max-lg:px-2 max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur lg:pt-3">
          <div className="mx-auto w-full max-w-6xl rounded-2xl border border-transparent px-3 shadow-md ring-1 shadow-transparent ring-transparent transition-[max-width,background-color,box-shadow,padding,backdrop-filter] duration-500 ease-in-out in-data-scrolled:max-w-4xl in-data-scrolled:bg-background/75 in-data-scrolled:shadow-black/6.5 in-data-scrolled:ring-foreground/5 in-data-scrolled:backdrop-blur max-lg:in-data-scrolled:px-5 max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:px-5 max-lg:in-data-[state=active]:shadow-black/6.5 max-lg:in-data-[state=active]:ring-foreground/5 max-lg:in-data-[state=active]:backdrop-blur">
            <div className="relative flex flex-wrap items-center justify-between lg:py-3">
              {/* Brand Logo & Mobile Trigger */}
              <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b">
                <Link aria-label="home" className="h-fit transition-[padding] duration-500 lg:in-data-scrolled:px-2" href="/">
                  <TailarkLogo />
                </Link>
                <button
                  type="button"
                  aria-label="Open Menu"
                  onClick={() => setMobileMenuOpen((o) => !o)}
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden text-foreground"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Desktop Nav Links */}
              <div className="absolute inset-0 m-auto size-fit">
                <nav className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center max-lg:hidden">
                  <ul className="group flex flex-1 list-none items-center justify-center gap-3">
                    <li className="relative">
                      <button
                        type="button"
                        className="group ease inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm font-medium text-muted-foreground transition-[color,box-shadow] duration-150 outline-none hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground"
                      >
                        Product <ChevronDown size={12} className="ml-1.5 opacity-75" />
                      </button>
                    </li>
                    <li className="relative">
                      <button
                        type="button"
                        className="group ease inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm font-medium text-muted-foreground transition-[color,box-shadow] duration-150 outline-none hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground"
                      >
                        Solutions <ChevronDown size={12} className="ml-1.5 opacity-75" />
                      </button>
                    </li>
                    <li className="relative">
                      <Link
                        className="group ease inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm font-medium text-muted-foreground transition-[color,box-shadow] duration-150 outline-none hover:bg-foreground/5 hover:text-foreground"
                        href="#pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        className="group ease inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm font-medium text-muted-foreground transition-[color,box-shadow] duration-150 outline-none hover:bg-foreground/5 hover:text-foreground"
                        href="#company"
                      >
                        Company
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Desktop Nav Actions */}
              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Link
                    className="inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    href="/login"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="inline-flex h-8 items-center justify-center rounded-md border border-transparent bg-card px-3 text-xs font-medium shadow-sm ring-1 shadow-black/10 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
                    href="/contact"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Hero Body */}
      <main className="-mt-14.5 overflow-hidden bg-background">
        <section>
          <div className="relative pt-44 pb-36">
            {/* Ambient Background Clouds Mask */}
            <div className="absolute inset-0 h-fit mask-radial-[100%_100%] mask-radial-from-55% mask-radial-at-top md:max-h-[24rem] lg:max-h-[32rem] dark:lg:max-h-[36rem] pointer-events-none">
              <div style={{ transform: "none" }} className="aspect-video md:aspect-square">
                <img
                  alt="clouds"
                  loading="lazy"
                  width="5000"
                  height="5000"
                  decoding="async"
                  className="absolute inset-0 w-full md:-translate-y-1/12 dark:hidden"
                  src="/tailark/clouds_blcfda.jpg"
                />
                <img
                  alt="clouds"
                  loading="lazy"
                  width="5000"
                  height="5000"
                  decoding="async"
                  className="absolute inset-0 w-full opacity-50 not-dark:hidden"
                  src="https://images.unsplash.com/photo-1602517300834-9dc3336a714f?q=80&w=2719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            {/* Headline and CTAs */}
            <div className="relative mx-auto max-w-5xl px-6">
              <div className="mb-12 text-center">
                <h1 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:mt-8 text-foreground">
                  {title}
                </h1>
                <p className="mx-auto my-6 max-w-2xl text-xl text-balance text-muted-foreground">
                  {subtitle}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    href={primaryCta.href}
                    className="group/button inline-flex h-9 items-center justify-center gap-2 rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 text-sm font-medium shadow-sm ring-1 shadow-black/10 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
                  >
                    <AppleLogo className="size-4" />
                    <span className="text-nowrap">{primaryCta.text}</span>
                  </Link>
                  <Link
                    href={secondaryCta.href}
                    className="group/button inline-flex h-9 items-center justify-center gap-2 rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 text-sm font-medium shadow-sm ring-1 shadow-black/10 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
                  >
                    <AndroidLogo className="size-4" />
                    <span className="text-nowrap">{secondaryCta.text}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Mobile Device Showcase */}
            <div aria-hidden="true" className="mask-b-from-75% max-w-92 relative mx-auto scale-95 px-4 pt-2">
              <div className="bg-background/75 ring-border-illustration mx-auto items-end overflow-hidden rounded-t-[2.5rem] border border-transparent px-2 pt-2 shadow-xl shadow-black/10 ring-1">
                <div className="bg-card ring-border-illustration shadow-black/6.5 overflow-hidden rounded-t-[2rem] px-6 pb-16 pt-2 shadow ring-1">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between py-2 pl-4 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-end gap-1">
                      <SignalHigh size={16} className="size-4" />
                      <WifiHigh size={18} className="size-4.5" />
                      <svg viewBox="0 0 24 24" fill="currentColor" className="-mb-px size-4">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Wallet Content */}
                  <div className="mb-12 mt-6 text-sm font-medium">Irung's Wallet</div>
                  <div className="text-muted-foreground flex items-center gap-2 text-xs">
                    Total Balance
                    <div className="flex items-center gap-1">
                      <div className="rounded-xs flex size-3 bg-emerald-600">
                        <TrendingUp size={8} className="m-auto size-2 text-white" />
                      </div>
                      <span className="border-t border-transparent text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        65%
                      </span>
                    </div>
                  </div>

                  {/* Balance Digits */}
                  <div className="mt-0.5 flex flex-col justify-between">
                    <div>
                      <span className="text-foreground align-baseline text-3xl font-bold tracking-tight">$230</span>
                      <span className="text-foreground/50 align-baseline text-3xl font-bold tracking-tight">.56</span>
                    </div>

                    {/* Dynamic Bar Graph (Consolidated 40-bar loop) */}
                    <div className="text-muted-foreground mt-8 flex items-end gap-1">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-foreground/10 last:bg-linear-to-b h-4 w-[3px] rounded-full last:h-20 last:from-green-300 last:to-green-500"
                        />
                      ))}
                    </div>

                    {/* Time Horizon Tabs */}
                    <div className="text-foreground/50 mt-4 flex justify-between px-12 text-xs">
                      <span>1D</span>
                      <span className="text-foreground font-medium">1W</span>
                      <span>1M</span>
                      <span>6M</span>
                      <span>1Y</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Best Design Award Showcase */}
            <div className="relative mx-auto flex aspect-video w-52 justify-between text-center">
              <div className="absolute inset-0 m-auto size-fit">
                <div className="mx-auto mb-2 size-6 flex items-center justify-center">
                  <AppleLogo className="size-6 text-foreground" />
                </div>
                <span className="mb-0.5 block text-sm font-medium">Best Design</span>
                <span className="block text-xs font-medium text-muted-foreground">2025</span>
              </div>
              <WreathIcon className="my-auto h-3/4 -translate-x-1/4 -scale-x-100 text-foreground/25" />
              <WreathIcon className="my-auto h-3/4 translate-x-1/4 text-foreground/25" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}