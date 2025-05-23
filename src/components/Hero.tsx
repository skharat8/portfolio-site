import profile from "@images/profile.jpg";
import wavingHand from "@images/waving-hand.svg";
import { MapPinned } from "lucide-react";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="flex-center-col gap-4 pt-4 text-center">
      <div>
        <div className="flex-center text-xl">
          Hi <img src={wavingHand} alt="Waving Hand" className={styles.wave} />
          <span className="ml-1">I'm</span>
        </div>
        <h1 className="text-5xl font-bold">Smitesh Kharat</h1>
        <h2 className="text-xl">Frontend React Developer</h2>
      </div>

      <div className="flex gap-2">
        <MapPinned />
        <span className="font-light text-slate-200">Bay Area, CA</span>
      </div>

      <img
        src={profile}
        alt="My Profile Picture"
        className="w-70 rounded-[5000px_5000px_500px_500px] border-3 border-transparent ring-1
          ring-slate-800"
      />

      <p className="text-slate-200">
        I'm a frontend web developer with full-stack expertise. I enjoy crafting
        engaging experiences with great attention to detail.
      </p>
    </div>
  );
}

export default Hero;
