"use client";

import { FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#feedb4] w-full flex flex-col justify-between py-6 px-4 space-y-6">
      {/* Social Media Icons */}
      <div className="flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl text-gray-600 flex-wrap">
        <a href="#" className="text-black hover:opacity-80 mx-1 sm:mx-6 lg:mx-8">
          <FaXTwitter />
        </a>
        <span className="text-gray-400 mx-1 sm:mx-6 lg:mx-8">/</span>
        <a href="#" className="hover:text-gray-800 mx-4 sm:mx-6 lg:mx-8">
          <FaFacebookF />
        </a>
        <span className="text-gray-400 mx-1 sm:mx-6 lg:mx-8">/</span>
        <a href="#" className="hover:text-gray-800 mx-4 sm:mx-6 lg:mx-8">
          <FaInstagram />
        </a>
        <span className="text-gray-400 mx-1 sm:mx-6 lg:mx-8">/</span>
        <a href="#" className="hover:text-gray-800 mx-4 sm:mx-6 lg:mx-8">
          <FaDribbble />
        </a>
        <span className="text-gray-400 mx-1 sm:mx-6 lg:mx-8">/</span>
        <a href="#" className="hover:text-gray-800 mx-4 sm:mx-6 lg:mx-8">
          <FaBehance />
        </a>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-700 text-xs sm:text-sm gap-4 sm:gap-8">
        <div className="flex gap-4 sm:gap-8">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">TEAM</a>
          <a href="#" className="hover:underline">ALUMNI</a>
        </div>
        <div className="text-base sm:text-lg font-bold">UI MUN CLUB</div>
        <div className="flex gap-4 sm:gap-8">
          <a href="#" className="hover:underline">PROJECTS</a>
          <a href="#" className="hover:underline">CONTACT US</a>
        </div>
      </div>
    </div>
  );
}
