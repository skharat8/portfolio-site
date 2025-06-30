import type { PropsWithChildren } from "react";
import React from "react";

import { type HTMLMotionProps, type Variants, motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

import DownIcon from "./DownIcon";
import styles from "./HeroButton.module.css";
import PlanetIcon from "./PlanetIcon";

function getIsMobileInitialState() {
  const QUERY = "(hover: hover) and (pointer: fine)";
  return !window.matchMedia(QUERY).matches;
}

type HeroButtonProps = HTMLMotionProps<"button"> & {
  className?: string;
};

function HeroButton({
  className,
  children,
  ...rest
}: PropsWithChildren<HeroButtonProps>) {
  const [isMobile, _] = React.useState(getIsMobileInitialState);
  const prefersReducedMotion = usePrefersReducedMotion();
  const hoverEffectForDownArrow = isMobile
    ? ""
    : `peer-hover:translate-y-[40%] peer-hover:text-indigo-200
       peer-hover:opacity-100`;

  const variants: Variants = {
    initial: {
      y: "300%",
      opacity: 0,
      color: "var(--color-slate-200)",
      fontWeight: "normal",
      background: "var(--color-slate-700)",
      boxShadow: "0 0 0 0.01px hsl(0 0 0 / 0.2)",
    },
    hover: {
      scale: prefersReducedMotion ? 1 : 1.13,
      color: "var(--color-slate-50)",
      fontWeight: "bold",
      background: `radial-gradient(70% 90% at 50% 100%,
                             var(--color-indigo-600),
                             60%,
                             var(--color-indigo-900)),
                       var(--color-indigo-300) border-box`,
    },
  };

  return (
    <div className="relative z-2 flex flex-col items-center">
      <motion.button
        {...rest}
        className={cn(
          `group peer flex-center h-7 cursor-pointer gap-2 rounded-full border-2
          border-transparent px-6 py-4 outline-none select-none`,
          className,
          styles.btn,
        )}
        variants={variants}
        initial="initial"
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 70, damping: 16 },
        }}
        whileHover="hover"
        whileFocus="hover"
        whileTap={{
          scale: isMobile || prefersReducedMotion ? 0.9 : 1,
          color: "var(--color-slate-50)",
          fontWeight: "bold",
          background: `radial-gradient(70% 90% at 50% 100%,
                             var(--color-indigo-600),
                             60%,
                             var(--color-indigo-900)),
                       var(--color-indigo-100) border-box`,
          transition: { type: "tween", ease: "easeIn", duration: 10 },
        }}
        transition={{ type: "spring", damping: 7 }}
      >
        <PlanetIcon
          className={`h-5 w-5 fill-current text-slate-400 transition-colors duration-500
            ${isMobile ? "" : "group-hover:text-slate-50"} group-focus-visible:text-slate-50
            group-active:text-slate-50`}
        />

        {children}
      </motion.button>

      <DownIcon
        className={`z-2 h-5 w-5 fill-current text-slate-400 opacity-0 transition-[transform_opacity]
          duration-300 peer-focus-visible:translate-y-[40%] ${hoverEffectForDownArrow}
          peer-focus-visible:text-indigo-200 peer-focus-visible:opacity-100`}
      />
    </div>
  );
}

export default HeroButton;
