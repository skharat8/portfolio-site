import wavingHand from "@images/waving-hand.svg";
import { MapPinned } from "lucide-react";

import styles from "./HeroTitle.module.css";
import ParticleText from "./ParticleText";

function HeroTitle() {
  return (
    <div className="flex-center-col">
      <div className="flex-center text-xl md:text-3xl">
        Hi <img src={wavingHand} alt="Waving Hand" className={styles.wave} />
        <span className="ml-1">I'm</span>
      </div>

      <h1 className="flex flex-col">
        <ParticleText>Smitesh Kharat</ParticleText>
        <span className="pt-8 text-xl md:pt-9 md:text-3xl xl:pt-[7rem]">
          Frontend React Developer
        </span>
      </h1>

      <div className="mt-3 flex gap-2">
        <MapPinned />
        <span className="font-light text-slate-200">Bay Area, CA</span>
      </div>
    </div>
  );
}

export default HeroTitle;
