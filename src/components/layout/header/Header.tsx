"use client";
import { useEffect, useRef, useState } from "react";
import "./header.css";

export default function Header({ isTop }: { isTop: boolean }) {
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
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

  return (
    <header
      className={`before:absolute before:bottom-0 before:h-[1px] before:left-0 before:right-0
    ${!isTop && isMobile ? "before:bg-[greenyellow]" : ""}
    ${!isTop && !isMobile ? "before:bg-[orangered] backdrop-blur-md" : ""}
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
        <button>
          <img src="/skills/panel-right-open.svg" />
        </button>
      ) : null}
      <nav>
        <ul>
          {navTitles.map((title, i) => (
            <li key={title}>
              <a
                ref={(el) => {
                  linksRef.current[i] = el;
                }}
                href={`#${title.toLowerCase()}`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
