import Link from 'next/link';
import posts from '../../data/posts';

export default function BlogIndex() {
  return (
    <section id="blog" className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Latest posts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <h3 className="text-lg font-medium">
                <Link href={`/blog/${post.slug}`} className="text-white hover:underline">{post.title}</Link>
              </h3>
              <p className="text-sm text-slate-400 mt-1">{post.date} — {post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
