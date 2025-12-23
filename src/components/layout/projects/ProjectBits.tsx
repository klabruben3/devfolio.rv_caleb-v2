import { Project } from "@/components/data/types";
import { ExternalLink, Github } from "lucide-react";

function GridBackground() {
  return (
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
  );
}

function ProjectInfo({ project, index }: { project: Project; index: number }) {
  return (
    <>
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
    </>
  );
}

export { GridBackground, ProjectInfo };
