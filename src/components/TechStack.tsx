import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div>
      <div className="mb-2 ml-1 text-lg font-bold text-slate-300">{title}</div>

      <div className="grid grid-cols-[repeat(auto-fill,7.5rem)] gap-2">
        {children}
      </div>
    </div>
  );
}

export default TechStack;
