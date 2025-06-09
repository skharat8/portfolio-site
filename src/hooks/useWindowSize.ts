import React from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  React.useEffect(() => {
    let timeoutId: number;

    function handleResize() {
      clearTimeout(timeoutId);

      // Debounce i.e. delay updates to window size if it keeps changing within 500ms
      // This means setWindowSize can only be called once every 500ms.
      timeoutId = setTimeout(
        () =>
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        500,
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
