import MermaidDiagram from "./MermaidDiagram";
import SurfaceCard from "./SurfaceCard";
import FeatureGrid, { FeatureCard } from "./FeatureGrid";
import { Quote } from "lucide-react";
import { ReactNode } from "react";

export const mdxComponents = {
  SurfaceCard,
  FeatureGrid,
  FeatureCard,
  h1: (props: any) => (
    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1c1e] mt-12 mb-8" {...props} />
  ),
  h2: (props: any) => (
    <div className="mt-16 mb-8 group flex items-center gap-4">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1a1c1e]" {...props} />
      <div className="flex-1 h-px bg-[#e1e2e8] group-hover:bg-indigo-200 transition-colors duration-500" />
    </div>
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1c1e] mt-10 mb-5 flex items-center gap-3 before:content-[''] before:w-1.5 before:h-6 before:bg-indigo-600 before:rounded-full before:inline-block" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg text-[#44474e] leading-relaxed max-w-3xl mb-6 font-normal" {...props} />
  ),
  ul: (props: any) => (
    <ul className="space-y-3 my-6 ml-6 list-none" {...props} />
  ),
  ol: (props: any) => (
    <ol className="space-y-3 my-6 ml-6 list-decimal text-[#44474e] marker:text-indigo-600 marker:font-bold" {...props} />
  ),
  li: (props: any) => (
    <li className="relative pl-6 text-[#44474e] before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-500" {...props} />
  ),
  table: (props: any) => (
    <div className="w-full overflow-x-auto my-12 rounded-[1.5rem] border border-[#e1e2e8] shadow-sm bg-white group hover:border-[#c4c7c5] transition-colors duration-500">
      <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="p-6 border-b border-[#e1e2e8] bg-[#fdfcff] text-xs tracking-widest uppercase font-bold text-[#74777f]" {...props} />
  ),
  td: (props: any) => (
    <td className="p-6 border-b border-[#e1e2e8] text-sm font-medium text-[#44474e] align-top transition-colors" {...props} />
  ),
  blockquote: (props: any) => (
    <div className="relative border-l-4 border-indigo-600 bg-indigo-50 p-8 rounded-r-3xl my-10 group">
      <Quote className="absolute right-8 top-8 w-12 h-12 text-indigo-200 transition-colors duration-500" />
      <blockquote className="text-xl text-[#1a1c1e] italic font-medium relative z-10" {...props} />
    </div>
  ),
  hr: () => <hr className="my-16 border-t border-[#e1e2e8]" />,
  code: ({ className, children, ...props }: any) => {
    // Inline code
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-mono text-[0.9em] border border-indigo-100" {...props}>
          {children}
        </code>
      );
    }
    // Code block inside pre (handled below in pre)
    return <code className={className} {...props}>{children}</code>;
  },
  pre: ({ children }: any) => {
    // Extract className from nested code element
    const childProps = children?.props || {};
    const className = childProps.className || "";
    const match = /language-(\w+)/.exec(className);
    
    const codeString = String(childProps.children || "").replace(/\n$/, "");

    if (match && match[1] === "mermaid") {
      return <MermaidDiagram chart={codeString} />;
    }

    return (
      <div className="relative group my-8 rounded-2xl overflow-hidden border border-[#e1e2e8] shadow-sm">
        <div className="absolute top-0 left-0 w-full h-10 bg-[#fdfcff] flex items-center px-4 border-b border-[#e1e2e8]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {match && (
            <div className="ml-auto text-xs font-mono text-[#74777f] uppercase tracking-widest">{match[1]}</div>
          )}
        </div>
        <pre className={`p-6 pt-16 bg-[#f3f4F9] overflow-x-auto text-sm font-mono text-[#1a1c1e] ${className}`}>
          <code>{codeString}</code>
        </pre>
      </div>
    );
  },
};
