"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import localfont from "next/font/local";

const garamondFont = localfont({
  src: "../../public/fonts/EBGaramond-VariableFont_wght.ttf",
});

export default function CompanyCover() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.3,
      }}
      className="absolute inset-0 bg-white flex flex-col h-[107vh] justify-center text-center px-5 z-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: 1.6,
        }}
        className={`${garamondFont.className}
    w-full text-center text-[#F5C300]
    text-9xl lg:text-9xl md:text-9xl
    leading-tight px-4 md:mt-50
  `}
      >
        Ochre
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 2.0, // appears after the heading
        }}
        className="w-full flex justify-end md:mr-40"
      >
        <motion.p
          className="
          text-gray-700 mt-20 text-sm text-justify
          text-base sm:text-lg md:text-xl 
          max-w-[350px] md:max-w-[600px]
        "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1.4 }}
        className="w-full md:w-[600px] mt-6 md:mt-20 md:mr-10 md:mb-10 flex self-end"
      >
        <Image
          src="/images/tab-on-hand.png"
          alt="Company Logo"
          width={600} // max width for larger screens
          height={400} // maintains aspect ratio
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
