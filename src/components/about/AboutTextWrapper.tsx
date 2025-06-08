import type { PropsWithChildren } from "react";

import { motion } from "motion/react";

function AboutTextWrapper({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="group relative mb-6 w-[min(44rem,80vw)] rounded-md border-4 border-slate-300
        bg-gradient-to-br from-slate-700 to-slate-900 px-6 py-5 text-slate-100
        outline-none"
      initial={{ opacity: 0, x: "15%" }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", damping: 20 },
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
