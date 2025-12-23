"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedGraph() {
  const [points, setPoints] = useState<string>("");

  useEffect(() => {
    const generateWave = (offset: number) => {
      const width = 400;
      const height = 400;
      const amplitude = 80;
      const frequency = 0.015;
      const pointsArray: [number, number][] = [];

      for (let x = 0; x <= width; x += 5) {
        const y = height / 2 + Math.cos(x * frequency + offset) * amplitude;
        pointsArray.push([x, y]);
      }

      return pointsArray.map((p) => p.join(",")).join(" ");
    };

    let offset = 0;
    const interval = setInterval(() => {
      offset += 0.02;
      setPoints(generateWave(offset));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full max-w-2xl"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))" }}
      >
        <motion.polyline
          points={points}
          fill="none"
          stroke="orangered"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Grid lines with neon glow */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 100}
            x2="600"
            y2={i * 100}
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="400"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
