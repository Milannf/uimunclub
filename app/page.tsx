'use client';

import { Montserrat } from 'next/font/google';
import { useState } from "react";
import Descriptions from "@/components/Descriptions";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveLeft2, setMoveLeft2] = useState(false);
  const [moveLeft3, setMoveLeft3] = useState(false);
  const [moveLeft4, setMoveLeft4] = useState(false);
  const [moveLeft5, setMoveLeft5] = useState(false);

  return (
    <div className="text-white overflow-x-hidden">

      {/* Section 1 */}
      <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Fixed background image (works on iOS) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/back.png"
          alt="background"
          fill
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="w-[80vw] sm:w-[100vw] md:w-[100vw] lg:w-[100vw] relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
          Universitas Indonesia
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Model United Nations Club
        </h1>
        <Image
          src="/tagline.png"
          alt="tagline"
          width={75}
          height={75}
          className="w-[90px] h-[50px] md:w-[110px] md:h-[65px] lg:w-[125px] lg:h-[75px]"
        />
      </div>
    </div>


      {/* Section 2 */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col w-[80vw] items-center py-[1vh] gap-[1vh]">

          <p
            className={`${montserrat.className} text-6xl font-bold text-black mt-[5vh] text-center`}
            style={{ letterSpacing: '0.1em' }}
          >
            WHO ARE WE
          </p>

          {/* Block 1 */}
          <div className="relative mt-[10vh]">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft(!moveLeft)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                          flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                          transition-all duration-300 ${moveLeft ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-87" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <Image 
              src="/uimunclublogo.png"
              alt='Logo'
              width={50}
              height={50}
              className="w-[70%] h-[70%] object-contain" />
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                          -translate-x-1/2 -translate-y-1/2
                          ${moveLeft ? "opacity-100" : "md:translate-x-100 lg:translate-x-100 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Isi ini dengan Vision</Descriptions>
            </div>
          </div>

          {/* Block 2 */}
          <div className="relative mt-[10vh]">
            {/* Logo but reversed direction */}
            <div
              onClick={() => setMoveLeft2(!moveLeft2)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                          flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                          transition-all duration-300 ${moveLeft2 ? "opacity-0 sm:opacity-100 md:opacity-100 md:translate-x-87" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className="items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl" >VISION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft2(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                          -translate-x-1/2 -translate-y-1/2
                          ${moveLeft2 ? "opacity-100" : "md:-translate-x-170 lg:-translate-x-170 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Isi ini dengan Vision</Descriptions>
            </div>
          </div>

          {/* Block 3 */}
          <div className="relative mt-[10vh]">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft3(!moveLeft3)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                          flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                          transition-all duration-300 ${moveLeft3 ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-87" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className="items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl" >MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft3(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                          -translate-x-1/2 -translate-y-1/2
                          ${moveLeft3 ? "opacity-100" : "md:translate-x-50 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Isi ini dengan Vision</Descriptions>
            </div>
          </div>

          {/* Block 4 */}
          <div className="relative mt-[10vh]">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft4(!moveLeft4)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                          flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                          transition-all duration-300 ${moveLeft4 ? "opacity-0 sm:opacity-100 md:opacity-100 md:translate-x-87" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className="items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl" >MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft4(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                          -translate-x-1/2 -translate-y-1/2
                          ${moveLeft4 ? "opacity-100" : "md:-translate-x-170 lg:-translate-x-170 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Isi ini dengan Vision</Descriptions>
            </div>
          </div>

          {/* Block 5 */}
          <div className="relative mt-[10vh] mb-15">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft5(!moveLeft5)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                          flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                          transition-all duration-300 ${moveLeft5 ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-87" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className="items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl" >MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft5(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                          -translate-x-1/2 -translate-y-1/2
                          ${moveLeft5 ? "opacity-100" : "md:translate-x-50 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Isi ini dengan Vision</Descriptions>
            </div>
          </div>
          

        </div>
        <div className="mt-5 bg-[#feedb4] w-full flex flex-col justify-between py-6 px-4 space-y-6">
                {/* Social Media Icons */}
                <div className="flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl text-gray-600 flex-wrap">
                  <a href="#" className="text-sky-500 hover:opacity-80 mx-1 sm:mx-6 lg:mx-8">
                    <FaTwitter />
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
      </div>
    </div>
  );
}
