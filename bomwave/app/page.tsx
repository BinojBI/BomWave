import WordPopup from "./components/WordPopup";
import CompanyIntro from "./components/CompanyIntro";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import InputOverlay from "./components/InputOverlay";
import BookTable from "./components/Table";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlus, FiMic, FiChevronRight } from "react-icons/fi";
import localfont from "next/font/local";

const garamondFont = localfont({
  src: "../public/fonts/EBGaramond-VariableFont_wght.ttf",
});

const ppneuemontrelthinFont = localfont({
  src: "../public/fonts/ppneuemontreal-thin.otf",
});

const ppneuemontrelMediumFont = localfont({
  src: "../public/fonts/ppneuemontreal-medium.otf",
});

const ppneuemontrelBoldFont = localfont({
  src: "../public/fonts/ppneuemontreal-bold.otf",
});

const fGroteskFont = localfont({
  src: "../public/fonts/fgrotesk_book.woff.ttf",
});

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-white">
      <Navbar />
      <main>
        <WordPopup words={["Creative", "Smart", "Impactful"]} />
        <CompanyIntro />
      </main>
      <ImageCarousel />

      {/* About Section */}
      <div className="bg-white flex flex-col">
        <div
          className=" text-3xl sm:text-4xl md:text-4xl pl-10
          max-w-[350px] md:max-w-[600px] -mb-30 z-10 mt-30"
        >
          <span
            className={`${ppneuemontrelthinFont.className} text-gray-800 mt-20 text-left`}
          >
            Dubai. Formula One. <br />
            <span className={`${ppneuemontrelthinFont.className} font-bold`}>
              B·om Institute.
            </span>
          </span>
          <span className="text-[#F5C300] font-bold whitespace-nowrap">
            Hilton.
          </span>
          <p className={`text-gray-800 text-3xl text-left`}>
            <span
              className={`${ppneuemontrelMediumFont.className} text-gray-800 text-3xl text-left font-medium`}
            >
              Mantrack. Mena Biohacker. Study Permaculture. Azahara
              International. Waldorf Astoria.
            </span>

            <span
              className={`${ppneuemontrelBoldFont.className} text-gray-800 text-3xl text-left font-bold`}
            >
              Redbull. Green Supreme. Cascais Permaculture Association. Double
              Tree.
            </span>
          </p>
          <span
            className="
          text-[#F5C300]
        "
          >
            Ochre Magazine.
          </span>
        </div>

        <Image
          src="/images/book.png"
          alt="Company Logo"
          width={600} // max width for larger screens
          height={400} // maintains aspect ratio
          className="w-full h-auto"
        />
      </div>

      {/* Book Section */}
      <div className="bg-white flex flex-col">
        <div className=" mt-30 mb-20">
          <BookTable />
        </div>
        <div className="relative w-full max-w-xl mx-auto">
          {/* Image */}
          <Image
            src="/images/sea.png"
            alt="Company Logo"
            width={600}
            height={400}
            className="w-full h-auto "
          />

          {/* Input Field Overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <InputOverlay />
          </div>
        </div>
      </div>

      {/*One Chapter Section*/}
      <div className="px-10 py-10 mt-10 text-black">
        <div className="mb-12">
          <h1
            className={`${fGroteskFont.className} text-1xl text-[3vw] font-light pl-8 leading-tight sm:text-5xl lg:text-6xl max-w-[200px] lg:max-w-full`}
          >
            Brand design & communication—inspired by Zen environmentalism, LIS
            Portugal
          </h1>
        </div>
        <div className="flex justify-end">
          <p
            className={`${fGroteskFont.className} text-xs text-[2.5vw] pl-10 max-w-[300px] text-gray-800 text-justify leading-tight`}
          >
            Based on the enlightened philosophy and principles of the Zen
            Japanese Natural Environmentalism pioneered by Masanobu Fukuoka in
            the middle of the 20th Century —The Ochre Media Bureau is positioned
            between the elegance and sophistication of the greatest
            international brands on earth, and the nature based integration of
            whole systems understanding and mindful design into human
            activities.
          </p>
        </div>

        <div className="mt-20 flex justify-center pt-4 mb-5">
          <span className="text-xs text-[1.5vw] text-gray">212</span>
        </div>

        <hr className="border-gray-300 mb-8" />
      </div>

      {/* Meet the Team Section */}
      <section className="bg-white py-5 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative max-w-sm mx-auto shadow-xl">
              <div className="overflow-hidden">
                <Image
                  src="/images/women-with-camera.png"
                  alt="A woman holding a camera, partially covering her face with her hand."
                  width={500}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute top-28 left-1/3 transform -translate-x-1/2  p-2 px-4 rounded-full border border-gray-600">
                <span className="text-xs font-medium text-gray-800 whitespace-nowrap px-2 text-white">
                  Meet the team behind the camera
                </span>
              </div>
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 -mt-40 flex justify-end text-right">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-[300px] sm:max-w-full text-gray-900 z-10">
                Think of your{" "}
                <span className="text-yellow-500 font-normal italic">
                  {" "}
                  <br />
                  favourite
                </span>{" "}
                <br /> brands in <br />
                the world and <br /> you <br />
                immediately feel something <br /> —an image, a <br /> colour;
                parallel <br />
                to a fashion or <br />
                movement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSN Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative ml-10 z-20 w-[50vw] max-w-[300px] sm:max-w-[400px]">
              <Image
                src="/images/2dda229b9ae06debce11e8a65b616c9668b8f4f6.gif"
                alt="Close-up of a wave breaking on the sand."
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative z-10 -mt-46 sm:-mt-30 ml-15 w-7/8 max-w-lg md:max-w-xl pr-1">
              <Image
                src="/images/beach-waves.png"
                alt="Close-up of a wave breaking on the sand."
                width={600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-8 ml-15 max-w-lg mx-auto md:mx-0 md:ml-[50%] lg:ml-[50%]">
            <p
              className={`${fGroteskFont.className} text-md font-normal leading-snug text-gray-700`}
            >
              The greatest brands <br />
              —think local, act global
            </p>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="bg-white pt-40 sm:py-24 overflow-hidden">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="relative min-h-[700px] md:min-h-[800px]">
            <div className="absolute inset-0 z-0">
              <video
                src="/videos/nature-blur.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 z-10 text-white opacity-90 pointer-events-none">
              <span className="absolute top-[15%] -left-[8%] text-[50vw] leading-none font-bold ">
                S
              </span>
              <span
                className={`${ppneuemontrelMediumFont.className} absolute top-[38%] left-[20%] text-[40vw] leading-none font-extrabold`}
              >
                t
              </span>
              <span
                className={`${ppneuemontrelthinFont.className} absolute top-[32%] right-[25%] text-[60vw] leading-none **font-thin** italic`}
              >
                u
              </span>
              <span className="absolute bottom-[10%] right-[5%] text-[50vw] leading-none font-light">
                d
              </span>
              <span
                className={` ${ppneuemontrelMediumFont.className} absolute bottom-[25%] -right-[8%] text-[50vw] leading-none font-extrabold text-yellow-500`}
              >
                o
              </span>
              <span
                className={`${ppneuemontrelMediumFont.className} absolute bottom-[35%] right-[8%] text-[50vw] leading-none font-extrabold text-white`}
              >
                i
              </span>
            </div>

            <div className="relative z-20 flex flex-col h-full text-white ml-10 ">
              <div className="max-w-md mb-30 -mt-30">
                <h2 className="text-3xl sm:text-5xl font-light leading-none">
                  <span className="text-black">
                    Join our portfolio <br />
                    of clients <br />
                    who have <br />
                    understood the <br />
                  </span>
                  <span className="font-medium">
                    power of organic <br /> creative.
                  </span>
                </h2>
              </div>

              <div className="absolute top-10 right-0 text-right leading-relaxed text-md mt-45 mr-10 text-white/70">
                <p className="hover:text-yellow-500 cursor-pointer">
                  Privacy Policy
                </p>
                <p className="hover:text-yellow-500 cursor-pointer">
                  Privacy Preferences
                </p>
                <p className="hover:text-yellow-500 cursor-pointer">
                  Cookie Policy
                </p>
              </div>

              <div className="mt-auto pt-40 flex flex-col md:flex-row md:justify-between md:items-end w-full">
                <div className="space-y-1 -ml-5 mb-20 leading-tight text-base text-black font-bold mb-8 md:mb-0">
                  <p>RUA DAS TOMADAS, CASCAIS (LIS)</p>
                  <p>00351 912 036 025</p>
                  <p>INFO@OCHRE.MEDIA</p>
                  <p className=" hover:text-yellow-500 cursor-pointer">
                    INSTAGRAM / LINKEDIN
                  </p>
                  <p className="pt-4  hover:text-yellow-500 cursor-pointer">
                    COLOPHON
                  </p>
                </div>

                <div className="flex flex-col space-y-4 max-w-[300px] w-full lg:max-w-full -ml-5">
                  <div className="flex items-center rounded-full justify-between bg-black/20 pl-3 py-2 hover:border-yellow-500 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <FiPlus className="w-5 h-5 mr-3 text-white-500" />
                      <input
                        type="text"
                        placeholder="Newsletter — Add you email"
                        className="flex-1 bg-transparent placeholder-white/70 text-sm outline-none text-white-700"
                      />
                    </div>
                    <button
                      className="w-8 h-8 bg-white/30 mr-2 text-black rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                      aria-label="Next" // Always use aria-label for buttons that only contain icons
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center rounded-full justify-between bg-black/20 py-3 px-3 hover:border-yellow-500 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <FiPlus className="w-5 h-5 mr-3 text-white-500" />
                      <input
                        type="text"
                        placeholder="Ask us anything"
                        className="flex-1 bg-transparent placeholder-white/70 text-sm outline-none text-white-700"
                      />
                    </div>
                    <FiMic className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10 text-md py-4 pb-10">
                <p className="text-white/20">
                  CREATIVE MEDIA BUREAU <br />
                  INDEPENDENT SINCE 2020
                </p>
                <div className="flex items-center">
                  <span
                    className={`${garamondFont.className} text-5xl font-light text-yellow-500 mr-1`}
                  >
                    Ochre
                  </span>
                  <span className="text-lg font-light">®</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
