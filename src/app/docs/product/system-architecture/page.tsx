import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, Layers, Cpu, GitBranch, Settings, Monitor, Cog } from "lucide-react";

export default function SystemArchitecturePage() {
  const groupedDocs = getGroupedDocs();
  const archDocs = groupedDocs
    .filter(g => g.superCategory === "Product" && g.category === "System Architecture")
    .flatMap(g => g.docs);

  const modules = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Structural Core",
      description: "Setup, System, and Event architecture — mapping how data flows from real-world school operations through the Intelligence Engine to human interfaces.",
      docs: ["Setup Architecture", "System Architecture", "Event Architecture"],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Intelligence Topology",
      description: "Specialized Persona AI Agents and the Intelligence Layer Processor that transforms raw database queries into actionable insights and exception alerts.",
      docs: ["Persona AI Agent Architecture", "Intelligence Layer Processor Architecture"],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Living Curriculum",
      description: "A live, constantly calculating state vector that cross-references the ideal syllabus against the grinding reality of the daily timetable.",
      docs: ["Living Curriculum State Architecture"],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Governance & Autonomy",
      description: "Active governance laws that throttle the Autonomy Engine — settings are not toggles, they are policy-driven behavioral boundaries.",
      docs: ["Policies, Settings and Autonomy Architecture"],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Screen Inventory",
      description: "The canonical mapping of architectural surface families to tangible application screens, categorized by persona and navigation model.",
      docs: ["Screen Inventory and Navigation Model"],
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "System Operations",
      description: "The macro chronological cycle across three temporal rhythms: The Daily Grind, The Weekly Assessment, and The Term Cycle.",
      docs: ["System Operations"],
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              System Architecture
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              The <br /><span className="text-[#376851] italic font-light">Engine Room.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Nine interconnected micro-architectures defining how data flows from origin through the Intelligence Engine and resolves into human interfaces.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/pcat-architecture.jpg" alt="System Architecture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#376851]/20 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Modules */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Architecture Modules</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">6 Domains</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <div key={mod.title} className="bg-[#f3f4f0] p-8 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className="w-12 h-12 rounded-full bg-[#d2e8da] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-[#376851]">{mod.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#191c1a]">{mod.title}</h3>
                <p className="text-sm text-[#414943] leading-relaxed mb-4">{mod.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.docs.map(d => (
                    <span key={d} className="px-2 py-0.5 bg-[#376851]/10 text-[#376851] rounded-full text-[10px] font-bold">{d.split(" ").slice(0,2).join(" ")}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">All Architecture Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {archDocs.map((doc) => (
              <Link key={doc.slug} href={`/docs/${doc.slug}`} className="flex items-center justify-between p-6 bg-[#f3f4f0] rounded-2xl hover:bg-[#e7e9e5] transition-all duration-300 group">
                <h3 className="font-bold text-[#191c1a] group-hover:text-[#376851] transition-colors">{doc.title}</h3>
                <ArrowRight className="w-5 h-5 text-[#376851] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
