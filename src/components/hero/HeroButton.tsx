import type { PropsWithChildren } from "react";

import { type HTMLMotionProps, motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

import PlanetIcon from "./PlanetIcon";

type HeroButtonProps = HTMLMotionProps<"button"> & {
  className?: string;
};

function HeroButton({
  className,
  children,
  ...rest
}: PropsWithChildren<HeroButtonProps>) {
  const MotionIcon = motion.create(PlanetIcon);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      {...rest}
      className={cn(
        "group flex-center relative z-2 h-7 cursor-pointer gap-2 rounded-full px-6 py-4",
        className,
      )}
      initial={{
        y: "300%",
        opacity: 0,
        color: "var(--color-slate-200)",
        background: "var(--color-slate-700)",
        boxShadow: "0 0 0 0.01px hsl(0 0 0 / 0.2)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 70, damping: 16 },
      }}
      whileHover={{
        scale: prefersReducedMotion ? 1 : 1.15,
        color: "var(--color-slate-50)",
        fontWeight: "bold",
        background: `radial-gradient(70% 90% at 50% 100%,
                           var(--color-indigo-400),
                           var(--color-indigo-600),
                           60%,
                           var(--color-indigo-950))`,
        // outline: "7px solid hsl(211 100% 90% / 50%)",
        boxShadow: "0 0 40px 40px var(--color-indigo-300)",
      }}
      transition={{ type: "spring", damping: 7 }}
    >
      {/* <div
        className="absolute inset-0 -z-1 m-auto mr-[-25%] h-[150%] w-[150%] rounded-full
          bg-indigo-300 blur-sm"
      ></div> */}
      {/* <div
        className="absolute inset-0 -z-1 m-auto aspect-square h-1/2 rounded-full
          bg-radial-[var(--color-indigo-400),var(--color-indigo-200)]
          shadow-[5px_0_40px_40px_var(--color-indigo-400)]"
      ></div> */}
      <PlanetIcon
        className="h-5 w-5 fill-current text-slate-400 transition-colors duration-500
          group-hover:text-slate-50"
      />
      {children}
    </motion.button>
  );
}

export default HeroButton;
