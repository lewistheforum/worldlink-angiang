"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HEADER_CONSTANTS } from "@/constants/layout-constants";
import { usePathname, useRouter } from "next/navigation";
import { Locale, i18n } from "@/i18n/settings";
import { getDictionary } from "@/i18n/get-dictionary";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLocale = (i18n.locales.includes(segments[1] as any) ? segments[1] : i18n.defaultLocale) as Locale;

  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(currentLocale).then(setDict);
  }, [currentLocale]);

  const navLinks = dict ? [
    { name: dict.header.navLinks.home, href: `/${currentLocale}` },
    { name: dict.header.navLinks.aboutUs, href: `/${currentLocale}/about-us` },
    { name: dict.header.navLinks.languageTraining, href: `/${currentLocale}/language-training` },
    { name: dict.header.navLinks.studyAbroad, href: `/${currentLocale}/study-abroad` },
    { name: dict.header.navLinks.contact, href: `/${currentLocale}/contact` }
  ] : HEADER_CONSTANTS.NAV_LINKS.map(link => ({ 
    name: link.name, 
    href: `/${currentLocale}${link.href === '/' ? '' : link.href}` 
  }));

  const contactBtn = dict ? dict.header.contactBtn : HEADER_CONSTANTS.CONTACT_BTN;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newSegments = [...segments];
    if (i18n.locales.includes(newSegments[1] as any)) {
      newSegments[1] = newLocale;
    } else {
      newSegments.splice(1, 0, newLocale);
    }
    router.push(newSegments.join("/") || "/");
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-6 lg:px-8 py-2 flex items-center justify-between border border-gray-100">
        
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-2">
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

        {/* Right side: Language Selector + CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <select 
            value={currentLocale} 
            onChange={handleLanguageChange}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-palette-1 focus:border-palette-1 block p-2 outline-none cursor-pointer"
          >
            <option value="vi">🇻🇳 VI</option>
            <option value="en">🇬🇧 EN</option>
            <option value="ja">🇯🇵 JA</option>
            <option value="zh">🇨🇳 ZH</option>
            <option value="ko">🇰🇷 KO</option>
          </select>
          <Link 
            href={`/${currentLocale}/contact`}
            className="bg-palette-1 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-palette-2 transition shadow-md"
          >
            {contactBtn}
          </Link>
        </div>

        {/* Mobile menu button & lang selector */}
        <div className="flex md:hidden items-center gap-3">
          <select 
            value={currentLocale} 
            onChange={handleLanguageChange}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg block p-1.5 outline-none cursor-pointer"
          >
            <option value="vi">VI</option>
            <option value="en">EN</option>
            <option value="ja">JA</option>
            <option value="zh">ZH</option>
            <option value="ko">KO</option>
          </select>
          <button 
            className="text-gray-900 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-auto">
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
              href={`/${currentLocale}/contact`}
              className="mt-4 bg-palette-1 text-white px-6 py-3 rounded-full font-semibold inline-block"
              onClick={() => setOpen(false)}
            >
              {contactBtn}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
