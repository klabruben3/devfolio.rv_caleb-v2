import { Code2, Server, Wrench } from "lucide-react";

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

export { allSkills, skillCategories, timeline };
