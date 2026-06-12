"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function LienHePage() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-[#fcf9f5] pt-44 pb-16 px-6 relative flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2b49] mb-4 tracking-tight">Liên hệ</h1>
          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm md:text-base">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang Chủ</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="text-[#1a2b49]">Liên hệ</span>
          </div>
        </section>

        {/* Content Section */}
        <div className="relative z-10 bg-white py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>
                <p className="text-gray-600 leading-relaxed">
                  Đừng ngần ngại liên hệ với WorkLink An Giang nếu bạn có bất kỳ thắc mắc nào về các khóa học ngoại ngữ hoặc chương trình tư vấn du học.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#5b8def] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Điện thoại</h4>
                    <p className="text-gray-600">0766 933 552</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">agiegroupag@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Địa chỉ</h4>
                    <p className="text-gray-600 leading-relaxed">
                      182/8C, Đường số 2, Khu Dân Cư Lý Thái Tổ Nối Dài,<br/>khóm Đông Thịnh 8, Phường Long Xuyên, tỉnh An Giang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#fcf9f5] rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5b8def]/50" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5b8def]/50" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5b8def]/50" placeholder="Nhập nội dung tin nhắn..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#5b8def] text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition shadow-md">
                  Gửi tin nhắn
                </button>
              </form>
            </div>

          </div>

          {/* Maps Section */}
          <div className="max-w-5xl mx-auto mt-24">
            
            <div className="w-full">
              <h3 className="text-orange-500 font-bold text-xl mb-4 border-b-2 border-orange-100 pb-2 inline-block">Trụ sở chính WorkLink An Giang</h3>
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
      </main>

      <Footer />
    </div>
  );
}
