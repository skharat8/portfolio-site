import type { PropsWithChildren } from "react";
import React from "react";

import { nanoid } from "nanoid";

import { random, range } from "@/utils/common.utils";

import Circle from "./Circle";

const DEFAULT_COLOR = "var(--color-slate-50)";

function generateStar(color = DEFAULT_COLOR) {
  return {
    id: nanoid(),
    createdAt: Date.now(),
    color,
    size: random(2, 4).toString(),
    style: {
      top: random(0, 150) + "vw",
      left: random(0, 150) + "vh",
      animationDelay: random(1000, 5000) + "ms",
    },
    containerStyle: {
      "--destination-x": random(-100, 200) + "vw",
      "--destination-y": random(-100, 100) + "vh",
    },
  };
}

function StarryBackground({ children }: PropsWithChildren) {
  const [stars, setStars] = React.useState(() =>
    range(500).map(() => generateStar()),
  );

  return (
    <div className="relative overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="animate-travel will-change-transform"
          style={star.containerStyle as React.CSSProperties}
        >
          <Circle color={star.color} size={star.size} style={star.style} />
        </div>
      ))}

      {children}
    </div>
  );
}

export default StarryBackground;
