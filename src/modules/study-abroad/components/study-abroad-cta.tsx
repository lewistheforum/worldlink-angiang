"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import * as motion from "framer-motion/client";
import { STUDY_ABROAD_CONSTANTS } from "@/constants/study-abroad-constants";

export default function StudyAbroadCTA() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-palette-1 to-palette-2 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-palette-3 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {STUDY_ABROAD_CONSTANTS.CTA.TITLE_PART_1} <br className="hidden md:block" />
            {STUDY_ABROAD_CONSTANTS.CTA.TITLE_PART_2}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {STUDY_ABROAD_CONSTANTS.CTA.DESCRIPTION}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-palette-3 hover:bg-[#8eb800] text-palette-1 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-palette-3/20 transform hover:-translate-y-1">
              <PhoneCall size={20} />
              {STUDY_ABROAD_CONSTANTS.CTA.BUTTON_CALL}
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
              {STUDY_ABROAD_CONSTANTS.CTA.BUTTON_REGISTER}
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
