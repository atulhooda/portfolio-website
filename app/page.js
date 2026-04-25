import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ContactForm />
      <Contact />
    </main>
  );
}
