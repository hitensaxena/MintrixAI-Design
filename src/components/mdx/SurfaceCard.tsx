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
    <div className="w-full my-10 m3-surface-card p-8 md:p-12 relative flex flex-col group">
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3335] font-plus-jakarta m-0 pb-2">
            {title}
          </h2>
          {roles && roles.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              <Users className="w-4 h-4 text-[#005bc1] my-auto mr-1" />
              {roles.map((role, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#f1f4f5] text-[#005bc1] text-xs font-bold tracking-wide rounded-full">
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
