'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import B from "../assets/B.png";
import Image from 'next/image';

const MotionImage = motion(Image);

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

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.5 });

    return (
        <section
            className="bg-neutral-900 text-neutral-100 font-lato p-10 text-center mx-auto relative"
            ref={ref}
        >
            {/* Animated Header */}
            <motion.h1
                className="text-center text-4xl lg:text-6xl font-semibold mt-14"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
            >
                What’s in it for{' '}
                <span className="text-4xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
                    Coach
                </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
                className="text-center text-gray-200 mt-5 mb-10 max-w-4xl mx-auto text-lg lg:text-4xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                FitnEarnPal empowers coaches to grow and reach a global audience while providing valuable health and fitness insights to users.
            </motion.p>

            {/* Animated Image B Center-Aligned */}
            <motion.div
                className="flex justify-center mt-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Image
                    src={B}
                    alt="B"
                    className="w-[700px] lg:w-[900px] xl:w-[900px] h-auto"
                />
            </motion.div>
        </section>
    );
}
