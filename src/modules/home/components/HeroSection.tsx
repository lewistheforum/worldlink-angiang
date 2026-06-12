"use client";

import Link from "next/link";
import { Check, Video, Youtube, Play, Target } from "lucide-react";
import * as motion from "framer-motion/client";
import { HERO_CONSTANTS } from "@/constants/HeroConstants";

export default function HeroSection() {
  return (
    <section id="home" className="bg-slate-50 pt-44 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">

        {/* Left Column */}
        <div className="flex-1 space-y-8 z-10 relative lg:-mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            {HERO_CONSTANTS.TITLE_PART_1} <br className="hidden md:block" />
            <span className="bg-palette-2 text-white px-5 py-1 mt-2 rounded-2xl inline-block transform -rotate-2 shadow-md">{HERO_CONSTANTS.TITLE_PART_2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl"
          >
            {HERO_CONSTANTS.DESCRIPTION_LINES[0]}
            <br />
            {HERO_CONSTANTS.DESCRIPTION_LINES[1]}
            <br />
            {HERO_CONSTANTS.DESCRIPTION_LINES[2]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-palette-1 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-xl shadow-blue-200/50 hover:shadow-blue-300/50 hover:-translate-y-0.5">
              {HERO_CONSTANTS.CTA_BUTTON}
            </button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-6"
          >
            {HERO_CONSTANTS.BENEFITS.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-palette-4 text-white rounded-full text-xs font-bold shadow-sm">
                  <Check size={12} strokeWidth={4} />
                </span>
                <span className="text-gray-800 font-bold text-sm">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Column - Floating Collage */}
        <div className="flex-1 w-full h-[500px] lg:h-[650px] relative mt-8 lg:mt-0">

          {/* Top Left - Yellow Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
            transition={{
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute top-0 left-0 w-44 h-44 lg:w-56 lg:h-56 bg-palette-3/20 rounded-[2.5rem] z-10 shadow-lg"
          >
            <div className="absolute -bottom-2 right-12 w-8 h-8 bg-palette-3/20 rounded-sm transform rotate-45"></div>
            <img src="/images/teacher2.png" alt="Teacher" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-[110%] w-auto max-w-none object-contain z-10" />

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-3 -left-3 w-10 h-10 bg-palette-1 rounded-full border-4 border-white flex items-center justify-center text-white shadow-md z-20"
            >
              <Video size={16} fill="currentColor" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
            transition={{
              scale: { duration: 0.5, delay: 0.2 },
              opacity: { duration: 0.5, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            className="absolute top-[10%] right-0 lg:right-[5%] w-40 h-40 lg:w-52 lg:h-52 bg-palette-4 rounded-full z-20 shadow-lg"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden z-10">
              <img src="/images/teacher1.png" alt="Student" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto max-w-none object-contain" />
            </div>

            {/* Floating icon (Google Drive like) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 -left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <Target size={18} className="text-palette-2" />
            </motion.div>
          </motion.div>

          {/* Bottom Left - Orange Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -20, 0] }}
            transition={{
              scale: { duration: 0.5, delay: 0.4 },
              opacity: { duration: 0.5, delay: 0.4 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
            className="absolute bottom-[15%] left-[10%] lg:left-[5%] w-40 h-40 lg:w-52 lg:h-52 bg-palette-2 rounded-full z-30 shadow-lg ring-8 ring-palette-2/20"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden z-10">
              <img src="/images/teacher3.png" alt="Student" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto max-w-none object-contain" />
            </div>

            {/* Floating icon (Play like) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute -bottom-2 -left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <Play size={18} fill="currentColor" className="text-palette-4 ml-0.5" />
            </motion.div>
          </motion.div>

          {/* Bottom Right - Blue Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -18, 0] }}
            transition={{
              scale: { duration: 0.5, delay: 0.6 },
              opacity: { duration: 0.5, delay: 0.6 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute bottom-[5%] right-[5%] lg:right-[5%] w-44 h-44 lg:w-56 lg:h-56 bg-palette-2/20 rounded-[2.5rem] z-10 shadow-lg"
          >
            <div className="absolute -bottom-3 left-12 w-8 h-8 bg-palette-2/20 rounded-sm transform rotate-45"></div>
            <img src="/images/teacher4.png" alt="Student cheering" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[110%] w-auto max-w-none object-contain z-10" />

            {/* Floating icon (Youtube like) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute bottom-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg z-20"
            >
              <Youtube size={24} className="text-red-500" />
            </motion.div>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
