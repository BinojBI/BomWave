import WordPopup from "./components/WordPopup";
import CompanyIntro from "./components/CompanyIntro";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import BookTable from "./components/Table";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlus, FiMic, FiChevronRight } from "react-icons/fi";

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
          className=" text-3xl sm:text-4xl md:text-4xl pl-5
          max-w-[350px] md:max-w-[600px] -mb-30 z-10"
        >
          <p
            className="
          text-gray-800 mt-20 text-left"
          >
            Dubai. Formula One. B·om Institute.
          </p>
          <p
            className="
          text-[#F5C300]
          whitespace-nowrap
        "
          >
            Hilton.
          </p>
          <p
            className="
          text-gray-800 text-3xl text-left
        "
          >
            Mantrack. Mena Biohacker. Study Permaculture. Azahara International.
            Waldorf Astoria. Redbull. Green Supreme. Cascais Permaculture
            Association. Double Tree.
          </p>
          <p
            className="
          text-[#F5C300]
        "
          >
            Ochre Magazine.
          </p>
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
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-3/4 max-w-md">
              <FiPlus className="text-white-700 mr-2" size={20} />
              <input
                type="text"
                placeholder="Ask us anything"
                className="flex-1 bg-transparent placeholder-white outline-none text-white-700"
              />
              <FiMic className="text-white-700 ml-2" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/*One Chapter Section*/}
      <div className="px-5 py-16 text-black">
        <div className="mb-12">
          <h1 className="text-2xl font-light leading-tight sm:text-5xl lg:text-6xl max-w-[300px] sm:max-w-full">
            Brand design & communication—inspired by Zen environmentalism, LIS
            Portugal
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="text-sm leading-relaxed max-w-[300px] text-gray-800">
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
          <span className="text-sm text-gray">212</span>
        </div>

        <hr className="border-gray-300 mb-8" />
      </div>

      {/* Meet the Team Section */}
      <section className="bg-white py-16 sm:py-24">
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

              <div className="absolute top-10 left-1/3 transform -translate-x-1/2 bg-white/70 backdrop-blur-sm p-3 rounded-full border border-gray-300 shadow-md">
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  Meet the team behind the camera
                </span>
              </div>
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 -mt-40 flex justify-end text-right">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug max-w-[300px] sm:max-w-full text-gray-900 z-10">
                Think of your{" "}
                <span className="text-yellow-500 font-bold">favourite</span>{" "}
                brands in the world and you immediately feel something —an
                image, a colour; parallel to a fashion or movement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSN Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative z-20 w-[40vw] max-w-[300px] sm:max-w-[400px] bg-white">
              <Image
                src="/images/ssn.png"
                alt="Close-up of a wave breaking on the sand."
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative z-10 -mt-20 sm:-mt-30 ml-20 sm:ml-40 **w-5/6** max-w-lg md:max-w-xl">
              <Image
                src="/images/beach-waves.png"
                alt="Close-up of a wave breaking on the sand."
                width={600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-8 ml-20 max-w-lg mx-auto md:mx-0 md:ml-[50%] lg:ml-[50%]">
            <p className="text-md font-light leading-snug text-gray-800">
              The greatest brands <br />
              —think local, act global
            </p>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="bg-white pt-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="relative min-h-[700px] md:min-h-[800px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/nature-blur.png"
                alt="Dark, textured background with large, blurry letters."
                layout="fill"
                objectFit="cover"
                quality={100}
                className="grayscale brightness-50"
              />
            </div>

            <div className="absolute inset-0 z-10 text-white/5 opacity-80 pointer-events-none">
              <span className="absolute top-[10%] left-[5%] text-[50vw] leading-none font-bold">
                S
              </span>
              <span className="absolute top-[40%] left-[30%] text-[40vw] leading-none font-light">
                u
              </span>
              <span className="absolute top-[30%] right-[5%] text-[60vw] leading-none font-extrabold">
                d
              </span>
              <span className="absolute bottom-[10%] right-[0%] text-[40vw] leading-none font-bold text-yellow-500">
                i
              </span>
            </div>

            <div className="relative z-20 flex flex-col h-full text-white ml-10 ">
              <div className="max-w-md mb-16 -mt-10">
                <h2 className="text-4xl sm:text-5xl font-light leading-snug">
                  Join our portfolio <br />
                  of clients <br />
                  who have <br />
                  understood the <br />
                  <span className="font-medium">
                    power of organic creative.
                  </span>
                </h2>
              </div>

              <div className="absolute top-10 right-0 text-right text-md mt-50 mr-10 text-white/40">
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

              <div className="mt-auto pt-10 flex flex-col md:flex-row md:justify-between md:items-end w-full">
                <div className="space-y-2 text-base text-black mb-8 md:mb-0">
                  <p>RUA DAS TOMADAS, CASCAIS (LIS)</p>
                  <p>00351 912 036 025</p>
                  <p>INFO@OCHRE.MEDIA</p>
                  <p className="underline hover:text-yellow-500 cursor-pointer">
                    INSTAGRAM / LINKEDIN
                  </p>
                  <p className="pt-4 underline hover:text-yellow-500 cursor-pointer">
                    COLOPHON
                  </p>
                </div>

                <div className="flex flex-col space-y-4 w-full max-w-sm">
                  <div className="flex items-center justify-between bg-white/60 py-3 hover:border-yellow-500 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <FiPlus className="w-5 h-5 mr-3 text-yellow-500" />
                      <span className="text-base font-light">
                        Newsletter — Add you email
                      </span>
                    </div>
                    <FiChevronRight className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between bg-white/60 py-3 px-3 hover:border-yellow-500 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <FiPlus className="w-5 h-5 mr-3 text-yellow-500" />
                      <span className="text-base font-light">
                        Ask us anything
                      </span>
                    </div>
                    <FiMic className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10 text-xs py-4 border-t border-white/20">
                <p>
                  CREATIVE MEDIA BUREAU <br />
                  INDEPENDENT SINCE 2020
                </p>
                <div className="flex items-center">
                  <span className="text-3xl font-extrabold text-yellow-500 mr-1">
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
