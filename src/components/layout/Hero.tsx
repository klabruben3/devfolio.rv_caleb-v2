"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-white">Engineering Complex Systems</h1>
          <p className="max-w-2xl mx-auto text-neutral-400 mb-12">
            Developer focused on building analytical tools, experimental
            interfaces, and systems that solve problems through technical depth
            and clarity.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black hover:bg-transparent hover:text-[wheat] hover:outline hover:outline-white transition-[background-color] duration-300"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 outline outline-[wheat] text-[wheat] hover:bg-[wheat] hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
