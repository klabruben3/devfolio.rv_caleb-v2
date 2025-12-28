const speed: number = 0.00005;
const strokeWidth: number = 0.5;
const circleRad: number = 1.5;
const opacT: number = 0.0005;
const circleCount: number = 50;
let opacity: number = 0;

interface CanvasRef {
  canvas: OffscreenCanvas | null;
}

interface CtxRef {
  ctx: OffscreenCanvasRenderingContext2D | null;
}

const canvasRef: CanvasRef = { canvas: null };
const ctxRef: CtxRef = { ctx: null };

interface Vec2 {
  x: number;
  y: number;
}

interface Circle extends Vec2 {
  target: Vec2;
  progress: number;
  isConnected: boolean;
}

const createRandomPos = (): Vec2 => ({
  x:
    Math.random() *
      ((canvasRef.canvas as OffscreenCanvas).width - 2 * circleRad) +
    circleRad,
  y:
    Math.random() *
      ((canvasRef.canvas as OffscreenCanvas).height - 2 * circleRad) +
    circleRad,
});

const circles: Circle[] = [];

const createCircles = (): void => {
  for (let i = 0; i < circleCount; i++) {
    const initRandPos = createRandomPos();
    circles.push({
      x: initRandPos.x,
      y: initRandPos.y,
      target: createRandomPos(),
      progress: 0,
      isConnected: false,
    });
  }
};

const connectCircles = (): void => {
  const ctx = ctxRef.ctx as OffscreenCanvasRenderingContext2D;
  ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(opacity, 0.2)})`;
  ctx.lineWidth = strokeWidth;
  ctx.beginPath();
  ctx.lineCap = "round";

  for (const c of circles) {
    c.isConnected = false;
  }

  for (const c of circles) {
    for (const connectC of circles) {
      if (c === connectC) continue;

      const dx = connectC.x - c.x;
      const dy = connectC.y - c.y;

      if (Math.hypot(dx, dy) < 100) {
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(connectC.x, connectC.y);

        c.isConnected = true;
        connectC.isConnected = true;
      }
    }
  }
  ctx.stroke();
};

const drawCircles = (): void => {
  const ctx = ctxRef.ctx as OffscreenCanvasRenderingContext2D;
  ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.lineWidth = 0.5;

  for (const c of circles) {
    ctx.beginPath();
    ctx.strokeStyle = c.isConnected
      ? `rgba(255, 255, 255, ${opacity})`
      : "black";
    ctx.arc(c.x, c.y, circleRad, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
};

const moveCircles = (): void => {
  for (const c of circles) {
    c.progress += speed;
    if (c.progress > 1) c.progress = 1;

    const t = c.progress;
    const ease = t ** 2 * (3 - 2 * t);

    // Alternating ease
    c.x += (c.target.x - c.x) * ease;
    c.y += (c.target.y - c.y) * ease;

    // Linear
    c.x += (c.target.x - c.x) * speed;
    c.y += (c.target.y - c.y) * speed;

    if (Math.hypot(c.target.x - c.x, c.target.y - c.y) < 1) {
      c.target = createRandomPos();
      c.progress = 0;
    }
  }
};

let animationFrame: number;

const animate = (): void => {
  const ctx = ctxRef.ctx as OffscreenCanvasRenderingContext2D;
  const canvas = canvasRef.canvas as OffscreenCanvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  connectCircles();
  drawCircles();
  moveCircles();

  opacity += opacity < 0.5 ? opacT : 0;

  animationFrame = requestAnimationFrame(animate);
};

interface WorkerMessage {
  commit: "init" | "resize";
  canvas?: OffscreenCanvas;
  w: number;
  h: number;
  src?: unknown;
  c?: unknown;
}

onmessage = (e: MessageEvent<WorkerMessage>): void => {
  const { commit, canvas, w, h } = e.data;

  switch (commit) {
    case "init":
      canvasRef.canvas = canvas as OffscreenCanvas;
      ctxRef.ctx = canvasRef.canvas.getContext(
        "2d"
      ) as OffscreenCanvasRenderingContext2D;

      canvasRef.canvas.width = w;
      canvasRef.canvas.height = h;

      createCircles();
      animationFrame = requestAnimationFrame(animate);
      break;

    case "resize":
      (canvasRef.canvas as OffscreenCanvas).width = w;
      (canvasRef.canvas as OffscreenCanvas).height = h;
      break;
  }
};
