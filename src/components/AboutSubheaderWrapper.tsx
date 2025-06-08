import type { PropsWithChildren } from "react";

type AboutSubheaderWrapperProps = {
  color?: string;
};

function AboutSubheaderWrapper({
  color = "slate",
  children,
}: PropsWithChildren<AboutSubheaderWrapperProps>) {
  const colors: { [key: string]: string } = {
    slate: "bg-slate-900 border-slate-500 text-slate-100",
    red: "bg-accent-red-900 border-accent-red-500 text-accent-red-100",
    emerald: "bg-emerald-900 border-emerald-500 text-emerald-100",
    purple: "bg-purple-900 border-purple-500 text-purple-100",
    blue: "bg-primary-azure-900 border-primary-azure-500 text-primary-azure-100",
  };

  return (
    <h3
      className={`absolute -translate-x-3 -translate-y-[calc(100%+0.25rem)] rounded-md border-2
        ${colors[color]} px-3 py-1 text-xl font-bold`}
    >
      {children}
    </h3>
  );
}

export default AboutSubheaderWrapper;
