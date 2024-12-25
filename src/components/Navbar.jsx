'use client'
import React, { useState, useEffect } from "react";
import fit from "../assets/fit.png";
import Image from "next/image";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-neutral-900"); // Set initial state to black

  // Check the scroll position to change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBgColor("transparent"); // Change to transparent after scrolling 500px
      } else {
        setBgColor("bg-neutral-800"); // Stay black on top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between pt-[13px] pr-[72px] pl-[72px] pb-[13px] ${bgColor} sticky top-0 backdrop-blur-2xl z-50`}
    >
      <div className="flex items-center h-[48px] w-[265px] gap-[12px]">
        <Image src={fit} alt="fit" className="h-[40px] w-[40px]" />
        <h1 className="text-[40px] font-lato font-bold bg-gradient-to-r from-[#DB2777] to-[#F97316] text-transparent bg-clip-text ml-2">
          FitnEarnPal
        </h1>
      </div>

      <div
        className={`flex items-center gap-[24px] h-[22px] w-[300px] ${
          bgColor === "bg-neutral-900" ? "text-neutral-100" : "text-neutral-200"
        }`}
      >
        <a href="/home" className="hover:underline text-[16px] font-lato">
          Home
        </a>
        <a href="/features" className="hover:underline text-[16px] font-lato">
          Features
        </a>
        <a href="/how-it-works" className="hover:underline text-[16px] font-lato">
          How It Works
        </a>
      </div>

      <div className="relative w-[192px] h-[48px] rounded-full bg-gradient-to-r from-[#DB2777] to-[#F97316] p-[2px]">
        <div className="flex items-center justify-center w-full h-full bg-neutral-900 rounded-full">
          <button className="text-neutral-100 text-[15px] font-medium font-lato">
            Sign Up Form
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
