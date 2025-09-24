"use client";

import { CalendarPlus, LogIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="brand-logo" width={150} height={150} />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-[#17364A]">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#17364A]">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#17364A]">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="flex items-center text-gray-700 hover:text-[#17364A] mr-7 cursor-pointer">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </button>
            <button className="flex items-center border border-[#17364A] text-[#17364A] px-4 py-2 rounded-full cursor-pointer hover:bg-[#17364A] hover:text-white transition">
              <CalendarPlus className="w-4 h-4 mr-2" />
              Create Event
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 mt-5">
          <a href="#" className="block text-gray-700 hover:text-[#17364A]">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-[#17364A]">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-[#17364A]">
            FAQ
          </a>
          <button className="flex items-center text-gray-700 hover:text-[#17364A] mr-7 cursor-pointer">
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </button>
          <button className="w-full justify-center flex items-center border border-[#17364A] text-[#17364A] px-4 py-2 rounded-full cursor-pointer hover:bg-[#17364A] hover:text-white transition">
            <CalendarPlus className="w-4 h-4 mr-2" />
            Create Event
          </button>
        </div>
      )}
    </nav>
  );
};
