import MermaidDiagram from "./MermaidDiagram";
import SurfaceCard from "./SurfaceCard";
import FeatureGrid, { FeatureCard } from "./FeatureGrid";
import { ReactNode } from "react";

export const mdxComponents = {
  SurfaceCard,
  FeatureGrid,
  FeatureCard,
  h1: (props: any) => (
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#191c1a] mt-12 mb-8" {...props} />
  ),
  h2: (props: any) => {
    const text = typeof props.children === "string" ? props.children : "";
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return (
      <div className="mt-16 mb-8 group" id={id}>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#191c1a]" {...props} />
        <div className="mt-3 h-px bg-[#c0c9c2]/40 group-hover:bg-[#a7dbbf] transition-colors duration-500" />
      </div>
    );
  },
  h3: (props: any) => {
    const text = typeof props.children === "string" ? props.children : "";
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return (
      <h3
        id={id}
        className="text-xl md:text-2xl font-bold tracking-tight text-[#191c1a] mt-10 mb-5 flex items-center gap-3 before:content-[''] before:w-1.5 before:h-6 before:bg-[#376851] before:rounded-full before:inline-block"
        {...props}
      />
    );
  },
  p: (props: any) => (
    <p className="text-lg text-[#414943] leading-relaxed max-w-3xl mb-6 font-normal" {...props} />
  ),
  ul: (props: any) => (
    <ul className="space-y-3 my-6 ml-6 list-none" {...props} />
  ),
  ol: (props: any) => (
    <ol className="space-y-3 my-6 ml-6 list-decimal text-[#414943] marker:text-[#376851] marker:font-bold" {...props} />
  ),
  li: (props: any) => (
    <li className="relative pl-6 text-[#414943] before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#376851]" {...props} />
  ),
  table: (props: any) => (
    <div className="w-full overflow-x-auto my-12 rounded-2xl bg-white">
      <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="p-6 border-b border-[#e2e3df] bg-[#f3f4f0] text-xs tracking-widest uppercase font-bold text-[#414943]" {...props} />
  ),
  td: (props: any) => (
    <td className="p-6 border-b border-[#e2e3df] text-sm font-medium text-[#414943] align-top transition-colors" {...props} />
  ),
  blockquote: (props: any) => (
    <div className="relative border-l-4 border-[#376851] bg-[#d2e8da]/20 p-8 rounded-r-2xl my-10 group">
      <blockquote className="text-xl text-[#191c1a] italic font-medium relative z-10" {...props} />
    </div>
  ),
  hr: () => <hr className="my-16 border-t border-[#c0c9c2]/40" />,
  code: ({ className, children, ...props }: any) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-2 py-1 rounded-lg bg-[#d2e8da]/40 text-[#31624b] font-mono text-[0.9em]" {...props}>
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
  pre: ({ children }: any) => {
    const childProps = children?.props || {};
    const className = childProps.className || "";
    const match = /language-(\w+)/.exec(className);
    
    const codeString = String(childProps.children || "").replace(/\n$/, "");

    if (match && match[1] === "mermaid") {
      return <MermaidDiagram chart={codeString} />;
    }

    return (
      <div className="relative group my-8 rounded-2xl overflow-hidden">
        <div className="bg-[#181d1b] p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          {match && (
            <div className="text-right mb-3">
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase tracking-widest">{match[1]}</span>
            </div>
          )}
          <pre className="text-emerald-100/90">
            <code>{codeString}</code>
          </pre>
        </div>
      </div>
    );
  },
};
