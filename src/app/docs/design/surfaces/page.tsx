import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, Rss, Inbox, AlertTriangle, ScrollText, BarChart3, Wrench, UserCog, Compass, GitFork } from "lucide-react";

export default function SurfacesPage() {
  const groupedDocs = getGroupedDocs();
  const surfaceDocs = groupedDocs
    .filter(g => g.superCategory === "Design" && (g.category === "Surfaces" || g.category === "Navigation"))
    .flatMap(g => g.docs);

  const surfaces = [
    {
      icon: <Rss className="w-6 h-6" />,
      title: "Daily Feed",
      description: "The primary ambient awareness surface — an ephemeral, chronologically sorted array of Event Cards for the next 24 hours.",
    },
    {
      icon: <Inbox className="w-6 h-6" />,
      title: "Approval Inbox",
      description: "The ultimate structural chokepoint of Trust where the AI surrenders Autonomy and asks a human for a signature.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Exception Center",
      description: "The emergency room — handling catastrophic reality failures the AI cannot physically solve due to conflicting variables.",
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "Transparency Log",
      description: "An immutable receipt ledger. Every action by a human or Agent is physically written here to eliminate the Black Box problem.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Role-Based Dashboard",
      description: "The passive observation surface for macroscopic analysis, primarily accessed by School Leadership.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Workspace",
      description: "The heavy execution surface for altering Setup Architecture or Living Curriculum State — timetables, grades, lesson plans.",
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "User Profile & Settings",
      description: "The personalized control center governing notification cadence, historical access, and account security.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Primary Navigation",
      description: "The persistent, global skeletal frame allowing users to traverse the physical architecture of Mintrix.",
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      title: "Surface-based Navigation",
      description: "Contextual Routing — drilling downward into specific data relationships within the boundaries of a single surface.",
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              UI Surfaces
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Living <br /><span className="text-[#376851] italic font-light">Surfaces.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              The tangible screens where intelligence meets interaction. Each surface is designed for a specific cognitive mode — from ambient awareness to high-friction decision-making.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group bg-gradient-to-br from-[#d2e8da] to-[#e7e9e5]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-[#376851]/10 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Surface Index */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Surface Index</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">9 Surfaces</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface) => (
              <div key={surface.title} className="bg-[#f3f4f0] p-6 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-[#d2e8da] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-[#376851]">{surface.icon}</span>
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#191c1a]">{surface.title}</h3>
                <p className="text-xs text-[#414943] leading-relaxed">{surface.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Surface Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {surfaceDocs.map((doc) => (
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
