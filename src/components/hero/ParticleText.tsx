import type { PropsWithChildren } from "react";
import React from "react";

import { Effect, getContextAndParentElement } from "@/utils/canvas.utils";

function ParticleText({ children }: PropsWithChildren) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const requestIdRef = React.useRef(0);
  const effect = React.useRef<Effect>(null);

  function animate(ctx: CanvasRenderingContext2D) {
    if (!effect.current) return;
    const currentEffect = effect.current;
    ctx.clearRect(0, 0, currentEffect.canvasWidth, currentEffect.canvasHeight);

    currentEffect.render();
    requestIdRef.current = requestAnimationFrame(() => animate(ctx));
  }

  React.useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    let timeoutId: number;

    function redrawCanvas() {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;

      const res = getContextAndParentElement(canvas);
      if (!res) return;
      const { ctx, parentElement } = res;

      const textX = parentElement.x + parentElement.width / 2;
      const textY = parentElement.y + parentElement.height / 2;

      effect.current = new Effect(
        ctx,
        canvas.width,
        canvas.height,
        parentElement,
        { x: 0, y: canvas.height },
      );

      effect.current.drawText(textX, textY, children?.toString() ?? "");
      requestIdRef.current = requestAnimationFrame(() => animate(ctx));
    }

    // Debounce i.e. delay updates if changes are too frequent
    function handleWindowResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        redrawCanvas();
      }, 200);
    }

    function handleMouseMove(e: MouseEvent) {
      effect.current?.setMousePosition({ x: e.clientX, y: e.clientY });
      requestIdRef.current = requestAnimationFrame(() => animate);
    }

    function handleMouseOut() {
      effect.current?.setMousePosition({ x: 0, y: window.innerHeight });
      requestIdRef.current = requestAnimationFrame(() => animate);
    }

    redrawCanvas();

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 -mt-3">
      Your browser does not support HTML5 Canvas
    </canvas>
  );
}

export default ParticleText;
