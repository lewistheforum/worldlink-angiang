"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import CourseCatalogSection from "@/modules/home/components/CourseCatalogSection";
import Link from "next/link";

export default function DaoTaoNgoaiNguPage() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-[#fcf9f5] pt-44 pb-16 px-6 relative flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2b49] mb-4 tracking-tight">Đào tạo Ngoại ngữ</h1>
          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm md:text-base">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang Chủ</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="text-[#1a2b49]">Đào tạo Ngoại ngữ</span>
          </div>
        </section>

        {/* Course Catalog Section */}
        <div className="relative z-10 bg-white">
          <CourseCatalogSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
