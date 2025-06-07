import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  icon: React.ReactNode;
  className?: string;
};

function SectionTitle({
  icon,
  className,
  children,
}: PropsWithChildren<SectionTitleProps>) {
  return (
    <div
      className={cn(className, "flex items-center gap-2 text-4xl md:text-5xl")}
    >
      {/* Logo */}
      <motion.div
        initial={{ x: "calc(-100% - 32px)" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", damping: 13 }}
      >
        {icon}
      </motion.div>

      <motion.h2
        className={`text-accent-red-400 text-shadow-secondary-900 relative isolate inline-block
          font-extrabold text-shadow-lg`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span
          aria-hidden
          className={
            "border-secondary-500 absolute inset-0 bottom-0 left-3 -z-1 border-b-10"
          }
        ></span>
        {children}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
