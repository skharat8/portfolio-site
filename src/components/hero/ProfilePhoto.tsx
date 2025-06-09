import React from "react";

import pixelGlasses from "@images/pixel-glasses.svg";
import profileJpg from "@images/profile.jpg";
import profileWebp from "@images/profile.webp";
import { type Variants, motion, useMotionValue } from "motion/react";

const drawShape: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: [0, 1],
    opacity: [1, 1],
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 100,
      restDelta: 0.01,
    },
  },
};

function ProfilePhoto() {
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
    <motion.div className="relative h-40 w-40 rounded-full border-1 border-slate-800">
      <picture>
        <source type="image/webp" src={profileWebp} />
        <img
          src={profileJpg}
          alt="My profile picture"
          className="shadow-elevation-medium absolute h-full w-full rounded-full object-cover"
        />
      </picture>

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
        strokeWidth="5px"
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
    </motion.div>
  );
}

export default ProfilePhoto;
