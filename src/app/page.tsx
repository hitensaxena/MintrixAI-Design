import { getGroupedDocs } from '@/lib/docs';
import Image from "next/image";
import FilterableGrid from '@/components/FilterableGrid';

export default function Home() {
  const groupedDocs = getGroupedDocs();

  return (
    <div className="relative w-full min-h-screen max-w-[1200px] mx-auto py-24 px-6 lg:px-12">
      <div className="flex flex-col items-start max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center justify-center mb-2 rounded-[6px] w-[88px] h-[88px] relative shadow-2xl overflow-hidden">
          <Image src="/logo.png" alt="Mintrix Logo" fill className="object-cover" priority />
        </div>
        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-[#2d3335] font-plus-jakarta leading-[1.1] mb-6">
          Mintrix AI Design System
        </h1>
        <p className="text-xl md:text-2xl text-[#5a6062] leading-relaxed font-normal max-w-2xl mb-12">
          Explore the architecture, intelligent models, and comprehensive workflows behind Mintrix AI.
        </p>

        <FilterableGrid groupedDocs={groupedDocs} />
      </div>
    </div>
  );
}
