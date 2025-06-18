import type { PropsWithChildren } from "react";

import { type HTMLMotionProps, motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

import DownIcon from "./DownIcon";
import styles from "./HeroButton.module.css";
import PlanetIcon from "./PlanetIcon";

type HeroButtonProps = HTMLMotionProps<"button"> & {
  className?: string;
};

function HeroButton({
  className,
  children,
  ...rest
}: PropsWithChildren<HeroButtonProps>) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative z-2 flex flex-col items-center">
      <motion.button
        {...rest}
        className={cn(
          `group peer flex-center h-7 cursor-pointer gap-2 rounded-full border-2
          border-transparent px-6 py-4 outline-none`,
          className,
          styles.btn,
        )}
        initial={{
          y: "300%",
          opacity: 0,
          color: "var(--color-slate-200)",
          fontWeight: "normal",
          background: "var(--color-slate-700)",
          boxShadow: "0 0 0 0.01px hsl(0 0 0 / 0.2)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 70, damping: 16 },
        }}
        whileHover={{
          scale: prefersReducedMotion ? 1 : 1.13,
          color: "var(--color-slate-50)",
          fontWeight: "bold",
          background: `radial-gradient(70% 90% at 50% 100%,
                             var(--color-indigo-600),
                             60%,
                             var(--color-indigo-900)),
                       var(--color-indigo-100) border-box`,
        }}
        whileFocus={{
          scale: prefersReducedMotion ? 1 : 1.13,
          color: "var(--color-slate-50)",
          fontWeight: "bold",
          background: `radial-gradient(70% 90% at 50% 100%,
                             var(--color-indigo-600),
                             60%,
                             var(--color-indigo-900)),
                       var(--color-indigo-100) border-box`,
        }}
        whileTap={{
          scale: 1,
        }}
        transition={{ type: "spring", damping: 7 }}
      >
        <PlanetIcon
          className="h-5 w-5 fill-current text-slate-400 transition-colors duration-500
            group-hover:text-slate-50"
        />

        {children}
      </motion.button>
      <DownIcon
        className="z-2 h-5 w-5 fill-current text-slate-400 opacity-0 transition-[transform_opacity]
          duration-300 peer-hover:translate-y-[40%] peer-hover:text-indigo-200
          peer-hover:opacity-100"
      />
    </div>
  );
}

export default HeroButton;
