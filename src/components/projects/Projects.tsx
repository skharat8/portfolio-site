import firebirdProfileJpg from "@images/firebird-profile.jpg";
import firebirdProfileWebp from "@images/firebird-profile.webp";
import firebirdHomePng from "@images/home-landscape.png";
import firebirdHomeWebp from "@images/home-landscape.webp";
import { motion } from "motion/react";

import MaxWidthWrapper from "../MaxWidthWrapper";
import FirebirdFeatures from "./FirebirdFeatures";
import FirebirdTechStack from "./FirebirdTechStack";
import FirebirdTitle from "./FirebirdTitle";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-7 overflow-x-clip">
      <MaxWidthWrapper maxWidth="1200px">
        <div className="mb-6 flex flex-col lg:mb-0">
          <FirebirdTitle />
          <p className="text-secondary-100 ml-1 italic lg:text-lg">
            A Modern Social Media Platform
          </p>
        </div>

        <div className="mb-4 flex flex-col gap-7 lg:mt-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <motion.div
              className="group relative w-full overflow-hidden rounded-lg"
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <picture>
                <source type="image/webp" srcSet={firebirdHomeWebp} />
                <img
                  src={firebirdHomePng}
                  className="origin-[top_left] rounded-lg"
                  alt="Home page of the Firebird app"
                />
              </picture>
            </motion.div>

            <motion.div
              className="hidden h-[30vh] w-full overflow-hidden rounded-lg lg:block"
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <picture>
                <source type="image/webp" srcSet={firebirdProfileWebp} />
                <img
                  src={firebirdProfileJpg}
                  className="-translate-y-2 rounded-lg"
                  alt="Snapshot of the profile page of the Firebird app"
                />
              </picture>
            </motion.div>
          </div>

          <FirebirdTechStack className="flex-1" />
        </div>

        <FirebirdFeatures />
      </MaxWidthWrapper>
    </section>
  );
}

export default Projects;
