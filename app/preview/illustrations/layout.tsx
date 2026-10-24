import React from "react";
import "@/app/illustrations/shadcn-illustrations.css";

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground antialiased">{children}</div>;
}
