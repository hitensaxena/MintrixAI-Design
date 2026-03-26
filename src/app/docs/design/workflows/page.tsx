import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, GitBranch, Zap, Shield, Layers } from "lucide-react";

export default function WorkflowsPage() {
  const groupedDocs = getGroupedDocs();
  const workflowDocs = groupedDocs
    .filter(g => g.superCategory === "Design" && g.category === "Useflows")
    .flatMap(g => g.docs);

  const workflows = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Event Spawning",
      description: "How events are born from intelligence signals, triage decisions, and system-generated proposals.",
      steps: 6,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "High-Stakes Approval",
      description: "Multi-role governance flows for sensitive actions requiring trust escalation and audit trails.",
      steps: 8,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Onboarding & Setup",
      description: "The administrative substrate that bootstraps a new institution onto the Mintrix platform.",
      steps: 5,
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Role-Specific Flows",
      description: "Daily teaching, parent consent, principal triage — each persona has a dedicated workflow surface.",
      steps: 4,
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Design Workflows
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              System <br /><span className="text-[#376851] italic font-light">Choreography.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Multi-step orchestrations that connect personas, intelligence, and governance into coherent user journeys.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/cat-workflows.jpg" alt="System Choreography" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e8da]/30 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Workflow Tiles */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Key Workflows</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">Choreography</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {workflows.map((wf) => (
              <div key={wf.title} className="bg-[#f3f4f0] p-8 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#d2e8da] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#376851]">{wf.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-[#376851] tracking-widest">{wf.steps} STEPS</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#191c1a]">{wf.title}</h3>
                <p className="text-[#414943] leading-relaxed">{wf.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Workflow Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflowDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="flex items-center justify-between p-6 bg-[#f3f4f0] rounded-2xl hover:bg-[#e7e9e5] transition-all duration-300 group"
              >
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
