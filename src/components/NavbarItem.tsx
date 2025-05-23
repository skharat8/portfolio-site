import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { tw } from "@/lib/utils";

type NavbarItemProps = ComponentProps<typeof Link> & {
  title: string;
  icon: ReactNode;
};

function NavbarItem({ to, title, icon, ...rest }: NavbarItemProps) {
  const linkStyles = tw`flex items-center gap-2 px-2 py-1 text-slate-950 [&.active]:rounded-full
  [&.active]:bg-slate-900 [&.active]:text-slate-50`;

  return (
    <Link
      title={title}
      className={linkStyles}
      activeOptions={{ includeHash: true }}
      {...rest}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default NavbarItem;
