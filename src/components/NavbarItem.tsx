import { Link } from "@tanstack/react-router";
import type {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

import { motion } from "motion/react";

type NavbarItemProps = ComponentProps<typeof Link> & {
  title: string;
  icon: ReactNode;
  activeItem: string;
  hoveredItem: string | null;
  setHoveredItem: Dispatch<SetStateAction<string | null>>;
};

function NavbarItem({
  title,
  icon,
  activeItem,
  hoveredItem,
  setHoveredItem,
  ...rest
}: NavbarItemProps) {
  const isActive = activeItem === title.toLowerCase();
  const linkStyles = `relative flex items-center gap-1 px-2 py-1 sm:gap-2
    ${isActive ? "rounded-full bg-slate-900 text-slate-50" : "text-slate-950"}`;

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
      {hoveredItem === title && (
        <motion.div
          layoutId="backdrop"
          className={`absolute inset-0 rounded-full ${isActive ? "" : "bg-slate-900/20"}`}
        />
      )}

      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default NavbarItem;
