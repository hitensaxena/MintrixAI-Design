import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#f9faf6]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#f9faf6]">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16 lg:py-0">
          <div className="z-10 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#a7dbbf] text-[#31624b] text-sm font-bold tracking-widest uppercase">
              Introducing Mintrix v2.4
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#191c1a] leading-[1.1] tracking-tighter">
              Crafting the <span className="text-[#376851] italic">Fluid</span> Intelligence.
            </h1>
            <p className="text-xl text-[#414943] max-w-xl leading-relaxed">
              Mintrix AI is an editorial-first intelligence platform. We bridge the gap between complex neural patterns and tactile, human-centric design.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="/docs/Product%20Brief"
                className="bg-[#376851] text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity inline-block"
              >
                Explore Docs
              </Link>
              <Link
                href="/docs/Design%20Foundation%20and%20Philosophy"
                className="text-[#376851] font-bold text-lg flex items-center gap-2 group"
              >
                The Design Ethos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a7dbbf]/20 to-[#d2e8da]/30 blur-3xl rounded-full" />
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-[#f3f4f0]">
              <Image
                src="/hero-abstract.jpg"
                alt="3D Abstract Visual"
                fill
                className="object-cover grayscale-[0.2] contrast-[1.1]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight (Asymmetrical Layout) */}
      <section className="py-24 lg:py-32 bg-[#f3f4f0]">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#191c1a]">Feature Spotlight</h2>
            <p className="text-[#414943] text-lg max-w-2xl">A new perspective on documentation. Where every pattern tells a story of intentionality.</p>
          </div>
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {/* Large Card */}
            <div className="col-span-12 lg:col-span-7 bg-white rounded-2xl p-10 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px] shadow-sm">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#d2e8da] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#376851]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
                  </svg>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#191c1a]">Foundational Architecture</h3>
                <p className="text-[#414943] text-lg leading-relaxed max-w-lg">
                  Our core systems are built on a &ldquo;Soft Editorial&rdquo; framework. This ensures that even the most complex data structures are presented with clarity and warmth.
                </p>
              </div>
              <div className="pt-10 lg:pt-12">
                <Link
                  href="/docs/System%20Architecture"
                  className="bg-[#d2e8da] text-[#31624b] px-6 py-3 rounded-full font-bold hover:bg-[#a7dbbf] transition-colors inline-block"
                >
                  View Blueprint
                </Link>
              </div>
            </div>
            {/* Medium Column */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              <div className="bg-[#a7dbbf] text-[#31624b] rounded-2xl p-8 lg:p-10 flex-1 relative overflow-hidden">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">Smart Components</h3>
                <p className="relative z-10 opacity-90 mb-8">Modular blocks designed to respond to the semantic intent of your content.</p>
                <svg className="absolute -bottom-4 -right-4 w-28 h-28 opacity-20 rotate-12 text-[#31624b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
              </div>
              <div className="bg-[#e2e3df] rounded-2xl p-8 lg:p-10 flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#191c1a] mb-4">Tactile Patterns</h3>
                <p className="text-[#414943]">Interactions that feel physical. Soft shadows and tonal shifts guide the user through the documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Journal (Editorial Post Previews) */}
      <section className="py-24 lg:py-32 bg-[#f9faf6]">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#191c1a]">Studio Journal</h2>
              <p className="text-[#414943] text-lg">Dispatches from the intersection of design and intelligence.</p>
            </div>
            <Link
              href="#"
              className="text-[#376851] font-bold flex items-center gap-2 group border-b-2 border-[#376851] pb-1 shrink-0"
            >
              View All Stories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Post 1 */}
            <Link href="/docs/Design%20Foundation%20and%20Philosophy" className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#edeeeb] mb-6">
                <Image
                  src="/journal-1.jpg"
                  alt="Design Philosophy"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#376851] uppercase">Design Philosophy</span>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-[#376851] transition-colors">The Art of the Soft Border</h4>
                <p className="text-[#414943] line-clamp-2">Why we replaced 1px lines with tonal layers to create breathable digital interfaces.</p>
              </div>
            </Link>
            {/* Post 2 (Staggered — offset down) */}
            <Link href="/docs/User%20Personas%20and%20Journeys" className="group cursor-pointer lg:translate-y-12">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#edeeeb] mb-6">
                <Image
                  src="/journal-2.jpg"
                  alt="AI & Ethics"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#376851] uppercase">AI &amp; Ethics</span>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-[#376851] transition-colors">Human-in-the-Loop Documentation</h4>
                <p className="text-[#414943] line-clamp-2">Exploring how LLMs can assist in writing docs that feel written by humans, for humans.</p>
              </div>
            </Link>
            {/* Post 3 */}
            <Link href="/docs/Product%20Brief" className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#edeeeb] mb-6">
                <Image
                  src="/journal-3.jpg"
                  alt="Updates"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#376851] uppercase">Updates</span>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-[#376851] transition-colors">What&apos;s New in v2.4.0</h4>
                <p className="text-[#414943] line-clamp-2">A deep dive into the latest pattern libraries and structural improvements in Mintrix.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA (Editorial Inset) */}
      <section className="py-24 lg:py-32 bg-[#f9faf6]">
        <div className="max-w-screen-2xl mx-auto px-8 relative">
          <div className="bg-[#e2e3df] rounded-2xl p-12 lg:p-20 ml-auto w-full lg:w-3/4 shadow-sm">
            <div className="max-w-xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#191c1a]">Stay in the flow.</h2>
              <p className="text-[#414943] text-xl">Join our monthly digest of design patterns, technical deep dives, and studio updates.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#376851] transition-all text-[#191c1a] placeholder:text-[#414943]/50"
                  placeholder="Your studio email"
                  type="email"
                />
                <button className="bg-[#376851] text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-50/80">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full py-12 text-xs uppercase tracking-widest text-emerald-800/60">
          <div className="mb-6 md:mb-0">
            © 2024 Mintrix AI. Built for clarity.
          </div>
          <div className="flex gap-8">
            <a className="hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Privacy</a>
            <a className="hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Terms</a>
            <a className="hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Github</a>
            <a className="hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
