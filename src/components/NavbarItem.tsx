import { Link } from "@tanstack/react-router";
import type {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

import { motion } from "motion/react";

import { tw } from "@/lib/utils";

type NavbarItemProps = ComponentProps<typeof Link> & {
  title: string;
  icon: ReactNode;
  hoveredItem: string | null;
  setHoveredItem: Dispatch<SetStateAction<string | null>>;
};

function NavbarItem({
  title,
  icon,
  hoveredItem,
  setHoveredItem,
  ...rest
}: NavbarItemProps) {
  const linkStyles = tw`relative flex items-center gap-1 px-2 py-1 text-slate-950 sm:gap-2
  [&.active]:rounded-full [&.active]:bg-slate-900 [&.active]:text-slate-50`;

  return (
    <Link
      title={title}
      className={linkStyles}
      style={{ zIndex: hoveredItem === title ? 1 : 2, outline: "none" }}
      activeOptions={{ includeHash: true }}
      onMouseEnter={() => setHoveredItem(title)}
      onFocus={() => setHoveredItem(title)}
      {...rest}
    >
      {({ isActive }) => {
        return (
          <>
            {hoveredItem === title && (
              <motion.div
                layoutId="backdrop"
                className={`absolute inset-0 rounded-full ${isActive ? "" : "bg-slate-900/20"}`}
              />
            )}

            {icon}
            <span>{title}</span>
          </>
        );
      }}
    </Link>
  );
}

export default NavbarItem;
