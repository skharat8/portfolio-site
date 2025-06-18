import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import useWindowSize from "@/hooks/useWindowSize";

type AboutTextWrapperProps = {
  enterDirection: "left" | "right";
  delayInSeconds?: number;
  invertOnDesktop?: boolean;
};

function AboutTextWrapper({
  enterDirection,
  delayInSeconds,
  invertOnDesktop,
  children,
}: PropsWithChildren<AboutTextWrapperProps>) {
  const windowSize = useWindowSize();
  const DESKTOP_VIEWPORT_WIDTH = 700;
  const isDesktop = windowSize.width > DESKTOP_VIEWPORT_WIDTH;

  const prefersReducedMotion = usePrefersReducedMotion();

  let initialX;
  if (enterDirection === "right") {
    initialX = invertOnDesktop && isDesktop ? "-15%" : "15%";
  } else {
    initialX = invertOnDesktop && isDesktop ? "15%" : "-15%";
  }

  return (
    <motion.div
      className="group relative mb-6 w-[min(44rem,80vw)] rounded-md border-4 border-slate-300
        bg-gradient-to-br from-slate-700 to-slate-900 px-6 py-5 text-slate-100
        outline-none"
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : initialX }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", damping: 20, delay: delayInSeconds },
      }}
      whileHover={{
        y: "-8px",
        boxShadow: "-4px 8px 8px hsl(39 83% 69% / 0.30)",
        borderColor: "var(--color-secondary-300)",
        transition: { type: "spring", damping: 20, stiffness: 150 },
      }}
      whileTap={{
        y: "-8px",
        boxShadow: "-4px 8px 8px hsl(39 83% 69% / 0.30)",
        borderColor: "var(--color-secondary-300)",
        transition: { type: "spring", damping: 20, stiffness: 150 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AboutTextWrapper;
