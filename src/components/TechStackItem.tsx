import type React from "react";
import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

type TechStackItemProps = {
  icon: React.ReactNode;
};

function TechStackItem({
  icon,
  children,
}: PropsWithChildren<TechStackItemProps>) {
  return (
    <motion.article
      tabIndex={0}
      className="group flex-center-col bg-secondary-900 border-secondary-950
        hover:bg-accent-red-400 focus-visible:bg-accent-red-400 aspect-auto h-[6.5rem]
        gap-3 rounded-md border-3 p-4 outline-0 sm:gap-2"
      whileHover={{
        scale: 1.04,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      whileTap={{
        scale: 1.04,
        boxShadow: "var(--shadow-elevation-medium)",
      }}
      transition={{ type: "spring", damping: 7, stiffness: 180 }}
    >
      {icon}
      <span
        className="-skew-x-4 text-xs font-bold text-nowrap text-neutral-300 uppercase
          group-hover:text-neutral-100 group-focus-visible:text-neutral-100"
      >
        {children}
      </span>
    </motion.article>
  );
}

export default TechStackItem;
