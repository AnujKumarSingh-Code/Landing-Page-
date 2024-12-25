'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";



function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        " grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-12 px-6",
        className
      )}
      
    >
      {items
        .filter(item => item.imageSrc) 
        .map((item, idx) => (
          <a
            href={item?.link || "#"}
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full  bg-zinc-100 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardImage imageSrc={item.imageSrc} alt={`Image for ${item.title}`} />
              {item.title && <CardTitle>{item.title}</CardTitle>}
              {item.description && <CardDescription>{item.description}</CardDescription>}
            </Card>
          </a>
        ))}
    </div>
  );
};



export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col items-center justify-center w-80 p-6 bg-zinc-200 text-white rounded-3xl h-full border-transparent group-hover:shadow-lg transition-shadow duration-300",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("flex items-center justify-center text-white tracking-wide mt-4 text-2xl font-bold", className)}>
      {children}
    </h4>)
  );
};

export const CardImage = ({ className, imageSrc, alt }) => {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={cn(
        "w-28 h-28 ml-14 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300",
        className
      )}
    />
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("flex items-center justify-center tracking-wide leading-relaxed  text-xl text-white text-center mt-2", className)}>
      {children}
    </p>)
  );
};

