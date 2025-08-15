"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dropdownRef1 = useRef<HTMLDivElement | null>(null);
  const dropdownRef2 = useRef<HTMLDivElement | null>(null);
  const mobileHeaderRef = useRef<HTMLDivElement | null>(null); // ✅ changed name

  const menuItems = [
    {
      title: "About Us",
      options: [
        { label: "Home", link: "/" },
        { label: "Secretariat", link: "/Secretariat" },
        { label: "Alumnis", link: "/Alumnis" },
      ],
    },
    {
      title: "Projects",
      options: [
        { label: "High School Model United Nations", link: "/HIMUN" },
        { label: "Indonesia Model United Nations", link: "/IMUN" },
        { label: "General Training", link: "#" },
        { label: "International Delegations", link: "/InternationalDelegations" },
      ],
    },
    {
      title: "Contact Us",
      options: [
        { label: "Sign Up", link: "#" },
        { label: "Whatsapp", link: "#" },
      ],
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target as Node)) {
        setShowDropdown2(false);
      }
      if (mobileHeaderRef.current && !mobileHeaderRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const buttonClass = `${montserrat.className} font-bold bg-[#3685AA] text-white h-[5vh] w-[23vh] p-5 mr-10 rounded-[15px] flex items-center justify-center transition-all duration-300 hover:bg-[#2b6c8a] hover:scale-102 hover:shadow-lg`;

  return (
    <>
      {/* DESKTOP HEADER */}
      <div
        className={`hidden md:flex opacity-100 bg-white h-[12vh] w-[95vw] rounded-3xl fixed top-5 left-1/2 -translate-x-1/2 z-50 shadow-md transition-transform duration-300 ${
          scrollDir === "down"
            ? "-translate-y-[calc(12vh+1.25rem)]"
            : "translate-y-0"
        }`}
      >
        <div className="h-full w-1/4 flex justify-start items-center">
          <Image
            src="/uimunclublogo.png"
            alt="UI MUN Club Logo"
            width={50}
            height={50}
            className="ml-10"
          />
        </div>

        <div className="h-full w-3/4 flex justify-end items-center relative">
          {/* ABOUT US */}
          <div className="relative mr-10" ref={dropdownRef1}>
            <button
              className={`${montserrat.className} font-bold bg-[#3685AA] text-white h-[5vh] w-[23vh] p-5 rounded-[15px] flex items-center justify-center transition-all duration-300 hover:bg-[#2b6c8a] hover:scale-102 hover:shadow-lg`}
              onClick={() => {
                setShowDropdown((prev) => !prev);
                setShowDropdown2(false);
              }}
            >
              ABOUT US
            </button>

            {showDropdown && (
              <div className="-z-50 absolute right-1 top-0 w-[168px] transition-all duration-300">
                <Dropdown />
              </div>
            )}
          </div>

          {/* PROJECTS */}
          <div className="relative mr-10" ref={dropdownRef2}>
            <button
              className={`${montserrat.className} font-bold bg-[#3685AA] text-white h-[5vh] w-[23vh] p-5 rounded-[15px] flex items-center justify-center transition-all duration-300 hover:bg-[#2b6c8a] hover:scale-102 hover:shadow-lg`}
              onClick={() => {
                setShowDropdown2((prev) => !prev);
                setShowDropdown(false);
              }}
            >
              PROJECTS
            </button>

            {showDropdown2 && (
              <div className="-z-50 absolute right-1 top-0 w-[168px] transition-all duration-300">
                <Dropdown2 />
              </div>
            )}
          </div>

          {/* CONTACT US */}
          <button className={buttonClass}>CONTACT</button>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div ref={mobileHeaderRef} className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Image
            src="/uimunclublogo.png"
            alt="UI MUN Club Logo"
            width={40}
            height={40}
          />

          {/* Hamburger Icon */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FiX className={`${montserrat.className} text-2xl text-gray-700`} />
            ) : (
              <FiMenu className={`${montserrat.className} text-2xl text-gray-700`} />
            )}
          </button>
        </div>

        {/* Slide-down Menu with animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-3 bg-white rounded-lg overflow-hidden border">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-[#D8BA3A] text-white font-bold text-lg"
                >
                  {item.title}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {openIndex === index && (
                    <div className={`${montserrat.className} bg-white text-gray-700 px-4 py-2`}>
                      {item.options.map((option, i) => (
                        <a
                          href={option.link}
                          key={i}
                          className={`${montserrat.className} block py-2 border-b last:border-none hover:text-pink-500`}
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
