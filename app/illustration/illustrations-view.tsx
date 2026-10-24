// @ts-nocheck
"use client";

import "./tailark.css";
import React, { useState } from "react";
import Link from "next/link";
import { getIllustrationComponent } from "./registry";

export interface IllustrationItem {
  name: string;
  category: string;
  colSpan?: number;
  rowSpan?: number;
  fullWidth?: boolean;
}

export interface CategoryMeta {
  id: string;
  label: string;
  count: number;
  previewIllustration: string;
  colSpan?: number;
  rowSpan?: number;
}

export const CATEGORIES_META: CategoryMeta[] = [
  { id: "ai", label: "ai", count: 25, previewIllustration: "models-2", colSpan: 1, rowSpan: 1 },
  { id: "document", label: "document", count: 15, previewIllustration: "document-xlx", colSpan: 1, rowSpan: 1 },
  { id: "flow", label: "flow", count: 15, previewIllustration: "flow", colSpan: 2, rowSpan: 2 },
  { id: "form", label: "form", count: 3, previewIllustration: "file-upload", colSpan: 1, rowSpan: 1 },
  { id: "message", label: "message", count: 7, previewIllustration: "message", colSpan: 1, rowSpan: 1 },
  { id: "mobile", label: "mobile", count: 11, previewIllustration: "sleep-visualization", colSpan: 2, rowSpan: 2 },
  { id: "others", label: "others", count: 19, previewIllustration: "keys", colSpan: 1, rowSpan: 1 },
  { id: "scan", label: "scan", count: 5, previewIllustration: "fingerprint", colSpan: 2, rowSpan: 2 },
  { id: "visualization", label: "visualization", count: 9, previewIllustration: "uptime", colSpan: 1, rowSpan: 1 },
  { id: "workspace", label: "workspace", count: 14, previewIllustration: "campaign", colSpan: 1, rowSpan: 1 },
];

export const CATEGORY_ITEMS: Record<string, IllustrationItem[]> = {
  "ai": [
    {
      "name": "ai-1",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-2",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-3",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "agent-workflow",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "models-3",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "models-4",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "translation-interface",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "model-selector",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "token-counter",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "model-training",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "models",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "models-2",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-search",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "ai-search-2",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "ai-memory",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "integrations",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "text-to-speech",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-autocomplete",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-summarization",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "ai-chat-interface",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-mentions",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "agent-task-planning",
      "category": "ai",
      "colSpan": 2
    },
    {
      "name": "agent-feedback",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "ai-suggestion",
      "category": "ai",
      "colSpan": 1
    },
    {
      "name": "agent-tasks",
      "category": "ai",
      "colSpan": 1
    }
  ],
  "document": [
    {
      "name": "document",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-analysis",
      "category": "document",
      "colSpan": 2
    },
    {
      "name": "document-csv",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-docx",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-html",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-img",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-json",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-md",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-pdf",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-pptx",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-txt",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-xlx",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "document-zip",
      "category": "document",
      "colSpan": 1
    },
    {
      "name": "invoice",
      "category": "document",
      "colSpan": 2
    },
    {
      "name": "invoice-signing",
      "category": "document",
      "colSpan": 2
    }
  ],
  "flow": [
    {
      "name": "actionnable",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "flow",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-10",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-11",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-12",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-13",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-2",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-3",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "flow-4",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "flow-5",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "flow-6",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "flow-7",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-8",
      "category": "flow",
      "colSpan": 2
    },
    {
      "name": "flow-9",
      "category": "flow",
      "colSpan": 1
    },
    {
      "name": "workflow",
      "category": "flow",
      "colSpan": 1
    }
  ],
  "scan": [
    {
      "name": "face-scan",
      "category": "scan",
      "colSpan": 2
    },
    {
      "name": "face-scan-2",
      "category": "scan",
      "colSpan": 2
    },
    {
      "name": "fingerprint",
      "category": "scan",
      "colSpan": 2
    },
    {
      "name": "fingerprint-scan",
      "category": "scan",
      "colSpan": 1
    },
    {
      "name": "id-check",
      "category": "scan",
      "colSpan": 1
    }
  ],
  "visualization": [
    {
      "name": "bank-stats",
      "category": "visualization",
      "colSpan": 1
    },
    {
      "name": "currency",
      "category": "visualization",
      "colSpan": 1
    },
    {
      "name": "memory-usage",
      "category": "visualization",
      "colSpan": 1
    },
    {
      "name": "metrics",
      "category": "visualization",
      "colSpan": 2
    },
    {
      "name": "poll",
      "category": "visualization",
      "colSpan": 1
    },
    {
      "name": "poll-2",
      "category": "visualization",
      "colSpan": 1
    },
    {
      "name": "running-visualization",
      "category": "visualization",
      "colSpan": 2
    },
    {
      "name": "uptime",
      "category": "visualization",
      "colSpan": 2
    },
    {
      "name": "visualization",
      "category": "visualization",
      "colSpan": 2
    }
  ],
  "message": [
    {
      "name": "add-comment",
      "category": "message",
      "colSpan": 1
    },
    {
      "name": "chat",
      "category": "message",
      "colSpan": 1
    },
    {
      "name": "comment",
      "category": "message",
      "colSpan": 1
    },
    {
      "name": "email",
      "category": "message",
      "colSpan": 2
    },
    {
      "name": "message",
      "category": "message",
      "colSpan": 1
    },
    {
      "name": "message-2",
      "category": "message",
      "colSpan": 2
    },
    {
      "name": "reply",
      "category": "message",
      "colSpan": 1
    }
  ],
  "workspace": [
    {
      "name": "campaign",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "campaign-2",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "kanban",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "kanban-2",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "kanban-3",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "meeting",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "meeting-2",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "meeting-3",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "meeting-4",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "notes",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "notes-2",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "notes-3",
      "category": "workspace",
      "colSpan": 1
    },
    {
      "name": "schedule",
      "category": "workspace",
      "colSpan": 2
    },
    {
      "name": "todo-app",
      "category": "workspace",
      "colSpan": 2
    }
  ],
  "form": [
    {
      "name": "file-upload",
      "category": "form",
      "colSpan": 1
    },
    {
      "name": "payment",
      "category": "form",
      "colSpan": 1
    },
    {
      "name": "shopping-cart",
      "category": "form",
      "colSpan": 1
    }
  ],
  "mobile": [
    {
      "name": "mobile-ai-assistant",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-ai-suggestion",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-card-form",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-email",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-note",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-note-2",
      "category": "mobile",
      "colSpan": 1
    },
    {
      "name": "mobile-wallet",
      "category": "mobile",
      "colSpan": 2
    },
    {
      "name": "mobile-wallet-area",
      "category": "mobile",
      "colSpan": 2
    },
    {
      "name": "mobile-wallet-line",
      "category": "mobile",
      "colSpan": 2
    },
    {
      "name": "sleep-tracker",
      "category": "mobile",
      "colSpan": 2
    },
    {
      "name": "sleep-visualization",
      "category": "mobile",
      "colSpan": 2
    }
  ],
  "others": [
    {
      "name": "calendar",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "calendar-10",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "calendar-11",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "calendar-2",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "calendar-3",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "calendar-4",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "calendar-5",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "calendar-6",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "calendar-7",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "calendar-8",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "collaboration",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "collaboration-comment",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "food-delivery",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "keys",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "map",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "map-2",
      "category": "others",
      "colSpan": 2
    },
    {
      "name": "ride-sharing",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "user",
      "category": "others",
      "colSpan": 1
    },
    {
      "name": "users",
      "category": "others",
      "colSpan": 1
    }
  ]
};

export const AI_ILLUSTRATIONS = CATEGORY_ITEMS["ai"];

function IllustrationActions({ name, onNotify }: { name: string; onNotify: (msg: string) => void }) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyCLI = () => {
    const cmd = `npx shadcn@latest add @tailark-pro/${name}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cmd);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onNotify(`Copied CLI: ${cmd}`);
  };

  const copyPrompt = () => {
    const prompt = `Create the animated "${name}" illustration matching Tailark Quartz.`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(prompt);
    }
    onNotify(`Copied prompt for ${name}`);
  };

  const copyCode = () => {
    const snippet = `<Illustration name="${name}" />`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
    }
    onNotify(`Copied: ${snippet}`);
  };

  return (
    <div className="flex items-center gap-1">
      {/* CLI / Install */}
      <button
        type="button"
        onClick={copyCLI}
        aria-label="Copy install command"
        title="Copy install command"
        className="relative flex h-6 w-8 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
      >
        {copied ? (
          <svg className="size-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        )}
      </button>

      {/* Open in v0 */}
      <button
        type="button"
        onClick={() =>
          window.open(
            `https://v0.dev/chat/api/open?url=${encodeURIComponent(`https://tailark.com/r/${name}.json`)}`,
            "_blank",
            "noopener,noreferrer"
          )
        }
        aria-label="Open in v0"
        title="Open in v0"
        className="relative flex h-6 w-8 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
      >
        <svg viewBox="0 0 24 24" className="size-4 fill-current">
          <path d="M14.383 5.653h7.392c.138 0 .25.112.25.25v7.392c0 .223-.269.335-.427.177l-7.392-7.392c-.158-.158-.046-.427.177-.427Z" />
          <path d="M13.5 18.347H2v-2.852h9.484L5.653 9.664v-2.01c0-.223.269-.335.427-.177l7.847 7.847c.158.158.046.427-.177.427v2.596h-.25Z" />
        </svg>
      </button>

      {/* Copy Prompt */}
      <button
        type="button"
        onClick={copyPrompt}
        aria-label="Copy prompt"
        title="Copy prompt"
        className="relative flex h-6 w-8 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
      >
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          <path d="M20 2v4" />
          <path d="M22 4h-4" />
          <circle cx="4" cy="20" r="2" />
        </svg>
      </button>

      {/* View Code */}
      <button
        type="button"
        onClick={copyCode}
        aria-label="View code"
        title="View code"
        className="relative flex h-6 w-8 cursor-pointer items-center justify-center rounded-md text-foreground/75 ring-1 ring-foreground/5 transition-all hover:bg-foreground/5 hover:text-foreground hover:ring-foreground/10"
      >
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </button>
    </div>
  );
}

class IllustrationErrorBoundary extends React.Component<
  { name: string; children: React.ReactNode },
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
    console.warn(`Illustration "${this.props.name}" failed to render:`, error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-32 w-full items-center justify-center rounded-xl border border-dashed border-foreground/10 text-xs text-muted-foreground">
          Preview unavailable
        </div>
      );
    }
    return this.props.children;
  }
}

function IllustrationCanvas({ name }: { name: string }) {
  const Component = getIllustrationComponent(name);
  if (!Component) {
    return (
      <div className="flex size-24 shrink-0 animate-pulse rounded-lg bg-foreground/5" aria-hidden="true" />
    );
  }
  return (
    <IllustrationErrorBoundary name={name}>
      <div className="flex w-full items-center justify-center">
        <Component />
      </div>
    </IllustrationErrorBoundary>
  );
}

export function IllustrationsView({
  initialMode = "categories",
  initialCategory = "ai",
}: {
  initialMode?: "categories" | "category";
  initialCategory?: string;
}) {
  const [mode, setMode] = useState<"categories" | "category">(initialMode);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const activeItems: IllustrationItem[] =
    CATEGORY_ITEMS[selectedCategory] || CATEGORY_ITEMS["ai"] || [];

  return (
    <div
      data-theme="global"
      className={darkMode ? "dark min-h-screen bg-background text-foreground" : "min-h-screen bg-background text-foreground"}
    >
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 flex h-11 items-center justify-between border-b border-foreground/8 bg-background/95 px-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md py-1 pr-1.5 text-foreground transition-opacity hover:opacity-80"
            aria-label="Home"
            title="Back to Home"
          >
            <div className="flex size-6 items-center justify-center rounded-md bg-foreground text-background font-bold text-xs">
              K
            </div>
            <span className="text-xs font-semibold tracking-tight hidden sm:inline">Kairo</span>
          </Link>

          <span className="text-muted-foreground/30">/</span>

          <button
            type="button"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle Sidebar"
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
            </svg>
          </button>

          <div className="h-3.5 w-px bg-foreground/10" />

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setMode("categories")}
              className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${
                mode === "categories"
                  ? "bg-foreground/6 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              Illustrations
            </button>
            <span className="text-muted-foreground/40">/</span>
            <button
              type="button"
              onClick={() => {
                setMode("category");
              }}
              className={`cursor-pointer rounded-md px-2 py-1 capitalize transition-colors ${
                mode === "category"
                  ? "bg-foreground/6 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {selectedCategory} ({activeItems.length})
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Switcher */}
          <div className="flex items-center rounded-lg bg-foreground/5 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setMode("categories")}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                mode === "categories"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Categories Bento
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ai");
                setMode("category");
              }}
              className={`cursor-pointer rounded-md px-2.5 py-1 font-medium transition-all ${
                mode === "category" && selectedCategory === "ai"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AI (25)
            </button>
          </div>

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle theme"
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            title="Toggle theme"
          >
            {darkMode ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-2.75rem)]">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="sticky top-11 h-[calc(100vh-2.75rem)] shrink-0 w-48 overflow-y-auto border-r border-foreground/8 bg-background px-2.5 py-3 self-start">
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Illustrations
            </div>
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                onClick={() => setMode("categories")}
                className={`flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-[13px] transition-colors ${
                  mode === "categories"
                    ? "bg-foreground/6 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                <span>Categories</span>
                <span className="text-xs text-muted-foreground/80">10</span>
              </button>

              {CATEGORIES_META.map((cat) => {
                const isActive = mode === "category" && selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setMode("category");
                    }}
                    className={`flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-[13px] capitalize transition-colors ${
                      isActive
                        ? "bg-foreground/6 font-medium text-foreground"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs text-muted-foreground/80">{cat.count}</span>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1 bg-background p-2">
          {mode === "categories" ? (
            /* Exact Tailark /illustrations Categories Bento Grid with Clear Borders */
            <div className="relative grid auto-rows-[18rem] gap-[4.5px] px-1 pb-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CATEGORIES_META.map((cat) => (
                <div
                  key={cat.id}
                  data-theme="both"
                  className={`group relative h-full min-h-0 overflow-hidden max-sm:overflow-hidden rounded-2xl [contain-intrinsic-size:auto_18rem] [content-visibility:auto] ${
                    cat.rowSpan === 2 ? "row-span-2" : "row-span-1"
                  } ${cat.colSpan === 2 ? "sm:col-span-2" : ""}`}
                >
                  <div className="peer relative z-1 flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-muted/50 not-dark:in-data-[theme=dark]:bg-black/95 dark:bg-neutral-950 shadow-xs transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md">
                    <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-8 py-12 *:scale-95">
                      <div className="flex w-full items-center justify-center">
                        <IllustrationCanvas name={cat.previewIllustration} />
                      </div>
                    </div>
                    <div className="z-10 shrink-0 space-y-0.5 px-4 pt-1 pb-4">
                      <p className="text-sm font-medium capitalize">
                        <Link
                          className="before:absolute before:inset-0 text-foreground"
                          href={`/illustrations/${cat.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(cat.id);
                            setMode("category");
                            window.history.pushState({}, "", `/illustrations/${cat.id}`);
                          }}
                        >
                          {cat.label}
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">{cat.count} illustrations</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Authentic Category Grid with Clear Borders and Centered Actions */
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {activeItems.map((item) => (
                <div
                  key={item.name}
                  className={`group relative min-h-72 max-sm:overflow-hidden rounded-2xl ${
                    item.colSpan === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="peer relative z-1 flex h-full items-center justify-center rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-muted/50 p-8 py-12 *:scale-95 not-dark:in-data-[theme=dark]:bg-black/95 dark:bg-neutral-950 shadow-xs transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md">
                    <IllustrationCanvas name={item.name} />
                  </div>
                  {/* Floating Action Pill */}
                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100 p-1 rounded-lg bg-card/90 shadow-sm border border-border/50 backdrop-blur-sm">
                    <IllustrationActions name={item.name} onNotify={notify} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Toast Feedback */}
      {toastMsg && (
        <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-lg">
          <svg className="size-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
