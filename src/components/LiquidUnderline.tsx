import type { PropsWithChildren } from "react";

import Wave from "./Wave";

function LiquidUnderline({ children }: PropsWithChildren) {
  return (
    <span
      tabIndex={0}
      className="group relative text-nowrap delay-100 outline-none hover:text-slate-950
        focus:text-slate-950"
    >
      {children}
      <div
        className="absolute top-0 -left-0.5 -z-1 h-[110%] w-[102%] overflow-hidden rounded-md
          border-b-3 border-[rgba(255,179,11)]"
      >
        <Wave
          width="350"
          className="group-hover:-translate-y-[5.3rem] group-focus:-translate-y-[5.3rem]"
        />
      </div>
    </span>
  );
}

export default LiquidUnderline;
