"use client";

import { useState, useEffect, useRef } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

function extractHeadings(markdown: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const lines = markdown.split("\n");
  let inCodeBlock = false;
  const idCounts = new Map<string, number>();

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/[*_`\[\]()]/g, "").trim();
      let id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      
      // Deduplicate IDs
      const count = idCounts.get(id) || 0;
      idCounts.set(id, count + 1);
      if (count > 0) {
        id = `${id}-${count}`;
      }

      headings.push({ id, text, level });
    }
  }
  return headings;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set default active heading
    if (headings.length > 0 && !activeId) {
      setActiveId(headings[0].id);
    }

    // Observe headings for scroll-spy
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-80px 0px -70% 0px",
      threshold: 0,
    });

    // Try to find heading elements in the DOM
    const timer = setTimeout(() => {
      const headingElements = document.querySelectorAll(
        "article h2, article h3"
      );
      headingElements.forEach((el) => {
        if (el.id) {
          observerRef.current?.observe(el);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [headings, activeId]);

  if (headings.length === 0) return null;

  return (
    <aside className="w-64 sticky top-28 h-[calc(100vh-8rem)] hidden xl:block pt-8 px-6">
      <h4 className="text-xs font-bold text-[#414943] uppercase tracking-[0.2em] mb-6">
        On this page
      </h4>
      <ul className="space-y-3 text-sm font-medium">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block transition-colors duration-200 ${
                heading.level === 3 ? "ml-4" : ""
              } ${
                activeId === heading.id
                  ? "text-[#376851] font-bold"
                  : "text-[#414943]/50 hover:text-[#191c1a]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveId(heading.id);
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Pro Tip Card */}
      <div className="mt-12 p-5 bg-[#ffc1b4]/20 rounded-2xl">
        <p className="text-xs font-bold text-[#7b4d43] uppercase mb-2">Pro Tip</p>
        <p className="text-xs text-[#7b4d43]/80 leading-relaxed">
          Use <code className="bg-white/50 px-1 rounded text-[10px]">surface-bright</code> for components that need to draw attention without heavy shadows.
        </p>
      </div>
    </aside>
  );
}
