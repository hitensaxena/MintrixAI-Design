"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";
import { Loader2, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  fontFamily: "var(--font-geist-sans), sans-serif",
  securityLevel: "loose",
  flowchart: {
    htmlLabels: true,
    curve: "basis",
  },
});

export default function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const renderChart = async () => {
      try {
        if (!chart) return;
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        
        if (mounted) {
          setSvg(svg);
        }
      } catch (e) {
        console.error("Mermaid parsing error:", e);
        if (mounted) setError(true);
      }
    };

    renderChart();

    return () => {
      mounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl my-8 text-sm font-mono flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Failed to render diagram
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="flex flex-col items-center justify-center p-16 my-12 bg-white/5 border border-white/10 rounded-3xl animate-pulse">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-400 mb-4" />
        <span className="text-white/40 text-sm tracking-widest uppercase font-semibold">Generating Flowchart</span>
      </div>
    );
  }

  return (
    <div className="w-full relative group my-12 m3-surface-card bg-white min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] -z-10 group-hover:bg-indigo-200 transition-colors duration-1000 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px] -z-10 group-hover:bg-purple-100 transition-colors duration-1000 pointer-events-none opacity-50" />
      
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider uppercase rounded-lg border border-indigo-100 flex items-center shadow-sm mr-2">
                Pan & Zoom
              </div>
              <button onClick={() => zoomIn()} className="p-2 bg-white hover:bg-indigo-50 border border-[#e1e2e8] active:bg-indigo-100 rounded-lg text-[#44474e] transition shadow-sm">
                <ZoomIn className="w-4 h-4" />
              </button>
              <button onClick={() => zoomOut()} className="p-2 bg-white hover:bg-indigo-50 border border-[#e1e2e8] active:bg-indigo-100 rounded-lg text-[#44474e] transition shadow-sm">
                <ZoomOut className="w-4 h-4" />
              </button>
              <button onClick={() => resetTransform()} className="p-2 bg-white hover:bg-indigo-50 border border-[#e1e2e8] active:bg-indigo-100 rounded-lg text-[#44474e] transition shadow-sm">
                <Maximize className="w-4 h-4" />
              </button>
            </div>
            
            <TransformComponent 
              wrapperStyle={{ width: "100%", height: "600px", cursor: "grab" }} 
              contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div 
                className="mermaid-container w-full h-full flex items-center justify-center [&>svg]:min-w-[1200px] [&>svg]:w-full [&>svg]:max-w-none [&>svg]:h-auto transition-opacity duration-700 ease-out"
                dangerouslySetInnerHTML={{ __html: svg }} 
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
