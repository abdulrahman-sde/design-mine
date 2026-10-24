"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import {
  AsideLogo,
  BarsThreeIcon,
  XIcon,
  IconChevronLeftMedium,
  ChevronRightIcon,
  ArrowUpRightIcon,
} from "./Icons";
import { cn } from "./Animations";

export type MenuItem = {
  href: string;
  label: string;
  isOutlink?: boolean;
};

export type MenuGroup = {
  group: string;
  items: MenuItem[];
};

export const LANDING_MENU_LIST: MenuGroup[] = [
  {
    group: "Features",
    items: [
      { href: "/features/browser-agent", label: "Browser agent" },
      { href: "/features/password-manager", label: "Password Manager" },
      { href: "/features/memory", label: "Memory" },
    ],
  },
  {
    group: "Use cases",
    items: [
      { href: "/blog/operations", label: "Operations" },
      { href: "/blog/hr", label: "Hiring Teams" },
      { href: "/blog/sales", label: "Sales" },
      { href: "/blog/developers", label: "Developers" },
      { href: "/blog/researchers", label: "Researchers" },
    ],
  },
  {
    group: "Resources",
    items: [
      { href: "/download", label: "Download" },
      { href: "/blog", label: "Blog" },
      {
        href: "https://docs.aside.com/changelog/components",
        label: "Changelog",
        isOutlink: true,
      },
      { href: "/docs", label: "Docs", isOutlink: true },
      { href: "/community", label: "Community", isOutlink: true },
    ],
  },
  {
    group: "Company",
    items: [
      { href: "/manifesto", label: "About" },
      {
        href: "https://www.ycombinator.com/companies/aside/jobs",
        label: "Careers",
        isOutlink: true,
      },
    ],
  },
];

export const NAV_ITEMS = [
  { label: "Features", hasMenu: true },
  { label: "Use cases", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "Pricing", href: "/pricing", hasMenu: false },
];

export function isLandingMenuItemOutlink(item: MenuItem) {
  return Boolean(item.isOutlink || item.href.startsWith("http"));
}

function MobileNavigationMenu({
  activeMenu,
  onSelectMenu,
  onBack,
  onClose,
}: {
  activeMenu?: MenuGroup;
  onSelectMenu: (group: string | null) => void;
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="bg-background font-display fixed inset-0 z-50 flex flex-col md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.13 }}
    >
      <div className="mx-auto w-full shrink-0">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 flex h-14 items-center justify-between gap-4">
          {activeMenu ? (
            <button
              type="button"
              className="text-primary -ml-2 flex h-9 items-center gap-1 text-sm font-medium"
              onClick={onBack}
            >
              <IconChevronLeftMedium className="size-5" />
              Back
            </button>
          ) : (
            <AsideLogo className="-mx-1.5 h-8 sm:h-9" />
          )}
          <button
            type="button"
            className="text-primary -mr-2 flex size-9 items-center justify-center"
            aria-label="Close menu"
            onClick={onClose}
          >
            <XIcon className="size-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto w-full min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 py-8">
          <AnimatePresence mode="wait">
            {activeMenu ? (
              <motion.div
                key={activeMenu.group}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.13, ease: "easeOut" }}
              >
                <p className="text-muted-foreground/80 mb-6 text-sm font-medium">
                  Explore {activeMenu.group}
                </p>
                <ul className="space-y-2 text-3xl font-medium">
                  {activeMenu.items.map((item) => {
                    const outlink = isLandingMenuItemOutlink(item);
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block py-1"
                          target={outlink ? "_blank" : undefined}
                          rel={outlink ? "noopener noreferrer" : undefined}
                          onClick={onClose}
                        >
                          {item.label}
                          {outlink && (
                            <ArrowUpRightIcon className="mb-px ml-0.5 inline-block size-3.5 align-middle" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : (
              <motion.ul
                key="root"
                className="space-y-2 text-3xl font-medium"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.13, ease: "easeOut" }}
              >
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.hasMenu ? (
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 py-1 text-left"
                        onClick={() => onSelectMenu(item.label)}
                      >
                        {item.label}
                        <ChevronRightIcon className="text-muted-foreground size-5 shrink-0" />
                      </button>
                    ) : (
                      <Link
                        href={item.href || "/"}
                        className="block py-1"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const activeMobileMenu = LANDING_MENU_LIST.find((m) => m.group === mobileGroup);

  return (
    <>
      <nav
        className="font-display relative z-30 flex h-14 items-center justify-between px-4"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <Link
          href="/"
          style={{ WebkitTouchCallout: "none" }}
          data-slot="context-menu-trigger"
          className="select-none"
          onMouseEnter={() => setHoveredMenu(null)}
        >
          <AsideLogo className="-ml-1 h-9" />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-sans text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => {
            const menu = LANDING_MENU_LIST.find((m) => m.group === item.label);
            const isOpen = hoveredMenu === item.label;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.hasMenu ? setHoveredMenu(item.label) : setHoveredMenu(null)
                }
              >
                {item.hasMenu && menu ? (
                  <>
                    <button
                      type="button"
                      className="focus-visible:text-muted-foreground transition-colors outline-none"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      data-slot="dropdown-menu-trigger"
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -4 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -4 }}
                          transition={{ duration: 0.1 }}
                          data-slot="dropdown-menu-content"
                          className="bg-glass border-glass text-popover-foreground ring-foreground/10 absolute top-full left-0 mt-1 z-50 w-40 rounded-xl p-1 shadow-md ring-1 outline-none"
                          style={{ marginLeft: -10 }}
                        >
                          <div data-slot="dropdown-menu-group">
                            {menu.items.map((sub) => {
                              const outlink = isLandingMenuItemOutlink(sub);
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  target={outlink ? "_blank" : undefined}
                                  rel={outlink ? "noopener noreferrer" : undefined}
                                  className="relative flex cursor-default items-center gap-1.5 rounded-lg! px-1.5 py-1 text-sm outline-hidden select-none hover:bg-black/5! focus-within:bg-black/5!"
                                >
                                  {sub.label}
                                  {outlink && (
                                    <ArrowUpRightIcon className="ml-auto size-3.5" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href || "/pricing"}
                    className="focus-visible:text-muted-foreground transition-colors outline-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/download"
            className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 h-8 gap-1.5 px-2 text-xs md:h-9 md:px-2.5 md:text-sm rounded-xl"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          className="text-primary flex size-9 items-center justify-center md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileGroup(null);
            setMobileOpen(true);
          }}
        >
          <BarsThreeIcon className="size-5" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNavigationMenu
            activeMenu={activeMobileMenu}
            onSelectMenu={setMobileGroup}
            onBack={() => setMobileGroup(null)}
            onClose={() => {
              setMobileOpen(false);
              setMobileGroup(null);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export function StickyNavigation({
  transparentOnHero = false,
  revealOnScroll = true,
}: {
  transparentOnHero?: boolean;
  revealOnScroll?: boolean;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(!revealOnScroll);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const activeMenu = LANDING_MENU_LIST.find((m) => m.group === activeGroup);
  const activeMobileMenu = LANDING_MENU_LIST.find((m) => m.group === mobileGroup);
  const isVisible = revealed || Boolean(activeMenu) || mobileOpen;

  useEffect(() => {
    if (!revealOnScroll) {
      setRevealed(true);
      return;
    }
    const onScroll = () => {
      const top = sentinelRef.current?.getBoundingClientRect().top ?? 1;
      setRevealed(top <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [revealOnScroll]);

  return (
    <>
      {revealOnScroll && (
        <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      )}
      <nav
        className={cn(
          "font-display sticky top-0 left-0 isolate z-50 w-full transition-[opacity,transform] duration-150 bg-background",
          !activeMenu && "border-b border-black/6",
          revealOnScroll &&
            !isVisible &&
            "pointer-events-none -translate-y-full opacity-0"
        )}
        onMouseLeave={() => setActiveGroup(null)}
      >
        <div className="mx-auto w-full relative z-20 bg-background">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 relative flex h-14 items-center justify-between gap-4">
            <div className="flex items-center">
              <Link
                href="/"
                className="select-none"
                onMouseEnter={() => setActiveGroup(null)}
              >
                <AsideLogo className="-mx-1.5 h-8 sm:h-9" />
              </Link>
            </div>

            <ul
              data-navigation-menu-list="true"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-sans text-sm font-medium md:flex"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.hasMenu ? (
                    <button
                      type="button"
                      className="focus-visible:text-muted-foreground cursor-default transition-colors outline-none"
                      aria-expanded={activeGroup === item.label}
                      onMouseEnter={() => setActiveGroup(item.label)}
                      onFocus={() => setActiveGroup(item.label)}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href || "/pricing"}
                      className="focus-visible:text-muted-foreground transition-colors outline-none"
                      onMouseEnter={() => setActiveGroup(null)}
                      onFocus={() => setActiveGroup(null)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div
              className="hidden md:block"
              onMouseEnter={() => setActiveGroup(null)}
            >
              <Link
                href="/download"
                className="group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 h-8 gap-1.5 px-2 text-xs md:h-9 md:px-2.5 md:text-sm"
              >
                Download
              </Link>
            </div>

            <button
              type="button"
              className="text-primary flex size-9 items-center justify-center md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileGroup(null);
                setMobileOpen(true);
              }}
            >
              <BarsThreeIcon className="size-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <>
              <motion.div
                className="bg-background/1 fixed inset-0 z-0 hidden backdrop-blur-sm md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.13 }}
                onMouseEnter={() => setActiveGroup(null)}
              />
              <motion.div
                data-navigation-menu-panel="true"
                className="bg-background absolute inset-x-0 top-14 z-10 hidden overflow-hidden border-b border-neutral-200 md:block"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <motion.div
                  key={activeMenu.group}
                  className="min-h-80"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.13, ease: "easeOut" }}
                >
                  <div className="mx-auto w-full">
                    <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 flex gap-12 py-9">
                      <div className="w-64 space-y-6">
                        <p className="text-muted-foreground/80 text-sm font-medium">
                          Explore {activeMenu.group}
                        </p>
                        <ul className="space-y-2 text-2xl font-medium">
                          {activeMenu.items.map((sub) => {
                            const outlink = isLandingMenuItemOutlink(sub);
                            return (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="hover:text-muted-foreground focus-visible:text-muted-foreground transition-colors outline-none"
                                  target={outlink ? "_blank" : undefined}
                                  rel={outlink ? "noopener noreferrer" : undefined}
                                  onClick={() => setActiveGroup(null)}
                                >
                                  {sub.label}
                                  {outlink && (
                                    <ArrowUpRightIcon className="mb-px ml-1 inline-block size-5 align-middle" />
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNavigationMenu
            activeMenu={activeMobileMenu}
            onSelectMenu={setMobileGroup}
            onBack={() => setMobileGroup(null)}
            onClose={() => {
              setMobileOpen(false);
              setMobileGroup(null);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
