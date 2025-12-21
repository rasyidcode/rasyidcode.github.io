export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Hi — I'm Ahmad Jamil Al Rasyid</h1>
        <p className="text-slate-400 mb-4">I build web apps and developer tools. I focus on TypeScript, Next.js, and good UX.</p>
        <p>
          <a className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded" href="#blog">See posts</a>
        </p>
      </div>
    </section>
  );
}
