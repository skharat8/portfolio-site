import { useNavigate } from "@tanstack/react-router";
import React from "react";

import profileJpg from "@images/profile.jpg";
import profileWebp from "@images/profile.webp";

import { getIsMobileInitialState } from "@/utils/common.utils";

import LiquidUnderline from "../LiquidUnderline";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";
import StarryBackground from "./StarryBackground";

function Hero() {
  const navigate = useNavigate();
  const [isMobile, _] = React.useState(getIsMobileInitialState);
  const hoverEffectForProfilePic = isMobile
    ? ""
    : `hover:shadow-[0_0_10px_10px_hsl(from_var(--color-slate-500)_h_s_l_/0.4)]
       hover:duration-200 motion-safe:hover:scale-90`;

  return (
    <section
      id="home"
      className="flex min-h-svh flex-col justify-start bg-gradient-to-b from-black via-slate-900
        via-70% to-slate-800 p-4 text-center"
    >
      <StarryBackground />

      <MaxWidthWrapper maxWidth="1200px" className="flex flex-col items-center">
        <div
          className="flex-center-col mt-8 w-full gap-6 md:gap-7 lg:mt-10 lg:flex-row-reverse
            lg:justify-around lg:gap-11 xl:gap-12 2xl:gap-12"
        >
          <HeroTitle />

          <div className="z-2 h-40 w-40 rounded-full border-1 border-slate-800 hover:border-2">
            <picture>
              <source type="image/webp" srcSet={profileWebp} />
              <img
                src={profileJpg}
                alt="My profile picture"
                onContextMenu={(e) => e.preventDefault()}
                className={`shadow-elevation-medium h-full w-full rounded-full object-cover
                  transition-transform duration-300 select-none ${hoverEffectForProfilePic}
                  active:shadow-[0_0_10px_10px_hsl(from_var(--color-slate-500)_h_s_l_/0.4)]
                  active:duration-200 motion-safe:active:scale-90`}
              />
            </picture>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper
        maxWidth="650px"
        className="flex flex-col items-center gap-6 md:gap-7 lg:mt-8"
      >
        <p className="z-2 text-lg text-slate-200 text-shadow-lg text-shadow-slate-950 md:text-xl">
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
