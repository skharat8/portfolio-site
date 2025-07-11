import icon1x from "@images/firebird-icon-128x128.png";
import icon15x from "@images/firebird-icon-192x192.png";
import icon2x from "@images/firebird-icon-256x256.png";
import icon4x from "@images/firebird-icon-512x512.png";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

function FirebirdTitle() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="text-header flex items-center gap-2 font-[Noto_Sans_Variable]">
      {/* Logo */}
      <motion.div
        className="h-[2.8rem] w-[2.8rem] rounded-full"
        initial={{ x: prefersReducedMotion ? 0 : "calc(-100% - 32px)" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", damping: 13 }}
      >
        <img
          src={icon2x}
          srcSet={`${icon1x} 1x, ${icon15x} 1.5x, ${icon2x} 2x, ${icon4x} 4x`}
          alt="Project Logo"
        />
      </motion.div>

      {/* Title */}
      <motion.a
        href="https://project-firebird.vercel.app/login"
        target="_blank"
        className="text-firebird-theme flex items-baseline gap-2 font-extrabold
          transition-transform duration-400 hover:-translate-y-1 hover:duration-150"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="relative">
          <span
            aria-hidden
            className="border-secondary-500 absolute inset-0 bottom-0 left-3 -z-1 border-b-10"
          ></span>
          <div className="text-shadow-secondary-800 text-shadow-sm">
            Firebird
          </div>
        </h2>

        <ExternalLink color="var(--color-secondary-50)" size="1.3rem" />
      </motion.a>
    </div>
  );
}

export default FirebirdTitle;
