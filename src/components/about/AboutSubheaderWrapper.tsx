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
    red: "bg-primary-900 border-primary-500 text-primary-100",
    emerald: "bg-emerald-900 border-emerald-500 text-emerald-100",
    purple: "bg-purple-900 border-purple-500 text-purple-100",
    blue: "bg-accent-azure-900 border-accent-azure-500 text-accent-azure-100",
  };

  return (
    <h3
      className={`absolute -translate-x-3 -translate-y-[calc(100%+0.25rem)] rounded-md border-2
        ${colors[color]} text-subheader px-3 py-1 font-bold`}
    >
      {children}
    </h3>
  );
}

export default AboutSubheaderWrapper;
