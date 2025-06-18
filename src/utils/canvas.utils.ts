import { random } from "./common.utils";

function getContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    console.error("No canvas context found");
    return null;
  }

  return ctx;
}

function getContextAndParentElement(canvas: HTMLCanvasElement) {
  const ctx = getContext(canvas);
  if (!ctx) return null;

  if (!canvas.parentElement) {
    console.error("No parent element found for the canvas");
    return null;
  }

  const parentElement = canvas.parentElement.getBoundingClientRect();

  return { ctx, parentElement };
}

class Particle {
  ctx: CanvasRenderingContext2D;
  effect: Effect;
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  prefersReducedMotion: boolean;

  constructor(effect: Effect, x: number, y: number, color: string) {
    this.ctx = effect.ctx;
    this.effect = effect;
    this.originX = x;
    this.originY = y;
    this.size = effect.step - 1;
    this.color = color;
    this.prefersReducedMotion = effect.prefersReducedMotion;

    if (this.prefersReducedMotion) {
      this.x = x;
      this.y = y;
    } else {
      this.x =
        effect.canvasWidth < 1024
          ? random(0, effect.canvasWidth)
          : random(0.35 * effect.canvasWidth, 0.85 * effect.canvasWidth);
      this.y = effect.canvasHeight;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    const mouseToParticleX = this.effect.mouse.x - this.x;
    const mouseToParticleY = this.effect.mouse.y - this.y;
    const distance = mouseToParticleX ** 2 + mouseToParticleY ** 2;
    const force = -this.effect.mouse.radius / distance;
    let angleInRadians = 0;
    let velocityX = 0;
    let velocityY = 0;
    let ease = 0;

    if (!this.prefersReducedMotion) {
      if (distance < this.effect.mouse.radius) {
        angleInRadians = Math.atan2(mouseToParticleY, mouseToParticleX);
        velocityX += force * Math.cos(angleInRadians);
        velocityY += force * Math.sin(angleInRadians);
      }

      const friction = Math.random() * 0.6 + 0.15;
      ease = Math.random() * 0.08 + 0.005;
      velocityX *= friction;
      velocityY *= friction;
    }

    this.x += (this.originX - this.x) * ease + velocityX;
    this.y += (this.originY - this.y) * ease + velocityY;
  }
}

class Effect {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  containerWidth: number;
  containerHeight: number;
  contentX: number;
  contentY: number;
  step: number;
  particles: Particle[];
  mouse: { x: number; y: number; radius: number };
  prefersReducedMotion: boolean;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    containerElement: DOMRect,
    mouseProperties: { x: number; y: number },
    prefersReducedMotion: boolean,
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.containerWidth = containerElement.width;
    this.containerHeight = containerElement.height;
    this.contentX = containerElement.x;
    this.contentY = containerElement.y;
    this.prefersReducedMotion = prefersReducedMotion;

    this.step = 3;
    this.particles = [];

    this.mouse = {
      x: mouseProperties.x,
      y: mouseProperties.y,
      radius: 15000,
    };
  }

  setMousePosition(mouse: { x: number; y: number }) {
    this.mouse.x = mouse.x;
    this.mouse.y = mouse.y;
  }

  drawText(x: number, y: number, text: string) {
    const gradient = this.ctx.createLinearGradient(
      this.contentX,
      this.contentY,
      this.contentX + this.containerWidth,
      this.contentY + this.containerHeight,
    );
    gradient.addColorStop(0.3, "red");
    gradient.addColorStop(0.5, "orange");
    gradient.addColorStop(0.7, "yellow");
    this.ctx.fillStyle = gradient;
    // this.ctx.fillStyle = "oklch(98.4% 0.003 247.858)";

    let fontSize;
    if (this.canvasWidth < 768) {
      fontSize = "3.8rem";
    } else if (this.canvasWidth < 1024) {
      fontSize = "4.8rem";
    } else if (this.canvasWidth < 1280) {
      fontSize = "5.8rem";
    } else {
      fontSize = "6.8rem";
    }

    this.ctx.font = `bold ${fontSize} 'Playfair Display Variable'`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    // this.ctx.strokeStyle = "oklch(98.4% 0.003 247.858)";

    this.ctx.fillText(text, x, y);
    // this.ctx.strokeText(text, x, y);

    this.createParticles();
  }

  createParticles() {
    const initialX = 0;
    const initialY = 0;
    const finalX = this.canvasWidth;
    const finalY = this.canvasHeight;
    const pixels = this.ctx.getImageData(
      initialX,
      initialY,
      finalX,
      finalY,
    ).data;

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let y = initialY; y < finalY; y += this.step) {
      for (let x = initialX; x < finalX; x += this.step) {
        // Pixels has RGBA values for every pixel on the canvas. So,
        // check every 4 indexes in each square defined by the content.
        const index = (y * (finalX - initialX) + x) * 4;
        const alpha = pixels[index + 3];

        // If alpha is zero, pixel is transparent.
        if (alpha && alpha > 0) {
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const color = `rgb(${red} ${green} ${blue})`;

          const particle = new Particle(this, x, y, color);
          this.particles.push(particle);
        }
      }
    }
  }

  render() {
    this.particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  }
}

export { getContext, getContextAndParentElement, Effect, Particle };
