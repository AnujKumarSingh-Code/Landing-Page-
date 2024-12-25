'use client'
import React, { useState, useEffect } from "react";
import coach from "../assets/coach.png";
import robert from "../assets/robert.png";
import anuj1 from "../assets/anuj1.jpg";
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
      clients: [coach, coach, coach, robert, robert, robert],
    },
    {
      image: coach,
      name: "Coach Name",
      profession: "Yoga Trainer",
      feedback:
        "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
      rating: 4,
      clients: [anuj1, anuj1, anuj1, robert, robert, robert],
    },
    {
      image: robert,
      name: "Robert",
      profession: "Yoga Trainer",
      feedback:
        "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
      rating: 3,
      clients: [coach, coach, coach, anuj1, anuj1, anuj1],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-neutral-900 text-neutral-100 font-lato py-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-10">
          What our{" "}
          <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
            Coach
          </span>{" "}
          Say
        </h2>
        <p className="text-lg md:text-2xl mt-8 px-4 md:px-0">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-center mt-20 mb-16 w-full">
        <div className="text-center max-w-md md:max-w-lg mx-4">
          {/* Rating */}
          <div className="text-orange-500 text-xl md:text-3xl mb-2">
            {"★".repeat(testimonials[currentIndex].rating)}
          </div>

          {/* Feedback */}
          <div className="mb-4 min-h-[96px] flex items-center justify-center">
            <p className="text-sm md:text-xl">
              {testimonials[currentIndex].feedback}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
            />
          </div>

          {/* Name and Profession */}
          <h3 className="text-lg md:text-2xl font-semibold">
            {testimonials[currentIndex].name}
          </h3>
          <p>{testimonials[currentIndex].profession}</p>
        </div>

        {/* Clients */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-4 mt-8">
          {testimonials[currentIndex].clients.map((client, index) => (
            <Image
              key={index}
              src={client}
              alt={`client-${index}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transform transition hover:scale-125"
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 md:w-6 md:h-6 rounded-full mx-1 ${
              currentIndex === index ? "bg-red-500" : "bg-neutral-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CoachCarousel;
