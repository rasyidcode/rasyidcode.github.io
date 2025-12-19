import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

export default function Page() {
  return (
    <>
      <Header/>
      <main className="container">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
