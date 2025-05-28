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
      className="group flex-center-col h-[6.5rem] w-[6.5rem] gap-3 rounded-md border-3
        border-neutral-950 bg-neutral-900 p-4 outline-0 hover:border-neutral-300
        hover:bg-indigo-900 focus:border-neutral-300 focus:bg-indigo-900 sm:h-[7rem]
        sm:w-[7.5rem] sm:gap-2"
    >
      {icon}
      <span
        className="font-['Noto_Sans_Variable'] text-xs font-bold text-nowrap text-neutral-300
          uppercase hover:text-neutral-100 focus:text-neutral-100 sm:text-sm"
      >
        {children}
      </span>
    </article>
  );
}

export default TechStackItem;
