import { random } from "./common.utils";

class Star {
  ctx: CanvasRenderingContext2D;
  effect: StarryBackgroundEffect;
  x: number;
  y: number;
  destinationX: number;
  destinationY: number;
  size: number;
  color: string;

  constructor(
    effect: StarryBackgroundEffect,
    x: number,
    y: number,
    color: string,
    size: number,
  ) {
    this.ctx = effect.ctx;
    this.effect = effect;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;

    if (effect.prefersReducedMotion) {
      this.destinationX = x;
      this.destinationY = y;
    } else {
      this.destinationX = random(0, effect.canvasWidth);
      this.destinationY = random(0, effect.canvasHeight);
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    let ease;
    if (this.size === this.effect.smallSize) {
      ease = 0.065;
    } else if (this.size === this.effect.mediumSize) {
      ease = 0.045;
    } else {
      ease = 0.025;
    }

    this.x += Math.floor((this.destinationX - this.x) * ease);
    this.y += Math.floor((this.destinationY - this.y) * ease);
  }
}

class StarryBackgroundEffect {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  stars: Star[];
  smallSize: number;
  mediumSize: number;
  largeSize: number;
  prefersReducedMotion: boolean;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    prefersReducedMotion: boolean,
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.stars = [];
    this.smallSize = 0.5;
    this.mediumSize = 1;
    this.largeSize = 2;
    this.prefersReducedMotion = prefersReducedMotion;
  }

  createStars(
    numSmallStars: number,
    numMediumStars: number,
    numLargeStars: number,
  ) {
    const generate = (numStars: number, size: number) => {
      for (let i = 0; i < numStars; i++) {
        const x = random(0, this.canvasWidth);
        const y = random(0, this.canvasHeight);
        const color = "oklch(98.4% 0.003 247.858)";

        this.stars.push(new Star(this, x, y, color, size));
      }
    };

    if (this.canvasWidth > 1024) {
      numSmallStars *= 2;
      numMediumStars *= 2;
      numLargeStars *= 2;
    }

    generate(numSmallStars, this.smallSize);
    generate(numMediumStars, this.mediumSize);
    generate(numLargeStars, this.largeSize);
  }

  render() {
    this.stars.forEach((star) => {
      star.update();
      star.draw();
    });
  }
}

export { StarryBackgroundEffect };
