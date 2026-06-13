"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { marketsData as markets } from "@/data/study-abroad-data";
import { STUDY_ABROAD_CONSTANTS } from "@/constants/study-abroad-constants";

export default function StudyAbroadMarkets() {
  const [activeTab, setActiveTab] = useState(markets[0].id);

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            {STUDY_ABROAD_CONSTANTS.MARKETS.TITLE}
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column - Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveTab(market.id)}
                className={`w-full text-left px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex justify-between items-center ${
                  activeTab === market.id 
                    ? "bg-palette-1 text-white shadow-xl shadow-palette-1/20 translate-x-2" 
                    : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-100"
                }`}
              >
                {market.name}
                <ArrowRight size={20} className={`transition-transform ${activeTab === market.id ? "opacity-100" : "opacity-0 -translate-x-4"}`} />
              </button>
            ))}
            
            <div className="mt-8 p-6 bg-palette-3/10 rounded-2xl border border-palette-3/20">
              <h4 className="font-bold text-palette-1 mb-2">{STUDY_ABROAD_CONSTANTS.MARKETS.OTHER_MARKETS_TITLE}</h4>
              <p className="text-sm text-gray-600 mb-4">{STUDY_ABROAD_CONSTANTS.MARKETS.OTHER_MARKETS_DESC}</p>
              <button className="text-palette-1 font-bold text-sm hover:underline flex items-center gap-1">
                {STUDY_ABROAD_CONSTANTS.MARKETS.CONTACT_NOW} <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-2/3">
            {markets.map((market) => (
              <div 
                key={market.id} 
                className={`transition-all duration-500 ease-in-out ${
                  activeTab === market.id ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                  <div className="h-[250px] md:h-[350px] w-full relative overflow-hidden group">
                    <img 
                      src={market.image} 
                      alt={`Du học ${market.name}`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-8 text-4xl font-extrabold text-white">{STUDY_ABROAD_CONSTANTS.MARKETS.STUDY_IN} {market.name}</h3>
                  </div>
                  
                  <div className="p-8 md:p-12">
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {market.description}
                    </p>
                    
                    <h4 className="font-bold text-xl text-gray-900 mb-6">{STUDY_ABROAD_CONSTANTS.MARKETS.BENEFITS} {market.name}:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {market.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-palette-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
