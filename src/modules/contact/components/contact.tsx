"use client";

import ContactHero from "./contact-hero";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_CONSTANTS } from "@/constants/contact-constants";

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Content Section */}
      <div className="relative z-10 bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left: Contact Info (Dark Blue) */}
          <div className="bg-palette-1 p-10 md:p-14 md:w-2/5 flex flex-col relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-palette-3/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 text-white flex flex-col h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4">{CONTACT_CONSTANTS.INFO.TITLE}</h2>
                <p className="text-white/80 mb-12 leading-relaxed">{CONTACT_CONSTANTS.INFO.DESCRIPTION}</p>
              </div>
              
              {/* Contact details */}
              <div className="space-y-8 mt-auto">
                <div className="flex items-start gap-5 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-palette-3 group-hover:text-palette-1 transition-colors text-palette-3 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{CONTACT_CONSTANTS.INFO.PHONE_LABEL}</p>
                    <p className="text-white/80 mt-1 leading-relaxed">{CONTACT_CONSTANTS.INFO.PHONE_VALUE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-palette-3 group-hover:text-palette-1 transition-colors text-palette-3 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{CONTACT_CONSTANTS.INFO.EMAIL_LABEL}</p>
                    <p className="text-white/80 mt-1 leading-relaxed">{CONTACT_CONSTANTS.INFO.EMAIL_VALUE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="mt-1 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-palette-3 group-hover:text-palette-1 transition-colors text-palette-3 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{CONTACT_CONSTANTS.INFO.ADDRESS_LABEL}</p>
                    <p className="text-white/80 mt-1 leading-relaxed">
                      {CONTACT_CONSTANTS.INFO.ADDRESS_VALUE}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (White) */}
          <div className="p-10 md:p-14 md:w-3/5 bg-white">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{CONTACT_CONSTANTS.FORM.TITLE}</h3>
            <p className="text-gray-500 mb-10">{CONTACT_CONSTANTS.FORM.DESCRIPTION}</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{CONTACT_CONSTANTS.FORM.NAME_LABEL}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-palette-1/50 transition-colors" placeholder={CONTACT_CONSTANTS.FORM.NAME_PLACEHOLDER} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{CONTACT_CONSTANTS.FORM.PHONE_LABEL}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-palette-1/50 transition-colors" placeholder={CONTACT_CONSTANTS.FORM.PHONE_PLACEHOLDER} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{CONTACT_CONSTANTS.FORM.MESSAGE_LABEL}</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-palette-1/50 transition-colors resize-none" placeholder={CONTACT_CONSTANTS.FORM.MESSAGE_PLACEHOLDER}></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-palette-1 text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg shadow-palette-1/30">
                {CONTACT_CONSTANTS.FORM.SUBMIT_BUTTON}
              </button>
            </form>
          </div>
          
        </div>

        {/* Maps Section */}
        <div className="max-w-7xl mx-auto mt-24">
          
          <div className="w-full">
            <h3 className="text-orange-500 font-bold text-xl mb-4 border-b-2 border-orange-100 pb-2 inline-block">{CONTACT_CONSTANTS.MAP.TITLE}</h3>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              <iframe 
                src="https://www.google.com/maps?q=182/8C,+Đường+số+2,+Khu+Dân+Cư+Lý+Thái+Tổ+Nối+Dài,+Long+Xuyên,+An+Giang&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
