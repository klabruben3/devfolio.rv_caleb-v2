"use client";

import { House } from "lucide-react";
import { FloatingButton } from "../ui";

function Home() {
  return (
    <FloatingButton
      title="Home"
      icon={House}
      iconProps={{ size: 24, color: "white" }}
      position={{ left: 50, top: 50 }}
      buttonWidth={50}
    />
  );
}

export { Home };
