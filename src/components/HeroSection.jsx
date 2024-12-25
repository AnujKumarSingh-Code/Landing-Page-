import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ip2 from '../assets/ip2.png';
import ip4 from '../assets/ip4.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-neutral-900 text-neutral-100 font-lato  p-10 text-center ">
      <h1 className="text-6xl font-semibold mb-4 font-lato mt-14">
        Become <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">Coach</span> Today
      </h1>

      <div className="relative flex items-center justify- mt-12 h-screen">
        <Image
          src={ip4}
          alt="ip4"
          className="absolute animate-move-up-down transform rotate-[-8deg] left-[450px] rounded-lg"
        />

        <Image
          src={ip2}
          alt="ip2"
          className="absolute animate-move-up-down transform rotate-[8deg] left-[600px] rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center gap-10 mb-10">
        <button
          className="flex hover:scale-110 items-center w-52 px-5 py-2 bg-linear-primary-500 text-neutral-100 rounded-lg shadow-lg hover:opacity-90"
        >
          <FaApple className="w-10 h-10 mr-2" />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="text-xl font-semibold">App Store</p>
          </div>
        </button>

        <button
          className="flex hover:scale-110 items-center w-52 px-5 py-2 bg-linear-primary-500 text-neutral-100 rounded-lg shadow-lg hover:opacity-90"
        >
          <FaGooglePlay className="w-10 h-10 mr-3" />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-xl font-semibold">Google Play</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
