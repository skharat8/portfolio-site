import { FaCode, FaLaptop } from "react-icons/fa6";

import { Mail, UserRound } from "lucide-react";

import NavbarItem from "./NavbarItem";

export default function Header() {
  return (
    <header className="flex-center sticky top-2 p-4">
      <nav className="flex gap-4 rounded-full bg-slate-50 px-3 py-2">
        <NavbarItem to="/" title="Home" icon={<FaLaptop />} />
        <NavbarItem hash="projects" title="Projects" icon={<FaCode />} />
        <NavbarItem hash="about" title="About" icon={<UserRound size={15} />} />
        <NavbarItem hash="contact" title="Contact" icon={<Mail size={15} />} />
      </nav>
    </header>
  );
}
