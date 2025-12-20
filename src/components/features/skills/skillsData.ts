import type { Skills } from "./skillTypes";

const skillsByIndustry: Skills = {
  "Front-End Web Development": {
    skills: [
      { name: "HTML", level: 97, logo: "skills/html5.svg", color: "#E34F26" },
      { name: "CSS", level: 92, logo: "skills/css.svg", color: "#663399" },
      {
        name: "JavaScript",
        level: 95,
        logo: "skills/javascript.svg",
        color: "#F7DF1E",
      },
      { name: "React", level: 92, logo: "skills/react.svg", color: "#61DAFB" },
      {
        name: "Tailwind CSS",
        level: 90,
        logo: "skills/tailwindcss.svg",
        color: "#06B6D4",
      },
    ],
    description:
      "Modern, responsive interfaces built with React and Tailwind, focusing on clean architecture, reusable components, and smooth user interactions",
  },

  "Back-End Development": {
    skills: [
      {
        name: "API Fetching",
        level: 65,
        logo: "skills/network.svg",
        color: "#3b82f6",
      },
      {
        name: "Async / Await",
        level: 70,
        logo: "skills/clock-fading.svg",
        color: "#8b5cf6",
      },
      {
        name: "JSON Handling",
        level: 75,
        logo: "skills/braces.svg",
        color: "#10b981",
      },
      {
        name: "Next.js API Routes",
        level: 45,
        logo: "skills/nextdotjs.svg",
        color: "#000000",
      },
      {
        name: "Server Concepts",
        level: 30,
        logo: "skills/server.svg",
        color: "#6b7280",
      },
    ],
    description:
      "Light backend capabilities using Next.js route handlers, async workflows, and structured data handling. Focused on fetching, transforming, and delivering data rather than building full server architectures.",
  },

  "Game Development": {
    skills: [
      {
        name: "Godot",
        level: 78,
        logo: "skills/godotengine.svg",
        color: "#478CBF",
      },
      { name: "SFML", level: 75, logo: "skills/sfml.svg", color: "#8CC445" },
      {
        name: "C++",
        level: 90,
        logo: "skills/cplusplus.svg",
        color: "#00599C",
      },
      {
        name: "Game Design",
        level: 82,
        logo: "skills/gamepad-2.svg",
        color: "#f59e0b",
      },
    ],
    description:
      "Gameplay systems designed with C++, Godot, and SFML, blending performance, physics, and creative mechanics to deliver engaging player experiences",
  },

  "Productivity / Microsoft Apps": {
    skills: [
      { name: "Excel", level: 40, logo: "skills/excel.png", color: "#217346" },
      { name: "Word", level: 55, logo: "skills/word.png", color: "#2b579a" },
      {
        name: "PowerPoint",
        level: 50,
        logo: "skills/powerpoint.png",
        color: "#d24726",
      },
      {
        name: "Outlook",
        level: 45,
        logo: "skills/outlook.png",
        color: "#0072c6",
      },
      {
        name: "Data Analysis",
        level: 50,
        logo: "skills/chart-no-axes-combined.svg",
        color: "#10b981",
      },
    ],
    description:
      "Efficient workflows powered through Excel, Word, PowerPoint, and Outlook, using automation and structured design to simplify information and decision-making",
  },

  "Other Technical Skills": {
    skills: [
      {
        name: "MATLAB",
        level: 65,
        logo: "skills/matlab.png",
        color: "#e67e22",
      },
      {
        name: "Python",
        level: 95,
        logo: "skills/python.svg",
        color: "#3776AB",
      },
      {
        name: "Arduino",
        level: 40,
        logo: "skills/arduino.svg",
        color: "#00878F",
      },
      {
        name: "Hardware Integration",
        level: 45,
        logo: "skills/cpu.svg",
        color: "#6b7280",
      },
      {
        name: "Scripting",
        level: 92,
        logo: "skills/file-terminal.svg",
        color: "#9333ea",
      },
    ],
    description:
      "A mix of software and hardware capabilities—from Python scripting and MATLAB analysis to Arduino prototyping—connecting digital logic with real-world systems",
  },
};

export { skillsByIndustry };
