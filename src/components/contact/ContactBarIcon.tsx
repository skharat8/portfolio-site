import { motion } from "motion/react";

type ContactBarIconProps = {
  icon: React.ComponentType<{ className: string }>;
};

function ContactBarIcon({ icon: Icon }: ContactBarIconProps) {
  return (
    <motion.div
      className="relative h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full bg-slate-800
        text-slate-800"
      transition={{ type: "spring", damping: 10, stiffness: 180 }}
      whileHover={{
        scale: 1.3,
        rotate: "3deg",
        color: "var(--color-accent-red-400)",
      }}
      whileTap={{
        scale: 1.3,
        rotate: "3deg",
        color: "var(--color-accent-red-400)",
      }}
    >
      <Icon
        className="hover:bg-accent-red-50 focus:bg-accent-red-50 -mt-1 h-[3rem] w-full scale-110
          bg-slate-300 fill-current shadow-sm"
      />
    </motion.div>
  );
}

export default ContactBarIcon;
