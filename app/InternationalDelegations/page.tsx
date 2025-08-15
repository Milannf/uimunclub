'use client';

import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import { Montserrat } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});

export default function HIMUNPage() {
    return(
        <div className="text-white overflow-x-hidden">
      
      {/* Section 1 */}
      <div className="relative h-screen flex flex-col items-center justify-center">
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/conference.png"
            alt="Conference background"
            fill
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold mb-2 text-center">
            International Delegations
          </h1>
        </div>
      </div>

      {/* Section 2 */}
        <div
        className="min-h-screen flex flex-col bg-white items-center justify-center bg-center bg-cover"
        >
        <div className="mt-25 w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white aspect-square 
                        w-[clamp(180px,30vw,280px)] 
                        [@media(min-width:900px)]:w-[clamp(150px,20vw,250px)] 
                        m-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex items-center justify-center">
        <Image 
          src="/uimunclublogo.png"
          width={150}
          height={150}
          alt="UI MUN Club Logo"
        />
        </div>
        {/* Second pink box: rectangular, scales on mobile */}
        <div className="bg-white w-[80vw] max-w-[500px] m-5
            shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex flex-col items-center">
            <p className="text-black font-bold text-xl text-center mt-5 ml-5 mr-5 ">
                Universitas Indonesia for Singapore MUN 
            </p>
            <p className="text-black text-[14px] text-center m-5">
                Isi Bebas mau berapa kata dan mau apa aja karena box akan menyuasaikan dengan text
            </p> 
            <button className={`${josefinSans.className} text-1xl text-black bg-[#D8BA3A] rounded-[15px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>

        
        <div className="w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row-reverse justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white aspect-square 
                        w-[clamp(180px,30vw,280px)] 
                        [@media(min-width:900px)]:w-[clamp(150px,20vw,250px)] 
                        m-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex items-center justify-center">
        <Image 
          src="/uimunclublogo.png"
          width={150}
          height={150}
          alt="UI MUN Club Logo"
        />
        </div>
        {/* Second pink box: rectangular, scales on mobile */}
        <div className="bg-white w-[80vw] max-w-[500px] m-5
            shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex flex-col items-center">
            <p className="text-black font-bold text-xl text-center mt-5 ml-5 mr-5 ">
                Universitas Indonesia for Nanyang Technological University MUN
            </p>
            <p className="text-black text-[14px] text-center m-5">
                Isi Bebas mau berapa kata dan mau apa aja karena box akan menyuasaikan dengan text
            </p>  
            <button className={`${josefinSans.className} text-1xl text-black bg-[#D8BA3A] rounded-[15px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>

        <div className="w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white aspect-square 
                        w-[clamp(180px,30vw,280px)] 
                        [@media(min-width:900px)]:w-[clamp(150px,20vw,250px)] 
                        m-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex items-center justify-center">
        <Image 
          src="/uimunclublogo.png"
          width={150}
          height={150}
          alt="UI MUN Club Logo"
        />
        </div>
        {/* Second pink box: rectangular, scales on mobile */}
        <div className="bg-white w-[80vw] max-w-[500px] m-5
            shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex flex-col items-center">
            <p className="text-black font-bold text-xl text-center mt-5 ml-5 mr-5 ">
                Universitas Indonesia for Harvard World MUN
            </p>
            <p className="text-black text-[14px] text-center m-5">
                Isi Bebas mau berapa kata dan mau apa aja karena box akan menyuasaikan dengan text
            </p>  
            <button className={`${josefinSans.className} text-1xl text-black bg-[#D8BA3A] rounded-[15px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>
        </div>
        {/* Footer */}
                <div className="bg-[#feedb4] w-full flex flex-col justify-between py-6 px-4 space-y-6">
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
    )
}

