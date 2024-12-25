import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingIcon1({ title, image, description, place, isInView }) {
  return (
    <motion.div
      className={`flex flex-col items-end ${place}`} 
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        src={image}
        alt={title}
        className="w-32 h-32 p-4  flex justify-end" 
      />
      <h2 className="font-semibold font-lato text-2xl text-right">{title}</h2> {/* Align text to the right */}
      <p className="text-lg font-lato text-right">{description}</p> {/* Align text to the right */}
    </motion.div>
  );
}
