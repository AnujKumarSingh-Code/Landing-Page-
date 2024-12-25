import React from "react";
import register from "../assets/register.png";
import verify from "../assets/verify.png";
import create from "../assets/create.png";
import engage from "../assets/engage.png";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-[#2d1a17] text-neutral-100 font-lato py-16">
      <h2 className="text-center text-6xl font-bold mb-12">How It Works?</h2>

      <div className="relative flex justify-center items-center px-8 gap-16">
        {/* Red Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#DB2777] to-[#F97316] -z-10 transform -translate-y-1/2"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center w-140 p-6 bg-[#2d1a17] text-white z-10">
          <div className="w-28 h-28 mb-6 flex items-center justify-center relative z-20">
            <Image src={register} alt="Register" />
          </div>
          <h3 className="text-[24px] font-bold mb-4">Register</h3>
          <p className="text-[20px] text-gray-400 text-center">
            Support for multiple languages, making health monitoring accessible and easy for users
            around the globe.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center w-140 p-6 bg-[#2d1a17] text-white z-10">
          <div className="w-28 h-28 mb-6 flex items-center justify-center relative z-20">
            <Image src={verify} alt="Verify" />
          </div>
          <h3 className="text-[24px] font-bold mb-4">Verify</h3>
          <p className="text-[20px] text-gray-400 text-center">
            Support for multiple languages, making health monitoring accessible and easy for users
            around the globe.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center w-140 p-6 bg-[#2d1a17] text-white z-10">
          <div className="w-28 h-28 mb-6 flex items-center justify-center relative z-20">
            <Image src={create} alt="Create Content" />
          </div>
          <h3 className="text-[24px] font-bold mb-4">Create Content</h3>
          <p className="text-[20px] text-gray-400 text-center">
            Support for multiple languages, making health monitoring accessible and easy for users
            around the globe.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center w-140 p-6 bg-[#2d1a17] text-white z-10">
          <div className="w-28 h-28 mb-6 flex items-center justify-center relative z-20">
            <Image src={engage} alt="Engage With Users" />
          </div>
          <h3 className="text-[24px] font-bold mb-4">Engage With Users</h3>
          <p className="text-[20px] text-gray-400 text-center">
            Support for multiple languages, making health monitoring accessible and easy for users
            around the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
