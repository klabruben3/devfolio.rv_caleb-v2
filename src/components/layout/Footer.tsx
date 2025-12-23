import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0D0D12] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-white">Get In Touch</h3>
            <p className="mb-6 text-neutral-400">
              Open to discussing innovative projects, technical challenges, and
              collaborative opportunities.
            </p>
            <a
              href="mailto:klabruben@gmail.com"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#06b6d4] transition-colors duration-300 group"
            >
              <Mail
                size={18}
                className="group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
              />
              <span className="group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                klabruben@gmail.com
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-white">Connect</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/klabruben3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#06b6d4] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ruben-caleb-b5243326b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#06b6d4] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} Developer Portfolio. All rights
            reserved.
          </p>
          <p className="text-neutral-600">
            Engineered with precision. Built with{" "}
            <span className="text-[#06b6d4]">purpose</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
