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
  const [activeItem, setActiveItem] = React.useState<string>("home");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    NAVBAR_ITEMS.forEach((item) => {
      const element = document.getElementById(item.hash ?? "home");
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex-center sticky top-4 z-10">
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
