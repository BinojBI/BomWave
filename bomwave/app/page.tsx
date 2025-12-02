import WordPopup from "./components/WordPopup";
import CompanyIntro from "./components/CompanyIntro";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-black">
      <Navbar />
      <main className="h-screen">
        <WordPopup words={["Creative", "Smart", "Impactful"]} />
        <CompanyIntro />
        <div className="w-full md:w-[600px] h-auto md:h-[100vh] md:mt-20 md:mr-20 flex self-end">
          <Image
            src="/images/tab-on-hand.png"
            alt="Company Logo"
            width={600} // max width for larger screens
            height={400} // maintains aspect ratio
            className="w-full md:w-[600px] h-auto md:h-[400px]"
            priority
          />
        </div>
      </main>
    </div>
  );
}
