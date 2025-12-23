"use client";
import { motion } from "motion/react";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
// } from "recharts";
import { Code2, Server, Wrench } from "lucide-react";
import { ActivityHeatmap, SystemStatus } from "../features";

// Single dataset with all skills - will be split by category for visualization
const allSkills = [
  { skill: "React", category: "Frontend", value: 90 },
  { skill: "TypeScript", category: "Frontend", value: 85 },
  { skill: "Next.js", category: "Frontend", value: 88 },
  { skill: "Tailwind", category: "Frontend", value: 92 },
  { skill: "Node.js", category: "Backend", value: 82 },
  { skill: "Python", category: "Backend", value: 85 },
  { skill: "APIs", category: "Backend", value: 88 },
  { skill: "Databases", category: "Backend", value: 80 },
  { skill: "Git", category: "Other", value: 90 },
  { skill: "Docker", category: "Other", value: 75 },
  { skill: "MATLAB", category: "Other", value: 80 },
  { skill: "Excel/VBA", category: "Other", value: 85 },
];

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: allSkills.filter((s) => s.category === "Frontend"),
  },
  {
    icon: Server,
    title: "Backend",
    skills: allSkills.filter((s) => s.category === "Backend"),
  },
  {
    icon: Wrench,
    title: "Tools & Systems",
    skills: allSkills.filter((s) => s.category === "Other"),
  },
];

const timeline = [
  {
    year: "2022",
    title: "Foundation",
    description:
      "Established core programming fundamentals and system architecture principles",
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "Deepened expertise across full-stack development and computational systems",
  },
  {
    year: "2024+",
    title: "Innovation",
    description:
      "Focus on experimental interfaces, analytical tools, and scalable architectures",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-white">About</h2>
          <p className="max-w-3xl text-neutral-400">
            I build systems that blend technical rigor with experimental design.
            My work spans full-stack development, computational tools, and
            interactive experiences—always approaching problems with analytical
            thinking and a focus on elegant, scalable solutions. I'm driven by
            innovation, complexity, and the challenge of creating software that
            truly works.
          </p>
        </motion.div>

        {/* Skills Grid - Categorized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="mb-8 text-white">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-black/70 outline outline-white/20 hover:outline-white group"
                >
                  <Icon className="mb-4 text-[wheat]" size={28} />
                  <h4 className="mb-4 text-[white]">{category.title}</h4>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.skill}
                        className="flex items-center justify-between"
                      >
                        <span className="text-neutral-400 text-sm">
                          {skill.skill}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[wheat] to-transparent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.value}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              style={{
                                boxShadow: "0 0 10px wheat",
                              }}
                            />
                          </div>
                          <span className="text-white text-sm w-8 text-right">
                            {skill.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Analytics - Single Radar Chart with Multiple Overlays */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="mb-8 text-white">Skills Analytics</h3>
          <div className="p-8 bg-black/70 outline outline-white/40">
            <h4 className="mb-6 text-center text-white">
              Technical Proficiency Map
            </h4>
            <p className="text-center text-neutral-500 text-sm mb-8">
              Overlaid view: <span className="text-[#06b6d4]">Frontend</span> ·{" "}
              <span className="text-[#a855f7]">Backend</span> ·{" "}
              <span className="text-[#3b82f6]">Other</span>
            </p>
            {/* <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.1)" strokeWidth={1} />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#a1a1aa", fontSize: 13 }}
                  tickLine={false}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  tickCount={6}
                  axisLine={false}
                />
                <Radar
                  name="Frontend"
                  dataKey="frontend"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.15}
                  strokeWidth={2}
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer> */}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5"
        >
          <h3 className="mb-8 text-white">Evolution</h3>
          <div className="relative">
            {/* Timeline line with glow */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[white] to-transparent -translate-x-1/2"
              style={{
                boxShadow: "0 0 10px red",
              }}
            />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8 gap-4`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-left md:px-0 pl-8`}
                  >
                    <div className="inline-block p-6 bg-black outline-2 outline-white/40 hover:outline-[wheat]/50">
                      <div className="mb-2 uppercase tracking-widest text-white text-sm">
                        {item.year}
                      </div>
                      <h4 className="mb-2 text-[wheat]">{item.title}</h4>
                      <p className="text-neutral-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot with glow */}
                  <div
                    className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-white border-4 border-black -translate-x-1/2 z-10"
                    style={{
                      boxShadow: "0 0 15px rgba(245, 222, 179, 0.6)",
                    }}
                  />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <ActivityHeatmap />
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SystemStatus />
        </motion.div>
      </div>
    </section>
  );
}
