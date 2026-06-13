"use client";

import * as motion from "framer-motion/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { carouselImagesData as carouselImages } from "@/data/virtual-mentorship-data";
import { VIRTUAL_MENTORSHIP_CONSTANTS } from "@/constants/virtual-mentorship-constants";

export default function VirtualMentorshipSection() {
  const images = carouselImages;
  
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <section id="gioi-thieu" className="bg-white py-16 md:py-20 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        {/* Left text */}
        <div className="flex-1 w-full text-gray-900 space-y-6">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          >
            {VIRTUAL_MENTORSHIP_CONSTANTS.TITLE}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-gray-700 text-lg mb-6"
          >
            <p>
              {VIRTUAL_MENTORSHIP_CONSTANTS.PARAGRAPH_1}
            </p>
            <p>
              {VIRTUAL_MENTORSHIP_CONSTANTS.PARAGRAPH_2}
            </p>
            <p>
              {VIRTUAL_MENTORSHIP_CONSTANTS.PARAGRAPH_3}
            </p>
            <p className="font-semibold italic text-gray-800">
              {VIRTUAL_MENTORSHIP_CONSTANTS.PARAGRAPH_4}
            </p>
          </motion.div>
        </div>

        {/* Right Single Image with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full relative mt-8 md:mt-0"
        >
          <div className="w-full aspect-[4/3] md:aspect-[3/2] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative z-10 group bg-white">
            {images.map((src, idx) => (
              <Image 
                key={src}
                src={src} 
                alt={`Giới thiệu WorkLink ${idx + 1}`} 
                fill
                className={`object-cover transform transition-all duration-[2000ms] ease-in-out ${
                  idx === currentImageIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } group-hover:scale-105 group-hover:duration-700`} 
              />
            ))}
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            

          </div>
          
          {/* Decorative floating dots behind the image */}
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full blur-2xl -z-10"
          ></motion.div>
          
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full blur-2xl -z-10"
          ></motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
