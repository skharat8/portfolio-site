import type { PropsWithChildren } from "react";

type MaxWidthWrapperProps = {
  maxWidth: string;
  padding?: string;
};

function MaxWidthWrapper({
  maxWidth,
  padding = "32px",
  children,
}: PropsWithChildren<MaxWidthWrapperProps>) {
  return (
    <div className="mx-auto" style={{ maxWidth, padding }}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
