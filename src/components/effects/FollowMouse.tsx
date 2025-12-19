"use client";

import { useEffect, useRef } from "react";

export default function FollowMouse() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let timeout: ReturnType<typeof setTimeout>;
    let accessible = true;
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const isButton =
          e.target instanceof HTMLButtonElement ||
          e.target instanceof HTMLAnchorElement;
        const scale = isButton ? 0.6 : 1;
        const angle = isButton ? 90 : 0;

        clearTimeout(timeout);

        if (box.classList.contains("opacity-0")) {
          box.classList.remove("opacity-0");
          box.classList.add("opacity-100");
        }

        box.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px) rotate(${angle}deg) scale(${scale})`;

        if (isButton && accessible) {
          box.style.backgroundColor = "orangered";
          box.style.border = "none";
          box.style.borderRadius = "50%";
          accessible = false;
        } else if (!isButton && !accessible) {
          box.style.backgroundColor = "transparent";
          box.style.border = "3px solid orangered";
          box.style.borderRadius = "0";
          accessible = true;
        }

        timeout = setTimeout(() => {
          box.classList.remove("opacity-100");
          box.classList.add("opacity-0");
        }, 500);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="fixed h-[10px] w-[10px] border-[3px] border-[orangered] opacity-0 transition-[opacity,transform] duration-[250ms] ease-out pointer-events-none z-10"
    ></div>
  );
}
