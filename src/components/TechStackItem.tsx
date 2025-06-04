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
      className="group flex-center-col bg-secondary-900 border-secondary-950
        hover:bg-accent-red-400 focus:bg-accent-red-400 aspect-auto h-[6.5rem] gap-3
        rounded-md border-3 p-4 outline-0 focus:border-neutral-300 sm:gap-2"
    >
      {icon}
      <span
        className="-skew-x-4 text-xs font-bold text-nowrap text-neutral-300 uppercase
          hover:text-neutral-100 focus:text-neutral-100"
      >
        {children}
      </span>
    </article>
  );
}

export default TechStackItem;
