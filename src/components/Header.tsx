import React from "react";
import { FaCode, FaLaptop } from "react-icons/fa6";

import { Mail, UserRound } from "lucide-react";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import NavbarItem from "./NavbarItem";

const NAVBAR_ITEMS = [
  { hash: "home", to: "/", title: "Home", icon: <FaLaptop /> },
  { hash: "projects", title: "Projects", icon: <FaCode /> },
  { hash: "about", title: "About", icon: <UserRound size={15} /> },
  { hash: "contact", title: "Contact", icon: <Mail size={15} /> },
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const elementIdArray = NAVBAR_ITEMS.map((item) => item.hash);
  const activeItem = useIntersectionObserver({
    elementIdArray,
    defaultId: "home",
  });

  return (
    <header
      className="flex-center fixed top-[16px] right-0 left-0 z-10 transition-transform
        duration-300 sm:top-6"
    >
      <nav
        className="flex rounded-full bg-slate-50 px-3 py-2 sm:gap-4"
        onMouseLeave={() => setHoveredItem(null)}
      >
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            key={item.title}
            to={item.to}
            hash={item.hash}
            title={item.title}
            icon={item.icon}
            activeItem={activeItem}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </nav>
    </header>
  );
}
