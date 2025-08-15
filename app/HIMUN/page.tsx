'use client';

import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { use, useState } from "react";
import Descriptions from "@/components/Descriptions";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function(){
    return(
        <div className="text-white overflow-x-hidden overflow-y-hidden">
      
      {/* Front Page*/}
      <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Fixed background image (works on iPhone) */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/himun.png"
          alt="HIMUN Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-2 text-center">
          High School Model United Nations
        </h1>

        <img
          src="/himunlogo.png"
          width={250}
          height={250}
          className="mt-5"
          alt="HIMUN Logo"
        />

        <h1
          className={`${josefinSans.className} text-xl sm:text-2xl md:text-3xl font-thin lg:text-4xl mt-5 text-center`}
        >
          "The most prestigious High School-level
          <br /> Model UN conference in Indonesia"
        </h1>

        <button
          className={`${montserrat.className} 
            bg-[#D8BA3A] w-[125px] h-[40px] rounded-[15px] mt-5
            transition-all duration-300 ease-in-out 
            hover:bg-[#c4a62e] hover:scale-105 hover:shadow-lg`}
        >
          Read More
        </button>
      </div>
    </div>

      {/* General Definition */}
        <div className="min-h-screen flex flex-col bg-white items-center justify-start bg-center bg-cover">
        <div className="border-5 border-black w-[80vw] h-auto m-5 mt-15 flex flex-col md:flex-row justify-between items-center gap-8 px-6">
            <h1
            className={`${montserrat.className} font-bold text-black text-4xl mt-5 md:text-5xl lg:text-6xl`}>
            High School <br /> Model United <br /> Nations <br />
            <span
                className="font-thin text-3xl"
                style={{ fontFamily: "Lumios Marker, sans-serif" }}>
                H!MUN
            </span>
            </h1>
            <h1
            className={`${josefinSans.className} text-base text-black text-left mb-5 text-justify max-w-[80%] md:max-w-[60%] sm:max-w-[40%]`}>
            High School Model United Nations (H!MUN) is an annual national scale
            event held by UI MUN Club, becoming the foundation for Highschool
            students to engage in diplomacy and dive into international relations.
            Since the last decade we have welcomed over thousands of delegates with
            each iteration of H!MUN hosting between 150 to 350 participants.            
            </h1>
        </div>
        {/* Series of Events */}
        <div className="w-full h-auto">
          <h1 className={`${montserrat.className} font-bold text-black text-4xl md:text-5xl sm:text-5xl text-center flex justify-center mt-10 mb-10`}>Series of Events</h1>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center sm:items-start md:items-start lg:items-start justify-start lg:w-[1000px] md:w-[600px] sm:w-[600px] w-[400px] h-auto">
            <div className="justify-start flex flex-col w-[80vw] h-auto m-2">
                <div className="flex flex-col border-5 border-black text-black mb-5">
                    <h1 className={`${josefinSans.className} text-m sm:text-l md:text-xl text-black font-bold m-2 text-center `}>
                      Roadshow</h1>
                    <h1 className={`${montserrat.className} text-[10px] sm:text-xl md:text-2xl m-5`}>H!MUN hosts annual roadshows to high schools from Bogor to North Jakarta, offering sessions like MUN 101, Mini MUN Simulations, and Tips & Tricks to help delegates prepare for conferences.</h1>
                </div>

                <div className="border-5 border-black text-black flex flex-col">
                    <h1 className={`${josefinSans.className} text-m sm:text-l md:text-xl text-black font-bold m-2 text-center `}>
                      Pre-Event</h1>
                    <h1 className={`${montserrat.className} text-[10px] sm:text-xl md:text-2xl m-5`}>H!MUN hosts annual roadshows to high schools from Bogor to North Jakarta, offering sessions like MUN 101, Mini MUN Simulations, and Tips & Tricks to help delegates prepare for conferences.</h1>
                </div>              
            </div>
            <div className="flex flex-col w-[80vw] h-auto">
                <div className="mt-5 border-5 border-black flex flex-col ">
                    <h1 className={`${josefinSans.className} text-black text-xl sm:text-xl md:text-xl text-black font-bold m-2 text-center `}>
                      D-Day</h1>
                    <h1 className={`${montserrat.className} m-5 text-black text-[10px] sm:text-xl md:text-2xl`}>H!MUN proudly conducts an annual series of roadshows that bring the spirit of Model United Nations directly to high schools across a wide geographic range, stretching from Bogor all the way to North Jakarta. These roadshows serve as an outreach program designed to introduce students to the world of diplomacy, debate, and international affairs in an engaging and accessible way.
                    During each visit, the H!MUN team delivers</h1>
                </div>
            </div>
        </div>

        {/* Documentation */}
        <div className="w-auto h-auto flex flex-col md:flex-row justify-center items-center mt-5">
            <button className={`${josefinSans.className} font-bold text-1xl text-black bg-[#D8BA3A] rounded-[15px] m-2 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Documentation</h1></button>
        </div>
        
        {/* Footer */}
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
    )
}