"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-end h-16">
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
              className="text-gray-800 hover:text-[#F5C300] focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
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
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#services"
            className="block text-gray-800 hover:text-[#F5C300] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="block text-gray-800 hover:text-[#F5C300] font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block text-gray-800 hover:text-[#F5C300] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
