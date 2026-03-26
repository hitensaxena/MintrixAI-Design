import Sidebar from "@/components/Sidebar";
import { getGroupedDocs } from "@/lib/docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groupedDocs = getGroupedDocs();

  return (
    <div className="flex min-h-screen">
      <Sidebar groupedDocs={groupedDocs} />
      <main className="flex-1 min-w-0 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
