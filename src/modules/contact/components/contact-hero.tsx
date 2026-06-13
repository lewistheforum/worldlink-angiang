"use client";

import Link from "next/link";
import * as motion from "framer-motion/client";
import { ChevronRight, PhoneCall, MessagesSquare } from "lucide-react";
import { CONTACT_CONSTANTS } from "@/constants/contact-constants";

export default function ContactHero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden bg-palette-1 min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
          alt="Contact Background" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-palette-1 via-palette-1/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-palette-1/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-white/80 font-medium text-sm md:text-base mb-8 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
        >
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            {CONTACT_CONSTANTS.HERO.BREADCRUMB_HOME}
          </Link>
          <ChevronRight size={14} />
          <span className="text-white font-bold">{CONTACT_CONSTANTS.HERO.BREADCRUMB_CONTACT}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          {CONTACT_CONSTANTS.HERO.TITLE_PART_1} <br className="hidden md:block" />
          <span className="text-palette-3">{CONTACT_CONSTANTS.HERO.TITLE_PART_2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light"
        >
          {CONTACT_CONSTANTS.HERO.DESCRIPTION}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="flex items-center justify-center gap-2 bg-palette-3 hover:bg-[#8eb800] text-palette-1 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-xl shadow-palette-3/30">
            <PhoneCall size={20} />
            {CONTACT_CONSTANTS.HERO.BUTTON_CALL}
          </button>
          <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all">
            <MessagesSquare size={20} />
            {CONTACT_CONSTANTS.HERO.BUTTON_MESSAGE}
          </button>
        </motion.div>

      </div>
      
      {/* Decorative Wave/Shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
