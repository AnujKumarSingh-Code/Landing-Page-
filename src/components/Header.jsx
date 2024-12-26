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
import A from "../assets/A.png";
import Image from "next/image";
import { motion } from "framer-motion";

const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));
  const renderWords = () => (
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
          {renderWords()}{" "}
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
    <header className="text-center bg-neutral-900 text-neutral-100  font-lato">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[400]">
        <div className="w-[750px] py-10">
          <div className="inline-flex ml-[-90] items-left gap-3 mt-40">
            <Image src={smile} alt="Smile Icon " className="justify-end h-[60px] w-[60px] mt-6" />
            <TypewriterEffectSmooth
              words={[{ text: "Hey, Awesome Coach", className: "" }]}
            />
          </div>

          <div className="mt-10 ml-[72px] align-baseline text-left">
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

          <div className="text-2xl ml-[72px] mr-10 text-left mt-10">
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

        <div className="relative mt-40">
          <Image src={A} alt="A" className="w-[485px] h-[700px] mt-[-100px] " />
        </div>
      </div>
    </header>
  );
};

export default Header;
