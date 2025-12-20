import { PolarAngleAxis, RadialBarChart, RadialBar, Cell } from "recharts";
import { motion } from "framer-motion";
import { skillsByIndustry } from "./skillsData";

function SkillsDescription() {
  const colors = ["#E75480", "#4B8BF4", "#00FFC8", "#FFD300", "#FF6A00"];
  return (
    <>
      {Object.entries(skillsByIndustry).map((industry, i) => (
        <div key={i} className="mb-2">
          <span style={{ color: colors[i] }}>{industry[0]}</span>
          <p className="text-[#999999]">{industry[1].description}</p>
        </div>
      ))}
    </>
  );
}

function SkillsRadial({ active }: { active: number }) {
  return (
    <>
      <div
        className="w-full sm:w-[450px] lg:w-[580px] grid grid-cols-1 p-3 sm:grid-cols-2 border-2 border-dashed border-[orangered] rounded-lg bg-[#22222269] float-none sm:float-left mr-0 sm:mr-5 mb-2"
        style={{ boxShadow: "5px 5px 5px #560053" }}
      >
        <div className="flex flex-col gap-2">
          {Object.entries(skillsByIndustry)[active][1].skills.map(
            (skill, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src={skill.logo}
                      width={16}
                      alt={skill.logo}
                      style={{ color: skill.color }}
                    />
                    <span className="truncate">{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded bg-[#22222269] overflow-hidden">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    style={{
                      backgroundColor: skill.color,
                    }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="block h-full"
                  ></motion.span>
                </div>
              </div>
            )
          )}
        </div>

        {/* Radial Bar */}
        <div className="pointer-events-none select-none">
          <RadialBarChart
            width="100%"
            height="100%"
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="90%"
            data={Object.entries(skillsByIndustry)[active][1].skills}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              stroke="orangered"
              dataKey="level"
              label={{
                position: "insideStart",
                fill: "white",
                fontSize: 3,
                formatter: (value) => `${value}%`,
              }}
            >
              {/* Sets color for each radial bar */}
              {Object.entries(skillsByIndustry)[active][1].skills.map(
                (skill, i) => (
                  <Cell key={i} fill={skill.color} />
                )
              )}
            </RadialBar>
          </RadialBarChart>
        </div>
      </div>
    </>
  );
}

export { SkillsRadial, SkillsDescription };
