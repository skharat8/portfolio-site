import React from "react";

type useIntersectionObserverProps = {
  elementIdArray: string[];
  defaultId: string;
};

function useIntersectionObserver({
  elementIdArray,
  defaultId,
}: useIntersectionObserverProps) {
  const [activeItem, setActiveItem] = React.useState<string>(defaultId);
  const scrollDirection = React.useRef<"up" | "down">("down");
  const prevScrollY = React.useRef(0);
  let options: IntersectionObserverInit;

  // Initialize scrollY on first render
  React.useEffect(() => {
    prevScrollY.current = window.scrollY;
  }, []);

  // Initialize root margin based on header height on first render
  React.useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const headerHeight = header.getBoundingClientRect().height;

      // Root Margin defines how much to offset the point where
      // intersection is triggered. Set to below the header i.e. header
      // height + margin above the header.

      // Threshold defines how much of the section needs to intersect.
      // Set to as soon as any part touches the header.
      options = { rootMargin: `${headerHeight * -1 - 32}px`, threshold: 0 };
    }
  }, []);

  React.useEffect(() => {
    function setScrollDirection() {
      scrollDirection.current =
        window.scrollY - prevScrollY.current > 0 ? "down" : "up";
      prevScrollY.current = window.scrollY;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setScrollDirection();

        // When moving up, set active item once previous section meets
        // the bottom of the header.
        //
        // When moving down, this section has just entered observer's
        // area and should not trigger an active item change. However,
        // when this section is leaving the viewport, it would have
        // just touched the header, so set active item at that time.
        if (scrollDirection.current === "up" && entry.isIntersecting) {
          setActiveItem(entry.target.id);
        } else if (
          scrollDirection.current === "down" &&
          !entry.isIntersecting
        ) {
          setActiveItem(entry.target.nextElementSibling?.id ?? entry.target.id);
        }
      });
    }, options);

    // Observe and track each element provided
    elementIdArray.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeItem;
}

export default useIntersectionObserver;
