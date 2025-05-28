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
      tabIndex={0}
      className="group flex-center-col h-[7rem] w-[7.5rem] gap-2 rounded-md border-3
        border-neutral-950 bg-neutral-900 p-4 outline-0 hover:border-neutral-300
        hover:bg-indigo-900 focus:border-neutral-300 focus:bg-indigo-900"
    >
      {icon}
      <span
        className="font-['Noto_Sans_Variable'] text-sm font-bold text-nowrap text-neutral-300
          uppercase hover:text-neutral-100 focus:text-neutral-100"
      >
        {children}
      </span>
    </article>
  );
}

export default TechStackItem;
