import Link from 'next/link';
import { getGroupedDocs } from '@/lib/docs';
import { BookOpen, Layers, Zap, Shield, User, Map, Layout, ArrowRightCircle } from "lucide-react";

export default function Home() {
  const groupedDocs = getGroupedDocs();
  
  const getIcon = (title: string) => {
    switch (title) {
      case "Architecture Map": return <Layers className="w-6 h-6" />;
      case "Brain Map": return <Zap className="w-6 h-6" />;
      case "Confidence and Surface Behavior": return <Shield className="w-6 h-6" />;
      case "Event Template Definitions and Exception Taxonomy": return <Layout className="w-6 h-6" />;
      case "Interface - Approval Inbox": return <Shield className="w-6 h-6" />;
      case "Interface - Daily Feed": return <Zap className="w-6 h-6" />;
      case "Interface - Exception Center": return <Zap className="w-6 h-6" />;
      case "Interface - Navigation Model": return <Map className="w-6 h-6" />;
      case "Interface - Transparency Log": return <BookOpen className="w-6 h-6" />;
      case "Interface - Workspace Surface": return <Layout className="w-6 h-6" />;
      case "Persona Intelligence Cards": return <User className="w-6 h-6" />;
      case "Role-Based Dashboard Structure": return <Layers className="w-6 h-6" />;
      case "Screen Inventory and Navigation Model": return <Layout className="w-6 h-6" />;
      case "Setup and Event Architecture": return <Map className="w-6 h-6" />;
      case "System Operations and User Flow": return <Zap className="w-6 h-6" />;
      case "Trust Approval and Failure Framework": return <Shield className="w-6 h-6" />;
      case "Workflow - Approval and Transparency": return <Shield className="w-6 h-6" />;
      case "Workflow - Living Curriculum and Pace": return <BookOpen className="w-6 h-6" />;
      case "Workflow - Principal Operations and Exceptions": return <Zap className="w-6 h-6" />;
      case "Workflow - Setup and Calibration": return <Map className="w-6 h-6" />;
      case "Workflow - Teacher Daily Teaching": return <User className="w-6 h-6" />;
      case "Workflow Priority Map": return <ArrowRightCircle className="w-6 h-6" />;
      case "Workflow and Persona": return <BookOpen className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative w-full min-h-screen max-w-[1200px] mx-auto py-24 px-6 lg:px-12">
      <div className="flex flex-col items-start max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center justify-center p-5 mb-2 rounded-[24px] m3-signature-gradient text-white shadow-sm">
          <Zap className="w-10 h-10" />
        </div>
        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-[#2d3335] font-plus-jakarta leading-[1.1] mb-6">
          Mintrix AI Design System
        </h1>
        <p className="text-xl md:text-2xl text-[#5a6062] leading-relaxed font-normal max-w-2xl">
          Explore the architecture, intelligent models, and comprehensive workflows behind Mintrix AI.
        </p>
      </div>

      <div className="space-y-24">
        {groupedDocs.map((group) => (
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
    </div>
  );
}
