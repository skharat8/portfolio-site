import type { PropsWithChildren } from "react";

type TechStackProps = {
  title: string;
};

function TechStack({ title, children }: PropsWithChildren<TechStackProps>) {
  return (
    <div className="flex flex-col justify-start">
      <div
        className="text-secondary-950 mb-2 self-start pl-1 font-['Noto_Sans_Variable'] text-2xl
          font-extrabold"
      >
        {title}
      </div>

      <div
        className="grid grid-cols-[repeat(auto-fill,6.4rem)] gap-2
          sm:grid-cols-[repeat(auto-fill,6.4rem)]"
      >
        {children}
      </div>
    </div>
  );
}

export default TechStack;
