'use client';
import React from "react";
import mobile from "../assets/iphone.png";
import smile from "../assets/smile.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import circle from "../assets/circle.png";
import heart from "../assets/heart.png";
import heartIcon from "../assets/heartIcon.png";
import man from "../assets/man.png";
import walk from "../assets/walk.png";
import Image from "next/image";
import { motion } from "framer-motion";

const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={`dark:text-neutral-100 font-lato text-neutral-900 ${word.className}`}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`flex space-x-1 my-6 ${className}`}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      >
        <div
          className="text-5xl font-bold italic"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()} {" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`block rounded-sm w-[4px] h-16 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};

const Header = () => {
  return (
    <header className="text-center bg-neutral-900 text-neutral-100 py-10 font-lato">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[400]">
        <div className="w-[750px]">
          <div className="inline-flex items-center gap-3 ml-[-50] mt-40">
            <Image src={smile} alt="Smile Icon" />
            <TypewriterEffectSmooth
              words={[{ text: "Hey, Awesome Coach", className: "" }]}
            />
          </div>

          <div className="mt-10  ml-[72px] align-baseline text-left">
            <p className="text-3xl font-semibold inline-flex">
              Expand Your Reach, Inspire More
            </p>
            <p className="text-3xl font-semibold">
              Lives{" "}
              <span className="text-gradient bg-linear-primary-500 text-transparent bg-clip-text">
                Join FitnEarnPal Today!
              </span>
            </p>
          </div>

          <div className="text-2xl  ml-[72px] text-left mt-10">
            <p>A global platform for coaches to connect, inspire, and change lives.</p>
          </div>

          <div className="ml-[72px] mt-10 grid grid-cols-2">
            <button className="flex items-center w-52 px-5 py-2 bg-linear-primary-500 text-white rounded-lg shadow-lg hover:opacity-90">
              <FaApple className="w-10 h-10 mr-2" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </button>

            <button className="flex items-center ml-[-70] w-52 px-5 py-2 bg-linear-primary-500 text-white rounded-lg shadow-lg hover:opacity-90">
              <FaGooglePlay className="w-10 h-10 mr-3" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-40">
          <div className="relative w-90 h-90 mr-20">
            <Image src={circle} alt="circle" className="w-90 h-90 " />
            <Image
              src={mobile}
              alt="mobile"
              className="absolute top-1/2 left-72 transform -translate-x-1/2 -translate-y-1/2 w-70 h-70"
            />
            <div className="absolute top-[-70] right-[350]">
              <Image src={heart} alt="heart" className="w-28 h-28 p-2" />
            </div>
            <div className="absolute top-[-20] right-[40]">
              <Image src={man} alt="man" className="w-28 h-28 p-2 rounded-full" />
            </div>
            <div className="absolute bottom-36 right-[350]">
              <Image
                src={heartIcon}
                alt="heartIcon"
                className="w-28 h-28 p-2 rounded-full"
              />
            </div>
            <div className="absolute bottom-10 right-[40]">
              <Image
                src={walk}
                alt="walk"
                className="w-28 h-28 p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
