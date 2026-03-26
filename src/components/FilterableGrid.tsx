"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRight, Palette, GitBranch, Puzzle } from "lucide-react";
import { DocGroup } from '@/lib/docs';

interface FilterableGridProps {
  groupedDocs: DocGroup[];
  hideToggle?: boolean;
}

const getIcon = (title: string) => {
  if (title.includes("Architecture")) return <Layers className="w-6 h-6" />;
  if (title.includes("Approval") || title.includes("Trust") || title.includes("Confidence") || title.includes("Policies")) return <Shield className="w-6 h-6" />;
  if (title.includes("Persona") || title.includes("User") || title.includes("Student") || title.includes("Teacher")) return <User className="w-6 h-6" />;
  if (title.includes("Setup") || title.includes("Tuning") || title.includes("Intelligence") || title.includes("Operations")) return <Zap className="w-6 h-6" />;
  if (title.includes("Navigation") || title.includes("Screen") || title.includes("Map")) return <Map className="w-6 h-6" />;
  if (title.includes("Event") || title.includes("Dashboard") || title.includes("Feed") || title.includes("Workspace") || title.includes("Layout")) return <Layout className="w-6 h-6" />;
  if (title.includes("Color") || title.includes("Typography") || title.includes("Voice") || title.includes("Design") || title.includes("Interface")) return <Palette className="w-6 h-6" />;
  if (title.includes("Flow") || title.includes("Workflow") || title.includes("Curriculum")) return <GitBranch className="w-6 h-6" />;
  if (title.includes("Component") || title.includes("Card")) return <Puzzle className="w-6 h-6" />;
  return <BookOpen className="w-6 h-6" />;
};

export default function FilterableGrid({ groupedDocs, hideToggle = false }: FilterableGridProps) {
  const [activeMode, setActiveMode] = useState<"Product" | "Design">("Product");

  const filteredDocs = hideToggle
    ? groupedDocs
    : groupedDocs.filter((group) => group.superCategory === activeMode);

  return (
    <>
      {/* Mode Toggle */}
      {!hideToggle && (
      <div className="flex bg-[#edeeeb] p-1.5 rounded-full mb-12 w-full md:w-auto max-w-sm">
        <button
          onClick={() => setActiveMode("Product")}
          className={`flex-1 md:flex-none px-6 md:px-10 py-3 text-sm font-bold tracking-wide rounded-full transition-all duration-300 ${
            activeMode === "Product" ? "bg-white text-emerald-900 shadow-sm" : "text-emerald-700/60 hover:text-emerald-900"
          }`}
        >
          Product
        </button>
        <button
          onClick={() => setActiveMode("Design")}
          className={`flex-1 md:flex-none px-6 md:px-10 py-3 text-sm font-bold tracking-wide rounded-full transition-all duration-300 ${
            activeMode === "Design" ? "bg-white text-emerald-900 shadow-sm" : "text-emerald-700/60 hover:text-emerald-900"
          }`}
        >
          Design
        </button>
      </div>
      )}

      {/* Category Groups */}
      <div className="space-y-20">
        {filteredDocs
          .map((group) => (
          <div key={group.category} className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#376851]">{getIcon(group.category)}</span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#376851]">
                {group.category}
              </h3>
              <div className="flex-1 h-px bg-[#c0c9c2]/40" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group editorial-tile p-8 flex flex-col cursor-pointer hover:bg-[#edeeeb] transition-colors duration-300"
                >
                  <div className="mb-6 w-12 h-12 rounded-xl bg-[#d2e8da] flex items-center justify-center text-[#31624b] group-hover:scale-110 transition-transform">
                    {getIcon(doc.title)}
                  </div>
                  
                  <h4 className="text-lg font-bold text-[#191c1a] mb-3 leading-snug group-hover:text-[#376851] transition-colors">
                    {doc.title}
                  </h4>
                  
                  <div className="mt-auto pt-6 flex items-center text-sm font-bold text-[#376851] group-hover:translate-x-1 transition-transform">
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
