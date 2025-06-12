import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div className="flex flex-col justify-start">
      <div className="mb-2 self-start pl-1 text-xl font-extrabold text-slate-950">
        {title}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(6rem,100%),1fr))] gap-1 sm:gap-2">
        {children}
      </div>
    </div>
  );
}

export default TechStack;
