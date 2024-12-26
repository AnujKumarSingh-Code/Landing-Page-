import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const FloatingIcon = ({ image, title, description, isInView }) => (
    <motion.div
        className="flex flex-col items-center text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
    >
        <Image src={image} alt={title} className="w-16 h-16" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

export default FloatingIcon;
