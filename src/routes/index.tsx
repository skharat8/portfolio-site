import { createFileRoute } from "@tanstack/react-router";

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
    </main>
  );
}
