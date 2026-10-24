"use client";

import React, { useRef, useState } from "react";
import * as motion from "motion/react-client";
import { useInView, useReducedMotion } from "motion/react";
import {
  OfficialBrandSymbolSolidIcon,
  OpenaiSolidIcon,
  ClaudeaiSolidIcon,
  GeminiSolidIcon,
  ChatGptAtlasIcon,
  MicrosoftIcon,
  BrowserUseIcon,
  type IconProps,
} from "./Icons";

type BenchmarkRow = {
  provider: string;
  label: string;
  info?: string;
  accuracy: number;
  scaledAccuracy?: number;
};

const BENCHMARK_TABS = [
  { key: "online-mind2web", label: "Online-Mind2Web" },
  { key: "bu-bench-v1", label: "BU Bench v1" },
  { key: "odysseys", label: "Odyssey" },
] as const;

const BENCHMARK_DATA: Record<string, BenchmarkRow[]> = {
  "online-mind2web": [
    { provider: "aside", label: "Aside", info: "GPT-5.5 High", accuracy: 0.99 },
    { provider: "browser-use", label: "Browser Use", info: "Cloud", accuracy: 0.977 },
    { provider: "openai", label: "GPT-5.4", accuracy: 0.928 },
    { provider: "anthropic", label: "Claude Opus 4.8", accuracy: 0.84 },
    { provider: "chatgpt-atlas", label: "ChatGPT Atlas", accuracy: 0.7 },
  ],
  "bu-bench-v1": [
    { provider: "aside", label: "Aside", info: "GPT-5.5 High", accuracy: 0.93 },
    {
      provider: "browser-use",
      label: "Browser Use",
      info: "BrowserCode + Claude Opus 4.7",
      accuracy: 0.895,
    },
    { provider: "anthropic", label: "Claude Fable 5", accuracy: 0.8 },
    { provider: "openai", label: "GPT-5.5", accuracy: 0.68 },
    { provider: "google", label: "Gemini 3.6 Flash", accuracy: 0.58 },
  ],
  odysseys: [
    { provider: "aside", label: "Aside", info: "GPT-5.5 High", accuracy: 0.755 },
    {
      provider: "browser-use",
      label: "Browser Use",
      info: "BrowserCode + Claude Opus 4.7",
      accuracy: 0.7,
    },
    { provider: "microsoft", label: "WebWright", info: "GPT-5.4", accuracy: 0.608 },
    { provider: "anthropic", label: "Claude Opus 4.6", accuracy: 0.445 },
    { provider: "openai", label: "GPT-5.4", accuracy: 0.335 },
  ],
};

const PROVIDER_ICONS: Record<string, React.ComponentType<IconProps>> = {
  aside: OfficialBrandSymbolSolidIcon,
  "browser-use": BrowserUseIcon,
  openai: OpenaiSolidIcon,
  "chatgpt-atlas": ChatGptAtlasIcon,
  anthropic: ClaudeaiSolidIcon,
  google: GeminiSolidIcon,
  microsoft: MicrosoftIcon,
};

const rowTransitionBase = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1] as const,
};

const barTransitionBase = {
  duration: 0.46,
  ease: [0.22, 1, 0.36, 1] as const,
};

const getRowDelay = (idx: number) => 0.04 + 0.07 * idx;
const formatAccuracy = (acc: number) => `${(100 * acc).toFixed(1)}%`;

function BenchmarkRowItem({
  row,
  rowIndex,
  reduceMotion,
  isInView,
}: {
  row: BenchmarkRow & { scaledAccuracy: number };
  rowIndex: number;
  reduceMotion: boolean;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const show = reduceMotion || isInView;
  const Icon = PROVIDER_ICONS[row.provider];
  const isAside = row.provider === "aside";

  return (
    <motion.div
      className="relative flex h-11 items-center gap-4 border-t border-black/6 first:border-t-0 max-md:px-3 lg:h-14"
      initial={!reduceMotion ? { opacity: 0, y: 8 } : false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={
        show
          ? { ...rowTransitionBase, delay: getRowDelay(rowIndex) }
          : rowTransitionBase
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <div className="flex h-full w-28 min-w-0 items-center gap-1.5 md:w-40 md:gap-2 xl:w-50">
        {Icon ? <Icon className="size-5 md:size-7 shrink-0" /> : null}
        <div className="flex min-w-0 items-baseline gap-1.5">
          <span className="text-primary truncate text-sm font-medium md:text-base">
            {row.label}
          </span>
        </div>
      </div>

      <div className="relative flex h-full min-w-0 flex-1 items-center pr-2 md:pr-3">
        <svg className="h-[18px] lg:h-[24px] w-full overflow-visible">
          <motion.rect
            x={0}
            y={0}
            height="100%"
            rx={2}
            ry={2}
            fill={isAside ? "#1f6fff" : "var(--color-neutral-200)"}
            initial={!reduceMotion ? { width: "0%" } : false}
            animate={
              show ? { width: `${row.scaledAccuracy}%` } : { width: "0%" }
            }
            transition={{
              ...barTransitionBase,
              delay: reduceMotion || !show ? 0 : getRowDelay(rowIndex),
            }}
          />
        </svg>
      </div>

      <div className="text-primary flex h-full w-16 items-center justify-end text-sm font-medium tabular-nums md:w-22 md:text-base xl:w-26">
        {formatAccuracy(row.accuracy)}
      </div>

      {hovered && (
        <div
          className="border-border/50 bg-background text-primary pointer-events-none absolute z-30 rounded-md border py-1.5 pr-3 pl-2 font-mono text-xs whitespace-nowrap shadow-md"
          style={{
            left: Math.min(Math.max(120, mousePos.x + 12), 520),
            top: mousePos.y - 44,
          }}
        >
          <div className="font-medium">
            {row.label}
            {row.info && (
              <span className="text-muted-foreground"> ({row.info})</span>
            )}
          </div>
          <div className="text-primary font-medium tabular-nums">
            {formatAccuracy(row.accuracy)}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function BenchmarkCharts() {
  const [activeTab, setActiveTab] = useState<string>(BENCHMARK_TABS[0].key);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  const rawRows = BENCHMARK_DATA[activeTab] ?? BENCHMARK_DATA["online-mind2web"];
  const maxAcc = Math.max(...rawRows.map((r) => r.accuracy));
  const minAcc = Math.max(0, Math.min(...rawRows.map((r) => r.accuracy)) - 0.04);
  const scaledRows = rawRows.map((r) => ({
    ...r,
    scaledAccuracy: ((r.accuracy - minAcc) / (maxAcc - minAcc)) * 100,
  }));

  return (
    <div
      data-slot="tabs"
      data-orientation="horizontal"
      className="flex flex-col w-full gap-6 md:gap-10"
      aria-label="Browser agent benchmark results"
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        data-slot="tabs-list"
        className="bg-muted text-muted-foreground relative z-0 inline-flex h-8 w-fit items-center justify-center rounded-lg p-[3px] order-2 mx-auto"
      >
        {BENCHMARK_TABS.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(key)}
              data-slot="tabs-trigger"
              data-active={isActive ? "" : undefined}
              className={`relative z-[1] inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-xs font-medium whitespace-nowrap transition-all outline-none select-none cursor-pointer ${
                isActive
                  ? "bg-background text-foreground shadow-xs"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        data-slot="tabs-content"
        className="flex-1 text-sm outline-none order-1"
      >
        <div ref={ref} key={activeTab} className="border-y border-black/6">
          {scaledRows.map((row, idx) => (
            <BenchmarkRowItem
              key={row.provider}
              row={row}
              rowIndex={idx}
              reduceMotion={reduceMotion}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
