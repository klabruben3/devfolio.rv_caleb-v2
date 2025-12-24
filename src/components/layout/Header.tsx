"use client";

import { FloatingButton } from "../ui";
import { useEffect, useState } from "react";
import { navLinks } from "../data";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <header>
      {navLinks.map((navLink, i) => (
        <FloatingButton
          title={navLink.title}
          icon={navLink.icon}
          key={i}
          index={i}
          iconProps={{ size: 24, color: "white" }}
          position={{ left: screenWidth - 65, top: 55 * (i + 1) }}
        />
      ))}
    </header>
  );
}
