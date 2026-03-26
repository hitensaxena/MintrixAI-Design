"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Puzzle, Palette, GitBranch, Shield, User, Layout } from "lucide-react";

interface SidebarProps {
  groupedDocs: { superCategory: 'Product' | 'Design'; category: string; docs: { slug: string; title: string }[] }[];
}

/* ────────────────────────────────────────
   Design categories (flat pill nav)
   ──────────────────────────────────────── */
const designCategories = [
  { key: "foundations",  label: "Foundations",  icon: <Layers className="w-5 h-5" /> },
  { key: "components",   label: "Components",   icon: <Puzzle className="w-5 h-5" /> },
  { key: "surfaces",     label: "Surfaces",     icon: <Layout className="w-5 h-5" /> },
  { key: "patterns",     label: "Patterns",     icon: <Palette className="w-5 h-5" /> },
  { key: "workflows",    label: "Workflows",    icon: <GitBranch className="w-5 h-5" /> },
  { key: "personas",     label: "Personas",     icon: <User className="w-5 h-5" /> },
];

/* ────────────────────────────────────────
   Product categories (flat nav)
   ──────────────────────────────────────── */
const productCategories = [
  { key: "foundations",         label: "Foundations",            icon: <Layers className="w-5 h-5" /> },
  { key: "system-architecture", label: "System Architecture",    icon: <Layers className="w-5 h-5" /> },
  { key: "trust-intelligence",  label: "Trust & Intelligence",   icon: <Shield className="w-5 h-5" /> },
  { key: "workflows",           label: "Workflows",              icon: <GitBranch className="w-5 h-5" /> },
];

export default function Sidebar({ groupedDocs }: SidebarProps) {
  const pathname = usePathname();

  // Detect mode: design routes vs product routes
  const isDesign = pathname.startsWith("/docs/design") ||
    (() => {
      const pathSegments = pathname.split("/");
      const currentSlug = pathSegments.length >= 3 ? pathSegments.slice(2).join("/") : "";
      const group = groupedDocs.find(g => g.docs.some(d => d.slug === currentSlug));
      return group?.superCategory === "Design";
    })();

  // Shared flat-category renderer
  const renderFlatNav = (
    categories: typeof designCategories,
    basePath: string,
    activeFallback: string
  ) => {
    const subPath = pathname.replace(`${basePath}/`, "").replace(basePath, "");
    const activeCategory = subPath.split("/")[0] || activeFallback;

    return (
      <aside className="w-72 hidden md:flex flex-col h-screen sticky top-20 bg-stone-50/80">
        <div className="flex-1 overflow-y-auto pb-6 px-3 pt-4 no-scrollbar">
          <nav className="space-y-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <Link
                  key={cat.key}
                  href={`${basePath}/${cat.key}`}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 group ${
                    isActive
                      ? "text-[#1a3a2a] bg-emerald-100/60"
                      : "text-[#2d4a3a] hover:text-[#1a3a2a] hover:bg-emerald-50/50"
                  }`}
                >
                  <span className={`transition-colors ${isActive ? "text-[#376851]" : "text-[#376851]/60 group-hover:text-[#376851]"}`}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    );
  };

  if (isDesign) {
    return renderFlatNav(designCategories, "/docs/design", "foundations");
  }

  return renderFlatNav(productCategories, "/docs/product", "foundations");
}
