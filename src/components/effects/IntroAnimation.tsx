"use client";

import { useRef, useEffect } from "react";

export default function IntroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const offscreen = useRef<OffscreenCanvas | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    workerRef.current = new Worker(
      new URL("../../workers/introAnimation.worker.ts", import.meta.url),
      { type: "module" }
    );

    offscreen.current = canvas.transferControlToOffscreen();

    workerRef.current.postMessage(
      {
        canvas: offscreen.current,
        w: canvas.offsetWidth,
        h: canvas.offsetHeight,
        commit: "init",
      },
      [offscreen.current]
    );

    const handleResize = () =>
      workerRef.current?.postMessage({
        w: canvas.offsetWidth,
        h: canvas.offsetHeight,
        commit: "resize",
      });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full pointer-events-none z-[-1]"
    />
  );
}
