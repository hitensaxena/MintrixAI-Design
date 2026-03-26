import Image from "next/image";

export default function PatternsPage() {
  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Design Patterns
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Tactile <br /><span className="text-[#376851] italic font-light">Patterns.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Recurring solutions for surfaces, interactions, and data display. Each pattern encodes the philosophy of calm intelligence.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/cat-patterns.jpg" alt="Tactile Patterns" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#376851]/15 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Empty State */}
        <section className="mb-24">
          <div className="bg-[#f3f4f0] p-16 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#d2e8da] flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🧩</span>
            </div>
            <h2 className="text-2xl font-bold text-[#191c1a] mb-4">Coming Soon</h2>
            <p className="text-[#414943] max-w-md mx-auto leading-relaxed">
              Pattern documentation is currently in progress. Check back soon for interaction patterns, layout recipes, and data display templates.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
