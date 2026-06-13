import Link from "next/link";
import { Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/layout-constants";

const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.39-2.88 5.75-1.78 1.39-4.25 1.83-6.4 1.25-2.18-.58-3.95-2.14-4.81-4.17-.89-2.07-.75-4.57.41-6.52 1.18-1.99 3.29-3.26 5.56-3.41v4.06c-1.07.13-2.1.8-2.67 1.71-.58.91-.65 2.1-.18 3.06.46.95 1.45 1.63 2.53 1.7.99.07 2.01-.28 2.67-1.01.62-.68.96-1.61.99-2.54.08-4.48.04-8.96.06-13.44.01-.4.01-.81.01-1.22l-.01-1.03z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#0a1128] text-white pt-16 md:pt-24 pb-8 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-palette-1/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-palette-3/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-xl">
              <img src="/images/logo.jpg" alt="WorkLink An Giang Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              {FOOTER_CONSTANTS.ABOUT_TEXT}
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="https://www.facebook.com/worklink.angiang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-palette-1 hover:border-palette-1 hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@ngoaingu.worklink?_r=1&_t=ZS-970wVjWAhlt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-palette-1 hover:border-palette-1 hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white">
                <span className="sr-only">TikTok</span>
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1 lg:ml-8">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-palette-3 rounded-full"></span>
              {FOOTER_CONSTANTS.QUICK_LINKS_TITLE}
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {FOOTER_CONSTANTS.QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-palette-3 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-palette-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-palette-3 rounded-full"></span>
              {FOOTER_CONSTANTS.CONTACT_TITLE}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400 text-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-palette-1 transition-colors">
                    <Phone size={16} className="text-palette-3" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{FOOTER_CONSTANTS.PHONE_LABEL}</p>
                    <p>{FOOTER_CONSTANTS.PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-palette-1 transition-colors">
                    <Mail size={16} className="text-palette-3" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{FOOTER_CONSTANTS.EMAIL_LABEL}</p>
                    <p>{FOOTER_CONSTANTS.EMAIL}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-palette-1 transition-colors">
                  <MapPin size={16} className="text-palette-3" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{FOOTER_CONSTANTS.ADDRESS_LABEL}</p>
                  <p className="leading-relaxed">{FOOTER_CONSTANTS.ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {FOOTER_CONSTANTS.COPYRIGHT}</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-palette-3 transition-colors">{FOOTER_CONSTANTS.TERMS}</Link>
            <Link href="/privacy" className="hover:text-palette-3 transition-colors">{FOOTER_CONSTANTS.PRIVACY}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}