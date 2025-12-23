"use client";
import { motion, animate } from "motion/react";
import { useEffect, useState } from "react";
import { StatProps } from "../data/types";
import { stats } from "../data";

function AnimatedStat({
  icon: Icon,
  label,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: StatProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (v) => setDisplayValue(v),
    });
    return controls.stop;
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-black/70 outline outline-white/20 group"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <Icon className="mb-3 text-[wheat] group-hover:text-white" size={24} />
        <div className="mb-1">
          <span className="text-3xl font-bold text-[wheat] group-hover:text-[white]">
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
          </span>
        </div>
        <div className="text-neutral-400 text-sm uppercase tracking-wider">
          {label}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/40 group-hover:border-white" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/40 group-hover:border-white" />
    </motion.div>
  );
}

export default function LiveStats() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stats-grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity={0.1}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-2 h-2 bg-[#06b6d4] animate-pulse"
              style={{ boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
            />
            <h3 className="text-white uppercase tracking-wider text-sm">
              System Metrics
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
