import type { Project } from "./types";
export const projects: Project[] = [
  {
    title: "Distributed Task Orchestrator",
    description:
      "Real-time task scheduling system with microservices architecture. Features fault tolerance, concurrent execution, and monitoring dashboards.",
    tech: ["Python", "Redis", "Docker", "PostgreSQL", "WebSockets"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stats: { performance: "99.9%", latency: "< 50ms" },
  },
  {
    title: "Analytical Data Platform",
    description:
      "Interactive visualization suite for complex datasets. Real-time filtering, custom chart generation, and multi-format export capabilities.",
    tech: ["React", "D3.js", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stats: { dataPoints: "10M+", renderTime: "< 100ms" },
  },
  {
    title: "Physics Simulation Engine",
    description:
      "Lightweight 2D physics engine optimized for web. Includes collision detection, particle systems, and rigid body dynamics.",
    tech: ["JavaScript", "Canvas API", "WebGL", "GLSL"],
    github: "https://github.com",
    stats: { fps: "60+", entities: "1000+" },
  },
  {
    title: "Automated Reporting Suite",
    description:
      "Enterprise reporting toolkit with dynamic dashboards. Generates comprehensive reports from raw data with custom macros.",
    tech: ["VBA", "Excel", "Python", "PowerPoint", "SQL"],
    github: "https://github.com",
    stats: { reports: "500+", automation: "95%" },
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Educational platform for algorithm visualization. Step-by-step execution of sorting, pathfinding, and graph algorithms.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    stats: { algorithms: "25+", users: "10K+" },
  },
  {
    title: "Signal Processing Toolkit",
    description:
      "Comprehensive signal processing library for audio analysis. Features FFT, filtering, and real-time transformations.",
    tech: ["MATLAB", "Python", "NumPy", "SciPy"],
    github: "https://github.com",
    stats: { functions: "50+", accuracy: "99.5%" },
  },
];
