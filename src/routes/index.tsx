import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="m-auto max-w-[800px] p-6">
      <Hero />
      <Projects />
    </div>
  );
}
