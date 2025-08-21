'use client';

import { Josefin_Sans, Montserrat } from 'next/font/google';
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Descriptions from "@/components/Descriptions";
import Image from "next/image";
import Footer from '@/components/Footer';
import { motion, useInView, useSpring } from "framer-motion";
import { useTransform } from "framer-motion";
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const programs = [
  {
    title: "Indonesia Model United Nations",
    description: "This is a short introduction about Program 1. It gives students opportunities to grow and learn.",
    image: "/danaukenangan.png",
    alt: "program",
    link: "/IMUN"
  },
  {
    title: "High School Model United Nations",
    description: "This is a short introduction about Program 2. It focuses on creativity and innovation.",
    image: "/danaukenangan.png",
    alt: "program",
    link: "/HIMUN"
  },
  {
    title: "General Training",
    description: "This is a short introduction about Program 3. It emphasizes collaboration and teamwork.",
    image: "/danaukenangan.png",
    alt: "program",
    link: "/GeneralTraining"
  },
  {
    title: "International Delegations",
    description: "This is a short introduction about Program 3. It emphasizes collaboration and teamwork.",
    image: "/danaukenangan.png",
    alt: "program",
    link: "/InternationalDelegations"
  },
  {
    title: "Mentoring Program",
    description: "This is a short introduction about Program 3. It emphasizes collaboration and teamwork.",
    image: "/danaukenangan.png",
    alt: "program",
    link: "/InternationalDelegations"
  },
];
interface AnimatedCounterProps {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
}

// Reusable animated counter component
const AnimatedCounter = ({ from, to, prefix = '', suffix = '' }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  const springValue = useSpring(from, { damping: 100, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest: number) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  return (
    <motion.h1 
      ref={ref}
      className='text-3xl sm:text-4xl font-bold text-[#1377a6]'
    >
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.h1>
  );
};

export default function Home() {
  const [moveLeft, setMoveLeft] = useState(true);
  const [moveLeft2, setMoveLeft2] = useState(true);
  const [moveLeft3, setMoveLeft3] = useState(true);
  const [moveLeft4, setMoveLeft4] = useState(true);
  const [moveLeft5, setMoveLeft5] = useState(true);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white bg-gradient-to-r from-[#feedb4]/20 via-white to-[#579cbc]/20">
        <div className="flex flex-col w-[80vw] items-center py-[1vh] gap-[1vh]">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className={`${montserrat.className} text-6xl font-bold text-black mt-[5vh] text-center`}
            style={{ letterSpacing: "0.1em" }}
          >
            WHO ARE <br></br> WE
          </motion.p>

          {/* Block 1 */}
          <div className="relative mt-[12vh] md:mt-[6vh] sm:mt-[6vh] lg:mt-[8vh] mb-15 sm:mb-7 md:mb-7 lg:mb-7 ">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft(!moveLeft)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                                  flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                                  transition-all duration-300 ${moveLeft ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-95" : "opacity-100"}`}
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
              <Descriptions>Universitas Indonesia Model United Nations Club (UI MUN Club) is one of the leading MUN Communities in the Asia-Pacific which works on skills development of its member, including negotiation, research, drafting, as well as speeches in a diplomatic manner. Several annual programs that have been going on by this organization are General Training, Mentoring, International Delegation, High School Model United Nations, and also Grand General Assembly.</Descriptions>
            </div>
          </div>

          {/* Block 2 */}
          <div className="relative mt-[6vh]">
            {/* Logo but reversed direction */}
            <div
              onClick={() => setMoveLeft2(!moveLeft2)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                                  flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                                  transition-all duration-300 ${moveLeft2 ? "opacity-0 sm:opacity-100 md:opacity-100 md:translate-x-95 lg:translate-x-95" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className={`${montserrat.className} items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl`} >VISION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft2(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                                  -translate-x-1/2 -translate-y-1/2 
                                  ${moveLeft2 ? "opacity-100" : "md:-translate-x-170 lg:-translate-x-170 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>To build a thriving and sustainable MUN community by continuously attracting new members, fostering skill development and passion, and expanding our impact through strong public engagement.</Descriptions>
            </div>
          </div>

          {/* Block 3 */}
          <div className="relative mt-[10vh]">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft3(!moveLeft3)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                                  flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                                  transition-all duration-300 ${moveLeft3 ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-95" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className={`${montserrat.className} items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl`} >MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft3(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                                  -translate-x-1/2 -translate-y-1/2
                                  ${moveLeft3 ? "opacity-100" : "md:translate-x-50 opacity-0 pointer-events-none"}`}>
              <Descriptions>Actively recruit and engage new members through inclusive and interactive programs, ensuring a strong foundation for future MUN enthusiasts and a smooth leadership transition for the next administration.</Descriptions>
            </div>
          </div>

          {/* Block 4 */}
          <div className="relative mt-[10vh]">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft4(!moveLeft4)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                                  flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                                  transition-all duration-300 ${moveLeft4 ? "opacity-0 sm:opacity-100 md:opacity-100 md:translate-x-95" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className={`${montserrat.className} items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl`} >MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft4(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                                  -translate-x-1/2 -translate-y-1/2
                                  ${moveLeft4 ? "opacity-100" : "md:-translate-x-170 lg:-translate-x-170 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Foster a stimulating and supportive environment where members can refine their public speaking, diplomacy, and leadership skills, keeping their passion for MUN alive and ensuring continuous personal growth.</Descriptions>
            </div>
          </div>

          {/* Block 5 */}
          <div className="relative mt-[10vh] mb-15">
            {/* Logo */}
            <div
              onClick={() => setMoveLeft5(!moveLeft5)}
              className={`bg-white aspect-square w-[clamp(120px,20vw,200px)] rounded-[25px]
                                  flex justify-center items-center border-3 hover:bg-gray-100 cursor-pointer
                                  transition-all duration-300 ${moveLeft5 ? "opacity-0 sm:opacity-100 md:opacity-100 md:-translate-x-95" : "opacity-100"}`}
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
            >
              <h1 className={`${montserrat.className} items-center flex justify-center items-center font-bold text-black text-2xl sm:text-2xl md:text-3xl lg:text:4xl`}>MISSION</h1>
            </div>

            {/* Description */}
            <div
              onClick={() => setMoveLeft5(false)}
              className={`absolute top-1/2 left-1/2 transition-all duration-300 transform
                                  -translate-x-1/2 -translate-y-1/2
                                  ${moveLeft5 ? "opacity-100" : "md:translate-x-50 opacity-0 pointer-events-none"}`}
            >
              <Descriptions>Foster a stimulating and supportive environment where members can refine their public speaking, diplomacy, and leadership skills, keeping their passion for MUN alive and ensuring continuous personal growth.</Descriptions>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-12 mb-15">
          <div className="w-full flex flex-col items-center py-8 md:py-12 mb-10 md:mb-15">
              <h1 className="text-4xl sm:text-5xl text-black font-bold mb-6 md:mb-8 text-center px-4">Projects</h1>
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto bg-white border-4 border-[#feedb4] rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  {/* Text Box */}
                  <Link href={programs[current].link} className="text-center cursor-pointer hover:underline">
                      <h2 className="text-xl sm:text-2xl text-black font-semibold mb-2
                                              transition-transform duration-300 ease-in-out
                                              group-hover:scale-105
                                              group-hover:text-[#D8BA3A]
                                              hover:underline">
                          {programs[current].title}
                      </h2>
                  </Link>
                  <p className="text-gray-700 text-sm sm:text-base text-center mb-4 px-2">
                      {programs[current].description}
                  </p>

                  {/* Image */}
                  <div className="w-full h-[200px] sm:h-[300px] relative rounded-xl overflow-hidden">
                      <Image
                          src={programs[current].image}
                          alt={programs[current].alt}
                          fill
                          className="object-cover"
                      />
                  </div>

                  {/* Navigation Buttons Container */}
                  <div className="flex justify-between items-center w-full mt-4 md:mt-0 md:absolute md:left-0 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
                      {/* Previous Button */}
                      <button
                          onClick={prevSlide}
                          className="bg-[#1377a6] rounded-full shadow-md p-3 hover:bg-[#094e6f] md:block"
                      >
                          <FiChevronLeft size={24} color="#ffffff" />
                      </button>
                      {/* Next Button */}
                      <button
                          onClick={nextSlide}
                          className="bg-[#1377a6] rounded-full shadow-md p-3 hover:bg-[#094e6f] md:block"
                      >
                          <FiChevronRight size={24} color="#ffffff" />
                      </button>
                  </div>
              </div>
          </div>

          <div className="w-full flex flex-col items-center py-16 ">
            <h1 className={`${montserrat.className} font-bold text-black text-4xl sm:text-5xl mb-12 text-center px-4`}>
              2025 Achievements
            </h1>

            <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-8 md:gap-12">
              {/* IMUN Block 1 */}
              <motion.div
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg w-full p-6 sm:p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src={'/backgroundalumni.png'}
                  alt='Indonesia Model United Nations'
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full md:w-1/2 mb-4 md:mb-0 md:mr-8"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                  <h1 className={`${josefinSans.className} font-bold text-black text-2xl sm:text-3xl mb-4`}>Indonesia Model United Nations</h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={180} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Delegates</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={140} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Schools</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={15} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Years</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={10} />
                      <p className='text-gray-600 text-sm sm:text-base'>Councils</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* IMUN Block 2 */}
              <motion.div
                className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-lg w-full p-6 sm:p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  src={'/backgroundalumni.png'}
                  alt='Indonesia Model United Nations'
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full md:w-1/2 mb-4 md:mb-0 md:ml-8"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                  <h1 className={`${josefinSans.className} font-bold text-black text-2xl sm:text-3xl mb-4`}>High School Model United Nations</h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={340} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Delegates</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={140} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Schools</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={10} suffix='+' />
                      <p className='text-gray-600 text-sm sm:text-base'>Years</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <AnimatedCounter from={0} to={10} />
                      <p className='text-gray-600 text-sm sm:text-base'>Councils</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* International Delegations */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full max-w-4xl mx-auto p-8 mt-12 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <h1 className={`${josefinSans.className} font-bold text-black text-3xl md:text-4xl mb-6 text-center`}>International Delegations</h1>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <AnimatedCounter from={0} to={5} suffix='+' />
                  <p className='text-gray-600 text-base md:text-lg'>Countries</p>
                </div>
                <div className="flex flex-col items-center">
                  <AnimatedCounter from={0} to={15} suffix='+' />
                  <p className='text-gray-600 text-base md:text-lg'>Awards</p>
                </div>
              </div>
            </motion.div>
          </div>
        <div className='bg-yellow-500'>
          Hello World
        </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}