import Link from 'next/link';
import { getAllDocs } from '@/lib/docs';
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";

export default function Home() {
  const docs = getAllDocs();
  
  const getIcon = (title: string) => {
    switch (title) {
      case "Architecture Map": return <Layers className="w-6 h-6" />;
      case "Brain Map": return <Zap className="w-6 h-6" />;
      case "Persona Intelligence Cards": return <User className="w-6 h-6" />;
      case "Screen Inventory and Navigation Model": return <Layout className="w-6 h-6" />;
      case "Setup and Event Architecture": return <Map className="w-6 h-6" />;
      case "Trust Approval and Failure Framework": return <Shield className="w-6 h-6" />;
      case "Workflow Priority Map": return <ArrowRightCircle className="w-6 h-6" />;
      case "Workflow and Persona": return <BookOpen className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative w-full min-h-screen max-w-[1200px] mx-auto py-20 px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center justify-center p-5 mb-4 rounded-3xl bg-[#EADDFF] text-[#21005D] shadow-sm">
          <Zap className="w-10 h-10" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1C1B1F] mb-6">
          Mintrix AI Design System
        </h1>
        <p className="text-xl md:text-2xl text-[#49454F] leading-relaxed font-normal">
          Explore the architecture, intelligent models, and comprehensive workflows behind Mintrix AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, i) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="group flex flex-col p-8 bg-[#F3EDF7] rounded-[24px] hover:bg-[#E6E0E9] transition-colors duration-300 h-full"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FFFBFE] text-[#6750A4] group-hover:bg-[#EADDFF] group-hover:text-[#21005D] transition-colors duration-300">
              {getIcon(doc.title)}
            </div>
            
            <h2 className="text-xl font-bold text-[#1C1B1F] mb-3">
              {doc.title}
            </h2>
            
            <div className="mt-auto pt-6 flex items-center text-sm font-bold tracking-wide text-[#6750A4] transition-colors duration-300 group-hover:underline">
              Explore <ArrowRightCircle className="w-4 h-4 ml-1.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
