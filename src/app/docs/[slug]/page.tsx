import { MDXRemote } from 'next-mdx-remote/rsc';
import { getDocBySlug, getAllDocs, getGroupedDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mdxComponents } from '@/components/mdx';
import remarkGfm from 'remark-gfm';
import TableOfContents from '@/components/TableOfContents';
import { Clock, History, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);

  if (!doc) {
    return { title: 'Not Found' };
  }

  return { title: `${doc.title} | Mintrix Docs` };
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

function getReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

function getCategoryForDoc(title: string, groupedDocs: ReturnType<typeof getGroupedDocs>): { superCategory: string; category: string } | null {
  for (const group of groupedDocs) {
    if (group.docs.some(d => d.title === title)) {
      return { superCategory: group.superCategory, category: group.category };
    }
  }
  return null;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  const groupedDocs = getGroupedDocs();
  const docCategory = getCategoryForDoc(doc.title, groupedDocs);
  const readingTime = getReadingTime(doc.content);

  return (
    <div className="flex w-full">
      {/* Main Content */}
      <div className="flex-1 min-w-0 bg-white px-6 lg:px-12 py-12 lg:py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-medium text-[#414943] uppercase tracking-widest">
          <Link href="/" className="hover:text-[#376851] transition-colors">
            Docs
          </Link>
          <ChevronRight className="w-3 h-3 text-[#c0c9c2]" />
          {docCategory && (
            <>
              <span className="text-[#414943]/60">{docCategory.category}</span>
              <ChevronRight className="w-3 h-3 text-[#c0c9c2]" />
            </>
          )}
          <span className="text-[#376851] font-bold">{doc.title}</span>
        </nav>

        {/* Title & Metadata */}
        <header className="mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold tracking-tighter text-[#191c1a] leading-tight mb-6">
            {doc.title}
          </h1>
          <div className="flex items-center gap-6 text-[#414943] font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#717973]" />
              <span className="text-sm">{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-[#717973]" />
              <span className="text-sm">Updated recently</span>
            </div>
            {docCategory && (
              <span className="text-xs font-bold uppercase tracking-widest text-[#376851] bg-[#d2e8da] px-3 py-1 rounded-full">
                {docCategory.superCategory}
              </span>
            )}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose max-w-none w-full">
          <MDXRemote 
            source={doc.content} 
            components={mdxComponents as any} 
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>

        {/* Footer in content area */}
        <footer className="flex flex-col md:flex-row justify-between items-center w-full mt-24 py-12 border-t-0 text-xs uppercase tracking-widest bg-transparent">
          <div className="text-emerald-600/60">© 2024 Mintrix AI. Built for clarity.</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a className="text-emerald-600/60 hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Privacy</a>
            <a className="text-emerald-600/60 hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Terms</a>
            <a className="text-emerald-600/60 hover:text-emerald-800 underline underline-offset-4 transition-opacity" href="#">Github</a>
          </div>
        </footer>
      </div>

      {/* Table of Contents Sidebar */}
      <TableOfContents content={doc.content} />
    </div>
  );
}
