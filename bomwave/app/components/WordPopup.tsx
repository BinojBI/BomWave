"use client";

import { motion } from "framer-motion";

export default function WordPopup({ words }: { words: string[] }) {
  return (
    <div className="flex flex-col items-start justify-center  h-[90vh] bg-black px-10">
      <div className="flex  flex-row items-center gap-2  text-md">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.3, // <-- each word pops after the previous one
              ease: "easeOut",
            }}
          >
            {word}
            <br />
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="text-3xl"
      >
        Brand Timelessness
      </motion.p>
    </div>
  );
}
