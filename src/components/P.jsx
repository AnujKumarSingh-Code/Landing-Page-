'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ip3 from "../assets/ip3.png"
import circle from "../assets/circle.png"
import FloatingIcon1 from "./FloatingIcon1";
import FloatingIcon2 from "./FloatingIcon2";
import global from "../assets/global.png"
import personal from "../assets/personal.png"
import revenue from "../assets/revenue.png"
import cal from "../assets/cal.png"
import Image from "next/image";
const MotionImage = motion(Image)


export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.5 });

    return (
        <section
            className="bg-neutral-900 text-neutral-100 font-lato p-10 text-center mx-auto"
            ref={ref}
        >
            <motion.h1
                className="text-center text-6xl font-semibold mt-14"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
            >
                What Our{" "}
                <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
                    Coach
                </span>{" "}
                Say
            </motion.h1>

            <motion.p
                className="text-center text-gray-200 mt-5 mb-10 ml-64 mr-64 text-4xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                FitnEarnPal empowers coaches to grow and reach a global audience while
                providing valuable health and fitness insights to users.
            </motion.p>

            <div className="relative flex items-center justify-center mt-52 mb-28">
                <MotionImage
                    src={circle}
                    alt="circle"
                    className="w-[500px] h-[500px] object-cover "
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 1.5 }}
                />

                <MotionImage
                    src={ip3}
                    alt="mobile"
                    className="absolute ml-24 top-[-100] w-70 h-70 hover:opacity-80 "
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 1 }}
                />

                <FloatingIcon1
                    image={global}
                    title="Global Audience Access"
                    description="Helps you gain global audience"
                    place="absolute -top-10 left-44 ml-[30] floating-icon hover:scale-110 justify-end"
                    isInView={isInView}

                />
                <FloatingIcon2
                    image={personal}
                    title="Personal Brand"
                    description="Helps you gain global audience"
                    place="absolute top-[-40] right-52 floating-icon hover:scale-110"
                    isInView={isInView}
                />
                <FloatingIcon1
                    image={revenue}
                    title="Revenue Opportunities"
                    description="Helps you gain global audience"
                    place="absolute bottom-10 left-44 ml-[30]  floating-icon hover:scale-110"
                    isInView={isInView}
                />
                <FloatingIcon2
                    image={cal}
                    title="Work on Your Own Schedule"
                    description="Helps you gain global audience"
                    place="absolute bottom-10 right-32 mr-[15] floating-icon hover:scale-110"
                    isInView={isInView}
                />
            </div>
        </section>
    );
}