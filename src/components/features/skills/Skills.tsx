"use client";
import { useState } from "react";

import Tabs from "./Tabs";
import { SkillsDescription, SkillsRadial } from "./SkillsCharts";

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div id="skills">
        <p id="heading" className="text-xl text-center mb-2">
          Skills & Expertise
        </p>
        <Tabs setActive={setActive} />
        <SkillsRadial active={active} />
        <SkillsDescription />
      </div>
    </>
  );
}
