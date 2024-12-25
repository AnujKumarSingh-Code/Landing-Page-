'use client'
import React, { useState, useEffect } from "react";
import coach from "../assets/coach.png";
import robert from "../assets/robert.png";
import anuj1 from "../assets/anuj1.jpg";
import FloatingIcon from "./FloatingIcon1";
import Image from "next/image";

const CoachCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            image: anuj1,
            name: "Anuj",
            profession: "MERN Trainer",
            feedback:
                "Best MERN trainer but a little bit introvert but a very nice person with lots of humour",
            rating: 5,
            clients: [coach, coach, coach, robert, robert, robert]
        },
        {
            image: coach,
            name: "Coach Name",
            profession: "Yoga Trainer",
            feedback:
                "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
            rating: 4,
            clients: [anuj1, anuj1, anuj1, robert, robert, robert]
        },
        {
            image: robert,
            name: "Robert",
            profession: "Yoga Trainer",
            feedback:
                "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
            rating: 3,
            clients: [coach, coach, coach, anuj1, anuj1, anuj1]
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);



    return (
        <div className=" bg-neutral-900 text-neutral-100 font-lato py-10 ">
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-4 mt-10">
                    What our{" "}
                    <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
                        Coach
                    </span>{" "}
                    Say
                </h2>
                <p className="text-4xl mt-8">
                    FitnEarnPal empowers coaches to grow and reach a global
                    <br /> audience while providing valuable health and fitness insights to
                    users.
                </p>
            </div>


            <div className="relative flex justify-center items-center mt-28 mb-24 w-full h-full">

                <div className="text-center max-w-lg">
                    {/* Rating */}
                    <div className="text-orange-500 text-3xl mb-2">
                        {"★".repeat(testimonials[currentIndex].rating)}
                    </div>

                    {/* Fixed Height for Feedback Text */}
                    <div className="mb-4 min-h-[96px] flex items-center justify-center">
                        <p className="text-xl">{testimonials[currentIndex].feedback}</p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center mb-4">
                        <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-36 h-36 rounded-full object-cover"
                        />
                    </div>

                    {/* Name and Profession */}
                    <h3 className="text-2xl font-semibold">{testimonials[currentIndex].name}</h3>
                    <p>{testimonials[currentIndex].profession}</p>
                </div>




                <Image
                    src={testimonials[currentIndex].clients[0]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full object-cover top-0 left-96 hover:scale-125"
                />
                <Image
                    src={testimonials[currentIndex].clients[1]}
                    alt="testimonial"
                    className="absolute w-24 h-24 rounded-full object-cover left-96 top-1/2 transform -translate-x-20"
                />
                <Image
                    src={testimonials[currentIndex].clients[2]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full object-cover bottom-0 left-96 transform -translate-y-[-96px]"
                />
                <Image
                    src={testimonials[currentIndex].clients[3]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full object-cover top-0 right-96"
                />
                <Image
                    src={testimonials[currentIndex].clients[4]}
                    alt="testimonial"
                    className="absolute w-24 h-24 rounded-full object-cover top-1/2 right-96 transform -translate-x-[-50px]"
                />
                <Image
                    src={testimonials[currentIndex].clients[5]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full object-cover bottom-0 right-96 transform -translate-y-[-96px]"
                />

            </div>


            <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-6 h-6 rounded-full mx-1 ${currentIndex === index ? "bg-red-500" : "bg-neutral-800"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CoachCarousel;