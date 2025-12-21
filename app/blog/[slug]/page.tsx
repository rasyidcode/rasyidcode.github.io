import posts from '@/data/posts';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
        <article className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-slate-400 mb-6">{post.date}</p>
            <div className="text-slate-200 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
  );
}
