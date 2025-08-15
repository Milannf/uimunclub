'use client';

import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {

  return (
    <div className="relative text-white">
      {/* Fixed background image (works on iOS) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/backgroundalumni.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Section 1 */}
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">Alumnis</h1>
      </div>

      {/* Section 2 */}
      <div className="mb-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-black/75 rounded-xl p-6">
          {/* Image Column */}
          <div className="flex flex-col items-center m-5">
            <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-[15px] overflow-hidden">
              <Image
                src="/Viclin.png"
                alt="Victoria Lindy"
                fill
                className="object-cover rounded-[15px]"
                priority
              />
            </div>
            <p className={`${montserrat.className} text-[13px] mt-3`}>FISIP 2018</p>
            <p className={`${montserrat.className} text-[18px] font-bold`}>Victoria Lindy</p>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-center md:items-start md:ml-6 text-center md:text-left">
            <h1 className="mt-5 md:mt-10">
              Victoria Lindy was a remarkable MUN-er with her achievements exceeding the diplomatic world.
              Her journey extends from being Head Coach of University of Indonesia for Harvard National Model UN in 2023
              all the way to becoming the Secretary General for UI MUN Club in 2022.
            </h1>
            <h1 className={`${montserrat.className} mt-5 text-2xl font-bold`}>
              Awards & Experiences
            </h1>
            <ul className="mt-3 space-y-1">
              <li>Project Support for Boston Consulting Group (BCG)</li>
              <li>Coach for UI for Harvard National Model UN</li>
              <li>First Runner Up for Most Outstanding Student in FISIP 2022</li>
              <li>Highest Grade for EPT in Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-black/75 rounded-xl p-6">
          {/* Image Column */}
          <div className="flex flex-col items-center m-5">
            <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-[15px] overflow-hidden">
              <Image
                src="/Viclin.png"
                alt="Victoria Lindy"
                fill
                className="object-cover rounded-[15px]"
                priority
              />
            </div>
            <p className={`${montserrat.className} text-[13px] mt-3`}>FISIP 2018</p>
            <p className={`${montserrat.className} text-[18px] font-bold`}>Victoria Lindy</p>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-center md:items-start md:ml-6 text-center md:text-left">
            <h1 className="mt-5 md:mt-10">
              Victoria Lindy was a remarkable MUN-er with her achievements exceeding the diplomatic world.
              Her journey extends from being Head Coach of University of Indonesia for Harvard National Model UN in 2023
              all the way to becoming the Secretary General for UI MUN Club in 2022.
            </h1>
            <h1 className={`${montserrat.className} mt-5 text-2xl font-bold`}>
              Awards & Experiences
            </h1>
            <ul className="mt-3 space-y-1">
              <li>Project Support for Boston Consulting Group (BCG)</li>
              <li>Coach for UI for Harvard National Model UN</li>
              <li>First Runner Up for Most Outstanding Student in FISIP 2022</li>
              <li>Highest Grade for EPT in Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-black/75 rounded-xl p-6">
          {/* Image Column */}
          <div className="flex flex-col items-center m-5">
            <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-[15px] overflow-hidden">
              <Image
                src="/Viclin.png"
                alt="Victoria Lindy"
                fill
                className="object-cover rounded-[15px]"
                priority
              />
            </div>
            <p className={`${montserrat.className} text-[13px] mt-3`}>FISIP 2018</p>
            <p className={`${montserrat.className} text-[18px] font-bold`}>Victoria Lindy</p>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-center md:items-start md:ml-6 text-center md:text-left">
            <h1 className="mt-5 md:mt-10">
              Victoria Lindy was a remarkable MUN-er with her achievements exceeding the diplomatic world.
              Her journey extends from being Head Coach of University of Indonesia for Harvard National Model UN in 2023
              all the way to becoming the Secretary General for UI MUN Club in 2022.
            </h1>
            <h1 className={`${montserrat.className} mt-5 text-2xl font-bold`}>
              Awards & Experiences
            </h1>
            <ul className="mt-3 space-y-1">
              <li>Project Support for Boston Consulting Group (BCG)</li>
              <li>Coach for UI for Harvard National Model UN</li>
              <li>First Runner Up for Most Outstanding Student in FISIP 2022</li>
              <li>Highest Grade for EPT in Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-black/75 rounded-xl p-6">
          {/* Image Column */}
          <div className="flex flex-col items-center m-5">
            <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-[15px] overflow-hidden">
              <Image
                src="/Viclin.png"
                alt="Victoria Lindy"
                fill
                className="object-cover rounded-[15px]"
                priority
              />
            </div>
            <p className={`${montserrat.className} text-[13px] mt-3`}>FISIP 2018</p>
            <p className={`${montserrat.className} text-[18px] font-bold`}>Victoria Lindy</p>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-center md:items-start md:ml-6 text-center md:text-left">
            <h1 className="mt-5 md:mt-10">
              Victoria Lindy was a remarkable MUN-er with her achievements exceeding the diplomatic world.
              Her journey extends from being Head Coach of University of Indonesia for Harvard National Model UN in 2023
              all the way to becoming the Secretary General for UI MUN Club in 2022.
            </h1>
            <h1 className={`${montserrat.className} mt-5 text-2xl font-bold`}>
              Awards & Experiences
            </h1>
            <ul className="mt-3 space-y-1">
              <li>Project Support for Boston Consulting Group (BCG)</li>
              <li>Coach for UI for Harvard National Model UN</li>
              <li>First Runner Up for Most Outstanding Student in FISIP 2022</li>
              <li>Highest Grade for EPT in Indonesia</li>
            </ul>
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
  );
}
