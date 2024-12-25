import React from "react";
import Image from "next/image";
import blogIcon from "../assets/blog.png";
import liveIcon from "../assets/live.png";
import contentIcon from "../assets/content.png";
import workoutIcon from "../assets/workout.png";

const features = [
  {
    title: "Blog Writing",
    description: "Coach can write blogs",
    icon: blogIcon,
  },
  {
    title: "Live Sessions",
    description: "Coach can create live sessions",
    icon: liveIcon,
  },
  {
    title: "Content Creation",
    description: "Coach can create contents",
    icon: contentIcon,
  },
  {
    title: "Workout Videos",
    description: "Coach can create workout videos",
    icon: workoutIcon,
  },
];

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative flex flex-col justify-center items-center font-lato bg-[#262626] text-neutral-100 p-6 rounded-[16px]  w-[300px] h-[300px] ">
      {/* Circular Image Container */}
      <div className="absolute -top-10 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain flex justify-center"
        />
      </div>
      <h3 className="text-neutral-300 text-[20px] sm:text-[29px] font-lato w-[260px] font-bold flex justify-center mt-20 sm:mt-0">
        {title}
      </h3>
      <p className="text-neutral-300 text-center font-lato text-[16px] sm:text-[20px] mt-2 flex justify-center">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-neutral-900 py-16 px-4">
      <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-100 mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center pl-[72px] pr-[72px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
