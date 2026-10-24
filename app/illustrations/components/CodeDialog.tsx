"use client";

import React, { useState } from "react";

interface CodeDialogProps {
  illustration: {
    name: string;
    title: string;
    category?: string;
    dependencies?: string[];
    registryDependencies?: string[];
    description?: string;
  };
  onClose: () => void;
}

export function CodeDialog({ illustration, onClose }: CodeDialogProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"cli" | "code">("cli");

  const cliCommand = `npx shadcn add @ss-illustrations/${illustration.name}`;

  const sampleCode = `import { ${toPascalCase(illustration.title)} } from "@/components/illustrations/${illustration.name}";

export default function Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <${toPascalCase(illustration.title)} />
    </div>
  );
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">{illustration.title}</h3>
            <p className="text-xs text-muted-foreground">{illustration.name}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {illustration.description && (
          <div className="border-b border-border/50 bg-muted/20 px-5 py-3 text-xs text-muted-foreground">
            {illustration.description}
          </div>
        )}

        <div className="flex border-b border-border px-5">
          <button
            onClick={() => setActiveTab("cli")}
            className={`border-b-2 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "cli"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Installation (CLI)
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`ml-4 border-b-2 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "code"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Usage Example
          </button>
        </div>

        <div className="p-5">
          {activeTab === "cli" ? (
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-xs font-medium text-foreground">CLI Command</div>
                <div className="relative flex items-center justify-between rounded-lg border border-border bg-muted/40 p-3 font-mono text-xs text-foreground">
                  <code>{cliCommand}</code>
                  <button
                    onClick={() => copyToClipboard(cliCommand)}
                    className="ml-2 inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {copied ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-emerald-500"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {illustration.dependencies && illustration.dependencies.length > 0 && (
                <div>
                  <div className="mb-1.5 text-xs font-medium text-foreground">Dependencies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {illustration.dependencies.map((dep) => (
                      <span
                        key={dep}
                        className="rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="relative rounded-lg border border-border bg-muted/40 p-3">
                <pre className="overflow-x-auto font-mono text-xs text-foreground">
                  <code>{sampleCode}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(sampleCode)}
                  className="absolute top-2.5 right-2.5 inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-border bg-muted/10 px-5 py-3">
          <button
            onClick={onClose}
            className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^./, (chr) => chr.toUpperCase());
}
