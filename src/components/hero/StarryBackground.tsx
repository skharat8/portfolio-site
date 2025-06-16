import React from "react";

import { getContext } from "@/utils/canvas.utils";
import { StarryBackgroundEffect } from "@/utils/stars.canvas";

function StarryBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const requestIdRef = React.useRef(0);
  const starryBg = React.useRef<StarryBackgroundEffect>(null);

  function animate(ctx: CanvasRenderingContext2D) {
    if (!starryBg.current) return;
    const currentEffect = starryBg.current;
    ctx.clearRect(0, 0, currentEffect.canvasWidth, currentEffect.canvasHeight);

    starryBg.current.render();
    requestIdRef.current = requestAnimationFrame(() => animate(ctx));
  }

  React.useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    let timeoutId: number;

    function redrawCanvas() {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;

      const ctx = getContext(canvas);
      if (!ctx) return;

      starryBg.current = new StarryBackgroundEffect(
        ctx,
        canvas.width,
        canvas.height,
      );

      starryBg.current.createStars(100, 50, 20);
      requestIdRef.current = requestAnimationFrame(() => animate(ctx));
    }

    // Debounce i.e. delay updates if changes are too frequent
    function handleWindowResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        redrawCanvas();
      }, 200);
    }

    redrawCanvas();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0">
      Your browser does not support HTML5 Canvas
    </canvas>
  );
}

export default StarryBackground;
