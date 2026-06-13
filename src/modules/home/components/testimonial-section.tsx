"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { feedbacksData as feedbacks } from "@/data/testimonial-data";
import { TESTIMONIAL_CONSTANTS } from "@/constants/testimonial-constants";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [feedbacks.length]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
          {TESTIMONIAL_CONSTANTS.TITLE}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative h-[300px] flex items-center justify-center">
        {feedbacks.map((fb, idx) => {
          const offset = (idx - currentIndex + feedbacks.length) % feedbacks.length;
          
          let transform = "scale(0.85) translateX(220%)";
          let opacity = 0;
          let zIndex = 0;
          let isActive = false;

          if (offset === 0) {
            transform = "scale(1.05) translateX(0)";
            opacity = 1;
            zIndex = 30;
            isActive = true;
          } else if (offset === 1) {
            transform = "scale(0.9) translateX(115%)";
            opacity = 1;
            zIndex = 20;
          } else if (offset === feedbacks.length - 1) {
            transform = "scale(0.9) translateX(-115%)";
            opacity = 1;
            zIndex = 20;
          } else if (offset === 2) {
            transform = "scale(0.9) translateX(230%)";
            opacity = 0;
            zIndex = 10;
          } else if (offset === feedbacks.length - 2) {
            transform = "scale(0.9) translateX(-230%)";
            opacity = 0;
            zIndex = 10;
          }

          return (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 transition-all duration-700 ease-in-out w-[90%] md:w-[400px]"
              style={{
                zIndex,
                transform: `translate(-50%, -50%) ${transform}`,
                opacity,
                pointerEvents: isActive ? "auto" : "none"
              }}
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl relative h-auto min-h-[250px] flex flex-col justify-between">
                <Quote size={40} className="absolute top-6 right-6 text-orange-200 opacity-50" strokeWidth={2} />
                
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={fb.avatar} alt={fb.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{fb.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{fb.school}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-palette-3 text-palette-3" />
                      ))}
                      <span className="text-gray-500 text-xs ml-2 font-medium">({fb.rating.toFixed(1)})</span>
                    </div>
                    <div className="text-xs font-semibold text-gray-500">
                      Overall: <span className="text-palette-3 text-lg font-bold">{fb.overall}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {fb.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {feedbacks.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-palette-1" : "w-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
