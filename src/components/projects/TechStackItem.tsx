import type React from "react";
import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

type TechStackItemProps = {
  icon: React.ComponentType<{ className: string }>;
};

function TechStackItem({
  icon: Icon,
  children,
}: PropsWithChildren<TechStackItemProps>) {
  return (
    <motion.article
      className="group flex-center-col bg-secondary-900 border-secondary-950
        hover:bg-accent-red-400 h-[6rem] min-w-[6rem] gap-3 rounded-md border-3 p-3
        will-change-transform sm:gap-2"
      whileHover={{
        scale: 1.05,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      whileTap={{
        scale: 1.1,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      transition={{ type: "spring", damping: 6, stiffness: 180 }}
    >
      <Icon className="group-hover:fill-neutral-200" />
      <span
        className="-skew-x-4 text-xs font-bold text-nowrap text-neutral-50 uppercase select-none
          group-hover:text-neutral-100"
      >
        {children}
      </span>
    </motion.article>
  );
}

export default TechStackItem;
