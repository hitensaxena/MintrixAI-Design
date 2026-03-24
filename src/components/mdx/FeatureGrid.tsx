"use client";

import { ReactNode } from "react";

export default function FeatureGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      {children}
    </div>
  );
}

export function FeatureCard({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="m3-surface-card p-8 h-full flex flex-col relative group">
      <h3 className="text-2xl font-bold text-[#2d3335] font-plus-jakarta mb-6 mt-0">
        {title}
      </h3>
      <div className="prose prose-sm max-w-none prose-ul:mt-0 prose-ul:mb-0 relative z-10">
        {children}
      </div>
    </div>
  );
}
