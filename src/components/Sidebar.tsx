"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";

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
          <div className="w-8 h-8 rounded-full bg-[#EADDFF] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#21005D]" />
          </div>
          <h1 className="text-xl font-medium text-[#1C1B1F]">
            Mintrix Docs
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
