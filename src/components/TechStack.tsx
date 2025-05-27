import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 ml-1 self-center text-lg font-bold text-slate-300">
        {title}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,7.3rem)] justify-center gap-2">
        {children}
      </div>
    </div>
  );
}

export default TechStack;
