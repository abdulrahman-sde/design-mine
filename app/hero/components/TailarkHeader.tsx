"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, TailarkLogo } from "./icons";

export interface TailarkHeaderProps {
  variant?: "fixed" | "floating" | "minimal";
  brand?: React.ReactNode;
  loginText?: string;
  loginHref?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function TailarkHeader({
  variant = "fixed",
  brand = <TailarkLogo />,
  loginText = "Login",
  loginHref = "#login",
  ctaText = "Get Started",
  ctaHref = "#signup",
  className = "",
}: TailarkHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${className}`}>
      <div className="border-foreground/5 absolute inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 in-data-scrolled:border-b in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between lg:py-5">
            {/* Brand Logo & Mobile Trigger */}
            <div className="flex justify-between items-center gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b border-border/40">
              <Link aria-label="home" className="flex items-center space-x-2" href="/">
                {brand}
              </Link>
              <button
                type="button"
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden text-muted-foreground hover:text-foreground"
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="absolute inset-0 m-auto size-fit">
              <nav className="relative hidden max-w-max flex-1 items-center justify-center lg:flex">
                <ul className="flex list-none items-center justify-center gap-1">
                  <li>
                    <button
                      type="button"
                      className="inline-flex h-8 items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground cursor-pointer"
                    >
                      Product <ChevronDown className="ml-1 size-3 opacity-75" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex h-8 items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground cursor-pointer"
                    >
                      Solutions <ChevronDown className="ml-1 size-3 opacity-75" />
                    </button>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="inline-flex h-8 items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#company"
                      className="inline-flex h-8 items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      Company
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Action Buttons */}
            <div className={`${mobileMenuOpen ? "flex" : "hidden"} w-full flex-wrap items-center justify-end space-y-4 max-lg:pt-4 max-lg:pb-6 lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0`}>
              <div className="flex w-full flex-col space-y-2 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {loginText && (
                  <Link
                    href={loginHref}
                    className="inline-flex h-8 shrink-0 items-center justify-center rounded-md px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground border border-transparent"
                  >
                    {loginText}
                  </Link>
                )}
                {ctaText && (
                  <Link
                    href={ctaHref}
                    className="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-98"
                  >
                    {ctaText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
