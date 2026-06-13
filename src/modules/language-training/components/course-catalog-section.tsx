"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Globe } from "lucide-react";
import * as motion from "framer-motion/client";
import { languagesData as languages, allCoursesData as allCourses } from "@/data/course-catalog-data";
import { COURSE_CATALOG_CONSTANTS } from "@/constants/course-catalog-constants";
import { LANGUAGE_TRAINING_CONSTANTS } from "@/constants/language-training-constants";

export default function CourseCatalogSection({ variant = 'all' }: { variant?: 'tabs' | 'all' }) {
  const [activeTab, setActiveTab] = useState(languages[0]);

  const currentCourses = variant === 'tabs' ? allCourses[activeTab] : Object.values(allCourses).flat();

  return (
    <section id="dao-tao-ngoai-ngu" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {COURSE_CATALOG_CONSTANTS.TITLE}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {COURSE_CATALOG_CONSTANTS.DESCRIPTION}
          </p>
        </motion.div>

        {variant === 'tabs' ? (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Tabs Sidebar */}
            <div className="w-full lg:w-48 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar shrink-0">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeTab === lang
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Courses Grid */}
            <motion.div
              key={activeTab} // To trigger animation on tab change
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {currentCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group p-3"
                >
                  {/* Image Area */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Course Details */}
                  <div className="px-2 flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2 font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                        <Globe size={16} /> {course.language}
                      </div>
                      <div className="flex items-center gap-1 font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                        <Star size={16} className="text-orange-400 fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-6 line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Action */}
                    <div className="mt-auto border-t border-gray-100 pt-4 w-full">
                      <button className="w-full py-2.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-xl text-sm transition-colors duration-300">
                        {LANGUAGE_TRAINING_CONSTANTS.COURSE_CATALOG.VIEW_DETAILS}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group p-3"
              >
                {/* Image Area */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Course Details */}
                <div className="px-2 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-2 font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                      <Globe size={16} /> {course.language}
                    </div>
                    <div className="flex items-center gap-1 font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                      <Star size={16} className="text-orange-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-6 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Action */}
                  <div className="mt-auto border-t border-gray-100 pt-4 w-full">
                    <button className="w-full py-2.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-xl text-sm transition-colors duration-300">
                      {LANGUAGE_TRAINING_CONSTANTS.COURSE_CATALOG.VIEW_DETAILS}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
