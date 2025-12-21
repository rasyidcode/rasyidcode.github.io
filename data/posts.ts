const posts = [
  {
    slug: 'welcome',
    title: 'Welcome — My new blog',
    date: '2025-12-21',
    excerpt: 'Introducing this blog — notes about web development and open-source.',
    content: `
      <p>Welcome to my blog. I plan to write about JavaScript, TypeScript, Next.js and developer tools.</p>
      <h2>What to expect</h2>
      <ul>
        <li>Short tutorials</li>
        <li>Project write-ups</li>
        <li>Tooling tips</li>
      </ul>
    `,
  },
  {
    slug: 'first-project',
    title: 'Building a minimal blog with Next.js',
    date: '2025-12-21',
    excerpt: 'How I converted my portfolio to a simple blog using the app router.',
    content: `
      <p>This post shows the minimal steps I took to turn a portfolio into a blog using server components and a small posts data file.</p>
      <p>Keep posts as HTML or add a markdown parser for nicer authoring.</p>
    `,
  }
];

export default posts;
