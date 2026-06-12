import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/LayoutConstants";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#0a1128] text-white pt-20 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logo.jpg" alt="WorkLink An Giang Logo" className="h-16 w-auto rounded-md object-contain bg-white p-1" />
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {FOOTER_CONSTANTS.ABOUT_TEXT}
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="https://www.facebook.com/worklink.angiang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-palette-1 transition">
                <span className="sr-only">Facebook</span>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">{FOOTER_CONSTANTS.CONTACT_TITLE}</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-palette-2 mt-0.5" />
                <span>{FOOTER_CONSTANTS.PHONE}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-palette-2 mt-0.5" />
                <span>{FOOTER_CONSTANTS.EMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={24} className="text-palette-2 mt-0.5 flex-shrink-0" />
                <span>{FOOTER_CONSTANTS.ADDRESS}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{FOOTER_CONSTANTS.COPYRIGHT}</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition">{FOOTER_CONSTANTS.TERMS}</Link>
            <Link href="/privacy" className="hover:text-white transition">{FOOTER_CONSTANTS.PRIVACY}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}