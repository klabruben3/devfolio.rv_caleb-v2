"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
8;

export default function SystemStatus() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const systems = [
    { name: "API", status: "operational", latency: "12ms" },
    { name: "Database", status: "operational", latency: "8ms" },
    { name: "Cache", status: "operational", latency: "2ms" },
    { name: "CDN", status: "operational", latency: "15ms" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-black outline outline-[wheat]/40 font-mono"
    >
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
              backgroundColor: "rgba(6, 182, 212, 0.8)",
            }}
          />
          <span className="text-white text-sm uppercase tracking-wider">
            System Status
          </span>
        </div>
        <span className="text-[wheat] text-xs">
          Uptime: {formatUptime(uptime)}
        </span>
      </div>

      <div className="space-y-3">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
              />
              <span className="text-neutral-400">{sys.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#06b6d4] text-xs">{sys.latency}</span>
              <span className="text-green-500 text-xs uppercase">
                {sys.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
