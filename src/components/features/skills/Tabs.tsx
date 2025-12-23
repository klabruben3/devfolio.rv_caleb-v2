import { useState } from "react";
import { skillsByIndustry } from "./skillsData";

type SetActive = { setActive: (i: number) => void };

export default function Tabs({ setActive }: SetActive) {
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-5 bg-[#22222288] p-2 rounded-[7px]">
      {Object.keys(skillsByIndustry).map((industry, i) => (
        <button
          key={industry}
          onClick={() => {
            setActive(i);
            setTabActive(i);
          }}
          className={`rounded-[5px] transition-[color] transition-duration-[150ms] ease-in focus:outline-[white] focus:text-[orangered] outline outline-2 outline-dashed ${
            tabActive == i
              ? "outline-white text-[orangered]"
              : "outline-[orangered] text-[white]"
          }`}
        >
          <span className="block w-full h-full px-[10px] truncate">
            {industry}
          </span>
        </button>
      ))}
    </div>
  );
}
