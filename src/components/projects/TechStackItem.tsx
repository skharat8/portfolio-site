import React from "react";
import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { getIsMobileInitialState } from "@/utils/common.utils";

type TechStackItemProps = {
  icon: React.ComponentType<{ className: string }>;
};

function TechStackItem({
  icon: Icon,
  children,
}: PropsWithChildren<TechStackItemProps>) {
  const [isMobile, _] = React.useState(getIsMobileInitialState);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      className={`group flex-center-col bg-secondary-900 border-secondary-950
        ${isMobile ? "" : "hover:bg-primary-400"} h-[6rem] min-w-[6rem] gap-3 rounded-md
        border-3 p-3 will-change-transform sm:gap-2`}
      whileHover={{
        scale: prefersReducedMotion ? 1 : 1.05,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      whileTap={{
        scale: prefersReducedMotion ? 1 : 1.1,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      transition={{ type: "spring", damping: 6, stiffness: 180 }}
    >
      <Icon className={isMobile ? "" : "group-hover:fill-neutral-200"} />
      <span
        className={`-skew-x-4 text-xs font-bold text-nowrap text-neutral-50 uppercase select-none
          ${isMobile ? "" : "group-hover:text-neutral-100"}`}
      >
        {children}
      </span>
    </motion.article>
  );
}

export default TechStackItem;
