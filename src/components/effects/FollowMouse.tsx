"use client";

import { useEffect, useRef, useState } from "react";

export default function FollowMouse() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const box = boxRef.current;
    if (!box) return;

    let timeout: ReturnType<typeof setTimeout>;
    let accessible = true;
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      const el = e.target;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const isButton =
          el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement;
        const scale = isButton ? 1.5 : 1;

        clearTimeout(timeout);

        if (box.classList.contains("opacity-0")) {
          box.classList.remove("opacity-0");
          box.classList.add("opacity-100");
        }

        box.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;

        if (isButton && accessible) {
          box.style.backgroundColor = "white";
          box.style.borderColor = "black";
          accessible = false;
        } else if (!isButton && !accessible) {
          box.style.backgroundColor = "transparent";
          box.style.borderColor = "white";
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
      window.removeEventListener("pointermove", handleMouseMove);
      clearTimeout(timeout);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <div
      ref={boxRef}
      className="fixed h-[5px] w-[5px] bg-black border-[1.5px] border-[white] opacity-0 transition-[opacity,transform] duration-[200ms] rounded-full ease-out pointer-events-none z-50"
    ></div>
  );
}
