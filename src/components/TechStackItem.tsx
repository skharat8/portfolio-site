import type React from "react";
import type { PropsWithChildren } from "react";

type TechStackItemProps = {
  icon: React.ReactNode;
};

function TechStackItem({
  icon,
  children,
}: PropsWithChildren<TechStackItemProps>) {
  return (
    <article
      className="group flex-center-col h-[7rem] w-[7.5rem] gap-2 rounded-md border-3
        border-neutral-950 bg-neutral-900 p-4 hover:bg-indigo-900"
    >
      {icon}
      <span
        className="font-['Noto_Sans_Variable'] text-sm font-bold text-nowrap text-neutral-300
          uppercase hover:text-neutral-100"
      >
        {children}
      </span>
    </article>
  );
}

export default TechStackItem;
