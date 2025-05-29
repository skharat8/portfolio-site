import wavingHand from "@images/waving-hand.svg";
import { MapPinned } from "lucide-react";

import styles from "./Hero.module.css";
import LiquidUnderline from "./LiquidUnderline";
import ProfilePhoto from "./ProfilePhoto";

function Hero() {
  return (
    <section
      id="home"
      className="flex-center-col mt-6 h-[90vh] justify-start gap-4 py-4 text-center md:mt-8"
    >
      <div className="flex-center-col w-full gap-6 sm:flex-row-reverse sm:justify-around">
        <div className="flex-center-col">
          <div className="flex-center text-xl md:text-3xl">
            Hi{" "}
            <img src={wavingHand} alt="Waving Hand" className={styles.wave} />
            <span className="ml-1">I'm</span>
          </div>
          <h1 className="text-5xl font-bold md:text-6xl">Smitesh Kharat</h1>
          <h2 className="text-xl md:text-3xl">Frontend React Developer</h2>

          <div className="mt-3 flex gap-2">
            <MapPinned />
            <span className="font-light text-slate-200">Bay Area, CA</span>
          </div>
        </div>

        <ProfilePhoto />
      </div>

      <p className="mt-6 text-lg text-slate-200 md:mt-8 md:text-xl">
        Passionate about software development, I'm a React developer with
        full-stack expertise. I enjoy crafting engaging experiences with{" "}
        <LiquidUnderline>attention to detail</LiquidUnderline> and building
        innovative modern web apps.
      </p>
    </section>
  );
}

export default Hero;
