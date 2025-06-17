import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  maxWidth: string;
  padding?: string;
  className?: string;
};

function MaxWidthWrapper({
  maxWidth,
  padding = "32px",
  className,
  children,
}: PropsWithChildren<MaxWidthWrapperProps>) {
  return (
    <div className={cn(className, "mx-auto")} style={{ maxWidth, padding }}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
