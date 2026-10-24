// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import * as ReactDOM from "react-dom";
import * as jsxRuntime from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function createLucideIcon(iconName: string, iconNode: [string, Record<string, any>][]) {
  const Component = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ color = "currentColor", size = 24, strokeWidth = 2, children, className = "", ...rest }, ref) =>
      React.createElement(
        "svg",
        {
          ref,
          xmlns: "http://www.w3.org/2000/svg",
          width: size,
          height: size,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: color,
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: `lucide lucide-${iconName.toLowerCase()} ${className}`.trim(),
          ...rest,
        },
        ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
        children
      )
  );
  Component.displayName = iconName;
  return Component;
}

const ShadcnStudioLogo = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement(
    "svg",
    {
      width: "1em",
      height: "1em",
      viewBox: "0 0 328 329",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    React.createElement("rect", { y: "0.5", width: "328", height: "328", rx: "164", fill: "black", className: "dark:fill-white" }),
    React.createElement("path", {
      d: "M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288",
      stroke: "white",
      strokeWidth: "20",
      className: "dark:stroke-black",
    }),
    React.createElement("path", {
      d: "M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771",
      stroke: "white",
      strokeWidth: "20",
      className: "dark:stroke-black",
    }),
    React.createElement("line", { x1: "166", y1: "133", x2: "166", y2: "205", stroke: "white", strokeWidth: "20", className: "dark:stroke-black" })
  );

// Global module registry
const modules: Record<number, any> = {};
const installedModules: Record<number, any> = {
  873634: { exports: React },
  927000: { exports: ReactDOM },
  585450: { exports: jsxRuntime },
  734891: { exports: { A: createLucideIcon, default: createLucideIcon } },
  50925: {
    exports: {
      t: () => ({
        settings: {
          theme: { iconLibrary: "lucide" },
          mode: typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
        }
      })
    }
  },
  376503: { exports: { $: clsx, default: clsx } },
  792484: { exports: { QP: twMerge, default: twMerge } },
  94707: { exports: { cn: (...args: any[]) => twMerge(clsx(...args)) } },
  992415: { exports: { F: (base: string) => () => base, cva: (base: string) => () => base } },
  360880: { exports: { A: ShadcnStudioLogo, default: ShadcnStudioLogo } },
};

const safeProxy: any = new Proxy(() => null, {
  get: (_target, prop) => {
    if (prop === "__esModule") return true;
    if (prop === "default") return safeProxy;
    return safeProxy;
  },
  apply: () => null,
});

function webpackRequire(moduleId: number) {
  if (installedModules[moduleId]) return installedModules[moduleId].exports;
  const module = (installedModules[moduleId] = { exports: {} });
  if (!modules[moduleId]) {
    return safeProxy;
  }
  modules[moduleId](module, module.exports, webpackRequire);
  return module.exports;
}

webpackRequire.d = (exports: any, definition: any) => {
  for (const key in definition) {
    if (webpackRequire.o(definition, key) && !webpackRequire.o(exports, key)) {
      Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    }
  }
};
webpackRequire.r = (exports: any) => {
  Object.defineProperty(exports, "__esModule", { value: true });
};
webpackRequire.o = (e: any, c: any) => Object.prototype.hasOwnProperty.call(e, c);
webpackRequire.n = (e: any) => {
  const c = e && e.__esModule ? () => e.default : () => e;
  webpackRequire.d(c, { a: c });
  return c;
};
webpackRequire.t = function (d: any, f: number) {
  if (1 & f) d = this(d);
  if (8 & f) return d;
  if ("object" == typeof d && d && ((4 & f && d.__esModule) || (16 & f && "function" == typeof d.then))) return d;
  const b = Object.create(null);
  webpackRequire.r(b);
  return b;
};
webpackRequire.g = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : global;
webpackRequire.e = (cid: number) => loadChunk(cid);
webpackRequire.bind = (thisArg: any, ...args: any[]) => Function.prototype.bind.apply(webpackRequire, [thisArg, ...args]);

// Initialize self.webpackChunk_N_E if needed
if (typeof window !== "undefined") {
  (window as any).self = (window as any).self || window;
  (window as any).self.webpackChunk_N_E = (window as any).self.webpackChunk_N_E || [];
  const originalPush = (window as any).self.webpackChunk_N_E.push;
  (window as any).self.webpackChunk_N_E.push = function ([ids, mList]: any) {
    Object.assign(modules, mList);
    if (typeof originalPush === "function") {
      try {
        return originalPush.apply(this, arguments);
      } catch (e) {}
    }
  };
}

const commonChunks = [
  310, 948, 5018, 5498, 6355, 6421, 6633, 7177, 7787, 8768, 8927, 9313, 13720,
  15513, 15961, 15965, 16626, 17953, 22195, 26098, 28956, 39860, 40979, 43280,
  45704, 50921, 52285, 55117, 56158, 58392, 60365, 60986, 67432, 73384, 73529,
  76332, 76370, 77358, 79504, 79624, 79679, 80575, 81245, 81822, 82946, 83775,
  84539, 84746, 87414, 87698, 89970, 92821, 92831, 96373
];

const categoryChunks: Record<string, number[]> = {
  beam: [...commonChunks, 7850, 51462],
  orbit: [...commonChunks, 59662],
  chat: [...commonChunks, 63443, 57695],
  marquee: [...commonChunks, 36038, 97499],
  "card-stack": [...commonChunks, 5292, 31468, 35497, 64028],
  "text-animation": [...commonChunks, 2756, 70462],
  "ripple-effect": [...commonChunks, 47030],
  miscellaneous: [...commonChunks, 5433, 7850, 31963, 73700, 82020, 98046],
};

const categoryEntries: Record<string, number> = {
  beam: 851462,
  orbit: 959662,
  chat: 357695,
  marquee: 497499,
  "card-stack": 205292,
  "text-animation": 602756,
  "ripple-effect": 747030,
  miscellaneous: 805433,
};

const loadedChunks = new Set<number>();
const categoryComponents: Record<string, React.ComponentType<{ name: string }>> = {};
const loadingPromises: Record<string, Promise<any>> = {};

async function loadChunk(cid: number): Promise<void> {
  if (loadedChunks.has(cid)) return;
  loadedChunks.add(cid);

  return new Promise<void>((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `/shadcn-illustrations/chunks/${cid}.js`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

export async function ensureCategoryLoaded(category: string): Promise<React.ComponentType<{ name: string }> | null> {
  if (categoryComponents[category]) {
    return categoryComponents[category];
  }

  if (loadingPromises[category]) {
    return loadingPromises[category];
  }

  const promise = (async () => {
    const cids = categoryChunks[category];
    const entryId = categoryEntries[category];
    if (!cids || !entryId) return null;

    // Load all chunks for this category
    await Promise.all(cids.map(loadChunk));

    try {
      const entry = webpackRequire(entryId);
      const Comp = entry && (entry.default || entry);
      if (typeof Comp === "function") {
        categoryComponents[category] = Comp;
        return Comp;
      }
    } catch (e) {
      console.error(`Failed to initialize category ${category}:`, e);
    }
    return null;
  })();

  loadingPromises[category] = promise;
  return promise;
}

export interface ShadcnIllustrationProps {
  category: string;
  name: string;
  className?: string;
}

class IllustrationErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("Illustration failed to render:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex size-full items-center justify-center p-4 text-center text-xs text-muted-foreground">
            Illustration preview unavailable
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export function ShadcnIllustration({ category, name, className = "" }: ShadcnIllustrationProps) {
  const [Comp, setComp] = useState<React.ComponentType<{ name: string }> | null>(() => categoryComponents[category] || null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;
    if (!categoryComponents[category]) {
      ensureCategoryLoaded(category).then((loaded) => {
        if (active && loaded) {
          setComp(() => loaded);
        }
      }).catch(() => {
        if (active) setHasError(true);
      });
    } else {
      setComp(() => categoryComponents[category]);
    }
    return () => {
      active = false;
    };
  }, [category]);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center text-xs text-muted-foreground ${className}`}>
        Failed to render illustration
      </div>
    );
  }

  if (!Comp) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 animate-spin text-muted-foreground"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`illustrations-scope relative flex size-full items-center justify-center ${className}`}>
      <IllustrationErrorBoundary>
        <Comp name={name} />
      </IllustrationErrorBoundary>
    </div>
  );
}
