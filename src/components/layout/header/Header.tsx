"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { link } from "fs";

export default function Header({ isTop }: { isTop: boolean }) {
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isMenuOpen = useRef<boolean>(false);
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
    linksRef.current.forEach((link) => {
      if (!link) return;
      link.classList.remove("-translate-x-full", "opacity-100");
    });
    if (!isMobile || !button) return;

    const handleOutsideClick = () => {
      button.style.transform = "scale(1)";
      isMenuOpen.current = false;
      linksRef.current.forEach((link) => {
        if (!link) return;
        link.classList.remove("-translate-x-full", "opacity-100");
      });

      window.removeEventListener("click", handleOutsideClick);
    };

    const handleButtonClick = () => {
      if (isMenuOpen.current) return;
      button.style.transform = "scale(0)";
      isMenuOpen.current = true;

      linksRef.current.forEach((link, i) => {
        if (!link) return;
        link.style.transitionDelay = `${i * 100}ms`;
        link.classList.add("-translate-x-full", "opacity-100");
      });

      setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
      });
    };

    button.addEventListener("click", handleButtonClick);
    return () => {
      button.removeEventListener("click", handleButtonClick);
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
            Software Developer React, Next.js, TypeScript
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
      <nav className="absolute top-[calc(100%+10px)] right-[-100%] w-full min-[768px]:static min-[768px]:w-auto">
        <ul className="flex gap-[25px] flex-col min-[768px]:flex-row">
          {navTitles.map((title, i) => (
            <li
              key={title}
              className="active:scale-80 min-[768px]:active:scale-100 min-[768px]:border-none border border-gray-500 min-[768px]:bg-transparent bg-black/80 opacity-0 min-[768]:opacity-100 transition-[transform, opacity] duration-500 ease min-[768px]:transition-none"
              ref={(el) => {
                linksRef.current[i] = el;
              }}
            >
              <Link
                href={`#${title.toLowerCase()}`}
                className="block text-gray-500 hover:text-white py-3 min-[768px]:py-0 text-center"
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
