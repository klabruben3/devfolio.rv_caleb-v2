"use client";

import { useEffect, useRef, useState } from "react";

export default function FollowMouse() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const detectPointer = (e: PointerEvent): void => {
      if (e.pointerType === "touch") {
        setEnabled(false);
      } else {
        setEnabled(true);
      }

      window.removeEventListener("pointerdown", detectPointer);
    };

    window.addEventListener("pointerdown", detectPointer, { once: true });

    return () => {
      window.removeEventListener("pointerdown", detectPointer);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const box = boxRef.current;
    if (!box) return;

    let firstTimeout: ReturnType<typeof setTimeout>;
    let secondTimeout: ReturnType<typeof setTimeout>;
    let thirdTimeout: ReturnType<typeof setTimeout>;
    let rafId: number | null = null;

    let accessible = true;
    let isVisible = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (rafId !== null) return;

      const el = e.target as HTMLElement;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const isButton = el?.closest("button") || el?.closest("a");

        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        clearTimeout(thirdTimeout);

        box.style.transform = `translate(-50%, -50%) translate(${
          e.clientX - box.offsetLeft
        }px, ${e.clientY - box.offsetTop}px)`;

        if (box.style.opacity == '0') {
          box.style.opacity = '1';
        }

        if (!isVisible) {
          box.classList.remove("animate-pulse", "bg-green-500");
          box.classList.add("bg-black", "border-2", "border-white");
          isVisible = true;
        }

        if (isButton && accessible) {
          box.classList.replace("bg-black", "bg-white");
          box.classList.replace("border-white", "border-black");
          accessible = false;
        } else if (!isButton && !accessible) {
          box.classList.replace("bg-white", "bg-black");
          box.classList.replace("border-black", "border-white");
          accessible = true;
        }

        firstTimeout = setTimeout(() => {
          box.style.opacity = "0";
        }, 3000);

        secondTimeout = setTimeout(() => {}, 3100);

        thirdTimeout = setTimeout(() => {
          box.classList.remove("border-2", "bg-black", "bg-white");
          box.classList.add("animate-pulse", "bg-green-500");
          box.style.transform = "translate(0, 0)";
          accessible = true;
          isVisible = false;
        }, 4000);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      clearTimeout(thirdTimeout);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  return (
    <div
      ref={boxRef}
      aria-hidden
      className="
        fixed
        h-1.5
        w-1.5
        rounded-full
        pointer-events-none
        z-50
        bg-green-500
        animate-pulse
        transition-[transform,opacity,background-color]
        duration-[100ms]
      "
    />
  );
}
