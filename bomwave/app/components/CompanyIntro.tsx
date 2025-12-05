"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import localfont from "next/font/local";

const garamondFont = localfont({
  src: "../../public/fonts/EBGaramond-VariableFont_wght.ttf",
});

const fGroteskFont = localfont({
  src: "../../public/fonts/fgrotesk_book.woff.ttf",
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
      className="absolute inset-0 bg-white flex flex-col justify-center text-center px-5 z-10"
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
    w-full text-center text-[#F5C300] -mt-20
    text-[40vw] leading-[1.1] md:mt-40 
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
          className={`${fGroteskFont.className} text-gray-600 font-bold mt-40 mr-3 mb-10 text-xs text-justify text-xs sm:text-xs md:text-xl max-w-[280px] md:max-w-[600px]`}
        >
          Ochre brand design & communication bureau — world class artistic
          direction meets global marketing frameworks with proven success —for
          multibilliondollar companies & boutique small businesses alike. <br />{" "}
          <br />
          Headquartered between Lisbon, Cairo and Dubai,Ochre Creative Media
          Bureau works with it's uniquealignment $\rightarrow$ design
          $\rightarrow$ delivery methodology,perfected by our founders who
          employ over 50 yearsof global marketing experience.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1.4 }}
        className="relative flex justify-end"
      >
        <div className="absolute -top-10 right-0 w-full flex justify-between text-[20vw] px-2 text-black">
          <span>/</span>
          <span>3</span>
        </div>
        <div className="w-full max-w-xs md:w-[600px] mt-10 md:mt-20 md:mr-10 md:mb-10 flex">
          <video
            src="/videos/cover.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
