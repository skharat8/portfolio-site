import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 self-center text-lg font-bold text-slate-300">
        {title}
      </div>

      <div
        className="grid grid-cols-[repeat(auto-fill,6.4rem)] justify-center gap-2
          sm:grid-cols-[repeat(auto-fill,7.3rem)]"
      >
        {children}
      </div>
    </div>
  );
}

export default TechStack;
