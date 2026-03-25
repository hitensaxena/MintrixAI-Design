"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export const MintrixNodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Image src="/logo.png" alt="Mintrix Logo" fill className="object-contain" />
  </div>
);

interface SidebarProps {
  groupedDocs: { superCategory: 'Product' | 'Design'; category: string; docs: { slug: string; title: string }[] }[];
}

export default function Sidebar({ groupedDocs }: SidebarProps) {
  const pathname = usePathname();
  const [activeMode, setActiveMode] = useState<"Product" | "Design">("Product");

  const getIcon = (title: string) => {
    switch (title) {
      case "Product Brief": return <Layers className="w-5 h-5" />;
      case "Confidence and Surface Behavior": return <Shield className="w-5 h-5" />;
      case "Policies, Trust and Governance": return <Shield className="w-5 h-5" />;
      case "Setup, Tuning, Setting and Maintainance of Intelligence": return <Zap className="w-5 h-5" />;
      case "Persona Agents": return <User className="w-5 h-5" />;
      case "Daily Feed": return <Zap className="w-5 h-5" />;
      case "Approval Inbox": return <Shield className="w-5 h-5" />;
      case "Exception Center": return <Shield className="w-5 h-5" />;
      case "Transparency Log": return <Layout className="w-5 h-5" />;
      case "Role-based Dashboard": return <Layers className="w-5 h-5" />;
      case "Workspace": return <Layout className="w-5 h-5" />;
      case "User Profile and Settings": return <User className="w-5 h-5" />;
      case "Event Cards": return <Layout className="w-5 h-5" />;
      case "Primary Navigation": return <Map className="w-5 h-5" />;
      case "Surface-based Navigation": return <Map className="w-5 h-5" />;
      case "Persona Intelligence Cards": return <User className="w-5 h-5" />;
      case "Approval and Transparency": return <Shield className="w-5 h-5" />;
      case "Tuning and Policies": return <Zap className="w-5 h-5" />;
      case "Setup and Onboarding": return <Layers className="w-5 h-5" />;
      case "Living Curriculum And Pace": return <BookOpen className="w-5 h-5" />;
      case "Teacher daily teaching": return <BookOpen className="w-5 h-5" />;
      case "Principal Operations and Exceptions": return <Shield className="w-5 h-5" />;
      case "Admin Operations and Exceptions": return <Zap className="w-5 h-5" />;
      case "Students Workflows": return <User className="w-5 h-5" />;
      case "Brand Guidelines": return <Layout className="w-5 h-5" />;
      case "Setup Architecture": return <Map className="w-5 h-5" />;
      case "System Architecture": return <Layers className="w-5 h-5" />;
      case "Event Architecture": return <Layout className="w-5 h-5" />;
      case "Persona AI Agent Architecture": return <Zap className="w-5 h-5" />;
      case "Intelligence Layer Processor Architecture": return <Zap className="w-5 h-5" />;
      case "Living Curriculum State Architecture": return <BookOpen className="w-5 h-5" />;
      case "Policies, Settings and Autonomy Architecture": return <Shield className="w-5 h-5" />;
      case "Screen Inventory and Navigation Model": return <Layout className="w-5 h-5" />;
      case "System Operations": return <Zap className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-72 hidden md:flex flex-col h-screen sticky top-0 bg-[#f8f9fa]">
      <div className="p-6 pb-2">
        <Link href="/" className="flex items-center gap-3 ml-2 mt-4">
          <div className="w-8 h-8 rounded-[6px] flex items-center justify-center overflow-hidden shadow-sm">
            <MintrixNodeIcon className="w-full h-full" />
          </div>
          <h1 className="text-xl font-medium font-plus-jakarta text-[#2d3335]">
            Mintrix AI | Design
          </h1>
        </Link>
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center bg-[#eef1f3] rounded-[10px] p-1 mt-4">
          <button
            onClick={() => setActiveMode("Product")}
            className={`flex-1 flex items-center justify-center py-1.5 text-[12px] font-bold tracking-wide rounded-[8px] transition-all duration-200 ${
              activeMode === "Product" ? "bg-white text-[#2d3335] shadow-sm" : "text-[#8a9296] hover:text-[#5a6062]"
            }`}
          >
            Product
          </button>
          <button
            onClick={() => setActiveMode("Design")}
            className={`flex-1 flex items-center justify-center py-1.5 text-[12px] font-bold tracking-wide rounded-[8px] transition-all duration-200 ${
              activeMode === "Design" ? "bg-white text-[#2d3335] shadow-sm" : "text-[#8a9296] hover:text-[#5a6062]"
            }`}
          >
            Design
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-3 no-scrollbar">
        <nav className="space-y-8">
          {groupedDocs
            .filter((group) => group.superCategory === activeMode)
            .map((group) => (
            <div key={group.category} className="space-y-2">
              <h3 className="px-4 text-[10px] font-bold text-[#5a6062] uppercase tracking-[0.1em] opacity-70">
                {group.category}
              </h3>
              <div className="space-y-1">
                {group.docs.map((doc) => {
                  const isActive = pathname === `/docs/${doc.slug}`;
                  return (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      className={`relative flex items-center gap-3 px-4 py-2.5 rounded-[15px] text-[13px] font-medium transition-all duration-200 group ${
                        isActive
                          ? "text-[#005bc1]"
                          : "text-[#5a6062] hover:text-[#2d3335] hover:bg-[#dee3e6]/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-sidebar-item"
                          className="absolute inset-0 bg-[#f1f4f5] rounded-[15px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      <div className={`relative z-10 transition-colors ${isActive ? "text-[#005bc1]" : "text-[#5a6062] group-hover:text-[#2d3335]"}`}>
                        {getIcon(doc.title)}
                      </div>
                      <span className="relative z-10 line-clamp-2 leading-snug">{doc.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
