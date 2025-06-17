import { useNavigate } from "@tanstack/react-router";

import profileJpg from "@images/profile.jpg";
import profileWebp from "@images/profile.webp";

import LiquidUnderline from "../LiquidUnderline";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";
import StarryBackground from "./StarryBackground";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="flex h-svh flex-col justify-start bg-gradient-to-b from-black via-slate-900
        via-70% to-slate-800 py-4 text-center"
    >
      <StarryBackground />

      <MaxWidthWrapper maxWidth="1200px" className="flex flex-col items-center">
        <div
          className="flex-center-col mt-8 w-full gap-6 md:mt-10 md:flex-row-reverse md:justify-around
            md:gap-8 lg:gap-11 xl:gap-12 2xl:gap-12"
        >
          <HeroTitle />

          <div className="z-2 h-40 w-40 rounded-full border-1 border-slate-800 hover:border-2">
            <picture>
              <source type="image/webp" srcSet={profileWebp} />
              <img
                src={profileJpg}
                alt="My profile picture"
                className="shadow-elevation-medium h-full w-full rounded-full object-cover
                  transition-transform duration-300 hover:scale-90
                  hover:shadow-[0_0_10px_10px_hsl(from_var(--color-slate-500)_h_s_l_/0.4)]
                  hover:duration-200"
              />
            </picture>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper
        maxWidth="650px"
        className="mt-4 flex flex-col items-center gap-6 md:mt-8"
      >
        <p className="text-lg text-slate-200 text-shadow-lg text-shadow-slate-950 md:text-xl">
          I'm a React developer with full-stack expertise. I enjoy crafting
          engaging experiences with{" "}
          <LiquidUnderline>attention to detail</LiquidUnderline> and building
          user friendly modern web apps.
        </p>

        <HeroButton onClick={() => navigate({ hash: "projects" })}>
          Explore
        </HeroButton>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;
