"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/logo-images.png",
  "/images/logo-images.png",
  "/images/logo-images.png",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-play every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Full Width Image Wrapper */}
      <div className="relative w-full h-[100px] md:h-[200] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={images[index]} alt="Slide" fill priority />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
