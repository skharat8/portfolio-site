import { createFileRoute } from "@tanstack/react-router";

import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}
