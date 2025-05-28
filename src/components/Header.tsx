import React from "react";
import { FaCode, FaLaptop } from "react-icons/fa6";

import { Mail, UserRound } from "lucide-react";

import NavbarItem from "./NavbarItem";

const NAVBAR_ITEMS = [
  { to: "/", title: "Home", icon: <FaLaptop /> },
  { hash: "projects", title: "Projects", icon: <FaCode /> },
  { hash: "about", title: "About", icon: <UserRound size={15} /> },
  { hash: "contact", title: "Contact", icon: <Mail size={15} /> },
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <header className="flex-center sticky top-4 z-10">
      <nav
        className="flex rounded-full bg-slate-50 px-3 py-2 sm:gap-4"
        onMouseLeave={() => setTimeout(() => setHoveredItem(null), 200)}
      >
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            key={item.title}
            to={item.to}
            hash={item.hash}
            title={item.title}
            icon={item.icon}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </nav>
    </header>
  );
}
