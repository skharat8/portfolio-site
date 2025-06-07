import { createFileRoute } from "@tanstack/react-router";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
