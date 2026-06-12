"use client";

import { Play, Video, CheckCircle2, Globe } from "lucide-react";
import * as motion from "framer-motion/client";
import { marketsData as markets, servicesData as services } from "@/data/popular-courses-data";
import { POPULAR_COURSES_CONSTANTS } from "@/constants/popular-courses-constants";

export default function PopularCoursesSection() {


  return (
    <section id="tu-van-du-hoc" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="flex-1 w-full space-y-8">
          <div className="text-gray-900">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              {POPULAR_COURSES_CONSTANTS.TITLE}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe size={20} className="text-palette-3" />
                <h3 className="text-xl font-bold">{POPULAR_COURSES_CONSTANTS.MARKETS_TITLE}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {markets.map((market, idx) => (
                  <span key={idx} className="bg-white hover:bg-blue-50 border border-blue-100 text-palette-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-default shadow-sm">
                    {market}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={20} className="text-palette-4" />
                <h3 className="text-xl font-bold">{POPULAR_COURSES_CONSTANTS.SERVICES_TITLE}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 font-medium text-sm md:text-base">
                    <div className="mt-1.5 min-w-[6px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-palette-3"></div>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >


            {/* Large Image */}
            <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-[6px] border-palette-1 shadow-2xl relative z-10 group bg-white">
              <img
                src="/images/consulting-main.jpg"
                alt="Study Abroad Consultation"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Decorative dots */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-palette-3 rounded-full blur-2xl opacity-40 -z-10"
            ></motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col gap-6 relative mt-12 lg:mt-0 lg:pt-16">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full h-[250px] md:h-[350px] rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl bg-white group"
          >
            <img
              src="/images/consulting-top.jpg"
              alt="Student consulting"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full h-[250px] md:h-[350px] rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl bg-white group"
          >
            <img
              src="/images/consulting-bottom.jpg"
              alt="Smiling student"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </motion.div>



          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-30 -z-10"
          ></motion.div>

        </div>

      </div>
    </section>
  );
}
