"use client";

import { ReactNode } from "react";
import { Users, Target, LayoutTemplate, Activity } from "lucide-react";

interface SurfaceCardProps {
  title: string;
  roles?: string[];
  children: ReactNode;
}

export default function SurfaceCard({ title, roles, children }: SurfaceCardProps) {
  return (
    <div className="w-full my-8 m3-surface-card p-6 md:p-8 relative flex flex-col group">
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B1F] m-0 pb-2">
            {title}
          </h2>
          {roles && roles.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              <Users className="w-4 h-4 text-[#6750A4] my-auto mr-1" />
              {roles.map((role, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#E8DEF8] text-[#1D192B] text-xs font-bold tracking-wide rounded-full">
                  {role}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
}
