import Header from "@/app/components/Header";
import BlogIndex from "@/app/components/BlogIndex";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

export default function Page() {
  return (
    <>
      <Header/>
      <main className="max-w-3xl mx-auto px-4">
        <BlogIndex />
        <About />
        <Contact />
      </main>
    </>
  );
}
 
