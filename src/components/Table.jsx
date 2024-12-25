import React from "react";
import yoga from "../assets/yoga.png";
import medi from "../assets/medi.png";
import girl from "../assets/girl.png";
import phy from "../assets/phy.png";
import rehab from "../assets/rehab.png";
import doctor from "../assets/doctor.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Table() {
  const projects = [
    {
      imageSrc: yoga,
      title: "Yoga Trainer",
    },
    {
      imageSrc: medi,
      title: "Meditation Trainer",
    },
    {
      imageSrc: girl,
      title: "Dance Fitness Trainer",
    },
    {
      imageSrc: phy,
      title: "HIIT Trainer",
    },
    {
      imageSrc: rehab,
      title: "Boxing Trainer",
    },
    {
      imageSrc: doctor,
      title: "Strength Trainer",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-neutral-900 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="relative group p-4 "
          >
            <AnimatePresence>
              <Image
                src={item.imageSrc}
                alt={item.title}
                className="w-[306px] h-[416px] grayscale hover:grayscale-0"
              />
            </AnimatePresence>
            
          </div>
        ))}
      </div>
    </div>
  );
}
