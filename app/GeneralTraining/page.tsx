'use client';

import { Montserrat } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import Image from "next/image";
import Footer from '@/components/Footer';
import ReplicatedTimeline from '@/components/Timeline'; // Import the new component
import 'styled-components'; // Ensure styled-components is available
import { motion } from "framer-motion";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
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
      <div className="min-h-screen flex flex-col items-center justify-start bg-white">
        <div className="w-[80vw] h-auto m-5 mt-15 flex flex-col md:flex-row justify-center items-center gap-8 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // starts faded and slightly down
            animate={{ opacity: 1, y: 0 }} // fades in and moves up
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold text-black text-4xl mt-5 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            >
            General Training <br />
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="font-thin text-3xl"
                style={{ fontFamily: "Lumios Marker, sans-serif" }}
            >
                2025 edition
            </motion.span>
        </motion.h1>
        </div>
        <div>
            <h1
            className={`${montserrat.className} text-black text-s mt-15 mb-25 md:text-m md:w-[80vw] sm:w-[80vw] w-[80vw] lg:w-[60vw] text-justify lg:text-xl`}>
            UI MUN Club’s 2025 General Training is a foundational program for future diplomats. It’s designed to equip you with the essential skills for success in Model United Nations. You’ll master the rules of procedure, develop powerful public speaking and debating abilities, and learn how to conduct effective research on complex global issues. The curriculum also focuses on the art of resolution writing and diplomacy, teaching you how to negotiate and build consensus. This training is your first step toward becoming a confident delegate and a knowledgeable global citizen. It’s an invaluable experience that builds critical thinking and leadership skills. <br />
          </h1>
        </div>
        <div>
          <ReplicatedTimeline />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}