import FirebirdTechStack from "./FirebirdTechStack";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-7 py-6">
      <MaxWidthWrapper maxWidth="800px">
        <FirebirdTechStack />
      </MaxWidthWrapper>
    </section>
  );
}

export default Projects;
