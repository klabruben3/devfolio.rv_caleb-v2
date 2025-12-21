"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header({ isTop }: { isTop: boolean }) {
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navTitles = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const nav = navRef.current;
    linksRef.current.forEach((link) => {
      if (!link) return;
      link.classList.remove("-translate-x-full", "opacity-100");
    });
    if (!isMobile || !button || !nav) return;

    let currLink: HTMLLIElement;
    let isHovering = false;
    const handlePointerMove = (e: PointerEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const li = el?.closest("li");

      if (li && !isHovering) {
        currLink = li;
        currLink.style.scale = "0.95";
        currLink.style.borderColor = "orangered";
        isHovering = true;
      } else if (!li && isHovering) {
        currLink.style.scale = "1";
        currLink.style.borderColor = "gray";
        isHovering = false;
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (currLink && isHovering) {
        currLink.style.scale = "1";
        currLink.style.borderColor = "gray";
        isHovering = false;
      }
    };

    // Timeout
    let closeMenuTimout: ReturnType<typeof setTimeout>;
    let openMenuTimout: ReturnType<typeof setTimeout>;
    let outsideEventTimout: ReturnType<typeof setTimeout>;
    let removeDelayTimout: ReturnType<typeof setTimeout>;
    //

    const handleOutsideClick = () => {
      button.style.transform = "scale(1)";
      linksRef.current.forEach((link, i) => {
        if (!link) return;
        link.style.transitionDelay = `${i * 100}ms`;
        link.classList.remove("translate-x-0", "opacity-100");
        link.classList.add("translate-x-full", "opacity-0");
      });

      closeMenuTimout = setTimeout(() => {
        nav.classList.remove("pointer-events-auto", "before:scale-y-100");
        nav.classList.add("pointer-events-none", "before:scale-y-0");
      }, 500);

      window.removeEventListener("click", handleOutsideClick);
      nav.removeEventListener("pointermove", handlePointerMove);
      nav.removeEventListener("pointerup", handlePointerUp);
    };

    const handleButtonClick = () => {
      button.style.transform = "scale(0)";

      linksRef.current.forEach((link, i) => {
        if (!link) return;
        link.style.transitionDelay = `${i * 100}ms`;
        link.classList.remove("translate-x-full", "opacity-0");
        link.classList.add("translate-x-0", "opacity-100");

        removeDelayTimout = setTimeout(() => {
          link.style.transitionDelay = "0ms";
        }, 250);
      });

      openMenuTimout = setTimeout(() => {
        nav.classList.remove("pointer-events-none", "before:scale-y-0");
        nav.classList.add("pointer-events-auto", "before:scale-y-100");
      }, 500);

      outsideEventTimout = setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
        nav.addEventListener("pointermove", handlePointerMove);
        nav.addEventListener("pointerup", handlePointerUp);
      });
    };

    button.addEventListener("click", handleButtonClick);
    return () => {
      button.removeEventListener("click", handleButtonClick);

      // clear timeouts
      clearTimeout(closeMenuTimout);
      clearTimeout(openMenuTimout);
      clearTimeout(outsideEventTimout);
      clearTimeout(removeDelayTimout); //
    };
  }, [isMobile]);

  return (
    <header
      className={`sticky top-0 z-10 flex justify-between items-center p-[20px] transition-[backdrop-filter] duration-500 before:absolute before:bottom-0 before:h-[1px] before:left-0 before:right-0
    ${!isTop ? "backdrop-blur-md before:bg-[orangered]" : ""}
  `}
    >
      <div className="flex items-bottom gap-2">
        <img src="/rv_logo.svg" alt="Logo" width={48} />
        <div className="flex flex-col leading-none justify-center">
          <span className="text-[1.2rem] font-bold">Ruben Caleb</span>
          <span className="text-sm">
            Software Developer | React, Next.js, TypeScript
          </span>
        </div>
      </div>

      {isMobile ? (
        <button
          ref={buttonRef}
          className="rounded-sm bg-white/20 transition-transform duration-500"
        >
          <img src="/menu.svg" width={32} />
        </button>
      ) : null}
      <nav
        ref={navRef}
        className="absolute touch-none min-[768px]:touch-auto top-full right-0 pointer-events-none min-[768px]:pointer-events-auto bg-transparent h-screen min-[768px]:h-auto w-full min-[768px]:static min-[768px]:w-auto before:content-[''] before:fixed before:inset-0 min-[768px]:before:static before:bg-[blue]/5 before:origin-top-left before:scale-y-0 before:transition-transform duration-500"
      >
        <ul className="flex gap-[25px] flex-col min-[768px]:flex-row mt-[10px] min-[768px]:mt-0">
          {navTitles.map((title, i) => (
            <li
              key={title}
              className="min-[768px]:border-none border-3 border-gray-500 min-[768px]:bg-transparent bg-black/80 opacity-0 min-[768]:opacity-100 transition-[transform, opacity] duration-250 ease min-[768px]:transition-none translate-x-full min-[768px]:translate-x-0"
              ref={(el) => {
                linksRef.current[i] = el;
              }}
            >
              <Link
                href={`#${title.toLowerCase()}`}
                className="block text-gray-500 hover:text-white py-3 min-[768px]:py-0 text-center active:bg-[cyan]/20 font-bold min-[768px]:active:bg-transparent"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
