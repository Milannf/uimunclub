'use client';

import { Montserrat } from 'next/font/google';
import Image from "next/image";
import Footer from "@/components/Footer";

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
            src="/conference.png"
            alt="Conference background"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-2 text-center">
            Secretariat
          </h1>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="min-h-screen flex flex-col bg-white items-center justify-center bg-fixed bg-center bg-cover">
        <div className="mt-15 flex flex-col w-[80vw] justify-center items-center py-[1vh] gap-[1vh]">
        
      
      <div className="mt-10 mb-5 h-[100px] sm:h-[120px] md:h-[150px] w-[90%] sm:w-[600px] flex justify-center items-center">
        <h1
          className={`${montserrat.className} font-bold text-5xl sm:text-6xl md:text-7xl text-center text-black`}>
          Board of Executives
        </h1>
      </div>
          {/* Cards Container */}
      
        
        {/* Board of Executives*/}
      <div className="flex flex-wrap w-[100vw] sm:w-[700px] justify-center gap-5 sm:gap-8">

      {/* Card 1 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[160px] sm:w-[240px] md:w-[275px] h-[240px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="Secgen"
          width={250}
          height={250}
          className="mb-3 sm:mb-5 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[120px] sm:w-[180px] md:w-[200px]"
        />
        <p className={`${montserrat.className} text-black text-xs sm:text-base md:text-lg text-center`}>[Name]</p>
        <p className={`${montserrat.className} font-bold text-black text-sm sm:text-lg md:text-[20px] text-center`}>
          SECRETARY GENERAL
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[160px] sm:w-[240px] md:w-[275px] h-[240px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={250}
          height={250}
          className="mb-4 sm:mb-5 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[120px] sm:w-[180px] md:w-[200px]"
        />
        <p className={`${montserrat.className} text-black text-xs sm:text-base md:text-lg text-center`}>[Name]</p>
        <p className={`${montserrat.className} font-bold text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-center`}>
          Deputy Secretary General
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[160px] sm:w-[240px] md:w-[275px] h-[240px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={250}
          height={250}
          className="mb-3 sm:mb-5 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[120px] sm:w-[180px] md:w-[200px]"
        />
        <p className={`${montserrat.className} text-black text-xs sm:text-base md:text-lg text-center`}>[Name]</p>
        <p className={`${montserrat.className} font-bold text-black text-sm sm:text-lg md:text-[20px] text-center`}>
          Head of Secretary
        </p>
      </div>
      

      {/* Card 4 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[160px] sm:w-[240px] md:w-[275px] h-[240px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={250}
          height={250}
          className="mb-3 sm:mb-5 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[120px] sm:w-[180px] md:w-[200px]"
        />
        <p className={`${montserrat.className} text-black text-xs sm:text-base md:text-lg text-center`}>[Name]</p>
        <p className={`${montserrat.className} font-bold text-black text-sm sm:text-lg md:text-[20px] text-center`}>
          Head of Treasurery
        </p>
      </div>
      </div>

      {/* Externals*/}
      <div className="mt-10 h-[100px] sm:h-[120px] md:h-[150px] w-[90%] sm:w-[600px] flex justify-center items-center">
        <h1
          className={`${montserrat.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black`}
        >
          Externals
        </h1>
      </div>
          {/* Cards Container */}
      <div className="items-center justify-center flex flex-wrap h-auto w-[100vw] sm:w-[950px] gap-5 sm:gap-10">
      
      {/* Card 1 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Head of <br /> Design
        </p>
      </div>

      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          USG of <br /> Externals
        </p>
      </div>

      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Head of <br /> Public Relations
        </p>
      </div>

      
    </div>

      {/*Internals*/}

    <div className="mt-10 h-[100px] sm:h-[120px] md:h-[150px] w-[90%] sm:w-[600px] flex justify-center items-center">
      <h1
        className={`${montserrat.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black`}
      >
        Internals
      </h1>
    </div>

      {/* Cards Container */}
    <div className="items-center justify-center flex flex-wrap h-auto w-[100vw] sm:w-[950px] gap-5 sm:gap-10">
      
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Under Secretary <br /> General
        </p>
      </div>

      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Deputy Under <br /> Secretary General
        </p>
      </div>
    </div>

    {/* Academics Heading */}
    <div className="mt-10 h-[100px] sm:h-[120px] md:h-[150px] w-[90%] sm:w-[600px] flex justify-center items-center">
      <h1
        className={`${montserrat.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black`}
      >
        Academics
      </h1>
    </div>

    {/* Cards Container */}
    <div className="items-center justify-center flex flex-wrap h-auto w-[100vw] sm:w-[950px] gap-5 sm:gap-10">
      
      {/* Card 1 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Deputy Under <br /> Secretary General
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Under Secretary <br /> General
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#feedb4] flex flex-col justify-center items-center rounded-[20px] sm:rounded-[30px] border-4 sm:border-5 border-[#1377a6] w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[320px] md:h-[350px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Image
          src={"/secgen.png"}
          alt="secgen"
          width={170}
          height={170}
          className="mb-4 rounded-[12px] sm:rounded-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[130px] sm:w-[180px] md:w-[180px]"
        />
        <p className={`${montserrat.className} text-black text-[12px] sm:text-[14px] md:text-[15px] text-center`}>[Name]</p>
        <p className={`${montserrat.className} mt-3 font-bold text-black text-[15px] sm:text-[16px] md:text-[19px] text-center`}>
          Deputy Under <br /> Secretary General
        </p>
      </div>
    </div>
    </div>
    <Footer></Footer>
    

    </div>
    
    </div>
  );
}
