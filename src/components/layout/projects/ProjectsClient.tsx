"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import ProjectCards from "./ProjectCards";
import { GridBackground } from "@/components/features";

export default function ProjectsClient({ projects }: { projects: any[] }) {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Grid background */}
      <GridBackground />
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
              tabIndex={1}
              className="group p-8 bg-black/60 focus:bg-transparent hover:bg-transparent border border-white/10 hover:border-[#06b6d4]/50 transition-all duration-300 relative overflow-hidden"
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
              <ProjectCards project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
