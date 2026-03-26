import Image from "next/image";
import Link from "next/link";
import { getGroupedDocs } from "@/lib/docs";
import { ArrowRight, Puzzle } from "lucide-react";

export default function ComponentsPage() {
  const groupedDocs = getGroupedDocs();
  const componentDocs = groupedDocs
    .filter(g => g.superCategory === "Design" && g.category === "Components")
    .flatMap(g => g.docs);

  return (
    <div className="flex-1 min-w-0 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-12 items-end mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#d2e8da] text-[#1e4f3a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Component Library
            </span>
            <h1 className="text-[4rem] lg:text-[5rem] leading-[0.9] font-extrabold tracking-tighter text-[#191c1a] mb-8">
              Building <br /><span className="text-[#376851] italic font-light">Blocks.</span>
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Highly-reusable, LEGO-like building blocks that assemble to create Surfaces. Mintrix uses very few unique components — it varies the data inside them instead of building 50 different styles.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden relative group">
            <Image src="/cat-components.jpg" alt="Interactive Building Blocks" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e8da]/30 to-transparent mix-blend-multiply" />
          </div>
        </section>

        {/* Featured: Event Cards */}
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#191c1a]">Core Component</h2>
            <div className="h-px flex-grow mx-8 bg-[#e7e9e5]" />
            <span className="text-sm font-bold text-[#376851] uppercase tracking-widest">Atomic Unit</span>
          </div>
          <div className="bg-[#f3f4f0] p-10 rounded-2xl group hover:bg-[#e7e9e5] transition-colors duration-500">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-2">
                <div className="w-16 h-16 rounded-2xl bg-[#d2e8da] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Puzzle className="w-8 h-8 text-[#376851]" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-2xl font-bold mb-3 text-[#191c1a]">Event Cards</h3>
                <p className="text-[#414943] leading-relaxed">
                  The fundamental atomic unit of information in the Mintrix UI. The application rarely uses dense narrative text — data, actions, logic, and intelligence are all packaged into standardized, self-contained <code className="text-[#376851] bg-[#d2e8da]/30 px-1.5 py-0.5 rounded text-sm">&lt;SurfaceCards&gt;</code>.
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 flex justify-end">
                {componentDocs.length > 0 && (
                  <Link
                    href={`/docs/${componentDocs[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#376851] text-white rounded-full text-sm font-bold hover:bg-[#2d5543] transition-colors"
                  >
                    Read Specs <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#191c1a]">Component Documents</h2>
            <div className="h-px bg-[#c0c9c2]/30 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {componentDocs.map((doc) => (
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
