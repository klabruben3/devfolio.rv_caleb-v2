"use client";

import { motion } from "motion/react";

interface Phrase {
  children: string;
  tailClass?: string;
}

export default function TypeFast({ children, tailClass }: Phrase) {
  if (typeof children !== "string") return null;
  const words = children.split(" ");

  return (
    <div className={`flex flex-wrap ${tailClass}`}>
      {words.map((word, i) => (
        <div className="flex flex-nowrap" key={`${word}-${i}`}>
          {[...word].map((letter, m) => (
            <motion.span
              key={`${word}-${m}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once: true}}
              transition={{
                duration: 0.3,
                delay: (i * word.length + m) * 0.05,
              }}
              className="block"
            >
              {letter}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </div>
      ))}
    </div>
  );
}
