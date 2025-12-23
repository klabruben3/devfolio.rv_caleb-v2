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

    let firstTimeout: ReturnType<typeof setTimeout>;
    let secondTimeout: ReturnType<typeof setTimeout>;
    let thirdTimeout: ReturnType<typeof setTimeout>;
    let accessible = true;
    let isVisible = false;
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      const el = e.target;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const isButton =
          el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement;

        clearTimeout(firstTimeout);
        clearTimeout(secondTimeout);
        clearTimeout(thirdTimeout);

        box.style.transform = `translate(-50%, -50%) translate(${
          e.clientX - box.offsetLeft
        }px, ${e.clientY - box.offsetTop}px)`;
        if (!isVisible) {
          box.classList.remove("animate-pulse", "bg-green-500");
          box.classList.add(
            "animate-none",
            "bg-black",
            "border-2",
            "border-white"
          );

          isVisible = true;
        }

        if (isButton && accessible) {
          box.classList.remove("bg-black", "border-white");
          box.classList.add("bg-white", "border-black");
          accessible = false;
        } else if (!isButton && !accessible) {
          box.classList.remove("bg-white", "border-black");
          box.classList.add("bg-black", "border-white");
          accessible = true;
        }

        firstTimeout = setTimeout(() => {
          box.classList.remove("opacity-100");
          box.classList.add("opacity-0");
        }, 1000);

        secondTimeout = setTimeout(() => {
          !accessible
            ? box.classList.remove("bg-white", "border-black")
            : box.classList.remove("bg-black", "border-white");
          box.classList.remove("border-2");
          accessible = !accessible ? true : accessible;
          box.style.transform = "translate(0, 0)";
          box.classList.add("bg-green-500");
        }, 1250);

        thirdTimeout = setTimeout(() => {
          box.classList.remove("opacity-0");
          box.classList.add("opacity-100", "animate-pulse");
          isVisible = false;
        }, 1500);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      clearTimeout(thirdTimeout);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <div
      ref={boxRef}
      className="fixed h-1.5 w-1.5 opacity-100 transition-[transform,opacity,background-color] duration-[250ms] rounded-full ease-out pointer-events-none z-50 bg-[green] animate-pulse"
    ></div>
  );
}
