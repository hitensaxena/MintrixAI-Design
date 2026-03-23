"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";

export const MintrixNodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="black" />
    <g fill="white" stroke="white" strokeWidth="6" strokeLinecap="round">
      <circle cx="50" cy="50" r="12" stroke="none" />
      
      <line x1="50" y1="40" x2="50" y2="18" />
      <circle cx="50" cy="18" r="7" stroke="none" />
      
      <line x1="50" y1="60" x2="50" y2="82" />
      <circle cx="50" cy="82" r="7" stroke="none" />
      
      <line x1="40" y1="50" x2="18" y2="50" />
      <circle cx="18" cy="50" r="7" stroke="none" />
      
      <line x1="60" y1="50" x2="82" y2="50" />
      <circle cx="82" cy="50" r="7" stroke="none" />
      
      {/* Diagonals */}
      <line x1="42.9" y1="42.9" x2="27" y2="27" />
      <circle cx="27" cy="27" r="7" stroke="none" />
      
      <line x1="57.1" y1="42.9" x2="73" y2="27" />
      <circle cx="73" cy="27" r="7" stroke="none" />
      
      <line x1="42.9" y1="57.1" x2="27" y2="73" />
      <circle cx="27" cy="73" r="7" stroke="none" />
      
      <line x1="57.1" y1="57.1" x2="73" y2="73" />
      <circle cx="73" cy="73" r="7" stroke="none" />
    </g>
  </svg>
);

interface SidebarProps {
  docs: { slug: string; title: string }[];
}

export default function Sidebar({ docs }: SidebarProps) {
  const pathname = usePathname();

  const getIcon = (title: string) => {
    switch (title) {
      case "Architecture Map": return <Layers className="w-5 h-5" />;
      case "Brain Map": return <Zap className="w-5 h-5" />;
      case "Persona Intelligence Cards": return <User className="w-5 h-5" />;
      case "Screen Inventory and Navigation Model": return <Layout className="w-5 h-5" />;
      case "Setup and Event Architecture": return <Map className="w-5 h-5" />;
      case "Trust Approval and Failure Framework": return <Shield className="w-5 h-5" />;
      case "Workflow Priority Map": return <ArrowRightCircle className="w-5 h-5" />;
      case "Workflow and Persona": return <BookOpen className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-72 hidden md:flex flex-col h-screen sticky top-0 bg-[#F3EDF7]">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 ml-2 mt-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
            <MintrixNodeIcon className="w-full h-full" />
          </div>
          <h1 className="text-xl font-medium text-[#1C1B1F]">
            Mintrix.ai Design
          </h1>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-3 no-scrollbar">
        <nav className="space-y-1">
          {docs.map((doc) => {
            const isActive = pathname === `/docs/${doc.slug}`;
            return (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className={`relative flex items-center gap-3 px-4 py-3.5 rounded-full text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "text-[#1D192B]"
                    : "text-[#49454F] hover:text-[#1C1B1F] hover:bg-[#1C1B1F]/[0.08]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-item"
                    className="absolute inset-0 bg-[#E8DEF8] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <div className={`relative z-10 transition-colors ${isActive ? "text-[#1D192B]" : "text-[#49454F] group-hover:text-[#1C1B1F]"}`}>
                  {getIcon(doc.title)}
                </div>
                <span className="relative z-10 line-clamp-2">{doc.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
