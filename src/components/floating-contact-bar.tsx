"use client";

import { Phone, Mail } from "lucide-react";
import * as motion from "framer-motion/client";

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.39-2.88 5.75-1.78 1.39-4.25 1.83-6.4 1.25-2.18-.58-3.95-2.14-4.81-4.17-.89-2.07-.75-4.57.41-6.52 1.18-1.99 3.29-3.26 5.56-3.41v4.06c-1.07.13-2.1.8-2.67 1.71-.58.91-.65 2.1-.18 3.06.46.95 1.45 1.63 2.53 1.7.99.07 2.01-.28 2.67-1.01.62-.68.96-1.61.99-2.54.08-4.48.04-8.96.06-13.44.01-.4.01-.81.01-1.22l-.01-1.03z"/>
  </svg>
);

const ZaloIcon = ({ size = 24, className = "" }) => (
  <span className="font-extrabold text-[15px] tracking-tight text-blue-600">Zalo</span>
);

export default function FloatingContactBar() {
  const contacts = [
    {
      name: "Zalo",
      icon: <ZaloIcon />,
      href: "https://zalo.me/0766933552", 
      bgColor: "bg-white text-blue-600",
      hoverColor: "hover:bg-blue-50 border border-blue-500/20",
    },
    {
      name: "Điện thoại",
      icon: <Phone size={22} className="text-white" fill="currentColor" />,
      href: "tel:0766933552",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "TikTok",
      icon: <TikTokIcon size={22} />,
      href: "https://www.tiktok.com/@ngoaingu.worklink?_r=1&_t=ZS-970wVjWAhlt",
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-800",
    },
    {
      name: "Email",
      icon: <Mail size={22} />,
      href: "mailto:agiegroupag@gmail.com",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600 text-white",
    },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-6 z-[100] flex flex-col gap-4">
      {contacts.map((contact, index) => (
        <motion.a
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
          key={contact.name}
          href={contact.href}
          target={contact.name !== "Điện thoại" && contact.name !== "Email" ? "_blank" : undefined}
          rel={contact.name !== "Điện thoại" && contact.name !== "Email" ? "noopener noreferrer" : undefined}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all transform hover:scale-110 hover:-translate-y-1 ${contact.bgColor} ${contact.hoverColor}`}
          aria-label={contact.name}
        >
          {contact.icon}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
            {contact.name}
            {/* Tooltip Arrow */}
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
