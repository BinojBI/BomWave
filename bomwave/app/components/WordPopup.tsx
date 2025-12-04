"use client";

import { motion } from "framer-motion";

export default function WordPopup({ words }: { words: string[] }) {
  return (
    <div className="flex justify-center items-center gap-2 text-md h-[90vh] dark:bg-black">
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
        </motion.span>
      ))}
    </div>
  );
}
