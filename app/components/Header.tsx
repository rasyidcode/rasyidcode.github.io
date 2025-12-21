export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between py-4">
        <a className="text-white font-semibold text-lg" href="/">Rasyid</a>
        <nav className="flex items-center">
          <a className="text-slate-400 hover:text-white ml-4" href="/">Blog</a>
          <a className="text-slate-400 hover:text-white ml-4" href="#about">About</a>
          <a className="text-slate-400 hover:text-white ml-4" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
