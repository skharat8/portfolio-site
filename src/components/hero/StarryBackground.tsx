import type { PropsWithChildren } from "react";
import React from "react";

import { nanoid } from "nanoid";
import { useWindowSize } from "usehooks-ts";

import { random, range } from "@/utils/common.utils";

import Circle from "./Circle";

const DEFAULT_COLOR = "var(--color-slate-50)";

type Star = {
  id: string;
  createdAt: number;
  color: string;
  size: string;
  style: React.CSSProperties;
  containerStyle: { [i: string]: string };
};

function generateStar(color = DEFAULT_COLOR): Star {
  return {
    id: nanoid(),
    createdAt: Date.now(),
    color,
    size: random(1, 3).toString(),
    style: {
      top: random(0, 100) + "vh",
      left: random(0, 100) + "vw",
      animationDelay: random(1000, 5000) + "ms",
    },
    containerStyle: {
      "--destination-x": random(-100, 100) + "vw",
      "--destination-y": random(-100, 100) + "vh",
    },
  };
}

function generateStarsBasedOnWindowSize(
  windowWidth: number,
  windowHeight: number,
) {
  const area = windowWidth * windowHeight;
  const numStars = Math.min(Math.floor(area / 2000), 600);
  return range(numStars).map(() => generateStar());
}

function StarryBackground({ children }: PropsWithChildren) {
  const { width, height } = useWindowSize({
    initializeWithValue: true,
    debounceDelay: 100,
  });
  const [stars, setStars] = React.useState<Star[] | null>(null);

  React.useEffect(() => {
    setStars(generateStarsBasedOnWindowSize(width, height));
  }, [width, height]);

  return (
    <div className="relative overflow-hidden">
      {stars &&
        stars.map((star) => (
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
