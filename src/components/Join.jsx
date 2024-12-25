"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TypewriterAnimation = ({ text }) => {
    const words = text.split(" "); // Split text into words
  
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex justify-center flex-wrap"  // Ensures wrapping
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05, // Delay between each word
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-flex whitespace-nowrap mr-2"  // Space between words
            variants={{
              hidden: { opacity: 0, y: "100%" },
              visible: { opacity: 1, y: "0%" },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  
  

export default function Join() {
  const fullText =
    "FitnEarnPal is your gateway to connect with a global community of health and fitness enthusiasts, share experience and valuable knowledge, and grow their audience. As a coach you have the power to inspire, educate and motivate users worldwide by creating and sharing impactful content, workout videos, conducting live sessions and much more.";

  const [startAnimation, setStartAnimation] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true); // Start the animation when in view
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center bg-neutral-900 text-neutral-100 font-lato py-10">
      <div className=" mt-20 ml-72 mr-72">
        <h1 className=" justify items-center font-semibold font-lato text-5xl">
          Join growing community of Coaches
        </h1>

        {/* Typing animation, starts only when in view */}
        <div
          className="mt-12   font-lato text-[32px] text-neutral-300 w-[1031px] leading-[38.4px]"
          style={{ height: "240px" }} // Fixed height for alignment
        >
          {startAnimation && <TypewriterAnimation text={fullText} />}
        </div>

        <div className="mt-16">
          <button className="text-xl font-lato w-56 h-16 px-5 py-2 bg-linear-primary-500 text-white rounded-lg shadow-lg hover:opacity-80">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
