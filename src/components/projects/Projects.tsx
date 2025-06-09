import firebirdProfileJpg from "@images/firebird-profile.jpg";
import firebirdProfileWebp from "@images/firebird-profile.webp";
import firebirdHomePng from "@images/home-landscape.png";
import firebirdHomeWebp from "@images/home-landscape.webp";

import MaxWidthWrapper from "../MaxWidthWrapper";
import FirebirdFeatures from "./FirebirdFeatures";
import FirebirdTechStack from "./FirebirdTechStack";
import FirebirdTitle from "./FirebirdTitle";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-7">
      <MaxWidthWrapper maxWidth="1200px">
        <div className="mb-6 flex flex-col lg:mb-0">
          <FirebirdTitle />
          <p className="text-secondary-100 ml-1 italic lg:text-lg">
            A Modern Social Media Platform
          </p>
        </div>

        <div className="mb-4 flex flex-col gap-8 lg:mt-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <a href="https://project-firebird.vercel.app/login" target="_blank">
              <div className="h-[40vh] w-full overflow-hidden rounded-lg">
                <picture>
                  <source type="image/webp" src={firebirdHomeWebp} />
                  <img
                    src={firebirdHomePng}
                    className="origin-[top_left] scale-[1.2] rounded-lg transition-transform hover:scale-[1.02]
                      focus-visible:scale-[1.02]"
                    alt="Home page of the Firebird app"
                  />
                </picture>
              </div>
            </a>
            <div className="hidden h-[30vh] w-full overflow-hidden rounded-lg lg:block">
              <picture>
                <source type="image/webp" src={firebirdProfileWebp} />
                <img
                  src={firebirdProfileJpg}
                  className="-translate-y-2 rounded-lg"
                  alt="Snapshot of the profile page of the Firebird app"
                />
              </picture>
            </div>
          </div>

          <FirebirdTechStack className="flex-1" />
        </div>

        <FirebirdFeatures />
      </MaxWidthWrapper>
    </section>
  );
}

export default Projects;
