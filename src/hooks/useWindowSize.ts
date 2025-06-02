import React from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  React.useEffect(() => {
    // Debounce i.e. delay updates to window size if it keeps changing within 500ms
    // This means setWindowSize can only be called once every 500ms.
    const timeoutId = setTimeout(
      () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight }),
      500,
    );

    return () => clearTimeout(timeoutId);
  }, [window.innerWidth, window.innerHeight]);

  return windowSize;
}

export default useWindowSize;
