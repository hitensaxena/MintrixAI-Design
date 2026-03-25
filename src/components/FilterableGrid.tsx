"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";
import { DocGroup } from '@/lib/docs';

interface FilterableGridProps {
  groupedDocs: DocGroup[];
}

export default function FilterableGrid({ groupedDocs }: FilterableGridProps) {
  const [activeMode, setActiveMode] = useState<"Product" | "Design">("Product");
  
  const getIcon = (title: string) => {
    switch (title) {
      case "Product Brief": return <Layers className="w-6 h-6" />;
      case "Confidence and Surface Behavior": return <Shield className="w-6 h-6" />;
      case "Policies, Trust and Governance": return <Shield className="w-6 h-6" />;
      case "Setup, Tuning, Setting and Maintainance of Intelligence": return <Zap className="w-6 h-6" />;
      case "Persona Agents": return <User className="w-6 h-6" />;
      case "Daily Feed": return <Zap className="w-6 h-6" />;
      case "Approval Inbox": return <Shield className="w-6 h-6" />;
      case "Exception Center": return <Shield className="w-6 h-6" />;
      case "Transparency Log": return <Layout className="w-6 h-6" />;
      case "Role-based Dashboard": return <Layers className="w-6 h-6" />;
      case "Workspace": return <Layout className="w-6 h-6" />;
      case "User Profile and Settings": return <User className="w-6 h-6" />;
      case "Event Cards": return <Layout className="w-6 h-6" />;
      case "Primary Navigation": return <Map className="w-6 h-6" />;
      case "Surface-based Navigation": return <Map className="w-6 h-6" />;
      case "Persona Intelligence Cards": return <User className="w-6 h-6" />;
      case "Workflow - Approval and Transparency": return <Shield className="w-6 h-6" />;
      case "Workflow - Living Curriculum and Pace": return <BookOpen className="w-6 h-6" />;
      case "Workflow - Principal Operations and Exceptions": return <Zap className="w-6 h-6" />;
      case "Workflow - Setup and Calibration": return <Map className="w-6 h-6" />;
      case "Workflow - Teacher Daily Teaching": return <User className="w-6 h-6" />;
      case "Workflow - Event Handling and Lifecycle": return <Layout className="w-6 h-6" />;
      case "Workflow - Workspace Surfaces and Personas": return <Layout className="w-6 h-6" />;
      case "Workflow Priority Map": return <ArrowRightCircle className="w-6 h-6" />;
      case "Workflow Management": return <BookOpen className="w-6 h-6" />;
      case "Setup Architecture": return <Map className="w-6 h-6" />;
      case "System Architecture": return <Layers className="w-6 h-6" />;
      case "Event Architecture": return <Layout className="w-6 h-6" />;
      case "Persona AI Agent Architecture": return <Zap className="w-6 h-6" />;
      case "Intelligence Layer Processor Architecture": return <Zap className="w-6 h-6" />;
      case "Living Curriculum State Architecture": return <BookOpen className="w-6 h-6" />;
      case "Policies, Settings and Autonomy Architecture": return <Shield className="w-6 h-6" />;
      case "Screen Inventory and Navigation Model": return <Layout className="w-6 h-6" />;
      case "System Operations": return <Zap className="w-6 h-6" />;
      case "Design Foundation and Philosophy": return <Layers className="w-6 h-6" />;
      case "User Personas and Journeys": return <User className="w-6 h-6" />;
      case "Agent Personas and Journeys": return <Zap className="w-6 h-6" />;
      case "Core Event Spawning Flow": return <Map className="w-6 h-6" />;
      case "High-Stakes Approval Flow": return <Shield className="w-6 h-6" />;
      case "Principal Triage Flow": return <Layout className="w-6 h-6" />;
      case "Teacher Grading and Intervention Flow": return <User className="w-6 h-6" />;
      case "Parent Communication and Consent Flow": return <BookOpen className="w-6 h-6" />;
      case "Admin Substrate Setup Flow": return <Layers className="w-6 h-6" />;
      case "Color Architecture": return <Layers className="w-6 h-6" />;
      case "Typography and Spacing": return <BookOpen className="w-6 h-6" />;
      case "Voice and Tone": return <Zap className="w-6 h-6" />;
      case "Interface Components": return <Layout className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <>
      <div className="flex bg-[#eef1f3]/50 p-1.5 rounded-[18px] border border-[#dee3e6] shadow-sm mb-8 w-full md:w-auto">
        <button
          onClick={() => setActiveMode("Product")}
          className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 text-base font-bold tracking-wide rounded-[14px] transition-all duration-300 ${
            activeMode === "Product" ? "bg-white text-[#005bc1] shadow-md ring-1 ring-[#dee3e6]/50" : "text-[#5a6062] hover:text-[#2d3335]"
          }`}
        >
          Product Architecture
        </button>
        <button
          onClick={() => setActiveMode("Design")}
          className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 text-base font-bold tracking-wide rounded-[14px] transition-all duration-300 ${
            activeMode === "Design" ? "bg-white text-[#005bc1] shadow-md ring-1 ring-[#dee3e6]/50" : "text-[#5a6062] hover:text-[#2d3335]"
          }`}
        >
          Design Interface
        </button>
      </div>

      <div className="space-y-24">
        {groupedDocs
          .filter((group) => group.superCategory === activeMode)
          .map((group) => (
          <div key={group.category} className="space-y-10">
            <h2 className="text-3xl font-bold text-[#2d3335] font-plus-jakarta border-b border-[#dee3e6] pb-4">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group flex flex-col p-10 m3-surface-card h-full"
                >
                  <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-[20px] bg-[#f1f4f5] text-[#005bc1] group-hover:m3-signature-gradient group-hover:text-[#ffffff] transition-all duration-300">
                    {getIcon(doc.title)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2d3335] font-plus-jakarta mb-4">
                    {doc.title}
                  </h3>
                  
                  <div className="mt-auto pt-8 flex items-center text-sm font-bold tracking-wide text-[#005bc1] transition-colors duration-300 group-hover:underline">
                    Explore <ArrowRightCircle className="w-4 h-4 ml-1.5" />
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
