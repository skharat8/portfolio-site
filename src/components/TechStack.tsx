import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div className="flex flex-col justify-start">
      <div
        className="mb-2 self-start pl-1 font-['Noto_Sans_Variable'] text-2xl font-extrabold
          text-slate-950"
      >
        {title}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(6.4rem,100%),1fr))] gap-2">
        {children}
      </div>
    </div>
  );
}

export default TechStack;
