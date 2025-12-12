"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import localfont from "next/font/local";

const ppneuemontrelBoldFont = localfont({
  src: "../../public/fonts/ppneuemontreal-bold.otf",
});

const fGroteskFont = localfont({
  src: "../../public/fonts/fgrotesk_book.woff.ttf",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto px-5">
        <div className="flex items-center bg-opacity-0 justify-end h-16 pt-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-gray-800 hover:text-[#F5C300] font-medium"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-800 hover:text-[#F5C300] font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-[#F5C300] font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-[#F5C300] focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 4h36M4 20h36"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`${fGroteskFont.className} font-bold md:hidden fixed inset-0 h-screen px-10 pt-2 pb-3 flex flex-col items-start justify-center bg-white/90 text-5xl`}
        >
          <Link
            href="#services"
            className="block text-gray-400 hover:text-[#F5C300]"
            onClick={() => setIsOpen(false)}
          >
            philosophy
          </Link>
          <Link
            href="#services"
            className="block text-yellow-500 hover:text-[#F5C300]"
            onClick={() => setIsOpen(false)}
          >
            team
          </Link>
          <Link
            href="#about"
            className="block text-gray-300 hover:text-[#F5C300] "
            onClick={() => setIsOpen(false)}
          >
            portfolio
          </Link>
          <Link
            href="#contact"
            className="block text-gray-300 hover:text-[#F5C300]"
            onClick={() => setIsOpen(false)}
          >
            ochre print
          </Link>
          <Link
            href="#contact"
            className="block text-gray-300 hover:text-[#F5C300] font-bold pt-10"
            onClick={() => setIsOpen(false)}
          >
            back
          </Link>
        </div>
      )}
    </nav>
  );
}
