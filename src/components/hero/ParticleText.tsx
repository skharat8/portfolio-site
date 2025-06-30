import type { PropsWithChildren } from "react";
import React from "react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { Effect, getContextAndParentElement } from "@/utils/canvas.utils";
import { getIsMobileInitialState } from "@/utils/common.utils";

function ParticleText({ children }: PropsWithChildren) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const requestIdRef = React.useRef(0);
  const effect = React.useRef<Effect>(null);

  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobile, _] = React.useState(getIsMobileInitialState);

  // Get the topmost section of the app
  const heroSectionRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    heroSectionRef.current = document.getElementById("home");
  }, []);

  function animate(ctx: CanvasRenderingContext2D) {
    if (!effect.current) return;
    const currentEffect = effect.current;
    ctx.clearRect(0, 0, currentEffect.canvasWidth, currentEffect.canvasHeight);

    currentEffect.render();

    if (prefersReducedMotion) {
      cancelAnimationFrame(requestIdRef.current);
    } else {
      requestIdRef.current = requestAnimationFrame(() => animate(ctx));
    }
  }

  React.useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    let timeoutId: number;

    function redrawCanvas() {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;

      const res = getContextAndParentElement(canvas);
      const heroSection = heroSectionRef.current?.getBoundingClientRect();

      if (!res || !heroSection) return;
      const { ctx, parentElement } = res;

      // Parent element's y will be negative if user has scrolled down.
      // So, get the negative distance to the very top of the page and
      // subtract the negative y distance of the parent to get the actual
      // distance from top of viewport to top of container (based on
      // origin x=0,y=0 being at top left edge of the app).
      const distanceToTopEdge = heroSection.top;
      const distanceToContainerTop = parentElement.top;
      parentElement.y = -(distanceToTopEdge - distanceToContainerTop);

      // Parent container dimensions are changing on resize.
      // Fix bug where the t becomes an l on resize.
      parentElement.y =
        canvas.width < 600 ? parentElement.y - 8 : parentElement.y - 4;
      parentElement.width += 4.22;

      const textX = parentElement.x + parentElement.width / 2;
      const textY = parentElement.y + parentElement.height / 2;

      effect.current = new Effect(
        ctx,
        canvas.width,
        canvas.height,
        parentElement,
        { x: 0, y: canvas.height },
        prefersReducedMotion,
      );

      effect.current.drawText(textX, textY, children?.toString() ?? "");

      cancelAnimationFrame(requestIdRef.current);
      requestIdRef.current = requestAnimationFrame(() => animate(ctx));
    }

    // Debounce i.e. delay updates if changes are too frequent
    function handleWindowResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        redrawCanvas();
      }, 300);
    }

    function handleMouseMove(e: MouseEvent) {
      effect.current?.setMousePosition({ x: e.clientX, y: e.clientY });
      requestIdRef.current = requestAnimationFrame(() => animate);
    }

    function handleMouseOut() {
      effect.current?.setMousePosition({ x: 0, y: window.innerHeight });
      requestIdRef.current = requestAnimationFrame(() => animate);
    }

    // Wait for custom font to load before the initial draw
    setTimeout(() => redrawCanvas(), 300);

    // On Chrome, window resize is triggered twice when site is loaded by
    // typing in the address field. This is because the keyboard is visible
    // initially, which disappears after clicking enter; this is seen as a
    // window height resize. Add a short timer to delay adding the resize
    // event listener.
    setTimeout(
      () => window.addEventListener("resize", handleWindowResize),
      300,
    );

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleWindowResize);

      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 z-2">
      Your browser does not support HTML5 Canvas
    </canvas>
  );
}

export default ParticleText;
