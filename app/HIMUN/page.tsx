'use client';

import { Montserrat } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import Image from "next/image";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function HIMUN(){
    return(
        <div className="text-white overflow-x-hidden overflow-y-hidden">
      
      {/* Front Page*/}
      <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Fixed background image (works on iPhone) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/himun.png"
          alt="HIMUN Background"
          fill
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

        <Image
          src="/himunlogo.png"
          width={250}
          height={250}
          className="mt-5"
          alt="HIMUN Logo"
        />

        <h1
          className={`${josefinSans.className} text-xl sm:text-2xl md:text-3xl font-thin lg:text-4xl mt-5 text-center`}
        >
          &quot;The most prestigious High School-level
          <br /> Model UN conference in Indonesia&quot;
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
                <div className="flex flex-col items-center justify-center border-5 border-black text-black mb-5">
                    <h1 className={`${josefinSans.className} mt-5 text-3xl sm:text-4xl md:text-4xl text-black font-bold m-2 text-center `}>
                      Roadshow</h1>
                    <Image
                      src="/backgroundalumni.png"
                      alt="backgroundalumni"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto hover:scale-105 hover:shadow-md transition-transform m-3"
                    />
                    <h1 className={`${montserrat.className} text-[20px] sm:text-xl md:text-2xl m-5`}>H!MUN hosts annual roadshows to high schools from Bogor to North Jakarta, offering sessions like MUN 101, Mini MUN Simulations, and Tips & Tricks to help delegates prepare for conferences.</h1>
                </div>

                <div className="items-center border-5 border-black text-black flex flex-col">
                    <h1 className={`${josefinSans.className} mt-5 text-3xl sm:text-4xl md:text-4xl text-black font-bold m-2 text-center `}>
                      Pre-Event</h1>
                      <Image
                      src="/backgroundalumni.png"
                      alt="backgroundalumni"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto hover:scale-105 hover:shadow-md transition-transform m-3"
                    />
                    <h1 className={`${montserrat.className} text-[20px] sm:text-xl md:text-2xl m-5`}>Before the main-event, H!MUN hosts a Pre-Event for delegates to learn and engage with experts in each council. Our Pre-Event usually consists of an MUN 101 for crisis, press, conventional councils and unconventional councils.</h1>
                </div>              
            </div>
            <div className="flex flex-col w-[80vw] h-auto">
                <div className="mt-5 border-5 border-black items-center flex flex-col ">
                    <h1 className={`${josefinSans.className} text-black mt-5 text-3xl sm:text-4xl md:text-4xl text-black font-bold m-2 text-center `}>
                      D-Day</h1>
                      <Image
                      src="/backgroundalumni.png"
                      alt="backgroundalumni"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto hover:scale-105 hover:shadow-md transition-transform m-3"
                    />
                    <h1 className={`${montserrat.className} m-5 text-black text-[20px] sm:text-xl md:text-2xl`}>D-Day is where preparation meets diplomacy. For H!MUN 2025, it spans two days and 9 to 11 hours of intense committee sessions. Young diplomats will debate, negotiate and draft solutions to global crises, testing their skills in persuasion, strategy and teamwork. From lobbying to amendments, every moment counts. By the end, delegates will produce resolutions born from collaboration and rigorous discussion, turning ideas into action on the ultimate Model United Nations stage.</h1>
                    <div className="w-auto h-auto flex flex-col md:flex-row justify-center items-center m-5">
                        <button className={`${josefinSans.className} text-1xl text-black bg-[#D8BA3A] rounded-[15px] m-3 hover:bg-[#c0a832] hover:shadow-lg hover:scale-105`}><h1 className="m-3">DOCUMENTATION</h1></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Documentation */}
        
        
        <Footer></Footer>
    </div>
    </div>
    )
}