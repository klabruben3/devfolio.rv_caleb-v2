import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  Cell,
  PolarRadiusAxis,
} from "recharts";
import { motion } from "framer-motion";
import { skillsByIndustry, averageSkill } from "./skillsData";

function SkillsRadarAll({ active }: { active: number }) {
  const skillCount = Object.keys(averageSkill[0]).length - 1;
  const colors = ["#E75480", "#4B8BF4", "#00FFC8", "#FFD300", "#FF6A00"];
  const radars: { color?: string; char?: string }[] = [];
  for (let i = 65; i < 65 + skillCount; i++) {
    const radar = { color: colors[i - 65], char: String.fromCharCode(i) };
    radars.push(radar);
  }
  return (
    <div>
      {/* Radial Bar */}
      <div className="float-right pointer-events-none">
        <RadarChart
          width={400}
          height={400}
          cy="50%"
          cx="50%"
          outerRadius="65%"
          data={averageSkill}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="name" fontSize={13} />
          <PolarRadiusAxis type="number" domain={[0, 100]} fontSize={12} />
          {radars.map((radar, i) => (
            <Radar
              key={i}
              dataKey={radar.char}
              stroke={radar.color}
              strokeWidth={2}
              fillOpacity={0.2}
            />
          ))}
        </RadarChart>
      </div>

      {Object.entries(skillsByIndustry).map((industry, i) => (
        <div key={i} className="mb-2">
          <span style={{ color: colors[i] }}>{industry[0]}</span>
          <p className="text-[#999999]">{industry[1].description}</p>
        </div>
      ))}
    </div>
  );
}

const skillCount = Object.keys(averageSkill[0]).length - 1;
const colors = ["#E75480", "#4B8BF4", "#00FFC8", "#FFD300", "#FF6A00"];
const radars: { color?: string; char?: string }[] = [];
for (let i = 65; i < 65 + skillCount; i++) {
  const radar = { color: colors[i - 65], char: String.fromCharCode(i) };
  radars.push(radar);
}
function SkillsRadial({ active }: { active: number }) {
  return (
    <>
      <div
        className="w-[clamp(350px,35vw,550px)] flex items-center border-2 border-dashed border-[orangered] rounded-lg bg-[#22222269] p-5 float-left mr-5 mb-2"
        style={{ boxShadow: "5px 5px 5px #560053" }}
      >
        <div className="flex flex-col gap-2 w-1/2">
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
                    <span>{skill.name}</span>
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
        <div className="w-1/2 h-full pointer-events-none select-none">
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
                fontSize: 8,
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

export { SkillsRadial, SkillsRadarAll };
