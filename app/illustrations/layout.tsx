import React from "react";
import "./shadcn-illustrations.css";

export default function IllustrationsLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground antialiased">{children}</div>;
}
