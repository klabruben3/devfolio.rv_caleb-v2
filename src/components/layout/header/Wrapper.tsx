"use client";
import { useRef, useEffect, useState } from "react";
import Header from "./Header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isTop, setIsTop] = useState<boolean>(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener("scroll", () => {
      if (wrapper.scrollTop > 100) setIsTop(false);
      else setIsTop(true);
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`fixed flex flex-col gap-2 shadow-[0_0_5px_0_darkcyan] mx-[100px] my-[10px] h-[calc(100vh-20px)] overflow-auto scrollbar-hide`}
    >
      <Header isTop={isTop} />
      {children}
    </div>
  );
}
