import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, User, Users, GraduationCap, ShieldCheck, School } from "lucide-react";

export default function PersonasPage() {
  const groupedDocs = getGroupedDocs();
  const personaDocs = groupedDocs
    .filter(g => g.superCategory === "Design" && g.category === "Personas and Journey")
    .flatMap(g => g.docs);

  const personas = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      name: "Student",
      description: "The learner at the center of the ecosystem. Surfaces are designed to reduce cognitive load and highlight agency.",
      color: "bg-[#a7dbbf]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Teacher",
      description: "The daily practitioner. Interfaces prioritize actionable insight and workflow efficiency over data overload.",
      color: "bg-[#d2e8da]",
    },
    {
      icon: <User className="w-6 h-6" />,
      name: "Parent",
      description: "The trust guardian. Transparency surfaces and consent flows build institutional confidence.",
      color: "bg-[#ffc1b4]",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      name: "Principal",
      description: "The governance authority. Triage flows and exception handling surfaces enable decisive leadership.",
      color: "bg-[#e7e9e5]",
    },
    {
      icon: <School className="w-6 h-6" />,
      name: "Admin",
      description: "The substrate architect. Setup, configuration, and policy management at the institutional level.",
      color: "bg-[#f3f4f0]",
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              User Personas
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Human <br /><span className="text-[#376851] italic font-light">Centered.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Every surface, interaction, and intelligence signal is designed for a specific person. Understanding our personas is the foundation of empathetic design.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#ffc1b4]/30 to-[#d2e8da]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-[#376851]/10 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Persona Cards */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">System Personas</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">5 Roles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona) => (
              <div key={persona.name} className="bg-[#f3f4f0] p-8 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className={`w-14 h-14 rounded-full ${persona.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-[#376851]">{persona.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#191c1a]">{persona.name}</h3>
                <p className="text-[#414943] leading-relaxed text-sm">{persona.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Persona Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personaDocs.map((doc) => (
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
