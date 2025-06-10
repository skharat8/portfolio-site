import React from "react";

type ScrollDirection = "up" | "down";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>("up");
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    prevScrollY.current = window.scrollY;
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      const diff = window.scrollY - prevScrollY.current;
      setScrollDirection(diff > 0 ? "down" : "up");
      prevScrollY.current = window.scrollY;
    }

    // Passive option tells the browser that this event listener
    // will not stop the default scroll behavior, thus improving
    // scroll performance.
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDirection;
}

export default useScrollDirection;
