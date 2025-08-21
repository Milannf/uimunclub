'use client';

import { Josefin_Sans, Montserrat } from 'next/font/google';
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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

        <div className="w-[80vw] h-auto m-5 mt-15 flex flex-col md:flex-row justify-center items-center gap-8 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // starts faded and slightly down
            animate={{ opacity: 1, y: 0 }} // fades in and moves up
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold text-black text-4xl mt-5 md:text-5xl lg:text-6xl text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            >
            International Delegations <br />
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="font-thin text-3xl"
                style={{ fontFamily: "Lumios Marker, sans-serif" }}
            >
                Est 2008
            </motion.span>
        </motion.h1>
        </div>
        <div>
            <h1
            className={`${montserrat.className} text-black text-s mt-15 md:text-m md:w-[80vw] sm:w-[80vw] w-[80vw] lg:w-[60vw] text-justify lg:text-xl`}>
            UI MUN Club’s 2025 General Training is a foundational program for future diplomats. It’s designed to equip you with the essential skills for success in Model United Nations. You’ll master the rules of procedure, develop powerful public speaking and debating abilities, and learn how to conduct effective research on complex global issues. The curriculum also focuses on the art of resolution writing and diplomacy, teaching you how to negotiate and build consensus. This training is your first step toward becoming a confident delegate and a knowledgeable global citizen. It’s an invaluable experience that builds critical thinking and leadership skills. <br />
          </h1>
        </div>

        <div className="mt-25 w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white border-5 border-[#feedb4] aspect-square 
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
            <button className={`${montserrat.className} text-1xl text-black bg-[#D8BA3A] rounded-[5px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>

        
        <div className="w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row-reverse justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white border-5 border-[#feedb4] aspect-square 
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
            <button className={`${montserrat.className} text-1xl text-black bg-[#D8BA3A] rounded-[5px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>

        <div className="w-[90vw] flex flex-col [@media(min-width:900px)]:flex-row justify-center items-center">
        {/* First pink box: bigger on small screens, square, shrinks smoothly */}
        <div className="bg-white border-5 border-[#feedb4] aspect-square 
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
            <button className={`${montserrat.className} text-1xl text-black bg-[#D8BA3A] rounded-[5px] mb-4 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-2">Register</h1></button>
            </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
    )
}

