"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TopNav() {
  const pathname = usePathname();
  const isProduct = pathname.startsWith("/docs/product") || pathname === "/docs/Product" || (pathname.startsWith("/docs/") && !pathname.startsWith("/docs/design"));
  const isDesign = pathname.startsWith("/docs/design") || pathname === "/docs/Design";
  const isHome = pathname === "/";
  
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b-0">
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden shadow-sm relative">
              <Image src="/mintrix-logo.svg" alt="Mintrix" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold text-emerald-900 tracking-tighter hidden sm:inline">
              Mintrix AI
            </span>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-base tracking-tight">
          <Link
            href="/docs/product/foundations"
            className={`transition-colors duration-300 ${
              isProduct && !isHome
                ? "text-emerald-900 font-bold border-b-2 border-emerald-600 pb-1"
                : "text-emerald-700/70 hover:text-emerald-900"
            }`}
          >
            Product
          </Link>
          <Link
            href="/docs/design/foundations"
            className={`transition-colors duration-300 ${
              isDesign
                ? "text-emerald-900 font-bold border-b-2 border-emerald-600 pb-1"
                : "text-emerald-700/70 hover:text-emerald-900"
            }`}
          >
            Design
          </Link>
          <span className="text-emerald-700/70 hover:text-emerald-900 transition-colors cursor-pointer">
            Updates
          </span>
        </div>

        {/* Spacer for layout balance */}
        <div className="w-9" />
      </div>
    </nav>
  );
}
