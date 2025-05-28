import React from "react";

import pixelGlasses from "@images/pixel-glasses.svg";
import profile from "@images/profile.jpg";
import { type Variants, motion, useMotionValue } from "motion/react";

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
    <div className="relative h-40 w-40 rounded-full border-1 border-slate-800">
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
  );
}

export default ProfilePhoto;
