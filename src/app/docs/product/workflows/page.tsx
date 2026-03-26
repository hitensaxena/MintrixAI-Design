import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, GitBranch, CheckCircle, Users, Shield, GraduationCap, BookOpen, Settings, UserCheck } from "lucide-react";

export default function ProductWorkflowsPage() {
  const groupedDocs = getGroupedDocs();
  const workflowDocs = groupedDocs
    .filter(g => g.superCategory === "Product" && g.category === "Workflows")
    .flatMap(g => g.docs);

  const workflows = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Approval & Transparency",
      description: "The physical loop when the Autonomy Engine forces an Operator action to degrade into a Collaborator draft, requiring a human signature.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Tuning & Policies",
      description: "When an Admin updates a policy, they trigger a cascade of systemic realignments across the Autonomy Engine — not static backend settings.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Setup & Onboarding",
      description: "The active, continuous workflow of defining the physical and operational realities required for the Intelligence engines to function.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Living Curriculum & Pace",
      description: "Tracking the Delta — the gap between the static syllabus plan and the harsh reality of the school timetable.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Teacher Daily Teaching",
      description: "Ruthlessly eliminating the administration of pedagogy, leaving only human instruction. Optimized for the 45-Minute Window.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Principal Operations",
      description: "High-speed, high-density decision making driven by the Principal Agent — the ultimate arbiter of Trust in Mintrix.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Admin Operations",
      description: "Managing the grinding logistical and financial reality of the institution alongside the Admin Agent.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Student & Parent Workflows",
      description: "Consumers of Reality — interacting with the most compressed surfaces to reduce cognitive friction.",
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Product Workflows
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Operational <br /><span className="text-[#376851] italic font-light">Precision.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              End-to-end process flows covering approvals, intelligence tuning, curriculum pacing, and role-specific daily operations for every persona in the system.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/pcat-workflows.jpg" alt="Product Workflows" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e8da]/30 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Workflow Cards */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Workflow Index</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">8 Workflows</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((wf) => (
              <div key={wf.title} className="bg-[#f3f4f0] p-6 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-[#d2e8da] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-[#376851]">{wf.icon}</span>
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#191c1a]">{wf.title}</h3>
                <p className="text-xs text-[#414943] leading-relaxed">{wf.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">All Workflow Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflowDocs.map((doc) => (
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
