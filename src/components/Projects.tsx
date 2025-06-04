import firebirdHome from "@images/home-landscape.png";

import FirebirdTechStack from "./FirebirdTechStack";
import FirebirdTitle from "./FirebirdTitle";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-7">
      <MaxWidthWrapper maxWidth="1400px">
        <div className="mb-6 flex flex-col lg:mb-0">
          <FirebirdTitle />
          <p className="text-secondary-100 ml-1 italic lg:text-lg">
            A Modern Social Media Platform
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={firebirdHome}
                className="origin-[top_left] scale-[1.2] rounded-lg transition-transform hover:scale-[1.02]
                  focus:scale-[1.02]"
                alt="Home Page of the Firebird App"
              />
            </div>
          </div>

          <FirebirdTechStack className="flex-1" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Projects;
