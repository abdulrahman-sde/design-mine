import { getComparatorById, COMPARATOR_LIST } from "../components";
import { notFound } from "next/navigation";
import Link from "next/link";
import "../../hero/tailark.css";

export function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const c of COMPARATOR_LIST) {
    params.push({ id: String(c.id) });
    params.push({ id: c.slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getComparatorById(id);
  if (!item) return { title: "Comparator Block Not Found" };
  return {
    title: `${item.name} - ${item.headline} | Tailark Quartz`,
    description: item.tagline,
  };
}

export default async function SingleComparatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getComparatorById(id);
  if (!item) notFound();

  const Comp = item.component;

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-foreground/10 selection:text-primary">
      {/* Floating control bar */}
      <aside
        aria-label="Preview controls"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/90 p-1.5 shadow-xl backdrop-blur-md text-xs font-medium text-foreground transition-all hover:scale-105"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/10"
        >
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span>Home</span>
        </Link>
        <div className="h-4 w-px bg-foreground/15" />
        <Link
          href="/comparator"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/10"
        >
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>All Comparators</span>
        </Link>
        <div className="h-4 w-px bg-foreground/15" />
        <span className="px-2 font-mono text-[11px] text-muted-foreground">
          #{item.id} · {item.name}
        </span>
      </aside>

      {/* Standalone Fullscreen Block */}
      <main className="w-full">
        <Comp />
      </main>
    </div>
  );
}
