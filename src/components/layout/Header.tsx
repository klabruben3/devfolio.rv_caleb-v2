"use client";

import { FloatingButton } from "../ui";
import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { useSession } from "next-auth/react";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(0);
  const { status } = useSession();

  const isAuthed = status === "authenticated";

  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filteredLinks = navLinks.filter((link) => {
    if (link.title === "Login to GitHub") return !isAuthed;
    if (link.title === "Logout") return isAuthed;
    if (link.title === "Update Github Repo") return isAuthed;
    return true;
  });

  return (
    <header>
      {filteredLinks.map((navLink, i) => (
        <FloatingButton
          key={navLink.title}
          title={navLink.title}
          icon={navLink.icon}
          href={navLink.href}
          index={i}
          iconProps={{ size: 24, color: "white" }}
          position={{ left: screenWidth - 65, top: 55 * (i + 1) }}
        />
      ))}
    </header>
  );
}
