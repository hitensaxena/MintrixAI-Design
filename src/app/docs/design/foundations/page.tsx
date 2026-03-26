import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, Palette, Type, Volume2, BookOpen, LayoutGrid, Sparkles } from "lucide-react";

export default function FoundationsPage() {
  const groupedDocs = getGroupedDocs();
  // Foundations maps to "Design Foundation" and "Design System" categories
  const foundationDocs = groupedDocs
    .filter(g => g.superCategory === "Design" && (g.category === "Design Foundation" || g.category === "Design System"))
    .flatMap(g => g.docs);

  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Design Philosophy",
      description: "The Editorial Intelligence framework — why Mintrix rejects traditional B2B SaaS paradigms. The No-Line Philosophy, Color Scarcity, Context Over Navigation, and Graceful Degradation.",
      accent: "bg-[#d2e8da]",
      iconColor: "text-[#31624b]",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Architecture",
      description: "The Spatial Substrate grayscales, Typographic Inks, and the Signal Layer. Color is reserved for operational signals — AI Signature blue, Judgment Amber, Rupture Crimson.",
      accent: "bg-[#d2e8da]",
      iconColor: "text-[#31624b]",
      swatches: ["#005bc1", "#f59e0b", "#dc2626", "#2d3335", "#eef1f3"],
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "Typography & Spacing",
      description: "Plus Jakarta Sans for editorial hierarchy, Inter for tabular data. Extreme scale shifts command attention during triage instead of relying on color.",
      accent: "bg-[#a7dbbf]",
      iconColor: "text-[#31624b]",
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Layout & Spatial Model",
      description: "The 12-column responsive grid, 4px spacing scale, Surface Container Model, and content density zones — from ambient awareness to emergency execution.",
      accent: "bg-[#d2e8da]",
      iconColor: "text-[#31624b]",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Motion & Transitions",
      description: "The Calm Machine philosophy. Duration tokens from instant (100ms) to ambient (1000ms). Confidence-driven motion that accelerates with urgency.",
      accent: "bg-[#a7dbbf]",
      iconColor: "text-[#31624b]",
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Voice & Tone",
      description: "The Quiet Operator personality — clinical but not cold, decisive but not arrogant. Contextual tone shifting per persona from supportive teacher to authoritative principal.",
      accent: "bg-[#ffc1b4]",
      iconColor: "text-[#7b4d43]",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Interface Components",
      description: "Highly-reusable building blocks: Event Cards, Segmented Controls, Comparison Views. Mintrix varies data inside components instead of building 50 different styles.",
      accent: "bg-[#d2e8da]",
      iconColor: "text-[#31624b]",
    },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#a7dbbf] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Design Foundations
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Core <br /><span className="text-[#376851] italic font-light">Architecture.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              The atomic design principles governing every pixel of the Mintrix AI OS. From the No-Line Philosophy to confidence-driven motion — these documents define why the interface looks and feels the way it does.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/cat-foundations.jpg" alt="Core Architecture Visual" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#376851]/20 to-[#815248]/10 mix-blend-multiply" />
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Design Pillars</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">7 Pillars</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-[#f3f4f0] p-8 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
                <div className={`w-12 h-12 rounded-full ${pillar.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <span className={pillar.iconColor}>{pillar.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#191c1a]">{pillar.title}</h3>
                <p className="text-sm text-[#414943] leading-relaxed mb-4">{pillar.description}</p>
                {pillar.swatches && (
                  <div className="flex gap-2">
                    {pillar.swatches.map((color) => (
                      <div key={color} className="w-5 h-5 rounded-full ring-1 ring-black/5" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Documents */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Foundation Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foundationDocs.map((doc) => (
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

        {/* Philosophy Quote */}
        <section className="mb-16 flex justify-end">
          <div className="bg-[#e2e3df] p-12 lg:p-16 rounded-2xl w-full md:w-4/5 relative overflow-hidden">
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight leading-tight text-[#191c1a] italic mb-8">
                &ldquo;If a Mintrix screen looks like a rainbow, the designer has failed. The screen must look like a pristine architectural blueprint, punctuated only by actionable color signals.&rdquo;
              </p>
              <cite className="not-italic">
                <p className="font-bold text-[#191c1a]">Design Foundation & Philosophy</p>
                <p className="text-sm uppercase tracking-widest text-[#414943]">Core Principle — High-Contrast Semantics</p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
