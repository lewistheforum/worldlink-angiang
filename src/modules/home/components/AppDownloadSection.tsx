import Image from "next/image";
import { APP_DOWNLOAD_CONSTANTS } from "@/constants/AppDownloadConstants";

export default function AppDownloadSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto bg-palette-1 rounded-[3rem] overflow-hidden relative shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="p-12 md:p-20 flex-1 z-10 text-center md:text-left">
            <p className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-2">{APP_DOWNLOAD_CONSTANTS.SUBTITLE}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {APP_DOWNLOAD_CONSTANTS.TITLE_1} <br className="hidden md:block"/>
              {APP_DOWNLOAD_CONSTANTS.TITLE_2}
            </h2>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* App Store Button */}
              <button className="bg-black hover:bg-gray-900 text-white rounded-xl px-6 py-3 flex items-center gap-3 transition-colors border border-gray-800">
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold leading-none">Download on the</div>
                  <div className="text-lg font-bold leading-none mt-1">{APP_DOWNLOAD_CONSTANTS.APPLE_BTN}</div>
                </div>
              </button>
              
              {/* Google Play Button */}
              <button className="bg-black hover:bg-gray-900 text-white rounded-xl px-6 py-3 flex items-center gap-3 transition-colors border border-gray-800">
                <span className="text-3xl">▶️</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold leading-none">GET IT ON</div>
                  <div className="text-lg font-bold leading-none mt-1">{APP_DOWNLOAD_CONSTANTS.ANDROID_BTN}</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative min-h-[300px] md:min-h-[500px]">
            {/* Placeholder for the man in yellow jacket */}
            <div className="absolute bottom-0 right-0 md:-right-10 w-[120%] md:w-[150%] h-full flex items-end justify-end">
               <img 
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&auto=format&fit=crop&q=60" 
                alt="Happy student pointing" 
                className="object-cover object-top rounded-tl-[3rem] h-full w-full opacity-90 mix-blend-luminosity" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-palette-1 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
