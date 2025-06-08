import type React from "react";

type CircleProps = {
  size: string;
  color: string;
  style: React.CSSProperties;
};

function Circle({ size, color, style }: CircleProps) {
  return (
    <svg
      width={size}
      height={size}
      className="animate-breathe pointer-events-none absolute -z-1 will-change-[opacity]"
      style={style}
      viewBox="0 0 100 100"
    >
      <circle r="45" cx="50" cy="50" fill={color} />
    </svg>
  );
}

export default Circle;
