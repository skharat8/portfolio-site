import LiquidUnderline from "../LiquidUnderline";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HeroTitle from "./HeroTitle";
import ProfilePhoto from "./ProfilePhoto";
import StarryBackground from "./StarryBackground";

function Hero() {
  return (
    // <StarryBackground>
    <section
      id="home"
      className="flex-center-col h-svh justify-start gap-4 bg-gradient-to-b from-black
        via-slate-900 via-70% to-slate-800 py-4 text-center"
    >
      <MaxWidthWrapper maxWidth="1200px">
        <div
          className="flex-center-col mt-8 w-full gap-6 md:mt-10 md:flex-row-reverse md:justify-around
            md:gap-8 lg:gap-11 xl:gap-12 2xl:gap-12"
        >
          <HeroTitle />
          <ProfilePhoto />
        </div>

        <MaxWidthWrapper maxWidth="650px">
          <p
            className="mt-6 text-lg text-slate-200 text-shadow-lg text-shadow-slate-950 md:mt-8
              md:text-xl"
          >
            I'm a React developer with full-stack expertise. I enjoy crafting
            engaging experiences with{" "}
            <LiquidUnderline>attention to detail</LiquidUnderline> and building
            user friendly modern web apps.
          </p>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </section>
    // </StarryBackground>
  );
}

export default Hero;
