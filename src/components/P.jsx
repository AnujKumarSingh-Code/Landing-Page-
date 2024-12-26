'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ip3 from '../assets/ip3.png';
import circle from '../assets/circle.png';
import global from '../assets/global.png';
import personal from '../assets/personal.png';
import revenue from '../assets/revenue.png';
import cal from '../assets/cal.png';
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

            <motion.p
                className="text-center text-gray-200 mt-5 mb-10 max-w-4xl mx-auto text-lg lg:text-4xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                FitnEarnPal empowers coaches to grow and reach a global audience while providing valuable health and fitness insights to users.
            </motion.p>

            {/* Grid Layout */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-center mt-16">
                {/* Left Column */}
                <div className="flex flex-col space-y-10">
                    <FloatingIcon
                        image={global}
                        title="Global Audience Access"
                        description="Helps you gain global audience"
                        isInView={isInView}
                    />
                    <FloatingIcon
                        image={personal}
                        title="Personal Brand"
                        description="Helps you gain global audience"
                        isInView={isInView}
                    />
                </div>

                {/* Middle Column */}
                <div className="relative flex justify-center items-center">
                    {/* Circle */}
                    <MotionImage
                        src={circle}
                        alt="circle"
                        className="w-64 h-64 lg:w-[400px] lg:h-[400px] absolute"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                    {/* Mobile Image */}
                    <MotionImage
                        src={ip3}
                        alt="mobile"
                        className="flex flex-col w-64 lg:w-[350px] justify-end"
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-10">
                    <FloatingIcon
                        image={revenue}
                        title="Revenue Opportunities"
                        description="Helps you gain global audience"
                        isInView={isInView}
                    />
                    <FloatingIcon
                        image={cal}
                        title="Work on Your Own Schedule"
                        description="Helps you gain global audience"
                        isInView={isInView}
                    />
                </div>
            </div>
        </section>
    );
}
                