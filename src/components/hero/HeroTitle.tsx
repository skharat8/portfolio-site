import wavingHand from "@images/waving-hand.svg";
import { MapPinned } from "lucide-react";

import styles from "./HeroTitle.module.css";

function HeroTitle() {
  return (
    <div className="flex-center-col">
      <div className="flex-center text-xl md:text-3xl">
        Hi <img src={wavingHand} alt="Waving Hand" className={styles.wave} />
        <span className="ml-1">I'm</span>
      </div>

      <h1 className="flex flex-col">
        <span className="text-5xl font-bold md:text-6xl">Smitesh Kharat</span>
        <span className="text-xl md:text-3xl">Frontend React Developer</span>
      </h1>

      <div className="mt-3 flex gap-2">
        <MapPinned />
        <span className="font-light text-slate-200">Bay Area, CA</span>
      </div>
    </div>
  );
}

export default HeroTitle;
