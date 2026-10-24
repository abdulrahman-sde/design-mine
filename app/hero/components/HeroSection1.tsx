"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Play, Plus, Globe, ArrowUp, Menu, X, ChevronDown, CompanyLogos } from "./icons";

interface HeroSection1Props {
  title?: string;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export function HeroSection1({
  title = "Powerful Analytics for Smarter Decisions",
  subtitle = "With Tailark's personal AI, get your projects to the finish line faster and with no context switching.",
  primaryCta = { text: "Start Using", href: "#" },
  secondaryCta = { text: "Watch Video", href: "#" },
}: HeroSection1Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. Clean Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500 text-white font-mono text-sm shadow-xs">
              T
            </span>
            <span>Tailark</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <button type="button" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Product <ChevronDown className="size-3.5 opacity-60" />
            </button>
            <button type="button" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Solutions <ChevronDown className="size-3.5 opacity-60" />
            </button>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#customers" className="hover:text-foreground transition-colors">Customers</Link>
          </nav>

          {/* Nav Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-xs hover:bg-primary/90 transition-all active:scale-98"
            >
              Start for free
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex size-9 items-center justify-center rounded-lg border border-border md:hidden text-muted-foreground"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* 2. Hero Header & Headline */}
      <section className="relative pt-20 pb-16 lg:pt-24">
        {/* Subtle Ambient Radial Glow & Authentic Background Imagery */}
        <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-96 max-w-4xl bg-gradient-to-tr from-purple-500/10 via-emerald-500/10 to-transparent blur-3xl rounded-full" />
        <div className="pointer-events-none absolute inset-0 mx-auto mask-radial-to-65% lg:w-2/3 dark:hidden">
          <img
            className="mx-auto size-full origin-top object-cover mix-blend-multiply"
            src="https://images.unsplash.com/photo-1740516367183-90f0b6094907?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 mx-auto mask-radial-to-65% not-dark:hidden lg:w-2/3">
          <img
            className="mx-auto size-full origin-top object-cover mix-blend-multiply"
            src="https://images.unsplash.com/photo-1653919492307-6191a10280f4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl text-foreground">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 active:scale-98 transition-all"
            >
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground shadow-xs hover:bg-muted/50 active:scale-98 transition-all"
            >
              <Play className="size-3.5 fill-foreground" />
              <span>{secondaryCta.text}</span>
            </Link>
          </div>
        </div>

        {/* 3. Central AI Card Showcase */}
        <div className="relative mt-12 mx-auto max-w-lg px-4 sm:px-0">
          <div className="rounded-3xl border border-border/80 bg-card/85 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10">
            {/* Window controls */}
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400/80" />
              <div className="size-2.5 rounded-full bg-amber-400/80" />
              <div className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>

            {/* AI Agent Header */}
            <div className="mt-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-sm text-white">
                  <Sparkles className="size-3.5" />
                </div>
                <span className="font-semibold text-sm">Mist AI</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Your Personal AI when it really matters</p>
            </div>

            {/* Conversational Stream */}
            <div className="mt-6 space-y-4 text-xs">
              {/* User message */}
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-xs bg-muted/80 p-3.5 text-foreground shadow-xs">
                Can you summarize our churn risk across enterprise accounts for Q3?
              </div>
              {/* AI response */}
              <div className="flex items-start gap-2.5 max-w-[90%]">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Sparkles className="size-3" />
                </div>
                <div className="rounded-2xl rounded-tl-xs bg-card border border-border/60 p-3.5 text-foreground shadow-xs">
                  Analyzed 48 accounts: 3 flagged with elevated risk due to reduced API usage. Recommended intervention drafted.
                </div>
              </div>
            </div>

            {/* Interactive Prompt Input Bar */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-border/60 bg-muted/40 p-2 pl-3">
              <span className="text-xs text-muted-foreground">Ask Mist AI anything...</span>
              <div className="flex items-center gap-1.5">
                <button type="button" className="flex size-7 items-center justify-center rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                  <Plus className="size-4" />
                </button>
                <button type="button" className="flex size-7 items-center justify-center rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                  <Globe className="size-4" />
                </button>
                <button type="button" className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background shadow-xs hover:opacity-90 transition-opacity">
                  <ArrowUp className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Social Proof / Authentic Logo Ticker */}
        <div className="mt-16 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            Trusted by teams at
          </p>
          <CompanyLogos />
        </div>
      </section>
    </div>
  );
}