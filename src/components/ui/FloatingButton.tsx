"use client";
import { useRef, useEffect } from "react";

export default function FloatingButton({
  title,
  icon: Icon,
  position,
  buttonWidth,
  iconProps,
}: {
  title: string;
  icon: React.ElementType;
  position: { left: number; top: number };
  buttonWidth: number;
  iconProps?: React.ComponentProps<React.ElementType>;
}) {
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

    const onPointerDown = (e: PointerEvent) => {
      pressTimeout = setTimeout(() => {
        const rect = button.getBoundingClientRect();

        grabX = e.clientX - rect.left;
        grabY = e.clientY - rect.top;

        dragging = true;
        button.setPointerCapture(e.pointerId);

        button.classList.add(...dragStyle);
        button.classList.remove("bg-[wheat]/50");
      }, 300);
    };

    let rafId: number | null;
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || rafId != null) return;

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
    };

    button.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      button.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      aria-label={title}
      className="
        fixed
        z-50
        rounded-lg
        bg-[wheat]/50
        touch-none
        transition-[background-color,transform]
        duration-100
        flex
        justify-center
        items-center
      "
      style={{
        translate: `${position.left}px ${position.top}px`,
        width: buttonWidth,
        height: buttonWidth,
      }}
      onClick={() => (location.hash = title.toLowerCase())}
    >
      <Icon {...iconProps} />
    </button>
  );
}
