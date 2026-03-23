import { MDXRemote } from 'next-mdx-remote/rsc';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mdxComponents } from '@/components/mdx';
import remarkGfm from 'remark-gfm';

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

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocBySlug(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-6 lg:px-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-14 pb-8 border-b border-[#CAC4D0]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1C1B1F] mb-2" style={{lineHeight: 1.15}}>
          {doc.title}
        </h1>
      </div>

      <article className="prose max-w-none w-full">
        <MDXRemote 
          source={doc.content} 
          components={mdxComponents as any} 
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
    </div>
  );
}
