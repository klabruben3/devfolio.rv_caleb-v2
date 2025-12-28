"use client";
import { login, logout } from "./auth";

import { useEffect, useRef } from "react";
import type { FloatButton } from "../data/types";
import { motion } from "motion/react";

export default function FloatingButton({
  title,
  icon: Icon,
  href,
  position,
  index = 0,
  iconProps,
}: FloatButton) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dragStyle = [
    "outline",
    "outline-3",
    "outline-double",
    "outline-[orangered]",
  ];

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let pressTimeout: ReturnType<typeof setTimeout> | null = null;
    let dragging = false;
    let grabX = 0;
    let grabY = 0;
    let rafId: number | null = null;

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        const x = e.clientX - grabX - position.left;
        const y = e.clientY - grabY - position.top;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (pressTimeout) {
        clearTimeout(pressTimeout);
        pressTimeout = null;
      }

      if (dragging) {
        dragging = false;
        button.releasePointerCapture(e.pointerId);
      }

      button.classList.add("bg-[wheat]/50");
      button.classList.remove(...dragStyle);

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    const onPointerDown = (e: PointerEvent) => {
      pressTimeout = setTimeout(() => {
        const rect = button.getBoundingClientRect();
        grabX = e.clientX - rect.left;
        grabY = e.clientY - rect.top;

        dragging = true;
        button.setPointerCapture(e.pointerId);

        button.classList.add(...dragStyle);
        button.classList.remove("bg-[wheat]/50");

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
      }, 300);
    };

    button.addEventListener("pointerdown", onPointerDown);

    return () => {
      button.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      if (pressTimeout) clearTimeout(pressTimeout);
    };
  }, [position.left, position.top]);

  return (
    <motion.button
      ref={buttonRef}
      aria-label={title}
      title={title}
      className="
        fixed
        z-50
        rounded-lg
        bg-[wheat]/50
        touch-none
        p-3
      "
      initial={{ opacity: 0, transform: "translateX(50px)" }}
      animate={{ opacity: 1, transform: "translateX(0)" }}
      transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
      onDoubleClick={() => {
        if (!href) {
          if (title == "Login to GitHub") {
            login();
          } else if (title == "Logout") {
            logout();
          }
        } else {
          location.href = href;
        }
      }}
    >
      <Icon {...iconProps} />
    </motion.button>
  );
}

FloatingButton.displayName = "FloatingButton";
