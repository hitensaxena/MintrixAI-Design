import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, Shield, Eye, Zap, Bot } from "lucide-react";

export default function TrustIntelligencePage() {
  const groupedDocs = getGroupedDocs();
  const trustDocs = groupedDocs
    .filter(g => g.superCategory === "Product" && g.category === "Trust and Intelligence")
    .flatMap(g => g.docs);

  const pillars = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Confidence & Surface Behavior",
      description: "The UI is not static — it visually warps, color-shifts, and flags users based on a singular internal metric: The Confidence Score (0-100%).",
      tag: "Core Metric",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Policies, Trust & Governance",
      description: "The philosophical boundaries dictating what the Intelligence Layer is legally and ethically prohibited from doing autonomously.",
      tag: "Governance",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Setup, Tuning & Maintenance",
      description: "You don't set up Mintrix once — you continuously tune its intelligence. Settings are the ongoing calibration of Persona Agent neural pathways.",
      tag: "Operations",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Persona Agents",
      description: "Deeply integrated structural copilots attached to Workspace Surfaces and Approval Inboxes — not floating chatbots, but embedded intelligence.",
      tag: "AI Layer",
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Trust & Intelligence
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Earned <br /><span className="text-[#376851] italic font-light">Confidence.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              How Mintrix builds institutional trust through transparent confidence scoring, governance boundaries, and Persona Agents that surrender autonomy when they reach their ceiling.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/pcat-trust.jpg" alt="Trust & Intelligence" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#376851]/20 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Pillars */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Trust Framework</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">4 Pillars</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-[#f3f4f0] p-8 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#d2e8da] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#376851]">{pillar.icon}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#376851]/10 text-[#376851] rounded-full text-[10px] font-bold uppercase tracking-widest">{pillar.tag}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#191c1a]">{pillar.title}</h3>
                <p className="text-[#414943] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Trust Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustDocs.map((doc) => (
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
