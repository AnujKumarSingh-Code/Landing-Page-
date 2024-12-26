import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingIcon2({ title, image, description, isInView }) {
  return (
    <motion.div
      className="flex flex-col items-start text-left max-w-xs"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        src={image}
        alt={title}
        className="w-32 h-32 p-4"
      />
      <h2 className="font-semibold font-lato text-2xl">{title}</h2>
      <p className="text-lg font-lato">{description}</p>
    </motion.div>
  );
}
