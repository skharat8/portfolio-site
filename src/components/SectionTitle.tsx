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
        className="relative isolate inline-block font-extrabold text-slate-50 text-shadow-lg
          text-shadow-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span
          aria-hidden
          className="border-accent-red-400 absolute inset-0 bottom-0 left-3 -z-1 border-b-10"
        ></span>
        {children}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
