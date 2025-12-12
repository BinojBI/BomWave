"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function WordPopup({ words }: { words: string[] }) {
  // 1. Initialize animation controls for complex sequences
  const controls = useAnimation();

  // The delay before the component starts disappearing
  const disappearanceDelay = 1.3;
  const disappearanceDuration = 0.6; // How long the fade/collapse takes

  useEffect(() => {
    // 2. Start the disappearance sequence after the words and paragraph animations finish
    const sequence = async () => {
      // First, we run the appearance animations (which are already defined in the children)
      // Then, we wait for the total delay time
      await new Promise((resolve) =>
        setTimeout(resolve, disappearanceDelay * 1000)
      );

      // 3. Start the collapse/fade-out animation
      await controls.start({
        height: 0,
        opacity: 0,
        // Ensure the children disappear too, if needed, though they will be hidden
        // by the parent's opacity: 0
        transition: {
          duration: disappearanceDuration,
          ease: "easeInOut",
        },
      });

      // 4. After the animation is physically complete, remove it from the DOM flow
      // This uses a final hidden state to apply 'display: none'
      await controls.start({
        display: "none",
        transition: { duration: 0 }, // Apply immediately
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      // Remove h-screen from className
      className="flex flex-col items-start justify-center bg-black px-10"
      // 5. Apply the initial state and link the controls
      initial={{ height: "100vh", opacity: 1, display: "flex" }}
      animate={controls} // Link the sequence to the component
    >
      <div className="flex flex-row items-center gap-2 text-md">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.3,
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
    </motion.div>
  );
}
