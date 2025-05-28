import React from "react";

import pixelGlasses from "@images/pixel-glasses.svg";
import profile from "@images/profile.jpg";
import wavingHand from "@images/waving-hand.svg";
import { MapPinned } from "lucide-react";
import { type Variants, motion, useMotionValue } from "motion/react";

import styles from "./Hero.module.css";

const drawShape: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: [0, 1],
    opacity: [1, 1],
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 100,
      restDelta: 0.01,
    },
  },
};

function Hero() {
  const [glassesOn, setGlassesOn] = React.useState(false);
  const pathLength = useMotionValue(0);

  React.useEffect(() => {
    const unsubscribe = pathLength.on("animationComplete", () => {
      if (pathLength.get() >= 0.98) {
        setGlassesOn((prev) => !prev);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section
      id="home"
      className="flex-center-col h-[90vh] justify-start gap-4 py-4 text-center"
    >
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

      <div className="relative mb-6 h-40 w-40 rounded-full border-1 border-slate-800">
        <img
          src={profile}
          alt="My profile picture"
          className="absolute h-full w-full rounded-full object-cover"
        />

        <img
          src={pixelGlasses}
          alt="Pixelated black sunglasses appears on my profile picture"
          className={`absolute top-[1.75rem] left-6 w-[5.5rem] scale-95 ${glassesOn ? "" : "hidden"}`}
        />

        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          stroke="var(--color-primary)"
          strokeWidth="3px"
          strokeLinecap="round"
          fill="transparent"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "visible",
            transform: "rotate(-90deg)",
          }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="50"
            variants={drawShape}
            initial="hidden"
            whileHover="visible"
            whileFocus="visible"
            whileTap="visible"
            style={{ pathLength, outline: "none" }}
          />
        </motion.svg>
      </div>

      <p className="text-slate-200">
        I'm a frontend web developer with full-stack expertise. I enjoy crafting
        engaging experiences with great attention to detail.
      </p>
    </section>
  );
}

export default Hero;
