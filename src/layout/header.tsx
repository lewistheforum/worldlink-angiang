"use client";

import Link from "next/link";
import { useState } from "react";
import { HEADER_CONSTANTS } from "@/constants/LayoutConstants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const navLinks = HEADER_CONSTANTS.NAV_LINKS;

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-6 lg:px-8 py-2 flex items-center justify-between border border-gray-100">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="WorkLink An Giang Logo" className="h-12 lg:h-16 w-auto rounded-md object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              className={`font-medium transition-all duration-300 ${
                activeHash === link.href 
                  ? "text-palette-1 font-bold scale-105" 
                  : "text-gray-600 hover:text-palette-1"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/lien-he"
            className="bg-palette-1 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-palette-2 transition shadow-md"
          >
            {HEADER_CONSTANTS.CONTACT_BTN}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-900 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 p-6">
          <div className="flex justify-end mb-8">
            <button onClick={() => setOpen(false)} className="text-3xl text-gray-900">
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-2xl font-medium text-gray-900"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/lien-he"
              className="mt-4 bg-palette-1 text-white px-6 py-3 rounded-full font-semibold inline-block"
              onClick={() => setOpen(false)}
            >
              {HEADER_CONSTANTS.CONTACT_BTN}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
