"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="project-grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity={0.1}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-[#06b6d4]" size={24} />
            <h2 className="text-white">Selected Projects</h2>
          </div>
          <p className="max-w-3xl text-neutral-400">
            Systems built with technical depth, analytical rigor, and a focus on
            solving complex problems through clean architecture and experimental
            design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-black/70 border border-white/10 hover:border-[#06b6d4]/50 transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px #06b5d42a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner indicator */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 group-hover:border-white" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 group-hover:border-white" />

              {/* Project number */}
              <div className="absolute top-4 left-4 text-[#06b6d4]/20 font-mono text-xs">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mb-4 mt-6 text-white group-hover:text-[wheat] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mb-6 text-neutral-400">{project.description}</p>

              {/* Stats */}
              {project.stats && (
                <div className="mb-6 p-3 bg-white/5 border border-white/5 font-mono text-xs">
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-neutral-500">{key}:</span>
                        <span className="text-[#06b6d4]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-400 text-sm hover:border-[#06b6d4]/30 hover:text-[#06b6d4] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-neutral-500 hover:text-[#06b6d4] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-neutral-500 hover:text-[#06b6d4] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
